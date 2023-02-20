import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className="bg-red-200">
      <div className=" max-w-7xl mx-auto px-5 py-6">
        <article className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 pb-6">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Custom Furniture <br />
            built only for you
          </h3>
          <p className="text-md md:opacity-80 md:w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quia facere vitae numquam. Maiores laborum distinctio aperiam illo
            aut, ipsa beatae explicabo quidem non?
          </p>
        </article>
        <article className="flex flex-wrap justify-between gap-x-3  gap-y-10 my-8">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                key={id}
                className="w-80 h-72 mx-auto flex flex-col gap-y-4 items-center justify-center bg-red-300 rounded-xl px-4 border border-red-500 hover:scale-105 duration-300"
              >
                <h4 className="p-3 m-1 border rounded-full bg-white text-red-600 inline-block">
                  {icon}
                </h4>
                <h4 className="capitalize font-semibold">{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </article>
      </div>
    </section>
  );
};
export default Services;
