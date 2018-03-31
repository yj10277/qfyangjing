<template>
    <div class="addDirection">
        <div id="add_header">
            <router-link to="/direction"><span class="iconfont icon-fanhui">  </span></router-link>
            <span>编辑收货地址</span>
        </div>
        <div id="add_main">
            <p class="connectPerson">联系人</p>
            <div>
              <label for="username">姓名 :</label>
              <input type="text"  id="username" placeholder="请输入你的姓名" v-model="name"/><br />
            </div>
           
            <div>
              <label for="place">电话 :</label><input type="text"  id="place" placeholder="请输入你的电话号码" v-model="tel"/>
            </div>
           
            <p class="address">收货地址</p>
            <div>
                <input type="textarea" id="place" placeholder="请输入你的地址" v-model="places"/>
            </div>
            


           
        </div>
        <div id="add_footer" @click = "save">保存</div>
        <div class="error" v-show="ok">
                <div>
                <i class="del" @click = "hidden">X</i>
                <h1>SORRY</h1>
                <p>格式不正确</p>
                </div>
            </div>
    </div>
</template>
<script type="text/javascript">
    import './addDirection.css'
    import http from '../../../utils/httpask.js'
    export default {
      data(){
        return {
          name:'',
          tel:'',
          places:'',
          ok:false,
        }
      },
      methods:{
        save(){
          if(this.name == '' || this.tel == '' || this.places == ''){
            this.ok=true
          }else{
              var id= window.sessionStorage.getItem('usersId');
              var lc= JSON.parse(window.sessionStorage.getItem('userLocation'));

              var direction={rename:this.name,direction:this.places,phone:this.tel}
              lc.push(direction)
           

             http.post('updateDirection',{direction:JSON.stringify(lc),id:id}).then((res)=>{
                   
                    if(res.data.status){
                        this.$router.push('direction')
                    }
              })
        }
           

        },
        hidden(){
          this.ok=false
        }
      }
    }

</script>