import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Product from '../components/Product';
import Market from '../components/Market';
import BusinessModel from '../components/BusinessModel';
import Roadmap from '../components/Roadmap';
import CompetitiveEdge from '../components/CompetitiveEdge';
import Team from '../components/Team';
import Funding from '../components/Funding';
import Contact from '../components/Contact';
import SectionWrapper from '../components/SectionWrapper';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="block md:inline-block px-4 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors duration-200 relative group">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-200 group-hover:w-full"></span>
  </a>
);

export default function Home() {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_description')} />
        <link rel="icon" href="/images/hazelnut_favicon.png" />
      </Head>

      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <a href="#" className="flex items-center">
            <Image src="/images/bioshell_logo_2.png" alt="BioShell Logo" width={80} height={25} />
          </a>
          
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="#about">{t('nav_about')}</NavLink>
            <NavLink href="#product">{t('nav_product')}</NavLink>
            <NavLink href="#market">{t('nav_market')}</NavLink>
            <NavLink href="#team">{t('nav_team')}</NavLink>
            <NavLink href="#contact">{t('nav_contact')}</NavLink>
          </div>

          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden">
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav_about')}</NavLink>
            <NavLink href="#product" onClick={() => setIsMenuOpen(false)}>{t('nav_product')}</NavLink>
            <NavLink href="#market" onClick={() => setIsMenuOpen(false)}>{t('nav_market')}</NavLink>
            <NavLink href="#team" onClick={() => setIsMenuOpen(false)}>{t('nav_team')}</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav_contact')}</NavLink>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <SectionWrapper id="about" className="bg-gradient-to-br from-gray-50 to-white">
          <ProblemSolution />
        </SectionWrapper>
        <SectionWrapper id="product" className="bg-white">
          <Product />
        </SectionWrapper>
        <SectionWrapper id="market" className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5">
          <Market />
        </SectionWrapper>
        <SectionWrapper id="business-model" className="bg-white">
          <BusinessModel />
        </SectionWrapper>
        <SectionWrapper id="roadmap" className="bg-gradient-to-br from-[var(--color-primary)]/5 to-gray-50">
          <Roadmap />
        </SectionWrapper>
        <SectionWrapper id="competitive-edge" className="bg-white">
          <CompetitiveEdge />
        </SectionWrapper>
        <SectionWrapper id="team" className="bg-gradient-to-br from-gray-50 to-white">
          <Team />
        </SectionWrapper>
        <SectionWrapper id="funding" className="bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10">
          <Funding />
        </SectionWrapper>
        <SectionWrapper id="contact" className="bg-white">
          <Contact />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
