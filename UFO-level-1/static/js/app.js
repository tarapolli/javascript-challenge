// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends 
//    a table to your web page and then adds new rows of data for each UFO sighting.

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
// button.on("click", runEnter);
// form.on("submit", runEnter);

// Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

//   var filteredData = people.filter(person => person.datetime === inputValue);

//   console.log(filteredData);
// }
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var datetime = math.mean(ages);
//   var city = math.median(ages);
//   var state = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);


var tbody = d3.select("tbody");

data.forEach((ufo_info) => {
    var row = tbody.append("tr");
    Object.entries(ufo_info).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });