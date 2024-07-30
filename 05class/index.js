// let num1 = 10;

// if(num1 > 18){
//     console.log("yes num1 is greater");
// }
// else{
//     console.log("yes num1 is smaller");
// }


// let num1 = 19

// if(num1 > 18){
//     console.log("yes num1 is greater then 18");
// }
// else if(num1 == 18){
//     console.log('yes num1 is equal to 18')
// }
// else{
//     console.log('yes num1 is smaller then 18')
// }

// let num1 = 1000
// let num2 = 200
// let num3 = 30

// if(num1 > num2 && num1 > num3){
//     console.log("num1")
// }
// else if(num2 > num3){
//     console.log("num2")
// }
// else{
//     console.log("num3");
// }


// let num1 = 10
// let num2 = 20
// let num3 = 30

// let age = 18

// let -> user year ,month,date


// let Dyear = 2002
// let Dmonth = 6
// let Ddate = 1

// let date = new Date()
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())

// let num1 = "4";

// switch(num1){
//     default:
//         console.log("default")
//         break;
//     case "1":
//         console.log("one")
//         break
//     case '2':
//         console.log("two")
//         break;
// }

// let num1 = 5;
// let i = 1
// while (i < 11) {
//     console.log(`${num1}x${i}=${num1 * i}`)
//     i += 1;
// }

// 2x1=2
// 2x2=4


// do{

// }while();
// let table = 18
// for (let i = 1; i < 11; i += 1) {
//     console.log(`${table}x${i}=${table*i}`)
// }

// let str = "rajendra jangid"
// let rev = ""
// for(let i=str.length-1;i>=0;i -= 1){
//     // console.log(str[i])
//     rev += str[i]
// }

// console.log(rev);


// let str = [{"name":"hello","age":24},{"name":"rajendra"}]

// const result = str.map((item,index)=>{
//     console.log(item["name"])
//     console.log(item["age"] || 100)
// })
// let str = [
//     { "id": "1001", "type": "Regular" },
//     { "id": "1002", "type": "Chocolate" },
//     { "id": "1003", "type": "Blueberry" },
//     { "id": "1004", "type": "Devil's Food" }
// ]

// const result = str.map((item, index) => {
//     if(item.id == 1001 || item.id == 1002){
//         console.log(item.id);
//     }
// })


// let arr = [[1,2,3],[4,5,6]]

// const result = arr.map((item)=>{
//     item.map((i)=>{
//         console.log(i)
//     })
// })

// let arr = [[[1,2,3],[4,5,6]]]

// arr.map((item)=>{
//     item.map((i)=>{
//         i.map((j)=>{
//             console.log(j)
//         })
//     })
// })
let arr = [[[1, 2, 3, 4, 5, 6]], [[7, 8, 9, 10]], [11, 12, 13, 14]]

arr.map((item) => {
    item.map((i, index) => {
        if (index <= 1) {
            i.map((j) => {
                console.log(j);
            })
        }
        else{
            console.log(i);
        }
    })
})