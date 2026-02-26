<template>
    <AdminLayout>
        <div class="dashboard-container">
            <h1 class="page-title">Dashboard</h1>

            <div class="stats-grid">

                <div class="stats-card">
                    <h3>Total Jadwal</h3>
                    <p class="stat-number">{{ dashboardData.jadwal }}</p>
                </div>

                <div class="stats-card">
                    <h3>Total Peserta</h3>
                    <p class="stat-number">{{ dashboardData.peserta }}</p>
                </div>

                <div class="stats-card">
                    <h3>Pending</h3>
                    <p class="stat-number">{{ dashboardData.pending }}</p>
                </div>

                <div class="stats-card">
                    <h3>Diterima</h3>
                    <p class="stat-number">{{ dashboardData.diterima }}</p>
                </div>

                <div class="stats-card">
                    <h3>Ditolak</h3>
                    <p class="stat-number">{{ dashboardData.ditolak }}</p>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { ref } from 'vue';

const dashboardData = ref({
    jadwal: 15,
    peserta: 124,
    pending: 12,
    diterima: 105,
    ditolak: 7
});
</script>

<style scoped>
.dashboard-container {
    padding: 20px;
}

.page-title {
    margin-bottom: 20px;
    color: #333;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}

.stats-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.027);
    text-align: center;
    border-top: 4px solid rgb(72, 72, 255);
}

.stats-card h3 {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
}
</style>