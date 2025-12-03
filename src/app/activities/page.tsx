import Image from 'next/image'
import { ArrowRight, MapPin, Clock } from 'lucide-react'

const ACTIVITIES = [
    {
        title: "Spice Plantation Walk",
        description: "Take a guided stroll through our organic spice gardens. Learn about the cultivation of pepper, cardamom, clove, nutmeg, and more. Smell the fresh spices and understand their journey from farm to table.",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
        duration: "1.5 Hours",
        location: "On-site"
    },
    {
        title: "Cooking Class",
        description: "Join our expert chefs in the kitchen for a hands-on cooking experience. Learn the secrets of traditional Kerala cuisine, from grinding spices to perfecting the art of making appams and curries.",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop",
        duration: "3 Hours",
        location: "The Pimenta Kitchen"
    },
    {
        title: "Rubber Tapping Experience",
        description: "Witness the process of rubber tapping in the early morning. Understand how natural rubber is harvested and processed in the local plantations.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
        duration: "1 Hour",
        location: "Nearby Plantation"
    },
    {
        title: "Village Walk & Tea Shop Visit",
        description: "Explore the charming village of Kadalikad. Walk through the lush green paths, interact with the friendly locals, and enjoy a cup of chai at a traditional tea shop.",
        image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1974&auto=format&fit=crop",
        duration: "2 Hours",
        location: "Kadalikad Village"
    }
]

export default function ActivitiesPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2070&auto=format&fit=crop"
                        alt="Activities Hero"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Activities</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-gray-100">
                        Immerse yourself in the authentic experiences of Kerala life.
                    </p>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {ACTIVITIES.map((activity, index) => (
                            <div key={index} className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-gray-900 flex items-center gap-2">
                                        <Clock className="w-4 h-4" /> {activity.duration}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                        <MapPin className="w-4 h-4" /> {activity.location}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {activity.description}
                                    </p>
                                    <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                        Book Experience <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
