function NoticePage() {
  const notices = [
    {
      title: "Fee Payment Deadline",
      date: "April 30, 2026",
      message: "Students must complete pending fee payments before the deadline to avoid late fees.",
      type: "important",
    },
    {
      title: "New Semester Registration",
      date: "May 5, 2026",
      message: "Registration for the upcoming semester will start from May 5th. Please update your profile details.",
      type: "info",
    },
    {
      title: "Maintenance Notice",
      date: "April 28, 2026",
      message: "The payment portal will be under maintenance from 12 AM to 3 AM.",
      type: "info",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Notices</h1>

      <div className="space-y-4">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-slate-700 bg-slate-900"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{notice.title}</h2>
              <span className="text-sm text-slate-400">{notice.date}</span>
            </div>

            <p className="text-slate-300">{notice.message}</p>

            <div className="mt-2">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  notice.type === "important"
                    ? "bg-red-500"
                    : "bg-blue-500"
                }`}
              >
                {notice.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NoticePage