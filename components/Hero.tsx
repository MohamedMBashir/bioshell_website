import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-dark)] to-[var(--color-secondary)]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-secondary)]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[var(--color-secondary)]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-[var(--color-primary)]/30 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 p-4 max-w-6xl mx-auto">
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <Image 
            src="/images/BioShell_logo.png" 
            alt={t('logo_alt')} 
            width={200} 
            height={200} 
            className="mx-auto drop-shadow-2xl" 
          />
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif [text-shadow:0_4px_8px_rgba(0,0,0,0.3)] leading-tight">
          {t('hero_title_1')}
          <span className="block bg-gradient-to-r from-[var(--color-secondary)] to-white bg-clip-text text-transparent">
            {t('hero_title_2')}
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl mb-12 [text-shadow:0_2px_4px_rgba(0,0,0,0.3)] max-w-4xl mx-auto leading-relaxed">
          {t('hero_subtitle')}
        </p>
        
        <div className="flex justify-center items-center mt-12">
          <a
            href="#about"
            className="group bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold py-4 px-10 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            {t('hero_button_solution')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 