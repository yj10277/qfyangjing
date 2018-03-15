<template>
    <div>
        <datagrid :config='config'></datagrid>
    </div>

</template>
<script type="text/javascript">
        import datagrid from '../datagrid/datagrid.vue'
        export default {
            components:{
                datagrid:datagrid
            },
            data(){
                return{
                    config:{
                        api:'https://cnodejs.org/api/v1/topics',
                        params:{page:1,limit:10},
                        cols:['title']
                    }
                }
            }
        }
</script>