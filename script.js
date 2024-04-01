let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Kashmir', 'Samundri', 'Quetta'];


// Simple Alert

function simpleAlert() {
    alert("Someone Clicked Me");
}
// Print MyName
function printName() {
    let myName = document.getElementById('inputText').value;

    if (!myName) {
        alert('Please enter your name ')
        return;
    }
    document.getElementById("output").innerHTML = myName
}

// Print All cities
function printAllCities() {

    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ') ' + cities[i] + '<br />'

    }
}

// Add cities into the list

function addCity() {

    let city = document.getElementById('inputText').value;
    if (!city) {
        alert("Please enter your city");
        return;
    }

    cities.push(city);
    // console.log(cities)
    document.getElementById("output").innerHTML = '<span style="color: green; font-size: 20px;">"' + city + "'</span> has been successfully added into the list."

}

// Generate a table 
function generateTable() {
    let number = document.getElementById('inputText').value;
    if (!number) {
        alert('Please enter a number')
    }
    let limit = +prompt('Give a number')
    document.getElementById('output').innerHTML = "";
    for (let index = 1; index <= limit; index++) {
        document.getElementById('output').innerHTML += number + " * " + index + " = " + number * index + "<br>";
    }
}

// Clear Input 
function  clearBtn(){
    document.getElementById("inputText").value = ""
}

// Clear Output
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}