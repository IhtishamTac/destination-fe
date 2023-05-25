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
          <tr v-for="(des, index) in destinations" :key="des.id">
            <th scope="row">{{ index + 1 }}</th>
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
            <td>{{ des.alamat }}</td>
            <td>
              <a id="linkdes" :href="des.link" target="blank">Click Here!</a>
            </td>
            <td>
              {{ des.deskripsi }}
            </td>
            <div class="ac" style="position: absolute; margin-top: 10px">
              <router-link
                to="/edit"
                style="text-decoration: none; color: white"
              >
                <button class="btn btn-primary" @click="editDes(des.id)">Edit</button>
              </router-link>
              <button class="btn btn-danger" @click="delDes(des.id)">
                Delete
              </button>
            </div>
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
    this.showDes();
  },
  methods: {
    showDes() {
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
    async delDes(id) {
      this.$swal({
        icon: "warning",
        title: "Are you sure want to Delete?",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: 'red'
      }).then((result) => {
        if (result.isConfirmed) {
          const headers = {
            Authorization: "Bearer " + this.token,
          };
          axios
            .delete("destination/" + id, { headers })
            .then((res) => {
              this.destinations.splice(this.destinations.findIndex(des => des.id === id), 1);
                this.$swal({
                  icon: "success",
                  text: res.data.message,
                });
            })
            .catch((err) => {
              this.$swal({
                icon: "error",
                text: err.response.data.message,
              });
            });
        }
      });
    },
    editDes(id){
      localStorage.setItem("editDesId", id);
    }
  },
};
</script>
