<template>
<div class="menu-login">
    <div class="login-content">
        <h2>Admin Login</h2>

        <form action="#" class="login-form">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="username" required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                 <input type="password" name="password" id="password" placeholder="password" required>
            </div>

            <button type="submit">Masuk</button>
        </form>
    </div>
</div>
</template>

<style scoped>
.menu-login {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(180deg, blue, rgb(116, 116, 253));
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
}

.login-content {
    width: 100%;
    max-width: 370px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.116);
    padding: 40px 30px;
    border-radius: 12px;
}

.login-content h2 {
    margin-bottom: 30px;
    text-align: center;
    font-size: 28px;
    color: #2c3e50;
    font-weight: 700;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.form-group label {
    color: #4a5568;
    font-weight: bold;
    font-size: 14px;
}

.form-group input {
    padding: 14px 16px;
    border: 1.5px solid #bdbdbd;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s ease;
    background: white;
}

.form-group input:focus {
    border-color: rgba(0, 0, 255, 0.278);
    background: white;
    outline: none;
    box-shadow: 0 0 0 3px rgb(188, 188, 255);
}

button {
    margin-top: 16px;
    padding: 10px;
    font-size: 16px;
    color: white;
    border: none;
    background: blue;
    cursor: pointer;
    transition: all 0.2s ease;
}

button:hover {
    background: rgb(22, 22, 150);
}

button:active {
    transform: translateY(2px);
}


</style>