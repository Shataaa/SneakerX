import PageHeader from "../Components/PageHeader";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdArticle } from "react-icons/md";
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
    <div id="dashboard-container">
        <PageHeader title="Dashboard"/>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-abu500">Downloads</div>
          <div className="stat-value text-abu500">31K</div>
          <div className="stat-desc text-abu500">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-abu500">New Users</div>
          <div className="stat-value text-abu500">4,200</div>
          <div className="stat-desc text-abu500">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-abu500">New Registers</div>
          <div className="stat-value text-abu500">1,200</div>
          <div className="stat-desc text-abu500">↘︎ 90 (14%)</div>
        </div>
      </div>

      {/* Grafik Utama */}
      <div
        id="dashboard-chart"
        className="mt-8 bg-white rounded-lg shadow-md p-6"
      >
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Grafik Tambahan */}
      <div
        id="dashboard-additional-charts"
        className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-4"
      >
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
          <h3 className="text-xl font-semibold mb-4">
            Statistik User Login (2023-2025)
          </h3>
          <Line data={userLoginYearlyData} options={chartOptions} />
        </div>

        {/* Grafik Garis User Login (Bulan) */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">
            Statistik User Login (Januari-Desember)
          </h3>
          <Line data={userLoginMonthlyData} options={chartOptions} />
        </div>

        {/* Grafik Batang Booking (Tahun) */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">
            Statistik Booking (2023-2025)
          </h3>
          <Bar data={bookingYearlyData} options={chartOptions} />
        </div>

        {/* Grafik Batang Booking (Bulan) */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">
            Statistik Booking (Januari-Desember)
          </h3>
          <Bar data={bookingMonthlyData} options={chartOptions} />
        </div>
      </div>

      {/* Tabel Data Pengunjung */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Data Pengunjung</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                Nama
              </th>
              <td className="px-6 py-4 border-b border-gray-200 text-abu400">
                Email
              </td>
              <span className="text-abu200">Contoh</span>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Data pengunjung akan di-mapping di sini */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
