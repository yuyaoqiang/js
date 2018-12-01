//  function testA() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(1)
//            }, 3000);
//     })
// }
//  function testC() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(2)
//            }, 1000);
//     })
// }
// async  function  testB() {
//    let val1 = await testA();
//    console.log(val1)
//    let val2 = await testC();
//    console.log(val2)
//   console.log(4);
// }
// testB();


function testA(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("a")
            resolve("a")
        }, 4000)
      
    })
    
}
function testB(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("b")
        resolve("b")
        }, 2000);
    })
}
async function testC() {
     await testA();
     await testB();
    console.log("c")
}
testC();



