
var Classes = require('classes')
  , domify = require('domify')
  , reactive = require('reactive')
  , template = require('./index.html');

/**
 * Expose `SubmitField`.
 */

module.exports = SubmitField;


/**
 * Initialize a new `SubmitField`.
 *
 * @param {Object} schema
 */

function SubmitField (schema) {
  this.schema = schema || {};
  this.el = domify(this.template);
  this.reactive = reactive(this.el, this.schema, this);
}


/**
 * Mixin classes.
 */

Classes(SubmitField.prototype);


/**
 * Template.
 */

SubmitField.prototype.template = template;


/**
 * Get the field field's name.
 *
 * @return {String}
 */

SubmitField.prototype.name = function () {
  return this.schema.name;
};


/**
 * Get or set the field's value, noop.
 */

SubmitField.prototype.value = function (value) {};


/**
 * Mark the field as invalid with an optional `message`, noop.
 */

SubmitField.prototype.invalid = function (message) {};


/**
 * Mark the field as valid, noop.
 */

SubmitField.prototype.valid = function () {};