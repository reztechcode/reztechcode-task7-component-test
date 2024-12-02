import React from 'react';

interface SkillCardProps {
    icon: React.ReactNode; // Tetap mendukung elemen React (untuk fleksibilitas)
    title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title }) => {
    return (
        <div className="sm:max-w-sm w-full bg-gray-300 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col items-center justify-center p-6 lg:p-8 text-center">
                <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full">
                    {icon}
                </div>
                <h5 className="text-xl lg:text-2xl font-semibold text-gray-800">{title}</h5>
            </div>
        </div>
    );
};

export default SkillCard;
