var AppView = Backbone.View.extend({

  initialize: function() {
    this.imagesView = new ImagesView({
      collection: this.model.get('imagesList'),
      el: '#photoList'
    }); 
    this.featImageView = new FeatImageView({
      model: this.model.get('featImage'),
      el: '#featPhoto'
    });

    this.model.on('change:featImage', function(model) {
      this.featImageView.setImage(model.get('featImage'));
    }, this);
  },

  render: function() {
    return this.$el.html();
  }

});