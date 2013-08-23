
var classes = require('component-classes')
  , domify = require('domify')
  , reactive = require('reactive')
  , template = require('./index.html')
  , value = require('value');


/**
 * Expose `Field`.
 */

module.exports = Field;


/**
 * Initialize a new `Field`.
 *
 * @param {Object} schema
 */

function Field (schema) {
  this.schema = schema || {};
  this.el = domify(this.template);
  this.reactive = reactive(this.el, this.schema, this);
  this.input = this.el.querySelector('input');
}


/**
 * Template.
 */

Field.prototype.template = template;


/**
 * Get the field's name.
 *
 * @return {String}
 */

Field.prototype.name = function (name) {
  return this.schema.name;
};


/**
 * Get or set the field's value.
 *
 * @param {String} string
 * @return {String}
 */

Field.prototype.value = function (string) {
  if (!string) return value(this.input);
  value(this.input, string);
};


/**
 * Mark the field as invalid with an optional `message`.
 *
 * @param {String} message (optional)
 */

Field.prototype.invalid = function (message) {
  classes(this.el).add('invalid');
};


/**
 * Mark the field as valid.
 */

Field.prototype.valid = function () {
  classes(this.el).remove('invalid');
};