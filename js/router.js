/* Set routes 
// The names refer to templates
// And by the naming conventions, routes and controllers
*/
App.Router.map(function() {
    this.resource('design', function() {
      //this.route('bowtie');
      //this.route('option');
      //this.route('fabric');
    });
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
  setupController: function(controller) {
    //For setting a particular bowtie as a model
    //controller.set('model', bowtie);
    this.controllerFor('DesignFabric').set('content', App.Fabric.find());
    this.controllerFor('DesignBowTie').set('content', App.BowTie.find());
  },
  renderTemplate: function(controller, model) {
    //Render the application into the main/default outlet
    this.render('design');

    //Render the three areas...
    this.render('bowtie', {   // the template to render
      into: 'design',                // the template to render into
      outlet: 'bowtie',              // the name of the outlet in that template
      controller:this.controllerFor('DesignBowTie', App.BowTie.find()), // the controller to use for the template
    });
    this.render('option', {   // the template to render
      into: 'design',                // the template to render into
      outlet: 'option',              // the name of the outlet in that template
      controller:this.controllerFor('DesignBowTie', App.BowTie.find()), // the controller to use for the template
    });
    this.render('fabric', {   // the template to render
      into: 'design',                // the template to render into
      outlet: 'fabric',              // the name of the outlet in that template
      controller:this.controllerFor('DesignFabric', App.Fabric.find()), // the controller to use for the template
    });
  },
});

/*
App.DesignFabricRoute = Ember.Route.extend({
  //model: function() {
  //  return App.Fabric.all();
  //},
  renderTemplate: function() {
    this.render('fabric', {   // the template to render
      into: 'design',                // the template to render into
      outlet: 'fabric',              // the name of the outlet in that template
      //controller: 'DesignFabric'        // the controller to use for the template
    });
  },
});
*/

App.PreviewRoute = Ember.Route.extend({
  model: function() {
    return App.BowTie.find();
  },
});

App.BuyRoute = Ember.Route.extend({
  model: function() {
    return App.Contact;
  },
});

