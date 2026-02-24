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

        <main>
            <slot />
        </main>
    </div>
</template>

<style>
.admin-wrapper {
display: flex;
min-height: 100vh;
background: rgb(166, 166, 246);;
}

.sidebar {
    width: 250px;
    background: linear-gradient(180deg, rgb(30, 30, 204), rgb(0, 26, 255));
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 70px;
}

.sidebar-footer {
    margin-top: auto;
}
</style>
