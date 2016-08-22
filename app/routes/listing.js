import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id)
  },
  actions: {
    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    }
  }
});
