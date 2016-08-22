import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  }
});
