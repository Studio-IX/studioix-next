"use client";

import { Check, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../wrapper/wrapper";
import { motion } from "framer-motion";
import { CornerDownLeft, Loader } from "lucide-react";

import confetti from "canvas-confetti";

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
import { ctaFormSchema } from "@/schema";
import { useState, useTransition } from "react";
import { Textarea } from "../ui/textarea";
import toast from "react-hot-toast";
import { createCtaProspect } from "../../../actions";

const Cta = () => {
  const [isPending, startTransition] = useTransition();

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

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("hey@studioix.agency");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 4000);
  };

  const form = useForm<z.infer<typeof ctaFormSchema>>({
    resolver: zodResolver(ctaFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectBrief: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ctaFormSchema>) => {
    startTransition(async () => {
      const result = await createCtaProspect(values);
      if (result.success) {
        form.reset();
        handleConfetti();
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
    <section className="bg-[#0319D5] h-fit md:h-[78vh] w-full md:mt-40 px-3 md:px-0">
      <Wrapper className="w-full py-12 md:py-24 h-full flex flex-col md:flex-row md:justify-between gap-12 md:gap-20 items-center md:px-0 group lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] my-4">
        <div className=" w-full flex flex-col items-start h-full justify-between">
          <Link className=" h-full" href="/">
            <div className=" relative w-[42px] h-[42px] hover:scale-110 ease-in-out transition-all duration-200">
              <Image
                quality={100}
                className=" object-contain"
                fill
                src="/logo/icon.png"
                alt="Studio IX logo"
              />
            </div>
          </Link>
          <div className="h-full flex flex-col justify-end mt-8 md:mt-0">
            <h3 className="font-cabinetGrotesk uppercase text-white font-semibold text-5xl md:text-7xl tracking-tighter  leading-[0.85]">
              Get your project estimate for free
            </h3>
          </div>
        </div>
        <div className=" w-full md:w-fit flex flex-col items-start h-full">
          <div className=" w-full flex items-center justify-between mb-4">
            <h4 className=" font-archivo uppercase text-white text-lg">
              Drop a line
            </h4>

            <div
              onClick={copyToClipboard}
              className="flex items-center gap-2 cursor-pointer text-lg text-white font-archivo"
            >
              <div
                className={`inline-flex gap-2 items-center w-fit ${
                  copied ? "scale-0 hidden" : "scale-100"
                }`}
              >
                {" "}
                <Copy
                  className={`h-5 w-5 transition-all duration-300 ${
                    copied ? "scale-0" : "scale-100"
                  }`}
                />
                Copy
              </div>
              <div
                className={`inline-flex gap-2 items-center w-fit ${
                  copied ? "scale-100" : "scale-0 hidden"
                }`}
              >
                <Check
                  className={`h-5 w-5 transition-all duration-300 ${
                    copied ? "scale-100" : "scale-0"
                  }`}
                />
                Copied
              </div>
            </div>
          </div>

          <motion.div
            className="relative inline-block cursor-pointer md:w-fit"
            onClick={() => {
              navigator.clipboard.writeText("hey@studioix.agency");
              toast.success("Email copied to clipboard!");
            }}
            whileHover="hover"
            initial="initial"
          >
            <p className="text-white font-archivo text-4xl md:text-7xl font-medium">
              hey@studioix.agency
            </p>
            <motion.div
              className="absolute -bottom-4 left-0 h-[4px] bg-white w-full origin-left"
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            />
          </motion.div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 md:gap-10 w-full h-full mt-12"
            >
              <div className="flex items-center justify-between gap-4 md:gap-8 w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormLabel className=" text-white">
                        Name <span className=" text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" bg-transparent border-b border-b-white/50 focus:border-b-2 focus:border-b-white placeholder:text-white/70 text-white"
                          disabled={isPending}
                          placeholder="Your Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className=" text-white" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormLabel className=" text-white">
                        Contact <span className=" text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" bg-transparent border-b border-b-white/50 focus:border-b-2 focus:border-b-white placeholder:text-white/70 text-white"
                          disabled={isPending}
                          placeholder="Your Email Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className=" text-white" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="projectBrief"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-white">
                      Message <span className=" text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isPending}
                        placeholder="Brief project description"
                        className=" md:min-h-[120px] resize-none bg-transparent border-b border-b-white/50 focus:border-b-2 focus:border-b-white placeholder:text-white/70 text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className=" text-white" />
                  </FormItem>
                )}
              />
            </form>
            <div className="w-full mt-12 md:mt-0">
              <div
                onClick={() => form.handleSubmit(onSubmit)()}
                className="relative w-full inline-flex h-12 md:h-14 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#455CE9_50%,#67DBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0319D5] pl-3 pr-6 py-1 text-lg md:text-xl font-archivo font-medium text-white backdrop-blur-3xl">
                  {isPending ? "Submitting..." : "Submit Form"}
                  {isPending ? (
                    <Loader className="ml-2 animate-spin text-white" />
                  ) : (
                    <CornerDownLeft className="ml-2 text-white" />
                  )}{" "}
                </span>
              </div>
            </div>
          </Form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Cta;
