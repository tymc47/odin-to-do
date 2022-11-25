import {
  addTask,
  toggleTask,
  createList,
  loadTabs,
  deleteList,
  googleSignIn,
  signOutUser,
  registerUser,
  signIn,
} from "./index";

const maincontent = document.querySelector(".maincontent");
const loginBtn = document.querySelector("#loginbtn");
const logoutBtn = document.querySelector("#logoutbtn");
const sideBar = document.querySelector(".sidebar");
const loginPage = document.querySelector("#login-page");
const googleBtn = document.querySelector("#googlebtn");
const signUpBtn = document.querySelector("#signupbtn");
const loginPageBtn = document.querySelector("#loginpagebtn");
const loginForm = document.querySelector("#loginform");
const signupForm = document.querySelector("#signupform");
const registerBtn = document.querySelector("#registerbtn");

const userControl = () => {
  logoutBtn.addEventListener("click", signOutUser);
  googleBtn.addEventListener("click", googleSignIn);
  registerBtn.addEventListener("click", () => {
    const email = document.querySelector("#sign_email");
    const password = document.querySelector("#sign_password");
    const confirm = document.querySelector("#sign_confirm");

    registerUser(email.value, password.value, confirm.value);

    password.value = "";
    confirm.value = "";
  });

  loginBtn.addEventListener("click", () => {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    signIn(email.value, password.value);
    email.value = "";
    password.value = "";
  });

  loginPageBtn.addEventListener("click", () => {
    loginForm.removeAttribute("style");
    signupForm.style.display = "none";
    signUpBtn.removeAttribute("hidden");
    loginPageBtn.setAttribute("hidden", "true");
  });

  signUpBtn.addEventListener("click", () => {
    signupForm.removeAttribute("style");
    loginForm.style.display = "none";
    loginPageBtn.removeAttribute("hidden");
    signUpBtn.setAttribute("hidden", "true");
  });
};

const usernameBox = document.querySelector("#username");
const userpicBox = document.querySelector("#userpic");

const logoutDisplay = () => {
  console.log("user is logged out");
  loginBtn.removeAttribute("hidden");
  logoutBtn.setAttribute("hidden", "true");
  usernameBox.setAttribute("hidden", "true");
  userpicBox.setAttribute("hidden", "true");
  sideBar.setAttribute("hidden", "true");
  maincontent.setAttribute("hidden", "true");
  loginPage.removeAttribute("style");
};

const loginDisplay = (username, picUri) => {
  console.log(username, "is logged in");
  sideBar.removeAttribute("hidden");
  maincontent.removeAttribute("hidden");
  logoutBtn.removeAttribute("hidden");
  loginPage.style.display = "none";
  userpicBox.innerHTML = "";

  if (picUri) {
    const icon = document.createElement("img");
    icon.style.height = "50px";
    icon.style.width = "50px";
    icon.style.borderRadius = "50px";
    icon.src = picUri;
    userpicBox.appendChild(icon);
  }
  usernameBox.textContent = username;
  usernameBox.removeAttribute("hidden");
  userpicBox.removeAttribute("hidden");
};

const sidebarBtnFunction = () => {
  const taskBtn = document.querySelector("#tasksbtn");
  const todayBtn = document.querySelector("#todaybtn");
  const importantBtn = document.querySelector("#importantbtn");
  const completedBtn = document.querySelector("#completedbtn");
  const listFormBtn = document.querySelector("#addlistbtn");
  const addListBtn = document.querySelector("#addlist");
  const closeListFormBtn = document.querySelector("#closelistform");

  taskBtn.addEventListener("click", () => {
    loadTabs("Tasks");
  });

  todayBtn.addEventListener("click", () => {
    loadTabs("Today");
  });

  importantBtn.addEventListener("click", () => {
    loadTabs("Important");
  });

  completedBtn.addEventListener("click", () => {
    loadTabs("Completed");
  });

  listFormBtn.addEventListener("click", () => {
    document.querySelector("#addlistform").style.display = "flex";
  });

  addListBtn.addEventListener("click", () => {
    const listname = document.querySelector(
      '#addlistform > input[type="text"]'
    );
    if (listname == "") {
      alert("Please enter list name");
      return;
    }

    createList(listname.value);
    listname.value = "";
    document.querySelector("#addlistform").style.display = "none";
  });

  closeListFormBtn.addEventListener("click", () => {
    document.querySelector("#addlistform").style.display = "none";
  });
};

const loadLists = (listArray) => {
  console.log(listArray);
  if (listArray == null) {
    return;
  }

  //clear list container
  const listContainer = document.querySelector("#listcontainer");
  listContainer.innerHTML = "";

  //add list button for each list
  listArray.forEach((list) => {
    console.log(list);
    if (list.listId == 0) {
      return;
    }
    listContainer.innerHTML += `<div class="list"><button class="list" data-list=${list.listId}>
        <span class="material-symbols-outlined">list</span>${list.name}</button>
        <button class="dellist" data-list=${list.listId}><span class="material-symbols-outlined">delete</span></button>
        </div>`;
  });

  //add functionality to list buttons
  const listBtns = document.querySelectorAll("button.list");
  const delListBtns = document.querySelectorAll(".dellist");
  listBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      console.log(event.currentTarget.dataset.list);
      loadTabs(event.currentTarget.dataset.list);
    })
  );

  delListBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      deleteList(event.currentTarget.dataset.list);
      loadTabs("Tasks");
    })
  );
};

const loadMainContent = (tabname, listIndex = "") => {
  // maincontent.removeAttribute('class')
  // maincontent.classList.add('maincontent')

  //load display
  maincontent.innerHTML = "";
  const headingHTML = `<div id="main-heading"><h1>${tabname}</h1>
                            <button id="displayformbtn">
                            <span class="material-symbols-outlined">add</span>
                            </button> 
                            </div>
                            <div id="addtaskform">
                            <input type="text">
                            <input type="date">
                            <input class="star" type="checkbox">
                            <button type="button" id="addtask">Add</button>
                            <button type="button" id="canceladd">Cancel</button> 
                            </div>
                            <div class="taskcontainer"></div>`;
  maincontent.innerHTML += headingHTML;

  if (tabname == "Important" || tabname == "Completed" || tabname == "Today") {
    document.querySelector("#displayformbtn").style.display = "none";
  }

  //form functionality and display
  const addTaskForm = document.querySelector("#addtaskform");
  document.querySelector("#displayformbtn").addEventListener("click", () => {
    addTaskForm.style.display = "block";
  });

  //add functionality to form buttons
  document.querySelector("#addtask").addEventListener("click", () => {
    const taskName = document.querySelector(
      '#addtaskform > input[type="text"]'
    );
    const taskDate = document.querySelector(
      '#addtaskform > input[type="date"]'
    );
    const taskImportant = document.querySelector(
      '#addtaskform > input[type="checkbox"]'
    );
    if (taskName.value == "") {
      alert("Please enter a tilte for your task!");
      return;
    }

    console.log("adding task");
    addTaskForm.style.display = "none";
    addTask(taskName.value, taskDate.value, listIndex, taskImportant.checked);
    taskName.value = "";
    taskDate.value = "";
    taskImportant.checked = false;
  });

  document.querySelector("#canceladd").addEventListener("click", () => {
    addTaskForm.style.display = "none";
  });
};

const displayTasks = (taskArray) => {
  console.log("displaying Task");
  const taskContainer = document.querySelector(".taskcontainer");
  taskContainer.innerHTML = "";

  //display all task
  console.log(taskArray);
  taskArray.forEach((task, index) => {
    const taskTemplate = `<div class="${
      task.completed ? "task completed" : "task"
    }" data-displayorder=${index}>
        <input type="checkbox" class="taskcompleted" data-displayorder=${index}>
        <span class="taskname" data-displayorder=${index}>${task.name}</span>
        <input type="date" class="taskdate" data-displayorder=${index} value=${
      task.date
    } >
        <button class="${
          task.important ? "taskimportant true" : "taskimportant"
        }" data-displayorder=${index}>
        <span class="material-symbols-outlined">star</span>
        </button>
        <button class="deltask" data-displayorder=${index}><span class="material-symbols-outlined">delete</span></button>
        </div>`;

    taskContainer.insertAdjacentHTML("beforeend", taskTemplate);

    console.log(task.taskId);
    console.log(task.listId);
    //add functionality to task buttons
    document
      .querySelector(`[data-displayorder="${index}"].taskdate`)
      .addEventListener("input", (event) => {
        toggleTask(event, task.taskId, task.listId);
      });

    document
      .querySelector(`[data-displayorder="${index}"].taskimportant`)
      .addEventListener("click", (event) => {
        toggleTask(event, task.taskId, task.listId);
        event.currentTarget.classList.toggle("true");
      });

    document
      .querySelector(`[data-displayorder="${index}"].taskcompleted`)
      .addEventListener("change", (event) => {
        toggleTask(event, task.taskId, task.listId);
        //tasks disappear from the list after toggle
        document.querySelector(
          `[data-displayorder="${index}"].task`
        ).style.display = "none";
      });

    document
      .querySelector(`[data-displayorder="${index}"].deltask`)
      .addEventListener("click", (event) => {
        toggleTask(event, task.taskId, task.listId);
        document.querySelector(
          `[data-displayorder="${index}"].task`
        ).style.display = "none";
      });
  });
};

const displayCompleted = () => {
  const tasks = document.querySelectorAll(".task.completed");
  tasks.forEach((task) => {
    console.log(task);
    task.style.display = "flex";
    task.querySelector("input[type=checkbox]").checked = true;
  });
};

const displaySignupMsg = (msg) => {
  const msgbox = document.querySelector("#signupmsg");

  msgbox.textContent = msg;

  setTimeout(() => {
    msgbox.textContent = " ";
  }, 5000);
};

const displayLoginMsg = (msg) => {
  const msgbox = document.querySelector("#loginmsg");

  msgbox.textContent = msg;

  setTimeout(() => {
    msgbox.textContent = " ";
  }, 5000);
};

export {
  sidebarBtnFunction,
  loadMainContent,
  displayTasks,
  loadLists,
  displayCompleted,
  userControl,
  loginDisplay,
  logoutDisplay,
  displaySignupMsg,
  displayLoginMsg,
};
