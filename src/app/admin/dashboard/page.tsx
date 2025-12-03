export default function DashboardOverview() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-gray-500 text-sm font-medium mb-2">Total Tours</h3>
                    <p className="text-3xl font-bold text-gray-900">3</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-gray-500 text-sm font-medium mb-2">Active Packages</h3>
                    <p className="text-3xl font-bold text-gray-900">2</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-gray-500 text-sm font-medium mb-2">Site Status</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-lg font-medium text-gray-900">Live</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome to your CMS</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                    Select a section from the sidebar to start editing your website content.
                    Changes are reflected immediately on the live site.
                </p>
            </div>
        </div>
    )
}
