<template>
    <h1 style="text-align: center; margin-top: 50px;">Login</h1>
  <div class="container mt-5" id="cont">
    <div class="card w-25">
      <div class="card-body">
        <label for="username">Username : </label>
        <input type="text" class="form-control" v-model="email"/><br />
        <label for="password">Password : </label>
        <input type="password" class="form-control" v-model="password"/><br />
        <div class="text-right justify-content-md-end">
          <button class="btn" style="margin-left: 180px;" @click.prevent="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: black;
}
#cont {
  margin-left: 530px;
}
.btn{
    background-color: rgb(44, 108, 247);
    color: white;
}
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods: {
        async login(){
            await axios.post("auth/login",{
                'email': this.email,
                'password': this.password
            }).then((res)=>{
                const accessToken = res.data.accessToken;
                console.log(accessToken);
                localStorage.setItem('token', accessToken);
                this.$router.push('/home')
            }).catch((err)=>{
                // alert(err.response.data.message);
                this.$swal({
                    icon: 'error',
                    text: err.response.data.message,
                })
            });
        }
    },
}
</script>
