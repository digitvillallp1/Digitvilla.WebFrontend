import {
  Bell,
  CalendarDays,
  ChevronRight,
  AlertCircle,
  Info,
  CheckCircle,
} from "lucide-react";
import UserSidebar from "../components/user-dashboard/UserSidebar";
import UserHeader from "../components/user-dashboard/UserHeader";

const notices = [
  {
    title: "July 2026 Payment Reminder",
    date: "10 Jul 2026",
    type: "Important",
    message:
      "Users are requested to complete pending payments before 15 Jul 2026.",
    icon: AlertCircle,
    color: "text-[#dc2626]",
    bg: "bg-[#fff0f0]",
    border: "border-[#ffd2d2]",
  },
  {
    title: "New Plan Features Updated",
    date: "05 Jul 2026",
    type: "General",
    message:
      "The updated features for Digital Marketing plans are now available.",
    icon: Info,
    color: "text-[#25249c]",
    bg: "bg-[#eef0ff]",
    border: "border-[#ccd2ff]",
  },
  {
    title: "Invoice Download Available",
    date: "01 Jul 2026",
    type: "Payment",
    message:
      "Users can now download paid transaction receipts from the Receipts section.",
    icon: CheckCircle,
    color: "text-[#11823b]",
    bg: "bg-[#eaf8ef]",
    border: "border-[#c9efd7]",
  },
];

export default function NoticePage() {
  return (
    <main className="h-screen w-full overflow-hidden bg-white">
      <div className="flex h-full w-full">
        <UserSidebar />

        <section className="flex-1 overflow-y-auto px-8 py-7">
          <UserHeader />
          <div className="mt-6 min-h-[calc(100vh-140px)] rounded-[14px] border border-[#dfe4f0] bg-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-[#07185f]">
                  Notices
                </h1>
                <p className="mt-1 text-[13px] text-[#7b8499]">
                  View important updates, reminders, and announcements
                </p>
              </div>

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#eef0ff] text-[#25249c]">
                <Bell className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="rounded-[10px] border border-[#ccd2ff] bg-[#eef0ff] p-5">
                <p className="text-[13px] font-semibold text-[#25249c]">
                  Total Notices
                </p>
                <h2 className="mt-3 text-[30px] font-bold text-[#07185f]">
                  12
                </h2>
              </div>

              <div className="rounded-[10px] border border-[#ffd2d2] bg-[#fff0f0] p-5">
                <p className="text-[13px] font-semibold text-[#dc2626]">
                  Important
                </p>
                <h2 className="mt-3 text-[30px] font-bold text-[#07185f]">
                  03
                </h2>
              </div>

              <div className="rounded-[10px] border border-[#c9efd7] bg-[#eaf8ef] p-5">
                <p className="text-[13px] font-semibold text-[#11823b]">
                  Read Notices
                </p>
                <h2 className="mt-3 text-[30px] font-bold text-[#07185f]">
                  09
                </h2>
              </div>
            </div>

            <div className="mt-8 rounded-[12px] border border-[#dfe4f0] bg-white p-6">
              <h2 className="text-[20px] font-bold text-[#07185f]">
                Recent Notices
              </h2>

              <div className="mt-5 space-y-4">
                {notices.map((notice) => {
                  const Icon = notice.icon;

                  return (
                    <div
                      key={notice.title}
                      className={`flex flex-col gap-4 items-start justify-between rounded-[10px] border p-5 md:flex-row md:items-center ${notice.bg} ${notice.border}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ${notice.color}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
                            <h3 className="text-[16px] font-bold text-[#07185f]">
                              {notice.title}
                            </h3>

                            <span
                              className={`w-fit rounded-md bg-white px-3 py-1 text-[11px] font-bold ${notice.color}`}
                            >
                              {notice.type}
                            </span>
                          </div>

                          <p className="mt-2 max-w-[720px] text-[13px] leading-6 text-[#374151]">
                            {notice.message}
                          </p>

                          <div className="mt-3 flex items-center gap-2 text-[12px] font-medium text-[#6b7280]">
                            <CalendarDays className="h-4 w-4" />
                            {notice.date}
                          </div>
                        </div>
                      </div>

                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#25249c] self-end md:self-center">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}