import styles from './typography.module.css'

// Mapeamento
const TAGS = {
  h1: "h1",
  h2: "h2",
  body: "p",
};

export const Typography = ({ children, variant }) => {
  // "if" de estrutura
  const Component = TAGS[variant] || "p";
  const variantClass = styles[variant] || styles.p

  return <Component className={variantClass}>{children}</Component>;
};
