// function hello(){
//     console.log('my first function');
// }

// hello()

// function rajendra(a,b=0){
//     console.log(a,b)
// }

// rajendra("hello",24)
// rajendra("hello1")
// rajendra(24)


// function rajendra1(...a) {
//     console.log(a)
// }

// rajendra1("hello", 24, true)


// function rajendra2(b,...a){
//     console.log(b,a)
// }

// rajendra2("hello",24,true)

// function rajendra3(...a){
//     console.log(a)
// }
// let age = 24
// let name = "hello"
// let obj = {name,age}
// let arr = [name,age]
// rajendra3(arr,obj)

// function rajendra4(){
//     console.log('hello')
//     let arr1 = ["hello",24,true]
//     let arr2 = ["hello1",25,false]
//     return {arr1,arr2}
// }

// let fun = rajendra4()
// console.log("fun",fun)


function rajendra5(){
    try{
        return "hello"
    }
    catch(error){
        return {"errormessage":error.message}
    }
}
let fun1 = rajendra5()
if(fun1["errormessage"]){
    console.log("code mistake")
}
else{
    console.log(fun1)
}