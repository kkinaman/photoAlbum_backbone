var ImageEntryView = Backbone.View.extend({

  tagName: 'li',
  className: 'list-group-item',

  template: _.template('<span class="imageName"><%= name %></span><span class="badge"><%= rating %></span>'),

  events: {
    'click': function() {
      console.log('CLICKED');
      this.model.display();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});