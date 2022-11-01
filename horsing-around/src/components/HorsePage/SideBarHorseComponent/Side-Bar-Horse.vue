<template>
    <div id="sidebar">
        <div class="menu-items">
            <!-- Stores the number of race of the day -->
            <router-link to='/horses' class="side-btn" active-class="active" v-on:click="changeTab('AllHorses')">
                <button id = "AllHorses" class="link-container side-btn-active">
                   All Horses
                </button>
            </router-link>
            <router-link to='/horses-comparison' class="side-btn" active-class="active" v-on:click="changeTab('Comparison')">
                <button id = "Comparison" class="link-container">
                   Comparison
                </button>
            </router-link>
            <router-link to='/' class="side-btn" active-class="active" v-on:click="changeTab('BookMarked')">
                <button id = "BookMarked" class="link-container">
                    BookMarked
                </button>
            </router-link>
            <router-link to='/' class="side-btn" active-class="active" v-on:click="changeTab('Combination')" >
                <button id = "Combination" class="link-container">
                    Combination
                </button>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBarHorse',
    methods: {
        changeTab(tabName) {
            console.log("herebefore");
            this.$emit("changeTab", tabName);
            let buttons_list =  document.getElementsByTagName("button");
            let num_buttons = buttons_list.length;
            for (let i = 0; i < num_buttons; i++) {
                if (buttons_list[i].id != tabName) {
                    console.log(buttons_list[i].id);
                    document
                        .getElementById(tabName)
                        .classList.remove("side-btn-active");
                } else {
                    console.log(tabName + " tabname");
                    document
                        .getElementById(tabName)
                        .classList.add("side-btn-active");
                }
            }
        },
  },
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
        border: none;
        background-color: #954ab8;
        color: white;
    }
    .side-btn-active {
        color: #954ab8;
        background-color: #f1ecec;
    }
    .side-btn {
        width: 100%;
    }
</style>