import Ember from 'ember';

export default Ember.Component.extend({
  isUserLogin: false,
  actions: {
    userLogin(user){
      var params = {
        password: this.get('password'),
        username: this.get('username')
      };
      // console.log(user.content[0]._data.username);
      var users = user.content;
      var userArray = [];
      users.forEach(function(user) {
        var username = user._data.username;
        var password = user._data.password;
        console.log(username, password);
        userArray.push({username, password});
        // console.log(user._data.username);
      });
      // console.log(userArray[0].username, params.username);
      userArray.forEach(function(user){
        if(user.username === params.username && user.password === params.password){
          Ember.set(user, "isUserLogin", true);
          // this.set('isUserLogin', true);
          console.log(user);
          return false;
        }
      });
      if(isUserLogin) {
        this.transitionTo('index');
      }
      this.sendAction('userLogin', user ,params);
    },
  }
});
