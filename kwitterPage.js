const firebaseConfig = {
    apiKey: "AIzaSyAHLE6wgKN4SFDPwPuEDd5BXQUlvVUU8nI",
    authDomain: "vamosconversar-aee23.firebaseapp.com",
    databaseURL: "https://vamosconversar-aee23-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-aee23",
    storageBucket: "vamosconversar-aee23.appspot.com",
    messagingSenderId: "350030129338",
    appId: "1:350030129338:web:2da23f95ec868b2bae3a83"
  };
  
  firebase.initializeApp(firebaseConfig); 

  userName = localStorage.getItem("userName");
  roomName = localStorage.getItem("roomName");

  function send () {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
    name : userName,
    mensagem:msg, 
    like:0         
    });
    document.getElementById("msg").value = "";
  }

  function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
 } });  }); }
getData();