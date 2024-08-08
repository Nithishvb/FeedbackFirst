import Link from "next/link";
import React from "react";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <div className=" w-full dark:bg-black bg-dark  dark:bg-grid-white/[0.2] bg-grid-white/[0.02] relative flex items-center justify-center">
          <div className="absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            <section className="w-full text-white py-12">
              <div className="container px-4 md:px-6">
                <div className="py-28">
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Collect Feedback from Your Users
                      </h1>
                      <p className="max-w-[600px] m-auto py-12 text-center text-muted-foreground md:text-xl">
                        Empower your business with real-time user feedback. Our
                        SaaS solution makes it easy to gather insights and
                        improve your products.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <button className="bg-violet no-underline group cursor-pointer relative shadow-2xl rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                        <span className="absolute overflow-hidden rounded-full">
                          <span className="absolute rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 py-2   ">
                          <span className="text-lg">Get started for free</span>
                          <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.75 8.75L14.25 12L10.75 15.25"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </p>
        </div>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Feedback Collection
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our SaaS solution provides a comprehensive set of tools to
                  help you gather valuable feedback from your users and improve
                  your products.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Customizable Feedback Forms
                      </h3>
                      <p className="text-muted-foreground">
                        Create custom feedback forms that match the branding and
                        design of your website.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Real-Time Insights</h3>
                      <p className="text-muted-foreground">
                        Get immediate access to user feedback and analyze trends
                        to drive product improvements.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Seamless Integration
                      </h3>
                      <p className="text-muted-foreground">
                        Easily integrate our feedback collection solution into
                        your existing website or application.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Integration
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Integrate in Minutes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Easily add our feedback collection solution to your website or
                  application with a simple code snippet.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-muted rounded-lg p-6">
                  <pre className="text-sm text-muted-foreground">{`
<div id="feedback-collect"></div>
`}</pre>
                </div>
                <p className="text-muted-foreground">
                  Copy and paste this code snippet into your website or
                  application to start collecting feedback from your users.
                </p>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Integration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Feedback Collect. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default HomePage;
