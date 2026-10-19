<template>
	<k-field
		:name="name"
		:label="label"
		class="k-isbn-field"
	>
		<template #options>
			<k-button
				icon="edit-line"
				size="xs"
				variant="filled"
				:disabled="disabled"
				@click="openDrawer"
			>Edit…</k-button>
		</template>

		<k-empty
			v-if="!hasContent"
			:text="$t('isbn.field.empty')"
			icon="isbn"
			@click="openDrawer"
		/>

		<div v-else class="k-isbn-preview">
			<svg
				ref="barcode"
				class="k-isbn-preview-svg"
			/>
		</div>
	</k-field>
</template>

<script>
import JsBarcode from "jsbarcode";

export default {
	name: "IsbnField",

	props: {
		name: String,
		label: String,
		value: {
			type: String,
			default: ""
		},
		format: {
			type: String,
			default: "ean13"
		},
		height: {
			type: Number,
			default: 80
		},
		barwidth: {
			type: Number,
			default: 2
		},
		background: {
			type: String,
			default: "#fff"
		},
		linecolor: {
			type: String,
			default: "#000"
		},
		font: {
			type: String,
			default: "monospace"
		},
		fontsize: {
			type: Number,
			default: 20
		},
		fontoptions: {
			type: String,
			default: null
		},
		textmargin: {
			type: Number,
			default: 2
		},
		textalign: {
			type: String,
			default: "center"
		},
		textposition: {
			type: String,
			default: "bottom"
		},
		margins: {
			type: Number,
			default: 0
		},
		margintop: {
			type: Number,
			default: null
		},
		marginright: {
			type: Number,
			default: null
		},
		marginbottom: {
			type: Number,
			default: null
		},
		marginleft: {
			type: Number,
			default: null
		},
		displayvalue: {
			type: Boolean,
			default: true
		},
		flat: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
	},

	emits: ["input", "change"],

	computed: {
		hasContent() {
			return typeof this.value === "string" &&
				this.value.trim() !== "";
		},

		barcodeOptions() {
			return {
				format: this.format,
				height: this.height,
				width: this.barwidth,
				background: this.background,
				lineColor: this.linecolor,
				font: this.font,
				fontSize: this.fontsize,
				fontOptions: this.fontoptions,
				textMargin: this.textmargin,
				textAlign: this.textalign,
				textPosition: this.textposition,
				margin: this.margins,
				marginTop: this.margintop,
				marginRight: this.marginright,
				marginBottom: this.marginbottom,
				marginLeft: this.marginleft,
				displayValue: this.displayvalue,
				flat: this.flat
			};
		}
	},

	mounted() {
		this.renderBarcode();
	},

	watch: {
		value() {
			this.$nextTick(this.renderBarcode);
		},

		barcodeOptions() {
			this.$nextTick(this.renderBarcode);
		}
	},

	methods: {
		convertIsbn10to13(isbn10) {
			const clean = isbn10.replace(/-/g, "").toUpperCase();

			if (!/^\d{9}[\dX]$/.test(clean)) {
				return null;
			}

			const core = "978" + clean.slice(0, 9);
			let sum = 0;

			for (let i = 0; i < 12; i++) {
				sum += Number(core[i]) * (i % 2 === 0 ? 1 : 3);
			}

		  const checksum = (10 - (sum % 10)) % 10;

			return core + checksum;
		},

		renderBarcode() {
			const svg = this.$refs.barcode;

			if (!svg || !this.hasContent) {
				return;
			}

			let isbn = this.value
				.replace(/[\s-]/g, "")
				.toUpperCase();

			// Convert ISBN-10 to ISBN-13
			if (/^\d{9}[\dX]$/.test(isbn)) {
				isbn = this.convertIsbn10to13(isbn);
			}

			// Clear the preview if the ISBN is invalid
			if (!isbn || !/^\d{13}$/.test(isbn) || !this.validateIsbn(isbn)) {
				svg.replaceChildren();
				return;
			}

			try {
				JsBarcode(svg, isbn, this.barcodeOptions);
			} catch (error) {
				console.error("ISBN barcode rendering failed:", error);
				svg.replaceChildren();
			}
		},

		openDrawer() {
			if (this.disabled) {
				return;
			}

			this.$panel.drawer.open({
				component: "k-form-drawer",

				props: {
					icon: "isbn",
					title: "ISBN-10/ISBN-13",

					value: {
						[this.name]: this.value ?? ""
					},

					fields: {
						[this.name]: {
							label: this.$t("isbn.field.label"),
							type: "text",
							spellcheck: false,
							autofocus: true,
							minlength: 10,
							maxlength: 17,
							placeholder: this.$t("isbn.field.placeholder")
						},

						info: {
							type: "info",
							label: this.$t("isbn.info.label"),
							text: this.$t("isbn.info.text"),
							theme: "info"
						}
					}
				},

				on: {
					submit: (values) => this.handleSubmit(values)
				}
			});
		},

		closeDrawer() {
			this.$panel.drawer.close();
		},

		validateIsbn(value) {
			const clean = String(value ?? "")
				.replace(/[\s-]/g, "")
				.toUpperCase();

			// ISBN-10
			if (/^\d{9}[\dX]$/.test(clean)) {
				let sum = 0;

				for (let i = 0; i < 9; i++) {
					sum += (i + 1) * Number(clean[i]);
				}

				const checksum = clean[9] === "X" ? 10 : Number(clean[9]);
				return (sum + 10 * checksum) % 11 === 0;
			}

			// ISBN-13
			if (/^\d{13}$/.test(clean)) {
				let sum = 0;

				for (let i = 0; i < 12; i++) {
					sum += Number(clean[i]) * (i % 2 === 0 ? 1 : 3);
				}

				const checksum = (10 - (sum % 10)) % 10;
				return checksum === Number(clean[12]);
			}

			return false;
		},

		handleSubmit(formData) {
			const newValue = String(formData?.[this.name] ?? "").trim();

			if (!this.validateIsbn(newValue)) {
				this.$panel.notification.info({
					message: this.$t("isbn.error.invalid"),
					icon: "alert",
					theme: "negative",
					timeout: 5000
				});

				return;
			}

			this.$emit("input", newValue);
			this.$emit("change", newValue);

			this.closeDrawer();

			this.$panel.notification.success({
				message: this.$t("isbn.success.saved"),
				icon: "check",
				timeout: 4000
			});
		},

	}
};
</script>

<style scoped>
.k-isbn-preview {
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-x: auto;
	padding: 1rem;
	background: #fff;
	border-radius: var(--input-rounded);
}

.k-isbn-preview-svg {
	display: block;
	flex-shrink: 0;
	max-width: 100%;
	height: auto;
}

.k-isbn-empty {
	width: 100%;
}
</style>