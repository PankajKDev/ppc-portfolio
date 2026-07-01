function Footer() {
  return (
    <footer className="w-full border-t-4 flex flex-col items-center border-primary-container">
      <div className="hazard-stripe h-2 w-full"></div>
      <div className="bg-surface w-[80%]">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin py-12 gap-gutter max-w-container-max mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-headline-lg text-headline-lg font-black text-primary-container uppercase">
              TUSHAR K
            </div>
            <div className="font-label-mono text-label-mono uppercase text-on-surface-variant">
              © 2024 TUSHAR K. PERFORMANCE ARCHITECTED.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary-container transition-colors underline"
              href="mailto:movergrowthstudio@gmail.com"
            >
              Mail
            </a>
            <a
              className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary-container transition-colors underline"
              href="https://www.linkedin.com/in/tusharkppc/"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary-container transition-colors underline"
              href="#"
            >
              Appointment
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
