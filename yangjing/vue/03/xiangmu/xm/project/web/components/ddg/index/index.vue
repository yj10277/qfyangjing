<template>
    <div class='dhz'>
        <div id='tou'> 
                <pheader></pheader>

        </div>
        
        <div id='st'>
                <pnav></pnav>
        </div>
        
        <div id='di'>
                
                <pfoot></pfoot>
                
        </div>
       
        

    </div>
</template>

<script>
    import './index.css'
   
    import pheader from '../header/header.vue'
    import pnav from '../nav/nav.vue'
    import pfoot from '../foot/foot.vue'
    export default {
        components:{
            pheader,
            pnav,
            pfoot
        }

    }
</script>

