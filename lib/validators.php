<?php
return function (string $value): bool {
	$value = str_replace('-', '', $value); // remove hyphens

	// ISBN-10 (e.g. 0374602638, 0771015143)
	if (preg_match('/^\d{9}[\dX]$/', $value)) {
		$sum = 0;
		for ($i = 0; $i < 9; $i++) {
			$sum += ($i + 1) * (int)$value[$i];
		}
		$checksum = $value[9] === 'X' ? 10 : (int)$value[9];
		return ($sum + 10 * $checksum) % 11 === 0;
	}

	// ISBN-13 (e.g. 978-0374602635, 9780374602635, 978-0374619350)
	if (preg_match('/^\d{13}$/', $value)) {
		$sum = 0;
		for ($i = 0; $i < 12; $i++) {
			$sum += (int)$value[$i] * ($i % 2 === 0 ? 1 : 3);
		}
		$checksum = (10 - ($sum % 10)) % 10;
		return (int)$value[12] === $checksum;
	}
	return false;
};
