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
  label: 'Enter your name...'
});

form.field({
  type: 'password',
  name: 'password',
  label: 'Choose a password...',
  legend: 'Must be at least 8 characters.'
});

form.field({
  type: 'submit',
  name: 'submit',
  label: 'Sign Up'
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
  <!-- Your fields get appended here, like: -->
  <fieldset class="form-field">
    ...
  </fieldset>
</form>
```

### #field(schema)
  Add a new field to the form with the given `schema`. Fields are keyed by their `type` property in the `Form.fields` dictionary.

    {
      name    : 'String'
      type    : 'String' (optional)
      label   : 'String' (optional)
      legend  : 'String' (optional)
      default : 'Mixed'  (optional)
    }

  You can also pass any other properties in the schema and handle them however you want with your custom field types. For example, a `"range"` field would probably take a `min` and `max`.

### #prevent()
  Prevent the form from submitting normally.

### #toJSON()
  Returns a JSON object of the form's field values.

### #Classes
  [`ianstormtaylor/classes`](https://github.com/ianstormtaylor/classes) is mixed in.

## Field Types

### `"default"`
  The default field, just a simple text input. If you don't specify a `type` property in your field schema, it'll use the default field.

### `"submit"`
  A generic submit field. The `label` will be used as the button's text.

## License

  MIT
