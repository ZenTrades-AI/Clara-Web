import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactUs = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        document.body.appendChild(script);

        script.onload = () => {
            // @ts-ignore
            if (window.hbspt) {
                // @ts-ignore
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "45865556",
                    formId: "c3428dcb-b18c-4277-b463-b7869c42800f",
                    target: "#hubspot-contact-form",
                });
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Contact Us | Clara AI</title>
                <meta
                    name="description"
                    content="Get in touch with the Clara AI team. We're here to help roofing companies inspect faster, answer every call, and collect payments automatically."
                />
            </Helmet>

            <Navigation />

            <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-white via-[#fafafa] to-[#ffecef]">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Contact Us
                    </h1>
                    <p className="text-lg text-slate-600">
                        Have questions? We'd love to hear from you. Fill out the form below
                        and we'll get back to you shortly.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                    <div id="hubspot-contact-form"></div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
