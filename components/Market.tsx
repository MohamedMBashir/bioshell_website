import React from 'react';
import { useTranslation } from 'next-i18next';

const Market = () => {
  const { t } = useTranslation('common');

  const marketSteps = [
    { 
      step: "1", 
      title: t('market_step_1_title'), 
      description: t('market_step_1_desc'),
      color: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    },
    { 
      step: "2", 
      title: t('market_step_2_title'), 
      description: t('market_step_2_desc'),
      color: "from-[var(--color-secondary)] to-[var(--color-primary)]"
    },
    { 
      step: "3", 
      title: t('market_step_3_title'), 
      description: t('market_step_3_desc'),
      color: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    }
  ];

  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {t('market_title')}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
          {t('market_subtitle')}
        </p>
      </div>
      
      {/* Market Expansion Steps */}
      <div className="mb-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {marketSteps.map((market, index) => (
            <div key={index} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${market.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${market.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-bold">{market.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{market.title}</h3>
                <p className="text-gray-600 leading-relaxed">{market.description}</p>
              </div>
              {/* Arrow for larger screens */}
              {index < marketSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
               {/* Arrow for smaller screens */}
              {index < marketSteps.length - 1 && (
                <div className="md:hidden absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 z-10">
                  <svg className="w-8 h-8 text-[var(--color-secondary)] rotate-90" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Global Market Value */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-3xl blur-2xl transform -rotate-1"></div>
        <div className="relative bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">🌍</span>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {t('market_value_title')}
          </h3>
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            <p className="text-6xl md:text-8xl font-bold mb-4">
              $610
            </p>
            <p className="text-3xl md:text-4xl font-semibold">
              {t('market_value_unit')}
            </p>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            {t('market_value_desc')}
          </p>
        </div>
      </div>

      {/* Market Penetration Strategy */}
      <div className="mt-16 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-2xl p-8 md:p-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary)]">
          {t('market_penetration_title')}
        </h3>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Phase 1 Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
              <span className="text-2xl mr-3">🚀</span> {t('market_phase_1_title')}
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">✓</span>{t('market_phase_1_point_1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">✓</span>{t('market_phase_1_point_2')}</li>
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">✓</span>{t('market_phase_1_point_3')}</li>
            </ul>
          </div>
          {/* Phase 2 Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
              <span className="text-2xl mr-3">📈</span> {t('market_phase_2_title')}
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">✓</span>{t('market_phase_2_point_1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">✓</span>{t('market_phase_2_point_2')}</li>
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">✓</span>{t('market_phase_2_point_3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market; 