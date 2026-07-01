"use client";
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const isHome = pathName === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary-container bg-background">
      <div className="relative mx-auto w-[90%] max-w-container-max">
        <nav className="flex h-20 items-center justify-between px-margin">
          <div className="text-headline-md font-black uppercase tracking-tighter text-primary-container">
            TUSHAR K
          </div>

          <div className="hidden h-full items-center gap-gutter md:flex">
            {isHome ? (
              <>
                <ScrollLink
                  to="services-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="font-label-bold text-label-bold flex h-full items-center px-2 uppercase text-on-background transition-colors duration-150 hover:under hover:text-primary-container cursor-pointer"
                >
                  Services
                </ScrollLink>

                <ScrollLink
                  to="standards-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="font-label-bold text-label-bold flex h-full items-center px-2 uppercase text-on-background transition-colors duration-150 hover:under hover:text-primary-container cursor-pointer"
                >
                  Standards
                </ScrollLink>
              </>
            ) : (
              <>
                <Link
                  href="/#services-section"
                  className="font-label-bold text-label-bold flex h-full items-center px-2 uppercase text-on-background transition-colors duration-150 hover:under hover:text-primary-container cursor-pointer"
                >
                  Services
                </Link>

                <Link
                  href="/#standards-section"
                  className="font-label-bold text-label-bold flex h-full items-center px-2 uppercase text-on-background transition-colors duration-150 hover:under hover:text-primary-container cursor-pointer"
                >
                  Standards
                </Link>
              </>
            )}

            <Link
              className="font-label-bold text-label-bold flex h-full items-center px-2 uppercase text-on-background transition-colors duration-150 hover:text-primary-container cursor-pointer"
              href="/calculator"
            >
              ROI Calculator
            </Link>
          </div>

          <button
            type="button"
            className="btn-primary hidden px-6 py-2 font-label-bold uppercase text-on-primary transition-transform active:translate-y-0.5 md:block"
            onClick={() => setIsMenuOpen(false)}
          >
            Let&apos;s Scale
          </button>

          <button
            type="button"
            className="ml-4 cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        <div
          id="mobile-nav-menu"
          className={`absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-primary/20 bg-background/95 p-4 shadow-xl backdrop-blur-sm transition-all duration-200 md:hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <button
            type="button"
            className="btn-primary mb-3 w-full px-6 py-3 text-center font-label-bold uppercase text-on-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Let&apos;s Scale
          </button>

          {isHome ? (
            <>
              <ScrollLink
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="font-label-bold text-label-bold block rounded-lg px-2 py-2 uppercase text-on-background transition-colors duration-150 hover:bg-primary-container hover:text-on-primary"
                to="services-section"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </ScrollLink>

              <ScrollLink
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="font-label-bold text-label-bold block rounded-lg px-2 py-2 uppercase text-on-background transition-colors duration-150 hover:bg-primary-container hover:text-on-primary"
                to="standards-section"
                onClick={() => setIsMenuOpen(false)}
              >
                Standards
              </ScrollLink>
            </>
          ) : (
            <>
              <Link
                className="font-label-bold text-label-bold block rounded-lg px-2 py-2 uppercase text-on-background transition-colors duration-150 hover:bg-primary-container hover:text-on-primary"
                href="/#services-section"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                className="font-label-bold text-label-bold block rounded-lg px-2 py-2 uppercase text-on-background transition-colors duration-150 hover:bg-primary-container hover:text-on-primary"
                href="/#standards-section"
                onClick={() => setIsMenuOpen(false)}
              >
                Standards
              </Link>
            </>
          )}

          <Link
            className="font-label-bold text-label-bold block rounded-lg px-2 py-2 uppercase text-on-background transition-colors duration-150 hover:bg-primary-container hover:text-on-primary"
            href="/calculator"
            onClick={() => setIsMenuOpen(false)}
          >
            ROI Calculator
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
