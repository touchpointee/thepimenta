'use client'

import { createClient } from '@/utils/supabase/client'
import { useState, useEffect } from 'react'
import { Loader2, Save, Plus, Trash2, Image as ImageIcon } from 'lucide-react'

export default function ToursEditor() {
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const supabase = createClient()
    const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'thepimenta'

    const [tours, setTours] = useState<{ title: string; description: string; image: string }[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        try {
            const { data } = await supabase
                .from('sections')
                .select('content')
                .eq('site_id', siteId)
                .eq('section_key', 'tours')
                .single()

            if (data?.content?.tours) {
                setTours(data.content.tours)
            }
        } catch (error) {
            console.error('Error fetching tours data:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setMessage(null)

        try {
            const { data: existing } = await supabase
                .from('sections')
                .select('id')
                .eq('site_id', siteId)
                .eq('section_key', 'tours')
                .single()

            const content = { tours }

            let error
            if (existing) {
                const { error: updateError } = await supabase
                    .from('sections')
                    .update({ content })
                    .eq('id', existing.id)
                error = updateError
            } else {
                const { error: insertError } = await supabase
                    .from('sections')
                    .insert({
                        site_id: siteId,
                        section_key: 'tours',
                        title: 'Our Tours',
                        content
                    })
                error = insertError
            }

            if (error) throw error
            setMessage({ type: 'success', text: 'Changes saved successfully!' })
        } catch (err: any) {
            setMessage({ type: 'error', text: 'Failed to save changes: ' + err.message })
        } finally {
            setSaving(false)
        }
    }

    const addTour = () => {
        setTours([...tours, { title: '', description: '', image: '' }])
    }

    const removeTour = (index: number) => {
        const newTours = [...tours]
        newTours.splice(index, 1)
        setTours(newTours)
    }

    const updateTour = (index: number, field: string, value: string) => {
        const newTours = [...tours]
        newTours[index] = { ...newTours[index], [field]: value }
        setTours(newTours)
    }

    if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Edit Tours</h1>
                <button
                    onClick={addTour}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" /> Add Tour
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                {message && (
                    <div className={`mb-6 p-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSave} className="space-y-8">
                    <div className="grid gap-6">
                        {tours.map((tour, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative group">
                                <button
                                    type="button"
                                    onClick={() => removeTour(index)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-1">Tour Title</label>
                                            <input
                                                type="text"
                                                value={tour.title}
                                                onChange={(e) => updateTour(index, 'title', e.target.value)}
                                                className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                                                placeholder="e.g., Local Landmarks"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                                            <textarea
                                                value={tour.description}
                                                onChange={(e) => updateTour(index, 'description', e.target.value)}
                                                rows={3}
                                                className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                                                placeholder="Brief description of the tour..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Image URL</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={tour.image}
                                                onChange={(e) => updateTour(index, 'image', e.target.value)}
                                                className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                                                placeholder="https://..."
                                            />
                                        </div>
                                        {tour.image && (
                                            <div className="mt-2 relative h-32 w-full rounded-lg overflow-hidden bg-gray-200">
                                                <img src={tour.image} alt="Preview" className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        {!tour.image && (
                                            <div className="mt-2 h-32 w-full rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                                <ImageIcon className="w-8 h-8" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {tours.length === 0 && (
                            <div className="text-center py-12 text-gray-500">
                                No tours added yet. Click "Add Tour" to get started.
                            </div>
                        )}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 flex items-center gap-2"
                        >
                            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
