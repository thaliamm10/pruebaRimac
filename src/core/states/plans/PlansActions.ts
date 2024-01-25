export const ADD_DATA = 'ADD_DATA';

export const addData = (newData: any) => ({
    type: ADD_DATA,
    payload: newData,
});
