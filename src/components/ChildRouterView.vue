<template>
<div>
    <navbar></navbar>
    <sidebar></sidebar>
    <applayout></applayout>
    <fooster></fooster>
</div>
</template>

<script>
    import fooster from './fooster.vue'
    import applayout from './applayout.vue'
    import navbar from './navbar.vue'
    import sidebar from './sidebar.vue'
    
export default {
    components: {
    navbar,
    applayout,
    sidebar,
    fooster
},
}
</script>
