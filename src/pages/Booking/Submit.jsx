import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";

const Submit = () => {
  const book_state = useSelector((state) => state.book);
  const userdata = useSelector((state) => state.auth.user);
  return (
    <>
      <div className="w-full">
        <div className="m-auto max-w-[740px] py-16">
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <div className="text-white rounded-full bg-[#024273] text-2xl p-10">
              <FaCheck />
            </div>
            <p className="text-[var(--text-color)] font-bold text-2xl">
              System, your order was submitted successfully!
            </p>
            <p className="text-[#BDA0A0] text-sm">
              Booking details has been sent to: admin@yoksghana.com
            </p>
          </div>
          <div className="w-full grid grid-cols-1 gap-6 mt-6">
            <div className="col-span-1 rounded-md w-full p-12 border border-dashed border-[var(--text-color)] bg-[#F6F6F6] flex justify-between">
              <div className="flex flex-col gap-4">
                <p className="font-text text-sm">Order Number</p>
                <p className="font-text font-bold text-sm"># 4039</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-text text-sm">Date</p>
                <p className="font-text font-bold text-sm">Thu, Feb 06, 2023</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-text text-sm">Total</p>
                <p className="font-text font-bold text-sm">$40.10</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-text text-sm">Payment Method</p>
                <p className="font-text font-bold text-sm">Mobile Money</p>
              </div>
            </div>
            <div className="col-span-1 rounded-md border border-[#E5E5E5] p-12">
              <p className="text-xl font-bold">Reservation Information</p>
              <div className="mt-6 grid grid-cols-1 divide-y divide-[#E5E5E5] font-text">
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Pick Up Address</p>
                  <p className="font-bold">
                    {book_state?.pickupLocation.value}
                  </p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Drop Off Address</p>
                  <p className="font-bold">
                    {book_state?.pickupLocation.value}
                  </p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Pick Up Date</p>
                  <p className="font-bold">
                    {book_state?.startdate.format("ddd, MMM DD, YYYY")}
                  </p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Pick Up Time</p>
                  <p className="font-bold">
                    {book_state?.starttime.format("h:mm A")}
                  </p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Distance</p>
                  <p className="font-bold">311 km/ 194 miles</p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Time</p>
                  <p className="font-bold">3h 43m</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 rounded-md border border-[#E5E5E5] p-12">
              <p className="text-xl font-bold">Selected Car</p>
              <img
                className="mt-4 w-full"
                src="image/booking/default.png"
                alt="Selected Car"
              />
              <div className="mt-4 w-full grid grid-cols-1 divide-y divide-[#E5E5E5] font-text">
                <div className="col-span-1 flex justify-between py-2">
                  <p>Class</p>
                  <p>Business Class</p>
                </div>
                <div className="col-span-1 flex justify-between py-2">
                  <p>Cars</p>
                  <p>Mercedes-Benz E-Class</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 rounded-md border border-[#E5E5E5] p-12">
              <p className="text-xl font-bold">Passenger Information</p>
              <div className="mt-6 grid grid-cols-1 divide-y divide-[#E5E5E5] font-text">
                <div className="col-span-1 py-4 flex justify-between">
                  <p>First name</p>
                  <p className="font-bold">Ali</p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Last name</p>
                  <p className="font-bold">Tufan</p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Email</p>
                  <p className="font-bold">{userdata?.email}</p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Phone</p>
                  <p className="font-bold">+{userdata?.phone}</p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Address line 1</p>
                  <p className="font-bold"></p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Address line 2</p>
                  <p className="font-bold"></p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>City</p>
                  <p className="font-bold">London</p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>State/Province/Region</p>
                  <p className="font-bold"></p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>ZIP code/Postal code</p>
                  <p className="font-bold"></p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Country</p>
                  <p className="font-bold">{userdata?.country}</p>
                </div>
                <div className="col-span-1 py-4 flex justify-between">
                  <p>Special Requirements</p>
                  <p className="font-bold"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;
