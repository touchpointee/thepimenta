import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChefHat, Leaf, Users } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'

// Fallback data
const FALLBACK_DATA = {
    hero: {
        title: "Discover the Essence of Kerala",
        subtitle: "Experience the authentic culture, culinary delights, and sustainable living at The Pimenta.",
        cta: "Book Your Stay",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop"
    },
    about: {
        title: "Why The Pimenta",
        description: "Nestled in the lush lands of Haritha Farms, The Pimenta offers a unique homestay experience. Immerse yourself in sustainable tourism, regional cuisine, and cultural diversity.",
        features: [
            { title: "Nature's Bounty", icon: "Leaf", description: "Reconnect with nature amidst spice gardens and coconut groves." },
            { title: "Cultural Encounters", icon: "Users", description: "Delve into local art forms and community life." },
            { title: "Culinary Delights", icon: "ChefHat", description: "Hands-on cooking experiences with fresh, local ingredients." }
        ]
    },
    tours: [
        { title: "Local Landmarks", description: "Explore the hidden gems of Thodupuzha and nearby attractions.", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1935&auto=format&fit=crop" },
        { title: "Spice Garden Walk", description: "A guided tour through our organic spice plantations.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" },
        { title: "Village Life", description: "Experience the slow pace and warm hospitality of Kerala villages.", image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1974&auto=format&fit=crop" }
    ],
    packages: [
        { title: "Kerala Cooking Holiday", duration: "4 Nights 5 Days", price: "Contact for Price", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" },
        { title: "Wellness Retreat", duration: "7 Days", price: "Contact for Price", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" }
    ]
}

export default async function Home() {
    const supabase = await createClient()
    const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'thepimenta'

    let content = { ...FALLBACK_DATA }

    try {
        const { data: sections } = await supabase
            .from('sections')
            .select('section_key, content')
            .eq('site_id', siteId)

        if (sections) {
            sections.forEach(section => {
                if (section.section_key === 'hero' && section.content) {
                    content.hero = { ...content.hero, ...section.content }
                }
                if (section.section_key === 'about' && section.content) {
                    content.about = { ...content.about, ...section.content }
                }
                if (section.section_key === 'tours' && section.content?.tours) {
                    content.tours = section.content.tours
                }
                if (section.section_key === 'packages' && section.content?.packages) {
                    content.packages = section.content.packages
                }
            })
        }
    } catch (e) {
        console.warn("Using fallback data, DB connection failed or empty.")
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden pt-20 pb-12 lg:py-0">
                <HeroCarousel images={[
                    content.hero.image || FALLBACK_DATA.hero.image,
                    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1974&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                ]} />

                <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight">
                            Welcome to <br />
                            <span className="text-white">The Pimenta</span>
                        </h1>
                        <p className="text-xl md:text-3xl font-light text-white/90">
                            Adventure and Tranquility
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-4 md:p-6 shadow-2xl max-w-md ml-auto w-full">
                        <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                            <div className="bg-gray-100 p-2 rounded-lg">
                                <ChefHat className="w-5 h-5 text-gray-700" />
                            </div>
                            <span className="font-semibold text-gray-900">Discover Homestay</span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Location</label>
                                <div className="bg-gray-50 p-3 rounded-xl flex items-center gap-3">
                                    <Leaf className="w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value="Haritha Farms, Kerala"
                                        readOnly
                                        className="bg-transparent w-full outline-none text-gray-900 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Check - In</label>
                                    <div className="bg-gray-50 p-3 rounded-xl flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                                        <span className="text-sm font-medium text-gray-900">Sun, 28/02/2024</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Duration</label>
                                    <div className="bg-gray-50 p-3 rounded-xl flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                                        <span className="text-sm font-medium text-gray-900">1 Night</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Guests And Rooms</label>
                                <div className="bg-gray-50 p-3 rounded-xl flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-900">3 Adult, 1 Child</span>
                                    <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                                </div>
                            </div>

                            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors mt-4">
                                Search Availability
                            </button>
                        </div>
                    </div>
                </div>


            </section>

            {/* About Section */}
            {/* About Section */}
            <section id="about" className="py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 space-y-8">
                            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Since 2024</span>
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                A Popular Tourist <br />
                                Hotspot Beach
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                                Embark on an Oasis Adventure: Discover the vibrant charms, scenic allure, and serene atmosphere of Lombok's beloved tourist hotspot beach.
                            </p>
                            <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                                Get Started
                            </button>
                        </div>

                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                            {content.about.features?.map((feature: any, index: number) => (
                                <div key={index} className="relative group overflow-hidden rounded-3xl h-64">
                                    <Image
                                        src={`https://images.unsplash.com/photo-${index === 0 ? '1590050752117-238cb0fb12b1' : '1596040033229-a9821ebd058d'}?q=80&w=800&auto=format&fit=crop`}
                                        alt={feature.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                                        <h3 className="text-white font-bold text-xl">{feature.title}</h3>
                                        <p className="text-white/80 text-sm mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <span className="text-orange-500 font-bold tracking-widest uppercase">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Slow Living in Harmony with Nature
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At The Pimenta, we believe in the luxury of simplicity. Our philosophy is rooted in the concept of 'Slow Living' – taking the time to appreciate the little things, connecting with the environment, and nourishing the soul. We invite you to step away from the rush of modern life and embrace the rhythm of nature.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Every aspect of your stay, from the food on your plate to the linen on your bed, is curated with care and mindfulness. We strive to create an atmosphere where you can unwind, rejuvenate, and find peace in the verdant embrace of our spice gardens.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop"
                        alt="Sustainability Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <span className="text-green-400 font-bold tracking-widest uppercase">Sustainability</span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Committed to a <br /> Greener Future
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                We are proud stewards of the land we inhabit. Our commitment to sustainability goes beyond just words; it is a way of life at The Pimenta. We practice organic farming, ensuring that no harmful chemicals touch our soil or your food.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="text-gray-200">Rainwater harvesting and water conservation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="text-gray-200">Solar energy utilization for heating and lighting</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="text-gray-200">Zero-waste initiatives and composting</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="text-gray-200">Supporting local artisans and fair trade</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border-4 border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                                alt="Sustainability"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section id="activities" className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experiences & <br /> Activities</h2>
                            <p className="text-gray-500 max-w-md">Discover the vibrant charms and serene atmosphere of our homestay through curated activities.</p>
                        </div>
                        <Link href="/activities" className="hidden md:block px-6 py-3 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white transition-all">
                            View All Activities
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Spice Walk", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop", tag: "Nature" },
                            { title: "Cooking Class", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop", tag: "Culinary" },
                            { title: "Village Tour", image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800&auto=format&fit=crop", tag: "Culture" }
                        ].map((item, index) => (
                            <div key={index} className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white border border-white/20">{item.tag}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <button className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            {/* Packages Section */}
            <section id="packages" className="py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Exclusive Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {content.packages?.map((pkg: any, index: number) => (
                            <div key={index} className="bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 md:h-80 rounded-[2rem] overflow-hidden mb-6">
                                    <Image
                                        src={pkg.image || `https://images.unsplash.com/photo-${index === 0 ? '1512621776951-a57141f2eefd' : '1544161515-4ab6ce6db874'}?q=80&w=800&auto=format&fit=crop`}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-gray-900">
                                        {pkg.duration}
                                    </div>
                                </div>
                                <div className="px-4 pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">{pkg.title}</h3>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500">Starting from</p>
                                            <p className="text-xl font-bold text-orange-500">{pkg.price}</p>
                                        </div>
                                    </div>
                                    <button className="w-full py-4 border border-gray-200 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for an Unforgettable Experience?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Book your stay at The Pimenta today and immerse yourself in the true essence of Kerala.
                    </p>

                </div>
            </section>
        </div>
    )
}
