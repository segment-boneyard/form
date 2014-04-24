
var Classes = require('classes');
var domify = require('domify');
var reactive = require('reactive');
var template = require('./index.html');
var Emitter = require('emitter');
var value = require('value');


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
 * Mixin emitter.
 */

Emitter(Field.prototype);

/**
 * Mixin classes.
 */

Classes(Field.prototype);


/**
 * Template.
 */

Field.prototype.template = template;


/**
 * Get the field's name.
 *
 * @return {String}
 */

Field.prototype.name = function () {
  return this.schema.name;
};


/**
 * Get or set the field's value.
 *
 * @param {String} string
 * @return {String}
 */

Field.prototype.value = function (string) {
  if (!arguments.length) return value(this.input);
  value(this.input, string);
};


/**
 * Mark the field as invalid with an optional `message`.
 *
 * @param {String} message (optional)
 */

Field.prototype.invalid = function (message) {
  this.addClass('invalid');
};


/**
 * Mark the field as valid.
 */

Field.prototype.valid = function () {
  this.removeClass('invalid');
};
