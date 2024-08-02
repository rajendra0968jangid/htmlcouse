// function hello(){
//     try{
//         console.log('hello')
//     }catch(error){
//         console.log(error.message)
//     }
// }

// hello()

async function hello() {
    try {
        const response = await fetch("https://api.ipify.org/?format=json")
        const jsonResponse = await response.json()
        console.log(jsonResponse)
    } catch (error) {
        console.log(error.message)
    }
}
// hello()

// function hello() {
//     new Promise((resolve, reject) => {
//         fetch("https://api.ipify.org/?format=json")
//             .then(response => response.json())
//             .then(jsonResponse => resolve(jsonResponse))
//             .catch(error => reject(error));
//     })
//         .then(jsonResponse => {
//             console.log(jsonResponse);
//         })
//         .catch(error => {
//             console.log(error.message);
//         });
// }

// hello();


const pincode = async () => {
    try {
        const response = await fetch("https://api.ipify.org/?format=json")
        const jsonResponse = await response.json()
        console.log(jsonResponse)
    } catch (error) {
        console.log(error.message)
    }
}
// pincode()

const address = async (a) => { //parameter ->a=305627
    try {
        const response = await fetch(`https://api.zippopotam.us/IN/${a}`)
        const jsonResponse = await response.json()
        console.log(jsonResponse)
    } catch (error) {
        console.log(error.message)
    }
}
// address(305627) //argument->305627


const cricket = async () => {
    try {
        const response = await fetch("https://api-v1.com/v1/sV3.php?key=NZQ")
        const jsonResponse = await response.json()
        console.log(jsonResponse["j"])
        console.log(jsonResponse["A"])
        console.log(jsonResponse)
    } catch (err) {
        console.log(err.message)
    }
}
cricket()