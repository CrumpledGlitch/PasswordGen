function getEasyPassword() {
    const chars= "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    let passwordLength= 8
    let password = '';
    for (let i=0; i< passwordLength; i++) {
        let randomNumber =Math.floor(Math.random() * chars.length);
        password+= chars.substring(randomNumber, randomNumber +1);
        // console.log(password)
        }
        document.getElementById("password").value=password;
}

function getHardPassword() {
    const chars= "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!?."

    let passwordLength= 10
    let password = '';
    for (let i=0; i< passwordLength; i++) {
        let randomNumber =Math.floor(Math.random() * chars.length);
        password+= chars.substring(randomNumber, randomNumber +1);
        // console.log(password)
        }
        document.getElementById("password").value=password;
}


function getHarderPassword() {
    const chars= "1234567890-=!£$%^&*()_+`¬QWERTYUIOP{}[]ASDFGHJKL:@~;'#|\ZXCVBNM<>?,./qwertyuiopasdfghjklzxcvbnm"

    let passwordLength= 16
    let password = '';
    for (let i=0; i< passwordLength; i++) {
        let randomNumber =Math.floor(Math.random() * chars.length);
        password+= chars.substring(randomNumber, randomNumber +1);
        // console.log(password)
        }
        document.getElementById("password").value=password;
}

function getInsanePassword() {
    const chars= "1234567890-=!£$%^&*()_+`¬QWERTYUIOP{}[]ASDFGHJKL:@~;'#|\ZXCVBNM<>?,./qwertyuiopasdfghjklzxcvbnm"

    let passwordLength= 24
    let password = '';
    for (let i=0; i< passwordLength; i++) {
        let randomNumber =Math.floor(Math.random() * chars.length);
        password+= chars.substring(randomNumber, randomNumber +1);
        // console.log(password)
        }
        document.getElementById("password").value=password;
}
