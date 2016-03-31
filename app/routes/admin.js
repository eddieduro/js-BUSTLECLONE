import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('user');
  },
  actions: {
  //   // isUserLogin(boolean) {
  //   //   this.set('isUserLogin', boolean);
  //   // },
    userLogin(user, params, loggedIn){
       var admin = Ember.Object.create({
            loggedIn: false
          })
      Object.keys(params).forEach(function(key){
          if(params[key]!==undefined) {
            user.set(key, params[key]);
            // console.log(key)
          }
        });
        if(loggedIn[0] === "true"){
          var admin = Ember.Object.create({
            loggedIn: true
          })
          this.transitionTo('admin');
        }
      // console.log(admin);
    },
    // updateLogin(loggedIn){
    // }
  }
});
