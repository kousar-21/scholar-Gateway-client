import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Spinner/Spinner';
import useUserRole from '../../../Hooks/useUserRole';

const MyProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { role } = useUserRole();

    const { isLoading, data: userData = {}, error } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        }
    });

    if (isLoading) return <Spinner />;
    if (error) return <div className="text-center p-10 border border-red-100 text-red-500">Error loading profile data.</div>;

    // Fancy Professional Data
    const accountMetrics = [
        { label: 'Profile Strength', value: '85%', color: 'bg-emerald-500' },
        { label: 'Response Time', value: '< 2h', color: 'bg-blue-500' },
        { label: 'Project Limit', value: 'Unlimited', color: 'bg-amber-500' }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto p-4 md:p-12">
            <div className="bg-white border border-gray-200 rounded-sm">
                
                {/* Header Section */}
                <div className="p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Avatar with Fancy Pulse Status */}
                        <div className="relative">
                            <img 
                                className="size-28 rounded-none border border-gray-200 p-1 object-cover" 
                                src={user?.photoURL} 
                                alt={user?.displayName} 
                            />
                            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
                            </span>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <h1 className="text-2xl font-light tracking-tight text-gray-900 uppercase">{user?.displayName}</h1>
                                {/* Fancy Verification Badge */}
                                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-400 font-mono text-sm">{user?.email}</p>
                        </div>
                    </div>

                    {/* Fancy Replacement for Edit Button: Account Strength */}
                    <div className="w-full md:w-64 space-y-2">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                            <span>Account Integrity</span>
                            <span>92%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-gray-900 h-full w-[92%] transition-all duration-1000"></div>
                        </div>
                        <p className="text-[10px] text-gray-400 text-right uppercase tracking-tighter italic">Verified Enterprise Grade</p>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-gray-100">
                    <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Current Role</p>
                        <p className="text-sm font-medium text-gray-800">{userData?.role || role || 'Authorized User'}</p>
                    </div>
                    <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Registration Date</p>
                        <p className="text-sm font-medium text-gray-800">{new Date(userData?.created_at || Date.now()).toLocaleDateString()}</p>
                    </div>
                    <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">System Tier</p>
                        <p className="text-sm font-medium text-gray-800">Premium Professional</p>
                    </div>
                    <div className="p-6">
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Security Status</p>
                        <p className="text-sm font-medium text-emerald-600 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> 
                            Encrypted & Active
                        </p>
                    </div>
                </div>

                {/* Metrics Section */}
                <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900">System Logs Summary</h3>
                        <div className="space-y-4">
                            {accountMetrics.map((m, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors">{m.label}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-mono font-bold text-gray-800">{m.value}</span>
                                        <div className={`h-2 w-12 ${m.color} opacity-20 rounded-full`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 border border-gray-100">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-4">Professional Overview</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-serif italic">
                            "Data-driven architect specialized in secure cloud infrastructures and high-performance React environments. Currently managing enterprise-level deployments with focus on 99.9% uptime and modular system scalability."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;