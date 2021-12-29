// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFywIfzwtC0K-llBwsfB7xQflvNClRIXc",
  authDomain: "whatsapp-921af.firebaseapp.com",
  projectId: "whatsapp-921af",
  storageBucket: "whatsapp-921af.appspot.com",
  messagingSenderId: "164111648814",
  appId: "1:164111648814:web:f7757f355e7d926b0d37bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name1=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='lbtn btn-warning' id= "+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+ like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;





//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name, message:msg, like:0

});
document.getElementById("msg").value="";
}
function updateLike(message_id){
console.log("clicked on like button"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
  window.location="index.html";
  }