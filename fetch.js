async function hello() {
    try {
        const response = await fetch('https://www.meesho.com/api/v1/user/login/request-otp', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "phone_number": "6378852898"
            }),
        })
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        // return response
    } catch (err) {
        console.log(err.message)
    }
}
// const result = hello()

async function otp() {
    try {
        const response = await fetch('https://www.meesho.com/api/v1/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "request_id": "b3M.9JCjFVv95I",
                "instance_id": "e11efda2-5895-4216-8ebc-03b3d058",
                "phone_number": "6378852898",
                "otp": "460563",
                "login_type": "meesho_sms_auth"
            }),
        })
        const jsonResponse = await response.json();
        console.log(jsonResponse)
    } catch (err) {
        console.log(err.message)
    }
}
// otp()


async function pincode(a) {
    try {
        const response = await fetch(`https://api.zippopotam.us/IN/${a}`)
        const jsonResponse = await response.json();
        console.log(jsonResponse)
    } catch (err) {
        console.log(err.message)
    }
}

// pincode()


const ipApi = async () => {
    try {
        const response = await fetch("https://api.ipify.org/?format=json")
        const jsonResponse = await response.json()
        console.log(jsonResponse)
    } catch (err) {
        console.log(err.message)
    }
}

// ipApi()