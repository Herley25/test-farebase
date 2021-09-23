import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
    apiKey: "AIzaSyDHBXGluPJCszO21ePlMGprttC_RbiAjJc",
    authDomain: "tarefas-8f4db.firebaseapp.com",
    projectId: "tarefas-8f4db",
    storageBucket: "tarefas-8f4db.appspot.com",
    messagingSenderId: "218423006701",
    appId: "1:218423006701:web:6f65bfc092e049934ec3e4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;

// let firebaseConfig = {

//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
// };

// if(firebase.appId.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// export default firebase;