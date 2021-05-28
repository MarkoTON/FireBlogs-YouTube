import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB67rhJpQPH187zYOFo9VAKzkVi7aX4I2E",
  authDomain: "fireblogsyt-139fd.firebaseapp.com",
  projectId: "fireblogsyt-139fd",
  storageBucket: "fireblogsyt-139fd.appspot.com",
  messagingSenderId: "979928300619",
  appId: "1:979928300619:web:1e6b4b269aa73aca6fa1ce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
