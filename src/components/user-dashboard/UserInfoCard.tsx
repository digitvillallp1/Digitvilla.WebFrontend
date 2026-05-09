export default function UserInfoCard() {
  return (
    <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-5">
      <h3 className="text-[15px] font-bold text-[#07185f]">
        User Information
      </h3>

      <div className="mt-5 flex gap-5">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
          alt="User"
          className="h-[82px] w-[82px] rounded-full bg-[#eef0ff]"
        />

        <div className="grid flex-1 grid-cols-[90px_1fr] gap-y-3 text-[11px]">
          <p className="text-[#7b8499]">Name</p>
          <p className="font-semibold text-[#07185f]">Mayank Raj</p>

          <p className="text-[#7b8499]">User ID</p>
          <p className="font-semibold text-[#07185f]">2001500100054</p>

          <p className="text-[#7b8499]">Plan</p>
          <p className="font-semibold text-[#07185f]">Digital Marketing</p>

          <p className="text-[#7b8499]">Email</p>
          <p className="font-semibold text-[#07185f]">
            mayank@gmail.com
          </p>

          <p className="text-[#7b8499]">Mobile</p>
          <p className="font-semibold text-[#07185f]">+91 6201061539</p>
        </div>
      </div>
    </div>
  );
}