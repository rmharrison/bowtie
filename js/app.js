window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
});

/* Set routes 
// The names refer to templates
// And by the naming conventions, routes and controllers
*/
App.Router.map(function() {
    this.route('design');
    this.route('preview');
    this.route('buy');
});

/* Redirect index route to design template*/
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
   this.transitionTo('design'); 
  }
});

App.DesignRoute = Ember.Route.extend({
  model: function () {
    return App.Fabric.find();
  },
});

App.PreviewRoute = Ember.Route.extend({
  model: function() {
    return ['preview1', 'preview2'];
  },
});

App.DesignController = Ember.Controller.extend({
});


App.PreviewController = Ember.Controller.extend({
  title: 'Hello World',
  appName: 'My First Example',
});

App.FabricController = Ember.Controller.extend({
});

