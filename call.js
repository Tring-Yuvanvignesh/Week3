let name = {
    firstName: "Yuvan",
    lastName: "Vignesh",
    fullname: function () {
        console.log(this.firstName+" "+this.lastName);
    }
}

let name2 = {
    firstName: "sonthosh",
    lastName: "kumar"
}

name.fullname();
name.fullName.call(name2)


// same with detached function from object

let fullName = function() {
    console.log(this.firstName+" "+this.lastName);
}

let name3 = {
    firstName: "Raja Raja",
    lastName: "cholan"
}

fullName.call(name3)


// Pass arguments into the function

let callwithargument = function(city) {
    console.log(this.firstName+" "+this.lastName+" from "+city)
}

let name4 = {
    firstName: "jason",
    lastName: "sanjoy"
}

callwithargument.call(name4, "madurai")

// Pass multiple arguments into the function

let callwithmultiarguments = function(city, country) {
    console.log(this.firstName+" "+this.lastName+" from "+city+" in "+country)
} 

let name5 = {
    firstName: "Dwayne",
    lastName: "Johnson"
}

callwithmultiarguments.call(name5, "madurai", "Tamil nadu")