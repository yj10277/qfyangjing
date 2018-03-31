
<template>
    <div class="person">
        <div class="header">
            <pheader></pheader>
        </div>
        <div class="nav">
            <pnav></pnav>
        </div>
        <div class="foot">
            <pfoot></pfoot>
        </div>
    </div> 

</template>


<script>
    import './mine.css'
    

    import pheader from './header/header.vue'
    import pnav from './nav/nav.vue'
    import pfoot from './foot/foot.vue'
    export default {
        components:{
            pheader,
            pnav,
            pfoot
        }

    }

</script>