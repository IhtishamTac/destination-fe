<template>
    <div class="container mt-5" style="padding-bottom: 100px;">
        <h2 class="text-center">Add your Destinations</h2>
        <router-link to="/admin" style="text-decoration: none; color: white;">
            <button class="btn btn-primary" style="position: absolute; margin-top: -50px;">Back</button>
        </router-link>
        <label for="foto">Image : </label><br>
        <input type="file" name="image" id="image" class="form-control"><br>
        <label for="nama">Nama :</label>
        <input type="text" class="form-control"><br>
        <label for="alamat">Alamat :</label>
        <textarea name="alamat" id="alamat" cols="30" rows="5" class="form-control" style="resize: none;"></textarea><br>
        <label for="link">Link Gmaps :</label>
        <input type="text" class="form-control"><br>
        <label for="desktipsi">Deskripsi :</label>
        <textarea name="deskripsi" id="deskripsi" cols="30" rows="5" class="form-control" style="resize: none;"></textarea><br>
        <button class="btn btn-secondary w-100" style="height: 50px;">Add</button>
    </div>
</template>

<script>

export default {
    
}
</script>