App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter' //Stort-term persistance.
});

App.GLOBALS = Ember.Object.create({
  fabricPath: "assets/fabric/",
});

// BowTie Object
App.BowTie = Ember.Object.create({
    id: 1,
    name: 'Inviticus',
    img: '/IMAGE/bowtie.png',
    fabricID: false,
    necksize: 15.5,
    style: "Classic",
    styleOption: ["Batwing", "Classic", "Diamond Point"],
    size: "Standard",
    sizeOption: ["Jumbo", "Standard", "Slim"],
});

// Contact information for Buying
// ObjectController, will eventually save to database
App.Contact = Ember.Object.create({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe@gmail.com',
});

App.Fabric = DS.Model.extend({
  id: DS.attr('integer'),
  name: DS.attr('string'),
  imgName: DS.attr('string'),
  //Only one fabric may be active at a time / set in view.
  // Todo: Move logic to controller, or better yet model
  isActiveFabric: DS.attr('boolean'),
  img: function() {
    return App.GLOBALS.fabricPath + '' + this.get('imgName');
  }.property('imgName'),
  //swatchbook: DS.hasMany('App.Swatchbook'),
});

// Fixtures used to store data until long-term persistance (REST calls to Django) are implemented
// These will eventually be loaded from database with Ajax calls
App.Fabric.FIXTURES = [
 {
   id: 1,
   name: 'PolkaRed',
   imgName: 'PolkaRed.jpg',
   isActiveFabric: false,
 },
 {
   id: 2,
   name: 'GermanBlue',
   imgName: 'GermanBlue.jpg',
   isActiveFabric: false,
 },
 {
   id: 3,
   name: 'Cream',
   imgName: 'Cream.jpg',
   isActiveFabric: false,
 },
 {
   id: 4,
   name: 'PurpleGingham',
   imgName: 'PurpleGingham.jpg',
   isActiveFabric: false,
 },
 {
   id: 5,
   name: 'RedCandyStripe',
   imgName: 'RedCandyStripe.jpg',
   isActiveFabric: false,
 },
];

// Fixtures used to store data until long-term persistance (REST calls to Django) are implemented

/*
// Using only one BowTie with an object controller for the time being
// May save bow ties to data base, but only one will be active in the application at a time
App.BowTie = DS.Model.extend({
  id: DS.attr('integer'),
  name: DS.attr('string'),
  user: DS.attr('string'),
  necksize: DS.attr('number'),
  style: DS.attr('string'),
  size: DS.attr('string'),
  fabricID: DS.attr('integer'),
//  activeFabric: DS.belongsTo('App.Fabric'),
  //activeOption: DS.belongsTo('App.Options'),
});

App.BowTie.FIXTURES = [
 {
   id: 1,
   name: 'Inviticus',
   user: 'Ryan',
   necksize: 15.5,
   style: 'Classic',
   size: 'Standard',
   fabricID: false,
 },
];
*/

/*
//Options are set with BowTies, not independent.
App.Options = DS.Model.extend({
  id: DS.attr('integer'),
  name: DS.attr('string'),
  type: DS.attr('string'),
  isSelected: DS.attr('boolean')
});

App.Options.FIXTURES = [
 {
   name: 'Jumbo',
   type: 'size',
   isSelected: false,
 },
 {
   name: 'Normal',
   type: 'size',
   isSelected: true,
 },
 {
   name: 'Slim',
   type: 'size',
   isSelected: false,
 },
 {
   name: 'Classic',
   type: 'style',
   isSelected: true,
 },
 {
   name: 'Batwing',
   type: 'style',
   isSelected: false,
 },
 {
   name: 'Diamond Point',
   type: 'style',
   isSelected: false,
 },
];
*/
