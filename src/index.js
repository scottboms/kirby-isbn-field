import IsbnField from './components/IsbnField.vue';
import { icons } from "./icons.js";

panel.plugin("scottboms/isbn-field", {
	icons,
	fields: {
		isbn: IsbnField
	}
});
