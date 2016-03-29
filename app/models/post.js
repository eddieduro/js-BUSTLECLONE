import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  imageURL: DS.attr(),
  datePosted: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  category: DS.attr(),
  user: DS.belongsTo('user', {async:true})
});
