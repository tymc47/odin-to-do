import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import {
  displayLoginMsg,
  displaySignupMsg,
  loginDisplay,
  logoutDisplay,
  sidebarBtnFunction,
  loadLists,
} from "./domController";
import { loadTabs } from "./index";
import { validateEmail } from "./utils";
import firestore from "./storageController_firestore";
import { createDemoUser, removeDemoData } from "./demoController";

export const googleSignIn = () => {
  let provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
    })
    .catch((err) => {
      displayLoginMsg(err.message);
    });
};

export const anonySignIn = async () => {
  await signInAnonymously(getAuth());
};

export const signIn = (email, password) => {
  if (!email || !password) {
    return displayLoginMsg("Missing email or password");
  }

  if (!validateEmail(email)) {
    return displayLoginMsg("Invalid email");
  }

  signInWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((err) => {
      displayLoginMsg(err.message);
    });
};

export function signOutUser() {
  // Sign out of Firebase.
  signOut(getAuth());
}

function getUserName() {
  if (getAuth().currentUser.isAnonymous) return "Demo Account";
  return getAuth().currentUser.displayName || getAuth().currentUser.email;
}
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || null;
}

export const registerUser = (email, password, confirm) => {
  if (!email || !password || !confirm) {
    return displaySignupMsg("Error: Missing email or password");
  }

  if (!validateEmail(email)) {
    return displaySignupMsg("Error: invalid email");
  }

  if (password.length < 6) {
    return displaySignupMsg("Error: invalid password");
  }

  if (password !== confirm) {
    return displaySignupMsg("Error: passwords don't match");
  }

  createUserWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((err) => {
      displaySignupMsg("Error: " + err.message);
    });
};

export function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

const authStateObserver = async (user) => {
  if (user) {
    const username = getUserName();
    const proPic = getProfilePicUrl();

    let userData = await firestore.userExist(user.uid);

    if (!userData && !user.isAnonymous) {
      firestore.createUser(user.uid, user.email);
    }

    if (!userData && user.isAnonymous) {
      await createDemoUser(user.uid);
    }

    const listarray = await firestore.getUserLists(user.uid);

    loginDisplay(username, proPic);
    sidebarBtnFunction();
    loadLists(listarray);
    loadTabs("Tasks");

    console.log("user sign in");
  } else {
    removeDemoData();
    logoutDisplay();
  }
};
