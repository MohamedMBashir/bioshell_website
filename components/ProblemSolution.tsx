import React from 'react';
import { useTranslation } from 'next-i18next';

const ProblemSolution = () => {
  const { t } = useTranslation('common');

  const problems = [
    t('problem_1'),
    t('problem_2'),
    t('problem_3'),
  ];

  const solutions = [
    t('solution_1'),
    t('solution_2'),
    t('solution_3'),
    t('solution_4'),
  ];

  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {t('problem_solution_title')}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
          {t('problem_solution_subtitle')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Problem Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-6 mx-auto">
              <span className="text-white text-2xl font-bold">⚠️</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-red-600">{t('problem_title')}</h3>
            <ul className="space-y-6 text-left">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-500 font-bold text-lg">✖</span>
                  </div>
                  <p className="text-lg text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                    {problem}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solution Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full mb-6 mx-auto">
              <span className="text-white text-2xl font-bold">💡</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-secondary)]">{t('solution_title')}</h3>
            <ul className="space-y-6 text-left">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-500 font-bold text-lg">✔</span>
                  </div>
                  <p className="text-lg text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                    {solution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-secondary)]/20 rounded-xl">
          <div className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-2">60%</div>
          <div className="text-sm md:text-base text-gray-600 font-medium">{t('stat_emissions')}</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/20 rounded-xl">
          <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">40%</div>
          <div className="text-sm md:text-base text-gray-600 font-medium">{t('stat_cost')}</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/20 rounded-xl">
          <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">100%</div>
          <div className="text-sm md:text-base text-gray-600 font-medium">{t('stat_sustainable')}</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
          <div className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">0%</div>
          <div className="text-sm md:text-base text-gray-600 font-medium">{t('stat_waste')}</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution; 