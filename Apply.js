
// only diff from call is instead of multiple arguments we send the arguments in a array

let callwithmultiarguments = function(city, state) {
    console.log(this.firstName+" "+this.lastName+" from "+city+" in "+state)
} 

let name5 = {
    firstName: "Dwayne",
    lastName: "Johnson"
}

callwithmultiarguments.apply(name5, ["madurai", "Tamil nadu"])