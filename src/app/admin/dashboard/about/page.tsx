'use client'

import { createClient } from '@/utils/supabase/client'
import { useState, useEffect } from 'react'
import { Loader2, Save, Plus, Trash2 } from 'lucide-react'

export default function AboutEditor() {
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const supabase = createClient()
    const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'thepimenta'

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        features: [] as { title: string; description: string; icon: string }[]
    })

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
                .eq('section_key', 'about')
                .single()

            if (data?.content) {
                setFormData(data.content)
            }
        } catch (error) {
            console.error('Error fetching about data:', error)
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
                .eq('section_key', 'about')
                .single()

            let error
            if (existing) {
                const { error: updateError } = await supabase
                    .from('sections')
                    .update({ content: formData })
                    .eq('id', existing.id)
                error = updateError
            } else {
                const { error: insertError } = await supabase
                    .from('sections')
                    .insert({
                        site_id: siteId,
                        section_key: 'about',
                        title: 'About Section',
                        content: formData
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

    const addFeature = () => {
        setFormData({
            ...formData,
            features: [...formData.features, { title: '', description: '', icon: 'Leaf' }]
        })
    }

    const removeFeature = (index: number) => {
        const newFeatures = [...formData.features]
        newFeatures.splice(index, 1)
        setFormData({ ...formData, features: newFeatures })
    }

    const updateFeature = (index: number, field: string, value: string) => {
        const newFeatures = [...formData.features]
        newFeatures[index] = { ...newFeatures[index], [field]: value }
        setFormData({ ...formData, features: newFeatures })
    }

    if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit About Section</h1>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                {message && (
                    <div className={`mb-6 p-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSave} className="space-y-8">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                placeholder="Why The Pimenta"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                placeholder="Main introduction text..."
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                            <button type="button" onClick={addFeature} className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                <Plus className="w-4 h-4" /> Add Feature
                            </button>
                        </div>

                        <div className="grid gap-6">
                            {formData.features.map((feature, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100 relative group">
                                    <button
                                        type="button"
                                        onClick={() => removeFeature(index)}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                                            <input
                                                type="text"
                                                value={feature.title}
                                                onChange={(e) => updateFeature(index, 'title', e.target.value)}
                                                className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-1">Icon (Leaf, Users, ChefHat)</label>
                                            <select
                                                value={feature.icon}
                                                onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                                                className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                                            >
                                                <option value="Leaf">Leaf (Nature)</option>
                                                <option value="Users">Users (Culture)</option>
                                                <option value="ChefHat">ChefHat (Culinary)</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                                            <input
                                                type="text"
                                                value={feature.description}
                                                onChange={(e) => updateFeature(index, 'description', e.target.value)}
                                                className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4">
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
