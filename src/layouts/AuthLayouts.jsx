import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="font-arimo min-h-screen flex items-center justify-center bg-gray-100">
      <div className="font-arimo bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <Outlet />
        <p className="font-arimo text-center text-sm text-gray-500 mt-6">
          © 2025 SneakerX Admin Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
}
