import { useState, useEffect } from 'react'
import {
    ScanFace,
    ShieldCheck,
    AlertTriangle,
    Users,
    Activity,
    Clock,
    TrendingUp,
    Zap,
    Wifi,
    Thermometer,
    HardDrive,
    Cpu,
} from 'lucide-react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from 'recharts'

const accessData = [
    { time: '00:00', berhasil: 2, gagal: 0 },
    { time: '04:00', berhasil: 1, gagal: 0 },
    { time: '06:00', berhasil: 8, gagal: 1 },
    { time: '07:00', berhasil: 15, gagal: 2 },
    { time: '08:00', berhasil: 24, gagal: 3 },
    { time: '09:00', berhasil: 18, gagal: 1 },
    { time: '10:00', berhasil: 12, gagal: 0 },
    { time: '11:00', berhasil: 14, gagal: 1 },
    { time: '12:00', berhasil: 22, gagal: 2 },
    { time: '13:00', berhasil: 16, gagal: 0 },
    { time: '14:00', berhasil: 10, gagal: 1 },
    { time: '15:00', berhasil: 8, gagal: 0 },
    { time: '16:00', berhasil: 12, gagal: 1 },
    { time: '17:00', berhasil: 20, gagal: 2 },
    { time: '18:00', berhasil: 18, gagal: 1 },
    { time: '20:00', berhasil: 6, gagal: 0 },
    { time: '22:00', berhasil: 3, gagal: 0 },
]

const weeklyData = [
    { day: 'Sen', akses: 45 },
    { day: 'Sel', akses: 52 },
    { day: 'Rab', akses: 48 },
    { day: 'Kam', akses: 61 },
    { day: 'Jum', akses: 55 },
    { day: 'Sab', akses: 32 },
    { day: 'Min', akses: 28 },
]

const methodData = [
    { name: 'Face Recognition', value: 78, color: '#06b6d4' },
    { name: 'RFID', value: 12, color: '#8b5cf6' },
    { name: 'PIN', value: 7, color: '#f59e0b' },
    { name: 'Remote (App)', value: 3, color: '#10b981' },
]

const recentAccess = [
    { name: 'Indra Hermawan', method: 'Face', time: '2 menit lalu', status: 'granted', confidence: '99.2%' },
    { name: 'Ahmad Fauzi', method: 'Face', time: '15 menit lalu', status: 'granted', confidence: '98.7%' },
    { name: 'Unknown', method: 'Face', time: '23 menit lalu', status: 'denied', confidence: '34.1%' },
    { name: 'Sarah Putri', method: 'RFID', time: '45 menit lalu', status: 'granted', confidence: '-' },
    { name: 'Budi Santoso', method: 'Face', time: '1 jam lalu', status: 'granted', confidence: '97.8%' },
    { name: 'Dewi Lestari', method: 'PIN', time: '1.5 jam lalu', status: 'granted', confidence: '-' },
]

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    background: 'rgba(17, 24, 39, 0.95)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    backdropFilter: 'blur(12px)',
                }}
            >
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginBottom: 6 }}>
                    {label}
                </p>
                {payload.map((p, i) => (
                    <p key={i} style={{ color: p.color, fontSize: '0.85rem', fontWeight: 600 }}>
                        {p.name}: {p.value}
                    </p>
                ))}
            </div>
        )
    }
    return null
}

export default function Dashboard() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-breadcrumb">
                    Smart Door Lock <ChevronRight /> <span>Dashboard</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h2>Dashboard Monitoring</h2>
                        <p>Pantau aktivitas akses dan status sistem secara real-time</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-text-accent)' }}>
                            {currentTime.toLocaleTimeString('id-ID')}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                            {currentTime.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid-4" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card stat-card animate-in animate-delay-1">
                    <div className="stat-icon cyan"><ScanFace size={24} /></div>
                    <div className="stat-value">1,247</div>
                    <div className="stat-label">Total Akses Hari Ini</div>
                    <div className="stat-change positive">
                        <TrendingUp size={12} /> +12.5%
                    </div>
                </div>
                <div className="card stat-card animate-in animate-delay-2">
                    <div className="stat-icon green"><ShieldCheck size={24} /></div>
                    <div className="stat-value">98.4%</div>
                    <div className="stat-label">Tingkat Keberhasilan</div>
                    <div className="stat-change positive">
                        <TrendingUp size={12} /> +2.1%
                    </div>
                </div>
                <div className="card stat-card animate-in animate-delay-3">
                    <div className="stat-icon amber"><AlertTriangle size={24} /></div>
                    <div className="stat-value">3</div>
                    <div className="stat-label">Percobaan Gagal</div>
                    <div className="stat-change negative">
                        <TrendingUp size={12} /> -15.3%
                    </div>
                </div>
                <div className="card stat-card animate-in animate-delay-4">
                    <div className="stat-icon purple"><Users size={24} /></div>
                    <div className="stat-value">24</div>
                    <div className="stat-label">Pengguna Terdaftar</div>
                    <div className="stat-change positive">
                        <TrendingUp size={12} /> +3
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="grid-2" style={{ marginBottom: 'var(--space-xl)' }}>
                {/* Access Chart */}
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Aktivitas Akses (24 Jam)</div>
                            <div className="card-subtitle">Jumlah akses berhasil vs gagal per jam</div>
                        </div>
                        <Activity size={20} style={{ color: 'var(--color-text-muted)' }} />
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={accessData}>
                            <defs>
                                <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorFail" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.08)" />
                            <XAxis dataKey="time" stroke="#64748b" fontSize={11} tickLine={false} />
                            <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="berhasil"
                                name="Berhasil"
                                stroke="#06b6d4"
                                fill="url(#colorSuccess)"
                                strokeWidth={2}
                            />
                            <Area
                                type="monotone"
                                dataKey="gagal"
                                name="Gagal"
                                stroke="#ef4444"
                                fill="url(#colorFail)"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Weekly Bar Chart */}
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Akses Mingguan</div>
                            <div className="card-subtitle">Total akses per hari dalam seminggu terakhir</div>
                        </div>
                        <Clock size={20} style={{ color: 'var(--color-text-muted)' }} />
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={weeklyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.08)" />
                            <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} />
                            <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="akses" name="Akses" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid-3" style={{ marginBottom: 'var(--space-xl)' }}>
                {/* Auth Method Pie */}
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Metode Autentikasi</div>
                            <div className="card-subtitle">Distribusi metode akses</div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={methodData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={4}
                                dataKey="value"
                            >
                                {methodData.map((entry, i) => (
                                    <Cell key={i} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                        {methodData.map((m) => (
                            <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem' }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: m.color }} />
                                <span style={{ color: 'var(--color-text-secondary)' }}>{m.name} ({m.value}%)</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Access */}
                <div className="card" style={{ gridColumn: 'span 2' }}>
                    <div className="card-header">
                        <div>
                            <div className="card-title">Akses Terbaru</div>
                            <div className="card-subtitle">6 aktivitas akses terakhir</div>
                        </div>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Metode</th>
                                    <th>Confidence</th>
                                    <th>Waktu</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentAccess.map((a, i) => (
                                    <tr key={i}>
                                        <td style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{a.name}</td>
                                        <td><span className="badge badge-info">{a.method}</span></td>
                                        <td style={{ fontFamily: 'var(--font-mono)' }}>{a.confidence}</td>
                                        <td>{a.time}</td>
                                        <td>
                                            <span className={`badge ${a.status === 'granted' ? 'badge-success' : 'badge-danger'}`}>
                                                {a.status === 'granted' ? '✓ Granted' : '✕ Denied'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* System Status */}
            <div className="card">
                <div className="card-header">
                    <div>
                        <div className="card-title">Status Sistem</div>
                        <div className="card-subtitle">Monitoring hardware dan koneksi real-time</div>
                    </div>
                    <span className="badge badge-success">● Online</span>
                </div>
                <div className="grid-4">
                    <SystemMetric icon={<Cpu size={20} />} label="CPU Usage" value="23%" color="cyan" />
                    <SystemMetric icon={<HardDrive size={20} />} label="RAM Usage" value="156 MB" color="green" />
                    <SystemMetric icon={<Wifi size={20} />} label="WiFi Signal" value="-42 dBm" color="blue" />
                    <SystemMetric icon={<Thermometer size={20} />} label="Temperatur" value="38°C" color="amber" />
                </div>
            </div>
        </div>
    )
}

function SystemMetric({ icon, label, value, color }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px',
            background: 'var(--color-bg-tertiary)',
            borderRadius: 'var(--radius-md)',
        }}>
            <div className={`stat-icon ${color}`} style={{ width: 40, height: 40, marginBottom: 0 }}>
                {icon}
            </div>
            <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{label}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{value}</div>
            </div>
        </div>
    )
}

function ChevronRight() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
