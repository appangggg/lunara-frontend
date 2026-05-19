import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import hero from '../assets/heroo.png'

// Pastikan sudah tambahkan Font Awesome di index.html:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
// Dan Google Fonts:
// <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

const howItWorksData = [
  {
    step: '01',
    title: 'Cari Lapangan',
    desc: 'Pilih kategori olahraga dan lokasi yang Anda inginkan di Makassar.',
    icon: 'fa-solid fa-magnifying-glass'
  },
  {
    step: '02',
    title: 'Pilih Jadwal',
    desc: 'Lihat slot waktu yang tersedia secara real-time dan pilih yang sesuai.',
    icon: 'fa-solid fa-calendar-check'
  },
  {
    step: '03',
    title: 'Bayar Instan',
    desc: 'Lakukan pembayaran aman menggunakan QRIS atau transfer bank otomatis.',
    icon: 'fa-solid fa-credit-card'
  },
  {
    step: '04',
    title: 'Siap Main',
    desc: 'Datang ke lokasi dan tunjukkan bukti booking digital Anda ke pengelola.',
    icon: 'fa-solid fa-table-tennis-paddle-ball'
  }
]

const testimonialData = [
  {
    name: 'Andi Pratama',
    role: 'Pemain Badminton',
    comment: 'Sangat memudahkan! Dulu harus telepon satu-satu, sekarang tinggal klik langsung dapet lapangan.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=andi'
  },
  {
    name: 'Siti Aminah',
    role: 'Kapten Futsal Putri',
    comment: 'Sistem pembayarannya cepet banget. QRIS-nya langsung ke-detect dan jadwalnya akurat.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=siti'
  },
  {
    name: 'Budi Santoso',
    role: 'Penggemar Mini Soccer',
    comment: 'Aplikasi olahraga terbaik di Makassar. Rekomendasi lapangannya oke-oke semua.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=budi'
  }
]

const faqData = [
  {
    q: 'Apakah saya bisa membatalkan pesanan?',
    a: 'Ya, pembatalan dapat dilakukan maksimal 24 jam sebelum jadwal main dengan syarat dan ketentuan berlaku.'
  },
  {
    q: 'Bagaimana cara bayar di Lunara Sports?',
    a: 'Kami mendukung pembayaran via QRIS (Gopay, OVO, Dana, dll) dan Virtual Account bank ternama.'
  },
  {
    q: 'Apakah harga di aplikasi sama dengan di lokasi?',
    a: 'Sama. Bahkan kami sering memberikan promo eksklusif untuk pengguna aplikasi Lunara Sports.'
  }
]

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
          <div className="flex items-center gap-3">
            <img src={logo} alt="Lunara Sports" className="h-9 w-auto object-contain" />
            <span className="text-white font-extrabold text-lg tracking-tight">
              Lunara <span className="text-green-400">Sports</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Beranda', 'Cari Lapangan', 'Tentang Kami'].map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(' ', '')}`} className="text-[#a3bfad] hover:text-white text-sm font-medium transition-colors relative group">
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-green-400 rounded-full transition-all group-hover:w-full" />
              </a>
            ))}
            <button onClick={() => navigate('/login')} className="bg-green-500 hover:bg-green-400 text-[#1a3a2a] font-extrabold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-green-500/20">
              Masuk / Daftar
            </button>
          </div>
          <button className="md:hidden text-white text-xl"><i className="fa-solid fa-bars" /></button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="beranda" className="relative flex flex-col items-center" style={{ minHeight: '650px' }}>
        <img src={hero} alt="Hero BG" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a2a]/80 to-[#1a3a2a]/90" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-40 w-full max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-bold tracking-wide">Platform Booking #1 di Makassar</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Main Olahraga<br /><span className="text-green-400">Jadi Lebih Mudah</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
            Booking lapangan Futsal, Badminton, dan Mini Soccer secara instan. Jadwal akurat, bayar otomatis, langsung main!
          </p>
        </motion.div>

        {/* SEARCH BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          id="carilapangan" 
          className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-40 px-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 flex flex-col md:flex-row gap-5 items-stretch md:items-end shadow-2xl border border-[#e5e7e3]">
            <div className="flex-1">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Pilih Olahraga</label>
              <select value={sportFilter} onChange={(e) => setSportFilter(e.target.value)} className="w-full px-4 py-3.5 bg-[#f8f9f6] border border-[#e5e7e3] rounded-2xl text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-green-400 transition-all">
                <option>Semua Olahraga</option>
                <option>Badminton</option>
                <option>Futsal</option>
                <option>Mini Soccer</option>
              </select>
            </div>
            <div className="flex-[1.5]">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Lokasi</label>
              <div className="relative">
                <i className="fa-solid fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Cari area di Makassar..." value={location} onChange={(e) => setLocation(e.target.value)} className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9f6] border border-[#e5e7e3] rounded-2xl text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-green-400 transition-all" />
              </div>
            </div>
            <button className="bg-[#1a3a2a] hover:bg-green-600 text-white font-black text-sm px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#1a3a2a]/20">
              <i className="fa-solid fa-magnifying-glass" /> CARI JADWAL
            </button>
          </div>
        </motion.div>
      </section>

      <div className="h-32 bg-[#f5f5f0]" />

      {/* ── CARA BOOKING ── */}
      <section className="py-20 bg-[#f5f5f0] px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Cara Booking di Lunara</h2>
            <div className="h-1 w-20 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorksData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 text-white flex items-center justify-center font-black rounded-2xl shadow-lg shadow-green-500/30">{item.step}</span>
                <div className="w-16 h-16 bg-[#f0fdf4] text-green-600 flex items-center justify-center text-2xl rounded-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <i className={item.icon} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REKOMENDASI LAPANGAN ── */}
      <section className="py-20 bg-white px-8 rounded-[40px] shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-8 h-px bg-green-600" /> PILIHAN TERBAIK
              </p>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Rekomendasi Lapangan</h2>
            </div>
            <a href="#" className="text-green-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Lihat Semua Lapangan <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lapanganData.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f8f9f6] rounded-[32px] overflow-hidden border border-gray-100 group"
              >
                <div className="h-48 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${item.bgFrom}, ${item.bgTo})` }}>
                  <i className={`${item.icon} text-9xl text-white/10 absolute -right-4 -bottom-4 -rotate-12 group-hover:scale-110 transition-transform duration-500`} />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full border border-white/20">{item.kategori}</span>
                    {item.popular && <span className="bg-yellow-400 text-gray-900 text-[10px] font-black px-3 py-1.5 rounded-full">POPULER</span>}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-gray-900 mb-2">{item.nama}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mb-4"><i className="fa-solid fa-location-dot text-green-500" /> {item.venue}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Mulai Dari</p>
                      <p className="text-xl font-black text-[#1a3a2a]">Rp {item.harga.toLocaleString('id-ID')}<span className="text-xs font-normal text-gray-400">/jam</span></p>
                    </div>
                    <button onClick={() => navigate('/login')} className="bg-[#1a3a2a] text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg shadow-[#1a3a2a]/10">
                      <i className="fa-solid fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONI ── */}
      <section className="py-24 bg-[#1a3a2a] px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white">Apa Kata Mereka?</h2>
            <p className="text-green-400/60 mt-2 font-medium">Ribuan atlet di Makassar telah bergabung</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialData.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[32px]"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => <i key={i} className="fa-solid fa-star text-yellow-400 text-xs" />)}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-8 italic">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-green-500" />
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-green-400 text-[11px] font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-16">Pertanyaan Umum</h2>
          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-[#f8f9f6] rounded-2xl border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white text-[10px] flex items-center justify-center rounded-lg font-black">Q</span>
                  {item.q}
                </h3>
                <p className="text-gray-500 text-sm ml-9 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA MITRA ── */}
      <section className="px-8 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-[#1a3a2a] to-[#0e1a13] rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Punya Lapangan?<br />Ayo Jadi Mitra Kami!</h2>
            <p className="text-[#a3bfad] text-base mb-10 max-w-xl mx-auto">Kelola jadwal otomatis, terima pembayaran digital, dan jangkau ribuan pemain di Makassar.</p>
            <button onClick={() => navigate('/login')} className="bg-green-500 hover:bg-green-400 text-[#1a3a2a] font-black text-lg px-12 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-500/20">
              Daftar Sebagai Mitra
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0e1a13] py-12 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-8 w-auto grayscale brightness-200 opacity-50" />
              <span className="text-white/30 font-bold tracking-widest text-sm uppercase">Lunara Sports</span>
            </div>
            <p className="text-white/20 text-xs text-center md:text-left">Platform booking olahraga terdepan di Makassar.<br />© 2025 Lunara Sports. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {['instagram', 'tiktok', 'whatsapp'].map(social => (
              <a key={social} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/30 hover:text-green-500 hover:bg-white/10 transition-all">
                <i className={`fa-brands fa-${social} text-xl`} />
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}