const student = {
    name: "fakibaz",
    job: "practice kam kora",
    address: "janina"
}
const {address, ...rest} = student;
console.log(rest);