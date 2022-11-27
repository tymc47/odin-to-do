import {
  displayTasks,
  loadLists,
  loadMainContent,
  displayCompleted,
  userControl,
} from "./domController";
import { task } from "./objectController";
import { initFirebaseAuth } from "./userController";
import { getFirebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firestore from "./storageController_firestore";
import { DEMO_createList } from "./demoController";

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const addTask = (name, date, listId, important) => {
  const newTask = task(name, date, listId, important, false);

  firestore.addTask(newTask);

  firestore.getList(listId).then((result) => displayTasks(result.getTasks()));
};

const toggleTask = (event, taskId, listId) => {
  const button = event.currentTarget.classList[0];
  const eventValue = event.currentTarget.value;

  firestore.getList(listId).then((targetList) => {
    switch (button) {
      case "taskdate":
        targetList.updateTask(taskId, "date", eventValue);
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

    if (button !== "deltask") {
      const newTask = targetList.getOneTask(taskId);
      firestore.updateTask(newTask);
    } else {
      firestore.deleteTask(listId, taskId);
    }
  });
};

const loadTabs = async (tabName) => {
  const uid = getAuth().currentUser.uid;

  const loadTasksTab = async () => {
    const listRef = "DEFAULT_LIST" + uid;

    loadMainContent(tabName, listRef);

    const list = await firestore.getList(listRef);
    displayTasks(list.getTasks());
  };

  const loadTodayTab = async () => {
    const displayArray = await firestore.getTodayTasks(uid);

    loadMainContent(tabName);
    displayTasks(displayArray);
  };

  const loadImportantTab = async () => {
    let displayArray = await firestore.getImportantTasks(uid);

    loadMainContent(tabName);
    displayTasks(displayArray);
  };

  const loadCompletedTab = async () => {
    let displayArray = await firestore.getCompletedTasks(uid);

    loadMainContent(tabName);
    displayTasks(displayArray);
    displayCompleted();
  };

  const loadListTab = async () => {
    const listId = tabName;
    const list = await firestore.getList(listId);
    const listName = list.name;
    loadMainContent(listName, listId);
    displayTasks(list.getTasks());
  };

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

const createList = async (name) => {
  const user = getAuth().currentUser;
  if (user.isAnonymous) {
    DEMO_createList(name, user.uid);
  } else firestore.createList(name, user.uid);

  const listArray = await firestore.getUserLists(uid);
  loadLists(listArray);
};

const deleteList = async (listId) => {
  const uid = getAuth().currentUser.uid;

  firestore.deleteList(listId);
  const listArray = await firestore.getUserLists(uid);
  loadLists(listArray);
};

//signOutUser()
initFirebaseAuth();
userControl();

export { addTask, toggleTask, createList, loadTabs, deleteList };
