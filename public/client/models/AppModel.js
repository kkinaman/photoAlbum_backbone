var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('featImage', this.get('imagesList')[0]);
  }

});