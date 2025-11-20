// function fetchdata() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Task Completed");
//             resolve();
//         },3000);
//     });
// }
// async function run(){
//     try 
//     {
//         await fetchdata();
//         console.log("Promise fulfilled");}
//     catch 
//     {
//         console.log("promise failed");
//     }
// }
// run();

async function fetchdata(){
    try
    {const response = await fetch('https://jsonplaceholderr.typicode.com/posts');
    const data = await response.json();
    data.forEach(pop=>{
        console.log(pop.id);
    })}
    catch(error)
    {
        console.log('fetch failed');
        throw error;
    }
}
fetchdata()
.then((result)=> console.log("fetch success "))
.catch((error)=>console.log("fetch failed !"));