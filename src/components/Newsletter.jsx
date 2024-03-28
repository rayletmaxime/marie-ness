/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Newsletter() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sjq59eb", "template_y7igi2p", form.current, {
        publicKey: "icwTMTPeNokomcuuh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="bg-gray-900">
      <div
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
            S'inscire à ma newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-400 md:mb-12 sm:text-xl">
            Restez au courant de mes projets ainsi que de mon actualité,
            n'hésitez pas à vous inscrire avec votre adresse email.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600 sm:rounded-none sm:rounded-l-lg placeholder-gray-400 "
                  placeholder="Entrez votre email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-600 border-blue-800 sm:rounded-none sm:rounded-r-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-800"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
