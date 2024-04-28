const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo) {
    generateTemplate(todo);
  }

  addForm.add.value = '';
});

list.addEventListener('click', e => {
  if (!e.target.classList.contains('delete')) return;

  e.target.parentElement.remove();
});

const filterTodos = term => {
  Array.from(list.children)
    .forEach((todo) => {
      if (todo.textContent.toLowerCase().includes(term)) {
        todo.classList.remove('filtered');
      } else {
        todo.classList.add('filtered');
      }
    });
};

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();

  filterTodos(term);
});