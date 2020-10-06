
import { createAction, props } from '@ngrx/store';

const addItem = createAction('[TodoAdd] add', props<{text: string}>());
const checkItem = createAction('[TodoItem] edit', props<{id: number}>());
const editItem = createAction('[TodoItme] text', props<{id: number, textN: string}>());
const deleteItem = createAction('[TodoItme] deleteOne', props<{id: number}>());
const toggleAll = createAction('[TodoItme] toggleAll', props<{completed: boolean}>());
const deleteCompleted = createAction('[TodoItem] deleteAll');

export {
    addItem,
    checkItem,
    editItem,
    deleteItem,
    toggleAll,
    deleteCompleted
};
