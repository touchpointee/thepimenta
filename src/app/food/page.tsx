import Image from 'next/image'
import { ChefHat, Coffee, Utensils } from 'lucide-react'

export default function FoodPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                        alt="Food Hero"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Culinary Delights</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-gray-100">
                        A journey through the flavors of Kerala, from farm to fork.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 space-y-6">
                            <span className="text-orange-500 font-bold tracking-widest uppercase">Our Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Fresh, Local, & <br /> Authentic
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At The Pimenta, food is an emotion. We believe in the power of fresh ingredients. Most of our vegetables, fruits, and spices are harvested directly from our organic farm.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our menu is a celebration of traditional Kerala cuisine, prepared with love and served with warmth. From the spicy fish curry to the comforting stew, every dish tells a story of our heritage.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1974&auto=format&fit=crop"
                                        alt="Spices"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop"
                                        alt="Biryani"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
                                        alt="Healthy Food"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop"
                                        alt="Cooking"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                                <ChefHat className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cooking Classes</h3>
                            <p className="text-gray-600">Learn to cook authentic Kerala dishes with our expert chefs in our open kitchen.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <Utensils className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Farm to Table</h3>
                            <p className="text-gray-600">Experience the freshness of ingredients picked straight from our organic garden.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                                <Coffee className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Breakfast</h3>
                            <p className="text-gray-600">Start your day with Appam, Puttu, or Idiyappam served with delicious stews.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
