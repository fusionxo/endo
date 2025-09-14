export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1, y: 0, transition: { duration: 0.7, delay: custom }
  })
};
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (custom = 0) => ({
    opacity: 1, scale: 1, transition: { duration: 0.7, delay: custom }
  })
};
