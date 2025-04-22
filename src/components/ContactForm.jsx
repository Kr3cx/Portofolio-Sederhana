import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://formspree.io/f/xoqgplnk", form);

      if (res.status === 200) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.");
      console.log(error);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold">Thank you for your message!</h2>
        <p className="text-sm text-gray-500">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      className="form-control max-w-md mx-auto gap-4 bg-base-100 shadow-lg p-6 rounded-xl flex flex-col"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-center">Contact Me</h2>

      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Name</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Mohammad Kresna"
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Email</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Message</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Type your message here..."
          rows={4}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-full mt-6">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
