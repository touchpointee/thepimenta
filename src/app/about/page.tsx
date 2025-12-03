import Image from 'next/image'
import { Leaf, Users, ChefHat } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
                        alt="About Hero"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">About Us</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-gray-100">
                        Discover the story behind The Pimenta and our passion for sustainable hospitality.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1935&auto=format&fit=crop"
                                    alt="Our Story"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <span className="text-orange-500 font-bold tracking-widest uppercase">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                A Tradition of <br /> Warmth & Hospitality
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Nestled in the lush lands of Haritha Farms, The Pimenta is more than just a homestay; it's a celebration of Kerala's rich heritage. Founded with a vision to offer authentic experiences, we invite you to immerse yourself in our culture, cuisine, and community.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our journey began with a simple idea: to share the beauty of our spice gardens and the flavors of our kitchen with the world. Today, we are proud to host travelers from across the globe, offering them a home away from home.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <Leaf className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
                            <p className="text-gray-600">We are committed to eco-friendly practices, from organic farming to waste management, ensuring a greener future.</p>
                        </div>
                        <div className="text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
                            <p className="text-gray-600">We believe in empowering our local community by sourcing locally and supporting local artisans and traditions.</p>
                        </div>
                        <div className="text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="w-20 h-20 mx-auto mb-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                                <ChefHat className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Authenticity</h3>
                            <p className="text-gray-600">Experience the true flavors of Kerala with our home-cooked meals prepared using fresh ingredients from our farm.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
