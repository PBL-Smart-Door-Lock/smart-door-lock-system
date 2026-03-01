import React, { useState, useEffect } from 'react';
import {
    Users,
    Activity,
    UserCheck,
    UserX,
    Clock,
    Calendar,
    Cpu,
    Database,
    Wifi,
    Thermometer,
    ShieldCheck,
    AlertTriangle,
    ScanFace,
    TrendingUp,
    ChevronRight
} from 'lucide-react';
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
    Legend
} from 'recharts';
import { db } from '../firebase';
import { ref, onValue, limitToLast, query } from 'firebase/database';

const Dashboard = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [stats, setStats] = useState({
        totalAkses: 1247,
        successRate: 98.4,
        failedAttempts: 24,
        registeredUsers: 12
    });
    const [accessLogs, setAccessLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const logsRef = query(ref(db, 'access_logs'), limitToLast(6));
        const unsubscribeLogs = onValue(logsRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const logsArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                })).reverse();
                setAccessLogs(logsArray);
            }
            setLoading(false);
        });

        const statsRef = ref(db, 'system_stats');
        const unsubscribeStats = onValue(statsRef, (snapshot) => {
            if (snapshot.exists()) {
                setStats(prev => ({ ...prev, ...snapshot.val() }));
            }
        });

        return () => {
            unsubscribeLogs();
            unsubscribeStats();
        };
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('id-ID', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).replace(/:/g, '.');
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const activityData = [
        { time: '00:00', success: 20, failed: 2 },
        { time: '04:00', success: 15, failed: 1 },
        { time: '08:00', success: 85, failed: 5 },
        { time: '12:00', success: 120, failed: 8 },
        { time: '16:00', success: 95, failed: 4 },
        { time: '20:00', success: 60, failed: 3 },
        { time: '23:59', success: 30, failed: 1 },
    ];

    const weeklyData = [
        { day: 'Sen', value: 45 },
        { day: 'Sel', value: 52 },
        { day: 'Rab', value: 48 },
        { day: 'Kam', value: 61 },
        { day: 'Jum', value: 55 },
        { day: 'Sab', value: 32 },
        { day: 'Min', value: 28 },
    ];

    const authMethods = [
        { name: 'Face Recognition', value: 78, color: '#06b6d4' },
        { name: 'RFID', value: 12, color: '#8b5cf6' },
        { name: 'PIN', value: 7, color: '#f59e0b' },
        { name: 'Remote (App)', value: 3, color: '#10b981' },
    ];

    const displayLogs = accessLogs.length > 0 ? accessLogs : [
        { id: 1, name: 'Indra Hermawan', method: 'FACE', confidence: '99.2%', time: '2 menit lalu', status: 'GRANTED' },
        { id: 2, name: 'Ahmad Fauzi', method: 'FACE', confidence: '98.7%', time: '15 menit lalu', status: 'GRANTED' },
        { id: 3, name: 'Unknown', method: 'FACE', confidence: '34.1%', time: '23 menit lalu', status: 'DENIED' },
        { id: 4, name: 'Sarah Putri', method: 'RFID', confidence: '-', time: '45 menit lalu', status: 'GRANTED' },
        { id: 5, name: 'Budi Santoso', method: 'FACE', confidence: '97.8%', time: '1 jam lalu', status: 'GRANTED' },
        { id: 6, name: 'Dewi Lestari', method: 'PIN', confidence: '-', time: '1.5 jam lalu', status: 'GRANTED' },
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-breadcrumb">
                    Smart Door Lock <ChevronRight size={14} /> <span>Dashboard</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h2>Dashboard Monitoring</h2>
                        <p className="subtitle">Pantau aktivitas akses dan status sistem secara real-time</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-text-accent)' }}>
                            {formatTime(currentTime)}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                            {formatDate(currentTime)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid-4" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card stat-card animate-in animate-delay-1">
                    <div className="stat-icon cyan"><Activity size={24} /></div>
                    <div className="stat-value">{stats.totalAkses.toLocaleString()}</div>
                    <div className="stat-label">Total Akses Hari Ini</div>
                    <div className="stat-change positive">
                        <TrendingUp size={12} /> +12.5%
                    </div>
                </div>

                <div className="card stat-card animate-in animate-delay-2">
                    <div className="stat-icon green"><ShieldCheck size={24} /></div>
                    <div className="stat-value">{stats.successRate}%</div>
                    <div className="stat-label">Tingkat Keberhasilan</div>
                    <div className="stat-change positive">
                        <TrendingUp size={12} /> +2.1%
                    </div>
                </div>

                <div className="card stat-card animate-in animate-delay-3">
                    <div className="stat-icon amber"><AlertTriangle size={24} /></div>
                    <div className="stat-value">{stats.failedAttempts}</div>
                    <div className="stat-label">Percobaan Gagal</div>
                    <div className="stat-change negative">
                        <TrendingUp size={12} /> -15%
                    </div>
                </div>

                <div className="card stat-card animate-in animate-delay-4">
                    <div className="stat-icon purple"><Users size={24} /></div>
                    <div className="stat-value">{stats.registeredUsers}</div>
                    <div className="stat-label">Pengguna Terdaftar</div>
                    <div className="stat-change positive">
                        <TrendingUp size={12} /> +3
                    </div>
                </div>
            </div>

            <div className="grid-2" style={{ marginBottom: 'var(--space-xl)' }}>
                {/* Main Activity Chart */}
                <div className="card animate-in">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Aktivitas Akses (24 Jam)</div>
                            <div className="card-subtitle">Jumlah akses berhasil vs gagal per jam</div>
                        </div>
                        <Activity size={20} style={{ color: 'var(--color-text-muted)' }} />
                    </div>
                    <div style={{ height: 250, marginTop: 20 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={activityData}>
                                <defs>
                                    <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.08)" vertical={false} />
                                <XAxis dataKey="time" stroke="#64748b" fontSize={11} tickLine={false} />
                                <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                                />
                                <Area type="monotone" dataKey="success" stroke="#06b6d4" fillOpacity={1} fill="url(#colorSuccess)" name="Berhasil" />
                                <Area type="monotone" dataKey="failed" stroke="#ef4444" fillOpacity={0} name="Gagal" strokeDasharray="5 5" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Weekly Bar Chart */}
                <div className="card animate-in">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Aktivitas Mingguan</div>
                            <div className="card-subtitle">Total akses per hari dalam seminggu terakhir</div>
                        </div>
                        <Clock size={20} style={{ color: 'var(--color-text-muted)' }} />
                    </div>
                    <div style={{ height: 250, marginTop: 20 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={weeklyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.08)" vertical={false} />
                                <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} />
                                <YAxis stroke="#64748b" hide />
                                <Tooltip
                                    cursor={{ fill: 'rgba(30,41,59,0.5)' }}
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                                />
                                <Bar dataKey="value" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="grid-3" style={{ marginBottom: 'var(--space-xl)' }}>
                {/* Auth Method Distribution */}
                <div className="card animate-in">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Metode Autentikasi</div>
                            <div className="card-subtitle">Distribusi metode akses</div>
                        </div>
                    </div>
                    <div style={{ height: 250 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={authMethods}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {authMethods.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: 10 }}>
                        {authMethods.map((m) => (
                            <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem' }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: m.color }} />
                                <span style={{ color: 'var(--color-text-secondary)' }}>{m.name} ({m.value}%)</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Access List */}
                <div className="card grid-span-2 animate-in shadow-card glass">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Akses Terbaru</div>
                            <p className="card-subtitle">6 aktivitas akses terakhir secara real-time</p>
                        </div>
                    </div>
                    <div className="table-wrapper" style={{ marginTop: 20 }}>
                        <table className="log-table">
                            <thead>
                                <tr>
                                    <th>NAMA</th>
                                    <th>METODE</th>
                                    <th>CONFIDENCE</th>
                                    <th>WAKTU</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayLogs.map((log) => (
                                    <tr key={log.id}>
                                        <td className="font-bold">{log.name}</td>
                                        <td><span className="badge-method">{log.method}</span></td>
                                        <td>{log.confidence}</td>
                                        <td className="text-secondary">{log.time || new Date(log.timestamp).toLocaleTimeString('id-ID')}</td>
                                        <td>
                                            <span className={`status-badge ${log.status === 'GRANTED' ? 'success' : 'danger'}`}>
                                                {log.status === 'GRANTED' ? '✓ GRANTED' : '✕ DENIED'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* System Health Section */}
            <div className="card shadow-card glass animate-in">
                <div className="card-header">
                    <div>
                        <div className="card-title">Status Sistem & Hardware</div>
                        <p className="card-subtitle">Kesehatan perangkat keras dan konektivitas</p>
                    </div>
                </div>

                <div className="grid-4" style={{ marginTop: 20 }}>
                    <div className="health-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <Cpu size={18} color="#06b6d4" />
                            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>CPU Usage</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div className="progress-bar-container" style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }}>
                                <div className="progress-bar" style={{ width: '42%', height: '100%', background: 'var(--gradient-primary)', borderRadius: 3 }}></div>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-accent)', fontWeight: 600 }}>42%</span>
                        </div>
                    </div>

                    <div className="health-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <Database size={18} color="#8b5cf6" />
                            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>RAM Usage</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div className="progress-bar-container" style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }}>
                                <div className="progress-bar" style={{ width: '68%', height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #d946ef)', borderRadius: 3 }}></div>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#d946ef', fontWeight: 600 }}>642MB</span>
                        </div>
                    </div>

                    <div className="health-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <Wifi size={18} color="#10b981" />
                            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Network Status</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div className="status-dot pulse" style={{ background: '#10b981' }}></div>
                            <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>Online (12ms)</span>
                        </div>
                    </div>

                    <div className="health-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <Thermometer size={18} color="#f59e0b" />
                            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Suhu Core</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ fontSize: '1rem', fontWeight: 700 }}>42°C</span>
                            <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px', background: 'rgba(16,185,129,0.1)', color: '#10b981', fontWeight: 600 }}>NORMAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
