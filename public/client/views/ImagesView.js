var ImagesView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    //listener for if any are clicked
    // this.collection.on('click', function () {
    //   console.log('clicked!');
    // });
  },

  render: function() {
    this.$el.html('<th>IMAGES</th>').append(
      this.collection.map(function(image) {
        return new ImageEntryView({model: image}).render();
      })
    );
  }

});