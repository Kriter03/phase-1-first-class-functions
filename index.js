function receivesAFunction(callback) {
    return callback('Hello')
}
function returnsANamedFunction() {
    return function beforeAll() {

    }
}
function returnsAnAnonymousFunction() {
    return function () {
        
    }
}