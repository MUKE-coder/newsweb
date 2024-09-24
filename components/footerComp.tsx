import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FooterComp() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className=" mt-[13rem] relative">
      <div className="mx-auto  max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="flex width flex-container">
          <div>
            <div className="text-[#f45b42]">
              <Link
                href="/"
                className="flex items-center logoFont gap-2 text-lg font-semibold md:text-base"
              >
                <span className="text-[1rem]">Lubiliizi Bulletin</span>
              </Link>
            </div>

            <p className="mt-4 max-w-xs text-gray-500">
              Craft narratives that ignite inspiration, knowledge, and
              entertainment
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <Facebook />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <Instagram />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <Twitter />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <Github />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>

                  <Dribbble />
                </Link>
              </li>
            </ul>
          </div>

          <div className=" w-[80%] flex flex-col gap-6">
            <div className="flex justify-between width-column">
              <div>
                <p className="font-bold text-gray-900">Business</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Startup
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      employee{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      success
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      videos
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      markets
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-900 font-bold">Technology</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Innovate{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Gadget
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Innovative sites{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Upstarts{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Future tech{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">Travel</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Destinations{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Food & Drink{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Stay{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Videos
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">Sports</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Football{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Tennis{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Golf
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Motorsports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Esports
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between width-column">
              <div>
                <p className="font-bold text-gray-900">Entertainmet</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Movies{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Artist
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Television
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Influencer
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Viral
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">Features</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      As Equals
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Call to Earth
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Freeedom Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Inside Asia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      2 Degrees
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">Weather</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Climate
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Storm tracker
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Wildfire Tracker
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Earthquake
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Video
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">More</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Design
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Mentorship
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Investment
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Work for Bulletin
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Support Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 absolute position bottom-[12%]">
          &copy; {currentDate}. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
