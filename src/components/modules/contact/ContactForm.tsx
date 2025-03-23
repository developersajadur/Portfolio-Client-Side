"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "./contactValidation";


const ContactForm = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(contactSchema),
      });
    
      const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("Contact Data Submitted:", data);
      };
    
    return (
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
                    {...register("userName")}
                  />
                  {errors.userName && (
                    <span className="text-red-500 text-sm">{errors.userName.message}</span>
                  )}
                </div>
                {/* Email Input */}
                <div className="w-full">
                  <p className="text-[#748195] font-medium text-sm mb-2">YOUR EMAIL</p>
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-transparent border-[#748195] w-full p-3 rounded-lg"
                    {...register("userEmail")}
                  />
                  {errors.userEmail && (
                    <span className="text-red-500 text-sm">{errors.userEmail.message}</span>
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
                <Button type="submit" className="bg-white w-full lg:w-fit text-black py-2 px-4 rounded-[8px] hover:bg-white hover:text-black">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
    );
};

export default ContactForm;