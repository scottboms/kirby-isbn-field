# ISBN Field

![Plugin Preview](src/assets/isbn-field-plugin.jpg)

Adds an ISBN-10/ISBN-13 field type for Kirby including a rendered barcode preview of the code in the panel.

## Installation

### [Kirby CLI](https://github.com/getkirby/cli)
    
```bash
kirby plugin:install scottboms/isbn-field
```

### Git submodule

```bash
git submodule add https://github.com/scottboms/kirby-isbn-field.git site/plugins/isbn-field
```

### Copy and Paste

1. [Download](https://github.com/scottboms/kirby-isbn-field/archive/master.zip) the contents of this repository as Zip file.
2. Rename the extracted folder to `isbn-field` and copy it into the `site/plugins/` directory in your Kirby project.

## Usage

### Blueprints

In a Page blueprint, add a new field with the type `isbn`. The field supports numerous properties that control the rendered barcode preview in the panel and that map to the JsBarcode library that handles the preview.


```yml
  isbn:
    label: ISBN
    type: isbn
    height: 80
    font: monospace
    fontsize: 20
    textalign: center
    textposition: bottom
    margins: 10
    margintop: 0
    marginleft: 0
    marginbottom: 0
    marginright: 0
    displayvalue: true
    background: '#fff'
    linecolor: '#000'
    flat: false
    barwidth: 2
```

#### Field Properties

| Name         | Type       | Default     | Description                                                   |
|--------------|------------|-------------|---------------------------------------------------------------|
| height       | `integer`  | `80`        | Sets the height of the bars in the barcode                    |
| font         | `string`   | `monospace` | Sets text styling e.g. monospace, sans-serif, serif, fantasy  |
| fontsize     | `integer`  | `20`        | Sets the font size up to a maximum of 20                      |
| textalign    | `string`   | `center`    | Sets text alignment for the text e.g. center, left, right     | 
| textposition | `string`   | `bottom`    | Set the vertical position of the text e.g. bottom, top        |
| margins      | `integrer` | `0`         | Sets global margins around the rendered ISBN code             |
| margintop    | `integer`  | `null`      | Sets a top margin value only                                  | 
| marginright  | `integer`  | `null`      | Sets a right margin value only                                |
| marginbottom | `integer`  | `null`      | Sets a bottom margin value only                               |
| marginleft   | `integer`  | `null`      | Sets a left margin value only                                 |
| displayvalue | `boolean`  | `true`      | Turn the numeric value of the ISBN on or off e.g. true, false |
| background   | `string`   | `#fff`      | Sets the background color of the ISBN preview                 |
| linecolor    | `string`   | `#000`      | Sets the color of the lines and text of the ISBN preview      |
| flat         | `boolean`  | `false`     | Removes error bars from the rendered ISBN                     | 


### Using in Templates

```php
<?= $page->isbn() ?>
```

### Validators

The field type also includes a new [Validator](https://getkirby.com/docs/reference/system/validators) for Kirby that supports ISBN-10 and -13 formats (essentially UPC, EAN-13). You can access it in your templates like so:

```php
<?php
  $isbn = $page->isbn();
  if(V::isbn($isbn)) {
    echo "<p>Valid ISBN: </p>" . $isbn;
  } else {
    echo "<p>Invalid ISBN.</p>";
  }
?>
```

## Compatibility

* Kirby 4.x
* Kirby 5.x

## Disclaimer

This plugin is provided "as is" with no guarantee. Use it at your own risk and always test before using it in a production environment. If you identify an issue, typo, etc, please [create a new issue](/issues/new) so I can investigate.

## License

[MIT](https://opensource.org/licenses/MIT)


