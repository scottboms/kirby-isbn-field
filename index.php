<?php

//namespace scottboms\isbn-field;

/**
 * ISBN Field for Kirby
 *
 * @author Scott Boms <plugins@scottboms.com>
 * @link https://github.com/scottboms/kirby-isbn-field
 * @license MIT
**/

spl_autoload_register(function ($class) {
	if (strpos($class, 'Picqer\\Barcode\\') === 0) {
		$path = __DIR__ . '/lib/Barcode/' . str_replace('\\', '/', substr($class, strlen('Picqer\\Barcode\\'))) . '.php';
		if (file_exists($path)) {
			require_once $path;
		}
	}
});

load([
  'Scottboms\Isbn\Barcode' => __DIR__ . '/classes/Isbn.php'
]);

use Scottboms\Isbn\Barcode;
use Kirby\Cms\App;
use Kirby\Toolkit\V;

// shamelessly borrowed from distantnative/retour-for-kirby
if (
	version_compare(App::version() ?? '0.0.0', '4.0.1', '<') === true ||
	version_compare(App::version() ?? '0.0.0', '6.0.0', '>=') === true
) {
	throw new Exception('ISBN Field requires Kirby v4 or v5');
}

Kirby::plugin(
	name: 'scottboms/isbn-field',
	info: [
		'homepage' => 'https://github.com/scottboms/kirby-isbn-field'
	],
	version: '1.1.0',
	license: 'MIT',
	extends: [
		'fields' => [
			'isbn' => require __DIR__ . '/lib/fields.php'
		],
		'fieldMethods' => [
			'toIsbn' => require __DIR__ . '/lib/fieldmethods.php'
		],
		'validators' => [
			'isbn' => require __DIR__ . '/lib/validators.php'
		],
		'translations' => [
			'en' => require __DIR__ . '/languages/en.php',
			'de' => require __DIR__ . '/languages/de.php'
		],
		'snippets' => [
			'isbn' => __DIR__ . '/snippets/isbn.php'
		]
	]
);
