import React from 'react';
import {
    User,
    ClipboardList,
    Star,
    Wallet,
    Calendar,
    CheckCircle2,
    Clock
} from "lucide-react";
import {
    PieChart, Pie, Cell, ResponsiveContainer,
    LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';

const UserDashboard = () => {
    const financialData = [
        { name: 'Disbursed (Paid)', value: 3200, color: '#1e3a8a' },
        { name: 'Pending (Unpaid)', value: 1500, color: '#ffedd5' }, 
    ];

    const applicationProgress = [
        { day: 'Mon', score: 20 },
        { day: 'Tue', score: 45 },
        { day: 'Wed', score: 30 },
        { day: 'Thu', score: 70 },
        { day: 'Fri', score: 85 },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto p-6 md:p-10 bg-orange-50 min-h-screen">
            {/* Header */}
            <header className="mb-10 pb-6 border-b border-orange-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tighter text-blue-800 uppercase flex items-center gap-3">
                        <User className="text-blue-800" size={32} /> Student Dashboard
                    </h1>
                    <p className="text-[10px] font-bold text-blue-800/60 uppercase tracking-[0.3em] mt-2">
                        Scholarship Status & Academic Funding
                    </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 rounded-sm">
                    <CheckCircle2 size={16} className="text-blue-800" />
                    <span className="text-[10px] font-black text-blue-800 uppercase">Profile Verified</span>
                </div>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                    { label: 'Active Applications', val: '04', icon: <ClipboardList size={24} /> },
                    { label: 'Total Reviews', val: '12', icon: <Star size={24} /> },
                    { label: 'Pending Documents', val: '02', icon: <Clock size={24} /> },
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-white border border-orange-100 rounded-sm group hover:border-blue-800 transition-colors">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-blue-800/40">{item.icon}</span>
                            <div className="h-1 w-6 bg-orange-100"></div>
                        </div>
                        <p className="text-4xl font-light text-blue-800 tracking-tighter">{item.val}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-800/50 mt-1">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {/* Chart: Scholarship Funding Status */}
                <div className="p-8 bg-white border border-orange-100 rounded-sm">
                    <h3 className="text-xs font-black uppercase tracking-widest text-blue-800 mb-8 flex items-center gap-2">
                        <Wallet size={14} /> Funding Allocation
                    </h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={financialData}
                                    innerRadius={70}
                                    outerRadius={90}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {financialData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff7ed', border: '1px solid #ffedd5', color: '#1e3a8a' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-8 mt-6">
                        {financialData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                                <span className="text-[10px] font-bold text-blue-800/60 uppercase tracking-tighter">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chart: Application Activity */}
                <div className="p-8 bg-white border border-orange-100 rounded-sm">
                    <h3 className="text-xs font-black uppercase tracking-widest text-blue-800 mb-8 flex items-center gap-2">
                        <Calendar size={14} /> Profile Activity Score
                    </h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={applicationProgress}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffedd5" />
                                <XAxis
                                    dataKey="day"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fill: '#1e3a8a' }}
                                />
                                <YAxis hide />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff7ed', border: '1px solid #ffedd5' }}
                                />
                                <Line
                                    type="stepAfter"
                                    dataKey="score"
                                    stroke="#1e3a8a"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: '#1e3a8a' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Informational Footer Summary */}
            <div className="p-8 border border-orange-100 bg-orange-100/10 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-800/40 mb-2">Next Milestone</h4>
                        <p className="text-lg font-medium text-blue-800 italic">"Final Transcript Verification for Ivy League Scholarship"</p>
                    </div>
                    <div className="md:text-right">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-800/40 mb-2">Account Integrity</h4>
                        <p className="text-3xl font-light text-blue-800">92%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;