//操作
export default function cz(state,action){
    switch(action.type){
        case '+':
            state += 1;
            break;
        case '-':
            state -= 1;
            break;
        default:
            state = 0;
            break;
    }
    return state;
}