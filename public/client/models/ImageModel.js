var ImageModel = Backbone.Model.extend({

  initialize: function() {
  },

  display: function() {
    this.trigger('display', this);
  }

});
