import {
  loadTasks,
  displayTasks,
  loadLists,
  loadMainContent,
  displayCompleted,
  userControl,
  loginDisplay,
  logoutDisplay,
  sidebarBtnFunction,
  displaySignupMsg,
  displayLoginMsg,
} from "./domController";
import { task } from "./objectController";
import storageController from "./storageController";
import { getFirebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { validateEmail } from "./utils";
import firestore from "./storageController_firestore";

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const googleSignIn = () => {
  let provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
    })
    .catch((err) => {
      displayLoginMsg(err.message);
    });
};

const signIn = (email, password) => {
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

function signOutUser() {
  // Sign out of Firebase.
  signOut(getAuth());
}

function getUserName() {
  return getAuth().currentUser.displayName || getAuth().currentUser.email;
}
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || null;
}

const registerUser = (email, password, confirm) => {
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
      console.log(userCredential.user);
    })
    .catch((err) => {
      displaySignupMsg("Error: " + err.message);
    });
};

const initiateStorage = () => {
  storageController.initiateStorage();
};

function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

const authStateObserver = (user) => {
  if (user) {
    const username = getUserName();
    const proPic = getProfilePicUrl();

    let userData;
    firestore.userExist(user.uid).then((result) => {
      userData = result;
      if (!userData) {
        firestore.createUser(user.uid, user.email);
      }
    });

    loginDisplay(username, proPic);
    sidebarBtnFunction();
    loadLists(storageController.getListArray());
    loadTabs("Tasks");

    console.log("user sign in");
  } else {
    logoutDisplay();
  }
};

const createList = (name) => {
  storageController.newList(name);

  //call list display
  loadLists(storageController.getListArray());
};

const addTask = (name, date, listId, important) => {
  //create new task object
  const newTask = task(name, date, listId, important, false);

  console.log(newTask);
  //add task to list
  //   const listToAdd = storageController.getList(listId);
  //   listToAdd.addToList(newTask);
  firestore.addTasktoList(newTask);
  //save it somewhere
  //   storageController.saveList(listToAdd, listId);
  const list = firestore.getTasksofList(listId);
  //   displayTasks(list);
};

const toggleTask = (event, taskId, listId) => {
  const button = event.currentTarget.classList[0];
  const targetList = storageController.getList(listId);

  console.log(listId);
  console.log(button);
  console.log(targetList);
  switch (button) {
    case "taskdate":
      targetList.updateTask(taskId, "date", event.currentTarget.value);
      break;
    case "taskimportant":
      targetList.updateTask(taskId, "important", "dummypara");
      break;
    case "taskcompleted":
      targetList.updateTask(taskId, "completed", "dummypara");
      break;
    case "deltask":
      targetList.deleteTask(taskId);
  }

  storageController.saveList(targetList, listId);
};

const loadTabs = (tabName) => {
  const loadTasksTab = () => {
    console.log("Loading Task Tab");
    const listRef = "DEFAULT_LIST" + getAuth().currentUser.uid;

    loadMainContent(tabName, listRef);

    if (storageController.getList(0) == null) {
      return;
    }
    firestore.getTasksofList(listRef).then((result) => displayTasks(result));
  };

  const loadTodayTab = () => {
    let displayArray = [];
    const listArray = storageController.getListArray();

    listArray.forEach((list) => {
      displayArray = displayArray.concat(
        storageController.getList(list.listId).getTodayTasks()
      );
    });

    loadMainContent(tabName);
    displayTasks(displayArray);
  };

  const loadImportantTab = () => {
    let displayArray = [];
    const listArray = storageController.getListArray();

    listArray.forEach((list) => {
      displayArray = displayArray.concat(
        storageController.getList(list.listId).getImportantTasks()
      );
    });

    loadMainContent(tabName);
    displayTasks(displayArray);
  };

  const loadCompletedTab = () => {
    let displayArray = [];
    const listArray = storageController.getListArray();

    listArray.forEach((list) => {
      displayArray = displayArray.concat(
        storageController.getList(list.listId).getCompletedTasks()
      );
    });

    loadMainContent(tabName);
    displayTasks(displayArray);
    displayCompleted();
  };

  const loadListTab = () => {
    const listId = tabName;
    const listName = storageController.findListNamebyId(listId);
    console.log(listName);
    loadMainContent(listName, listId);
    console.log("now display tasks for tab");
    displayTasks(storageController.getList(listId).getTasks());
  };

  console.log("before tab switch");
  switch (tabName) {
    case "Tasks":
      loadTasksTab();
      break;
    case "Today":
      loadTodayTab();
      break;
    case "Important":
      loadImportantTab();
      break;
    case "Completed":
      loadCompletedTab();
      break;
    default:
      loadListTab();
  }
};

const deleteList = (listId) => {
  storageController.deleteList(listId);
  loadLists(storageController.getListArray());
};

// signOutUser();
initiateStorage();
initFirebaseAuth();
userControl();

export {
  addTask,
  toggleTask,
  createList,
  loadTabs,
  deleteList,
  googleSignIn,
  signOutUser,
  registerUser,
  signIn,
};
