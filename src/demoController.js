import { db } from "./index";
import {
  collection,
  setDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  writeBatch,
} from "firebase/firestore";
import { getDate } from "./utils";

let DEMOUID;

const createDefaultData = (batch, listREF, uid) => {
  let newTaskRef = doc(collection(db, "lists", listREF, "tasks"));

  batch.set(newTaskRef, {
    name: "wash dishes",
    date: getDate(),
    important: true,
    completed: false,
    listId: listREF,
    taskId: newTaskRef.id,
  });

  let newTaskRef1 = doc(collection(db, "lists", listREF, "tasks"));

  batch.set(newTaskRef1, {
    name: "finish chapter 2 of GTA5",
    date: getDate(),
    important: false,
    completed: false,
    listId: listREF,
    taskId: newTaskRef1.id,
  });

  let newTaskRef2 = doc(collection(db, "lists", listREF, "tasks"));

  batch.set(newTaskRef2, {
    name: "make dentist appointment",
    date: getDate(3),
    important: true,
    completed: false,
    listId: listREF,
    taskId: newTaskRef2.id,
  });

  let newTaskRef3 = doc(collection(db, "lists", listREF, "tasks"));

  batch.set(newTaskRef3, {
    name: "cut hair",
    date: getDate(1),
    important: false,
    completed: false,
    listId: listREF,
    taskId: newTaskRef3.id,
  });

  let newTaskRef4 = doc(collection(db, "lists", listREF, "tasks"));

  batch.set(newTaskRef4, {
    name: "chapter 1 of Eloquent JavaScript",
    date: getDate(1),
    important: false,
    completed: true,
    listId: listREF,
    taskId: newTaskRef4.id,
  });

  const listRef1 = doc(collection(db, "lists"));
  batch.set(listRef1, {
    name: "Programming",
    userId: uid,
    demo: true,
  });

  let P_Task_Ref = doc(collection(db, "lists", listRef1.id, "tasks"));
  batch.set(P_Task_Ref, {
    name: "revisit git rebose",
    date: getDate(1),
    important: true,
    completed: false,
    listId: listRef1.id,
    taskId: P_Task_Ref.id,
  });

  let P_Task_Ref1 = doc(collection(db, "lists", listRef1.id, "tasks"));
  batch.set(P_Task_Ref1, {
    name: "write readme for to-do app",
    date: getDate(2),
    important: true,
    completed: false,
    listId: listRef1.id,
    taskId: P_Task_Ref1.id,
  });

  const listRef2 = doc(collection(db, "lists"));
  batch.set(listRef2, {
    name: "Groceries",
    userId: uid,
    demo: true,
  });

  let G_Task_Ref = doc(collection(db, "lists", listRef2.id, "tasks"));
  batch.set(G_Task_Ref, {
    name: "Milk",
    date: "",
    important: false,
    completed: false,
    listId: listRef2.id,
    taskId: G_Task_Ref.id,
  });

  let G_Task_Ref1 = doc(collection(db, "lists", listRef2.id, "tasks"));
  batch.set(G_Task_Ref1, {
    name: "Apples",
    date: "",
    important: false,
    completed: false,
    listId: listRef2.id,
    taskId: G_Task_Ref1.id,
  });

  let G_Task_Ref2 = doc(collection(db, "lists", listRef2.id, "tasks"));
  batch.set(G_Task_Ref2, {
    name: "Toilet paper",
    date: "",
    important: false,
    completed: false,
    listId: listRef2.id,
    taskId: G_Task_Ref2.id,
  });
};

export const createDemoUser = async (uid) => {
  DEMOUID = uid;
  const batch = writeBatch(db);

  const listREF = "DEFAULT_LIST" + uid;
  batch.set(doc(db, "lists", listREF), {
    name: "default",
    userId: uid,
    demo: true,
  });
  batch.set(doc(db, "users", uid), {
    email: null,
    lists: [listREF],
  });

  createDefaultData(batch, listREF, uid);

  await batch.commit();
};

const removeList = async (batch) => {
  const q = query(collection(db, "lists"), where("demo", "==", true));
  const snapShot = await getDocs(q);
  let listArray = [];
  snapShot.forEach((doc) => {
    listArray.push(doc.id);
    batch.delete(doc.ref);
  });
  for await (const listId of listArray) {
    const tasksQ = await getDocs(collection(db, "lists", listId, "tasks"));
    tasksQ.forEach((doc) => {
      batch.delete(doc.ref);
    });
  }
};

export const removeDemoData = async () => {
  if (!DEMOUID) return;

  console.log("Remove", DEMOUID);
  const batch = writeBatch(db);

  const listREF = "DEFAULT_LIST" + DEMOUID;
  await removeList(batch);
  batch.delete(doc(db, "users", DEMOUID));

  await batch.commit();
};

export const DEMO_createList = async (name, uid) => {
  await setDoc(doc(collection(db, "lists")), {
    name: name,
    userId: uid,
    demo: true,
  });
};
