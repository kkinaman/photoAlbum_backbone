var ImageEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<img src=<%= url %>><td><%= name %> </td><td><%= rating %></td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});