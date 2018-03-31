<template>
    <div class='sy'>
        <div class="tou">
            <router-view name='tou'></router-view> 
        </div>
        <div class="st">
            <router-view name='st'></router-view>
        </div>
        <div class="jiao">
            <router-view name='jiao'></router-view>
        </div>
    </div>
</template>
<script type="text/javascript">
    import './index.scss'
    export default {}
</script>