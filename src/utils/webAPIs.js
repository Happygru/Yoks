// Auth
export const signup_individual =
  "CustomerRestController/customer_signup_individual";
export const signup_corporate =
  "CustomerRestController/customer_signup_corporate";
export const signin = "CustomerRestController/customer_authenticate";
export const validate_token = "CustomerRestController/customer_validateToken";

// Fleet
export const get_fleet = "FleetRestController/fleet";

// My Account
export const saveprofile_individual =
  "CustomerRestController/customer_update_individual";
export const saveprofile_corporate =
  "CustomerRestController/customer_update_corporate";
export const save_password =
  "CustomerRestController/customer_dashboard_change_password";

// Booking
export const get_wholeday_booking = "BookingRestController/wholeday_booking"
export const get_hourly_booking = "BookingRestController/hourly_booking"