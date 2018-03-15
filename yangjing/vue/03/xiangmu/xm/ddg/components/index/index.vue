<template>
    <div class='dhz'>
        <div id='tou'> 
                <router-view name='header'></router-view>

        </div>
        
        <div id='st'>
                <router-view name='nav'></router-view>
        </div>
        
        <div id='di'>
                
                <router-view name='con'></router-view>
                
        </div>

        

    </div>
</template>

<script>
    import './index.css'
   
    export default {}

</script>

