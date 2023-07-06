var option = '';
var dataSet ;


function init() {
//     d3.json('Top 10 Automaker Stocks 2010-2022.json', function(data) {
//         for (let i = 0; i < 10; i++) {
//           console.log(`Name: ${data[i].Name}, Rank: ${data[i].Rank}`);
//         }
//       })};

  // d3.json('Largest automakers by market capitalization.json').then(function(data){
  //   dataSet = data;

  //   console.log(dataSet)});
  // }
    

  d3.json("./Resources/Largest automakers by market capitalization.json", function(error, data) {
    if (error) throw error;
    console.log(data);
    console.log("Data loaded successfully.");
  })};
//     displayMetaData(940,dataSet);
//     displayHBarChart(940,dataSet);
//     displayBubbleChart(940,dataSet);

//     var optionMenu = d3.select('#selDataset');

//     data.names.forEach(function(name){
//       optionMenu.append('option').text(name);
//     });
//  })
// }

// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }

// function optionChanged(value) {
//     option = value;
//     displayMetaData(option,dataSet);
//     displayHBarChart(option,dataSet);
//     displayBubbleChart(option,dataSet);
// }

// function displayMetaData(option,dataSet) {
    
    
//     var mtdata = dataSet.metadata.filter(row => row.id == option);
//     d3.select('#sample-metadata').html(displayObject(mtdata[0]));
        
// }

// function displayObject(obj) {
//     var str = '';
//     Object.entries(obj).forEach(([key,value]) => {
//         str += `<br>${key}:${value}</br>`;
//         if(key=='wfreq'){
//             buildGauge(value);
//             console.log('gauge value is:' +value);
//         }
        
//     });
//     return str;
// }

// function displayHBarChart(option,dataSet) {
    
//     var barData = dataSet.samples.filter(sample => sample.id == option);
//     console.log(barData);
    

//     var y = barData.map(row =>row.otu_ids);  
//     var y1 =[];

    
//     for(i=0;i<y[0].length;i++){
//         y1.push(`OTU ${y[0][i]}`);
//     }

//     var x = barData.map(row =>(row.sample_values));
//     var text = barData.map(row =>row.otu_labels);
   
//     var trace = {
//         x:x[0].slice(0,10),
//         y:y1.slice(0,10),
//         text:text[0].slice(0,10),
//         type:'bar',
//         orientation:'h',
//         marker: {
//             color: 'rgba(121, 40, 198, 1)',
//             width: 1
//           }
//     };

//     var data = [trace];

//     var layout = {
//         yaxis: {
//             autorange: 'reversed' 
//         },
//         xaxis: {
//             title: 'Top 10 Bacteria Cultures Found' 
//         }
//     }
    
    
//     Plotly.newPlot('bar',data,layout);
// }

// function displayBubbleChart(option,dataSet) {

//     var barData = dataSet.samples.filter(sample => sample.id == option);
//     console.log(barData); 

//     var x = barData.map(row =>row.otu_ids); 
//     var y = barData.map(row =>row.sample_values); 
//     var text = barData.map(row =>row.otu_labels);
//     var marker_size = barData.map(row =>row.sample_values);
//     var marker_color = barData.map(row =>row.otu_ids);
    
//     console.log(x[0]);
//     console.log(y[0]);
//     console.log(text);
    
//     var trace1 = {
//         x:x[0],
//         y:y[0],
//         text: text[0],
//         mode:'markers',
//         marker: {
//             color: marker_color[0],
//             size: marker_size[0],
//             colorscale: 'Jet'
//         }
        
//     };

//     var data = [trace1];

//     var layout = {
//         xaxis:{
//             title: 'OTU ID'
//         },
//         yaxis:{
//             title: 'Bacteria Cultures Per Sample'
//         }
//     };

//     Plotly.newPlot('bubble',data,layout);

// }



// init();


 



// Highcharts.chart('container', {
//   colors: ['#7CB5EC', '#346DA4','#10487F'],
//   chart: {
//     type: 'packedbubble',
//     height: '100%'
//   },
//   title: {
//     text: 'Top 10 Automakers by Market Cap'
//   },
//   subtitle:{
//     text:'(In October 2020)'
//   },
//   tooltip: {
//     useHTML: true,
//     pointFormat: '<b>{point.name}:</b> {point.value} USD b$'
//   },
//   plotOptions: {
//     packedbubble: {
//       minSize: '20%',
//       maxSize: '100%',
//       layoutAlgorithm: {
//         gravitationalConstant: 0.05,
//         splitSeries: true,
//         seriesInteraction: false,
//         dragBetweenSeries: true,
//         parentNodeLimit: true
//       },
//       dataLabels: {
//         enabled: true,
//         format: '{point.name}',
//         style: {
//           textOutline: 'none',
//           fontWeight: 'normal'
//         }
//       }
//     }
//   },
//   series: [{
//     name: 'Europe',
//     data: [{
//       name: 'Volkswagen',
//       value: 84.44,
//       dashStyle: 'longdash',
//     }, {
//       name: 'Daimler',
//       value: 60.89
//     },
//     {
//       name: "BMW",
//       value: 48.60
//     },
//     {
//       name: "Ferrari",
//       value: 45.8
//     },
//     {
//       name: "PSA",
//       value: 16.27
//     },
//     {
//       name: "Renault",
//       value: 7.69
//     }]
//   }, {
//     name: 'America',
//     data: [{
//       name: "Tesla",
//       value: 416.19
//     },
//     {
//       name: "General Motors",
//       value: 45.61
//     },
//     {
//       name: "Ford",
//       value: 30.87
//     },
//     {
//       name: "Nokila",
//       value: 9.18
//     }]
//   }, {
//     name: 'Asia',
//     data: [{
//       name: "Toyota",
//       value: 184.11
//     },
//     {
//       name: "BYD",
//       value: 51.65
//     },
//     {
//       name: "Honda",
//       value: 41.21
//     },
//     {
//       name: "SAIC",
//       value: 35.31
//     },
//     {
//       name: "Maruti Suzuki",
//       value: 28.83
//     },
//     {
//       name: "NIO",
//       value: 26.43
//     },
//     {
//       name: "Suziki",
//       value: 22.29
//     },
//     {
//       name: "Geely",
//       value: 21.20
//     },
//     {
//       name: "Subaru",
//       value: 15.11
//     }, {
//       name: "Xpeng",
//       value: 14.88
//     },
//     {
//       name: "Nissan",
//       value: 14.07
//     },
//     {
//       name: "Mahindra",
//       value: 10.57
//     },
//     {
//       name: "Changan",
//       value: 9.5
//     },
//     {
//       name: "FAW",
//       value: 8.28
//     }]
//   }]
// });
//source: https://docs.google.com/spreadsheets/u/1/d/1HflVng6sYIb6Gs4pOKiDGtqU5YJ2-hgdM4pRNaT62gs/htmlview ?