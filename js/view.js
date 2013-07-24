/* Views */

/*
App.HotnessView = Ember.View.extend({
  classNames: ['hotness-control'],
  templateName: 'hotness',
    render: function(buffer) {
    for (var i=1; i<12; i++) {
      buffer.push("<button value='" + i + "'");
      if (this.get('hotness') === i) {
        buffer.push(" class='selected'");
      }
      buffer.push(">" + i + "</button>");
    }
  },
  click: function(event) {
    this.set('hotness','3');
    alert(this.get('hotness'));
  },
});
*/


App.ClickableView = Ember.View.extend({
  //classNameBindings: ['id'],
  //attributeBindings: ['fabric'],
  //template: Ember.Handlebars.compile('{{view.name}}'),
  //tagName: 'a',
  //attributeBindings: ['href'],
  //href: "http://emberjs.com",
  tagName: 'section',
  classNames: ['fabric-panel'],
  templateName: 'special',
  click: function(event, context) {
    var newFabricID = this.get('content').get('id');
    this.set('fabricID', newFabricID);
    // Set each isActiveFabric element in every model to false
    this.get('controller').get('model').setEach('isActiveFabric', false)
    this.get('content').set('isActiveFabric', true)
    return true;
  },
});
