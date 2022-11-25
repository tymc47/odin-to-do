import {
  addDoc,
  collection,
  setDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "./index";

const addUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const userExist = async (uid) => {
  console.log(uid);
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
      tasks: [],
    });
    await setDoc(doc(db, "users", uid), {
      email: email,
      lists: [listREF],
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getTasksofList = async (listId) => {
  if (!listId) return null;

  const q = query(collection(db, "tasks"), where("listId", "==", listId));
  const querySnapshot = await getDocs(q);
  const resultArray = [];
  querySnapshot.forEach((doc) => {
    resultArray.push(doc.data());
  });
  return resultArray;
};

const addTasktoList = async (task) => {
  const newTaskRef = doc(collection(db, "tasks"));

  const newTask = {
    ...task,
    taskId: newTaskRef.id,
  };
  await setDoc(newTaskRef, newTask);
};

const firestore = {
  addUser,
  userExist,
  createUser,
  addTasktoList,
  getTasksofList,
};

export default firestore;
