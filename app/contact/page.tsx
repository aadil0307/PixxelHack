"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Navigation from "@/components/navigation"
import RippleEffect from "@/components/ripple-effect"
import ScrambledText from "@/components/scrambled-text"
import { AnimatePresence } from "framer-motion"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send data to the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      console.log("Form submitted:", formData)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitStatus('idle')
      }, 3000)

    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <RippleEffect />
      <Navigation />

      <main className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <ScrambledText 
              text="GET IN TOUCH" 
              className="text-6xl md:text-8xl font-light tracking-wider mb-8" 
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions about our platform? Want to collaborate? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-8">Send us a message</h2>
              
              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-green-900 border border-green-500 rounded-lg"
                  >
                    <p className="text-green-300">✅ Message sent successfully! We'll get back to you soon.</p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-red-900 border border-red-500 rounded-lg"
                  >
                    <p className="text-red-300">❌ Something went wrong. Please try again or contact us directly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-gray-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-700 focus:border-white'
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-700 focus:border-white'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-gray-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-gray-700 focus:border-white'
                    }`}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="artist">Artist Application</option>
                    <option value="collector">Collector Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="technical">Technical Support</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full bg-gray-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-700 focus:border-white'
                    }`}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 text-lg font-medium transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-light mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Email",
                      value: "hello@pixxelhack.com",
                      description: "For general inquiries and support"
                    },
                    {
                      title: "Artist Applications",
                      value: "artists@pixxelhack.com",
                      description: "Submit your portfolio and join our community"
                    },
                    {
                      title: "Partnerships",
                      value: "partnerships@pixxelhack.com",
                      description: "Collaborate with us on exciting projects"
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 bg-gray-900 rounded-lg"
                    >
                      <h3 className="text-lg font-medium mb-2">{contact.title}</h3>
                      <p className="text-white mb-1">{contact.value}</p>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-light mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: "Twitter", href: "#" },
                    { name: "Discord", href: "#" },
                    { name: "Instagram", href: "#" },
                    { name: "LinkedIn", href: "#" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <ScrambledText 
                text="FREQUENTLY ASKED" 
                className="text-4xl md:text-6xl font-light tracking-wider mb-6" 
              />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How do I apply as an artist?",
                  answer: "Submit your portfolio through our artist application form. We review applications monthly and will contact you within 2 weeks."
                },
                {
                  question: "What are the fees for selling NFTs?",
                  answer: "We charge a 2.5% platform fee on successful sales. Gas fees are paid by the buyer during transactions."
                },
                {
                  question: "How do I become a verified collector?",
                  answer: "Collectors are verified based on their transaction history and community engagement. Apply through our collector program."
                },
                {
                  question: "What blockchain do you support?",
                  answer: "We currently support Ethereum and Polygon networks, with plans to expand to other chains soon."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gray-900 rounded-lg"
                >
                  <h3 className="text-xl font-light mb-4">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Office Locations */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <ScrambledText 
                text="OUR OFFICES" 
                className="text-4xl md:text-6xl font-light tracking-wider mb-6" 
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  city: "San Francisco",
                  address: "123 Innovation Drive",
                  country: "United States",
                  timezone: "PST"
                },
                {
                  city: "London",
                  address: "456 Tech Square",
                  country: "United Kingdom",
                  timezone: "GMT"
                },
                {
                  city: "Tokyo",
                  address: "789 Digital Avenue",
                  country: "Japan",
                  timezone: "JST"
                }
              ].map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gray-900 rounded-lg text-center"
                >
                  <h3 className="text-2xl font-light mb-4">{office.city}</h3>
                  <p className="text-gray-400 mb-2">{office.address}</p>
                  <p className="text-gray-500 text-sm">{office.country}</p>
                  <p className="text-gray-500 text-sm">{office.timezone}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 