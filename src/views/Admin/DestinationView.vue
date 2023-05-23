<script setup>
import NavComponent from "../../components/NavComponent.vue";
</script>

<template>
  <div>
    <NavComponent></NavComponent>
    <div class="container mt-5">
      <div class="">
        <router-link to="/add" style="text-decoration: none; color: white">
          <button class="btn btn-success">Add Destination</button>
        </router-link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Foto</th>
            <th scope="col">Nama</th>
            <th scope="col">Alamat</th>
            <th scope="col">Link</th>
            <th scope="col">Deskripsi</th>
            <th scope="col" class="ac">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="des in destinations" :key="des.id">
            <th scope="row">{{ des.id }}</th>
            <td>
              <div class="embed-responsive embed-responsive-16by9">
                <img
                  :src="des.foto"
                  alt=""
                  class="card-image-top"
                  style="width: 100px"
                />
              </div>
            </td>
            <td>{{ des.nama }}</td>
            <td>Provinsi Sumatera Utara, Indonesia.</td>
            <td>
              <a
                id="linkdes"
                :href="des.link"
                target="blank"
                >Click Here!</a
              >
            </td>
            <td>
              {{des.deskripsi}}
            </td>
            <td class="ac" style="position: absolute">
              <router-link
                to="/edit"
                style="text-decoration: none; color: white"
              >
                <button class="btn btn-primary">Edit</button>
              </router-link>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
#imgadmin {
  width: 100px;
}
.ac {
  text-align: right;
}
#linkdes {
  text-decoration: none;
  color: black;
}
#linkdes:hover {
  text-decoration: underline;
  color: black;
}
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
