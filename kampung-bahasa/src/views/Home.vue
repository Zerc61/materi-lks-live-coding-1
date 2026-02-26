<template>
<div>
    <header>
        <div class="header-content">
            <h2>Kampung Bahasa</h2>
            <nav class="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Kelas</a></li>
                <li><a href="#">Testimoni</a></li>
                <li><a href="#">Jadwal</a></li>
                <li><a href="#">Kontak</a></li>
                <li><a href="#" class="block-register-navbar">Register</a></li>
            </nav>
        </div>
    </header>
    <section id="home">
       <div class="hero-container">
         <div class="hero-content">
            <h2>Kampung Bahasa</h2>
            <p>Belajar Bahasa di Kampung bahasa membuat mu pintar</p>
            <a href="#">Lihat Kelas</a>
        </div>
       </div>
    </section>

    <section id="class">
        <div class="class-container">
            <div class="class-content">
                <h1 class="judul">Kelas</h1>

                <div class="class-cards">
                <div class="class-card">
                    <h2>English</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium.</p>
                </div>

                 <div class="class-card">
                    <h2>Japanese</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, esse?</p>
                </div>

                 <div class="class-card">
                    <h2>Korean</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, veniam.</p>
                </div>
                </div>
            </div>
        </div>
    </section>

    <section id="testimoni">
        <div class="testi-container">
            <div class="testi-content">
                <h1 class="judul">Testimoni</h1>

                <div class="testi-cards">
                    <div class="test-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro consequatur necessitatibus id nemo praesentium quo!</p>
                        <p><strong>Budi</strong></p>
                </div>


                <div class="test-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro consequatur necessitatibus id nemo praesentium quo!</p>
                        <p><strong>Budi</strong></p>
                </div>


                <div class="test-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro consequatur necessitatibus id nemo praesentium quo!</p>
                        <p><strong>Budi</strong></p>
                </div>
                

                <div class="test-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro consequatur necessitatibus id nemo praesentium quo!</p>
                        <p><strong>Budi</strong></p>
                </div>

                <div class="test-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro consequatur necessitatibus id nemo praesentium quo!</p>
                        <p><strong>Budi</strong></p>
                </div>


                <div class="test-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro consequatur necessitatibus id nemo praesentium quo!</p>
                        <p><strong>Budi</strong></p>
                </div>
                </div>
            </div>
        </div>
    </section>

    <section id="program">
        <div class="program-container">
            <h1 class="judul">Jadwal</h1>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Bahasa</th>
                            <th>Level</th>
                            <th>Hari</th>
                            <th>Jam</th>
                            <th>Kouta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Korean</td>
                            <td>Basic</td>
                            <td>Sabtu</td>
                            <td>10:00</td>
                            <td>20 Orang</td>
                        </tr>

                        <tr>
                            <td>Japanese</td>
                            <td>N5</td>
                            <td>Rabu</td>
                            <td>19:00</td>
                            <td>15 Orang</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
                <h1 class="judul">Kontak</h1>

                <div class="contact-card">
                    <div class="contact-content">
                        <p><strong>email: </strong></p>
                        <p>kampungbahasa@gmail.com</p>
                        <p><strong>phone: </strong></p>
                        <p>+62 8123456789</p>
                        <p><strong>alamat: </strong></p>
                        <p>Jawa Timur, Surabaya</p>
                    </div>
                </div>
        </div>
    </section>

    <section id="register">
        <div class="register-container">
            <h2>Pendaftaran</h2>

                <form action="#" class="register-form">
                    <input type="text" name="name" id="name" placeholder="Masukan Nama" required>
                    <input type="email" name="email" id="email" placeholder="Masukan Email" required>
                    <input type="number" name="umur" id="umur" placeholder="Masukan Umur" required>

                    <select name="kelas" id="kelas">
                        <option disabled value="" selected>Pilih Kelas</option>
                        <option value="korean">Korean</option>
                        <option value="japanese">Japanese</option>
                    </select>

                    <textarea name="note" id="note" rows="3"></textarea>

                    <button class="btn-register" type="submit">Daftar</button>
                </form>
            </div>
    </section>

    <footer>
        <p>© 2026 Kampung Bahasa Workshop</p>
    </footer>
</div>
</template>

<style scoped>
.header-content {
    display: flex;
    justify-content: space-between;
    background: rgb(49, 36, 226);
    color: white;
    padding: 20px;
}

.header-content h2 {
    font-size: 30px;
}

.navbar {
    display: flex;
    gap: 20px;
    list-style-type: none;
    margin-top: 3px;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-size: 20px;
}

.hero-container {
   background: rgb(213, 213, 213);
   height: 600px;
   padding: 40px;
}

.hero-content {
    margin-top: 190px;
    line-height: 1.5;
    color: rgb(50, 50, 50);
}

.hero-content h2 {
    font-size: 50px;
}

.hero-content a {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: white;
    background-color: rgb(99, 99, 255);
    padding: 15px 30px;
    border-radius: 7px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.hero-content a:hover {
    background-color: rgb(55, 55, 126);
    transform: translateY(-5px);
}

.class-container {
    max-width: 1100px;
    margin: auto;
}

.judul {
    text-align: center;
    font-size: 40px;
    margin-top: 200px;
    margin-bottom: 60px;
}

.class-cards {
    display: grid;
    grid-template-columns: repeat(3, 260px);
    margin-left: 120px;
    gap: 40px;
}

.class-card {
    background-color: rgb(93, 114, 251);
    color: white;
    padding: 30px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.class-card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.438);
    transform: translateY(-5px);
}

.class-card h2 {
    text-align: center;
    margin-bottom: 20px;
}

.class-card p {
    font-size: 20px;
    line-height: 1.2;
}

.testi-container {
    max-width: 1200px;
    margin: auto;
}

.testi-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.test-card {
    background-color: rgb(214, 214, 214);
    padding: 20px;
    border-radius: 9px;
    line-height: 1.4;
    transition: all 0.3s ease;
}

.test-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.438);
}

.test-card p {
    margin: 4px;
}
.program-container {
    max-width: 1200px;
    margin: auto;
}

.table-container {
    overflow-x: auto;
}

table {
    width: 100%;
    overflow: hidden;
    border-collapse: collapse;
    border: 1px solid #a3a3a3;
    text-align: center;
    background-color: rgb(255, 255, 255);
}

th {
    padding: 18px;
    background-color: rgb(115, 115, 255);
    color: white;
}

td {
    padding: 18px;
    border-top: 1px solid #a3a3a3;
}

tbody tr:hover {
    background-color: rgb(193, 193, 193);
    transition: 0.3s;
}

.contact-card {
    display: flex;
    justify-content: center;
}

.contact-content {
    font-size: 22px;
    line-height: 1.5;
}

.register-container {
   max-width: 600px;
   margin: 200px auto;
   padding: 40px;
   background-color: white;
   border-radius: 12px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.155);
}

.register-container h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 32px;
    color: #1e3c72;
}

.register-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.register-form input,
.register-form select,
.register-form textarea {
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid #1e3c72;
    font-size: 14px;
    transition: all 0.3s ease;
    outline: none;
}

.register-form input:focus,
.register-form select:focus,
.register-form textarea:focus {
    border-color: #1e3c72;
    box-shadow: 0 0 0 3px rgba(30,60,114,0.15)
}

.register-form {
    cursor: pointer;
}

.btn-register {
    margin-top: 10px;
    padding: 14px;
    border: none;
    border-radius: 5px;
    background-color: #1e3c72;
    color: white;
    font-weight: bold;
    transition: all 0.3s ease;
}

.btn-register:hover {                                                                                                                                          
    background-color: #152a50;
}

footer {
    background-color: #1e3c72;
    padding: 23px;
    text-align: center;
    color:white;
}

</style>