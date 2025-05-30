import PageHeader from "../Components/PageHeader";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdArticle } from "react-icons/md";
import { Bar, Line, Pie } from "react-chartjs-2"; // Import Bar, Line, Pie Chart dari react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

export default function Dashboard() {
    // Data untuk grafik batang
    const chartData = {
        labels: ["Pengunjung", "Total Produk", "Total Artikel", "Total Booking"],
        datasets: [
            {
                label: "Statistik Dashboard",
                data: [75, 175, 40, 122], // Data untuk masing-masing kategori
                backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#F44336"], // Warna untuk setiap bar
            },
        ],
    };

    // Data untuk statistik user login (grafik garis)
    const userLoginData = {
        labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
        datasets: [
            {
                label: "User Login",
                data: [50, 60, 70, 80, 90, 100, 110], // Data login per hari
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                tension: 0.4,
            },
        ],
    };

    // Data untuk artikel populer (grafik pie)
    const popularArticlesData = {
        labels: ["Artikel A", "Artikel B", "Artikel C", "Artikel D"],
        datasets: [
            {
                label: "Artikel Populer",
                data: [30, 25, 20, 15], // Data jumlah pembaca artikel
                backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#F44336"],
            },
        ],
    };

    // Data untuk booking (grafik batang)
    const bookingData = {
        labels: ["Booking A", "Booking B", "Booking C", "Booking D"],
        datasets: [
            {
                label: "Booking",
                data: [40, 50, 30, 20], // Data jumlah booking
                backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#F44336"],
            },
        ],
    };

    // Data untuk statistik user login (grafik garis) dari tahun 2023-2025
    const userLoginYearlyData = {
        labels: ["2023", "2024", "2025"],
        datasets: [
            {
                label: "User Login",
                data: [1000, 1500, 2000], // Data login per tahun
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                tension: 0.4,
            },
        ],
    };

    // Data untuk statistik user login (grafik garis) dari bulan Januari-Desember
    const userLoginMonthlyData = {
        labels: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ],
        datasets: [
            {
                label: "User Login Bulanan",
                data: [80, 100, 90, 120, 110, 130, 140, 120, 150, 160, 140, 170], // Data acak naik turun
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                tension: 0.4,
            },
        ],
    };

    // Data untuk statistik booking (grafik batang) dari tahun 2023-2025
    const bookingYearlyData = {
        labels: ["2023", "2024", "2025"],
        datasets: [
            {
                label: "Booking",
                data: [150, 250, 350], // Data booking per tahun
                backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"],
            },
        ],
    };

    // Data untuk statistik booking (grafik batang) dari bulan Januari-Desember
    const bookingMonthlyData = {
        labels: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ],
        datasets: [
            {
                label: "Booking Bulanan",
                data: [30, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90], // Data acak naik turun
                backgroundColor: "#FF9800",
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Statistik Dashboard",
            },
        },
    };

    return (
        <div id="dashboard-container">
            {/* PageHeader */}
            <PageHeader 
                title="Dashboard"
                breadcrumb={["Dashboard"]}
            />
            
            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Card Statistik */}
                <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="orders-icon" className="bg-white rounded-full p-4">
                        <AiOutlineLineChart />
                    </div>
                    <div id="orders-info">
                        <span id="orders-count" className="text-2xl font-bold">75</span>
                        <span id="orders-text" className="text-gray-400">Pengunjung</span>
                    </div>
                </div>

                <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="delivered-icon" className="bg-white rounded-full p-4">
                        <AiOutlineUnorderedList />
                    </div>
                    <div id="delivered-info">
                        <span id="delivered-count" className="text-2xl font-bold">175</span>
                        <span id="delivered-text" className="text-gray-400">Total Produk</span>
                    </div>
                </div>

                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="canceled-icon" className="bg-white rounded-full p-4">
                        <MdArticle />
                    </div>
                    <div id="canceled-info">
                        <span id="canceled-count" className="text-2xl font-bold">40</span>
                        <span id="canceled-text" className="text-gray-400">Total Artikel</span>
                    </div>
                </div>

                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-white rounded-full p-4">
                        <AiOutlineShoppingCart />
                    </div>
                    <div id="revenue-info">
                        <span id="revenue-amount" className="text-2xl font-bold">122</span>
                        <span id="revenue-text" className="text-gray-400">Total Booking</span>
                    </div>
                </div>
            </div>

            {/* Grafik Utama */}
            <div id="dashboard-chart" className="mt-8 bg-white rounded-lg shadow-md p-6">
                <Bar data={chartData} options={chartOptions} />
            </div>

            {/* Grafik Tambahan */}
            <div id="dashboard-additional-charts" className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                {/* Grafik Garis User Login */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Statistik User Login</h3>
                    <Line data={userLoginData} options={chartOptions} />
                </div>

                {/* Grafik Pie Artikel Populer */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Artikel Populer</h3>
                    <Pie data={popularArticlesData} options={chartOptions} />
                </div>

                {/* Grafik Batang Booking */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Statistik Booking</h3>
                    <Bar data={bookingData} options={chartOptions} />
                </div>

                {/* Grafik Garis User Login (Tahun) */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Statistik User Login (2023-2025)</h3>
                    <Line data={userLoginYearlyData} options={chartOptions} />
                </div>

                {/* Grafik Garis User Login (Bulan) */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Statistik User Login (Januari-Desember)</h3>
                    <Line data={userLoginMonthlyData} options={chartOptions} />
                </div>

                {/* Grafik Batang Booking (Tahun) */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Statistik Booking (2023-2025)</h3>
                    <Bar data={bookingYearlyData} options={chartOptions} />
                </div>

                {/* Grafik Batang Booking (Bulan) */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Statistik Booking (Januari-Desember)</h3>
                    <Bar data={bookingMonthlyData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
}