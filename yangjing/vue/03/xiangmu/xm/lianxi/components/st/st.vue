<template>
    <div class='stli'>
        <div class="list-group">
          <a href="#" class="list-group-item"><router-link to='/index/st1'>日常用品</router-link></a>  
          <a href="#" class="list-group-item"><router-link to='/index/st2'>饮料</router-link></a>
          <a href="#" class="list-group-item"><router-link to='/index/st3'>水果</router-link></a>
        </div>  
        <div class="you">
            <router-view></router-view>
            <!-- 与路由的或者对应
            <router-view name='styousj1'></router-view>
            <router-view name='styousj2'></router-view>
            <router-view name='styousj3'></router-view> -->
        </div>
    </div>
</template>
<script type="text/javascript">
    import './st.scss'
    
    export default {}
</script>