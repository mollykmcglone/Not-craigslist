import Ember from 'ember';

export default Ember.Component.extend({
  sortedListings: Ember.computed.sort('category.listings', function(a, b) {
    if(moment(Ember.get(a, 'date')) > moment(Ember.get(b, 'date'))) {
      return 1;
    } else if(moment(Ember.get(a, 'date')) < moment(Ember.get(b, 'date'))) {
      return -1;
    } else {
      return 0;
    }
  })
});
