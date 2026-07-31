export const loginData = {
    validUser: {
        username: "standard_user",
        password: "secret_sauce"
    },

    invalidUsername: {
        username: "wrong_user",
        password: "secret_sauce"
    },

    invalidPassword: {
        username: "standard_user",
        password: "wrong_password"
    },

    invalidCredentials: {
        username: "wrong_user",
        password: "wrong_password"
    },

    emptyUsername: {
        username: "",
        password: "secret_sauce"
    },

    emptyPassword: {
        username: "standard_user",
        password: ""
    },

    emptyCredentials: {
        username: "",
        password: ""
    },

    lockedUser: {
        username: "locked_out_user",
        password: "secret_sauce"
    }
};