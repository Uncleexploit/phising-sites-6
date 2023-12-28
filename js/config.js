const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  const firebaseConfig2 = {
    apiKey: "AIzaSyBwaensOlR9D7iATsl7udVfPKpWeWxEBmM",
    authDomain: "nowphish2.firebaseapp.com",
    databaseURL: "https://nowphish2-default-rtdb.firebaseio.com",
    projectId: "nowphish2",
    storageBucket: "nowphish2.appspot.com",
    messagingSenderId: "839071660462",
    appId: "1:839071660462:web:325af3cb32eaac5363b03f",
    measurementId: "G-GG8EBNQ7C1"
  }
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  