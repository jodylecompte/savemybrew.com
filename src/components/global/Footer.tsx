import { useReducer, useState } from "react";

import type { FormEventHandler } from "react";

import Link from "next/link";

const FinalFooter = () => {
  return (
    <div>
      <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
        <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} SaveMyBrew.com.All rights reserved.
        </p>
        <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
          Coded with ❤️ by{" "}
          <Link href="https://jodylecompte.com">Jody LeCompte</Link>.
        </p>
      </div>
      <div className="text-white mt-6 text-center">
        <Link href="/accessibility" className="mx-2">
          Accessibility
        </Link>
        <Link href="/privacy" className="mx-2">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

const Newsletter = () => {
  const [formSuccess, toggleFormSuccess] = useReducer((s) => !s, false);
  const [formError, toggleFormError] = useReducer((s) => !s, false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    toggleFormError();

    const response = await fetch("/api/newsletter", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ email: emailInput }), // body data type must match "Content-Type" header
    });

    const resData = await response.json();

    if (resData.success) {
      toggleFormSuccess();
    } else {
      toggleFormError();
    }

    console.log(resData);
  };

  return (
    <div className="pt-8 lg:flex lg:items-center lg:justify-between">
      <div>
        <h3 className="text-sm font-semibold leading-6 text-white">
          Subscribe to our newsletter
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-300">
          Get alerts about site updates and new blog posts automatically in your
          inbox.
        </p>
      </div>
      {formSuccess && (
        <div className="max-w-xs">
          <p className="text-white font-bold mb-2">Thanks for subscribing!</p>
          <p className="text-white">
            We take you trusting us seriously, and we will never send you spam
            or share your information. You can unsubscribe at any time.!
          </p>
        </div>
      )}
      {!formSuccess && (
        <div className="flex flex-col">
          <form
            className="mt-6 sm:flex sm:max-w-md lg:mt-0"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
          {formError && (
            <div className="text-red-500">
              An error has occured, please try again.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8">
        <Newsletter />
        <FinalFooter />
      </div>
    </footer>
  );
};
