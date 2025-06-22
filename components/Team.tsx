import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const Team = () => {
  const { t } = useTranslation('common');

  const teamMembers = [
    { 
      name: t('member_1_name'), 
      role: t('member_1_role'), 
      bio: t('member_1_bio'),
      expertise: t('member_1_expertise'),
      image: "/images/team_ceo_gurban.png",
      gradient: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    },
    { 
      name: t('member_2_name'), 
      role: t('member_2_role'), 
      bio: t('member_2_bio'),
      expertise: t('member_2_expertise'),
      image: "/images/team_cofounder-merve.png",
      gradient: "from-[var(--color-secondary)] to-[var(--color-primary)]"
    },
    { 
      name: t('member_3_name'), 
      role: t('member_3_role'), 
      bio: t('member_3_bio'),
      expertise: t('member_3_expertise'),
      image: "/images/team_cofounder_aghakarim.png",
      gradient: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    },
  ];

  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {t('team_title')}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
          {t('team_subtitle')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="group relative">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
            
            {/* Card */}
            <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              {/* Image Container */}
              <div className="relative mb-4">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={120} 
                  height={120} 
                  className="rounded-full mx-auto border-4 border-white shadow-lg"
                />
              </div>
              
              {/* Expertise Badge - Now below image */}
              <div className={`inline-block bg-gradient-to-r ${member.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg mb-4`}>
                {member.expertise}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-lg font-semibold text-[var(--color-primary)] mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Strength Highlights */}
      <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary)]">
          {t('team_strength_title')}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">15+</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('strength_1_title')}</h4>
            <p className="text-gray-600">{t('strength_1_desc')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">1st</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('strength_2_title')}</h4>
            <p className="text-gray-600">{t('strength_2_desc')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">10X</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('strength_3_title')}</h4>
            <p className="text-gray-600">{t('strength_3_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 