import { useState } from 'react'
import {
    UserPlus,
    Search,
    Shield,
    Clock,
    Trash2,
    Edit,
    MoreVertical,
    ScanFace,
    CheckCircle,
} from 'lucide-react'

const users = [
    { id: 1, name: 'Indra Hermawan', role: 'Admin', emoji: '👨‍💻', registered: '2025-10-15', lastAccess: '2 menit lalu', accessCount: 342, status: 'active', confidence: '99.2%' },
    { id: 2, name: 'Ahmad Fauzi', role: 'Penghuni', emoji: '👨', registered: '2025-10-20', lastAccess: '15 menit lalu', accessCount: 287, status: 'active', confidence: '98.7%' },
    { id: 3, name: 'Sarah Putri', role: 'Penghuni', emoji: '👩', registered: '2025-11-01', lastAccess: '45 menit lalu', accessCount: 198, status: 'active', confidence: '97.5%' },
    { id: 4, name: 'Budi Santoso', role: 'Penghuni', emoji: '👨‍🔬', registered: '2025-11-05', lastAccess: '1 jam lalu', accessCount: 156, status: 'active', confidence: '97.8%' },
    { id: 5, name: 'Dewi Lestari', role: 'Staff', emoji: '👩‍💼', registered: '2025-11-10', lastAccess: '1.5 jam lalu', accessCount: 234, status: 'active', confidence: '98.1%' },
    { id: 6, name: 'Rizky Pratama', role: 'Penghuni', emoji: '👨‍🎓', registered: '2025-11-15', lastAccess: '3 jam lalu', accessCount: 89, status: 'active', confidence: '96.3%' },
    { id: 7, name: 'Siti Aminah', role: 'Penghuni', emoji: '👩‍🔬', registered: '2025-11-20', lastAccess: '5 jam lalu', accessCount: 112, status: 'active', confidence: '99.1%' },
    { id: 8, name: 'Dian Wahyu', role: 'Tamu VIP', emoji: '👨‍💼', registered: '2025-12-01', lastAccess: '1 hari lalu', accessCount: 23, status: 'active', confidence: '99.5%' },
    { id: 9, name: 'Maya Sari', role: 'Penghuni', emoji: '👩‍🎨', registered: '2025-12-05', lastAccess: '2 hari lalu', accessCount: 45, status: 'inactive', confidence: '95.8%' },
    { id: 10, name: 'Hendra Wijaya', role: 'Dosen', emoji: '👨‍🏫', registered: '2025-12-10', lastAccess: '3 hari lalu', accessCount: 67, status: 'active', confidence: '98.1%' },
    { id: 11, name: 'Rina Oktaviani', role: 'Staff', emoji: '👩‍🏫', registered: '2025-12-12', lastAccess: '5 hari lalu', accessCount: 34, status: 'inactive', confidence: '97.2%' },
    { id: 12, name: 'Yusuf Habibi', role: 'Penghuni', emoji: '🧑‍💻', registered: '2025-12-20', lastAccess: '1 jam lalu', accessCount: 12, status: 'active', confidence: '95.9%' },
]

export default function FaceManagement() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedRole, setSelectedRole] = useState('all')
    const [showModal, setShowModal] = useState(false)

    const filtered = users.filter((u) => {
        const matchSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchRole = selectedRole === 'all' || u.role === selectedRole
        return matchSearch && matchRole
    })

    const activeCount = users.filter((u) => u.status === 'active').length

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-breadcrumb">
                    Smart Door Lock <Chevron /> <span>Database Wajah</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h2>Database Wajah Terdaftar</h2>
                        <p>Kelola pengguna dan data biometrik wajah untuk autentikasi</p>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>
                        <UserPlus size={16} /> Tambah Pengguna
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid-4" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="card stat-card">
                    <div className="stat-icon cyan"><ScanFace size={22} /></div>
                    <div className="stat-value">{users.length}</div>
                    <div className="stat-label">Total Wajah Terdaftar</div>
                </div>
                <div className="card stat-card">
                    <div className="stat-icon green"><CheckCircle size={22} /></div>
                    <div className="stat-value">{activeCount}</div>
                    <div className="stat-label">Pengguna Aktif</div>
                </div>
                <div className="card stat-card">
                    <div className="stat-icon purple"><Shield size={22} /></div>
                    <div className="stat-value">128</div>
                    <div className="stat-label">Embedding Vectors</div>
                </div>
                <div className="card stat-card">
                    <div className="stat-icon amber"><Clock size={22} /></div>
                    <div className="stat-value">~0.3s</div>
                    <div className="stat-label">Avg Matching Time</div>
                </div>
            </div>

            {/* Search & Filter */}
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
                            placeholder="Cari pengguna..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                background: 'none', border: 'none', outline: 'none',
                                color: 'var(--color-text-primary)', fontSize: '0.875rem',
                                fontFamily: 'var(--font-sans)', flex: 1,
                            }}
                        />
                    </div>
                    <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        style={{
                            background: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)', padding: '8px 16px',
                            color: 'var(--color-text-primary)', fontSize: '0.8rem',
                            fontFamily: 'var(--font-sans)', cursor: 'pointer', outline: 'none',
                        }}
                    >
                        <option value="all">Semua Peran</option>
                        <option value="Admin">Admin</option>
                        <option value="Penghuni">Penghuni</option>
                        <option value="Staff">Staff</option>
                        <option value="Dosen">Dosen</option>
                        <option value="Tamu VIP">Tamu VIP</option>
                    </select>
                </div>
            </div>

            {/* User Grid */}
            <div className="face-grid">
                {filtered.map((user) => (
                    <div className="face-card" key={user.id}>
                        <div className="face-avatar">
                            <span>{user.emoji}</span>
                            {user.status === 'active' && <div className="scan-line" />}
                        </div>
                        <div className="face-info">
                            <div className="face-name">{user.name}</div>
                            <div className="face-role">{user.role}</div>
                            <div className="face-meta">
                                <span className={`badge ${user.status === 'active' ? 'badge-success' : 'badge-warning'}`}>
                                    {user.status === 'active' ? 'Aktif' : 'Nonaktif'}
                                </span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                                    {user.confidence}
                                </span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
                                <span>{user.accessCount} akses</span>
                                <span>{user.lastAccess}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add User Modal */}
            {showModal && (
                <div
                    style={{
                        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
                        backdropFilter: 'blur(8px)',
                    }}
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="card"
                        style={{
                            width: 480, maxWidth: '90%', maxHeight: '80vh', overflow: 'auto',
                            animation: 'fadeInUp 0.3s ease-out',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--space-lg)' }}>
                            <UserPlus size={20} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                            Tambah Pengguna Baru
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                            <FormField label="Nama Lengkap" placeholder="Masukkan nama lengkap" />
                            <FormField label="Peran" type="select" options={['Penghuni', 'Staff', 'Dosen', 'Tamu VIP', 'Admin']} />
                            <FormField label="Email" placeholder="email@example.com" />

                            <div style={{
                                padding: 'var(--space-xl)',
                                border: '2px dashed var(--color-border)',
                                borderRadius: 'var(--radius-lg)',
                                textAlign: 'center',
                                color: 'var(--color-text-muted)',
                                background: 'var(--color-bg-tertiary)',
                                cursor: 'pointer',
                            }}>
                                <ScanFace size={48} style={{ marginBottom: 8, opacity: 0.5 }} />
                                <p style={{ fontSize: '0.85rem' }}>Klik untuk mulai scan wajah</p>
                                <p style={{ fontSize: '0.7rem', marginTop: 4 }}>Pastikan wajah terlihat jelas dan pencahayaan cukup</p>
                            </div>

                            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'flex-end' }}>
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Batal</button>
                                <button className="btn btn-primary" onClick={() => setShowModal(false)}>
                                    <ScanFace size={16} /> Daftarkan Wajah
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

function FormField({ label, placeholder, type = 'text', options }) {
    return (
        <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
                {label}
            </label>
            {type === 'select' ? (
                <select style={{
                    width: '100%', background: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)', padding: '10px 16px', color: 'var(--color-text-primary)',
                    fontSize: '0.875rem', fontFamily: 'var(--font-sans)', outline: 'none',
                }}>
                    {options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    style={{
                        width: '100%', background: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)', padding: '10px 16px', color: 'var(--color-text-primary)',
                        fontSize: '0.875rem', fontFamily: 'var(--font-sans)', outline: 'none',
                    }}
                />
            )}
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
