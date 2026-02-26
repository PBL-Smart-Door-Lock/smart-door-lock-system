import {
    Camera,
    Cpu,
    Cloud,
    Smartphone,
    Database,
    Wifi,
    ArrowRight,
    Server,
    Lock,
    Bell,
    Shield,
    Eye,
} from 'lucide-react'

const archLayers = [
    {
        title: 'Layer 1: Input (Sensor)',
        color: '#06b6d4',
        nodes: [
            { icon: '📷', label: 'ESP32-CAM', desc: 'Kamera OV2640 + WiFi' },
            { icon: '📡', label: 'PIR Sensor', desc: 'Deteksi gerakan' },
            { icon: '💳', label: 'RFID Reader', desc: 'RC522 / PN532' },
        ],
    },
    {
        title: 'Layer 2: Processing (AI Engine)',
        color: '#8b5cf6',
        nodes: [
            { icon: '🧠', label: 'Face Detection', desc: 'MTCNN / BlazeFace' },
            { icon: '🔍', label: 'Feature Extraction', desc: 'FaceNet (128-D vector)' },
            { icon: '⚡', label: 'Liveness Check', desc: 'Anti-spoofing detection' },
        ],
    },
    {
        title: 'Layer 3: Decision & Actuation',
        color: '#10b981',
        nodes: [
            { icon: '✅', label: 'Matching Engine', desc: 'Cosine similarity / FAISS' },
            { icon: '🔓', label: 'Relay + Solenoid', desc: 'Electric drop bolt SL-130U' },
            { icon: '📊', label: 'Access Logger', desc: 'Timestamp + foto + status' },
        ],
    },
    {
        title: 'Layer 4: Cloud & Notification',
        color: '#3b82f6',
        nodes: [
            { icon: '☁️', label: 'Firebase / AWS', desc: 'Cloud database & auth' },
            { icon: '📱', label: 'Mobile App', desc: 'Flutter / React Native' },
            { icon: '🔔', label: 'Notifikasi', desc: 'Push / WhatsApp / Telegram' },
        ],
    },
]

const protocols = [
    { name: 'MQTT', desc: 'IoT messaging protocol (real-time)', usage: 'Komunikasi sensor → server' },
    { name: 'HTTP/REST', desc: 'Standard web API', usage: 'Mobile app ↔ Cloud' },
    { name: 'WebSocket', desc: 'Full-duplex communication', usage: 'Real-time dashboard updates' },
    { name: 'TLS 1.3', desc: 'Transport Layer Security', usage: 'Enkripsi semua komunikasi' },
    { name: 'gRPC', desc: 'High-performance RPC', usage: 'Microservice internal (opsional)' },
]

const dataFlow = [
    { step: 1, icon: '📷', title: 'Capture', desc: 'Kamera menangkap gambar wajah saat PIR sensor mendeteksi gerakan' },
    { step: 2, icon: '🧠', title: 'Process', desc: 'AI melakukan face detection, alignment, dan feature extraction (128 embedding vector)' },
    { step: 3, icon: '🔍', title: 'Match', desc: 'Vector dibandingkan dengan database menggunakan cosine similarity (threshold ≥ 0.85)' },
    { step: 4, icon: '✅', title: 'Verify', desc: 'Liveness detection memastikan wajah asli (bukan foto/video) + threshold confidence' },
    { step: 5, icon: '🔓', title: 'Actuate', desc: 'Relay mengaktifkan solenoid lock / drop bolt, pintu terbuka selama 5-10 detik' },
    { step: 6, icon: '📊', title: 'Log', desc: 'Data akses dicatat: timestamp, user, confidence score, foto, dan dikirim ke cloud' },
    { step: 7, icon: '🔔', title: 'Notify', desc: 'Notifikasi dikirim ke admin/pemilik jika ada akses gagal atau percobaan spoofing' },
]

export default function Architecture() {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-breadcrumb">
                    Smart Door Lock <Chevron /> <span>Arsitektur Sistem</span>
                </div>
                <h2>Arsitektur Sistem</h2>
                <p>Diagram arsitektur lengkap dari layer input hingga cloud notification</p>
            </div>

            {/* Architecture Layers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', marginBottom: 'var(--space-2xl)' }}>
                {archLayers.map((layer, li) => (
                    <div className="card" key={li}>
                        <div className="card-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: 12, height: 12, borderRadius: '50%',
                                    background: layer.color, boxShadow: `0 0 12px ${layer.color}40`,
                                }} />
                                <div className="card-title">{layer.title}</div>
                            </div>
                        </div>
                        <div className="grid-3">
                            {layer.nodes.map((node, ni) => (
                                <div className="arch-node" key={ni} style={{ borderColor: `${layer.color}30` }}>
                                    <div className="arch-node-icon">{node.icon}</div>
                                    <div className="arch-node-title">{node.label}</div>
                                    <div className="arch-node-desc">{node.desc}</div>
                                </div>
                            ))}
                        </div>
                        {li < archLayers.length - 1 && (
                            <div style={{ textAlign: 'center', padding: 'var(--space-md) 0 0', color: 'var(--color-primary-500)' }}>
                                <ArrowDown />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Data Flow */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card-header">
                    <div>
                        <div className="card-title">Alur Data (Data Flow)</div>
                        <div className="card-subtitle">Proses dari deteksi wajah hingga notifikasi dalam 7 langkah</div>
                    </div>
                </div>
                <div className="timeline">
                    {dataFlow.map((step) => (
                        <div className="timeline-item" key={step.step}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <div className="timeline-title">
                                    <span style={{ marginRight: 8 }}>{step.icon}</span>
                                    Step {step.step}: {step.title}
                                </div>
                                <div className="timeline-desc">{step.desc}</div>
                                <div className="timeline-meta">Latency: ~{step.step * 100}ms kumulatif</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Communication Protocols */}
            <div className="card">
                <div className="card-header">
                    <div>
                        <div className="card-title">Protokol Komunikasi</div>
                        <div className="card-subtitle">Protokol yang digunakan antar komponen sistem</div>
                    </div>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Protokol</th>
                                <th>Deskripsi</th>
                                <th>Penggunaan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {protocols.map((p, i) => (
                                <tr key={i}>
                                    <td>
                                        <span style={{ fontWeight: 700, color: 'var(--color-text-accent)', fontFamily: 'var(--font-mono)' }}>
                                            {p.name}
                                        </span>
                                    </td>
                                    <td>{p.desc}</td>
                                    <td style={{ color: 'var(--color-text-muted)' }}>{p.usage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function ArrowDown() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
        </svg>
    )
}

function Chevron() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
