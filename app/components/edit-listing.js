import Ember from 'ember';

export default Ember.Component.extend({
  editListingForm: false,

  actions: {
    editListingForm() {
      this.set('editListingForm', true);
    },
    edit(listing) {
      listing.save();
      this.set('editListingForm', false);
    },
    destroyListing(listing) {
      this.sendAction("destroyListing", listing);
    }
  }
});
