const Contact = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6">
        <h3 className="text-xl font-semibold py-3">
          Get Latest Offers and Discount Coupons by Joining Newsletter
        </h3>
        <div className="lg:flex">
          <p className="py-3 lg:w-[50%] md:opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            distinctio dolorem impedit numquam amet assumenda ullam dolorum
            ipsam. Corrupti ducimus nisi dolorum veritatis!
          </p>
          <form
            action="https://formspree.io/f/xyyaweoz"
            method="POST"
            className="px-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-72 lg:w-96 px-4 h-10 border border-black rounded-lg mr-4"
            />
            <button
              type="submit"
              className="py-1.5 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
