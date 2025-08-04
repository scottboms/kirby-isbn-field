<?php

namespace Scottboms\Isbn;

use Picqer\Barcode\BarcodeGeneratorSVG;
use Picqer\Barcode\BarcodeGeneratorHTML;

class Barcode {
	public static function svg(string $isbn, array $options = []): string
	{
		$generator = new BarcodeGeneratorSVG();

		// defaults
		$widthFactor = $options['width'] ?? 2;
		$totalHeight = $options['height'] ?? 80;
		$color = $options['linecolor'] ?? '#000';

		return $generator->getBarcode($isbn, $generator::TYPE_EAN_13, $widthFactor, $totalHeight, $color);
	}

	public static function html(string $isbn): string
	{
		$generator = new BarcodeGeneratorHTML();
		return $generator->getBarcode($isbn, $generator::TYPE_EAN_13);
	}
}
