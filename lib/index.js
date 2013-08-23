
var bind = require('event').bind
  , Classes = require('classes')
  , domify = require('domify')
  , each = require('each')
  , fields = require('./fields')
  , prevent = require('prevent')
  , template = require('./index.html');


/**
 * Expose `Form`.
 */

module.exports = exports = Form;


/**
 * Field types.
 */

exports.fields = fields;


/**
 * Define a new field with a `name` and `Constructor`.
 *
 * @param {String|Object} name
 * @param {Function} Constructor
 */

exports.field = function (name, Constructor) {

  // multiple fields
  if ('object' === typeof name) {
    for (var key in name) exports.field(key, name[key]);
    return;
  }

  // default field
  if ('function' === typeof name) {
    Constructor = name;
    name = 'default';
  }

  fields[name] = Constructor;
};


/**
 * Initialize a new `Form`.
 *
 * @param {Object} values
 * @param {Element} el
 */

function Form (values, el) {
  this.model = values;
  this.el = el || domify(template);
  this.submit = this.el.querySelector('.form-submit');
  this.submitField = this.el.querySelector('.form-submit-field');
  this.fields = {};
}


/**
 * Mixin classes.
 */

Classes(Form.prototype);


/**
 * Add a field to the to form.
 *
 * @param {Object} schema
 * @return {Field}
 */

Form.prototype.field = function (schema) {
  schema || (schema = {});
  var type = schema.type;
  var name = schema.name;
  var Constructor = fields[type] || fields.default;

  var field = this.fields[name] = new Constructor(schema);
  var value = this.model[name];
  if (value !== undefined) field.value(value);

  this.el.insertBefore(field.el, this.submitField);
  return field;
};


/**
 * Set the form's submit `el` or pass a string of text.
 *
 * @param {Element|String} el
 * @return {Form}
 */

Form.prototype.button = function (el) {
  'string' === typeof el
    ? this.submit.textContent = el
    : this.submit.parentNode.replaceChild(el, this.submit);
  return this;
};


/**
 * Attach a submit handler to the form.
 *
 * @param {Function} fn
 * @return {Form}
 */

Form.prototype.submit = function (fn) {
  bind(this.el, 'submit', fn);
  return this;
};


/**
 * Prevent the default submission event for the form.
 *
 * @return {Form}
 */

Form.prototype.prevent = function () {
  this.submit(prevent);
  return this;
};


/**
 * Return a JSON representation of the form's fields.
 *
 * @return {Object}
 */

Form.prototype.toJSON = function () {
  var obj = {};
  each(this.fields, function (key, field) {
    obj[key] = field.value();
  });
  return obj;
};