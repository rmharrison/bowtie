App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter' //Stort-term persistance.
});

App.BowTie = DS.Model.extend({
  name: DS.attr('string'),
  user: DS.attr('string'),
  necksize: DS.attr('number'),
  style: DS.attr('string'),
  size: DS.attr('string'),
//  activeFabric: DS.belongsTo('App.Fabric'),
  //activeOption: DS.belongsTo('App.Options'),
});

App.Fabric = DS.Model.extend({
  name: DS.attr('string'),
  img: DS.attr('string'),
  //swatchbook: DS.hasMany('App.Swatchbook'),
});

App.Options = DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  isSelected: DS.attr('boolean')
});



/* Options for selector */
App.BowTie.styleOption = ["Batwing", "Classic", "Diamond Point"];
App.BowTie.sizeOption = ["Jumbo", "Standard", "Slim"];

App.BowTie.FIXTURES = [
 {
   id: 1,
   name: 'Inviticus',
   user: 'Ryan',
   necksize: 15.5,
   style: 'Classic',
   size: 'Standard',
  // activeFabric: '',
 },
];





// Fixtures used to store data until long-term persistance (REST calls to Django) are implemented
App.Fabric.FIXTURES = [
 {
   id: 1,
   name: 'Red',
   img: '',
 },
 {
   id: 2,
   name: 'Green',
   img: '',
 },
 {
   id: 3,
   name: 'Yellow',
   img: '',
 },
 {
   id: 4,
   name: 'Purple',
   img: '',
 },
 {
   id: 5,
   name: 'Orange',
   img: '',
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
