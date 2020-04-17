function testNum (num) {
    return new Promise((resolve, reject) => {
        if (num > 50) {
            resolve(num + ' is greater that 50!')
        } else {
            reject(num + ' is less than 50!')
        }
    })
}

testNum(39)
.then((message) => {console.log(message)})
.catch((error) => {console.log(error)});

testNum(59)
.then((message) => {console.log(message)})
.catch((error) => {console.log(error)});
