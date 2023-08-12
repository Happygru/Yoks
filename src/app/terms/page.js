"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  position: `relative`,
  borderBottom: `1px solid grey`,
  padding: `20px 40px 20px 0px`,
  "&:not(:last-child)": {},
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <div className=" flex p-[16px] flex-col items-center rounded-[100px] border border-solid border-[#A0A0A0]">
        <AiOutlinePlus className="AccordionSummaryIconPlus text-[#D81AC5] text-[12px] table:text-[16px] display:text-[20px]" />
        <AiOutlineMinus className="AccordionSummaryIconMinus hidden text-[#D81AC5] text-[12px] table:text-[16px] display:text-[20px]" />
      </div>
    }
    {...props}
  />
))(({ theme }) => ({
  width: `100%`,
  padding: `0px`,
  position: `unset`,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.MuiAccordionSummary-expandIconWrapper":
    {
      position: `absolute`,
      top: `20px`,
      right: `0px`,
    },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded .AccordionSummaryIconPlus":
    {
      display: `none`,
    },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded .AccordionSummaryIconMinus":
    {
      display: `block`,
    },
  "& .MuiAccordionSummary-content": {
    width: `100%`,
    display: `flex`,
    gap: `32px`,
    justifyContent: `space-between`,
    margin: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  paddingTop: `30px`,
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel6");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    AOS.init();
  }, []);

  return (
    <>
      <div className="w-full">
        <BreadCrumb title="Terms & Conditions">
          <Link href="/">Home</Link> - <Link href="#">Terms & Conditions</Link>
        </BreadCrumb>
      </div>
      <div className="w-full bg-white py-8">
        <div className="m-auto max-w-[1280px] w-[90%]">
          <div
            className="flex flex-col items-start self-stretch"
            data-aos="fade-up"
            data-aos-offset="70"
            data-aos-easing="linear"
            data-aos-duration="550"
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className="text-xl font-semibold">DEFINITIONS</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  In this agreement, except where the context indicates
                  otherwise: 1.1. &quot;THE RENTER&quot; and &quot;you&quot;
                  means jointly and severally, the signatory hereto and any
                  person on whose behalf the Signatory signs this agreement.
                  1.2. “DAMAGES” (concerning the VEHICLE) includes, but is not
                  limited to, our expenditure in towing, transporting &amp;
                  storing the VEHICLE, the difference between the pre-collision
                  and post-collision value of the vehicle in the case where it
                  is uneconomical to repair the VEHICLE; repairing any damage
                  caused to the VEHICLE from the time of delivery to you until
                  the return thereof to us; replacing parts or accessories
                  (excluding normal wear and tear) and paying an expert to
                  inspect the damage to the VEHICLE and report thereon. 1.3.
                  “RENTAL PERIOD” means the period referred to on the face
                  hereof and any extended period agreed to by us. The rental
                  amount is calculated on a 24 (twenty-four) hour daily rate
                  from delivery to return of the vehicle. 1.4. “VEHICLE” means
                  the vehicle referred to on the face hereof and the keys of the
                  said vehicle or any substitution in terms hereof. 1.5.
                  “PERSON” includes any juristic and natural person; the
                  singular includes the plural, and one gender includes the
                  other where applicable.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <p className="text-xl font-semibold">
                  AUTHORISED DRIVERS AGE / ADDITIONAL DRIVER
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  2.1. By your signature hereto, you confirm that you have an
                  unendorsed and valid commercial driver’s license and have had
                  such for not less than two years. One additional driver is
                  authorized, and such additional driver has a valid commercial
                  driver’s license.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <p className="text-xl font-semibold">RENTAL</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  3.1. We rent, and you hire, the VEHICLE for the RENTAL PERIOD
                  at the agreed rate, plus additional charges. Where no
                  additional charges have stated the rates on our Standard price
                  list, or such other agreement as the parties may have entered
                  into, shall apply. You will pay all taxes and charges for
                  miscellaneous services which apply hereto and for the filling
                  of the fuel tank before collection/return of the VEHICLE. 3.2.
                  All amounts owing are due and payable on demand, but in any
                  event, by no later than the date on which the RENTAL PERIOD
                  expires. You shall not set off or withhold payment of any
                  amounts due by you in terms of this agreement for whatsoever
                  reason or cause.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <p className="text-xl font-semibold">EXIT CLAUSE</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  You may cancel your reservation by using the same booking
                  channel as the one used for your reservation or by contacting
                  our local Call Center. Cancellations made through the YOKS
                  reservation website will take effect when recorded in the YOKS
                  reservation system. You may cancel your prepaid reservation as
                  follows:  You may cancel the reservation free of charge up to
                  24hrs before the rental is due date.  Prepaid reservations
                  that are cancelled on the date of pick-up or less than 24hrs
                  before the rental pick-up time will receive a partial refund
                  of 50% of the daily rate times the number of days reserved.
                  This amount will be charged either in local currency or in
                  your card billing currency, where applicable and at the
                  exchange rate &amp; conditions valid at time of transaction.
                  If you have not cancelled and fail to come to the YOKS rental
                  location to pick up the Vehicle, the prepaid amount will be
                  refunded less a “no show” fee. This amount will be charged
                  either in local currency, USD, or in your card billing
                  currency, where applicable and at the exchange rate and
                  conditions valid at time of transaction. If the amendments to
                  the reservation are not made according to above agreement, no
                  refunds shall be given for unused days for rentals ended early
                  (i.e. the customer returns the vehicle before the end of the
                  agreed rental period) or late collections, if the customer
                  fails to collect the vehicle on the rental start date or
                  cancellations made after the due rental start date and
                  time.Specific make/model preferences are subject to
                  availability at the time of rental. Self-drive days are based
                  on 24-hour periods commencing at the time of pick up.
                  Additional charges may apply if vehicle exceeds 150 km
                  (Standard per day), this charge is calculated at $.10 per km
                  for sedans and $.20 per km all other vehicles. All drivers are
                  informed that any information is supplied voluntarily to
                  provide the car rental service and will be stored on a
                  computerized database that all drivers can consult at any time
                  to review and rectify his/her personal data on request to the
                  YOKS Sales Administration Department of its country of
                  residence.
                </p>
              </AccordionDetails>
            </Accordion>
            <div className="flex flex-col items-start self-stretch"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
