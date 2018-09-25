var MakeSlidingDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

this.oldStep =   MakeDancer.prototype.step.bind(this);

this.setPosition(top, left);
this._count = true;
};

MakeSlidingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlidingDancer.prototype.constructor = MakeSlidingDancer;
MakeSlidingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // this.oldStep();

if (this._count){
this.$node.removeClass('dancer')
this.$node.addClass('dancerRed')
this._count = false;
} else{
  this.$node.removeClass('dancerRed')
  this.$node.addClass('dancer');
  this._count = true;
}

setTimeout(this.step.bind(this), this.timeBetweenSteps);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

MakeSlidingDancer.prototype.lineUp = function(y){
  
 // var elementWidth = $('.dancer').css('border-radius') * 3;
  var x = $(window).width() - 30;

   this.setPosition(y,x);
}