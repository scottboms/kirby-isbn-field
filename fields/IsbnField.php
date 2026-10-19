<?php

namespace Scottboms\Isbn;

use Kirby\Form\Field\InputField;
use Kirby\Reflection\Attributes\Prop;

class IsbnField extends InputField
{
	protected string $value = '';

	#[Prop]
	protected string $format = 'ean13';

	#[Prop]
	protected int $height = 80;

	#[Prop]
	protected int $barwidth = 2;

	#[Prop]
	protected string $background = '#fff';

	#[Prop]
	protected string $linecolor = '#000';

	#[Prop]
	protected string $font = 'monospace';

	#[Prop]
	protected int $fontsize = 20;

	#[Prop]
	protected ?string $fontoptions = null;

	#[Prop]
	protected int $textmargin = 2;

	#[Prop]
	protected string $textalign = 'center';

	#[Prop]
	protected string $textposition = 'bottom';

	#[Prop]
	protected int $margins = 0;

	#[Prop]
	protected ?int $margintop = null;

	#[Prop]
	protected ?int $marginright = null;

	#[Prop]
	protected ?int $marginbottom = null;

	#[Prop]
	protected ?int $marginleft = null;

	#[Prop]
	protected bool $displayvalue = true;

	#[Prop]
	protected bool $flat = false;
}
