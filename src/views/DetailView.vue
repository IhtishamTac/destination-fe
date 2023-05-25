<script setup>
import NavComponent from "../components/NavComponent.vue";
</script>
<template>
  <NavComponent></NavComponent>
  <div class="container mt-5">
    <h1 class="text-center">{{ destination.nama }}</h1>
    <br />
    <img
      :src="destination.foto"
      alt=""
      style="width: 100%; margin-bottom: 30px"
    />
    <h2>About {{ destination.nama }}</h2>
    <p>
      {{ destination.deskripsi }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      destination: {
        foto: "",
        nama: "",
        deskripsi: "",
        alamat: "",
        link: "",
      },
      token: localStorage.getItem("token"),
      desId: localStorage.getItem("desDetailId"),
    };
  },
  mounted() {
    this.detail();
  },
  methods: {
    async detail() {
      await axios
        .get("destinations/" + this.desId)
        .then((res) => {
            this.destination = res.data.destination;
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
