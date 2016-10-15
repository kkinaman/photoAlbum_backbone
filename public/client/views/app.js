var AppView = Backbone.View.extend({

  initialize: function() {
    this.imagesView = new ImagesView({
      collection: this.model.get('imagesList')
    }); 
    this.featImageView = new FeatImageView({
      model: this.model.get('featImage')
    });
  },

  render: function() {
    return this.$el.html([
      this.imagesView.$el,
      this.featImageView.$el
    ]);
  }

});