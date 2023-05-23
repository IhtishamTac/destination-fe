<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="nav-link">
      <router-link
        to="/home"
        style="text-decoration: none; color: rgb(255, 255, 255)"
        >Home</router-link
      >
    </div>
    <div class="nav-link">
      <a
        href=""
        v-on:click.prevent="logout"
        style="text-decoration: none; color: rgb(255, 255, 255)"
        >Logout</a
      >
    </div>
    <div class="nav-link">
      <router-link
        to="/admin"
        style="text-decoration: none; color: rgb(255, 255, 255)"
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
    };
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
          this.$router.push("/");
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
  },
};
</script>
