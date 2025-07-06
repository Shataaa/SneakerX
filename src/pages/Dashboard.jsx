import PageHeader from "../Components/PageHeader";
import { Bar, Line, Pie } from "react-chartjs-2"; // Import Bar, Line, Pie Chart dari react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

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
    <div id="dashboard-container" className="font-arimo">
      <PageHeader title="Dashboard" />
      <div className="font-arimo stats shadow bg-white rounded-lg p-6 mt-4 flex justify-center w-fit mx-auto">
        <div className="font-arimo stat">
          <div className="font-arimo stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="font-arimo inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="font-arimo stat-title text-abu500">Downloads</div>
          <div className="font-arimo stat-value text-abu500">31K</div>
          <div className="font-arimo stat-desc text-abu500">
            Jan 1st - Feb 1st
          </div>
        </div>

        <div className="font-arimo stat">
          <div className="font-arimo stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="font-arimo inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="font-arimo stat-title text-abu500">New Users</div>
          <div className="font-arimo stat-value text-abu500">4,200</div>
          <div className="font-arimo stat-desc text-abu500">↗︎ 400 (22%)</div>
        </div>

        <div className="font-arimo stat">
          <div className="font-arimo stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="font-arimo inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="font-arimo stat-title text-abu500">New Registers</div>
          <div className="font-arimo stat-value text-abu500">1,200</div>
          <div className="font-arimo stat-desc text-abu500">↘︎ 90 (14%)</div>
        </div>
      </div>

      {/* Grafik Utama */}
      <div
        id="dashboard-chart"
        className="font-arimo mt-8 bg-white rounded-lg shadow-md p-6"
      >
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Grafik Tambahan */}
      <div
        id="dashboard-additional-charts"
        className="font-arimo mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Grafik Pie Artikel Populer */}
        <div className="font-arimo bg-white rounded-lg shadow-md p-6">
          <h3 className="font-arimo text-xl font-semibold mb-4 text-abu500">
            Artikel Populer
          </h3>
          <Pie data={popularArticlesData} options={chartOptions} />
        </div>

        {/* Grafik Batang Booking */}
        <div className="font-arimo bg-white rounded-lg shadow-md p-6">
          <h3 className="font-arimo text-xl font-semibold mb-4 text-abu500">
            Statistik Booking
          </h3>
          <Bar data={bookingData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
