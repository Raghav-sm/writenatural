function App() {
  return (
    <div className="min-h-screen bg-[#FEFCF9] flex items-center justify-center px-6">
      <div className="w-full max-w-3xl space-y-8">
        {/* Heading */}
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-semibold text-[#6366F1]">
            Tailwind Test Page
          </h1>
          <p className="text-gray-600">
            If this looks styled, Tailwind is working correctly.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Deep Purple</h3>
            <p className="text-sm text-gray-600 mt-2">
              Used for emphasis and interactions.
            </p>
            <div className="mt-4 h-2 w-full bg-[#6366F1]" />
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Warm Coral</h3>
            <p className="text-sm text-gray-600 mt-2">
              Used for highlights and CTAs.
            </p>
            <div className="mt-4 h-2 w-full bg-[#F97316]" />
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Emerald Green</h3>
            <p className="text-sm text-gray-600 mt-2">
              Used for success states.
            </p>
            <div className="mt-4 h-2 w-full bg-[#10B981]" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-[#6366F1] text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/40">
            Primary Action
          </button>

          <button className="px-6 py-3 bg-[#F97316] text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#F97316]/40">
            Highlight Action
          </button>

          <button className="px-6 py-3 bg-[#10B981] text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#10B981]/40">
            Success Action
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pt-4">
          Tailwind utilities • spacing • colors • hover • focus
        </footer>
      </div>
    </div>
  );
}

export default App;
