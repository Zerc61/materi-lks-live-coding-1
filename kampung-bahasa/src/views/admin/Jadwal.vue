<template>
    <AdminLayout>
        <div class="page-container">
            <div class="page-header">
                <h1>Jadwal Workshop</h1>
                <button class="btn-add">+ Tambah Jadwal</button>
            </div>

            <div class="card form-card">
                <h3>Tambah Jadwal Baru</h3>

                <form action="#">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="Bahasa">Bahasa</label>
                            <select required>
                                <option value="#">English</option>
                                <option value="#">Japanese</option>
                                <option value="#">Korean</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="hari">Hari</label>
                            <input type="text" name="hari" id="hari" placeholder="masukan hari" required>
                        </div>

                        <div class="form-group">
                            <label for="hari">Jam</label>
                            <input type="text" name="jam" id="jam" placeholder="masukan jam" required>
                        </div>

                        <div class="form-group">
                            <label for="hari">Level</label>
                            <input type="text" name="level" id="level" placeholder="masukan level" required>
                        </div>

                        <div class="form-group">
                            <label for="hari">Kouta</label>
                            <input type="number" name="kouta" id="kouta" placeholder="masukan kouta" required>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" style="btn-cancel">Batal</button>
                        <button type="submit" style="btn-save">Simpan</button>
                    </div>
                </form>
            </div>

            <div class="card table-card">
                <table>
                    <thead>
                        <tr>
                            <th>Bahasa</th>
                            <th>Hari</th>
                            <th>Jam</th>
                            <th>Level</th>
                            <th>Kouta</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>English</td>
                            <td>Senin</td>
                            <td>10:00</td>
                            <td>Beginner</td>
                            <td>20 Orang</td>
                            <td>
                                <button type="submit" class="btn-action btn-edit">Edit</button>
                                <button type="submit" class="btn-action btn-delete">Hapus</button>
                            </td>
                        </tr>

                        <tr>
                            <td>Japanese</td>
                            <td>Rabu</td>
                            <td>13:00</td>
                            <td>Intermediate</td>
                            <td>15 Orang</td>
                            <td>
                                <button type="submit" class="btn-action btn-edit">Edit</button>
                                <button type="submit" class="btn-action btn-delete">Hapus</button>
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
.page-container {
    padding: 30px;
    background: #f4f4f4;
    color: black;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.165);
    margin-bottom: 20px;
    border-top: 4px solid blue;
}

.card h3 {
    color: blue;
    margin-bottom: 10px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    margin-bottom: 10px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
    border-color : blue;
    outline: none;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

button {
    padding: 10px 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

button:hover {
    background: blue;
    color: white;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    background: blue;
    color: white;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid rgb(201, 201, 201);
}

tbody tr:hover {
    background: rgb(196, 225, 255);
    transition: 0.2s;
}
</style>