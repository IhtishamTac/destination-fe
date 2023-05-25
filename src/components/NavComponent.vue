<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="nav-link">
      <router-link
        to="/"
        style="text-decoration: none; color: rgb(255, 255, 255)"
        >Home</router-link
      >
    </div>
    <div class="nav-link">
      <a
        href=""
        v-on:click.prevent="logout"
        style="text-decoration: none; color: rgb(255, 255, 255)"
        v-if="this.user.role === 'admin'"
        >Logout</a
      >
    </div>
    <div class="nav-link">
      <router-link
        to="/login-admin"
        style="text-decoration: none; color: rgb(255, 255, 255)"
        v-if="this.user.role === 'admin'"
        >Admin</router-link
      >
    </div>
  </nav>
</template>

<style>
nav {
  background-color: rgb(66, 115, 252);
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      user: ''
    };
  },
  mounted() {
    this.getUserDta();
  },
  methods: {
    async logout() {
      this.$swal({
        icon: 'warning',
        title: 'Are you Sure?',
        showCancelButton: true,
        confirmButtonText: 'Yes!'
      }).then((result)=>{
        if(result.isConfirmed){
            const headers = {
        Authorization: "Bearer " + this.token,
      };
       axios
        .post("auth/logout",{}, { headers })
        .then(() => {
          localStorage.removeItem("token");
          this.$router.push("/login-admin");
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            text: err.response.data.message,
          });
        });
        }
      })
    },
    getUserDta(){
      const headers = {
        Authorization: "Bearer " + this.token,
      };
      axios.get("auth/me", {headers}).then((res)=>{
        this.user = res.data.user;
        localStorage.setItem("user", res.data.user);
      })
    }
  },
};
</script>
