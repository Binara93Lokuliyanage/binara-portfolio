"use client";

import Image from "next/image";
import { useState } from "react";

type FormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

const FormDarkSection = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);

    // handle input change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // handle submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill required fields");
            return;
        }

        try {
            setLoading(true);
            setStatus(null);

            // 🔹 THIS will later call your Node API
            await new Promise((res) => setTimeout(res, 1500));

            setStatus("success");
            setFormData({ name: "", phone: "", email: "", message: "" });
        } catch (err) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-padding-top section-padding-bottom bg-dark">
            <div className="container form-container">
                <div className="cta-container card">
                    <div className="img-wrapper">
                        <Image
                            src="/page-divider.png"
                            alt="Project Image"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="form-wrapper">
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name *"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Contact number"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email address *"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <textarea
                                name="message"
                                placeholder="Tell me about your project *"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <button className="btn-primary" type="submit" disabled={loading}>
                                {loading ? "Sending..." : "Send Message "}
                            </button>

                            {status === "success" && (
                                <p className="form-success">Message sent successfully 🎉</p>
                            )}
                            {status === "error" && (
                                <p className="form-error">Something went wrong. Try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormDarkSection;