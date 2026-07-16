<?php

//namespace scottboms\isbn-field;

/**
 * ISBN Field for Kirby
 *
 * @author Scott Boms <plugins@scottboms.com>
 * @link https://github.com/scottboms/kirby-isbn-field
 * @license MIT
**/

use Scottboms\Isbn\Barcode;
use Kirby\Cms\App;
use Kirby\Toolkit\V;

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

// kirby version compatibility check
$version = App::version() ?? '0.0.0';
if (version_compare($version, '6.0.0', '<') || version_compare($version, '8.0.0', '>=')) {
	return;
}

Kirby::plugin('scottboms/isbn-field', [
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
	],
	'info' => [
		'homepage' => 'https://github.com/scottboms/kirby-isbn-field',
		'license'  => 'MIT',
		'version' => '6.0.0'
	],
]);
