<template>
  <div class="container mt-5" style="padding-bottom: 100px">
    <h2 class="text-center">Add your Destinations</h2>
    <router-link to="/admin" style="text-decoration: none; color: white">
      <button
        class="btn btn-primary"
        style="position: absolute; margin-top: -50px"
      >
        Back
      </button>
    </router-link>
    <label for="foto">Image :</label><br />
    <!-- <input
      type="file"
      name="image"
      id="image"
      class="form-control"
      @change="handleFileChange"
    /> -->
    <input type="text" class="form-control" v-model="foto" /><br />
    <label for="nama">Nama :</label>
    <input type="text" class="form-control" v-model="nama" /><br />
    <label for="alamat">Alamat :</label>
    <textarea
      name="alamat"
      id="alamat"
      cols="30"
      rows="5"
      class="form-control"
      style="resize: none"
      v-model="alamat"
    ></textarea
    ><br />
    <label for="link">Link Gmaps :</label>
    <input type="text" class="form-control" v-model="link" /><br />
    <label for="deskripsi">Deskripsi :</label>
    <textarea
      name="deskripsi"
      id="deskripsi"
      cols="30"
      rows="5"
      class="form-control"
      style="resize: none"
      v-model="deskripsi"
    ></textarea
    ><br />
    <button class="btn btn-secondary w-100" style="height: 50px" @click.prevent="add">Add</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      foto: "",
      nama: "",
      alamat: "",
      link: "",
      deskripsi: "",
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    add() {
      const data = {
        'foto': this.foto,
        'nama': this.nama,
        'alamat': this.alamat,
        'link': this.link,
        'deskripsi': this.deskripsi,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      axios
        .post("destination", data, config)
        .then(() => {
          this.$swal({
            icon: "success",
            text: "Successfully added!",
          });
          this.$router.push("/admin");
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