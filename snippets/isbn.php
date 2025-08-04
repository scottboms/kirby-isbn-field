<?php
	$barcode = $barcode ?? '';
	$isbn = $isbn ?? '';
	$type = $type ?? '';
?>

<?php if ($barcode): ?>
	<div class="isbn-barcode <?= $type ?>"><?= $barcode ?></div>
<?php endif ?>
<div class="isbn-code"><?= esc($isbn) ?></div>
