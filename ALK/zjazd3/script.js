// const dataArray = [
//     { name: "Jan Kowalski", age: 32 },
//     { name: "Jacek Nowak", age: 83 },
//     { name: "Marian Koniuszko", age: 15 }
// ];


// function addData(param,param2){
//     return new Promise( (resolve, reject) => {
//     dataArray.push(param);
//     console.log("dataArray",dataArray);
//     resolve(dataArray);
// })
// }

// function getData(){
    
//     setTimeout( () => {
//         let output = '';
//         dataArray.forEach( (el,index,arr) => {
//             output = output +  `<li> ${index+1} ${el.name} ${el.age} </li>`
//             console.log(`output ${index}`, output)
//         })
//         document.body.innerHTML = output;
//     }, 5000)
// }


//     async function run(){
//         await addData({name: "Jan Miłosz", age: 45},8888)
//         getData();
//     }
    
//     run()

    ////////////
//     fetch("https://raw.githubusercontent.com/TheLegend-25/api-exampleALK/main/data.json",{
//     method: "GET",
//     Headers: {'Content-Type':'application/json'}
// })
//     .then( data => data.json())
//     .then( data => console.log("data",data))

    async function run2 (){
        const apiValue = await fetch("https://raw.githubusercontent.com/TheLegend-25/api-exampleALK/main/data.json")
        const ApiValJSON = await apiValue.json()
        console.log("apiValJSON",ApiValJSON)

    }
    run2();