var MakeGrowDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

this.oldStep =   MakeDancer.prototype.step.bind(this);

this.setPosition(top, left);
};

MakeGrowDancer.prototype = Object.create(MakeDancer.prototype);
MakeGrowDancer.prototype.constructor = MakeGrowDancer;
MakeGrowDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // this.oldStep();
  this.$node.removeClass('dancer');
  this.$node.addClass('partner');
  this.$node.addClass('animated');
  this.$node.addClass('infinite');
  this.$node.addClass('swing');

  
  

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

MakeGrowDancer.prototype.lineUp = function(y){
  var x = $(window).width()/2;

   this.setPosition(y,x);
}