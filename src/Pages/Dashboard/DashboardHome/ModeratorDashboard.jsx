import React from 'react';
import { 
    ShieldCheck, 
    FileText, 
    Star, 
    Zap, 
    Clock, 
    CheckSquare,
    Layers
} from "lucide-react";
import { 
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip 
} from 'recharts';

const ModeratorDashboard = () => {
    // Quality Control & Content Metrics
    const moderationMetrics = [
        { subject: 'Scholarship Verifications', A: 120, fullMark: 150 },
        { subject: 'Review Moderation', A: 98, fullMark: 150 },
        { subject: 'Response Speed', A: 86, fullMark: 150 },
        { subject: 'Data Accuracy', A: 99, fullMark: 150 },
        { subject: 'User Feedback', A: 85, fullMark: 150 },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto p-6 md:p-10 bg-orange-50 min-h-screen">
            {/* Header Area */}
            <div className="mb-10 pb-8 border-b border-orange-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tighter text-blue-800 uppercase flex items-center gap-3">
                        <ShieldCheck size={32} className="text-blue-800" /> Moderator Console
                    </h1>
                    <p className="text-[10px] font-bold text-blue-800/60 uppercase tracking-[0.3em] mt-2">
                        Content Verification & Quality Assurance
                    </p>
                </div>
                {/* Visual Identity Strip */}
                <div className="h-2 w-32 bg-gradient-to-r from-blue-800 to-orange-100 hidden md:block rounded-full"></div>
            </div>

            {/* Top Metrics - Content Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                    { label: 'Pending Verification', val: '24', icon: <Clock size={20}/> },
                    { label: 'Active Scholarships', val: '156', icon: <Layers size={20}/> },
                    { label: 'Reported Reviews', val: '09', icon: <Zap size={20}/> },
                    { label: 'Processed Today', val: '42', icon: <CheckSquare size={20}/> },
                ].map((stat, i) => (
                    <div key={i} className="p-8 border border-orange-100 bg-white rounded-sm">
                        <div className="flex justify-between items-start mb-6 text-blue-800/80">
                            {stat.icon}
                            <div className="h-4 w-1 bg-orange-100"></div>
                        </div>
                        <p className="text-3xl font-light tracking-tighter text-blue-800">{stat.val}</p>
                        <p className="text-[10px] uppercase tracking-widest font-black text-blue-800/40 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Moderation Performance Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                {/* Performance Radar Chart */}
                <div className="lg:col-span-2 border border-orange-100 p-8 rounded-sm bg-white">
                    <h3 className="text-xs font-black uppercase tracking-widest text-blue-800 mb-8 flex items-center gap-2">
                        <Star size={14} /> Quality Assurance Performance
                    </h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={moderationMetrics}>
                                <PolarGrid stroke="#ffedd5" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#1e3a8a', fontSize: 10, fontWeight: 'bold' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#fff7ed', border: '1px solid #ffedd5', color: '#1e3a8a'}}
                                />
                                <Radar
                                    name="Performance Score"
                                    dataKey="A"
                                    stroke="#1e3a8a"
                                    fill="#1e3a8a"
                                    fillOpacity={0.2}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Right Panel - Information Cards */}
                <div className="flex flex-col gap-6">
                    <div className="flex-1 p-8 border border-orange-100 bg-white">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-blue-800/40 mb-4">Latest System Directive</h3>
                        <p className="text-sm text-blue-800 leading-relaxed font-serif italic">
                            "Prioritize 2026 Spring Enrollment verifications. All pending University credentials must be cross-referenced with the Global Education Registry by EOD."
                        </p>
                    </div>
                    <div className="flex-1 p-8 border border-orange-100 bg-blue-800 text-orange-50">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 text-orange-100">Moderation Capacity</h3>
                        <p className="text-3xl font-light tracking-tighter">88%</p>
                        <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                            <div className="bg-orange-100 h-full w-[88%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Summary - Minimalist Footer */}
            <div className="p-6 border border-orange-100 bg-white rounded-sm">
                <div className="flex flex-col md:flex-row justify-between items-center text-blue-800/60 font-bold uppercase tracking-widest text-[10px] gap-4">
                    <span className="flex items-center gap-2"><FileText size={12}/> Active Scholarships: 1,420</span>
                    <span className="flex items-center gap-2"><ShieldCheck size={12}/> Verified Institutions: 89</span>
                    <span className="flex items-center gap-2"><Star size={12}/> Average Content Rating: 4.7/5</span>
                </div>
            </div>
        </div>
    );
};

export default ModeratorDashboard;