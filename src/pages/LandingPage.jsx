import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Pastikan sudah tambahkan Font Awesome di index.html:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
// Dan Google Fonts:
// <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

const lapanganData = [
  {
    id: 1,
    nama: 'Lapangan Bulutangkis Tunas 1',
    venue: 'Tunas Sports, Makassar',
    harga: 68000,
    rating: 4.8,
    ulasan: 120,
    kategori: 'Badminton',
    lantai: 'Karpet Vinyl',
    icon: 'fa-solid fa-feather',
    bgFrom: '#1a3a2a',
    bgTo: '#2d5a3d',
    popular: false,
  },
  {
    id: 2,
    nama: 'Futsal Arena A',
    venue: 'Champion Futsal, Makassar',
    harga: 120000,
    rating: 4.5,
    ulasan: 85,
    kategori: 'Futsal',
    lantai: 'Rumput Sintetis',
    icon: 'fa-solid fa-futbol',
    bgFrom: '#2a1a3a',
    bgTo: '#3d2d5a',
    popular: false,
  },
  {
    id: 3,
    nama: 'Mini Soccer Galaxy',
    venue: 'Galaxy Sports, Makassar',
    harga: 250000,
    rating: 4.9,
    ulasan: 210,
    kategori: 'Mini Soccer',
    lantai: 'Rumput Sintetis Standar FIFA',
    icon: 'fa-solid fa-futbol',
    bgFrom: '#1a2a1a',
    bgTo: '#2a3a2a',
    popular: true,
  },
]

const whyItems = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Kecepatan',
    desc: 'Booking lapangan favoritmu dalam waktu kurang dari 2 menit tanpa hambatan.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Keamanan',
    desc: 'Transaksi terenkripsi via QRIS/Midtrans yang aman dan terverifikasi 100%.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Komunitas',
    desc: 'Mendukung ekosistem olahraga lokal melalui rating jujur dan sistem transparan.',
  },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const [sportFilter, setSportFilter] = useState('Semua Olahraga')
  const [location, setLocation] = useState('')

  return (
    <div className="min-h-screen bg-[#f5f5f0]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav className="bg-[#1a3a2a]/95 backdrop-blur-md sticky top-0 z-50 px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">

          {/* Logo — ganti src dengan path logo Anda, misal: src="/logo.png" atau src="/assets/logo.svg" */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Lunara Sports"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                // Fallback jika logo belum ada
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            {/* Fallback placeholder — akan tersembunyi otomatis jika gambar berhasil dimuat */}
            <div
              className="h-9 w-9 bg-green-500 rounded-xl items-center justify-center shrink-0"
              style={{ display: 'none' }}
            >
              <i className="fa-solid fa-location-dot text-[#1a3a2a] text-lg" />
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight">
              Lunara <span className="text-green-400">Sports</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Beranda', href: '#beranda' },
              { label: 'Cari Lapangan', href: '#carilapangan' },
              { label: 'Tentang Kami', href: '#tentang' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#a3bfad] hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-green-400 rounded-full transition-all group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={() => navigate('/login')}
              className="bg-green-500 hover:bg-green-400 text-[#1a3a2a] font-extrabold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-green-500/20"
            >
              <i className="fa-solid fa-right-to-bracket" />
              Masuk / Daftar
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white text-xl">
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </nav>

      {/* ── HERO + SEARCH (overlap) ── */}
      {/*
        Background gambar:
        Ganti src="/hero-bg.jpg" dengan path gambar Anda sendiri.
        Contoh: src="/assets/hero.jpg" atau src="/images/lapangan.jpg"
      */}
      <section id="beranda" className="relative overflow-hidden flex flex-col items-center" style={{ minHeight: '620px' }}>

        {/* Background Image — GANTI src ini dengan gambar Anda */}
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {/* Overlay gelap kehijauan — mirip referensi */}
        <div className="absolute inset-0 bg-[#1a3a2a]/75" />
        {/* Fallback background */}
        <div className="absolute inset-0 bg-[#1a3a2a] -z-10" />

        {/* Konten tengah */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-36 w-full max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500 px-5 py-2 rounded-full mb-8 shadow-lg shadow-green-500/30">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-white text-sm font-bold tracking-wide">Platform Booking #1 di Indonesia</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Sewa Lapangan<br />
            <span className="text-green-400">Tanpa Ribet</span>
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
            Cek jadwal real-time, pilih slot kosong, dan bayar otomatis.<br />
            Solusi modern untuk Futsal, Mini Soccer, Badminton, Padel dan Basket.
          </p>
        </div>

        {/* Search bar overlap — menempel di bawah hero */}
        <div id="carilapangan" className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-20 px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-5 flex flex-col md:flex-row gap-4 items-end shadow-2xl shadow-black/20 border border-[#e5e7e3]">
            <div className="flex-1 w-full">
              <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
                Pilih Olahraga
              </label>
              <select
                value={sportFilter}
                onChange={(e) => setSportFilter(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f9f6] border border-[#e5e7e3] rounded-xl text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-green-400 cursor-pointer transition-all"
              >
                <option>Semua Olahraga</option>
                <option>Badminton</option>
                <option>Futsal</option>
                <option>Mini Soccer</option>
                <option>Padel</option>
                <option>Basket</option>
              </select>
            </div>
            <div className="flex-[1.5] w-full">
              <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
                Lokasi
              </label>
              <div className="relative">
                <i className="fa-solid fa-location-dot absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Cari Kota/Tempat"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 bg-[#f8f9f6] border border-[#e5e7e3] rounded-xl text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
              </div>
            </div>
            <button className="bg-[#1a3a2a] hover:bg-green-600 text-white font-extrabold text-sm px-7 h-[46px] rounded-xl flex items-center gap-2 transition-all whitespace-nowrap shadow-lg hover:-translate-y-0.5">
              <i className="fa-solid fa-magnifying-glass" />
              Cari Jadwal
            </button>
          </div>
        </div>
      </section>

      {/* Spacer untuk kompensasi overlap search bar */}
      <div className="bg-[#f5f5f0] pt-20" />

      {/* ── LAPANGAN CARDS ── */}
      <section className="px-8 pb-20 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1.5">
                <i className="fa-solid fa-star mr-1" />
                Pilihan Terbaik
              </p>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Rekomendasi Lapangan</h2>
              <p className="text-gray-500 text-sm mt-1">Lapangan terpilih di sekitar Makassar</p>
            </div>
            <a
              href="#"
              className="text-green-600 text-sm font-bold flex items-center gap-1.5 hover:text-green-700 transition-colors group"
            >
              Lihat Semua
              <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lapanganData.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/8 ${
                  item.popular
                    ? 'border-2 border-green-500 shadow-lg shadow-green-500/10'
                    : 'border border-[#e8eae6] shadow-sm'
                }`}
              >
                {/* Image Area */}
                <div
                  className="h-40 relative flex items-end justify-start p-4"
                  style={{ background: `linear-gradient(135deg, ${item.bgFrom}, ${item.bgTo})` }}
                >
                  {/* Decorative icon background */}
                  <i className={`${item.icon} text-8xl text-white/10 absolute right-4 top-1/2 -translate-y-1/2 -rotate-12`} />

                  <div className="flex items-center gap-2 relative z-10">
                    <span className="bg-yellow-400 text-gray-900 text-[11px] font-extrabold px-3 py-1 rounded-lg">
                      {item.kategori}
                    </span>
                    {item.popular && (
                      <span className="bg-green-500 text-[#1a3a2a] text-[11px] font-extrabold px-3 py-1 rounded-lg flex items-center gap-1">
                        <i className="fa-solid fa-fire text-[10px]" />
                        Terpopuler
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-[15px] font-extrabold text-gray-900 mb-1.5 leading-tight">{item.nama}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-1.5">
                    <i className="fa-solid fa-location-dot text-green-500" />
                    {item.venue}
                  </p>
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-100 px-2 py-0.5 rounded-md">
                      <i className="fa-solid fa-star text-yellow-400 text-[10px]" />
                      <strong className="text-gray-800 text-xs">{item.rating}</strong>
                    </div>
                    <span className="text-xs text-gray-400">({item.ulasan} ulasan)</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-500">{item.lantai}</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Mulai dari</p>
                      <p className="text-[18px] font-black text-[#1a3a2a] leading-tight">
                        Rp {item.harga.toLocaleString('id-ID')}
                        <span className="text-xs font-normal text-gray-400">/jam</span>
                      </p>
                    </div>
                    <button
                      onClick={() => navigate('/login')}
                      className={`font-extrabold text-[13px] px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all hover:-translate-y-0.5 ${
                        item.popular
                          ? 'bg-green-500 hover:bg-green-400 text-[#1a3a2a] shadow-lg shadow-green-500/25'
                          : 'bg-[#1a3a2a] hover:bg-green-500 text-white hover:text-[#1a3a2a] shadow-lg shadow-[#1a3a2a]/20'
                      }`}
                    >
                      Pesan
                      <i className="fa-solid fa-arrow-right text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KENAPA KAMI ── */}
      <section id="tentang" className="py-20 bg-white px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Keunggulan Kami</p>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">Kenapa Memilih Kami?</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Platform terpercaya yang mempermudah akses lapangan olahraga untuk semua kalangan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className="p-8 bg-[#f8f9f6] rounded-2xl border border-[#e8eae6] text-center hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 group"
              >
                <div className="w-14 h-14 bg-green-500/10 group-hover:bg-green-500/15 rounded-2xl flex items-center justify-center text-green-600 text-xl mx-auto mb-5 transition-colors">
                  <i className={item.icon} />
                </div>
                <h3 className="font-extrabold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA MITRA ── */}
      <section className="relative bg-[#1a3a2a] py-20 px-8 text-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -left-20 top-0 w-80 h-80 rounded-full bg-green-500 opacity-[0.06] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-yellow-400 opacity-[0.04] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="w-16 h-16 bg-green-500/20 border border-green-500/20 rounded-2xl flex items-center justify-center text-green-400 text-2xl mx-auto mb-6">
            <i className="fa-solid fa-store" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
            Punya Lapangan Olahraga?
          </h2>
          <p className="text-[#a3bfad] text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
            Berhenti balas chat satu per satu! Kelola jadwal otomatis, terima QRIS, dan tingkatkan omset bersama sistem cerdas kami.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold text-base px-10 py-4 rounded-xl inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-xl shadow-yellow-400/20"
          >
            Gabung Jadi Mitra Sekarang
            <i className="fa-solid fa-arrow-right" />
          </button>
          <p className="text-[#5a8070] text-xs mt-5 font-medium">
            <i className="fa-solid fa-check mr-1 text-green-600" />
            Gratis daftar · Tanpa komisi awal · Setup dalam 5 menit
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0e1a13] py-6 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Lunara Sports"
              className="h-6 w-auto object-contain opacity-60"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <span className="text-[#4a6358] text-[13px] font-semibold">Lunara Sports</span>
          </div>
          <p className="text-[#3a5248] text-[12px] font-medium">
            <i className="fa-regular fa-copyright mr-1" />
            2025 Lunara Sports · Platform Booking Olahraga #1 di Makassar
          </p>
          <div className="flex items-center gap-4">
            {['fa-brands fa-instagram', 'fa-brands fa-tiktok', 'fa-brands fa-whatsapp'].map((icon) => (
              <button key={icon} className="text-[#3a5248] hover:text-green-500 transition-colors text-sm">
                <i className={icon} />
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}