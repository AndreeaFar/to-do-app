const input = document.getElementById('create-todo');
const ul = document.querySelector('.list-item-wrapper');
const clearCompletedBtnEl = document.querySelector('.clear-completed');
const allBtnEl = document.getElementById('all');
const allMobileBtnEl = document.getElementById('all-mobile');
const activeBtnEl = document.getElementById('active');
const activeMobileBtnEl = document.getElementById('active-mobile');
const completedBtnEl = document.getElementById('completed');
const completedMobileBtnEl = document.getElementById('completed-mobile');
const leftItemsNum = document.getElementById('left-items');
const deleteTodoBtnEl = document.querySelectorAll('.delete-todo');
const todoFilterMobileEl = document.querySelector('.todo-list-filter-mobile');
const todoFilterEl = document.querySelector('.todo-list-filter');

// function to add a new todo
function addTodo(e) {
  // check if enter key is pressed
  if (e.key === 'Enter') {
    // create a new li element
    const li = document.createElement('li');

    li.setAttribute('class', 'todo-list-item');

    li.innerHTML = `
    <label class="checkbox-container"
      >${input.value}<input class="remember" type="checkbox" />
      <span class="checkmark"></span>
      <button><img class="delete-todo" src="./assets/images/icon-cross.svg" alt="" /></button>
    </label>`;

    ul.appendChild(li);

    // clear input after adding the todo
    input.value = '';
  }
  updateItemsLeft();
}

// function to update the "items left" span
function updateItemsLeft() {
  const activeTodos = document.querySelectorAll(
    '.todo-list-item input[type="checkbox"]:not(:checked)'
  );
  const itemsLeft = activeTodos.length;
  leftItemsNum.textContent = `${itemsLeft} items left`;
}

// function to clear completed todos
function clearCompletedTodos() {
  const myTodos = document.querySelectorAll('.todo-list-item');
  myTodos.forEach((todo) => {
    const checkbox = todo.querySelector('.remember');
    if (checkbox.checked) {
      todo.remove();
    }
  });

  // remember.forEach((todo, index) => {
  //   if (todo.checked) {
  //     todos[index].remove();
  //   }
  // });
}

// function to filter completed todos
function filterCompleted() {
  const myTodos = document.querySelectorAll('.todo-list-item');
  myTodos.forEach((todo) => {
    const checkbox = todo.querySelector('.remember');
    if (checkbox.checked) {
      todo.style.display = 'block';
    } else {
      todo.style.display = 'none';
    }
  });
}

// function to filter active todos
function filterActive() {
  const myTodos = document.querySelectorAll('.todo-list-item');
  myTodos.forEach((todo) => {
    const checkbox = todo.querySelector('.remember');
    if (checkbox.checked) {
      todo.style.display = 'none';
    } else {
      todo.style.display = 'block';
    }
  });
}

function filterAll() {
  const myTodos = document.querySelectorAll('.todo-list-item');
  myTodos.forEach((todo) => {
    const checkbox = todo.querySelector('.remember');
    if (checkbox) {
      todo.style.display = 'block';
    }
  });
}

function deleteTodo(event) {
  const listItem = event.target.closest('.todo-list-item');

  if (listItem) {
    listItem.remove();

    updateItemsLeft();
  }
}

function toggleFilterActiveClass(e) {
  const filterItems = document.querySelectorAll('.filter-item');
  filterItems.forEach((el) => el.classList.remove('active'));

  if (e.target.classList.contains('filter-item')) {
    e.target.classList.toggle('active');
    return;
  }
}

// Event listeners
input.addEventListener('keypress', addTodo);
clearCompletedBtnEl.addEventListener('click', clearCompletedTodos);
completedBtnEl.addEventListener('click', filterCompleted);
completedMobileBtnEl.addEventListener('click', filterCompleted);
activeMobileBtnEl.addEventListener('click', filterActive);
activeBtnEl.addEventListener('click', filterActive);
allBtnEl.addEventListener('click', filterAll);
allMobileBtnEl.addEventListener('click', filterAll);
ul.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-todo')) {
    deleteTodo(event);
  }
});
ul.addEventListener('change', function (e) {
  if (e.target.classList.contains('remember')) {
    updateItemsLeft();
  }
});
todoFilterMobileEl.addEventListener('click', toggleFilterActiveClass);
todoFilterEl.addEventListener('click', toggleFilterActiveClass);

updateItemsLeft();
