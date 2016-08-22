import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if(params.category_id==="-1") {
      return this.store.findAll('category');
    } else {
      return this.store.findRecord('category', params.category_id);
    }
  },

  actions:{
    save(inputCategory) {
      var params = {
        title: this.get('controller').get('title'),
        price: this.get('controller').get('price'),
        location: this.get('controller').get('location'),
        description: this.get('controller').get('description'),
        photoURL: this.get('controller').get('photoURL'),
        category: inputCategory,
        date: new Date(Date.now()),
      };
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function(){
        return category.save();
      });
      this.transitionTo('listing', newListing);
    }
  }
});
