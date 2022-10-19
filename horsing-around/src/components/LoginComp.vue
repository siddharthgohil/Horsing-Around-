<template>
  <div style = 'text-align:center;'>
    <h1 id = 'mainHead'>HORSING AROUND</h1>
    <div id = 'firebaseui-auth-container'></div>
    <div id = 'pagecontent'>
        HORSE HORSE HORSE<br>
        SIGN IN TO VIEW HORSE STUFF
    </div>
    <img id = 'bg' src="@/assets/logo.png" alt="" class="center">
    <h5>copyright@NUS-2022</h5>
  </div>
</template>

<script>
import firebase from '@/uifire.js';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
    name: 'LoginComp',
    mounted(){
        //calling the ui instance 
        var ui = firebaseui.auth.AuthUI.getInstance();
        if(!ui){
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }

        var uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };

        ui.start('#firebaseui-auth-container', uiConfig)
    }


}
</script>


<style scoped>
#firebaseui-auth-container{
    margin-top: 50px;
    margin-bottom: 50px;
}
#pagecontent{
    height: 100px;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
}
#mainhead{
    text-align: center;
    text-shadow: 2px 2px grey;;
}
#bg{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
}
h5{
    text-align: center;
    background-color: rgb(194, 202, 188);
}
</style>