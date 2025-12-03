import Image from 'next/image'
import { Check } from 'lucide-react'

const PACKAGES = [
    {
        title: "Kerala Cooking Holiday",
        duration: "4 Nights / 5 Days",
        price: "Contact for Price",
        description: "A comprehensive culinary journey through Kerala's flavors. Includes daily cooking sessions, market visits, and spice plantation tours.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
        features: [
            "Accommodation in deluxe rooms",
            "All meals included (Breakfast, Lunch, Dinner)",
            "Daily hands-on cooking classes",
            "Spice plantation tour",
            "Local market visit",
            "Airport transfers"
        ]
    },
    {
        title: "Wellness Retreat",
        duration: "7 Days",
        price: "Contact for Price",
        description: "Rejuvenate your mind and body with our wellness package. Includes yoga sessions, ayurvedic massages, and healthy organic meals.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
        features: [
            "7 nights accommodation",
            "Daily Yoga and Meditation sessions",
            "3 Ayurvedic massage treatments",
            "Organic vegetarian meals",
            "Nature walks",
            "Wellness consultation"
        ]
    },
    {
        title: "Adventure & Nature",
        duration: "3 Nights / 4 Days",
        price: "Contact for Price",
        description: "For the thrill-seekers and nature lovers. Trekking, kayaking, and exploring the wild side of Kerala.",
        image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2070&auto=format&fit=crop",
        features: [
            "Accommodation in eco-cottages",
            "Guided trekking expeditions",
            "Kayaking in the backwaters",
            "Bird watching tour",
            "Campfire and BBQ dinner",
            "Jeep safari"
        ]
    }
]

export default function PackagesPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                        alt="Packages Hero"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Exclusive Packages</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-gray-100">
                        Curated experiences designed to give you the best of The Pimenta.
                    </p>
                </div>
            </section>

            {/* Packages List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="space-y-16">
                        {PACKAGES.map((pkg, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2 w-full">
                                    <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full space-y-6">
                                    <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold tracking-wide">
                                        {pkg.duration}
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900">{pkg.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {pkg.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        {pkg.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 flex items-center gap-8">
                                        <div>
                                            <p className="text-sm text-gray-500">Starting from</p>
                                            <p className="text-2xl font-bold text-gray-900">{pkg.price}</p>
                                        </div>
                                        <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
