
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDkK1yUxrcLTohJ5zGl0QY6hk5ge1IX_fo",
      authDomain: "kwitter-f6627.firebaseapp.com",
      projectId: "kwitter-f6627",
      storageBucket: "kwitter-f6627.appspot.com",
      messagingSenderId: "361990504561",
      appId: "1:361990504561:web:874c4cc47e25a1514d5bd0"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("User Name");
 document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

 function adduser()
 {
   var room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose : "Adding Room Name"
   });
   localStorage.setItem("room_name",room_name);
   window.location = "kwitter_page.html"
 }

 function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
var row = "<div class='room_name' id="+Room_names+" onclick=' RedirectToRoomName (this.id)'>#"+Room_names+"</div> <hr>";
 document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();

function RedirectToRoomName(Name)
{
console.log(Name);
localStorage.setItem("room_name", Name);
window.location = "kwitter_page.html" ;
}