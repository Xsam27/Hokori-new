'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = {
      name,
      email,
      message,
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e5084210-e57f-48c8-92a4-bd147b00850e',
          ...formData
        })
      })

      const result = await response.json()
      if (result.success) {
        setSubmitStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-purple-600 mb-6">Get in touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-full bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-full bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-2xl bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full hover:from-pink-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit →'}
                  </button>
                </div>
              </form>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600">Thank you for your message. We'll get back to you soon!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600">There was an error submitting your message. Please try again.</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 rounded-full opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <svg className="w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#A78BFA" d="M47.1,-57.5C59.9,-47.3,68.5,-31.6,72.5,-14.2C76.4,3.2,75.7,22.2,67.4,37.3C59.1,52.4,43.3,63.5,25.9,69.2C8.6,74.9,-10.2,75.2,-26.9,69.3C-43.6,63.4,-58.2,51.3,-67.1,35.7C-75.9,20.1,-79,1,-74.6,-15.3C-70.2,-31.7,-58.3,-45.3,-44.5,-55.2C-30.7,-65.1,-15.3,-71.3,1,-72.5C17.3,-73.7,34.3,-67.8,47.1,-57.5Z" transform="translate(100 100)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold">We'd love to hear from you!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

