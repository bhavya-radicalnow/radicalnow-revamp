"use client";
import React, { useState } from "react";
import axios from "axios";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }

  const update = (k) => (e) => {
    setForm((s) => ({ ...s, [k]: e.target.value }));
    if (status) setStatus(null);
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email regex
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Please enter your contact number.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        contact_message: form.message
      };

      const res = await axios.post("https://api.veyari.org/api/v1/submit", payload, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000
      });

      // assume 200 means success (adapt if API returns different shape)
      if (res.status === 200) {
        setStatus({ type: "success", message: "Thanks — your message was sent!" });
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message:
            (res.data && res.data.error) ||
            `Unexpected response (${res.status}). Please try again later.`
        });
      }
    } catch (err) {
      console.error("Submit error:", err?.response?.data || err.message || err);
      // Try to extract an error message from the API
      const apiMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.response?.data ||
        err.message;
      setStatus({
        type: "error",
        message: typeof apiMsg === "string"
          ? apiMsg
          : "Submit failed. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        {/* Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left column */}
            <div className="md:col-span-1 flex flex-col justify-start">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
                Let’s Work <br /> Together
              </h2>

              <div className="mt-6 text-neutral-700">
                <p className="mb-1">Bangalore, KA, India</p>
                <a
                  href="mailto:hello@radicalnow.com"
                  className="text-neutral-800 underline"
                >
                  hello@radicalnow.com
                </a>
              </div>
            </div>

            {/* Right column (form) */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {status && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-md p-3 text-sm ${
                      status.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={update("name")}
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Contact Number</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={update("phone")}
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={update("email")}
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Express your requirement in few words"
                    rows={6}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-flex w-full items-center justify-center rounded-full px-8 py-3 font-semibold text-white shadow-md 
                               bg-gradient-to-r from-sky-500 to-indigo-600 hover:scale-[1.01] transition-transform ${
                                 loading ? "opacity-60 cursor-not-allowed" : ""
                               }`}
                  >
                    {loading ? "Sending..." : "Get In Touch"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="mt-8 flex items-center justify-between text-neutral-700">
          <div>© {new Date().getFullYear()} by Radicalnow</div>
        </div>
      </div>
    </section>
  );
}
