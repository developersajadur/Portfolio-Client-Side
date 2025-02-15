"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div id="contact" className="px-2 lg:px-10 mb-20">
      <div className="w-full flex flex-col">
        {/* Header Section */}
        <div className=" flex py-8 rounded-t-xl">
          <div className="w-full flex flex-1 flex-col text-start">
            <h1 className="text-white font-medium text-2xl lg:text-5xl">
            {"  Let’s Discuss"}
            </h1>
            <p className="text-[#748195] text-lg">
              {"I'm always open to new freelance opportunities. Reach out, let's discuss your project!"}
            </p>
          </div>
        </div>

        {/* Contact Details & Form */}
        <div className="flex  px-2 lg:px-0 pb-10 rounded-b-xl">

          {/* Contact Form */}
          <div className="w-full flex justify-center items-center text-start lg:mr-10 mt-5 lg:mt-12">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                {/* Name Input */}
                <div className="w-full">
                  <p className="text-[#748195] font-medium text-sm mb-2">YOUR NAME</p>
                  <Input
                    placeholder="Your Full Name"
                    type="text"
                    className="bg-transparent border-[#748195] w-full p-3 rounded-lg"
                    {...register("user_name")}
                  />
                  {errors.user_name && (
                    <span className="text-red-500 text-sm">{errors.user_name.message}</span>
                  )}
                </div>
                {/* Email Input */}
                <div className="w-full">
                  <p className="text-[#748195] font-medium text-sm mb-2">YOUR EMAIL</p>
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-transparent border-[#748195] w-full p-3 rounded-lg"
                    {...register("user_email")}
                  />
                  {errors.user_email && (
                    <span className="text-red-500 text-sm">{errors.user_email.message}</span>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div className="w-full mt-4">
                <p className="text-[#748195] font-medium text-sm mb-2">SUBJECT</p>
                <Input
                  placeholder="Subject"
                  type="text"
                  className="bg-transparent border-[#748195] w-full p-3 rounded-lg"
                  {...register("subject")}
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">{errors.subject.message}</span>
                )}
              </div>

              {/* Message Input */}
              <div className="w-full mt-4">
                <p className="text-[#748195] font-medium text-sm mb-2">YOUR MESSAGE</p>
                <Textarea
                  placeholder="Your Message"
                  className="bg-transparent border-[#748195] w-full p-3 rounded-lg"
                  rows={4}
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="w-full mt-4">
                <Button type="submit" className="bg-white w-full lg:w-fit text-black py-2 px-4 rounded-lg hover:bg-white hover:text-black">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
