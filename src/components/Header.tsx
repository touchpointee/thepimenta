'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    // Check if we are on the home page
    const isHomePage = pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Determine header style based on scroll and page
    // On Home: Transparent -> White on scroll
    // On Other Pages: Always White (or consistent style)
    const headerClass = isScrolled || !isHomePage
        ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
        : "bg-transparent py-6"

    const textClass = isScrolled || !isHomePage
        ? "text-gray-900"
        : "text-white"

    const buttonClass = isScrolled || !isHomePage
        ? "bg-gray-900 text-white hover:bg-gray-800"
        : "bg-white text-gray-900 hover:bg-gray-100"

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors ${textClass}`}>
                    The Pimenta
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        ['Home', '/'],
                        ['About Us', '/about'],
                        ['Activities', '/activities'],
                        ['Food', '/food'],
                        ['Packages', '/packages'],
                        ['Gallery', '/gallery'],
                        ['Blog', '/blog'],
                        ['Contact', '/contact'],
                    ].map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-sm font-medium transition-colors hover:opacity-70 ${textClass}`}
                        >
                            {label}
                        </Link>
                    ))}

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 ${textClass}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 md:hidden">
                    {[
                        ['Home', '/'],
                        ['About Us', '/about'],
                        ['Activities', '/activities'],
                        ['Food', '/food'],
                        ['Packages', '/packages'],
                        ['Gallery', '/gallery'],
                        ['Blog', '/blog'],
                        ['Contact', '/contact'],
                    ].map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-gray-900 font-medium py-2 border-b border-gray-50 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}

                </div>
            )}
        </header>
    )
}
