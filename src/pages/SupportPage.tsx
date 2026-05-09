import {
  Headphones,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  ExternalLink,
  Send,
} from "lucide-react";
import UserSidebar from "../components/user-dashboard/UserSidebar";
import UserHeader from "../components/user-dashboard/UserHeader";

export default function SupportPage() {
  return (
    <main className="h-screen w-full overflow-hidden bg-white">
      <div className="flex h-full w-full">
        <UserSidebar />

        <section className="flex-1 overflow-y-auto px-8 py-7">
          <UserHeader />
          <div className="mt-6 min-h-[calc(100vh-140px)] rounded-[14px] border border-[#dfe4f0] bg-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-[#07185f]">Support</h1>
                <p className="mt-1 text-[13px] text-[#7b8499]">
                  We're here to help you. Get in touch with our support team.
                </p>
              </div>

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#eef0ff] text-[#25249c]">
                <Headphones className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Contact Cards */}
              <div className="rounded-[12px] border border-[#dfe4f0] bg-[#fcfdff] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef0ff] text-[#25249c]">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-[#07185f]">
                  Call Us
                </h3>
                <p className="mt-1 text-[13px] text-[#7b8499]">
                  Mon-Fri from 9am to 6pm.
                </p>
                <p className="mt-3 text-[14px] font-bold text-[#25249c]">
                  +91 1800 123 4567
                </p>
              </div>

              <div className="rounded-[12px] border border-[#dfe4f0] bg-[#fcfdff] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf8ef] text-[#11823b]">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-[#07185f]">
                  Email Us
                </h3>
                <p className="mt-1 text-[13px] text-[#7b8499]">
                  Our friendly team is here to help.
                </p>
                <p className="mt-3 text-[14px] font-bold text-[#11823b]">
                  support@digitvilla.com
                </p>
              </div>

              <div className="rounded-[12px] border border-[#dfe4f0] bg-[#fcfdff] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff0f0] text-[#dc2626]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-[#07185f]">
                  Live Chat
                </h3>
                <p className="mt-1 text-[13px] text-[#7b8499]">
                  Chat with our support bot 24/7.
                </p>
                <p className="mt-3 text-[14px] font-bold text-[#dc2626]">
                  Start a conversation
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Support Form */}
              <div className="rounded-[12px] border border-[#dfe4f0] bg-white p-6">
                <h2 className="text-[20px] font-bold text-[#07185f]">
                  Submit a Request
                </h2>
                <p className="mt-1 text-[13px] text-[#7b8499]">
                  Describe your issue and we'll get back to you as soon as possible.
                </p>

                <form className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-[#07185f]">
                        Category
                      </label>
                      <div className="relative">
                        <select className="h-[44px] w-full appearance-none rounded-lg border border-[#dfe4f0] bg-white px-4 text-[13px] outline-none focus:border-[#25249c]">
                          <option>Payment Issue</option>
                          <option>Profile Update</option>
                          <option>Technical Support</option>
                          <option>General Inquiry</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b8499]" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-[#07185f]">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Brief title"
                        className="h-[44px] w-full rounded-lg border border-[#dfe4f0] px-4 text-[13px] outline-none placeholder:text-[#8a94a8] focus:border-[#25249c]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-[#07185f]">
                      Message
                    </label>
                    <textarea
                      placeholder="Describe your problem in detail..."
                      className="h-[120px] w-full resize-none rounded-lg border border-[#dfe4f0] p-4 text-[13px] outline-none placeholder:text-[#8a94a8] focus:border-[#25249c]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#25249c] font-bold text-white transition-all hover:bg-[#1e1d82]"
                  >
                    <Send className="h-4 w-4" />
                    Send Request
                  </button>
                </form>
              </div>

              {/* FAQs */}
              <div className="rounded-[12px] border border-[#dfe4f0] bg-white p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] font-bold text-[#07185f]">
                    Quick FAQs
                  </h2>
                  <button className="flex items-center gap-1 text-[12px] font-bold text-[#25249c]">
                    View all <ExternalLink className="h-3 w-3" />
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      q: "How can I download my payment receipt?",
                      a: "You can download receipts from the 'Receipts' section in the sidebar after a successful transaction.",
                    },
                    {
                      q: "What payment methods are supported?",
                      a: "We support UPI, Debit/Credit Cards, and Net Banking via our secure payment gateway.",
                    },
                    {
                      q: "How do I update my profile photo?",
                      a: "Go to 'My Profile' and click on the camera icon on your profile picture to upload a new one.",
                    },
                    {
                      q: "Can I pay for multiple billing periods?",
                      a: "Yes, you can select multiple periods in the 'Payments' section before proceeding to checkout.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-[#f3f5ff] bg-[#fcfdff] p-4"
                    >
                      <h4 className="text-[14px] font-bold text-[#07185f]">
                        {faq.q}
                      </h4>
                      <p className="mt-1.5 text-[12px] leading-5 text-[#7b8499]">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}