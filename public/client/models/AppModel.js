var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('featImage', this.get('imagesList')[0]);

    params.imagesList.on('display', function(image){
      this.set('featImage', image);
    }, this);
  }

});