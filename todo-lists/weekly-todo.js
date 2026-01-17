weeklyTodoList = document.querySelector("#weekly-todo-list");

// UPDATE STATUSES (0-n/a 1-assigned 2-postponed 3-completed)
const statuses = ["", ".", ">", "x"];

const dayCells = weeklyTodoList.querySelectorAll(".day");
dayCells.forEach((dayCell) => {
    dayCell.addEventListener("click", () => {
        // console.log("old classlist", dayCell.classList);
        let status = dayCell.classList[0].split("-").pop();
        // console.log("old status", status);
        let newStatus = ++status % 4;
        // console.log("new status", newStatus);
        dayCell.textContent = statuses[newStatus];
        dayCell.classList.replace("status-" + --status, "status-" + newStatus);
        // console.log("new classlist", dayCell.classList);
    });
});


// UPDATE TASK NAME
const taskNameCells = weeklyTodoList.querySelectorAll(".task-name");
taskNameCells.forEach((taskNameCell) => {
    taskNameCell.addEventListener("dblclick", () => {
        let taskName = prompt("Enter task name");
        taskNameCell.textContent = taskName;
    });
});


// HIGHLIGHT "TODAY" COLUMN
const today = new Date().getDay(); // 0 (Sun) - 6 (Sat)
let columnIndex = today;
if (today == 0) {columnIndex = 6;}
weeklyTodoList.querySelector(
    `th:nth-child(${columnIndex})`).classList.add("today-column");
weeklyTodoList.querySelectorAll(
    `td:nth-child(${columnIndex})`).forEach(td => td.classList.add("today-column"));