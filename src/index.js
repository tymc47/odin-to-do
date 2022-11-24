import {
  sidebarBtnFunction,
  loadTasks,
  displayTasks,
  loadLists,
  loadMainContent,
  displayCompleted,
  userControl,
  toggleUser,
} from "./domController";
import { task, list } from "./objectController";
import storageController from "./storageController";
import { getFirebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const signIn = async () => {
  let provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
};

function signOutUser() {
  // Sign out of Firebase.
  signOut(getAuth());
}

function getUserName() {
  return getAuth().currentUser.displayName;
}
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
}

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

    toggleUser(username, proPic);

    console.log("user sign in");
  } else {
    toggleUser();
  }
};

const createList = (name) => {
  storageController.newList(name);

  //call list display
  loadLists(storageController.getListArray());
};

const addTask = (name, date, listId, important) => {
  //create new task object
  const taskId = Date.now();
  const newTask = task(name, date, listId, important, false, taskId);

  console.log(newTask);
  //add task to list
  const listToAdd = storageController.getList(listId);
  listToAdd.addToList(newTask);

  //save it somewhere
  storageController.saveList(listToAdd, listId);

  displayTasks(listToAdd.getTasks());
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
    loadMainContent(tabName);

    if (storageController.getList(0) == null) {
      return;
    }
    displayTasks(storageController.getList(0).getTasks());
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

initiateStorage();
initFirebaseAuth();
userControl();
sidebarBtnFunction();
loadLists(storageController.getListArray());
loadTabs("Tasks");

export {
  addTask,
  toggleTask,
  createList,
  loadTabs,
  deleteList,
  signIn,
  signOutUser,
};
