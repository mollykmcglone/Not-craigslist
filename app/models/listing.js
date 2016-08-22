import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  photoURL: DS.attr(),
  price: DS.attr(),
  location: DS.attr(),
  date: DS.attr(),
  description: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
