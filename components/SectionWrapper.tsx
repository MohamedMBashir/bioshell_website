import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = 'bg-neutral' }) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper; 