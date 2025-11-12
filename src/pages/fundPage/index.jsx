import { processFundRecords } from "../../utils/function";
import fundRecords from "../../assets/data/fundData";

export default function FundPage() {
  const { displayRecords, totalFund } = processFundRecords(fundRecords);

  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 space-y-4 border border-gray-100">
        <h1 className="text-center text-2xl font-semibold">
          CRICKET FUND 2025-2026
        </h1>

        <p className="text-center text-sm text-gray-600">
          9002488997@upi || (gobinda chandra)
        </p>

        <div className="text-gray-400 text-center">
          :::::::::::::::::::::::::::::::::::::::::::::::
        </div>

        <p className="text-center text-base flex flex-col">
          <span>
            <span className="font-semibold mr-1">Total Fund : </span>{" "}
            <span className="text-emerald-400 font-semibold">
              ₹{totalFund}/-{" "}
            </span>
          </span>
          <span className="font-mono italic text-xs">{currentDate}</span>
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
                    <strong>Fund : </strong> ₹{record.totalFundUpto}/-
                  </span>
                </div>
              </div>

              {record.entries.map((entry, i) => (
                <div
                  key={i}
                  className="flex justify-start space-x-4 px-2 py-1 rounded hover:bg-gray-50 font-semibold"
                >
                  <span>{entry.title} :</span>
                  <span
                    className={`${
                      entry.amount >= 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {entry.amount >= 0 ? "+" : "-"}₹{Math.abs(entry.amount)}/-
                  </span>
                </div>
              ))}

              {/* 🔹 Notes (optional) */}
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
    </div>
  );
}
