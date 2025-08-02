<?php

//namespace scottboms\isbn-field;

/**
 * ISBN Field for Kirby
 *
 * @author Scott Boms <plugins@scottboms.com>
 * @link https://github.com/scottboms/kirby-isbn-field
 * @license MIT
**/

use Kirby\Cms\App;
use Kirby\Toolkit\V;

// shamelessly borrowed from distantnative/retour-for-kirby
if (
	version_compare(App::version() ?? '0.0.0', '4.0.1', '<') === true ||
	version_compare(App::version() ?? '0.0.0', '6.0.0', '>=') === true
) {
	throw new Exception('ISBN Field requires Kirby v4 or v5');
}

Kirby::plugin('scottboms/isbn-field', [
	'fields' => [
		'isbn' => [
			'extends' => 'text',
			'props' => [
				'isbn' => function ($isbn = true) {
					return $isbn;
				},
				// default minlength = 10 if not explicitly set
				'minlength' => function ($minlength = null) {
					return $minlength ?? 10;
				},
				// default maxlength = 13 if not explicitly set
				'maxlength' => function ($maxlength = null) {
					return $maxlength ?? 14;
				},
				'validate' => function ($validate = null) {
					return array_merge((array)$validate, ['isbn']);
				}
			]
		]
	],
	'validators' => [
		'isbn' => function (string $value): bool {
			$value = str_replace('-', '', $value); // remove hyphens

			// ISBN-10 (e.g. 0374602638)
			if (preg_match('/^\d{9}[\dX]$/', $value)) {
				$sum = 0;
				for ($i = 0; $i < 9; $i++) {
					$sum += ($i + 1) * (int)$value[$i];
				}
				$checksum = $value[9] === 'X' ? 10 : (int)$value[9];
				return ($sum + 10 * $checksum) % 11 === 0;
			}

			// ISBN-13 (e.g. 978-0374602635, 9780374602635)
			if (preg_match('/^\d{13}$/', $value)) {
				$sum = 0;
				for ($i = 0; $i < 12; $i++) {
					$sum += (int)$value[$i] * ($i % 2 === 0 ? 1 : 3);
				}
				$checksum = (10 - ($sum % 10)) % 10;
				return (int)$value[12] === $checksum;
			}

			return false;
		}
	],
	'translations' => [
		'en' => [
			'validator.isbn' => 'Please enter a valid ISBN-10 or ISBN-13 code.'
		],
		'de' => [
			'validator.isbn' => 'Bitte eine gültige ISBN-10- oder ISBN-13-Nummer eingeben.'
		]
	]
]);
