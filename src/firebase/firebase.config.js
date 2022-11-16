import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZDDm7qztbHoa0fmneg2Q_K9CHsr0dGzU",
  authDomain: "new-doctors-portal-9031c.firebaseapp.com",
  projectId: "new-doctors-portal-9031c",
  storageBucket: "new-doctors-portal-9031c.appspot.com",
  messagingSenderId: "264776001200",
  appId: "1:264776001200:web:acd6f4e8f79dd5555f3d75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
