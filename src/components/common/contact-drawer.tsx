"use client";

import { ArrowRight, CornerDownLeft, Loader } from "lucide-react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import confetti from "canvas-confetti";
import BouncyComponent from "./bouncy-radio";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { prospectFormSchema } from "@/schema";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { createProspect } from "../../../actions";
import { Textarea } from "../ui/textarea";

export function ContactDrawer() {
  const [isPending, startTransition] = useTransition();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const form = useForm<z.infer<typeof prospectFormSchema>>({
    resolver: zodResolver(prospectFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectBrief: "",
      projectType: "web-application",
    },
  });

  const onSubmit = async (values: z.infer<typeof prospectFormSchema>) => {
    startTransition(async () => {
      const result = await createProspect(values);
      if (result.success) {
        form.reset();
        handleConfetti();
        setIsDrawerOpen(false);
        toast.success("We will reach out to you shortly");
      } else {
        if (result.error === "Email already exists") {
          toast.error("Email already exists");
        } else {
          toast.error("Something went wrong");
        }
      }
    });
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#000_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 md:px-6 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl">
            Build Your First MVP
            <ArrowRight className="ml-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className=" h-fit md:h-[55dvh] py-5 md:py-0 w-full flex flex-col md:flex-row justify-between items-start md:items-center px-3 md:px-20">
          <div className="md:w-[65%] flex flex-col items-start w-full">
            <div className="hidden md:block text-start">
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-8xl text-black text-start md:mt-0">
                We Are
              </h2>
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-8xl text-black text-start md:-mt-3">
                Glad that
              </h2>
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-8xl text-black text-start md:-mt-3">
                You Chose
              </h2>
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-8xl text-[#455CE9] text-start md:-mt-3">
                Studio IX®
              </h2>
            </div>

            <div className="hidden md:block">
              <div
                onClick={() => form.handleSubmit(onSubmit)()}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group mt-10"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#455CE9_50%,#67DBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white pl-6 pr-6 py-1 text-base font-archivo font-medium text-black backdrop-blur-3xl">
                  {isPending ? "Submitting..." : "Submit Form"}
                  {isPending ? (
                    <Loader className="ml-2 animate-spin text-primary" />
                  ) : (
                    <CornerDownLeft className="ml-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full gap-8 md:gap-12">
            <div className="md:hidden w-full">
              <div className="w-full flex items-center justify-center">
                <div className="w-12 h-1.5 bg-black/10 rounded-full" />
              </div>
            </div>

            <div className=" md:hidden">
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-8xl text-black text-start md:mt-0">
                We are glad <br /> that you Chose{" "}
                <span className="text-[#455CE9]">Studio IX®</span>
              </h2>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 md:gap-10 w-full"
              >
                <div className="flex items-center justify-between gap-4 md:gap-8 w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel>
                          Name <span className=" text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            placeholder="Your Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel>
                          Contact <span className=" text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            placeholder="Your Email Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5 md:gap-4 w-full">
                  <h4 className=" font-archivo font-semibold text-xl text-black">
                    Looking for help with
                  </h4>
                  <BouncyComponent disabled={isPending} />
                </div>
                <FormField
                  control={form.control}
                  name="projectBrief"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Message <span className=" text-red-500">*</span>
                      </FormLabel>{" "}
                      <FormControl>
                        <Textarea
                          disabled={isPending}
                          placeholder="Brief project description"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
              <div className="md:hidden w-full">
                <div
                  onClick={() => form.handleSubmit(onSubmit)()}
                  className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#455CE9_50%,#67DBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white pl-3 pr-6 py-1 text-base font-archivo font-medium text-black backdrop-blur-3xl">
                    {isPending ? "Submitting..." : "Submit Form"}
                    {isPending ? (
                      <Loader className="ml-2 animate-spin text-primary" />
                    ) : (
                      <CornerDownLeft className="ml-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
                    )}{" "}
                  </span>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
