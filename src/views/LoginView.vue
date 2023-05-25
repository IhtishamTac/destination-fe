<template>
  <div class="bod">
    <h1 style="text-align: center; margin-top: 50px; color: rgb(0, 153, 255)">
      Sign In
    </h1>
    <div class="container mt-5" id="cont">
      <center>
        <div class="card w-25 p-2 shadow">
          <div class="card-body">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your Email..."
              v-model="email"
            /><br />
            <input
              type="password"
              class="form-control"
              placeholder="Enter your Password"
              v-model="password"
            /><br />
            <div class="text-right justify-content-md-end">
              <button
                class="btn"
                id="btns"
                style="margin-left: 165px"
                @click.prevent="login"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: black;
}

#btns {
  background-color: rgb(44, 108, 247);
  color: white;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await axios
        .post("auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          const accessToken = res.data.accessToken;
          localStorage.setItem("token", accessToken);
          if(res.data.user.role === 'admin'){
            this.$router.push("/admin");
          }
          if(res.data.user.role === 'user'){
            this.$router.push("/home");
          }
        })
        .catch((error) => {
          this.$swal({
            icon: "error",
            text: error.response.data.message,
          });
        });
    },
  },
};
</script>
