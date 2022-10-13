<template>
    <div class="sidebar">
        <div class="menu-items">
            <!-- Stores the number of race of the day -->
            <router-link to='/' class="side-btn" active-class="active" >
                <button class="link-container side-btn-active">
                    Race 1
                </button>
            </router-link>
            <router-link to='/' class="side-btn" active-class="active" >
                <button class="link-container">
                    Race 2
                </button>
            </router-link>
            <router-link to='/' class="side-btn" active-class="active" >
                <button class="link-container">
                    Race 3
                </button>
            </router-link>
            <router-link to='/' class="side-btn" active-class="active" >
                <button class="link-container">
                    Race 4
                </button>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Side-Bar',
}
</script>

<style scoped>
    .menu-items {
        display: flex;
        flex-direction: column;
        color: white;
        font-size: 20px;
        margin-top: 15vh;
        width:100%;
    }
    .menu-items > * {
        width: 100%;
        margin-top: 1px;
    }
    
     .link-container {
        width: 100%;
        border:none;
        background-color: #954AB8;
        color:white;
    }
    .side-btn-active {
        color: #954AB8;
        background-color: #F1ECEC;
    }
    .sider-btn, .link-container {
        width: 100%;

    }
</style>