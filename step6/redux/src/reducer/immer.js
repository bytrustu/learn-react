import produce from 'immer';

const person = { name: 'bytrustu', age: 22 };
const newPerson = produce(person, draft => {
    draft.age = 32;
})

function reducer(state = INITIAL_STATE, action) {
    return produce(state, draft => {
       switch (action.type) {
           case ADD:
               draft.todos.push(action.todo);
               break;
           case REMOVE_ALL:
               draft.todos = [];
               break;
           case REMOVE:
               draft.todos.filter(todo => todo.id !== aciton.id);
               break;
           default:
               break;
       }
    });
}

function reducer2(state = INITIAL_STATE, action) {
    return produce(state, draft => {
       switch (action.type) {
           case SET_SELECTED_PEOPLE:
               draft.selectPeople = action.id;
               break;
           case EDIT_PEOPLE_NAME:
               const people = draft.peopleList.find(item => item.id === action.id);
               people.name = action.name;
               break;
           default:
               break;
       }
    });
}