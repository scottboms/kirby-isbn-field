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
use Kirby\Cms\App as Kirby;

require_once __DIR__ . '/fields/IsbnField.php';

$version = Kirby::version() ?? '0.0.0';
if (
	version_compare($version, '6.0.0-beta.1', '<') ||
	version_compare($version, '7.0.0', '>=')
) {
	throw new Exception('ISBN Field requires Kirby 6');
}

Kirby::plugin('scottboms/isbn-field',
	info: [
		'homepage' => 'https://github.com/scottboms/kirby-isbn-field',
		'license'  => 'MIT',
		'version' => '6.0.0',
		'authors' => [[ 'name' => 'Scott Boms' ]]
	],

	extends: [
		'fields' => [
			'isbn' => \Scottboms\Isbn\IsbnField::class
		],
		'fieldMethods' => [
			'toIsbn' => require __DIR__ . '/lib/fieldmethods.php'
		],
		'validators' => [
			'isbn' => require __DIR__ . '/lib/validators.php'
		],
		'translations' => [
			'en' => require __DIR__ . '/languages/en.php',
			'de' => require __DIR__ . '/languages/de.php',
			'fr' => require __DIR__ . '/languages/fr.php',
		],
		'snippets' => [
			'isbn' => __DIR__ . '/snippets/isbn.php'
		]
	]
);
