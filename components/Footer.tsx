import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.028 2.057 3.845-.762-.024-1.483-.232-2.11-.583v.062c0 2.248 1.595 4.123 3.713 4.557-.388.106-.798.163-1.226.163-.298 0-.586-.029-.867-.083.588 1.844 2.295 3.186 4.32 3.22-1.582 1.238-3.578 1.975-5.753 1.975-.373 0-.74-.022-1.1-.065 2.049 1.317 4.488 2.09 7.14 2.09 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.604.91-.658 1.7-1.475 2.323-2.41z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-dark text-neutral">
      <div className="container mx-auto py-10 px-4 flex flex-col items-center gap-8">
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <LinkedInIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <TwitterIcon />
          </a>
        </div>
        <hr className="w-full max-w-xs border-gray-700" />
        <div className="flex flex-col items-center text-center">
          <Image src="/images/bioshell_logo_2.png" alt="BioShell Logo" width={120} height={34} className="brightness-200" />
          <p className="mt-4 text-sm text-gray-500">&copy; {new Date().getFullYear()} {t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 