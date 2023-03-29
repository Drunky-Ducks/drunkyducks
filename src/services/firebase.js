// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env['VITE_API_KEY'] || 'VITE_API_KEY_VACIA',
  authDomain: import.meta.env['VITE_AUTH_DOMAIN'] || 'VITE_AUTH_DOMAIN_VACIO',
  projectId: import.meta.env['VITE_PROJECT_ID'] || 'VITE_PROJECT_ID_VACIO',
  databaseURL: import.meta.env['VITE_FB_URL'] || 'VITE_FB_URL_VACIO',
  appId: import.meta.env['VITE_APP_ID'] || 'VITE_APP_ID_VACIO',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export const server= ()=>{
  const cocktailRef = ref(db, "drinks/0");
  onValue(cocktailRef, (snapshot) => {
    const data = snapshot.val();
    console.log(snapshot.val());
  });
}

