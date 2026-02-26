<template>
    <div class="admin-wrapper">
        <aside class="sidebar">
            <div class="sidebar-head">
                <h2>Kampung Bahasa</h2>
            </div>

            <nav class="sidebar-menu">
                <router-link to="/admin/dashboard">
                    <span>Dashboard</span>
                </router-link>

                <router-link to="/admin/jadwal">
                    <span>Jadwal</span>
                </router-link>

                <router-link to="/admin/peserta">
                    <span>Peserta</span>
                </router-link>
            </nav>

            <div class="sidebar-footer">
                <button class="btn-logout">Logout</button>
            </div>
        </aside>

        <main class="main-content">
                <slot />
            </main>
    </div>
</template>

<style>
.admin-wrapper {
    display: flex;
    min-height: 100vh;
    background: #f4f6f9;
}

.sidebar {
    width: 250px;
    background: linear-gradient(180deg, rgb(94, 94, 255), blue);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.sidebar-head h2 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
}

.sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
}

.sidebar-menu a {
    color: white;
    text-decoration: none;
    padding: 12px 15px;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.sidebar-menu a:hover {
    background: blue;
}

.sidebar-menu a.router-link-active {
    border: 1px solid white;
}


.sidebar-footer {
    margin-top: auto;
}

.btn-logout {
    width: 100%;
    padding: 12px;
    border: none;
    background: red;
    color: white;
    font-weight: bold;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.btn-logout:hover {
    background: rgb(219, 0, 0);
}

.main-content {
    flex: 1;
    padding: 30px;
    overflow-y: auto;
}


</style>