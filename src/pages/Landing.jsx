import { Link } from 'react-router-dom'
import {
    ScanFace,
    Shield,
    Wifi,
    Zap,
    Eye,
    Smartphone,
    ArrowRight,
    ChevronRight,
    Lock,
    Fingerprint,
    Cloud,
    Bell,
} from 'lucide-react'

const features = [
    {
        icon: <ScanFace size={28} />,
        title: 'Face Recognition AI',
        desc: 'Pengenalan wajah real-time dengan akurasi 99.7% menggunakan model FaceNet dan TensorFlow Lite untuk autentikasi contactless.',
        color: 'cyan',
    },
    {
        icon: <Shield size={28} />,
        title: 'Anti-Spoofing Detection',
        desc: 'Liveness detection canggih yang membedakan wajah asli dari foto, video, atau masker 3D untuk mencegah akses ilegal.',
        color: 'purple',
    },
    {
        icon: <Wifi size={28} />,
        title: 'IoT Cloud Integration',
        desc: 'Terhubung ke Firebase/AWS IoT untuk monitoring, kontrol, dan logging akses real-time dari mana saja.',
        color: 'blue',
    },
    {
        icon: <Zap size={28} />,
        title: 'Respon < 800ms',
        desc: 'Proses autentikasi super cepat dari deteksi wajah hingga aktuasi kunci dalam waktu kurang dari 800 milidetik.',
        color: 'amber',
    },
    {
        icon: <Fingerprint size={28} />,
        title: 'Multi-Factor Auth',
        desc: 'Kombinasi Face + PIN + RFID untuk tingkat keamanan berlapis yang setara dengan standar enterprise.',
        color: 'green',
    },
    {
        icon: <Bell size={28} />,
        title: 'Notifikasi Real-Time',
        desc: 'Notifikasi push dan WhatsApp/Telegram otomatis saat ada percobaan akses gagal atau aktivitas mencurigakan.',
        color: 'red',
    },
]

const techStack = [
    { label: 'ESP32-CAM', desc: 'Kamera & WiFi' },
    { label: 'TensorFlow Lite', desc: 'AI Engine' },
    { label: 'Firebase', desc: 'Cloud Backend' },
    { label: 'Flutter', desc: 'Mobile App' },
]

export default function Landing() {
    return (
        <div style={{ overflow: 'hidden' }}>
            {/* Navigation Bar */}
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: '16px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(10, 14, 26, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid var(--color-border)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                        style={{
                            width: 36,
                            height: 36,
                            background: 'var(--gradient-primary)',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-glow)',
                        }}
                    >
                        <Lock size={18} color="white" />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '1rem' }}>
                        SmartDoorLock
                    </span>
                </div>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <a
                        href="#features"
                        style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                        }}
                    >
                        Fitur
                    </a>
                    <a
                        href="#tech"
                        style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                        }}
                    >
                        Teknologi
                    </a>
                    <a
                        href="#about"
                        style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                        }}
                    >
                        Tentang
                    </a>
                    <Link to="/dashboard" className="btn btn-primary btn-sm">
                        <LayoutDashboard size={16} />
                        Dashboard
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-grid" />
                <div className="hero-floating-orbs">
                    <div className="hero-orb" />
                    <div className="hero-orb" />
                    <div className="hero-orb" />
                </div>

                <div className="hero-content">
                    <div className="hero-badge">
                        <div className="hero-badge-dot" />
                        PBL Project 2025 — Indra Hermawan
                    </div>

                    <h1 className="hero-title">
                        Smart Door Lock
                        <br />
                        Berbasis{' '}
                        <span className="gradient-text">Biometrik Wajah</span>
                    </h1>

                    <p className="hero-description">
                        Sistem keamanan akses pintar generasi terbaru yang menggabungkan
                        teknologi <strong>AI Face Recognition</strong>,{' '}
                        <strong>IoT Cloud</strong>, dan{' '}
                        <strong>Multi-Factor Authentication</strong> untuk memberikan
                        keamanan tanpa kunci fisik dengan respon kurang dari 1 detik.
                    </p>

                    <div className="hero-actions">
                        <Link to="/dashboard" className="btn btn-primary btn-lg">
                            <ScanFace size={20} />
                            Buka Dashboard
                            <ArrowRight size={18} />
                        </Link>
                        <a href="#features" className="btn btn-secondary btn-lg">
                            <Eye size={20} />
                            Lihat Fitur
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat-item">
                            <div className="hero-stat-value">99.7%</div>
                            <div className="hero-stat-label">Akurasi Deteksi</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-value">&lt;800ms</div>
                            <div className="hero-stat-label">Respon Time</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-value">24/7</div>
                            <div className="hero-stat-label">Monitoring</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-value">128-512</div>
                            <div className="hero-stat-label">Titik Fitur Wajah</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section" id="features">
                <div className="section-header">
                    <h2 className="section-title">
                        Fitur <span className="gradient-text">Unggulan</span>
                    </h2>
                    <p className="section-desc">
                        Dilengkapi teknologi mutakhir yang menjadikan sistem ini setara
                        dengan produk komersial premium seperti Yale atau Aqara.
                    </p>
                </div>

                <div className="feature-grid">
                    {features.map((f, i) => (
                        <div
                            className="feature-card animate-in"
                            key={i}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div
                                className="feature-icon"
                                style={{
                                    background: `var(--color-bg-hover)`,
                                    color: `var(--color-primary-400)`,
                                }}
                            >
                                {f.icon}
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section
                id="tech"
                style={{
                    padding: '100px 32px',
                    background:
                        'radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.06) 0%, transparent 50%), var(--color-bg-primary)',
                }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
                            Tech <span className="gradient-text">Stack</span>
                        </h2>
                        <p style={{ color: 'var(--color-text-secondary)', maxWidth: 500, margin: '0 auto' }}>
                            Teknologi yang dipilih dengan seksama untuk memastikan reliabilitas,
                            kecepatan, dan skalabilitas.
                        </p>
                    </div>

                    <div className="grid-4">
                        {techStack.map((tech, i) => (
                            <div className="card stat-card" key={i}>
                                <div className="stat-value" style={{ fontSize: '1.2rem' }}>
                                    {tech.label}
                                </div>
                                <div className="stat-label">{tech.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '16px',
                            marginTop: '3rem',
                            flexWrap: 'wrap',
                        }}
                    >
                        {[
                            'Face Recognition',
                            'Edge Computing',
                            'MQTT Protocol',
                            'TLS Encryption',
                            'REST API',
                            'WebSocket',
                            'Deep Learning',
                            'PIR Sensor',
                        ].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: '6px 16px',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.8rem',
                                    color: 'var(--color-text-secondary)',
                                    border: '1px solid var(--color-border)',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section
                style={{
                    padding: '100px 32px',
                    background: 'var(--gradient-bg), var(--color-bg-primary)',
                }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
                            Cara <span className="gradient-text">Kerja</span>
                        </h2>
                        <p style={{ color: 'var(--color-text-secondary)', maxWidth: 500, margin: '0 auto' }}>
                            Alur kerja sistem dari deteksi wajah hingga aktuasi kunci dalam 5 langkah.
                        </p>
                    </div>

                    <div className="arch-flow">
                        {[
                            { icon: '📷', title: 'Deteksi Wajah', desc: 'Kamera aktif' },
                            { icon: '🧠', title: 'AI Processing', desc: 'Feature extraction' },
                            { icon: '🔍', title: 'Matching', desc: 'Database comparison' },
                            { icon: '✅', title: 'Verifikasi', desc: 'Access decision' },
                            { icon: '🔓', title: 'Aktuasi', desc: 'Lock/unlock' },
                        ].map((step, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div className="arch-node">
                                    <div className="arch-node-icon">{step.icon}</div>
                                    <div className="arch-node-title">{step.title}</div>
                                    <div className="arch-node-desc">{step.desc}</div>
                                </div>
                                {i < 4 && <div className="arch-arrow">→</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About / CTA */}
            <section
                id="about"
                style={{
                    padding: '100px 32px',
                    background:
                        'radial-gradient(ellipse at 50% 100%, rgba(139, 92, 246, 0.05) 0%, transparent 50%), var(--color-bg-primary)',
                }}
            >
                <div
                    style={{
                        maxWidth: 700,
                        margin: '0 auto',
                        textAlign: 'center',
                    }}
                >
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Siap untuk <span className="gradient-text">Masa Depan</span> Keamanan?
                    </h2>
                    <p
                        style={{
                            color: 'var(--color-text-secondary)',
                            marginBottom: '2rem',
                            lineHeight: 1.7,
                        }}
                    >
                        Proyek Smart Door Lock ini dirancang untuk implementasi nyata di
                        lingkungan rumah, kos, kantor, kampus, dan apartemen. Dengan biaya
                        prototipe hanya <strong>± Rp 1.200.000</strong>, sistem ini menawarkan
                        keamanan setara produk komersial premium.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <Link to="/dashboard" className="btn btn-primary btn-lg">
                            <ScanFace size={20} />
                            Masuk Dashboard
                        </Link>
                        <Link to="/about" className="btn btn-secondary btn-lg">
                            <Info size={20} />
                            Detail Proyek
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                style={{
                    padding: '32px',
                    borderTop: '1px solid var(--color-border)',
                    textAlign: 'center',
                    background: 'var(--color-bg-secondary)',
                }}
            >
                <p
                    style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.8rem',
                    }}
                >
                    © 2025 Smart Door Lock — PBL Project by Indra Hermawan.
                    Sistem Keamanan Akses Pintar Berbasis AI dan IoT.
                </p>
            </footer>
        </div>
    )
}

function LayoutDashboard({ size }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
    )
}

function Info({ size }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}
