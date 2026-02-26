<template>
    <AdminLayout>
        <div class="peserta-container">
            <div class="peserta-page">
                <h1>Keola Peserta</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Umur</th>
                        <th>Bahasa</th>
                        <th>Hari</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Alfian</td>
                        <td>Alfian@gmail.com</td>
                        <td>17</td>
                        <td>Jepang</td>
                        <td>Senin</td>
                        <td>pending</td>
                        <td>
                            <button class="btn-terima" type="button">Terima</button>
                            <button class="btn-tolak" type="button">Tolak</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
</script>


<style scoped>
.peserta-container {
    padding: 30px;
    background: #f4f4f4;
    color: black;
}

.peserta-page h1 {
 margin-bottom: 20px;   
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    background: blue;
    color: #f4f4f4;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid grey;
}

tbody tr:hover {
    background: rgb(190, 216, 255);
    transition: 0.2s;
}

button {
    padding: 10px 17px;
    border: none;
    margin-right: 13px;
    border-radius: 7px;
    color: white;
    font-weight: bold;
}

.btn-terima {
    background: rgb(77, 218, 77);
}

.btn-tolak {
    background: red;
}
</style>