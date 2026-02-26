import { useState } from 'react'
import {
    Search,
    Filter,
    Download,
    ScanFace,
    CreditCard,
    KeyRound,
    Smartphone,
    ChevronLeft,
    ChevronRight,
    CheckCircle,
    XCircle,
    AlertCircle,
} from 'lucide-react'

const allLogs = [
    { id: 1, name: 'Indra Hermawan', method: 'Face', confidence: '99.2%', time: '2025-12-27 08:15:23', status: 'granted', door: 'Pintu Utama', photo: '👨‍💻' },
    { id: 2, name: 'Ahmad Fauzi', method: 'Face', confidence: '98.7%', time: '2025-12-27 08:12:45', status: 'granted', door: 'Pintu Utama', photo: '👨' },
    { id: 3, name: 'Unknown Person', method: 'Face', confidence: '34.1%', time: '2025-12-27 08:10:11', status: 'denied', door: 'Pintu Utama', photo: '❓' },
    { id: 4, name: 'Sarah Putri', method: 'RFID', confidence: '-', time: '2025-12-27 07:58:32', status: 'granted', door: 'Pintu Lab', photo: '👩' },
    { id: 5, name: 'Budi Santoso', method: 'Face', confidence: '97.8%', time: '2025-12-27 07:45:18', status: 'granted', door: 'Pintu Utama', photo: '👨‍🔬' },
    { id: 6, name: 'Dewi Lestari', method: 'PIN', confidence: '-', time: '2025-12-27 07:30:05', status: 'granted', door: 'Pintu Belakang', photo: '👩‍💼' },
    { id: 7, name: 'Unknown Person', method: 'Face', confidence: '28.5%', time: '2025-12-27 06:22:41', status: 'denied', door: 'Pintu Utama', photo: '❓' },
    { id: 8, name: 'Rizky Pratama', method: 'Face', confidence: '96.3%', time: '2025-12-27 06:15:19', status: 'granted', door: 'Pintu Utama', photo: '👨‍🎓' },
    { id: 9, name: 'Siti Aminah', method: 'RFID', confidence: '-', time: '2025-12-26 22:45:33', status: 'granted', door: 'Pintu Lab', photo: '👩‍🔬' },
    { id: 10, name: 'Dian Wahyu', method: 'Face', confidence: '99.5%', time: '2025-12-26 21:12:07', status: 'granted', door: 'Pintu Utama', photo: '👨‍💼' },
    { id: 11, name: 'Unknown Person', method: 'Face', confidence: '15.2%', time: '2025-12-26 20:58:44', status: 'denied', door: 'Pintu Utama', photo: '❓' },
    { id: 12, name: 'Maya Sari', method: 'App', confidence: '-', time: '2025-12-26 19:30:21', status: 'granted', door: 'Pintu Utama', photo: '👩‍🎨' },
    { id: 13, name: 'Hendra Wijaya', method: 'Face', confidence: '98.1%', time: '2025-12-26 18:15:09', status: 'granted', door: 'Pintu Lab', photo: '👨‍🏫' },
    { id: 14, name: 'Rina Oktaviani', method: 'PIN', confidence: '-', time: '2025-12-26 17:45:55', status: 'granted', door: 'Pintu Belakang', photo: '👩‍🏫' },
    { id: 15, name: 'Yusuf Habibi', method: 'Face', confidence: '95.9%', time: '2025-12-26 16:20:38', status: 'granted', door: 'Pintu Utama', photo: '🧑‍💻' },
]

const methodIcons = {
    Face: <ScanFace size={14} />,
    RFID: <CreditCard size={14} />,
    PIN: <KeyRound size={14} />,
    App: <Smartphone size={14} />,
}

export default function AccessLogs() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')
    const [filterMethod, setFilterMethod] = useState('all')

    const filtered = allLogs.filter((log) => {
        const matchSearch = log.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchStatus = filterStatus === 'all' || log.status === filterStatus
        const matchMethod = filterMethod === 'all' || log.method === filterMethod
        return matchSearch && matchStatus && matchMethod
    })

    const totalGranted = allLogs.filter((l) => l.status === 'granted').length
    const totalDenied = allLogs.filter((l) => l.status === 'denied').length

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-breadcrumb">
                    Smart Door Lock <Chevron /> <span>Log Akses</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h2>Log Akses Digital</h2>
                        <p>Riwayat lengkap semua aktivitas akses dengan pencarian dan filter</p>
                    </div>
                    <button className="btn btn-secondary btn-sm">
                        <Download size={16} /> Export CSV
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid-3" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card stat-card">
                    <div className="stat-icon cyan"><ScanFace size={22} /></div>
                    <div className="stat-value">{allLogs.length}</div>
                    <div className="stat-label">Total Log</div>
                </div>
                <div className="card stat-card">
                    <div className="stat-icon green"><CheckCircle size={22} /></div>
                    <div className="stat-value">{totalGranted}</div>
                    <div className="stat-label">Akses Berhasil</div>
                </div>
                <div className="card stat-card">
                    <div className="stat-icon red"><XCircle size={22} /></div>
                    <div className="stat-value">{totalDenied}</div>
                    <div className="stat-label">Akses Ditolak</div>
                </div>
            </div>

            {/* Filters */}
            <div className="card" style={{ marginBottom: 'var(--space-lg)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{
                        flex: 1,
                        minWidth: 250,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--color-bg-tertiary)',
                        borderRadius: 'var(--radius-md)',
                        padding: '8px 16px',
                        border: '1px solid var(--color-border)',
                    }}>
                        <Search size={16} style={{ color: 'var(--color-text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Cari berdasarkan nama..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                background: 'none',
                                border: 'none',
                                outline: 'none',
                                color: 'var(--color-text-primary)',
                                fontSize: '0.875rem',
                                fontFamily: 'var(--font-sans)',
                                flex: 1,
                            }}
                        />
                    </div>
                    <FilterSelect
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        options={[
                            { value: 'all', label: 'Semua Status' },
                            { value: 'granted', label: '✓ Granted' },
                            { value: 'denied', label: '✕ Denied' },
                        ]}
                    />
                    <FilterSelect
                        value={filterMethod}
                        onChange={(e) => setFilterMethod(e.target.value)}
                        options={[
                            { value: 'all', label: 'Semua Metode' },
                            { value: 'Face', label: '🔍 Face' },
                            { value: 'RFID', label: '💳 RFID' },
                            { value: 'PIN', label: '🔢 PIN' },
                            { value: 'App', label: '📱 App' },
                        ]}
                    />
                </div>
            </div>

            {/* Log Table */}
            <div className="card">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Pengguna</th>
                                <th>Metode</th>
                                <th>Confidence</th>
                                <th>Pintu</th>
                                <th>Waktu</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((log) => (
                                <tr key={log.id}>
                                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                                        #{String(log.id).padStart(3, '0')}
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <span style={{ fontSize: '1.4rem' }}>{log.photo}</span>
                                            <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{log.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-info" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                            {methodIcons[log.method]} {log.method}
                                        </span>
                                    </td>
                                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                                        <span style={{ color: parseFloat(log.confidence) > 90 ? 'var(--color-accent-green)' : parseFloat(log.confidence) < 50 ? 'var(--color-accent-red)' : 'var(--color-text-secondary)' }}>
                                            {log.confidence}
                                        </span>
                                    </td>
                                    <td style={{ color: 'var(--color-text-secondary)' }}>{log.door}</td>
                                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                        {log.time}
                                    </td>
                                    <td>
                                        <span className={`badge ${log.status === 'granted' ? 'badge-success' : 'badge-danger'}`}>
                                            {log.status === 'granted' ? '✓ Granted' : '✕ Denied'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-muted)' }}>
                        <AlertCircle size={32} style={{ marginBottom: 8, opacity: 0.5 }} />
                        <p>Tidak ada log yang cocok dengan filter Anda.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

function FilterSelect({ value, onChange, options }) {
    return (
        <select
            value={value}
            onChange={onChange}
            style={{
                background: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '8px 16px',
                color: 'var(--color-text-primary)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                outline: 'none',
            }}
        >
            {options.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
            ))}
        </select>
    )
}

function Chevron() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
