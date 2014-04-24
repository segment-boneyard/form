
describe('form', function () {
  var assert = require('assert');
  var Form = require('form');

  it('should be a constructor', function () {
    assert('function' === typeof Form);
  });

  it('should inherit emitter', function(){
    assert(new Form().on);
    assert(new Form().off);
  })

  describe('default field', function(){
    it('should inherit Emitter', function(){
      assert(new Form.fields.default().on);
      assert(new Form.fields.default().off);
    })
  })

});
