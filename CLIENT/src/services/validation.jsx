const ValidationService = {
    fieldsValid: (name, value, formErrors) => {
        const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/);
        switch (name) {
            case "username":
                formErrors.usernameError = value.length < 3 ? "Minimum 3 characters is required" : "";
                break;
            case "email":
                formErrors.emailError = emailRegex.test(value) ? "" : "Invalid email address";
                break;
            case "password":
                formErrors.passwordError = value.length < 6 ? "Minimum 6 characters is required" : "";
                break;
            case "confirmPassword":
                formErrors.confirmError = value.length < 6 ? "Minimum 6 characters is required" : "";
                break;
            default:
                break;
        }
        return formErrors;
    },
    formValid: ({formErrors, ...rest}) => {
        let valid = true;
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });
        Object.values(rest).forEach(val => {
            val === "" && (valid = false);
        });
        return valid;
    },
    passValid: (password, confirm, formError) => {
        return confirm.localeCompare(password) !== 0 ?
            formError.confirmPassword = "Passwords must be identical" :
            formError.confirmPassword = "";
    }
}
export default ValidationService;