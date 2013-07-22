App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter' //Stort-term persistance.
});

App.Fabric = DS.Model.extend({
  id: DS.attr('integer'),
  name: DS.attr('string'),
  isSelected: DS.attr('boolean')
});

// Fixtures used to store data until long-term persistance (REST calls to Django) are implemented
App.Fabric.FIXTURES = [
 {
   id: 1,
   name: 'Red',
   isSelected: false,
 },
 {
   id: 2,
   name: 'Green',
   isSelected: false,
 },
 {
   id: 3,
   name: 'Yellow',
   isSelected: false,
 },
 {
   id: 4,
   name: 'Purple',
   isSelected: false,
 },
 {
   id: 5,
   name: 'Orange',
   isSelected: false,
 },
];

App.BowOption = DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  isSelected: DS.attr('boolean')
});

// Fixtures used to store data until long-term persistance (REST calls to Django) are implemented
App.BowOption.FIXTURES = [
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
