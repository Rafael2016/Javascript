// PROMISES

const onePromise =()=>{
    new Promise((resolve,reject)=>{
        setTimeout(function(){ 
            resolve('1º Promise')
        }, 100);

    })
}
const twoPromise =()=>{
    new Promise((resolve,reject)=>{
        setTimeout(function(){ 
            resolve('2º Promise')
        }, 100);

    })
}

onePromise().then(
    data=>{console.log(data)
});
