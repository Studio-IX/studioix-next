"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { leadFormSchema } from "@/schema";
import { usePopupStore } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { createLead } from "../../../actions";
import { BorderBeam } from "../ui/border-beam";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { hasSubmitted, setHasSubmitted } = usePopupStore();

  useEffect(() => {
    // Don't show popup if user has already submitted
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [hasSubmitted]);

  const form = useForm<z.infer<typeof leadFormSchema>>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof leadFormSchema>) => {
    startTransition(async () => {
      const result = await createLead(values);
      if (result.success) {
        form.reset();
        setIsOpen(false);
        setHasSubmitted(true); // Save to persistent store
        toast.success("The resource will be sent to your inbox");
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className=" h-fit overflow-y-clip overflow-x-clip w-full flex justify-between gap-12 md:gap-28">
        <div className=" w-full md:w-fit">
          <DialogHeader>
            <DialogTitle>
              The Ultimate <br className=" hidden md:block" />
              <span className=" text-primary">Blueprint</span> for{" "}
              <br className=" hidden md:block" />
              MVP Success
            </DialogTitle>
            <DialogDescription>
              Get insider tips and expert advice on creating a powerful MVP.
              Claim your free PDF guide today!
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-start gap-6 mt-8 w-full"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className=" w-full">
                    <FormLabel>
                      Name <span className=" text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="John"
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
                      Email Address <span className=" text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="example@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className=" w-full mt-8">
                {isPending ? "Processing..." : "Get Free Guide"}
                {isPending ? (
                  <Loader className="ml-2 animate-spin text-white" />
                ) : null}
              </Button>
            </form>
          </Form>

          <div className=" md:h-[3rem]" />
        </div>
        <div className=" w-full h-[42rem] relative hidden md:block">
          <Image
            fill
            priority
            quality={100}
            className="object-cover object-left-top"
            src="/images/popup-img.png"
            alt="Free MVP Guide"
          />
        </div>
        <BorderBeam />
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
