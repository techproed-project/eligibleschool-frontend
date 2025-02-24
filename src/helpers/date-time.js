import moment from "moment";

export const formatDatell = (date) => {
	return moment(date).format("ll");
};

export const formatDateMY = (date) => {
	return moment(date).format("MMM YYYY");
};

export const formatTimeLT = (time) => {
	return moment(time, "HH:mm:ss").format("LT");
};

export const isLater = (timeBefore, timeAfter) => {
	const tb = moment(timeBefore, "HH:mm");
	const ta = moment(timeAfter, "HH:mm");
	return ta.isAfter(tb);
};

export const isTimeValid = (time) => {
	const regex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
	return regex.test(time);
};


export const convertTimeToDateTime = (time) => {
	const dateTimeStr = `2000-01-01 ${time}`;
	return new Date(dateTimeStr);
}