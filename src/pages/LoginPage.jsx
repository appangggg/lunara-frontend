import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import hero from '../assets/hero.png'


export default function LoginPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [registerForm, setRegisterForm] = useState({ nama: '', email: '', password: '', konfirmasi: '' })

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login:', loginForm)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log('Register:', registerForm)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex font-sans">
      {/* ── KIRI — Branding Panel ── */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-[#1a3a2a] p-12 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-green-500 opacity-[0.08] pointer-events-none" />
        <div className="absolute -left-10 bottom-20 w-56 h-56 rounded-full bg-yellow-400 opacity-[0.07] pointer-events-none" />

        <div className="flex items-center gap-3 relative z-10">
          <img src={logo} alt="Lunara Sports Logo" className="h-10 w-auto" />
          <span className="text-white font-extrabold text-lg tracking-tight">
            Lunara <span className="text-green-400">Sports</span>
          </span>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-semibold">Platform Booking #1 di Indonesia</span>
          </div>
          <h1 className="text-4xl font-black text-white leading-[1.15] tracking-tight mb-5">
            Booking Lapangan<br />
            <span className="text-green-400">Lebih Mudah</span><br />
            dari Sebelumnya.
          </h1>
          <p className="text-[#a3bfad] text-sm leading-relaxed max-w-sm">
            Masuk dan nikmati kemudahan memesan lapangan Futsal, Badminton, Mini Soccer, Padel, dan Basket kapan saja.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              { icon: 'fa-solid fa-bolt', text: 'Booking instan kurang dari 2 menit' },
              { icon: 'fa-solid fa-clock', text: 'Cek jadwal real-time 24/7' },
              { icon: 'fa-solid fa-qrcode', text: 'Bayar otomatis via QRIS / Midtrans' },
            ].map((f) => (
              <li key={f.text} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <i className={`${f.icon} text-green-400 text-sm`} />
                </div>
                <span className="text-[#a3bfad] text-sm">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-8 pt-8 border-t border-white/10 relative z-10">
          <div>
            <p className="text-xl font-black text-white">500+</p>
            <p className="text-xs text-[#a3bfad] mt-0.5">Lapangan Aktif</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <p className="text-xl font-black text-white">12K+</p>
            <p className="text-xs text-[#a3bfad] mt-0.5">Pengguna</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <p className="text-xl font-black text-white">4.9</p>
            <p className="text-xs text-[#a3bfad] mt-0.5">Rating App</p>
          </div>
        </div>
      </div>

      {/* ── KANAN — Form Panel ── */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="flex lg:hidden items-center gap-3 mb-8">
          <img src={logo} alt="Lunara Sports Logo" className="h-10 w-auto" />
          <span className="text-[#1a3a2a] font-extrabold text-lg tracking-tight">
            Lunara <span className="text-green-500">Sports</span>
          </span>
        </div>

        <div className="w-full max-w-md">
          <div className="flex bg-white border border-[#e5e7e3] rounded-xl p-1 mb-8 shadow-sm">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                activeTab === 'login'
                  ? 'bg-[#1a3a2a] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className="fa-solid fa-right-to-bracket mr-2" />
              Masuk
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                activeTab === 'register'
                  ? 'bg-[#1a3a2a] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className="fa-solid fa-user-plus mr-2" />
              Daftar
            </button>
          </div>

          {/* ── LOGIN FORM ── */}
          {activeTab === 'login' && (
            <div>
              <div className="mb-7">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Selamat datang kembali</h2>
                <p className="text-gray-500 text-sm mt-1">Masuk ke akun Lunara Sports Anda</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email</label>
                  <div className="relative">
                    <i className="fa-solid fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      placeholder="contoh@email.com"
                      required
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#f8f9f6] border border-[#e5e7e3] rounded-xl text-sm text-gray-800 outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Password</label>
                    <a href="#" className="text-xs text-green-500 hover:text-green-600 font-semibold">Lupa password?</a>
                  </div>
                  <div className="relative">
                    <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Masukkan password"
                      required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full pl-10 pr-10 py-3 bg-[#f8f9f6] border border-[#e5e7e3] rounded-xl text-sm text-gray-800 outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-sm`} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-green-500 accent-green-500 cursor-pointer" />
                  <label htmlFor="remember" className="text-sm text-gray-500 cursor-pointer select-none">Ingat saya di perangkat ini</label>
                </div>

                <button type="submit" className="w-full bg-[#1a3a2a] hover:bg-green-600 text-white font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2">
                  <i className="fa-solid fa-right-to-bracket" /> Masuk Sekarang
                </button>
              </form>

              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 font-medium">atau masuk dengan</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 border border-[#e5e7e3] bg-white hover:bg-gray-50 py-2.5 rounded-xl text-sm font-semibold text-gray-700 transition-colors">
                  <i className="fa-brands fa-google text-red-500" /> Google
                </button>
                <button className="flex items-center justify-center gap-2 border border-[#e5e7e3] bg-white hover:bg-gray-50 py-2.5 rounded-xl text-sm font-semibold text-gray-700 transition-colors">
                  <i className="fa-brands fa-facebook text-blue-600" /> Facebook
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-6">
                Belum punya akun? <button onClick={() => setActiveTab('register')} className="text-green-500 hover:text-green-600 font-bold">Daftar gratis</button>
              </p>
            </div>
          )}

          {/* ── REGISTER FORM ── */}
          {activeTab === 'register' && (
            <div>
              <div className="mb-7">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Buat akun baru</h2>
                <p className="text-gray-500 text-sm mt-1">Daftar gratis dan mulai booking lapangan</p>
              </div>

              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Nama Lengkap</label>
                  <div className="relative">
                    <i className="fa-solid fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Nama lengkap Anda"
                      required
                      value={registerForm.nama}
                      onChange={(e) => setRegisterForm({ ...registerForm, nama: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#f8f9f6] border border-[#e5e7e3] rounded-xl text-sm text-gray-800 outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email</label>
                  <div className="relative">
                    <i className="fa-solid fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      placeholder="contoh@email.com"
                      required
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#f8f9f6] border border-[#e5e7e3] rounded-xl text-sm text-gray-800 outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Password</label>
                  <div className="relative">
                    <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Minimal 8 karakter"
                      required
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      className="w-full pl-10 pr-10 py-3 bg-[#f8f9f6] border border-[#e5e7e3] rounded-xl text-sm text-gray-800 outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-sm`} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Konfirmasi Password</label>
                  <div className="relative">
                    <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      placeholder="Ulangi password"
                      required
                      value={registerForm.konfirmasi}
                      onChange={(e) => setRegisterForm({ ...registerForm, konfirmasi: e.target.value })}
                      className="w-full pl-10 pr-10 py-3 bg-[#f8f9f6] border border-[#e5e7e3] rounded-xl text-sm text-gray-800 outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <i className={`fa-solid ${showConfirm ? 'fa-eye-slash' : 'fa-eye'} text-sm`} />
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" required className="w-4 h-4 mt-0.5 rounded border-gray-300 accent-green-500 cursor-pointer shrink-0" />
                  <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer select-none leading-relaxed">
                    Saya setuju dengan <a href="#" className="text-green-500 hover:text-green-600 font-semibold">Syarat & Ketentuan</a> dan <a href="#" className="text-green-500 hover:text-green-600 font-semibold">Kebijakan Privasi</a>
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#1a3a2a] hover:bg-green-600 text-white font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2">
                  <i className="fa-solid fa-user-plus" /> Buat Akun Sekarang
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Sudah punya akun? <button onClick={() => setActiveTab('login')} className="text-green-500 hover:text-green-600 font-bold">Masuk di sini</button>
              </p>
            </div>
          )}
        </div>

        <button onClick={() => navigate('/')} className="mt-10 flex items-center gap-2 text-sm text-gray-400 hover:text-[#1a3a2a] transition-colors font-medium">
          <i className="fa-solid fa-arrow-left text-xs" /> Kembali ke Beranda
        </button>
      </div>
    </div>
  )
}