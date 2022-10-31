<template>
  <button id="btn" @click="signOut()" v-if="user">Logout</button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "LogoutComp",
  emits: ["added"],

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
    signOut() {
      const auth = getAuth();
      const user = auth.currentUser;
      signOut(auth, user);
      this.$router.push({ name: "Racing" });
      this.$parent.$parent.$emit("added"); // goes to profile and that goes to router that goes to app
    },
  },
};
</script>

<style>
#btn {
  /*display: flex;
  float: right;
  text-align: center;
  padding: 10x;
  margin-right: 20px;
  margin-bottom: 20px; */
  margin: 15px 15px;
  background: #dfa3f1;
  padding: 10px 50px;
  border-radius: 3px;
  border: 1px solid #070707;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  color: #222;
  transition: 0.2s;

}

#btn:hover { 
  background: #6a2889;
  color: #222;
  /*color: rgb(243, 236, 236); */
  /*background-color: rgb(255, 94, 0); */
  box-shadow: 3px 3px grey;
}
</style>
