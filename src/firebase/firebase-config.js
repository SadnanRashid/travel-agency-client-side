import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apikey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { app, auth };
//
//
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79qjEljmoRjZ9i3rLYBzfZJE2eshRucc",
  authDomain: "travel-agency-ph.firebaseapp.com",
  projectId: "travel-agency-ph",
  storageBucket: "travel-agency-ph.appspot.com",
  messagingSenderId: "477906710114",
  appId: "1:477906710114:web:47deebf35bad673a06ab3b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
