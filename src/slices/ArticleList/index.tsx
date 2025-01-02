import { PrismicRichText } from "@prismicio/react";

const ArticleList = ({ slice }) => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        <PrismicRichText field={slice.primary.title} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={item.image.url}
              alt={item.image.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                <PrismicRichText field={item.title} />
              </h3>
              <p className="text-gray-600 mb-4">
                <PrismicRichText field={item.excerpt} />
              </p>
              <a
                href={item.link.url}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
