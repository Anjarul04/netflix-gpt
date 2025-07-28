export const checkValidateData = (email, password, )=>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    // const isFullNameValid = /^[A-Za-z ]{2,}$/.test(fullName);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "password is not valid";
    // if(!isFullNameValid) return "Name is not valid";
    return null;
}