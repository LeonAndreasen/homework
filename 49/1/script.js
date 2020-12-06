//Upp och nedvänd triangel
let str = ''
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        str = str + '*'
    }
    str = str + '\n'}
    console.log(str)

    //mellanslag efter varje
    let a = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        a = a + ' *'
    }
    a = a + '\n'
}
console.log(a)

let f = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        f = f + '*'
    }
    f = f + '\n' 
}
hello