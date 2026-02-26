import { NavLink, useLocation } from 'react-router-dom'
import {
    LayoutDashboard,
    ScanFace,
    ClipboardList,
    Users,
    Network,
    Cpu,
    ShieldCheck,
    Info,
    Lock,
} from 'lucide-react'

const navItems = [
    {
        section: 'Overview',
        items: [
            { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { path: '/access-logs', icon: ClipboardList, label: 'Log Akses' },
        ],
    },
    {
        section: 'Manajemen',
        items: [
            { path: '/face-management', icon: Users, label: 'Database Wajah' },
            { path: '/security', icon: ShieldCheck, label: 'Keamanan' },
        ],
    },
    {
        section: 'Sistem',
        items: [
            { path: '/architecture', icon: Network, label: 'Arsitektur' },
            { path: '/components', icon: Cpu, label: 'Komponen' },
            { path: '/about', icon: Info, label: 'Tentang Proyek' },
        ],
    },
]

export default function Sidebar() {
    const location = useLocation()

    return (
        <aside className="sidebar" id="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <Lock size={22} />
                </div>
                <div className="sidebar-title">
                    <h1>Smart Door Lock</h1>
                    <span>AI • IoT • Biometrik</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((section) => (
                    <div className="nav-section" key={section.section}>
                        <div className="nav-section-title">{section.section}</div>
                        {section.items.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `nav-item ${isActive ? 'active' : ''}`
                                }
                            >
                                <item.icon size={20} />
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="system-status">
                    <div className="status-dot" />
                    <span>Sistem Online • v1.0.0</span>
                </div>
            </div>
        </aside>
    )
}
