import { auth } from "@/auth";

export const getAuthHeader = async () => {
	const session = await auth();
	const token = session?.accessToken;

	let authHeader = {
		"Content-Type": "application/json",
	};

	if (token) {
		authHeader["Authorization"] = token;
	}

	return authHeader;
};

const parseJWT = (token) => {
	// token.split(".") -> token dan nokta karakterine gore 3 elemanli bir dizi olsturur
	// token.split(".")[1] -> 1. elemani alir
	// atob(...) -> base64 ile sifrelenmis datayi decode eder
	// JSON.parse(...) -> decode edilen datayi json formatina cevirir

	return JSON.parse(atob(token.split(".")[1]));
};

export const getIsTokenValid = (token) => {
	if (!token) return false;

	const jwtExpireTimeStamp = parseJWT(token).exp;
	// Burada gelen exp degeri SANIYE cinsinden olur.

	const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);
	// SANIYE degerini MILI SANIYEYE cevirirerek DATE TIME nesnesi olusturur.

	return jwtExpireDateTime > new Date();
};
