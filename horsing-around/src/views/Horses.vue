<template>
    <h3>This page is only for users</h3>
    <HorsesPage/>      
    <JockeyPage/>      
</template>

<script>
import HorsesPage from '@/components/HorsesPage.vue'
import JockeyPage from '@/components/JockeyPage.vue'

export default {
    name: "OnlyProfit",
    components:{
        HorsesPage,
        JockeyPage
    }
}
</script>