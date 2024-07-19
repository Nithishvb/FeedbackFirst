"use client";

import { Button, Dialog, DialogTrigger } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import FeedbackTextForm from "../../../components/feedbackForm/FeedbackTextForm";

export default function page() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="px-6 lg:px-6 pt-10 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center p-2"
          prefetch={false}
        >
          <span className="font-semibold text-2xl">Feedback First</span>
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center space-y-6 px-4 md:px-6">
        <div>
          <Image
            src={
              ""
            }
            width={300}
            height={200}
            alt="space-image"
            className="rounded-full p-2 w-[250px] h-[200px]"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Build your dream app
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-8">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </p>
        </div>
        <div className="space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                text="Shoot your Feedback"
                className="px-6 py-2 bg-black text-white rounded-lg border border-1 border-black font-bold transform hover:-translate-y-1 transition duration-400"
              >
                Shoot Your Feedback
              </Button>
            </DialogTrigger>
            <FeedbackTextForm />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                text="Type Your Feedback"
                className="px-6 py-2 border rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                variant="outline"
              >
                Type Your Feedback
              </Button>
            </DialogTrigger>
            <FeedbackTextForm />
          </Dialog>
        </div>
      </main>
    </div>
  );
}
