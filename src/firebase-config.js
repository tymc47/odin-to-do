const config = {
  apiKey: "AIzaSyDRVgGpZoTnz9wlxCL5UO_iWEwh0igx8bQ",
  authDomain: "to-do-c81c8.firebaseapp.com",
  projectId: "to-do-c81c8",
  storageBucket: "to-do-c81c8.appspot.com",
  messagingSenderId: "831501680833",
  appId: "1:831501680833:web:deeb4b50df25340f859440",
  measurementId: "G-2ZCEMGHS0Z",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
