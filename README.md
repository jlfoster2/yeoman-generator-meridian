<img src="http://en.gravatar.com/userimage/3193976/53730a1d436c157bf770c04232c2a72b.png?size=200" width="200px"/>


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
