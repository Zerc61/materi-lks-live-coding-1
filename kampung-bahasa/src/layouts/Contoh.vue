<template>
    <div class="login-container">
        <div class="login-card">
            <h2>Admin Login</h2>

            <form action="#" class="login-form">
                <div class="form-group">
                    <label for="username">username</label>
                    <input type="text" name="username" id="username" placeholder="username" required>
                </div>

                <div class="form-group">
                    <label for="password">password</label>
                    <input type="password" name="password" id="password" placeholder="password" required>
                </div>

                <button type="submit" class="btn-login">Masuk</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, rgb(175, 175, 255), rgb(0, 0, 255));
}

.login-card {
    background-color: white;
    width: 100%;
    max-width: 350px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.214);
}

.login-card h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 800;
    color: transparent;
    -webkit-text-stroke: 1px rgb(0, 4, 255);
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    color: rgb(128, 126, 243);
    /* font-size: 16px; */
}

.form-group input {
    padding: 13px;
    border-radius: 12px;
    border: 1px solid rgb(166, 166, 246);
    transition: 0.3s;
}

.form-group input:focus {
    border-color: rgb(0, 26, 255);
    outline: none;
}

.btn-login {
    padding: 13px;
    border: none;
    border-radius: 7px;
    background-color: rgb(99, 99, 255);
    color: white;
    font-weight: bold;
    transition: 0.3s;
}

.btn-login:hover {
    background-color: rgb(30, 30, 204);
}


</style>