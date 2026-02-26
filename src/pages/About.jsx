import { Link } from 'react-router-dom'
import {
    Target,
    Lightbulb,
    TrendingUp,
    Users,
    Award,
    Calendar,
    MapPin,
    BookOpen,
    Rocket,
    Star,
    ExternalLink,
} from 'lucide-react'

const objectives = [
    { icon: '🎯', text: 'Mengembangkan sistem autentikasi contactless berbasis face recognition AI' },
    { icon: '🔒', text: 'Meningkatkan keamanan dan kenyamanan akses dengan multi-factor authentication' },
    { icon: '☁️', text: 'Mengintegrasikan IoT dan Cloud untuk monitoring dan kontrol jarak jauh' },
    { icon: '📊', text: 'Menyediakan pencatatan histori akses digital (audit trail) yang lengkap' },
]

const roadmap = [
    {
        phase: 'Tahap 1 — Prototipe Dasar',
        timeline: 'Minggu 1–3',
        status: 'in-progress',
        tasks: [
            'Setup ESP32-CAM + face detection bawaan',
            'Integrasi relay + solenoid door lock',
            'FaceNet model deployment (TF Lite)',
            'Database Firebase basic setup',
            'Testing single-user recognition',
        ],
    },
    {
        phase: 'Tahap 2 — Feature Enhancement',
        timeline: 'Minggu 4–5',
        status: 'planned',
        tasks: [
            'Liveness detection (blink + head tracking)',
            'Multi-user face database',
            'Mobile app Flutter (basic)',
            'MQTT real-time communication',
            'WhatsApp/Telegram notification',
        ],
    },
    {
        phase: 'Tahap 3 — Production Ready',
        timeline: 'Minggu 6–8',
        status: 'planned',
        tasks: [
            'Raspberry Pi 5 migration + PoE',
            'PostgreSQL + admin dashboard',
            'Anti-spoofing enhancement',
            'Multi-door support',
            'Performance optimization & testing',
        ],
    },
]

const advantages = [
    { icon: '🔑', title: 'Zero Key Management', desc: 'Tanpa kunci fisik — menghilangkan risiko kehilangan, duplikasi, dan pencurian kunci' },
    { icon: '⚡', title: 'Akses Super Cepat', desc: 'Autentikasi < 800ms dari deteksi wajah hingga pintu terbuka' },
    { icon: '📱', title: 'Remote Monitoring', desc: 'Pantau dan kontrol akses dari mana saja via aplikasi mobile' },
    { icon: '📈', title: 'Highly Scalable', desc: 'Dari rumah, kos, kantor, kampus, hingga apartemen — satu arsitektur untuk semua' },
    { icon: '💰', title: 'Cost Effective', desc: 'Biaya prototipe ± Rp 1.2 juta — jauh lebih murah dari produk komersial import' },
    { icon: '🛡️', title: 'Enterprise Security', desc: 'Multi-factor auth + liveness detection + edge AI = keamanan level enterprise' },
]

const marketComparison = [
    { product: 'Yale Linus', price: '$250–$400', face: '❌', iot: '✅', mfa: '❌', antiSpoof: '❌' },
    { product: 'Aqara Smart Lock', price: '$180–$250', face: '✅', iot: '✅', mfa: '❌', antiSpoof: '❌' },
    { product: 'Xiaomi Face Lock', price: '$200–$300', face: '✅', iot: '✅', mfa: '❌', antiSpoof: '⚠️' },
    { product: 'August WiFi Lock', price: '$230–$300', face: '❌', iot: '✅', mfa: '❌', antiSpoof: '❌' },
    { product: 'Smart Door Lock PBL', price: '± Rp 1.2jt', face: '✅', iot: '✅', mfa: '✅', antiSpoof: '✅' },
]

const impacts = [
    { icon: '🏢', text: 'Meningkatkan keamanan gedung kampus dan laboratorium' },
    { icon: '🏠', text: 'Solusi smart home murah untuk rumah dan kost-kostan' },
    { icon: '📉', text: 'Mengurangi risiko penyalahgunaan akses (audit trail lengkap)' },
    { icon: '🇮🇩', text: 'Produk lokal Indonesia yang kompetitif dengan merek global' },
    { icon: '🎓', text: 'Peluang untuk kompetisi PKM-KC, PKM-T, atau KMI Award' },
    { icon: '💼', text: 'Potensi startup hardware keamanan IoT Indonesia' },
]

export default function About() {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-breadcrumb">
                    Smart Door Lock <Chevron /> <span>Tentang Proyek</span>
                </div>
                <h2>Tentang Proyek</h2>
                <p>Informasi lengkap tentang latar belakang, tujuan, roadmap, dan dampak proyek</p>
            </div>

            {/* Project Info */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gradient-primary)' }} />
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: 300 }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-accent)', marginBottom: 8 }}>
                            PBL Project 2025
                        </div>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8 }}>
                            Smart Door Lock Berbasis Biometrik Wajah
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                            Sistem Keamanan Akses Pintar Berbasis AI dan IoT — Mengganti kunci fisik/manual dengan
                            pengenalan wajah (face recognition) menggunakan AI, dikombinasikan dengan IoT untuk kontrol
                            jarak jauh, logging, dan notifikasi real-time.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <InfoTag icon={<Users size={14} />} text="Tim PBL" />
                            <InfoTag icon={<Calendar size={14} />} text="2025–2026" />
                            <InfoTag icon={<MapPin size={14} />} text="Indonesia" />
                            <InfoTag icon={<BookOpen size={14} />} text="Indra Hermawan" />
                        </div>
                    </div>
                    <div style={{
                        width: 200, height: 200, borderRadius: 'var(--radius-xl)',
                        background: 'var(--color-bg-tertiary)', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '4rem', flexShrink: 0,
                        border: '1px solid var(--color-border)',
                    }}>
                        🔐
                    </div>
                </div>
            </div>

            {/* Objectives */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card-header">
                    <div>
                        <div className="card-title">🎯 Tujuan Pengembangan</div>
                        <div className="card-subtitle">Tujuan SMART (Specific, Measurable, Achievable, Relevant, Time-bound)</div>
                    </div>
                </div>
                <div className="grid-2">
                    {objectives.map((obj, i) => (
                        <div key={i} className="spec-item">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ fontSize: '1.5rem' }}>{obj.icon}</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>{obj.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Roadmap */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card-header">
                    <div>
                        <div className="card-title">🗺️ Roadmap Pengembangan (3 Tahap)</div>
                        <div className="card-subtitle">Target penyelesaian: 6–8 minggu untuk tim 3–4 orang</div>
                    </div>
                </div>
                <div className="timeline">
                    {roadmap.map((phase, i) => (
                        <div className="timeline-item" key={i}>
                            <div className="timeline-dot" style={{
                                background: phase.status === 'in-progress' ? 'var(--color-accent-amber)' : 'var(--color-primary-700)',
                                boxShadow: phase.status === 'in-progress' ? '0 0 10px rgba(245, 158, 11, 0.4)' : '0 0 10px rgba(6, 182, 212, 0.3)',
                            }} />
                            <div className="timeline-content">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                    <div className="timeline-title">{phase.phase}</div>
                                    <span className={`badge ${phase.status === 'in-progress' ? 'badge-warning' : 'badge-info'}`}>
                                        {phase.status === 'in-progress' ? '🔄 In Progress' : '📋 Planned'}
                                    </span>
                                </div>
                                <div className="timeline-meta" style={{ marginBottom: 8 }}>⏱️ {phase.timeline}</div>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    {phase.tasks.map((task, ti) => (
                                        <li key={ti} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-primary-600)', flexShrink: 0 }} />
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Advantages */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card-header">
                    <div>
                        <div className="card-title">✨ Keunggulan Sistem</div>
                        <div className="card-subtitle">Mengapa Smart Door Lock ini unggul?</div>
                    </div>
                </div>
                <div className="grid-3">
                    {advantages.map((adv, i) => (
                        <div key={i} style={{
                            padding: 'var(--space-lg)', background: 'var(--color-bg-tertiary)',
                            borderRadius: 'var(--radius-md)', transition: 'all var(--transition-fast)',
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: 8 }}>{adv.icon}</div>
                            <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{adv.title}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{adv.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Market Comparison */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card-header">
                    <div>
                        <div className="card-title">📊 Perbandingan dengan Produk Komersial</div>
                        <div className="card-subtitle">Smart Door Lock PBL vs merek global</div>
                    </div>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Produk</th>
                                <th>Harga</th>
                                <th>Face Rec</th>
                                <th>IoT</th>
                                <th>MFA</th>
                                <th>Anti-Spoof</th>
                            </tr>
                        </thead>
                        <tbody>
                            {marketComparison.map((p, i) => (
                                <tr key={i} style={{
                                    background: p.product.includes('PBL') ? 'rgba(6, 182, 212, 0.06)' : undefined,
                                }}>
                                    <td style={{
                                        fontWeight: p.product.includes('PBL') ? 800 : 600,
                                        color: p.product.includes('PBL') ? 'var(--color-text-accent)' : 'var(--color-text-primary)',
                                    }}>
                                        {p.product}
                                        {p.product.includes('PBL') && <span style={{ marginLeft: 6, fontSize: '0.7rem' }}>⭐</span>}
                                    </td>
                                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{p.price}</td>
                                    <td style={{ textAlign: 'center' }}>{p.face}</td>
                                    <td style={{ textAlign: 'center' }}>{p.iot}</td>
                                    <td style={{ textAlign: 'center' }}>{p.mfa}</td>
                                    <td style={{ textAlign: 'center' }}>{p.antiSpoof}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Impact */}
            <div className="card">
                <div className="card-header">
                    <div>
                        <div className="card-title">🌍 Dampak & Potensi Implementasi</div>
                        <div className="card-subtitle">Kontribusi proyek terhadap ekosistem smart building Indonesia</div>
                    </div>
                </div>
                <div className="grid-2">
                    {impacts.map((impact, i) => (
                        <div key={i} className="spec-item">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ fontSize: '1.5rem' }}>{impact.icon}</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>{impact.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function InfoTag({ icon, text }) {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '4px 12px', background: 'var(--color-bg-tertiary)',
            borderRadius: 'var(--radius-full)', fontSize: '0.75rem',
            color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)',
        }}>
            {icon} {text}
        </div>
    )
}

function Chevron() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
