export function sj1(){
    return {
        type:'lb1'
    }
}

export function sj2(){
    return {
        type:'lb2'
    }
}

export function student(){
    return {
        type:'student',
        url:'http://localhost:5555/04/redux2/common.json',
        method:'get',
        data:{page:1,pageitems:10}
    }
}