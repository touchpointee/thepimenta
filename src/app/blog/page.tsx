import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

const BLOG_POSTS = [
    {
        title: "The Secret to Authentic Kerala Fish Curry",
        excerpt: "Discover the blend of spices that makes Kerala's fish curry a world-renowned delicacy. Our chef shares some tips from the Pimenta kitchen.",
        date: "March 15, 2024",
        author: "Chef Jacob",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
        category: "Food & Recipes"
    },
    {
        title: "Sustainable Living at Haritha Farms",
        excerpt: "How we maintain an eco-friendly ecosystem at our homestay, from rainwater harvesting to organic waste management.",
        date: "March 10, 2024",
        author: "Mathew",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
        category: "Sustainability"
    },
    {
        title: "Top 5 Hidden Gems in Thodupuzha",
        excerpt: "Explore the lesser-known attractions around Thodupuzha that offer breathtaking views and serene experiences away from the crowds.",
        date: "March 05, 2024",
        author: "Sarah",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1935&auto=format&fit=crop",
        category: "Travel Guide"
    }
]

export default function BlogPage() {
    return (
        <div className="pt-24">
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900">Our Blog</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Stories, recipes, and travel tips from The Pimenta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {BLOG_POSTS.map((post, index) => (
                            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" /> {post.author}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors cursor-pointer">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link href="#" className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
