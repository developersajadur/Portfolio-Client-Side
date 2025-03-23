import ContactForm from "@/components/modules/contact/ContactForm";
const ContactPage = () => {
  return (
    <section id="contact" className="px-2 lg:px-10 mb-20">
      <div className="w-full flex flex-col">
        {/* Header Section */}
        {/* <div className=" flex py-8 rounded-t-xl">
          <div className="w-full flex flex-1 flex-col text-start">
            <h1 className="text-white font-medium text-2xl lg:text-5xl">
            {"  Let’s Discuss"}
            </h1>
            <p className="text-[#748195] text-lg">
              {"I'm always open to new freelance opportunities. Reach out, let's discuss your project!"}
            </p>
          </div>
        </div> */}

        <h1 className="text-center text-white text-4xl mb-2"> {"  Let’s Discuss"}</h1>
        <div className="h-0.5 border-b border-[#292524] my-5"></div>

        {/* Contact Details & Form */}
        <div className="flex  px-2 lg:px-0 pb-10 rounded-b-xl">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
