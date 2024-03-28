import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div
          className="m-auto text-center place-self-center lg:col-span-6 lg:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Marie Ness
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
            Musiques et compositions Françaises
          </p>

          <a
            href="#discography"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-700 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-800"
          >
            Discographie
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex pt-10">
          <img src="./marieness.webp" alt="Photo de Marie Ness" />
        </div>
      </div>
      <Socials />
    </section>
  );
}
