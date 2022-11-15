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
      this.$parent.$parent.$emit("added");
    },
  },
};
</script>

<style  scoped>
#btn {
  background: #dfa3f1;
  padding: 10px 50px;
  border-radius: 3px;
  border: 1px solid #070707;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  color: #222;
  transition: 0.2s;
  width: 15%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 30px;
  position: relative;
  top: 50%;
  left: 47%;

}

#btn:hover { 
  background: #6a2889;
  color: #222;
  box-shadow: 3px 3px grey;
}
</style>
