<?php
return function ($field, $format = 'text') {
	$isbn = $field->value();

	if (!V::isbn($isbn)) {
		return null;
	}

	if ($format === 'svg') {
		$svg = \Scottboms\Isbn\Barcode::svg($isbn);
		return snippet('isbn', [
			'isbn'    => $isbn,
			'barcode' => $svg,
			'type'    => 'svg'
		], true); // return output instead of echoing
	}

	if ($format === 'html') {
			$html = \Scottboms\Isbn\Barcode::html($isbn);
			return snippet('isbn', [
				'isbn'    => $isbn,
				'barcode' => $html,
				'type'    => 'html'
			], true);
		}

	return $isbn; // default to output just the text value
};
