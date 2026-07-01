import ContactForm from "@/components/shared/contact/ContactForm";
import ContactHeader from "@/components/shared/contact/ContactHeader";
import FooterMeta from "@/components/shared/contact/FooterMeta";

function page() {
  return (
    <main className="pt-32 pb-24 min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-1 hazard-border opacity-50" />
      <div className="absolute bottom-0 right-0 w-1/4 h-64 border-r-4 border-b-4 border-primary-container/10 -z-10 m-margin" />

      <div className="container mx-auto px-margin max-w-4xl">
        <ContactHeader />

        <div className="glow-border bg-surface-container p-gutter md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 hazard-border -rotate-45 translate-x-8 -translate-y-8" />

          <ContactForm />
        </div>

        <FooterMeta />
      </div>
    </main>
  );
}

export default page;
