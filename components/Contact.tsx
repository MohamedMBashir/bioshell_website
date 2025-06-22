import React from 'react';
import { useTranslation } from 'next-i18next';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {t('contact_title')}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
          {t('contact_subtitle')}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Contact Form - Centered */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-8">{t('contact_form_title')}</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t('form_name_label')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder={t('form_name_placeholder')} 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t('form_email_label')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder={t('form_email_placeholder')} 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">{t('form_subject_label')}</label>
                  <select 
                    id="subject" 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  >
                    <option>{t('subject_option_investment')}</option>
                    <option>{t('subject_option_partnership')}</option>
                    <option>{t('subject_option_general')}</option>
                    <option>{t('subject_option_media')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{t('form_message_label')}</label>
                  <textarea 
                    id="message" 
                    placeholder={t('form_message_placeholder')} 
                    rows={6} 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  {t('form_submit_button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 