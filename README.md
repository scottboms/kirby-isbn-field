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

In a Page blueprint, add a new field with the type `applemusic`. Standard field attributes such as `label`, `required`, `help`, etc. can also be used to override the defaults. Use `emptyText` to change the default text displayed when the field is in an empty state.

```yml
  music:
    label: Apple Music Embed
    type: applemusic
    emptyText: 'Click to paste Apple Music embed code'

  blocks:
    type: blocks
    fieldsets:
      - heading
      - text
      - image
      - applemusic
```

### Using in Templates

```php
<?= $page->isbn() ?>
```

## Compatibility

* Kirby 4.x
* Kirby 5.x

## Disclaimer

This plugin is provided "as is" with no guarantee. Use it at your own risk and always test before using it in a production environment. If you identify an issue, typo, etc, please [create a new issue](/issues/new) so I can investigate.

## License

[MIT](https://opensource.org/licenses/MIT)


