export default function sj(state={},action){
    let _state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        
        case 'laoing':
            _state.show = true;
            break;
        case 'wc':
            _state.dataset = action.result;
            _state.show = false;
            break;
       
    }
    return _state;
}