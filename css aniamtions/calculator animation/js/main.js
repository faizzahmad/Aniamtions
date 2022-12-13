const result = document.getElementById("para");
let firstnum = document.getElementById("num1");
let secondnum = document.getElementById("num2");
let listvalue = document.getElementById("list");


const setdat = () => {
    event.preventDefault();
    const data = (listvalue.value == "add") ? (parseInt(firstnum.value) + parseInt(secondnum.value)) : (listvalue.value == "sub") ? (parseInt(firstnum.value) - parseInt(secondnum.value)) : (listvalue.value == "mult") ? (parseInt(firstnum.value) * parseInt(secondnum.value)) : (listvalue.value == "div") ? (parseInt(firstnum.value) / parseInt(secondnum.value)) : alert("please see the details some data is not filled");
    result.innerHTML = data;
}