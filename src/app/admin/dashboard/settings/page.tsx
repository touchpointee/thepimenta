'use client'

import { createClient } from '@/utils/supabase/client'
import { useState, useEffect } from 'react'
import { Loader2, Save } from 'lucide-react'

export default function SettingsEditor() {
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const supabase = createClient()
    const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'thepimenta'

    const [settings, setSettings] = useState({
        site_title: '',
        contact_email: '',
        contact_phone: '',
        contact_address: '',
        facebook_url: '',
        instagram_url: '',
        twitter_url: ''
    })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        try {
            const { data } = await supabase
                .from('site_settings')
                .select('key, value')
                .eq('site_id', siteId)

            if (data) {
                const newSettings = { ...settings }
                data.forEach((item: any) => {
                    if (item.key in newSettings) {
                        // @ts-ignore
                        newSettings[item.key] = item.value
                    }
                })
                setSettings(newSettings)
            }
        } catch (error) {
            console.error('Error fetching settings:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setMessage(null)

        try {
            const updates = Object.entries(settings).map(([key, value]) => {
                return supabase
                    .from('site_settings')
                    .upsert({
                        site_id: siteId,
                        key,
                        value
                    }, { onConflict: 'site_id, key' })
            })

            await Promise.all(updates)
            setMessage({ type: 'success', text: 'Settings saved successfully!' })
        } catch (err: any) {
            setMessage({ type: 'error', text: 'Failed to save settings: ' + err.message })
        } finally {
            setSaving(false)
        }
    }

    if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Site Settings</h1>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                {message && (
                    <div className={`mb-6 p-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSave} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">General Information</h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                                <input
                                    type="text"
                                    value={settings.site_title}
                                    onChange={(e) => setSettings({ ...settings, site_title: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                    placeholder="The Pimenta"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Contact Details</h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={settings.contact_email}
                                    onChange={(e) => setSettings({ ...settings, contact_email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                    placeholder="info@thepimenta.in"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    value={settings.contact_phone}
                                    onChange={(e) => setSettings({ ...settings, contact_phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                    placeholder="+91 94473 02347"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <textarea
                                    value={settings.contact_address}
                                    onChange={(e) => setSettings({ ...settings, contact_address: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                    placeholder="Haritha Farms..."
                                />
                            </div>
                        </div>

                        <div className="space-y-4 md:col-span-2">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Social Media Links</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                                    <input
                                        type="text"
                                        value={settings.facebook_url}
                                        onChange={(e) => setSettings({ ...settings, facebook_url: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                        placeholder="https://facebook.com/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                                    <input
                                        type="text"
                                        value={settings.instagram_url}
                                        onChange={(e) => setSettings({ ...settings, instagram_url: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                        placeholder="https://instagram.com/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
                                    <input
                                        type="text"
                                        value={settings.twitter_url}
                                        onChange={(e) => setSettings({ ...settings, twitter_url: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none"
                                        placeholder="https://twitter.com/..."
                                    />
                                </div>
                            </div>
                        </div>
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
