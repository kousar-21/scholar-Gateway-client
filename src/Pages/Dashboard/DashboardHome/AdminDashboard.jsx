import React from 'react';
import { 
    Users, 
    ShieldCheck, 
    Star, 
    TrendingUp, 
    DollarSign, 
    FileText,
    Activity
} from "lucide-react";
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const AdminDashboard = () => {
    const revenueData = [
        { month: 'Jul', total: 4000 },
        { month: 'Aug', total: 3000 },
        { month: 'Sep', total: 5000 },
        { month: 'Oct', total: 8500 },
        { month: 'Nov', total: 7000 },
        { month: 'Dec', total: 11000 },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto p-6 md:p-10 bg-orange-50 min-h-screen">
            {/* Minimalist Admin Header */}
            <div className="mb-10 pb-8 border-b border-orange-100">
                <h1 className="text-3xl font-bold tracking-tighter text-blue-800 uppercase flex items-center gap-3">
                    <ShieldCheck size={32} /> Administrative Oversight
                </h1>
                <p className="text-[10px] font-bold text-blue-800/60 uppercase tracking-[0.3em] mt-2">
                    System Intelligence & Scholarship Metrics
                </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                    { label: 'Platform Users', val: '2,840', icon: <Users size={20}/> },
                    { label: 'Total Revenue', val: '$42,500', icon: <DollarSign size={20}/> },
                    { label: 'Applications', val: '842', icon: <FileText size={20}/> },
                    { label: 'System Health', val: '99.9%', icon: <Activity size={20}/> },
                ].map((stat, i) => (
                    <div key={i} className="p-8 border border-orange-100 bg-white rounded-sm">
                        <div className="flex justify-between items-start mb-6">
                            <div className="text-blue-800 opacity-80">
                                {stat.icon}
                            </div>
                            <div className="h-1 w-8 bg-orange-100 rounded-full"></div>
                        </div>
                        <p className="text-3xl font-light tracking-tighter text-blue-800">{stat.val}</p>
                        <p className="text-[10px] uppercase tracking-widest font-black text-blue-800/40 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Growth Analytics Section - Full Width */}
            <div className="border border-orange-100 p-8 rounded-sm bg-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-blue-800 flex items-center gap-2">
                            <TrendingUp size={14} /> Financial Performance Analysis
                        </h3>
                        <p className="text-[10px] text-blue-800/50 uppercase mt-1">Year-to-date scholarship disbursement flow</p>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase text-blue-800/60">
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-800"></span> Revenue</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-100"></span> Projections</span>
                    </div>
                </div>

                <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueData}>
                            <defs>
                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            
                                    <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffedd5" /> {/* Orange-100 equivalent for grid */}
                            <XAxis 
                                dataKey="month" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fontSize: 10, fill: '#1e3a8a', fontWeight: 'bold'}} 
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fontSize: 10, fill: '#1e3a8a', fontWeight: 'bold'}} 
                            />
                            <Tooltip 
                                contentStyle={{backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '4px'}}
                                itemStyle={{color: '#1e3a8a', fontSize: '12px', fontWeight: 'bold'}}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="total" 
                                stroke="#1e3a8a" 
                                fillOpacity={1} 
                                fill="url(#colorTotal)" 
                                strokeWidth={3} 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bottom Summary Strip */}
            <div className="mt-10 flex flex-col md:flex-row gap-6">
                <div className="flex-1 p-6 border border-orange-100 bg-orange-100/20 text-blue-800 rounded-sm">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Highest Scholarship Category</p>
                    <p className="text-xl font-light">STEM Excellence Program</p>
                </div>
                <div className="flex-1 p-6 border border-orange-100 bg-orange-100/20 text-blue-800 rounded-sm">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Current Review Rate</p>
                    <p className="text-xl font-light">94.2% Response Efficiency</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;