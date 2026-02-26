<template>
    <div class="page-container">
        
    <!-- Header Section -->
    <div class="page-header">
        <h1>Jadwal Workshop</h1>
        <button class="btn-add">
            + Tambah Jadwal
        </button>
    </div>

    <!-- Form Section -->
    <div class="card form-card">
        <h3>Tambah Jadwal Baru</h3>
        
        <form>
            <div class="form-grid">
                <div class="form-group">
                    <label>Bahasa</label>
                    <select required>
                        <option disabled selected>Pilih Bahasa</option>
                        <option>English</option>
                        <option>Japanese</option>
                        <option>Korean</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Hari</label>
                    <input type="text" placeholder="Contoh: Senin" required>
                </div>

                <div class="form-group">
                    <label>Jam</label>
                    <input type="text" placeholder="Contoh: 10:00" required>
                </div>

                <div class="form-group">
                    <label>Level</label>
                    <input type="text" placeholder="Contoh: Beginner" required>
                </div>

                <div class="form-group">
                    <label>Kuota</label>
                    <input type="number" placeholder="Contoh: 20" required>
                </div>
            </div>

            <div class="form-actions">
                <button type="button" class="btn-cancel">Batal</button>
                <button type="submit" class="btn-save">Simpan</button>
            </div>
        </form>
    </div>

    <!-- Table Section -->
    <div class="card table-card">
        <table>
            <thead>
                <tr>
                    <th>Bahasa</th>
                    <th>Hari</th>
                    <th>Jam</th>
                    <th>Level</th>
                    <th>Kuota</th>
                    <th style="width: 150px;">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>English</td>
                    <td>Senin</td>
                    <td>10:00</td>
                    <td>Beginner</td>
                    <td>20</td>
                    <td>
                        <button class="btn-action btn-edit">Edit</button>
                        <button class="btn-action btn-delete">Hapus</button>
                    </td>
                </tr>
                <tr>
                    <td>Japanese</td>
                    <td>Rabu</td>
                    <td>13:00</td>
                    <td>Intermediate</td>
                    <td>15</td>
                    <td>
                        <button class="btn-action btn-edit">Edit</button>
                        <button class="btn-action btn-delete">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</template>

<style>
/* 1. PENGATURAN DASAR */
* {
    box-sizing: border-box; /* Agar padding tidak merusak ukuran elemen */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.page-container {
    padding: 20px;
    background-color: #f4f4f4; /* Latar belakang halaman sedikit abu-abu */
    min-height: 100vh;
    color: #333333; /* Warna teks utama hitam keabu-abuan */
}

/* 2. HEADER (Judul & Tombol Tambah) */
.page-header {
    display: flex; /* Membuat judul dan tombol sejajar kiri-kanan */
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

/* 3. GAYA KOTAK (CARD) */
.card {
    background-color: #ffffff; /* Background kotak putih */
    padding: 20px;
    border-radius: 8px; /* Ujung kotak melengkung */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Efek bayangan tipis */
    margin-bottom: 24px;
    border-top: 4px solid #007bff; /* Garis aksen biru utama di atas kotak */
}

.card h3 {
    margin-top: 0;
    color: #0056b3; /* Judul kotak warna biru gelap */
}

/* 4. GAYA FORMULIR */
.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Form otomatis menyamping & responsif */
    gap: 15px; /* Jarak antar kolom form */
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
}

.form-group input, 
.form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd; /* Garis tepi input abu-abu terang */
    border-radius: 4px;
    font-size: 14px;
}

/* Saat input diklik (fokus), garisnya menjadi biru */
.form-group input:focus, 
.form-group select:focus {
    border-color: #007bff; /* Biru utama */
    outline: none;
}

.form-actions {
    display: flex;
    justify-content: flex-end; /* Taruh tombol di sebelah kanan */
    gap: 10px;
}

/* 5. GAYA TOMBOL UMUM */
button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s; /* Efek halus saat di-hover */
}

/* Tombol Biru Utama (Tambah, Simpan) */
.btn-add, .btn-save {
    background-color: #007bff; /* Biru utama */
    color: #ffffff; /* Teks putih */
}
.btn-add:hover, .btn-save:hover {
    background-color: #0056b3; /* Biru gelap saat di-hover */
}

/* Tombol Batal */
.btn-cancel {
    background-color: #cccccc; /* Abu-abu */
    color: #333333; /* Teks hitam */
}
.btn-cancel:hover {
    background-color: #bbbbbb; /* Abu-abu lebih gelap saat di-hover */
}

/* Tombol Aksi Tabel (Edit & Hapus) */
.btn-edit {
    background-color: #ffc107; /* Kuning */
    color: black;
}
.btn-edit:hover {
    background-color: #e0a800;
}

.btn-delete {
    background-color: #dc3545; /* Merah */
    color: white;
}
.btn-delete:hover {
    background-color: #c82333;
}

/* 6. GAYA TABEL */
table {
    width: 100%;
    border-collapse: collapse; /* Menghilangkan jarak antar garis tabel */
}

thead {
    background-color: #007bff; /* Header tabel biru utama */
    color: #ffffff; /* Teks putih */
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #dddddd; /* Garis pemisah tiap baris */
}

/* Baris tabel selang-seling warnanya (zebra cross) */
tbody tr:nth-child(even) {
    background-color: #e9f2fb; /* Biru sangat muda */
}

tbody tr:hover {
    background-color: #d1e4f9; /* Warna biru sedikit lebih gelap saat dilewati mouse */
}
</style>
