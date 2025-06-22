import React from 'react';
import { useTranslation } from 'next-i18next';

const Funding = () => {
  const { t } = useTranslation('common');

  const allocation = [
    { item: t('allocation_item_1'), percentage: 40, color: "from-[var(--color-primary)] to-[var(--color-secondary)]" },
    { item: t('allocation_item_2'), percentage: 30, color: "from-[var(--color-secondary)] to-[var(--color-primary)]" },
    { item: t('allocation_item_3'), percentage: 20, color: "from-[var(--color-primary)] to-[var(--color-secondary)]" },
    { item: t('allocation_item_4'), percentage: 10, color: "from-[var(--color-secondary)] to-[var(--color-primary)]" }
  ];

  const milestones = [
    { year: t('milestone_1_year'), revenue: t('milestone_1_revenue'), production: t('milestone_1_production') },
    { year: t('milestone_2_year'), revenue: t('milestone_2_revenue'), production: t('milestone_2_production') },
    { year: t('milestone_3_year'), revenue: t('milestone_3_revenue'), production: t('milestone_3_production') }
  ];

  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {t('funding_title')}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed mb-8">
          {t('funding_subtitle_start')} <span className="font-bold text-[var(--color-primary)] text-3xl">$300,000</span> {t('funding_subtitle_end')}
        </p>
        <div className="inline-flex items-center bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 px-6 py-3 rounded-full">
          <span className="text-[var(--color-primary)] font-semibold">🚀 {t('funding_opportunity_badge')}</span>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Investment Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">10X</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('highlight_1_title')}</h3>
            <p className="text-gray-600">{t('highlight_1_desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">300K</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('highlight_2_title')}</h3>
            <p className="text-gray-600">{t('highlight_2_desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">1st</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('highlight_3_title')}</h3>
            <p className="text-gray-600">{t('highlight_3_desc')}</p>
          </div>
        </div>

        {/* Fund Allocation */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8">
            {t('fund_allocation_title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {allocation.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-800">{item.item}</span>
                    <span className="text-xl font-bold text-[var(--color-primary)]">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 group-hover:scale-105`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold mb-4">{t('total_investment_title')}</h4>
                <div className="text-5xl font-bold mb-2">$300,000</div>
                <p className="text-lg opacity-90">{t('total_investment_desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Projections */}
        <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8">
            {t('revenue_milestones_title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-2xl font-bold text-[var(--color-secondary)] mb-2">{milestone.year}</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{milestone.revenue}</div>
                <div className="text-gray-600">{milestone.production}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-3xl blur opacity-20"></div>
          <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('cta_title')}
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {t('cta_button_deck')}
              </button>
              <button className="bg-white text-[var(--color-primary)] font-bold py-4 px-8 rounded-full text-lg border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300">
                {t('cta_button_call')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding; 