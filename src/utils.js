import { addDays } from "date-fns";

export function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function getDate(offset = 0) {
  let today = new Date();
  let date = addDays(today, offset);
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
}
