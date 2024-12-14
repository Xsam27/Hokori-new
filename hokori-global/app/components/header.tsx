'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/hokori-logo.svg"
            alt="Hokori Global Supporting Services"
            width={150}
            height={50}
            priority
            className={isScrolled ? 'filter-none' : 'filter invert'}
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className={`transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-300`}>About</Link>
          <Link href="/services" className={`transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-300`}>Services</Link>
          <Link href="/projects" className={`transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-300`}>Projects</Link>
          <Link href="/contact" className={`transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-300`}>Contact</Link>
        </div>
        <button className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white w-full absolute top-full left-0 py-2 shadow-md"
        >
          <Link href="/about" className="block px-6 py-2 hover:bg-gray-100">About</Link>
          <Link href="/services" className="block px-6 py-2 hover:bg-gray-100">Services</Link>
          <Link href="/projects" className="block px-6 py-2 hover:bg-gray-100">Projects</Link>
          <Link href="/contact" className="block px-6 py-2 hover:bg-gray-100">Contact</Link>
        </motion.div>
      )}
    </header>
  )
}

export default Header

