import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
	if (typeof window !== "undefined") {
		const user = localStorage.getItem("user");
		if (user) {
			try {
				return JSON.parse(user);
			} catch {
				return null;
			}
		}
	}
	return null;
};

const getTokenFromStorage = () => {
	if (typeof window !== "undefined") return localStorage.getItem("token") || "";
	return "";
};

const getRefreshTokenFromStorage = () => {
	if (typeof window !== "undefined") return localStorage.getItem("refreshToken") || "";
	return "";
};

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: getUserFromStorage(),
		token: getTokenFromStorage(),
		refreshToken: getRefreshTokenFromStorage(),
	},
	reducers: {
		setUserData: (state, { payload }) => {
			if (typeof window !== "undefined") localStorage.setItem("user", JSON.stringify(payload));
			state.user = payload;
		},
		setToken: (state, { payload }) => {
			if (typeof window !== "undefined") {
				if (payload) {
					localStorage.setItem("token", payload?.accessToken || payload.accessTocken);
					localStorage.setItem("refreshToken", payload?.refreshToken || payload.refreshTocken);
				} else {
					localStorage.removeItem("token");
					localStorage.removeItem("refreshToken");
				}
			}
			state.token = payload?.accessToken || payload.accessTocken || "";
			state.refreshToken = payload?.refreshToken || payload.refreshTocken || "";
		},
		logoutUser: (state) => {
			if (typeof window !== "undefined") localStorage.clear();
			state.user = null;
			state.token = "";
			state.refreshToken = "";
		},
	},
});
export const { setUserData, setToken, logoutUser } =
	userSlice.actions;

export default userSlice.reducer;
