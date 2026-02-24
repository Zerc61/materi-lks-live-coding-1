import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Home.vue';
import LoginAdmin from '../views/admin/auth/Login.vue';
import DashboardAdmin from '../views/admin/Dashboard.vue';
import JadwalAdmin from '../views/admin/Jadwal.vue';
import PesertaAdmin from '../views/admin/Register.vue';


const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },

    {
        path: '/admin/login',
        name: 'login-admin',
        component: LoginAdmin,
    },

    {
        path: '/admin/dashboard',
        name: 'dashboard-admin',
        component: DashboardAdmin
    },

    {
        path: '/admin/jadwal',
        name: 'jadwal-admin',
        component: JadwalAdmin
    },

    {
        path: '/admin/peserta',
        name: 'perserta-admin',
        component: PesertaAdmin
    }

];


const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router