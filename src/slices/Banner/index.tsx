import React from "react";
import { PrismicRichText } from "@prismicio/react";

const HeroBanner = ({ slice }) => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${slice.primary.background_image.url})`,
      }}
    >
      <div className="text-center text-white max-w-2xl p-5">
        <h1 className="text-4xl font-bold mb-4">
          <PrismicRichText field={slice.primary.title} />
        </h1>
        <p className="text-lg">
          <PrismicRichText field={slice.primary.description} />
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
