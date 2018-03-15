<template>
    <div>
        <select class="col-sm-2 form-control form-control-sm" v-model='$store.state.header.lanType'>
            <option value='en'>en</option>
            <option value='cn'>cn</option>
        </select>    
        <span>{{$store.state.header.lanType}}</span>
    </div>
</template>
<script type="text/javascript">
    import commonjs from '../../../common/common.js'
    
    export default {
        data(){
            return {
                lanType:commonjs.lanType
            }
        },
        mounted(){
            console.log(this.$store.state.header.lanType);
        }
    }

</script>
    