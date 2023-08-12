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
                <p className="text-xl font-semibold">
                  PREREQUISITES: CHAUFFEUR DRIVEN OPTION
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  The minimum daily rental period is 6 hours and maximum of 12
                  hours; after which the customer shall be surcharged (refer to
                  price list) depending on the vehicle type for each additional
                  hour the vehicle is used. All YOKS vehicles are insured
                  comprehensively.  The Chauffeur is mandated to always oversee
                  the vehicle. Reasonable period for break and lunch shall be
                  allowed the chauffeur, however, for long journeys, chauffeur
                  should be allowed 15 mins of rest after every 3 hours of
                  continuous driving.  A daily allowance is to be given the
                  chauffeur for the service rendered per your rental agreement
                  at the time of booking.  Client/Customer is required to
                  inspect and sign the Log sheet including Fuel level and time
                  at the end of rental period.  Payment of fuel and toll is the
                  responsibility of the client/customer. The Vehicle is given to
                  client with a full tank of fuel and client is expected to
                  return the vehicle with a full tank of fuel. Should the
                  client/customer require YOKS to fuel the vehicle on their
                  behalf an administration fee of GHS30.00 will be charged as
                  service fee for your convenience, in addition to the cost of
                  the fuel.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <p className="text-xl font-semibold">CHAUFFEUR ALLOWANCE</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  Our chauffeurs are to be given an allowance anytime they
                  render services. The allowance given to the Chauffeur varies
                  depending on the type of service required. a. For Hourly
                  service, driver allowance not applicable except when driver
                  exceeds 4 hours on one trip. Amount applicable is GHS50 or USD
                  equivalent. b. For Whole day service within Accra, allowance
                  expected is GHS70 or USD equivalent c. For Whole day service
                  outside Accra return trip, the allowance expected is GHS100 or
                  USD equivalent d. Overnight allowance outside Accra is GHS200
                  per night as an allowance for accommodation. e. For outside
                  Ghana services you are required to give the chauffeur GHS500
                  per night to take care of his accommodation.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <p className="text-xl font-semibold">YOUR OBLIGATIONS</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  The vehicle shall not be driven by any other person than you,
                  and only under the condition that your ability to drive is not
                  in any way impaired by mental or physical incapacity or
                  restricted by any law. If you wish to travel outside the
                  borders of Ghana, you shall inform YOKS well in advance so
                  that the necessary permits and other documentation is
                  acquired. You shall take care of the vehicle, keep it in good
                  repair and condition, pay any fines for which you may be
                  liable, reimburse YOKS for any damage to the vehicle, and
                  refund YOKS for any costs it incurs should the company have to
                  repair the damage to the vehicle. The vehicle shall be
                  provided to you with a full tank of fuel, you shall only
                  refuel the vehicle with the right type of fuel, and you shall
                  return the vehicle with a full tank. You shall be liable for
                  all fees, fines and penalties incurred in connection with the
                  use of the vehicle and for which YOKS is charged, unless they
                  have arisen through the fault of YOKS. During the rental
                  period you shall carry out the usual checks (engine oil level,
                  tyre pressure, etc.) as would any careful user and you shall
                  respect the maintenance cycle of the vehicle as stated in the
                  maintenance guide, if any. When parking the vehicle, even for
                  a short period, you undertake to lock it and make use of the
                  vehicle s alarm system if equipped. You shall never leave the
                  vehicle unoccupied with the keys in the ignition. You
                  undertake to use the vehicle in a responsible manner and, only
                  for the purpose for which it is intended. For a car, this
                  means primarily carrying passengers other than for hire and
                  reward. You shall not use the vehicle under any of the
                  following conditions or for any of the following purposes: 
                  driving the vehicle under the influence of alcohol, drugs or
                  any other type of narcotic substances, transportation of
                  inflammable or dangerous goods, as well as toxic, corrosive,
                  radioactive or other harmful substances,  carrying anything
                  which, because of its smell or condition, harm the vehicle or
                  causes YOKS to lose time or money before it can rent out the
                  vehicle again,  transportation of live animals (except for
                  domestic pets)  re-rental to or use by other persons, 
                  carrying passengers for hire or reward, participating in
                  rallies, competitions, or trials, wherever they may take
                  place,  giving driving lessons,  pushing or towing another
                  vehicle,  travelling on non-paved roads or on unmotorable
                  roads; the surface or state of repair of which could put the
                  vehicle’s wheels, tyres or its under body mechanics at risk, 
                  Internationally committing any offence.  None of the goods
                  and baggage carried in the vehicle, including their packing
                  and stowage equipment, shall be permitted to damage the
                  vehicle, nor put the occupants abnormally at risk,  In any
                  way which breaks the Highway Code, road traffic laws or any
                  other laws.You shall be liable for any offence committed
                  during the rental period which relates in any way to your use
                  of the vehicle, for as long as the vehicle remains in your
                  possession. Upon the request from the police or any official
                  body, YOKS may have to transfer your personal data. Such
                  transfer will be done in accordance with the data protection
                  Laws.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
              >
                <p className="text-xl font-semibold">
                  The VEHICLE shall be at your sole risk for the RENTAL PERIOD.
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  You shall not: a. Hire or lend the vehicle to anyone else. b.
                  Permit the VEHICLE to be in the possession or control of
                  anyone other than yourself and/or the additional driver; c.
                  Cause or permit the VEHICLE to be driven unlawfully,
                  illegally, or to be used for any unlawful purpose or for a
                  purpose for which it was not designed or in such a way as to
                  increase the risk of it being damaged or lost, or to be
                  overloaded. d. Cause or permit the VEHICLE to carry any
                  passenger or goods for reward or racing or for it to be used
                  for any purpose other than your transportation and those
                  within your party. e. Cause or permit the VEHICLE to be
                  exposed to the risk of damage in or by any civil or public
                  disturbance or unrest. f. You shall take all precautions to
                  protect the VEHICLE from theft and damage and shall lock and
                  immobilize the VEHICLE and activate the VEHICLE’S alarm when
                  the VEHICLE is not in use. In case of a collision, theft, or
                  loss of, or involving the VEHICLE, you shall immediately: g.
                  Report any damage to us and the police or nearest traffic
                  department within 24 hours of such an incident (and in the
                  case of theft of the VEHICLE within 6 hours of such theft). h.
                  Complete and ensure that the driver completes all documents
                  required by us and our insurers; and i. Provide all and any
                  assistance we or our insurers may require dealing with any
                  matters arising from the incident, whether directly or
                  indirectly. j. You agree that you are not allowed to permit
                  any towing, repairs, or servicing to be done to the VEHICLE
                  unless authorized by us in writing beforehand. If the VEHICLE
                  is driven by anyone, other than your company’s authorized
                  driver, you shall remain liable to us for all your obligations
                  in terms hereof and, besides, you shall be liable to us for
                  the full replacement value, or costs incurred by us because of
                  theft or damage to the VEHICLE. We have the right to terminate
                  the rental at any stage for whatsoever reason, including but
                  not limited to, the vehicle being illegally parked, being
                  abandoned or appearing to be abandoned, being used to violate
                  the law, abusive/negligent/drunk driving and the driver not
                  adhering to the traffic and road laws of the country. We may
                  also repossess the VEHICLE at any time if we discover that you
                  have made a misrepresentation to us in connection with, or
                  relating to, the conclusion of this agreement. 24/7 Hotline:
                  +233540614545, +233243600277 YOKS Rent A Car | PMB 72 Osu,
                  Accra, Ghana info@yoksghana.com www.yoksghana.com Keys that
                  are lost or locked in the VEHICLE must be reported to us as
                  soon as possible, and the same will be retrieved at your cost.
                  You agree to inform us of your intention to extend the RENTAL
                  PERIOD and any agreement to so extending the RENTAL PERIOD
                  will be at our sole discretion. Principles and Computation You
                  undertake to return the vehicle to YOKS at agreed place, on
                  the date and at the time indicated on the rental agreement.
                  The maximum duration of a rental agreement varies from one
                  city to another, and it depends on the type of vehicle
                  requirement from the customer. The Self-Drive rental period is
                  24 hours, and the Chauffeur- driven option is 12hours per day,
                  starting from the time the vehicle is made available to you.
                  However, a 30minutes grace period is applied at the end of
                  every rental.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel8d-content"
                id="panel8d-header"
              >
                <p className="text-xl font-semibold">
                  PREPAYMENT TERMS AND CONDITIONS
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  Prepayment means that you have paid for your rental in
                  advance, at the time of booking. Prepaid bookings are
                  non-negotiable and cannot be combined with other any other
                  promotional offer because it is already discounted. Discount
                  on rates exclude all applicable charges which are not
                  expressly mentioned on the YOKS Prepayment Confirmation as
                  included, and any optional additional services for which the
                  customer may be liable. For non-anticipated additional cost,
                  the credit card used for prepayment must be made available at
                  the YOKS office during the pickup of the vehicle. You may
                  amend your reservation free of charge, by using the same
                  booking channel as the one used for your reservation or by
                  contacting our local Call Center. Amendment to the reservation
                  may affect the rental rates and may require a new YOKS
                  Prepayment Confirmation to be issued.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel10d-content" id="panel10k">
                <p className="text-xl font-semibold">DEPOSIT POLICYE</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  All our client are required to pay in full prior to service, a
                  security deposit of $25 per day for potential extra mileage
                  used before vehicle is given out for whole day services within
                  and outside Accra. The deposit amount will be determined by
                  anticipated milage usage based on the type of vehicle and
                  destination (roundtrip) to be rented and this will be made
                  known before booking is confirmed. The deposit amount will be
                  charged to your card or paid in cash at pick-up time. If
                  booking is done online, the required amount will be authorized
                  within 24 HOURS before the pick-up. The security deposit will
                  be used to settle any extra charges you incur whilst renting
                  the vehicle from us (including fuel if not returned full tank,
                  extra-day, extra-mileage, etc. If you prepaid when making your
                  reservation, only the additional security deposit amount will
                  be charged upon pick up to cover any potential extra mileage
                  for trip that may exceed 150km per day. If you have not
                  already paid for your rental vehicle at the time of booking,
                  then the cost of the rental of vehicle as well as the security
                  deposit will be authorized on your credit card or collected in
                  cash or Mobile Money/ Mobile Wallet prior to pick up on the
                  day/start of service.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel11d-content" id="panel11k">
                <p className="text-xl font-semibold">
                  CANCELLATION AND CHANGE POLICY
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  Our chauffeurs are to be given an allowance anytime they
                  render services. The allowance given to the Chauffeur varies
                  depending on the type of service required. a. For Hourly
                  service, driver allowance not applicable except when driver
                  exceeds 4 hours on one trip. Amount applicable is GHS50 or USD
                  equivalent. b. For Whole day service within Accra, allowance
                  expected is GHS70 or USD equivalent c. For Whole day service
                  outside Accra return trip, the allowance expected is GHS100 or
                  USD equivalent d. Overnight allowance outside Accra is GHS200
                  per night as an allowance for accommodation. e. For outside
                  Ghana services you are required to give the chauffeur GHS500
                  per night to take care of his accommodation.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel12"}
              onChange={handleChange("panel12")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel12d-content" id="panel12k">
                <p className="text-xl font-semibold">
                  DELIVERY AND COLLECTION TERMS
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  You shall return the Vehicle to YOKS at the end of the rental
                  period. In a situation where YOKS shall pick up the Vehicle;
                  you shall indicate the date and time of pickup the mileage and
                  fuel gauge reading, and other information required on the
                  rental document. You shall do anything else which YOKS
                  requests as a condition of agreeing to collect the Vehicle.
                  You shall return the vehicle immediately when YOKS requests
                  that you do so., In a situation where the vehicle is not
                  delivered to YOKS upon request, you hereby authorise YOKS to
                  enter your premises and to do any and all other things
                  necessary within the Law to repossess same. You shall be
                  liable for any cost incurred during the repossession of the
                  said vehicle. In addition, YOKS may repossess any vehicle
                  without notice or liabilities where YOKS deems it appropriate
                  that such repossession is necessary for its own protection.
                  The end of the rental is determined by return of the vehicle
                  and its keys to the rental office or agreed YOKS location. The
                  vehicle and keys shall be handed over to a uniformed YOKS
                  employee and under no circumstances should keys be given to
                  any person present at YOKS’ premises and whom you assume or
                  purport to be a YOKS employee. It’s explicitly mentioned in
                  writing in the rental agreement the keys shall be returned to
                  YOKS office or YOKS security officer. Under no circumstances
                  shall YOKS accept any liability for items that may be left in
                  the vehicle at the end of the rental. YOKS strongly recommend
                  that you read carefully this information available at the
                  office; In the event of Theft, accident, or confiscation  In
                  the event of measures by third parties, including attachment,
                  confiscation or impounding of the vehicle, you shall
                  immediately inform YOKS in writing. YOKS shall than be
                  entitled to take all measures which it deems necessary to
                  protect its rights; you shall be liable for all damage, cost
                  and or expenses associated with the above measures and for any
                  direct, indirect, consequential damages (such as loss) to the
                  vehicle unless it is demonstrated that YOKS is directly
                  responsible for such confiscation or impounding of the
                  vehicle. Furthermore, the rental agreement may be
                  automatically terminated as soon as YOKS is informed of such
                  action by the legal authorities or by you. Any use of the
                  vehicle which may be deemed detrimental to YOKS, shall result
                  in an automatic and immediate termination of the rental
                  agreement. In the event of an accident, the rental agreement
                  shall be terminated as soon as YOKS receives a copy of the
                  Police report completed and where applicable the third party.
                  If YOKS provide a new vehicle, the rental agreement shall be
                  amended accordingly. In case of theft of the vehicle, the
                  rental agreement shall be terminated as soon as YOKS receives
                  a copy of the theft declaration made by you to the police.
                  YOKS shall not be responsible for any loss, theft, robbery, or
                  damage of whatever nature relating to objects or utensils
                  transported on, or which are found in the vehicle including
                  baggage or goods.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel13"}
              onChange={handleChange("panel13")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel13d-content" id="panel13k">
                <p className="text-xl font-semibold">TERMS OF PAYMENT</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  The total charges for each rental shall be determined by the
                  price list applicable on the website or YOKS office at the
                  time of the rental, rentals with duration up to six (6) months
                  are negotiable Advance payment for the rental period shall be
                  required at the beginning of the rental. Delayed payments
                  shall attract 5% interest per day. In case the contract is
                  abrogated by client, YOKS is entitled to 25% retention of the
                  outstanding balance. Transaction fee of 3% applies for the
                  convenience of using your credit card.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel14"}
              onChange={handleChange("panel14")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel14d-content" id="panel14k">
                <p className="text-xl font-semibold">FORM OF PAYMENT</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  Please note that YOKS accepts Cash, local cheques, and some
                  major credit Cards such as Visa, MasterCard and Mobile Money
                  Authorisation will be requested on each detail available at
                  the reservation service centre.  Only corporate institutions
                  that have done business with YOKS for one year and above may
                  be eligible for credit facility  Prepayment of the estimated
                  rental cost is required. The difference shall be settled
                  promptly on completion of the rental. Delayed payment shall
                  attract 5% interest each day. Note: The customer shall in all
                  cases be advised accordingly. Rates are subject to change
                  without notice. If the client abrogates the rental contract,
                  YOKS is entitled to 25% retention of any outstanding balance.
                  15. FINES Any fines incurred during the RENTAL PERIOD, will be
                  redirected to the RENTER and a traffic fine administration fee
                  will be levied. Any toll fee charges incurred by the RENTER
                  during the RENTAL PERIOD will be charged to THE RENTER.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel15"}
              onChange={handleChange("panel15")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel15d-content" id="panel15k">
                <p className="text-xl font-semibold">FINES</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  We shall not be liable for any damages or loss that you may
                  sustain, be it direct or indirect, arising out of any defect
                  in, or mechanical failure of, or the safety of, the VEHICLE,
                  or from the driving or use thereof by you, or caused by any
                  negligent acts of our employees, agents, or servants, nor for
                  any direct or of any of the foregoing or any breach by us of
                  the agreement. No warranties are given by us as to the
                  condition, state of repair, performance capabilities, and year
                  of manufacture, odometer reading or anything else concerning
                  the VEHICLE.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel16"}
              onChange={handleChange("panel16")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel16d-content" id="panel16k">
                <p className="text-xl font-semibold">INSURANCE / DAMAGE</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  a. Comprehensive Insurance Cover - Damage And Loss Cover i.
                  You accept a comprehensive insurance coverage and if you have
                  complied with all the terms and conditions of this rental
                  agreement, you will be liable for any damages to or loss of
                  the VEHICLE or the excess amount as reflected on the face
                  hereof, whichever is lower, plus towing and storage charges,
                  assessors’ fees and administration or claim handling fees. ii.
                  Notwithstanding the Comprehensive Insurance Coverage, you will
                  be liable for the full repair costs of any damage to the
                  vehicle or, if the vehicle is deemed to be a write-off, the
                  replacement cost thereof, if: o You were driving negligently,
                  or o The VEHICLE was being driven on a road not suitable for
                  the VEHICLE (based on vehicle type), or a) You are unable to
                  provide sufficient and accurate details regarding the cause of
                  the damages. b) In the case of theft of the VEHICLE you shall
                  be liable for the full value of the vehicle if the keys of the
                  VEHICLE are not returned to us. b. Third-Party claims i. The
                  Renter will be responsible for all and any third-party claims,
                  irrespective of who was at fault, in respect of damage or loss
                  to any other vehicle or property. ii. Notwithstanding anything
                  in this agreement, we shall not be obliged to make, institute,
                  or proceed with any claim which we may otherwise have had
                  against a third party for the recovery of any damages or 24/7
                  Hotline: +233540614545, +233243600277 YOKS Rent A Car | PMB 72
                  Osu, Accra, Ghana info@yoksghana.com www.yoksghana.com
                  financial loss in connection with the vehicle and we shall be
                  entitled to abandon such claim or to settle such claim on any
                  terms in our sole discretion.Exclusions To Insurance Option B
                  – DAMAGE AND LOSS WAIVERS ACCEPTED A. UNDERCARRIAGE /
                  GLASSWARE Notwithstanding the above clauses where damage is
                  caused to the undercarriage and any glassware of the VEHICLE,
                  you will be liable for all repairs, costs, replacements
                  regardless of fault and howsoever caused. *Original factory
                  parts to be fitted for warranty purposes B. TYRES AND RIMS Any
                  tyre/rim damage is for your account. C. INTERIOR OF VEHICLE
                  You will be liable for all damage caused to the interior of
                  the vehicle regardless of fault and howsoever caused. Besides,
                  if the VEHICLE is not returned in the same condition as it was
                  received, you will be liable for any costs incurred to return
                  the vehicle to its original state. 6.7.5. MECHANICAL Any
                  damage caused by bad driving during and/or detected after the
                  termination of the rental will be for the renters&#39;
                  account.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel17"}
              onChange={handleChange("panel17")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel17d-content" id="panel17k">
                <p className="text-xl font-semibold">GENERAL</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  a. This is the entire agreement, and no variation or
                  cancellation will be valid unless in writing and signed by the
                  RENTER and YOKS Rent A Car. b. We may claim and recover from
                  you, on-demand, all costs, and expenses incurred by us in
                  consequence, directly or indirectly, of any breach by you of
                  this agreement, including attorney and-own-client costs,
                  collection commission and any costs of tracing you or the
                  VEHICLE. c. A provision of this agreement that is invalid or
                  unenforceable for any reason shall be severable from the rest
                  of this agreement and shall not affect the validity hereof. d.
                  This agreement shall be governed by the laws of the Republic
                  of Ghana e. By your signature hereto, you accept all the
                  charges charged by us in terms of this rental agreement,
                  including any charges relating to loss and damage to the
                  VEHICLE. f. Any dispute arising by either of the parties will
                  be settled as per Ghana Laws in Accra. You accept as your
                  domicile (i.e. the address where all notices or legal process
                  shall be served) the address stated on the face of this rental
                  agreement or the application for credit facilities. Any notice
                  posted to the RENTER by registered mail shall be deemed to be
                  received 7 (seven) days after posting unless the RENTER proves
                  the contrary.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel18"}
              onChange={handleChange("panel18")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary aria-controls="panel18d-content" id="panel18k">
                <p className="text-xl font-semibold">EXEMPTIONS</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-base">
                  We shall not be liable for any damages or loss that you may
                  sustain, be it direct or indirect, arising out of any defect
                  in, or mechanical failure of, or the safety of, the VEHICLE,
                  or from the driving or use thereof by you, or caused by any
                  negligent acts of our employees, agents, or servants, nor for
                  any direct or of any of the foregoing or any breach by us of
                  the agreement. No warranties are given by us as to the
                  condition, state of repair, performance capabilities, and year
                  of manufacture, odometer reading or anything else concerning
                  the VEHICLE.
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
