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
                        api:'http://localhost:8080/project2/components/datagrid/datagrid.json',
                        
                        cols:['account','phone','mail','projectname']
                    }
                }
            }
        }
</script>