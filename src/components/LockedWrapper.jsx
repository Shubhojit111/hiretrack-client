import { Lock, Sparkles } from "lucide-react";

export default function LockedWrapper({ children, feature, message }) {
  return (
    <div className="relative rounded-2xl overflow-hidden">

      {/* Blurred Content */}
      <div className="blur-md pointer-events-none select-none opacity-60">
        {children}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-sm">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 text-center max-w-md w-full mx-6">

          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <Lock className="text-white" size={28} />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-2">
            {feature || "Premium Feature"}
          </h2>

          <p className="text-sm text-gray-300 mb-6">
            {message || "This feature is currently under development."}
          </p>

          <button className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:scale-105 transition-all duration-200">
            <Sparkles size={16} />
            Coming Soon
          </button>

        </div>
      </div>
    </div>
  );
}