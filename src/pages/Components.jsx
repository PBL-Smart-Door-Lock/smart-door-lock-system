const hardwareComponents = [
    {
        icon: '📷',
        name: 'ESP32-CAM',
        price: 'Rp 150.000',
        desc: 'Modul kamera dengan WiFi built-in untuk capture wajah dan transmisi data. OV2640 2MP, mendukung face detection bawaan.',
        specs: ['WiFi 802.11 b/g/n', '2MP Camera', '4MB Flash', 'Bluetooth 4.2', 'GPIO x10', 'Deep Sleep Mode'],
        category: 'Input',
    },
    {
        icon: '🧠',
        name: 'Raspberry Pi 4B / 5',
        price: 'Rp 750.000 - 1.200.000',
        desc: 'Single-board computer sebagai main processing unit untuk menjalankan model AI FaceNet/TFLite dan edge computing.',
        specs: ['Quad-core ARM', '4-8GB RAM', 'WiFi 5/6', 'USB 3.0', 'GPIO 40-pin', 'PoE Support'],
        category: 'Processing',
    },
    {
        icon: '🔓',
        name: 'Electric Drop Bolt SL-130U',
        price: 'Rp 450.000',
        desc: 'Aktuator kunci elektrik fail-secure (tetap terkunci saat listrik mati). Cocok untuk pintu kaca dan kayu. Produk SOCA.',
        specs: ['12V DC', '280mA', 'Fail-Secure', 'Holding Force 800kg', 'Low Power', 'Auto-relock'],
        category: 'Actuator',
    },
    {
        icon: '⚡',
        name: 'Modul Relay 5V',
        price: 'Rp 25.000',
        desc: 'Relay elektromagnetik untuk menghubungkan/memutus arus ke solenoid/drop bolt berdasarkan sinyal dari mikrokontroler.',
        specs: ['5V Trigger', '10A 250VAC', 'Optocoupler Isolation', '2-Channel', 'LED Indicator', 'Active Low/High'],
        category: 'Actuator',
    },
    {
        icon: '💳',
        name: 'RFID Reader RC522',
        price: 'Rp 35.000',
        desc: 'Pembaca kartu RFID 13.56MHz sebagai backup autentikasi selain face recognition. Mendukung Mifare Classic.',
        specs: ['13.56 MHz', 'SPI Interface', '3.3V', 'Mifare S50/S70', 'ISO 14443A', 'Range 5cm'],
        category: 'Input',
    },
    {
        icon: '🔋',
        name: 'Power Supply + UPS',
        price: 'Rp 125.000',
        desc: 'Adaptor 12V/2A + Buck Converter 5V + Baterai Li-ion 18650 dengan TP4056 charger untuk backup daya.',
        specs: ['12V 2A Input', '5V 3A Output', '18650 Battery', 'TP4056 Charger', 'Auto-switch', '4-6 jam backup'],
        category: 'Power',
    },
    {
        icon: '📡',
        name: 'PIR Sensor HC-SR501',
        price: 'Rp 15.000',
        desc: 'Sensor gerak infrared untuk mendeteksi kehadiran orang dan membangunkan kamera dari mode deep sleep.',
        specs: ['3.3-20V DC', 'Range 7m', 'Adjustable Delay', '120° Detection', 'Auto Reset', 'Low Power'],
        category: 'Input',
    },
    {
        icon: '🕐',
        name: 'RTC DS3231',
        price: 'Rp 25.000',
        desc: 'Real-Time Clock untuk timestamp akurat pada log akses, tidak terpengaruh restart atau power loss.',
        specs: ['I2C Interface', '±2ppm Accuracy', '3.3-5V', 'Battery Backup', 'Temperature Sensor', 'Alarm Feature'],
        category: 'Support',
    },
]

const softwareStack = [
    { name: 'TensorFlow Lite', version: '2.x', category: 'AI Framework', desc: 'Menjalankan model FaceNet yang sudah di-optimize untuk edge device' },
    { name: 'FaceNet / MobileFaceNet', version: '-', category: 'AI Model', desc: 'Model face recognition yang menghasilkan 128/512-D embedding vector' },
    { name: 'MTCNN / BlazeFace', version: '-', category: 'Face Detection', desc: 'Model deteksi wajah cepat untuk real-time processing' },
    { name: 'OpenCV', version: '4.x', category: 'Computer Vision', desc: 'Pre-processing gambar: resize, normalisasi, alignment' },
    { name: 'Firebase', version: '-', category: 'Cloud Backend', desc: 'Realtime Database, Authentication, Cloud Messaging' },
    { name: 'MQTT (Mosquitto)', version: '2.x', category: 'IoT Protocol', desc: 'Messaging protocol untuk komunikasi real-time antar device' },
    { name: 'Flutter', version: '3.x', category: 'Mobile App', desc: 'Framework untuk aplikasi mobile cross-platform (Android + iOS)' },
    { name: 'PostgreSQL', version: '16', category: 'Database', desc: 'Database relasional untuk production (tahap 3)' },
]

const totalCost = hardwareComponents.reduce((sum, c) => {
    const match = c.price.match(/[\d.]+/g)
    return sum + (match ? parseInt(match[0].replace('.', '')) : 0)
}, 0)

export default function Components() {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-breadcrumb">
                    Smart Door Lock <Chevron /> <span>Komponen</span>
                </div>
                <h2>Komponen Hardware & Software</h2>
                <p>Daftar lengkap komponen dengan spesifikasi dan estimasi biaya</p>
            </div>

            {/* Cost Summary */}
            <div className="card" style={{ marginBottom: 'var(--space-xl)', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(59, 130, 246, 0.05))' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Total Estimasi Biaya Prototipe
                        </div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: 4 }}>
                            <span className="gradient-text" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                ± Rp 1.575.000
                            </span>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: 4 }}>
                            Untuk tim 3–4 orang, estimasi waktu pengerjaan: 6–8 minggu
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <MiniStat value="8" label="Hardware" />
                        <MiniStat value="8" label="Software" />
                        <MiniStat value="6-8" label="Minggu" />
                    </div>
                </div>
            </div>

            {/* Hardware Components */}
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🔧 Hardware Components
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', marginBottom: 'var(--space-2xl)' }}>
                {hardwareComponents.map((comp, i) => (
                    <div className="component-card" key={i}>
                        <div className="component-image">{comp.icon}</div>
                        <div className="component-info">
                            <h3>{comp.name}</h3>
                            <div className="price">💰 {comp.price}</div>
                            <p>{comp.desc}</p>
                            <div className="component-specs">
                                {comp.specs.map((spec) => (
                                    <span className="component-spec-tag" key={spec}>{spec}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="badge badge-info">{comp.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Software Stack */}
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                💻 Software Stack
            </h3>
            <div className="card">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Versi</th>
                                <th>Kategori</th>
                                <th>Fungsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {softwareStack.map((sw, i) => (
                                <tr key={i}>
                                    <td style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>{sw.name}</td>
                                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-accent)' }}>{sw.version}</td>
                                    <td><span className="badge badge-info">{sw.category}</span></td>
                                    <td style={{ color: 'var(--color-text-secondary)' }}>{sw.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function MiniStat({ value, label }) {
    return (
        <div style={{
            background: 'var(--color-bg-card)', borderRadius: 'var(--radius-md)',
            padding: '12px 20px', textAlign: 'center', border: '1px solid var(--color-border)',
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-accent)' }}>{value}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{label}</div>
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
