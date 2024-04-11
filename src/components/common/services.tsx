"use client";

import Service from "./service";

import { services } from "@/constants/services";

const AgencyServices = () => {
  return (
    <div className="bg-black py-40 md:py-60 flex flex-col items-start justify-center text-center">
      <div className="servicesMain mt-20">
        <div className="servicesBody">
          {services.map((service, index) => {
            return (
              <div className="w-full" key={index}>
                <>
                  <div className="hidden md:block w-full">
                    <Service
                      href={service.href}
                      index={index}
                      title={service.title}
                      sub1={service.sub1}
                      sub2={service.sub2}
                      sub3={service.sub3}
                      description={service.description}
                      number={service.number}
                    />
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgencyServices;
