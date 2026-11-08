import { type FC, type ReactNode } from 'react';

interface SceneSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

const SceneSection: FC<SceneSectionProps> = ({
  children,
  className = '',
  id,
  fullHeight = true,
}) => {
  return (
    <section
      id={id}
      className={`scene-section relative w-full max-w-[100vw] overflow-hidden ${
        fullHeight ? 'min-h-svh' : ''
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default SceneSection;

