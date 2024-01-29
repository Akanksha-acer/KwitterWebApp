// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkK1yUxrcLTohJ5zGl0QY6hk5ge1IX_fo",
    authDomain: "kwitter-f6627.firebaseapp.com",
    databaseURL: "https://kwitter-f6627-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6627",
    storageBucket: "kwitter-f6627.appspot.com",
    messagingSenderId: "361990504561",
    appId: "1:361990504561:web:874c4cc47e25a1514d5bd0"
  };
  
// Initialize Firebase
fibrebase.initializeApp(firebaseConfig);

  //ADD YOUR FIREBASE LINKS
function adduser()
{
  var user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "Adding User"
  });
}