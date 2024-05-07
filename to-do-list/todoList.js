var taskInput = document.getElementById("new-task"); //새로운 할 일 입력 변수
var addButton = document.getElementsByTagName("button")[0]; // first button = "Add" button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // 완료되지 않은 일들의 모음
var completedTasksHolder = document.getElementById("completed-tasks"); //완료된 일들의 모음

// To do List에 새로운 할 일 추가하는 함수
var createNewTaskElement = function (taskString) {
  // To do list 생성
  var listItem = document.createElement("li");

  // To do List의 수정을 위한 변수 생성
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  // 각각의 Element들을 수정 가능하게 값 설정
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  // 새롭게 추가한 일에 구성요소 추가 (체크박스, 수정/삭제 버튼, 수정/삭제시 입력값)
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  //taskListItem의 Element들을 변수에 할당
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  // editTask와 edit button의 동작을 하나로 묶음
  editButton.onclick = editTask;

  // deleteTask와 delete button의 동작을 하나로 묶음
  deleteButton.onclick = deleteTask;

  //checkBoxEventHandler 와 checkbox의 동작을 하나로 묶음
  checkBox.onchange = checkBoxEventHandler;
};

// 기능 1. 할 일 추가하기
var addTask = function () {
  var listItem = createNewTaskElement(taskInput.value); // "Add Task" 에 입력된 값을 인자로 createNewTaskElement 호출
  incompleteTasksHolder.appendChild(listItem); // incompleteTasksHolder에 위에서 입력된 새로운 할 일 추가
  bindTaskEvents(listItem, taskCompleted); // 수정, 삭제, 완료 표현을 위해 하나로 바인딩

  taskInput.value = ""; // 할 일 추가한 뒤 "Add Task"에 입력된 값 초기화
};

// 기능 2. 할 일 수정하기
var editTask = function () {
  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");

  //if the class of the parent is .editMode
  if (containsClass) {
    //Switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
  } else {
    //Switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
  }

  //Toggle .editMode on the list item
  listItem.classList.toggle("editMode");
};

// 기능 3. 할 일 삭제하기
var deleteTask = function () {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  //Remove the parent list item from the ul
  ul.removeChild(listItem);
};

// 기능 4-1. 완료한 일 체크하기
var taskCompleted = function () {
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem); // #completed-tasks에 완료한 일(listItem)을 추가
  bindTaskEvents(listItem, taskIncomplete);
};

// 기능 4-2. 완료하지 않은 일 uncheck 하기
var taskIncomplete = function () {
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem); // #incomplete-tasks에 아직 완료하지 않은 일 추가
  bindTaskEvents(listItem, taskCompleted);
};

// "Add" 버튼을 클릭했을 시, addTask 함수 실행
addButton.addEventListener("click", addTask);

// incompleteTasksHolder의 항목들을 각자 바인딩 (수정, 삭제, 완료 표시를 위해)
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

// completedTasksHolder의 항목들을 각자 바인딩 (수정, 삭제, 완료 표시를 위해)
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
