```
=====================================
		 |----\    /----|
		 |     \  /     |
		 |      \/      |
		 |              |
		 |     |\/|     |ERDIAN
		 |     |  |     |
		 |     |  |     |
		 |     |  |     |
		 -------  -------
=====================================
```

## Usage

First make a new directory, and `cd` into it:
```
mkdir my-awesome-project && cd $_
```

Then install `generator-meridian`:
```
npm install generator-meridian
```

Run `yo meridian`, optionally passing an app name:
```
yo meridian [app-name]
```

Finally, install npm and bower dependencies:
```
npm install && bower install --dev
```

## Generators

Available generators:

* [meridian:component](#aura_component)
* [meridian:extension](#extension)
* [meridian:styles](#styles)

### Aura Component
Generates a component in `app/components`.

Example:
```bash
yo meridian:component sample
```

Produces `app/components/sample/main.js`

### Extension
Generates an extension in `app/extensions`.

Example:
```bash
yo meridian:extension storage
```

Produces `app/extensions/storage.js`

### Styles
Generates cool styles.

Example:
```bash
yo meridian:styles
```

#### Supported types:

* Twitter Bootstrap

## Contribute

See the [contributing docs]- TBD

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
