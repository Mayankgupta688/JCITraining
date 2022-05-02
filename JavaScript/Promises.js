var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({
            userName: "Mayank",
            userAge: 20
        })
    }, 5000)
})

myPromise.then((data) => {
    console.dir(data)
}, (err) => {
    console.dir(data)
})