// Curvas e variants compartilhadas — mantém o movimento consistente no site inteiro.
export const EASE = [0.22, 0.68, 0.16, 1];

export const fadeUp = (delay = 0, distance = 26) => ({
  hidden: { opacity: 0, y: distance, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE, delay },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: EASE, delay },
  },
});

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
