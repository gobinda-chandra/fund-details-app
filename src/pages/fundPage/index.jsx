import { processFundRecords } from "../../utils/function";
import fundRecords from "../../assets/data/fundData";
import { QrCode, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FundPage() {
  const { displayRecords, totalFund } = processFundRecords(fundRecords);
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4 relative">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 space-y-4 border border-gray-100">
          <h1 className="text-center text-2xl font-semibold tracking-wide">
            CRICKET FUND 2025-2026
          </h1>

          {/* 🔹 Centered UPI info section */}
          <div className="flex flex-col items-center text-center text-sm space-y-1 text-gray-600 relative">
            <div className="relative flex items-center justify-center w-full">
              <p className="text-sky-400 font-semibold text-center">
                9002488997@upi
              </p>
              <button
                onClick={() => setIsQRCodeOpen(true)}
                className="absolute left-[calc(50%-(-70px))] top-0.5 cursor-pointer hover:text-sky-500 transition"
              >
                <QrCode className="h-4 w-4" />
              </button>
            </div>
            <span className="text-slate-400 text-[10px] tracking-wider">
              gobinda chandra
            </span>
          </div>

          <div className="text-gray-300 text-center select-none">
            :::::::::::::::::::::::::::::::::::::::::::::::
          </div>

          <p className="text-center text-base flex flex-col">
            <span className="uppercase text-xs text-slate-400">Total Fund</span>
            <span
              className={`${
                totalFund > 0 ? "text-emerald-400" : "text-red-600"
              } font-bold text-4xl`}
            >
              ₹{totalFund}/-
            </span>

            <span className="font-mono italic text-xs mt-3">{currentDate}</span>
          </p>

          {/* 🔹 Fund Records */}
          <div className="space-y-6">
            {displayRecords.map((record) => (
              <div
                key={record.date}
                className="border-t border-gray-200 pt-4 text-sm"
              >
                <div className="text-end text-gray-600 mb-2">
                  <div className="flex flex-col space-y-1">
                    <span>
                      ...{" "}
                      {new Date(record.date).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>
                      <strong>Fund : </strong>
                      <span
                        className={`${
                          record.totalFundUpto > 0
                            ? "text-emerald-400"
                            : "text-red-600"
                        } font-semibold`}
                      >
                        ₹{record.totalFundUpto}/-
                      </span>
                    </span>
                  </div>
                </div>

                {record.entries.map((entry, i) => (
                  <div
                    key={i}
                    className="flex justify-start space-x-4 px-2 py-1 rounded hover:bg-gray-50 font-semibold"
                  >
                    <span>
                      {i + 1}. {entry.title} :
                    </span>
                    <span
                      className={`${
                        entry.amount >= 0 ? "text-emerald-400" : "text-red-500"
                      }`}
                    >
                      {entry.amount >= 0 ? "+" : "-"}₹{Math.abs(entry.amount)}/-
                    </span>
                  </div>
                ))}

                {/* 🔹 Notes */}
                {record.notes && (
                  <div className="mt-3 bg-gray-50 rounded-lg p-2 text-gray-700">
                    <p className="font-semibold text-sm mb-1">
                      {record.notes.title.toUpperCase()}
                    </p>
                    {typeof record.notes.description === "string" ? (
                      <p className="text-xs">{record.notes.description}</p>
                    ) : Array.isArray(record.notes.description) ? (
                      <ul className="text-xs list-disc ml-5 space-y-1">
                        {record.notes.description.map((d, idx) => (
                          <li key={idx}>
                            {d.name}: ₹{d.amount}/-
                          </li>
                        ))}
                      </ul>
                    ) : typeof record.notes.description === "object" ? (
                      <pre className="text-xs bg-gray-100 p-2 rounded">
                        {JSON.stringify(record.notes.description, null, 2)}
                      </pre>
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 QR Code Dialog with Framer Motion */}
        <AnimatePresence>
          {isQRCodeOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQRCodeOpen(false)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-6 relative w-96 flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 40 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsQRCodeOpen(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
                <h2 className="text-sm font-semibold text-gray-600 mb-2">
                  UPI QR Code
                </h2>
                <img
                  src="/qr.png"
                  alt="UPI QR Code"
                  className="w-64 h-64 rounded-lg shadow-inner border border-gray-200"
                />
                <p className="text-xs text-gray-500 mt-3">9002488997@upi</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
