// hepsinden once filteredData elde etmem lazim ki onu asagida table olarak vere bileyim 

var submit = d3.select("#submit");

submit.on("click", function(){

  d3.event.preventDefault();

  var inputElement = d3.select("#input-field");

  var inputValue = inputElement.property("value");

  var filteredDataSet = dataSet.filter(result => result.datetime === inputValue);

  var tbody = d3.select("tbody");

  d3.select('tbody')
  .selectAll('tr')
  .data(filteredDataSet)
  .enter()
  .append("tr")
  .html(d => `<td>${d.datetime}</td>
              <td>${d.city}</td>
              <td>${d.state}</td>
              <td>${d.country}</td>
              <td>${d.shape}</td>
              <td>${d.durationMinutes}</td>
              <td>${d.comments}</td>`);


});



// grapping tbody

// var tbody = d3.select("tbody");

// populating table

// dataSet.forEach(report => {
//     var tr = tbody.append("tr");

//     Object.value(report).forEach(value =>{
//         var td = tr.append("td").text(value);
//     });
// });

// d3.select('tbody')
//   .selectAll('tr')
//   .data(filteredDataSet)
//   .enter()
//   .append("tr")
//   .html(d => `<td>${d.datetime}</td>
//               <td>${d.city}</td>
//               <td>${d.state}</td>
//               <td>${d.country}</td>
//               <td>${d.shape}</td>
//               <td>${d.durationMinutes}</td>
//               <td>${d.comments}</td>`);





