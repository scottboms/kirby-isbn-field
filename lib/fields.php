<?php

return [
	'extends' => 'text',
	'props' => [
		'isbn' => fn($isbn = true) => $isbn,
		'format' => fn($format = 'ean13') => $format,
		'height' => fn($height = 80) => $height,
		'barwidth' => fn($width = 2) => $width,
		'background' => fn($background = '#fff') => $background,
		'linecolor' => fn($linecolor = '#000') => $linecolor,
		'font' => fn($font = 'monospace') => $font,
		'fontsize' => fn($fontsize = 20) => $fontsize,
		'fontoptions' => fn($fontoptions = null) => $fontoptions,
		'textmargin' => fn($textmargin = 2) => $textmargin,
		'textalign' => fn($textalign = 'center') => $textalign,
		'textposition' => fn($textposition = 'bottom') => $textposition,
		'margins' => fn($margins = 0) => $margins,
		'margintop' => fn($margintop = null) => $margintop,
		'marginright' => fn($marginright = null) => $marginright,
		'marginbottom' => fn($marginbottom = null) => $marginbottom,
		'marginleft' => fn($marginleft = null) => $marginleft,
		'displayvalue' => fn($displayvalue = true) => $displayvalue,
		'flat' => fn($flat = false) => $flat,
		'validate' => fn($validate = null) => array_merge((array)$validate, ['isbn'])
	]
];
