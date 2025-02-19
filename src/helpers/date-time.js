import moment from "moment";

export const formatDatell = (date) => {
	return moment(date).format("ll");
};

export const isLater = (timeBefore, timeAfter) => {
	const tb = moment(timeBefore, "HH:mm");
	const ta = moment(timeAfter, "HH:mm");
	return ta.isAfter(tb);
};

export const isTimeValid = (time) => {
	return moment(time, "HH:mm").isValid();
};
