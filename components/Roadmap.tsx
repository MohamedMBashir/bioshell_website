import React from 'react';
import { useTranslation } from 'next-i18next';

const Roadmap = () => {
  const { t } = useTranslation('common');

  const roadmapItems = [
    { year: t('roadmap_item_1_year'), title: t('roadmap_item_1_title'), goal: t('roadmap_item_1_goal'), description: t('roadmap_item_1_desc') },
    { year: t('roadmap_item_2_year'), title: t('roadmap_item_2_title'), goal: t('roadmap_item_2_goal'), description: t('roadmap_item_2_desc') },
    { year: t('roadmap_item_3_year'), title: t('roadmap_item_3_title'), goal: t('roadmap_item_3_goal'), description: t('roadmap_item_3_desc') },
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">{t('roadmap_title')}</h2>
      <p className="text-xl max-w-3xl mx-auto mb-16">
        {t('roadmap_subtitle')}
      </p>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 w-1 bg-gray-300 h-full -translate-x-1/2"></div>
        {roadmapItems.map((item, index) => (
          <div key={index} className={`mb-16 flex items-center w-full ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12">
              <div className={`p-6 bg-white rounded-lg shadow-lg text-left ${index % 2 === 1 ? 'text-right' : ''}`}>
                <p className="text-lg font-semibold text-[var(--color-secondary)] mb-1">{item.year}</p>
                <p className="text-2xl font-bold text-[var(--color-primary)]">{item.title}</p>
                <p className="text-3xl font-bold text-[var(--color-accent)] my-2">{item.goal}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="w-2/12 flex justify-center">
              <div className="w-8 h-8 bg-secondary rounded-full z-10"></div>
            </div>
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;