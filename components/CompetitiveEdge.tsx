import React from 'react';
import { useTranslation } from 'next-i18next';

const CompetitiveEdge = () => {
  const { t } = useTranslation('common');

  const edges = [
    { 
      icon: "🎯", 
      title: t('edge_1_title'), 
      description: t('edge_1_desc'),
      color: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    },
    { 
      icon: "⚡", 
      title: t('edge_2_title'), 
      description: t('edge_2_desc'),
      color: "from-[var(--color-secondary)] to-[var(--color-primary)]"
    },
    { 
      icon: "🏭", 
      title: t('edge_3_title'), 
      description: t('edge_3_desc'),
      color: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    },
  ];

  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {t('competitive_edge_title')}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
          {t('competitive_edge_subtitle')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {edges.map((edge, index) => (
          <div key={index} className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${edge.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-br ${edge.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-2xl">{edge.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{edge.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{edge.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Timeline */}
      <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-2xl p-8 md:p-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary)]">
          {t('why_now_title')}
        </h3>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">{t('market_timing_title')}</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">•</span>{t('market_timing_1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">•</span>{t('market_timing_2')}</li>
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">•</span>{t('market_timing_3')}</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">{t('resource_advantage_title')}</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">•</span>{t('resource_advantage_1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">•</span>{t('resource_advantage_2')}</li>
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">•</span>{t('resource_advantage_3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveEdge; 