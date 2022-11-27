import {
  collection,
  setDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./index";
import { list } from "./objectController";
import { getDate } from "./utils";

const userExist = async (uid) => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists();
};

const createUser = async (uid, email) => {
  console.log("create user in db");

  try {
    const listREF = "DEFAULT_LIST" + uid;
    await setDoc(doc(db, "lists", listREF), {
      name: "default",
      userId: uid,
    });
    await setDoc(doc(db, "users", uid), {
      email: email,
      lists: [listREF],
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getList = async (listId) => {
  if (!listId) return null;

  //query the list itself
  const nameQuery = await getDoc(doc(db, "lists", listId));

  //query tasks subcollection inside list
  const listRef = collection(db, "lists");
  const querySnapshot = await getDocs(collection(listRef, listId, "tasks"));

  //create list object with its name and tasks
  const resultArray = list(nameQuery.data().name);
  querySnapshot.forEach((doc) => {
    resultArray.addToList(doc.data());
  });
  return resultArray;
};

const addTask = async (task) => {
  const listRef = collection(db, "lists");
  //create an Id for task
  const newTaskRef = doc(collection(listRef, task.listId, "tasks"));

  //set the id to its property
  const newTask = {
    ...task,
    taskId: newTaskRef.id,
  };

  //add to subcollection inside the list
  await setDoc(newTaskRef, newTask);
};

const getUserLists = async (uid) => {
  const q = query(collection(db, "lists"), where("userId", "==", uid));
  const snapShot = await getDocs(q);
  let array = [];
  snapShot.forEach((doc) => {
    array.push({ name: doc.data().name, listId: doc.id });
  });
  return array;
};

const updateTask = async (newTask) => {
  const taskRef = newTask.taskId;

  await setDoc(doc(db, "lists", newTask.listId, "tasks", taskRef), newTask);
};

const deleteTask = async (listId, taskId) => {
  await deleteDoc(doc(db, "lists", listId, "tasks", taskId));
};

const getTodayTasks = async (uid) => {
  const userLists = await getUserLists(uid);
  let tasks = [];
  for await (const list of userLists) {
    const q = query(
      collection(db, "lists", list.listId, "tasks"),
      where("date", "==", getDate())
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tasks.push(doc.data());
    });
  }

  return tasks;
};

const getImportantTasks = async (uid) => {
  const userLists = await getUserLists(uid);
  let tasks = [];
  for await (const list of userLists) {
    const q = query(
      collection(db, "lists", list.listId, "tasks"),
      where("important", "==", true)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tasks.push(doc.data());
    });
  }

  return tasks;
};

const getCompletedTasks = async (uid) => {
  const userLists = await getUserLists(uid);
  let tasks = [];
  for await (const list of userLists) {
    const q = query(
      collection(db, "lists", list.listId, "tasks"),
      where("completed", "==", true)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tasks.push(doc.data());
    });
  }

  return tasks;
};

const createList = async (name, uid) => {
  await setDoc(doc(collection(db, "lists")), {
    name: name,
    userId: uid,
  });
};

const deleteList = async (listId) => {
  await deleteDoc(doc(db, "lists", listId));
};

const firestore = {
  userExist,
  createUser,
  addTask,
  getList,
  updateTask,
  deleteTask,
  getUserLists,
  getTodayTasks,
  getImportantTasks,
  getCompletedTasks,
  createList,
  deleteList,
};

export default firestore;
