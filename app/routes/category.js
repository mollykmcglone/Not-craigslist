import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id).then(function(data) {
      return Ember.Object.extend({
        sortedListings: Ember.computed.sort('model.listings', function(a, b) {
          if(moment(Ember.get(a, 'date')) > moment(Ember.get(b, 'date'))) {
            return 1;
          } else if(moment(Ember.get(a, 'date')) < moment(Ember.get(b, 'date'))) {
            return -1;
          } else {
            return 0;
          }
        })
      }).create({model: data});
    });
  },
});
