import {
    Shield,
    Lock,
    Eye,
    Fingerprint,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Key,
    Smartphone,
    Wifi,
    Server,
    Database,
} from 'lucide-react'

const securityFeatures = [
    {
        icon: <Eye size={24} />,
        title: 'Liveness Detection',
        desc: 'Deteksi wajah hidup vs foto/video/masker 3D',
        status: 'active',
        details: [
            'Blink detection (kedipan mata)',
            'Head movement tracking',
            'Infrared depth sensing (opsional)',
            'Texture analysis (LBP / gradient)',
            'Challenge-response (minta gerakan tertentu)',
        ],
    },
    {
        icon: <Fingerprint size={24} />,
        title: 'Multi-Factor Authentication',
        desc: 'Kombinasi 2-3 metode autentikasi',
        status: 'active',
        details: [
            'Face Recognition (primary)',
            'RFID Card (secondary)',
            'PIN Code (emergency)',
            'Mobile App OTP (remote)',
            'Fingerprint (opsional / Tahap 3)',
        ],
    },
    {
        icon: <Lock size={24} />,
        title: 'Enkripsi Data',
        desc: 'Proteksi data wajah dan komunikasi',
        status: 'active',
        details: [
            'TLS 1.3 untuk semua transmisi',
            'AES-256 enkripsi database lokal',
            'Hashing embedding vector (irreversible)',
            'Secure boot pada ESP32',
            'Certificate pinning pada mobile app',
        ],
    },
    {
        icon: <Server size={24} />,
        title: 'Edge Computing',
        desc: 'Proses AI di perangkat lokal, bukan cloud',
        status: 'active',
        details: [
            'Foto wajah TIDAK dikirim ke internet',
            'Model AI berjalan di RPi / ESP32',
            'Hanya embedding vector yang disimpan',
            'Privasi data terjaga 100%',
            'Tetap berfungsi offline',
        ],
    },
    {
        icon: <AlertTriangle size={24} />,
        title: 'Intrusion Detection',
        desc: 'Deteksi percobaan akses ilegal',
        status: 'active',
        details: [
            'Alarm setelah 3x gagal berturut-turut',
            'Foto penyusup otomatis tersimpan',
            'Notifikasi push ke admin/pemilik',
            'Temporary lockout (30 menit)',
            'Log forensik lengkap',
        ],
    },
    {
        icon: <Key size={24} />,
        title: 'Emergency Override',
        desc: 'Akses darurat jika sistem gagal',
        status: 'active',
        details: [
            'Kunci manual mekanik (master key)',
            'PIN override admin',
            'Remote unlock via app',
            'Fail-secure mode (tetap terkunci)',
            'Battery backup 4-6 jam',
        ],
    },
]

const threatMatrix = [
    { threat: 'Foto/gambar wajah', risk: 'Tinggi', mitigation: 'Liveness detection + blink/head tracking', status: 'mitigated' },
    { threat: 'Video replay attack', risk: 'Tinggi', mitigation: 'Texture analysis + temporal consistency check', status: 'mitigated' },
    { threat: 'Masker 3D', risk: 'Sedang', mitigation: 'IR depth sensor + challenge-response', status: 'partial' },
    { threat: 'Brute force PIN', risk: 'Rendah', mitigation: 'Lockout setelah 3x gagal + timeout 30 menit', status: 'mitigated' },
    { threat: 'RFID cloning', risk: 'Sedang', mitigation: 'Dual-factor (RFID + Face) + encrypted cards', status: 'mitigated' },
    { threat: 'WiFi jamming', risk: 'Rendah', mitigation: 'Offline mode + local processing + alarm', status: 'mitigated' },
    { threat: 'Physical tampering', risk: 'Rendah', mitigation: 'Tamper switch + alarm + reinforced housing', status: 'mitigated' },
    { threat: 'Data breach', risk: 'Sedang', mitigation: 'Edge AI + AES-256 + no-cloud foto + hashed vectors', status: 'mitigated' },
]

const metrics = [
    { label: 'False Acceptance Rate (FAR)', value: '0.001%', desc: 'Probabilitas orang asing diterima sebagai user terdaftar', target: '< 0.01%' },
    { label: 'False Rejection Rate (FRR)', value: '0.8%', desc: 'Probabilitas user terdaftar ditolak oleh sistem', target: '< 2%' },
    { label: 'Equal Error Rate (EER)', value: '0.4%', desc: 'Titik di mana FAR = FRR (trade-off optimal)', target: '< 1%' },
    { label: 'Spoofing Detection Rate', value: '97.5%', desc: 'Akurasi mendeteksi serangan foto/video/masker', target: '> 95%' },
]

export default function Security() {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-breadcrumb">
                    Smart Door Lock <Chevron /> <span>Keamanan</span>
                </div>
                <h2>Fitur Keamanan</h2>
                <p>Analisis keamanan mendalam meliputi anti-spoofing, enkripsi, dan threat mitigation</p>
            </div>

            {/* Security Score */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.05))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                    <div>
                        <div style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>
                            <span style={{ background: 'var(--gradient-success)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A+</span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 4 }}>Security Rating</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>Level Enterprise Security</div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: 12 }}>
                            Sistem ini mengimplementasikan 6 layer keamanan yang melampaui standar keamanan residensial biasa.
                            Multi-factor authentication + liveness detection + edge computing menjadikan sistem ini setara produk komersial premium.
                        </p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <span className="badge badge-success">Anti-Spoofing ✓</span>
                            <span className="badge badge-success">Encrypted ✓</span>
                            <span className="badge badge-success">Edge AI ✓</span>
                            <span className="badge badge-success">MFA ✓</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Features Grid */}
            <div className="grid-2" style={{ marginBottom: 'var(--space-xl)' }}>
                {securityFeatures.map((feature, i) => (
                    <div className="card" key={i}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-md)' }}>
                            <div className="stat-icon green" style={{ width: 44, height: 44, marginBottom: 0 }}>
                                {feature.icon}
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{feature.title}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{feature.desc}</div>
                            </div>
                            <span className="badge badge-success" style={{ marginLeft: 'auto' }}>Active</span>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {feature.details.map((detail, di) => (
                                <li key={di} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                                    <CheckCircle size={14} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Threat Matrix */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card-header">
                    <div>
                        <div className="card-title">🛡️ Threat Matrix</div>
                        <div className="card-subtitle">Analisis ancaman dan strategi mitigasi</div>
                    </div>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Ancaman</th>
                                <th>Tingkat Risiko</th>
                                <th>Strategi Mitigasi</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {threatMatrix.map((t, i) => (
                                <tr key={i}>
                                    <td style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{t.threat}</td>
                                    <td>
                                        <span className={`badge ${t.risk === 'Tinggi' ? 'badge-danger' : t.risk === 'Sedang' ? 'badge-warning' : 'badge-success'}`}>
                                            {t.risk}
                                        </span>
                                    </td>
                                    <td style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{t.mitigation}</td>
                                    <td>
                                        <span className={`badge ${t.status === 'mitigated' ? 'badge-success' : 'badge-warning'}`}>
                                            {t.status === 'mitigated' ? '✓ Mitigated' : '⚠ Partial'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Performance Metrics */}
            <div className="card">
                <div className="card-header">
                    <div>
                        <div className="card-title">📊 Security Metrics</div>
                        <div className="card-subtitle">Metrik pengukuran performa keamanan biometrik</div>
                    </div>
                </div>
                <div className="grid-2">
                    {metrics.map((m, i) => (
                        <div key={i} className="spec-item">
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>{m.label}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: 2 }}>{m.desc}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-text-accent)', fontFamily: 'var(--font-mono)' }}>{m.value}</div>
                                <div style={{ fontSize: '0.65rem', color: 'var(--color-accent-green)' }}>Target: {m.target}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
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
