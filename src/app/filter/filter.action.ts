
import { createAction, props } from '@ngrx/store';
import { FilterApp } from './filter.interface';

const selectFilter = createAction('selectAll', props<FilterApp>());

export {
    selectFilter,
};
