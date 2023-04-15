import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

    const firebaseConfig = {
        apiKey: "AIzaSyBIQBdrMP_l7tKp-Q4RLtdy7AFaP2km9r4",
        authDomain: "vezeeta-a2089.firebaseapp.com",
        projectId: "vezeeta-a2089",
        storageBucket: "vezeeta-a2089.appspot.com",
        messagingSenderId: "467322917635",
        appId: "1:467322917635:web:75dd78140b930e67838f36"
      };
firebase.initializeApp(firebaseConfig);

// Define translations for English and Arabic
const translations = {
  en: {
    welcome: 'Welcome to my app!',
    login: 'Log in',
    error: 'An error occurred',
  },
  ar: {
    welcome: 'مرحبا بكم في تطبيقي!',
    login: 'تسجيل الدخول',
    error: 'حدث خطأ',
  },
};

// Set the default language to English
let currentLanguage = 'en';

// Get the user's language preference from localStorage, if available
const savedLanguage = localStorage.getItem('language');
if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
  currentLanguage = savedLanguage;
}

// Set the user's language preference in localStorage
function setLanguage(language) {
  if (Object.keys(translations).includes(language)) {
    currentLanguage = language;
    localStorage.setItem('language', language);
  }
}

// Get a translated string based on the current language
function t(key) {
  if (translations[currentLanguage][key]) {
    return translations[currentLanguage][key];
  } else {
    return key;
  }
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export { setLanguage, t };

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';


//     const firebaseConfig = {
//         apiKey: "AIzaSyBIQBdrMP_l7tKp-Q4RLtdy7AFaP2km9r4",
//         authDomain: "vezeeta-a2089.firebaseapp.com",
//         projectId: "vezeeta-a2089",
//         storageBucket: "vezeeta-a2089.appspot.com",
//         messagingSenderId: "467322917635",
//         appId: "1:467322917635:web:75dd78140b930e67838f36"
//       };
      


// firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore();
// export const auth = firebase.auth();
