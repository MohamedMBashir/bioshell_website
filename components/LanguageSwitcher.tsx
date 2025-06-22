import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'az', name: 'AZ' },
  { code: 'ru', name: 'RU' },
  { code: 'tr', name: 'TR' },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === router.locale)?.name;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors duration-200"
      >
        {currentLanguage}
        <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <Link
                  href={router.asPath}
                  locale={lang.code}
                  className={`block px-4 py-2 text-sm ${router.locale === lang.code ? 'font-bold text-[var(--color-primary)]' : 'text-gray-700'} hover:bg-gray-100`}
                  onClick={() => setIsOpen(false)}
                >
                  {lang.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 