import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const Product = () => {
  const { t } = useTranslation('common');

  const advantages = [
    { 
      icon: "🌍", 
      title: t('advantage_1_title'), 
      description: t('advantage_1_desc'),
      color: "from-[var(--color-secondary)] to-[var(--color-primary)]"
    },
    { 
      icon: "💰", 
      title: t('advantage_2_title'), 
      description: t('advantage_2_desc'),
      color: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    },
    { 
      icon: "📦", 
      title: t('advantage_3_title'), 
      description: t('advantage_3_desc'),
      color: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    },
  ];

  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {t('product_title')}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
          {t('product_subtitle')}
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        {/* Image Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-3xl blur-2xl transform rotate-6"></div>
          <div className="relative bg-white p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Image 
              src="/images/bioplastic_granules.png" 
              alt={t('product_image_alt')} 
              width={600} 
              height={400} 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              {t('product_image_badge')}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center text-2xl mr-6 transform group-hover:scale-110 transition-transform duration-200`}>
                  {advantage.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors duration-200">
                    {advantage.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary)]">
          {t('tech_excellence_title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Material Properties Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
              <span className="text-2xl mr-3">🔬</span> {t('tech_properties_title')}
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">✓</span>{t('tech_property_1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">✓</span>{t('tech_property_2')}</li>
              <li className="flex items-center"><span className="text-[var(--color-secondary)] mr-2">✓</span>{t('tech_property_3')}</li>
            </ul>
          </div>
          {/* Production Process Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
              <span className="text-2xl mr-3">⚙️</span> {t('tech_process_title')}
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">✓</span>{t('tech_process_1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">✓</span>{t('tech_process_2')}</li>
              <li className="flex items-center"><span className="text-[var(--color-primary)] mr-2">✓</span>{t('tech_process_3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product; 