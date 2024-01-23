import styles from './text.module.css';

type TextWrapperProps = {
  text: string;
};

export const TextWrapper = ({ text }: TextWrapperProps) => {
  if (text.length > 0) {
    return (
      <div className={styles.container}>
        {text.split('\n\n').map((paragraph, index) => {
          return (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          );
        })}
      </div>
    );
  }

  return undefined;
};
