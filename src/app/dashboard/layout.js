'use client';

import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
    <Sidebar />
    <div className="md:pl-64">
      <Header />
      <main>
        {children}
      </main>
    </div>
  </div>
  );
}