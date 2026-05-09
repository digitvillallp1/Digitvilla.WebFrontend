import {
  User,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  ShieldCheck,
  Edit,
  Camera,
} from "lucide-react";
import UserSidebar from "../components/user-dashboard/UserSidebar";
import UserHeader from "../components/user-dashboard/UserHeader";

export default function ProfilePage() {
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
                  My Profile
                </h1>
                <p className="mt-1 text-[13px] text-[#7b8499]">
                  Manage your personal information and account settings
                </p>
              </div>

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#eef0ff] text-[#25249c]">
                <User className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Profile Card */}
              <div className="col-span-1 rounded-[12px] border border-[#dfe4f0] bg-[#fcfdff] p-6 text-center">
                <div className="relative mx-auto h-[120px] w-[120px]">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mayank"
                    alt="Mayank Raj"
                    className="h-full w-full rounded-full border-4 border-[#eef0ff] bg-white object-cover"
                  />
                  <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#25249c] text-white shadow-lg">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>

                <h2 className="mt-5 text-[20px] font-bold text-[#07185f]">
                  Mayank Raj
                </h2>
                <p className="text-[13px] font-medium text-[#7b8499]">
                  User ID: 2001500100054
                </p>

                <div className="mt-6 flex flex-col gap-2">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25249c] py-2.5 text-[14px] font-semibold text-white transition-all hover:bg-[#1e1d82]">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </button>
                </div>

                <div className="mt-8 space-y-4 border-t border-[#dfe4f0] pt-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef0ff] text-[#25249c]">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#7b8499]">Date of Birth</p>
                      <p className="text-[13px] font-bold text-[#07185f]">
                        15 Aug 2004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef0ff] text-[#25249c]">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#7b8499]">Plan</p>
                      <p className="text-[13px] font-bold text-[#07185f]">
                        Digital Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sections */}
              <div className="col-span-1 space-y-6 lg:col-span-2">
                {/* Personal Information */}
                <div className="rounded-[12px] border border-[#dfe4f0] bg-white p-6">
                  <h3 className="text-[17px] font-bold text-[#07185f]">
                    Personal Information
                  </h3>
                  <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
                    <div>
                      <p className="text-[12px] font-medium text-[#7b8499]">
                        Full Name
                      </p>
                      <p className="mt-1 text-[15px] font-bold text-[#07185f]">
                        Mayank Raj
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#7b8499]">
                        Gender
                      </p>
                      <p className="mt-1 text-[15px] font-bold text-[#07185f]">
                        Male
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#7b8499]">
                        Date of Birth
                      </p>
                      <p className="mt-1 text-[15px] font-bold text-[#07185f]">
                        15 August 2004
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#7b8499]">
                        Nationality
                      </p>
                      <p className="mt-1 text-[15px] font-bold text-[#07185f]">
                        Indian
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="rounded-[12px] border border-[#dfe4f0] bg-white p-6">
                  <h3 className="text-[17px] font-bold text-[#07185f]">
                    Contact Details
                  </h3>
                  <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-4 w-4 text-[#7b8499]" />
                      <div>
                        <p className="text-[12px] font-medium text-[#7b8499]">
                          Email Address
                        </p>
                        <p className="mt-1 text-[15px] font-bold text-[#07185f]">
                          mayank@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-4 w-4 text-[#7b8499]" />
                      <div>
                        <p className="text-[12px] font-medium text-[#7b8499]">
                          Phone Number
                        </p>
                        <p className="mt-1 text-[15px] font-bold text-[#07185f]">
                          +91 6201061539
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <p className="text-[12px] font-medium text-[#7b8499]">
                        Address
                      </p>
                      <p className="mt-1 text-[15px] font-bold text-[#07185f]">
                        123 DigitVilla Towers, Sector 45, Patna, Bihar - 800001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Security */}
                <div className="rounded-[12px] border border-[#dfe4f0] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[17px] font-bold text-[#07185f]">
                      Account Security
                    </h3>
                    <span className="flex items-center gap-1.5 rounded-full bg-[#eaf8ef] px-3 py-1 text-[11px] font-bold text-[#11823b]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Verified Account
                    </span>
                  </div>
                  <div className="mt-6 flex flex-col gap-4 items-center justify-between rounded-lg border border-[#f3f5ff] bg-[#fcfdff] p-4 md:flex-row">
                    <div>
                      <p className="text-[14px] font-bold text-[#07185f]">
                        Password
                      </p>
                      <p className="text-[12px] text-[#7b8499]">
                        Last changed: 3 months ago
                      </p>
                    </div>
                    <button className="w-full rounded-lg border border-[#dfe4f0] px-4 py-2 text-[13px] font-bold text-[#25249c] hover:bg-white md:w-auto">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}