import vue from 'vue'
import vuerouter from 'vue-router'
vue.use(vuerouter)

import index from '../components/index/index.vue'
import tou from '../components/tou/tou.vue'
import st from '../components/st/st.vue'
import jiao from '../components/jiao/jiao.vue'

import styousj1 from '../components/styousj1/styousj1.vue'
import styousj2 from '../components/styousj2/styousj2.vue'
import styousj3 from '../components/styousj3/styousj3.vue'

const router = new vuerouter({
    routes:[
        {
            path:'/index',
            components:{tou:tou,st:st,jiao:jiao},
            children:[
                {
                    path:'st1', 
                    components:{default:styousj1}//或者components:{styousj1}
                },
                {
                    path:'st2', 
                    components:{default:styousj2}//或者components:{styousj2}
                },
                {
                    path:'st3',
                    components:{default:styousj3}//或者components:{styousj3}
                }
            ] 

                    
                   
                        
                  
        }            
               
            

        
            


        
    ]


})

export default router;