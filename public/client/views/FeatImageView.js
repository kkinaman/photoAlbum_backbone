var FeatImageView = Backbone.View.extend({

  // template: _.template('<img src=<%= url %>>'),

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  render: function() {
    this.$el.find('.featImageDisplay').css({
      'background-image': 'url(' + this.model.get('url') + ')',
      'background-size': 'cover'
    }).text('');
    this.$el.find('.featImageName').text(this.model.get('name'));
    // this.$el.append('<span class="featImageName">' + this.model.get('title') + '</span>');
  }

});
