//路由
import {RouterModule,Routes} from '@angular/router'

import {DatagridComponent} from '../components/datagrid/datagrid.component'
import {HerosComponent} from '../components/heros/heros.component'

const routes:Routes = [
      //默认跳转路由和传参
      {path:'',redirectTo:'/heros/1/yangjing',pathMatch:'full'}
      
      {path:'datagrid',component:DatagridComponent},
      {path:'heros/:id/:name',component:HerosComponent}
]

export const AppRouter = RouterModule.forRoot(
      routes,
      {enableTracing:false}
)