import React from 'react';
import { useTranslation } from 'next-i18next';

const BusinessModel = () => {
  const { t } = useTranslation('common');

  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {t('business_model_title')}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
          {t('business_model_subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Revenue Model */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">💰</span>
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('revenue_streams_title')}</h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t('revenue_stream_1')}</span>
                <span className="font-semibold text-[var(--color-primary)]">{t('revenue_stream_1_value')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t('revenue_stream_2')}</span>
                <span className="font-semibold text-[var(--color-primary)]">{t('revenue_stream_2_value')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t('revenue_stream_3')}</span>
                <span className="font-semibold text-[var(--color-primary)]">{t('revenue_stream_3_value')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Structure */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-secondary)] mb-4">{t('cost_advantages_title')}</h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t('cost_advantage_1')}</span>
                <span className="font-semibold text-[var(--color-secondary)]">{t('cost_advantage_1_value')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t('cost_advantage_2')}</span>
                <span className="font-semibold text-[var(--color-secondary)]">{t('cost_advantage_2_value')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t('cost_advantage_3')}</span>
                <span className="font-semibold text-[var(--color-secondary)]">{t('cost_advantage_3_value')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Strategy */}
      <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-2xl p-8 md:p-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary)]">
          {t('strategic_approach_title')}
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('strategy_phase_1_title')}</h4>
            <p className="text-gray-600">{t('strategy_phase_1_desc')}</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🌍</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('strategy_phase_2_title')}</h4>
            <p className="text-gray-600">{t('strategy_phase_2_desc')}</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🏭</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('strategy_phase_3_title')}</h4>
            <p className="text-gray-600">{t('strategy_phase_3_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel; 