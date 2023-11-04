
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top;
      window.scrollTo({
        top: offset + window.pageYOffset,
        behavior: 'smooth',
      });
    }
  };

export default scrollToSection;