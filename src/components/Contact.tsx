"use client"

import { useState } from "react"
import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { TextField, TextAreaField } from "@/components/Fields"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
    mailingList: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ firstName: "", email: "", message: "", mailingList: false })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <section
      id="contact"
      aria-label="Contact Green Mountain Cannabis"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Ready to partner with Colorado&apos;s premier cannabis wholesaler? <br />
            Contact Green Mountain Cannabis today.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          {isSubmitted ? (
            <div className="rounded-2xl bg-primary/10 p-8 text-center">
              <h3 className="font-display text-2xl text-slate-900">
                Thank you!
              </h3>
              <p className="mt-2 text-slate-700">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-8 shadow-xl shadow-slate-900/10"
            >
              <div className="space-y-6">
                <TextField
                  label="First Name"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />

                <TextAreaField
                  label="Your Message"
                  name="message"
                  required
                  value={formData.message}
                  placeholder="Enter your message here"
                />

                <div className="flex items-center">
                  <input
                    id="mailingList"
                    name="mailingList"
                    type="checkbox"
                    checked={formData.mailingList}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="mailingList"
                    className="ml-3 text-sm text-gray-700"
                  >
                    Sign up for our mailing list
                  </label>
                </div>

                <Button type="submit" className="w-full bg-primary">
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
