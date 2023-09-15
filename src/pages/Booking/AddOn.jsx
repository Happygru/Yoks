import { useState } from "react";
import { Card, TextField } from "@mui/material";
import Counter from "../../components/Counter";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";

const AddOn = () => {
  const [childSeatCount, setChildSeatCound] = useState(0);

  return (
    <>
      <p className="font-bold text-3xl">Addon-Options</p>
      <Card className="mt-4 p-6">
        <div className="w-full">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Flight/train number"
          />
        </div>
        <div className="w-full mt-2 grid grid-cols-1 divide-y">
          <div className="col-span-1 py-6 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <p className="text-[var(--text-color)] font-bold text-2xl">
                  Child Seat
                </p>
                <div className="y_badge">$12</div>
              </div>
              <p className="text-[#9E8F8F] text-sm font-text">
                Suitable for toddlers weighing 0-18 kg (approx 0 to 4 years).
              </p>
            </div>
            <Counter count={childSeatCount} setCount={setChildSeatCound} />
          </div>
          <div className="col-span-1 py-6 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <p className="text-[var(--text-color)] font-bold text-2xl">
                  Booster seat
                </p>
                <div className="y_badge">$22</div>
              </div>
              <p className="text-[#9E8F8F] text-sm font-text">
                Suitable for children weighing 15-36 kg (approx 4 to 10 years).
              </p>
            </div>
            <Counter count={childSeatCount} setCount={setChildSeatCound} />
          </div>
          <div className="col-span-1 py-6 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <p className="text-[var(--text-color)] font-bold text-2xl">
                  Vodka Bottle
                </p>
                <div className="y_badge">$78</div>
              </div>
              <p className="text-[#9E8F8F] text-sm font-text">
                Absolut Vodka 0.7l Bottle
              </p>
            </div>
            <Counter count={childSeatCount} setCount={setChildSeatCound} />
          </div>
        </div>
      </Card>
      <p className="font-bold text-3xl my-8">Extra-Services</p>
      <Card className="mt-4 px-6">
        <div className="grid grid-cols-1 divide-y">
          <div className="col-span-1 py-6 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <p className="text-[var(--text-color)] font-bold text-2xl">
                  Airport Assistance and Hostess Service
                </p>
                <div className="y_badge">$67</div>
              </div>
              <p className="text-[#9E8F8F] text-sm font-text">
                A bouquet of seasonal flowers prepared by a local florist
              </p>
            </div>
            <RButton isradius={true}>
              <span className="flex w-full justify-center items-center gap-2 px-10">
                Select <BsArrowUpRight className="font-bold" />
              </span>
            </RButton>
          </div>
          <div className="col-span-1 py-6 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <p className="text-[var(--text-color)] font-bold text-2xl">
                  Bodyguard Service
                </p>
                <div className="y_badge">$29</div>
              </div>
              <p className="text-[#9E8F8F] text-sm font-text">
                A bouquet of seasonal flowers prepared by a local florist
              </p>
            </div>
            <RButton isradius={true} istransparent={true}>
              <span className="flex w-full justify-center items-center gap-2 px-10 text-[var(--text-color)]">
                Select <BsArrowUpRight className="font-bold" />
              </span>
            </RButton>
          </div>
          <div className="col-span-1 py-6">
            <TextField
              label="Notes"
              multiline
              rows={4}
              fullWidth
              className="font-text"
              placeholder="Please leave notes."
            />
          </div>
        </div>
      </Card>
      <div className="w-full mt-12">
        <RButton isradius={true} isfullwidth={true}>
          <span className="flex w-full justify-center items-center gap-2 px-10">
            Continue <BsArrowUpRight className="font-bold" />
          </span>
        </RButton>
      </div>
    </>
  );
};

export default AddOn;
