import {atom} from 'recoil';

const taskState = atom({
    key: 'todoState',
    default: [{
        id:'0',
        content:'test',
        completed: false
    }]
});

export default taskState;