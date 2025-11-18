function number(num){
    let p = new Promise((resolve, reject)=>{
        if(num%2==0){
            resolve('success')
        }else{
            reject('fail')
        }
    })
    p.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log("error ",error);
})
}
number(9);
