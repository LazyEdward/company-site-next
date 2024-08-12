// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

const ContactUs = () => {
  return (
    <main className="flex flex-col">
      <PageHeader pathName="/contact-us" />
      <div className="h-[68px] lg:h-[117px]"></div>
      <SectionHeader
        title={`Get in touch`}
        content={`Please feel free to get in touch with us via any convenient means (phone,
whatsapp, email, submit a contact form). We will be glad to answer your
questions as soon as possible.`}
      />
      <div className="h-[50px] lg:h-[100px]"></div>
      <ContactSection imgSrc="map.png"/>
      <div className="h-[93px] lg:h-[100px]"></div>
    </main>
  );
}

export default ContactUs
