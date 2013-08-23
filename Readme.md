# form

  Dynamically generate a form by adding fields from a schema.

## Installation

    $ component install segmentio/form

## Example
    
```js
var Form = require('form');

var form = new Form();

form.field({
  type: 'text',
  name: 'name',
  default: '',
  label: 'Enter your name...'
});

form.field({
  type: 'password',
  name: 'password',
  default: '',
  label: 'Choose a password...',
  legend: 'Must be at least 8 characters.'
});

document.body.appendChild(form.el);
```

And you can add your own field types like so:

```js
var Form = require('form');
var ColorField = require('color-field');

Form.field('color', ColorField);

var form = new Form();

form.field({
  type: 'color',
  name: 'favorite',
  default: '#FFFFFF',
  label: 'Whats your favorite color?',
});
```

## API

### Form(model, el)
  Create a new form view with an optional `model` of settings (keyed by the fields's names) and `el`.

### .fields
  A dictionary of all the currently defined field types.

### .field(type, Constructor)
  Add a new field `type` with the given `Constructor`. Fields should follow the field spec, having `value`, `name`, `invalid` and `valid` methods.

### #el
  The form's DOM element.

```html
<form class="form">
  { Your fields get appended here... }
  { Your button goes here... }
</form>
```

### #field(schema)
  Add a new field to the form with the given `schema`. Fields are keyed by their `type` property in the `Form.fields` dictionary.

    {
      type: 'String',
      default: 'Mixed',
      label: 'String', (optional)
      legend: 'String' (optional)
    }

### #button(el || string)
  Set the form's submit button. Either pass your own submit element, or just a string of text for convenience.

### #prevent()
  Prevent the form from submitting normally.

### #toJSON()
  Returns a JSON object of the form's field values.

### #Classes
  [`ianstormtaylor/classes`](https://github.com/ianstormtaylor/classes) is mixed in.

## License

  MIT
