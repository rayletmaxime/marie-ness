import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pb-24" id="contact">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Marie Ness
            </span>
          </a>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2024{" "}
          <a href="https://github.com/gitmcr" className="hover:underline">
            Construit par mcr™
          </a>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}
