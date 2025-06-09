'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { User, Download, DollarSign, Globe } from 'lucide-react';

const stats = [
    { label: 'cars', value: 540, icon: <User className="text-white" width={35} height={35} /> },
    { label: 'customers', value: 20, icon: <Download className=" text-white" width={35} height={35}/> },
    { label: 'Years', value: 25, prefix: '$', icon: <DollarSign className="text-white" width={35} height={35}/> },
    { label: 'Miles', value: 20, icon: <Globe className="text-white" width={35} height={35}/> },
];

export default function Stats() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} className="bg-[#5937E0] py-16"
                 style={{
                     backgroundImage:
                         "url(img.png)",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                 }}>
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Facts in numbers</h2>
                <p className="text-white mb-10">We’ve helped thousands around the globe grow their business.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-8 bg-white p-8 rounded-md">
                           <div className="bg-[#FF9E0C] p-4 rounded-md">
                               <div className="mb-2">{stat.icon}</div>
                           </div>
                            <div>
                                <div className="text-4xl font-extrabold text-black">
                                    {inView ? (
                                        <>
                                            <CountUp
                                                end={stat.value}
                                                duration={2}
                                                separator=","
                                                prefix={stat.prefix || ''}
                                            />
                                            {stat.label === 'customers' ? 'k+' :
                                             stat.label == 'Miles' ? 'm+':
                                                '+'}

                                        </>
                                    ) : (
                                        '0+'
                                    )}
                                </div>
                                <div className="text-sm text-gray-700 mt-2">{stat.label}</div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
