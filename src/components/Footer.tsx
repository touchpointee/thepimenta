import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">The Pimenta</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Experience the authentic culture and culinary delights of Kerala in our sustainable homestay.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#about" className="hover:text-gray-900">About Us</Link></li>
                            <li><Link href="#tours" className="hover:text-gray-900">Our Tours</Link></li>
                            <li><Link href="#packages" className="hover:text-gray-900">Packages</Link></li>
                            <li><Link href="/admin" className="hover:text-gray-900">Admin Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                                <span>Haritha Farms, Kadalikad P.O.,<br />Thodupuzha, Kerala, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                                <span>+91 94473 02347</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                                <span>info@thepimenta.in</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} The Pimenta. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
