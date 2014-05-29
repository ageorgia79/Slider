/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
              var answer = 2;
              expect(2).to.equal(answer);
            });
        });
    });
})();

describe('the image slider', function() {

  var slider = $('.slider-box');

  var box = $('.slider-box');

  $('.slider-box').val(12);

  it('should render twelve images consecutively in a loop', function(){
    expect(slider-box).to.equal(12);
  })


})

