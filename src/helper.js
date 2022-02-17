export const isValidEmail = str => {
    const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return isValid.test(str)
};

export const isValidPassword = str => {
    const isValid = /((?=.*[a-z])(?=.*[A-Z]).{6,20})/;
    return isValid.test(str)
}