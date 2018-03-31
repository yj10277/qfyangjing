export default function reducer(state,action){
        switch(action.type){
            case 'lb1':
                return [{id:1,name:'yang',age:20,gender:'男'},{id:2,name:'jing',age:24,gender:'男'}];
            case 'lb2':
                return [{id:1,mc:'开水',jg:12},{id:2,mc:'冰水',jg:40}];
            case 'student':
                return action.result;
            default:
                return []
        }
}