import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  username: DS.attr(),
  permissionLevel: DS.attr(),
  posts: DS.hasMany('post', {async:true}),
  password: DS.attr(),
  isUserLoggedIn: DS.attr()  
});
