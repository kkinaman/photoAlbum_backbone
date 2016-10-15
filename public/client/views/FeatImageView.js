var FeatImageView = Backbone.View.extend({

  initialize: function() {

  },

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  render: function() {
    return this.$el.html('<span>FeatImage!</span>');
  }

});