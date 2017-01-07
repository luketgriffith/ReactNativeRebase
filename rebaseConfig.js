import Rebase from 're-base';

//all this comes from your firebase info panel. Replace with your own keys, etc
//add this file to your .gitignore if you dont want all this on github... 
var base = Rebase.createClass({
      apiKey: "apiKey",
      authDomain: "myProjectId.firebaseapp.com",
      databaseURL: "https://databaseName.firebaseio.com",
      storageBucket: "bucket.appspot.com",
      messagingSenderId: "xxxxxxxxxxxxxx"
}, 'myApp');

export default base;
