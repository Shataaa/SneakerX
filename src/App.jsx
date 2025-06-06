import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import React from "react";
const ArtikelNews = React.lazy(() => import("./pages/ArtikelNews"));
const ManajemenProduk = React.lazy(() => import("./pages/ManajemenProduk"));
const CompanyProfileList = React.lazy(() => import("./pages/CompanyProfileList"));
const LowonganKerja = React.lazy(() => import("./pages/LowonganKerja"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customer"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Karyawan = React.lazy(() => import("./pages/Karyawan"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Loading = React.lazy(() => import("./Components/Loading"));
const Login = React.lazy(() => import("./auth/Login"));
const Register = React.lazy(() => import("./auth/Register"));
const Forgot = React.lazy(() => import("./auth/Forgot"));
const MainLayout = React.lazy(() => import("./layouts/MainLayouts"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayouts"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const CompanyProfileDetail = React.lazy(() => import("./pages/CompanyProfileDetail"));
const ArtikelNewsDetail = React.lazy(() => import("./pages/ArtikelNewsDetail"));
const BookingDetail = React.lazy(() => import("./pages/BookingDetail"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Karyawan" element={<Karyawan />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:index" element={<BookingDetail />} />
          <Route path="/CompanyProfileList" element={<CompanyProfileList />} />
          <Route path="/LowonganKerja" element={<LowonganKerja />} />
          <Route path="/ManajemenProduk" element={<ManajemenProduk />} />
          <Route path="/ArtikelNews" element={<ArtikelNews />} />
          <Route path="/produk/:id" element={<ProductDetail />} />
          <Route path="/company/:id" element={<CompanyProfileDetail />} />
          <Route path="/artikel/:id" element={<ArtikelNewsDetail />} />
        </Route>

        <Route>
          <Route
            path="*"
            element={
              <ErrorPage
                img="/img/error-404-illustration.png"
                code={404}
                title={"HALAMAN TIDAK DITEMUKAN"}
                description={
                  "Pastikan kamu memasukkan alamat halaman dengan benar!"
                }
              />
            }
          />
          <Route
            path="/401"
            element={
              <ErrorPage
                img="/img/error-401-illustration.png"
                code={401}
                title={"TIDAK ADA AKSES"}
                description={"Kamu tidak memiliki akses untuk halaman ini!"}
              />
            }
          />
          <Route
            path="/403"
            element={
              <ErrorPage
                img="/img/error-403-illustration.png"
                code={403}
                title={"TIDAK ADA AKSES KE SERVER"}
                description={
                  "Silahkan hubungi pemilik situs ini untuk mengetahui lebih lanjut"
                }
              />
            }
          />
          <Route
            path="/400"
            element={
              <ErrorPage
                img="/img/error-400-illustration.png"
                code={400}
                title={"PERMINTAAN HTTP TIDAK SESUAI"}
                description={
                  "Pastikan anda mengisi data sesuai dengan yang diminta"
                }
              />
            }
          />
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/Loading" element={<Loading />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
