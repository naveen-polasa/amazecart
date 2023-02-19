import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const About = () => {
  return (
    <main>
      <div className="bg-red-200">
        <PageHero title="about" />
      </div>
      <div className="max-w-7xl mx-auto md:flex gap-x-12 lg:gap-x-3 lg:px-24 py-9 px-5">
        <img
          src={aboutImg}
          alt="desk"
          className="w-96 lg:w-[31rem] lg:h-[29rem] mx-auto   rounded-xl mb-6"
        />
        <article className="w-96 md:mt-20 lg:mt-5 max-w-lg mx-auto">
          <h2 className="text-2xl py-4 md:text-3xl font-bold">About Us</h2>
          <p className="md:text-lg lg:text-xl opacity-75 lg:py-4 lg:pr-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            itaque magnam culpa mollitia dicta dolore est voluptatibus facilis
            laboriosam reprehenderit, perspiciatis molestias recusandae eos
            dolor nisi error dolorem et vero quam pariatur ipsa!
          </p>
        </article>
      </div>
    </main>
  );
};
export default About;
