import { servicesData } from "@/constants";

const Services = () => {
  return (
    <section
      id="services-section"
      className="py-24  px-margin bg-surface border-t-2 border-primary-container"
    >
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="space-y-6">
                <div className="w-16 h-16 border-2 border-primary-container flex items-center justify-center">
                  <IconComponent className="text-primary-container w-8 h-8 stroke-[1.5]" />
                </div>

                <h4 className="font-headline-md text-headline-md uppercase">
                  {service.title}
                </h4>

                <p className="font-body-md text-on-surface-variant">
                  {service.description}
                </p>

                <ul className="font-label-mono text-sm space-y-2 uppercase">
                  {service.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-container"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
