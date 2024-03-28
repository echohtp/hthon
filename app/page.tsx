"use client";
import Image from "next/image";
import { Transition, Dialog, Disclosure } from "@headlessui/react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const tracks = Array(6).fill({
  name: "Tokenized Assets",
  sponsor: "You",
},)

const judges = Array(8).fill({
  name: "First Last",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  title: "Founder"
})

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Payment successful
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur amet labore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      Go back to dashboard
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="relative h-screen overflow-hidden bg-indigo-900">
        <div className="image-container">
          <img
            src="/images/blobs.jpg"
            className="absolute object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container px-6 py-4 mx-auto md:px-12">
            <div className="items-center justify-center md:flex">
              <div className="flex items-center justify-between">
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="items-center hidden md:flex bg-gray-800 bg-opacity-65 rounded-full my-4 py-4 px-8">
                <a
                  href="https://tensor.readme.io"
                  className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300"
                >
                  Resources
                </a>
                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                  Register Now
                </a>
                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                  F.A.Q.
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="container h-screen relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-center w-full align-middle">
            <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl anaglyphText">
              Tensor Hackathon
            </h1>
            <h2 className="mt-4 font-extrabold leading-tight text-center text-white text-3xl sm:text-xl">
              May 5, 2024 - May 30, 2024
            </h2>
            <a
              href="#"
              className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900 register-button"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      <section>
        <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl anaglyphText pt-6">
          Prizes
        </h1>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-400">5 Tracks</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl"></dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-400">
                  In total Prizes
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  $50,0000+
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-400">
                  New users annually
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  46,000
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl anaglyphText">
          Tracks
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-10 my-10">
          
          
          {tracks.map((track) => (
          <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-black px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 anaglyphCard" key={Math.random()}>
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-200">
                  Tokenized Assets
                </p>
                <p className="truncate text-sm text-gray-500">
                  Sponsored by You
                </p>
              </a>
            </div>
          </div>
          ))}
        
        </div>
      </section>

      <section>
        <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl anaglyph">
          Judges
        </h1>

        <ul
          role="list"
          id="judgeList"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 my-10"
        >

          {judges.map((judge) => (
          <li className="col-span-1 flex flex-col rounded-lg bg-black text-center shadow anaglyphCard text-white" key={Math.random()}>
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={judge.image}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-200">name</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-400">Title</dd>
                <dt className="sr-only">Role</dt>
              </dl>
            </div>
          </li>
          ))}
        
        </ul>
      </section>

      <section>
        <div className="">
          <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl anaglyph">
            FAQ
          </h1>
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="mx-auto max-w-4xl divide-y divide-white/10">
              <dl className="space-y-6 divide-y divide-white/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="">
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                            <span className="text-base font-semibold mt-6 leading-7">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-4 pr-12">
                          <p className="text-base leading-7 text-gray-300">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black mt-12">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 z-10">
          <nav
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            <div className="pb-6">
              <a
                href="#"
                className="text-sm leading-6 text-gray-200 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="pb-6">
              <a
                href="#"
                className="text-sm leading-6 text-gray-200 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="pb-6">
              <a
                href="#"
                className="text-sm leading-6 text-gray-200 hover:text-gray-900"
              >
                Jobs
              </a>
            </div>
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">X</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2024 Tensor Labs. All rights reserved.
          </p>
        </div>
      </footer>
      <div
        className="relative"
        style={{
          backgroundImage: "url('/images/blobsB.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25">
          &nbsp;<h1>hi</h1>
        </div>
      </div>
    </>
  );
}
