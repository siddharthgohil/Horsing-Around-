<template>
<div class="container">
  <div id="loginSegment" style="text-align: center">
    <img id="bg" src="@/assets/logo.png" alt="" class="center" />
    <!-- <h3 id="mainHead">HORSING AROUND</h3> -->
    <p class="phtext">Sign in with the following Options:</p>
    <div id="firebaseui-auth-container"></div>
  </div>  
</div>
</template>

<script>
import firebase from "@/uifire.js";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "LoginComp",
  mounted() {
    //calling the ui instance
    var ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };

    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>

<style scoped>
.container{
  height: 100% !important;
  min-height: 88vh;
}
.phtext {
margin-top: 5%;
font-weight: 1000;
}
#loginSegment {
  background: #fff;
  width: 30%;
  margin: auto;
  margin-top: 5%;
}

#firebaseui-auth-container {
  margin-top: 30px;
  margin-bottom: 50px;
  padding-bottom: 30px;
}
#pagecontent {
  height: 100px;
  font-size: larger;
  font-weight: bolder;
  text-align: center;
}
#mainhead {
  text-align: center;
  text-shadow: 2px 2px grey;
}
#bg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding-top: 10%;
}
h5 {
  text-align: center;
  background-color: rgb(194, 202, 188);
}
</style>
