window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
});

//App.DesignController = Ember.Controller.extend({
//});

App.DesignBowTieController = Ember.ObjectController.extend({
});

App.DesignFabricController = Ember.ArrayController.extend({
  activeFabricIDBinding: 'App.BowTie.fabricID',
  fabricCount: function() {
    var fabrics = this.filter(function(fabric) {
      return fabric.get('name') != '';
    });
    return fabrics.get('length');
  }.property('@each.fabricCount'),
});

//App.DesignOptionController = Ember.Controller.extend({
//});


//App.PreviewController = Ember.ObjectController.extend({
App.PreviewController = Ember.ObjectController.extend({
  appName: 'Preview area',
});

App.BuyController = Ember.ObjectController.extend({
  appName: 'Buy area',
  submit: function() {
    alert("Bought!");
  }
});

