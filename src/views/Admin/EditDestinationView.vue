<template>
  <div class="container mt-5" style="padding-bottom: 100px">
    <h2 class="text-center">Edit your Destinations</h2>
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
    <input type="text" class="form-control" v-model="desPH.foto" /><br />
    <label for="nama">Nama :</label>
    <input type="text" class="form-control" v-model="desPH.nama" /><br />
    <label for="alamat">Alamat :</label>
    <textarea
      name="alamat"
      id="alamat"
      cols="30"
      rows="5"
      class="form-control"
      style="resize: none"
      v-model="desPH.alamat"
    ></textarea
    ><br />
    <label for="link">Link Gmaps :</label>
    <input type="text" class="form-control" v-model="desPH.link" /><br />
    <label for="deskripsi">Deskripsi :</label>
    <textarea
      name="deskripsi"
      id="deskripsi"
      cols="30"
      rows="5"
      class="form-control"
      style="resize: none"
      v-model="desPH.deskripsi"
    ></textarea
    ><br />
    <button
      class="btn btn-secondary w-100"
      style="height: 50px"
      @click="update"
    >
      Update
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //   foto: "",
      //   nama: "",
      //   alamat: "",
      //   link: "",
      //   deskripsi: "",
      desPH: {
        foto: "",
        nama: "",
        deskripsi: "",
        alamat: "",
        link: "",
      },
      token: localStorage.getItem("token"),
      desId: localStorage.getItem("editDesId"),
    };
  },
  mounted() {
    this.placeHolder();
  },
  methods: {
    async update() {
      const headers = {
        Authorization: "Bearer " + this.token,
      };
      await axios
        .post(
          "destinations/" + this.desId,
          {
            foto: this.desPH.foto,
            nama: this.desPH.nama,
            alamat: this.desPH.alamat,
            link: this.desPH.link,
            deskripsi: this.desPH.deskripsi,
          },
          { headers }
        )
        .then(() => {
          this.$swal({
            icon: "success",
            text: "Successfully edited!",
          });
          this.$router.push("/admin");
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            text: err.response.data.message,
          });
        });
    },
    async placeHolder() {
      const headers = {
        Authorization: "Bearer " + this.token,
      };
      await axios
        .get("destination/" + this.desId, { headers })
        .then((res) => {
          this.desPH = res.data.destination;
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
