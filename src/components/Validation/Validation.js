
export function isUsernameValid(username) {
    const pattern =/^[a-zA-Z]*$/
 let usernameVal = pattern.test(username);
 if(usernameVal)
 {
    if (username.length > 21) {
        window.alert('Name must be maximum 20 characters in length.');
    }
    else
        return true;
}
else
        window.alert('Name must be characters');

 }


export function isEmailVaild(email) {
    const pattern = /^[a-zA-Z0-9.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    let emailVal = pattern.test(email);
    if (!emailVal) {
        window.alert('Please enter a valid email.');
    }
    else
        return true;
}



export function isNotEmpty(userData) {
    let validatedObject = Object.keys(userData).some(key => {
        // console.log(key);
        return userData[key] === '';
    })
    if (validatedObject)
        window.alert('Please fill all the fields');
    else
        return true;
}