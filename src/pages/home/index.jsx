export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-2xl p-6 space-y-4 border border-gray-100">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-wide">
            CRICKET FUND 2025-2026
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            9002488997@upi (Gobinda Chandra)
          </p>
        </div>

        {/* Divider */}
        <div className="text-gray-300 text-center select-none">
          :::::::::::::::::::::::::::::::::::::::::::::::::::
        </div>

        {/* Season Summary */}
        <div className="text-center space-y-1">
          <p className="text-sm font-medium text-gray-700">
            | SEASON 2025 - 2026 |
          </p>
          <p className="text-base">
            <span className="font-semibold">Total Fund:</span> ₹100/-
          </p>
          <p className="text-sm text-gray-500">(-12 Nov, 2025)</p>
        </div>

        {/* Divider */}
        <div className="text-gray-300 text-center select-none">
          :::::::::::::::::::::::::::::::::::::::::::::::::::
        </div>

        {/* Transaction Info */}
        <div className="text-right text-sm space-y-1">
          <p>... 12 Nov, 2025</p>
          <p>
            <span className="font-semibold">Fund :</span> ₹100/-
          </p>
        </div>

        {/* Contribution List */}
        <div className="pt-2">
          <p className="text-gray-700 text-base font-medium">
            1. Gobinda Chandra :{" "}
            <span className="text-green-600 font-semibold">+ ₹100/-</span>
          </p>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-200 pt-2 text-center text-gray-400 text-xs">
          ---------------------------------------------------
        </div>
      </div>
    </div>
  );
}
