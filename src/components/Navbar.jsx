import { useState } from 'react';

export default function Navbar() {
  // Simulasi status login (Nanti ini diganti dengan data asli dari Laravel API)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-teal-800 tracking-tight cursor-pointer flex items-center gap-2">
          🏸 Lunara<span className="text-yellow-500">Sports</span>
        </div>

        {/* Menu Navigasi Tengah */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
          <a href="#beranda" className="hover:text-teal-600 transition">Beranda</a>
          <a href="#carilapangan" className="hover:text-teal-600 transition">Cari Lapangan</a>
          <a href="#tentang" className="hover:text-teal-600 transition">Tentang Kami</a>
        </div>

        {/* Menu Kanan (Akun User) */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-teal-800">Halo, Appang!</span>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="px-6 py-2.5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition shadow-md hover:shadow-lg text-sm"
            >
              Masuk / Daftar
            </button>
          )}
        </div>

      </div>
    </nav>
  )
}