window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
});

//App.DesignController = Ember.Controller.extend({
//});

App.DesignBowTieController = Ember.ObjectController.extend({


});

App.DesignFabricController = Ember.ArrayController.extend({
  me: 'Ryan',
  fabricCount: function() {
    var fabrics = this.filter(function(fabric) {
      return fabric.get('name') != '';
    });
    return fabrics.get('length');
  }.property('@each.fabricCount')
});

App.DesignOptionController = Ember.Controller.extend({
});


App.PreviewController = Ember.Controller.extend({
  title: 'Hello World',
  appName: 'My First Example',
});


