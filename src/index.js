panel.plugin("scottboms/isbn-field", {
	fields: {
		isbn: {
			extends: "k-text-field",
			props: {
				isbn: {
					type: Boolean,
					default: true
				}
			}
		}
	}
});
