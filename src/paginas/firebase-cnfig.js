// firebaseConfig.js
import { initializeApp } from "firebase/app";  // Importa initializeApp para inicializar Firebase
import { getAuth } from "firebase/auth";        // Importa getAuth para utilizar la autenticación

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCKw_SCCrolzHUdDK6iOXE3Pnq9fFVJ3C0",
  authDomain: "blur-login-7ae59.firebaseapp.com",
  projectId: "blur-login-7ae59",
  storageBucket: "blur-login-7ae59.firebasestorage.app",
  messagingSenderId: "600022282889",
  appId: "1:600022282889:web:fc9a0ed58e8bbbf9b1cc58"
};

// Inicializar Firebase con la configuración
const app = initializeApp(firebaseConfig);

// Exportar auth para usarlo en otras partes de la app
export const auth = getAuth(app);
