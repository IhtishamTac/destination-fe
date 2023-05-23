<template>
  <main>
    <NavComponent></NavComponent>

    <div class="container mt-5">
      <div class="row">
        <div class="col-3" v-for="des in destinations" :key="des.id">
          <router-link to="/detail" style="text-decoration: none; color: black">
            <a href="" style="text-decoration: none; color: black">
              <div class="card">
                <img
                  :src="des.foto"
                  alt=""
                  class="card-image-top"
                />
                <div class="card-body">
                  <h3 class="card-title">{{ des.nama }}</h3>
                  <p class="card-text">{{ des.deskripsi }}</p>
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

export default {
  data() {
    return {
      destinations: [],
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.fetchDestinations();
  },
  methods: {
    fetchDestinations() {
      const headers = {
        Authorization: "Bearer " + this.token,
      };

      axios
        .get("destination", { headers })
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
  },
};
</script>