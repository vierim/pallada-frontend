import styles from './text-section.module.css';

type TextSectionProps = {
  headline?: string;
  text: string[];
  pic?: {
    file: string;
    align: 'left' | 'right';
  };
};

export const TextSection = ({ headline, text, pic }: TextSectionProps) => {
  return (
    <section className={styles.container}>
      <div className={`${styles.content} page-section`}>
        {headline && headline?.length > 0 && (
          <h2 className={styles.headline}>{headline}</h2>
        )}
        {text.length > 0 &&
          text.map((line, index) => <p key={index}>{line}</p>)}
      </div>
    </section>
  );
};
