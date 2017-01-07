# ReactNativeRebase
build React Native mobile apps + firebase back end quickly & easily

This project is centered around React Native, the mobile version of React that runs on both iOS and Android.
It also uses [Re-base](https://github.com/tylermcginnis/re-base), an awesome project that automagically keeps any React
component state in sync with a specified Firebase endpoint. No servers or API calls (unless you want them). Have your mobile app
up and CRUDing data in minutes!

Note- this assumes that you have React Native & its dependencies installed on your machine. Go [here](https://facebook.github.io/react-native/docs/getting-started.html#content)
to make sure.

#Getting Started
-Come up with a billion-dollar app idea
-Get familiar with [Re-base](https://github.com/tylermcginnis/re-base), it's the main point of using this project.  
  It's awesome and only takes a couple minutes to get the hang of it.  
-Create a [firebase](https://firebase.google.com/) project and grab your various app keys.  
-Clone this repo, cd into it and run npm install.  
-Add your firebase DB keys, app ID, and whatever other keys you need for your specific app to the rebaseConfig.js  
-run react-native run-ios (if your simulator starts and works at this point, you are done.
  I sometimes have to run npm start as well)  
-Add rebaseConfig.js to .gitignore unless you want your keys hanging around github  

#License
MIT
