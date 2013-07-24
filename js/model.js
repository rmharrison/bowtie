App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter' //Stort-term persistance.
});

App.GLOBALS = Ember.Object.create({
  fabricPath: "assets/fabric/",
});

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

App.Fabric = DS.Model.extend({
  id: DS.attr('integer'),
  name: DS.attr('string'),
  imgName: DS.attr('string'),
  isActiveFabric: DS.attr('boolean'),
  img: function() {
    return App.GLOBALS.fabricPath + '' + this.get('imgName');
  }.property('imgName'),
  //swatchbook: DS.hasMany('App.Swatchbook'),
});

App.Options = DS.Model.extend({
  id: DS.attr('integer'),
  name: DS.attr('string'),
  type: DS.attr('string'),
  isSelected: DS.attr('boolean')
});

/* Options for selector */
/*
App.BowTie = Ember.Object.extend({
    styleOption: ["Batwing", "Classic", "Diamond Point"];
    style: "Classic",
    sizeOption: ["Jumbo", "Standard", "Slim"];
    size: "Standard",
    fabricID: false;
    id: 1,
    necksize: 15.5,
    name: 'Inviticus',
    img: '/IMAGE/bowtie.png',
});
*/

App.BowTie.styleOption = ["Batwing", "Classic", "Diamond Point"];
App.BowTie.sizeOption = ["Jumbo", "Standard", "Slim"];
App.BowTie.fabricID = false;

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

// Fixtures used to store data until long-term persistance (REST calls to Django) are implemented
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
