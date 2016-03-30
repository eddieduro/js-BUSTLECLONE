import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('user');
  },
  actions: {
    // isUserLogin(boolean) {
    //   this.set('isUserLogin', boolean);
    // },
    userLogin(user, params){
      console.log(user);
    },
  }
});
