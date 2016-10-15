var ImagesView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('').append(
      this.collection.map(function(image) {
        return new ImageEntryView({model: image}).render();
      })
    );
  }

});