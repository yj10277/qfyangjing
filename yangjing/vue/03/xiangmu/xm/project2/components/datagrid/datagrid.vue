<template>
    <div>
        <h1>{{$store.state.header.lanType}}</h1>
        <table class='table table-striped'>
            <thead>
                <tr>
                    <th v-for='(val,key) in dataset[0]' v-if='config.cols.indexOf(key)>-1'>{{dictionary[$store.state.header.lanType][key] || key}}</th><!-- 或者{{dictionary[lanType][key] || key}} 但是这个方法控件控制不了要切换只能手动修改lanType的值-->
                </tr>
            </thead>
            <tbody>
                <tr v-for='(obj,idx) in dataset'>
                    <td v-for='(val,key) in obj' v-if='config.cols.indexOf(key)>-1'>{{val}}</td>
                </tr>
            </tbody>
        </table>
        <spinner v-if='yang'></spinner> 
    </div>

</template>

<script type="text/javascript">
        import http from 'axios'
        import commonjs from '../../common/common.js'
        import spinner from '../spinner/spinner.vue'
        export default {
            data(){
                return {
                    dataset:[],
                    yang:false,
                    dictionary:{},
                    lanType:commonjs.lanType
                }
            },
            props:['config'],
            components:{
                spinner:spinner
            },
            //钩子函数（自动调用不用手动调用）
            mounted(){
                console.log(this.$store.state.header.lanType,999)
                this.yang = true;
                
                http.get('http://localhost:8080/project2/dictionary/common.txt').then((res)=>{
                    console.log(res)
                    this.dictionary = res.data;
                })
                http.get(this.config.api,{params:this.config.params || {}}).then((res)=>{
                        console.log(res)
                        this.dataset = res.data.data;
                    this.yang = false;
                })
                
            }
            
        }


</script>