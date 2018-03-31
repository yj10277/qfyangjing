export function student(){
    
    return {
        type:'student',
        url:'http://localhost:5555/05/common.json',
        method:'get',
        data:{page:1,pageitems:10}

    }
}