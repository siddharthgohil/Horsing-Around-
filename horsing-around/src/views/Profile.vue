<template>

<div class="card" v-if = "user">
       
        <div class="cover-photo">
            <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class="profile">
        </div>
        <div class = "wrapper">
          <p class="profile-name">{{ user.displayName }}</p>
          <div class = "divider">
            <h1>|</h1>
          </div>
          <p class="about">{{ user.email }} </p>
        </div>
        <div class = "logout">
          <LogoutComp @added="change" />
        </div>
        <BookmarkedTable/>
    </div>

<div v-else>
    <LoginComp />
  </div>
<!--
  <div style="text-align: center" v-if="user">
    <div id="logodiv">
      <img
        src="@/assets/logo.png"
        alt=""
        style="width: 175px; height: 175px; border: 4px solid#333"
      />
    </div>
    <div>
      <p>
        Name: <strong>{{ user.displayName }}</strong
        ><br />
        Email: <strong>{{ user.email }}</strong
        ><br />
        UID: <strong>{{ user.uid }}</strong
        ><br />
        Provider: <strong>{{ user.providerData[0].providerId }}</strong>
      </p>
    </div>
    <LogoutComp @added="change" />
    <BookmarkedTable/>
  </div>
  <div v-else>
    <LoginComp />
  </div>
-->

  


</template>

<script>
import LogoutComp from "@/components/LogoutComp.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginComp from "@/components/LoginComp";
import BookmarkedTable from "@/components/BookmarkedTable.vue";

export default {
  name: "ProfilePage",
  components: {
    LogoutComp,
    LoginComp,
    BookmarkedTable,
  },
  data() {
    return {
      user: false,
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
    change() {
      window.location.reload();
    },
  },
};
</script>

<style>
#logodiv {
  margin: 20px; 
}


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


.card {
    padding: 15px;
    background: rgba(160, 12, 245, 0.133);
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
    user-select: none;
    overflow: hidden;
}

.cover-photo {
    position: relative;
    background: url(https://racecoursehospitality.net/wp-content/uploads/2016/04/worcester-racecourse-header.jpg);
    background-size: cover;
    height: 300px;
    border-radius: 5px 5px 0 0;
}

.profile {
    position: absolute;
    width: 120px;
    bottom: -60px;
    left: 15px;
    border-radius: 50%;
    border: 1px solid #6a2889;
    background: #6a2889;
    padding: 5px;
}

.wrapper {
  display: flex;
}

.profile-name {
    display: inline-block;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    margin: 40px 0 0 0px;
    color: #6a2889;
    width: 30%;
    font-family: "Roboto", sans-serif;
}

.divider {
  padding: 10px;
  margin: 33px 0 0 0px;
}

.about {
    display: inline-block;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    margin: 40px 0 0 0px;
    color: #6a2889;
    width: 30%;
    font-family: "Roboto", sans-serif;
}

.logout {
  float: right;
}







</style>
