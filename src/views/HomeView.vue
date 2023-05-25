<template>
  <main>
    <NavComponent></NavComponent>

    <div class="container mt-5">
      <h1 class="text-center mb-5">Nusantara Destinations</h1>
      <div class="row">
        <div class="col-3" v-for="des in destinations" :key="des.id">
          <router-link to="/detail" @click.prevent="detailId(des.id)" style="text-decoration: none; color: black">
            <a href="" style="text-decoration: none; color: black">
              <div class="card">
                <img :src="des.foto" alt="" class="card-image-top" />
                <div class="card-body">
                  <h3 class="card-title">{{ des.nama }}</h3>
                </div>
              </div>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import "../../src/assets/js/bootstrap.min.js";
import NavComponent from "../components/NavComponent.vue";
</script>

<style>
@import "../../src/assets/css/bootstrap.min.css";
</style>

<script>
import axios from "axios";
import DetailView from "./DetailView.vue";

export default {
  data() {
    return {
      destinations: [],
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.shDes();
  },
  methods: {
    shDes() {
      axios
        .get("destinations")
        .then((res) => {
          this.destinations = res.data.Destinations;
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            text: err.response.data.message,
          });
        });
    },
    detailId(id){
      localStorage.setItem("desDetailId", id);
    },
    
  },
};
</script>
