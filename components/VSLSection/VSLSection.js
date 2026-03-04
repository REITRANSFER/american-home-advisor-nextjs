'use client';

export default function VSLSection() {
  return (
    <div className="w-full max-w-3xl">
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
        {/* Replace with your video embed */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg font-medium text-white">Video Coming Soon</p>
            <p className="mt-1 text-sm text-gray-400">Learn how we can help you sell fast</p>
          </div>
        </div>
      </div>
    </div>
  );
}
