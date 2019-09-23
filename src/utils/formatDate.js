import moment from "moment";

export const formatDate = (startDate, endDate, isFullDate) => {
  let data = {};
  console.log(startDate, endDate, isFullDate);
  let start = moment(startDate);
  let end = moment(endDate);
  console.log(start, end);
  data["startDate"] = (isFullDate) ? start.format("Do MMM YYYY") : start.format("MMM YYYY");
  if(endDate == null) data["endDate"] = "Present";
  else {
    data["endDate"] = (isFullDate) ? end.format("Do MMM YYYY") : end.format("MMM YYYY");
  }
  return data;
};
