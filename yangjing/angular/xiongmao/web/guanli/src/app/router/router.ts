//路由
import {RouterModule,Routes} from '@angular/router'


import {LoginComponent} from '../components/login/login.component'
import {IndexComponent} from '../components/index/index.component'
import {GoodsComponent} from '../components/index/goods/goods.component'
import {UserComponent} from '../components/index/user/user.component'

const routes:Routes = [
      //默认跳转路由和传参
      {path:'',redirectTo:'/login',pathMatch:'full'},
      
      {path:'login',component:LoginComponent},
      {     path:'index',
            component:IndexComponent,
            children:[
                        {path:'',redirectTo:'goods',pathMatch:'full'},
                        {path:'goods',component:GoodsComponent},
                        {path:'user',component:UserComponent}

                     ]
      }
]

export const AppRouter = RouterModule.forRoot(
      routes,
      {enableTracing:false}
)