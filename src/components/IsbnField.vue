<template>
	<k-field class="k-isbn-field" v-bind="$props">
		<template #options>
			<k-button
				icon="edit-line"
				size="xs"
				variant="filled"
				@click="openDrawer"
			>Edit...</k-button>
		</template>

		<div v-if="!hasContent" class="k-isbn-empty">
			<k-grid style="--columns: 1; gap: 0.5rem">
				<k-empty :text="emptyText" icon="isbn" @click="openDrawer" />
			</k-grid>
		</div>
		<div v-else class="k-isbn-preview">
			<div class="k-isbn-container">
				<svg ref="svgEl" class="k-isbn-preview-svg" />
			</div>
		</div>
	</k-field>
</template>

<script>
import JsBarcode from 'jsbarcode';

export default {
	extends: "k-field",
	props: {
		value: String,
		emptyText: {
			type: String,
			default() {
				return this.$t('isbn.field.empty');
			}
		},
		format: {
			type: String,
			default: 'ean13'
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
			default: '#fff'
		},
		linecolor: {
			type: String,
			default: '#000'
		},
		font: {
			type: String,
			default: 'monospace'
		},
		fontsize: {
			type: Number,
			default: 20
		},
		fontoptions: {
			type: String
		},
		textmargin: {
			type: Number,
			default: 2
		},
		textalign: {
			type: String,
			default: 'center'
		},
		textposition: {
			type: String,
			default: 'bottom'
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
		}
	},

	emits: ['update:modelValue', 'input', 'change'],

	data() {
		return {
			svgEl: null
		};
	},

	computed: {
		hasContent() {
			return !!(this.value && this.value.trim() !== '');
		}
	},

	mounted() {
		// refs are available after mount
		this.svgEl = this.$refs.svgEl;
		this.renderBarcode();
	},

	watch: {
		value() {
			this.$nextTick(() => this.renderBarcode());
		}
	},

	methods: {
		handleSubmit(formData) {
			const newValue = formData[this.name];

			if (!this.validateIsbn(newValue)) {
				this.$panel.notification.info({
					message: this.$t('isbn.error.invalid'),
					icon: 'alert',
					theme: 'negative',
					timeout: 5000
				});
				return; // don't proceed
			}

			Promise.resolve()
				.then(() => {
					this.$emit('update:modelValue', newValue);
					this.$emit('input', newValue);
					this.$emit('change', newValue);

					// refresh barcode preview
					this.$nextTick(() => this.renderBarcode());
					this.closeDrawer();

					this.$panel.notification.success({
						message: this.$t('isbn.success.saved'),
						icon: 'check',
						timeout: 4000
					});
				})
				.catch(() => {
					this.$panel.notification.info({
						message: this.$t('isbn.error.unknown'),
						icon: 'alert',
						theme: 'negative',
						timeout: 4000
					});
				});
		},

		openDrawer() {
			this.$panel.drawer.open({
				component: 'k-form-drawer',
				props: {
					icon: 'isbn',
					title: 'ISBN-10/ISBN-13',
					value: {
						[this.name]: this.value
					},
					fields: {
						[this.name]: {
							label: this.$t('isbn.field.label'),
							type: 'text',
							spellcheck: false,
							autofocus: true,
							minlength: 10,
							maxlength: 14,
							placeholder: this.$t('isbn.field.placeholder')
						},
						info: {
							type: 'info',
							label: this.$t('isbn.info.label'),
							text: this.$t('isbn.info.text'),
							theme: 'info',
						}
					}
				},
				on: {
					submit: this.handleSubmit.bind(this)
				}
			});
		},

		closeDrawer() {
			this.$panel.drawer.close();
		},

		convertIsbn10to13(isbn10) {
			const clean = isbn10.replace(/-/g, '').toUpperCase();
			if (!/^\d{9}[\dX]$/.test(clean)) return null;

			// step 1: take first 9 digits, prefix with 978
			const core = '978' + clean.slice(0, 9);

			// step 2: calculate checksum for isbn-13
			let sum = 0;
			for (let i = 0; i < 12; i++) {
				const digit = parseInt(core[i], 10);
				sum += digit * (i % 2 === 0 ? 1 : 3);
			}
			const checksum = (10 - (sum % 10)) % 10;

			// step 3: append checksum
			return core + checksum;
		},

		validateIsbn(value) {
			const clean = value.replace(/-/g, '');

			// isbn-10
			if (/^\d{9}[\dX]$/.test(clean)) {
				let sum = 0;
				for (let i = 0; i < 9; i++) {
					sum += (i + 1) * parseInt(clean[i], 10);
				}
				const checksum = clean[9] === 'X' ? 10 : parseInt(clean[9], 10);
				return (sum + 10 * checksum) % 11 === 0;
			}

			// isbn-13
			if (/^\d{13}$/.test(clean)) {
				let sum = 0;
				for (let i = 0; i < 12; i++) {
					sum += parseInt(clean[i], 10) * (i % 2 === 0 ? 1 : 3);
				}
				const checksum = (10 - (sum % 10)) % 10;
				return checksum === parseInt(clean[12], 10);
			}
			return false;
		},

		renderBarcode() {
			if (!this.hasContent) return;
			if (typeof JsBarcode !== 'function') return;
			if (!this.svgEl) return;

			let clean = this.value.replace(/-/g, '');

			// convert isbn-10 to isbn-13 if necessary
			if (/^\d{9}[\dX]$/.test(clean)) {
				const converted = this.convertIsbn10to13(clean);
				if (!converted) return;
				clean = converted;
			}

			// validate isbn-13
			if (!/^\d{13}$/.test(clean) || !this.validateIsbn(clean)) return;

			// clear the svg before re-rendering
			while (this.svgEl.firstChild) {
				this.svgEl.removeChild(this.svgEl.firstChild);
			}

			JsBarcode(this.svgEl, clean, {
				format: this.format,
				height: this.height,
				width: this.barwidth,
				background: this.background,
				lineColor: this.linecolor,
				font: this.font,
				fontSize: this.fontsize,
				fontOptions: this.fontoptions,
				textAlign: this.textalign,
				textPosition: this.textposition,
				margins: this.margins,
				marginTop: this.margintop,
				marginRight: this.marginright,
				marginBottom: this.marginbottom,
				marginLeft: this.marginleft,
				displayValue: this.displayvalue,
				flat: this.flat,
				lastChar: '>'
			});
		},

	}
};
</script>

<style>
.k-isbn-preview {
	background: var(--color-white);
	border-radius: var(--input-rounded);
}
.k-isbn-preview-svg {
	border-radius: var(--input-rounded);
}
</style>
