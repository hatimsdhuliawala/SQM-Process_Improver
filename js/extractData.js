// In this example we will use dataframe-js to analyse a simple data set.
// The aim of this snippet is  (not really to explore data but) to play with the library in order to do simple things.
// You will find the code, explanations and results as comments.

// Here we import the lib.
// You can also: import { DataFrame } from 'dataframe-js';


// Here we load the titanic data set from the well known Rdatasets (http://vincentarelbundock.github.io/Rdatasets/datasets.html).
// We get the result via a Promise, as a new DataFrame. We rename it 'df'.
//Ch_PS_12-13
// class renderDatasets {
//   constructor(datasetName, parentDiv) {
//     this.datasetName=datasetName;
//     this.parentDiv=parentDiv;
//     dataname=datasetName;
//     divnme=parentDiv;
//     console.log(dataname, divnme);
//   }

//}
var dataset1Data, dataset2Data, dataset3Data, dataset4Data, dataset5Data;
//var chartVar;
var DataFrame;
var getData, getPieData,getDoughnutData;
var getData, getPieData,getDoughnutData; var getStackData = [];
class Datasets {
    constructor() {
        DataFrame = dfjs.DataFrame;
        console.log("Instance to Dataframe created");
    }
}
class Dataset1 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset1(datasetName, parentDiv);
    }

}
class Dataset2 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset2(datasetName, parentDiv);
    }

}
class Dataset3 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset3(datasetName, parentDiv);
    }

}
class Dataset4 extends Datasets {
  constructor(datasetName, parentDiv) {
    super();
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
    var test = new renderDatasets(datasetName, parentDiv);
    test.rederDataset4(datasetName, parentDiv);
  }

}
class Dataset5 extends Datasets {
  constructor(datasetName, parentDiv) {
    super();
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
    var test = new renderDatasets(datasetName, parentDiv);
    test.rederDataset5(datasetName, parentDiv);
  }

}
class renderDatasets {
    constructor(datasetName, parentDiv) {
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
    }
    rederDataset2(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //chart()
                // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
                // chartVar = groupedDF.toCollection();
                //console.log(groupedDF.aggregate(group => group.count()));

                //console.log(cleanDF.listColumns());
                const selectColumns = df.select('');
                dataset2Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                    '';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset2Data.length; i++) {
                    var content = '<tr>' +
                        '<td>' +'</td>' +
                       
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }


    rederDataset1(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //console.log(cleanDF.listColumns());

                const selectColumns = df.select('Task','Start Date','End Date','Resources');
                var dataset1Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>Task</th><th>Start Date</th><th>End Date</th><th>Resources</th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset1Data.length; i++) {
                    var content = '<tr>' +
                                    '<td>'+dataset1Data[i]["Task"]+'</td>'+
                                    '<td>'+dataset1Data[i]["Start Date"]+'</td>'+
                                    '<td>'+dataset1Data[i]["End Date"]+'</td>'+
                                    '<td>'+dataset1Data[i]["Resources"]+'</td>'+
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }

    rederDataset3(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //chart()
                // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
                // chartVar = groupedDF.toCollection();
                //console.log(groupedDF.aggregate(group => group.count()));

                //console.log(cleanDF.listColumns());
                const selectColumns = df.select('Milestone','Actual Completion Date');

                dataset3Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                              '<th>Milestone</th><th>Actual Completion Date</th>'
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset3Data.length; i++) {
                    var content = '<tr>' +
                                      '<td>'+dataset3Data[i]["Milestone"]+'</td>'+
                                      '<td>'+dataset3Data[i]["Actual Completion Date"]+'</td>'+
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }
    rederDataset4(datasetName, parentDiv) {
      DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
          df => {
            //chart()
            // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
            // chartVar = groupedDF.toCollection();
                            //console.log(groupedDF.aggregate(group => group.count()));

               //console.log(cleanDF.listColumns());
               const selectColumns = df.select('Resource ID','Full Name',
                                                'Title','Tech Area','Email Address',
                                                'Hours Utilization','Average Rating');


                  dataset4Data = selectColumns.toCollection();
                   //console.log(test);
                   var thead = '<tr>'+
                          '<th>Resource ID</th><th>Full Name</th><th>Title</th><th>Tech Area</th>'+
                          '<th>Email Address</th><th>Hours Utilization</th><th>Average Rating</th>';
                                 '</tr>';
                    $("#"+parentDiv+"Table thead").html(thead);
                    var tbody = $("#"+parentDiv+"Table tbody");

              for ( var i = 0; i < dataset4Data.length; i++) {
                var content = '<tr>'+
                                '<td>'+dataset4Data[i]["Resource ID"]+'</td>'+
                                '<td>'+dataset4Data[i]["Full Name"]+'</td>'+
                                '<td>'+dataset4Data[i]["Title"]+'</td>'+
                                '<td>'+dataset4Data[i]["Tech Area"]+'</td>'+
                                '<td>'+dataset4Data[i]["Email Address"]+'</td>'+
                                '<td>'+dataset4Data[i]["Hours Utilization"]+'</td>'+
                                '<td>'+dataset4Data[i]["Average Rating"]+'</td>'+
                              '</tr>';
                $(tbody).append(content);
              }
          }
      ).catch(err => {
          console.log(err);
      });
    }

     rederDataset5(datasetName, parentDiv) {
    DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
        df => {
          //chart()
          // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
          // chartVar = groupedDF.toCollection();
                          //console.log(groupedDF.aggregate(group => group.count()));

             //console.log(cleanDF.listColumns());
             const selectColumns = df.select('Task','Actual Start Date','Actual Completion Date',
                                              'Resources Worked on the Task');
                dataset5Data = selectColumns.toCollection();
                 //console.log(test);
                 var thead = '<tr>'+
                                    '<th>Task</th><th>Actual Start Date</th><th>Actual Completion Date</th><th>Resources Worked on the Task</th>';
                               '</tr>';
                  $("#"+parentDiv+"Table thead").html(thead);
                  var tbody = $("#"+parentDiv+"Table tbody");

            for ( var i = 0; i < dataset5Data.length; i++) {
              var content = '<tr>'+
                                '<td>'+dataset5Data[i]["Task"]+'</td>'+
                                '<td>'+dataset5Data[i]["Actual Start Date"]+'</td>'+
                                '<td>'+dataset5Data[i]["Actual Completion Date"]+'</td>'+
                                '<td>'+dataset5Data[i]["Resources Worked on the Task"]+'</td>'+
                            '</tr>';
              $(tbody).append(content);
            }
        }
    ).catch(err => {
        console.log(err);
    });
  }
}
/*class PlotChart {
    constructor(datasetName) {
        this.datasetName = datasetName;
    }
    sendData(datasetName) {
        console.log(datasetName + "In function");

        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
                getData = groupedDF.toCollection();
                console.log(getData);
                return false;
            }
        ).catch(err => {
            console.log(err);
        });
      }
    pieChartData (datasetName) {
      var safetyData;
      console.log(this.datasetName + "In PieChart function");

      DataFrame.fromCSV('datasets/' + this.datasetName + '.csv').then(
          df => {
              var VeryStrong = df.filter(row => row.get('Safety') === 'Very Strong').count();
              var Strong = df.filter(row => row.get('Safety') === 'Strong').count();
              var Average = df.filter(row => row.get('Safety') === 'Average').count();
              var Weak = df.filter(row => row.get('Safety') === 'Weak').count();
              var veryWeak = df.filter(row => row.get('Safety') === 'Very Weak').count();
              safetyData = {
                'Very Strong' : VeryStrong,
                'Strong' : Strong,
                'Average' : Average,
                'Weak' : Weak,
                'Very Weak' : veryWeak
              }
              getPieData = safetyData;
              return false;
              //getData = groupedDF.toCollection();
              //console.log(getData);

          }
      ).catch(err => {
          console.log(err);
      });
    }

    doughnutChartData (datasetName) {
      var CollaborativeData,as;
      console.log(this.datasetName + "In DoughnutChart function");

      as=DataFrame.fromCSV('datasets/' + this.datasetName + '.csv').then(
          df => {
              var NORTH_NORTHWEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'NORTH-NORTHWEST SIDE COLLABORATIVE').count();
              var SOUTH_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'SOUTH SIDE COLLABORATIVE').count();
              var SOUTHWEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'SOUTHWEST SIDE COLLABORATIVE').count();
              var FAR_SOUTH_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'FAR SOUTH SIDE COLLABORATIVE').count();
              var WEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'WEST SIDE COLLABORATIVE').count();
              CollaborativeData = {
                'NORTH-NORTHWEST SIDE COLLABORATIVE' : NORTH_NORTHWEST_SIDE_COLLABORATIVE,
                'SOUTH SIDE COLLABORATIVE' : SOUTH_SIDE_COLLABORATIVE,
                'SOUTHWEST SIDE COLLABORATIVE' : SOUTHWEST_SIDE_COLLABORATIVE,
                'FAR SOUTH SIDE COLLABORATIVE' : FAR_SOUTH_SIDE_COLLABORATIVE,
                'WEST SIDE COLLABORATIVE' : WEST_SIDE_COLLABORATIVE
              }
              getDoughnutData = CollaborativeData;
              resolve( CollaborativeData);
              //getData = groupedDF.toCollection();
              //console.log(getData);

          }
      ).catch(err => {
          console.log(err);
      });
      console.log(as+" sahi hai data");
      return as;
    }*/
//}
/* class BarChart extends PlotChart {
//     constructor(datasetName) {
//         super(datasetName);
//         this.datasetName = datasetName;

//     }
//     plotBarchart() {
//         super.sendData(this.datasetName);
//         //console.log(getData);
//         // var getData;
//         // DataFrame.fromCSV('datasets/'+this.datasetName+'.csv').then(
//         //     df => {
//         //       var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
//         //       getData = groupedDF.toCollection();
//         //     }
//         //   ).catch(err => {
//         //       console.log(err);
//         //   });
//         setTimeout(function() {
//             var labelArray = [];
//             var dataArray = [];
//             var backgroundColorArray = [];
//             var borderColorArray = [];
//             for (var i in this.getData) {
//                 labelArray.push(getData[i].ZIP);
//                 dataArray.push(getData[i].Count);
//                 var color1 = Math.ceil(Math.random() * 255);
//                 var color2 = Math.ceil(Math.random() * 255);
//                 var color3 = Math.ceil(Math.random() * 255);
//                 //console.log(color1, color2, color3);
//                 backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," + 0.6 + ")");
//                 borderColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," + 1 + ")");
//             }
//             var ctxBar = document.getElementById('dataset1BarChart');
//             var barChart = new Chart(ctxBar, {
//                 type: 'bar',
//                 data: {
//                     labels: labelArray,
//                     datasets: [{
//                         label: 'ZIP',
//                         data: dataArray,
//                         backgroundColor: backgroundColorArray,
//                         borderColor: borderColorArray,
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         yAxes: [{
//                             ticks: {
//                                 beginAtZero: true
//                             }
//                         }]
//                     }
//                 }
//             });
//         }, 2000);

//     }
// }

// class LineChart extends PlotChart {
//     constructor(datasetName) {
//         super(datasetName);
//         this.datasetName = datasetName;

//     }
//     plotLinechart() {
//         //super.sendData(this.datasetName); //Need to Change Later

//         setTimeout( function () {
//         var labelArray = [];
//         var dataArray = [];
//         var backgroundColorArray = [];
//         var borderColorArray = [];
//         for (var i in this.getData) {
//             labelArray.push(getData[i].ZIP);
//             dataArray.push(getData[i].Count);
//         }
//         var ctxLine = document.getElementById("dataset1LineChart");
//         var lineChart = new Chart(ctxLine, {
//             type: 'line',
//             data: {
//                 labels: labelArray,
//                 datasets: [{
//                     label: "ZIP",
//                     fill: false,
//                     lineTension: 0.1,
//                     backgroundColor: "rgba(75,192,192,0.4)",
//                     borderColor: "rgba(75,192,192,1)",
//                     borderCapStyle: 'butt',
//                     borderDash: [],
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: 'miter',
//                     pointBorderColor: "rgba(75,192,192,1)",
//                     pointBackgroundColor: "#fff",
//                     pointBorderWidth: 1,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: "rgba(75,192,192,1)",
//                     pointHoverBorderColor: "rgba(220,220,220,1)",
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 1,
//                     pointHitRadius: 10,
//                     data: dataArray,
//                     spanGaps: false,
//                 }]
//             }
//         });
//         }, 2000);

//     }
// }

// class PieChart extends PlotChart {
//     constructor(datasetName) {
//         super(datasetName);
//         this.datasetName = datasetName;

//     }
//     plotPiechart() {
//         super.pieChartData(this.datasetName);
//         console.log("PieData");
//         console.log(getData);
//         // var getData;
//         // DataFrame.fromCSV('datasets/'+this.datasetName+'.csv').then(
//         //     df => {
//         //       var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
//         //       getData = groupedDF.toCollection();
//         //     }
//         //   ).catch(err => {
//         //       console.log(err);
//         //   });
//         setTimeout(function() {
//             var labelArray = [];
//             var dataArray = [];
//             var backgroundColorArray = [];
//             var hoverBackgroundColor = [];
//             for (var i in getPieData) {
//                 labelArray.push(i);
//                 dataArray.push(getPieData[i]);
//                 var color1 = Math.ceil(Math.random() * 255);
//                 var color2 = Math.ceil(Math.random() * 255);
//                 var color3 = Math.ceil(Math.random() * 255);
//                 //console.log(color1, color2, color3);
//                 backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + ")");
//                 hoverBackgroundColor.push("rgba(" + color1 + "," + color2 + "," + color3 +")");
//             }
//             /*Pie Chart Start*/
//             var ctxPie = document.getElementById("dataset1PieChart");
//             var myPieChart = new Chart(ctxPie,{
//                 type: 'pie',
//                 data: {
//                   labels: labelArray,
//                   datasets: [
//                       {
//                           data: dataArray,
//                           backgroundColor: backgroundColorArray,
//                           hoverBackgroundColor: hoverBackgroundColor
//                       }]
//                     }
//             });
//             // /*Pie Chart END*/
//         }, 2000);

//     }



// }
// class DoughnutChart extends PlotChart {
//   constructor(datasetName) {
//       super(datasetName);
//       this.datasetName = datasetName;
//   }
//   plotDoughnutchart() {
//       var g=  super.doughnutChartData(this.datasetName);
//         console.log("DoughnutData");
//         console.log(getData);
//         // var getData;
//         // DataFrame.fromCSV('datasets/'+this.datasetName+'.csv').then(
//         //     df => {
//         //       var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
//         //       getData = groupedDF.toCollection();
//         //     }
//         //   ).catch(err => {
//         //       console.log(err);
//         //   });
//         setTimeout(function() {
//             console.log(g+' koi to hao')
//             var labelArray = [];
//             var dataArray = [];
//             var backgroundColorArray = [];
//             var hoverBackgroundColor = [];
//             for (var i in getDoughnutData) {
//                 labelArray.push(i);
//                 dataArray.push(getDoughnutData[i]);
//                 var color1 = Math.ceil(Math.random() * 255);
//                 var color2 = Math.ceil(Math.random() * 255);
//                 var color3 = Math.ceil(Math.random() * 255);
//                 //console.log(color1, color2, color3);
//                 backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + ")");
//                 hoverBackgroundColor.push("rgba(" + color1 + "," + color2 + "," + color3 +")");
//             }
//             /*Pie Chart Start*/
//             var ctxDoughnut = document.getElementById("dataset1DoughnutChart");
//             var myDoughnutChart = new Chart(ctxDoughnut,{
//                 type: 'doughnut',
//                 data: {
//                   labels: labelArray,
//                   datasets: [
//                       {
//                           data: dataArray,
//                           backgroundColor: backgroundColorArray,
//                           hoverBackgroundColor: hoverBackgroundColor
//                       }]
//                     }
//             });
//             // /*Pie Chart END*/
//         }, 2000);

//     }
// }
// class StackChart extends PlotChart {
//     constructor(datasetName) {
//         super(datasetName);
//         this.datasetName = datasetName;

//     }
//     plotStackchart(schoolArray) {
//       //var getstackData;
//       this.getstackChartData(schoolArray);
//       // getstackData = getstackChartData(schoolArray, (result) => {
//       //   Res = result;
//       // });
//       setTimeout ( function () {
//         var data1Array = [];
//         var data2Array = [];
//         data1Array = getStackData[0];
//         data2Array = getStackData[1];
//         console.log(data1Array, data2Array);
//         var backgroundColorArray = [];
//         var borderColorArray = [];
//         for (var i in data1Array) {
//             var color1 = Math.ceil(Math.random() * 255);
//             var color2 = Math.ceil(Math.random() * 255);
//             var color3 = Math.ceil(Math.random() * 255);
//             //console.log(color1, color2, color3);
//             backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," +Math.random()+ ")");
//             borderColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," +Math.random()+")");
//         }

//         var ctxStack = document.getElementById("dataset1StackChart");
//         var stackChart = new Chart(ctxStack, {
//         type: 'bar',
//         data: {
//             labels: schoolArray,
//             datasets: [{
//                 label: 'Average Student Attendance %',
//                 data: data1Array,
//                 backgroundColor: backgroundColorArray,
//                 borderColor: borderColorArray,
//                 borderWidth: 1
//             },
//     		      {
//                 label: 'Average Teacher Attendance',
//                 data: data2Array,
//                 backgroundColor: [
//                     'rgba(255, 159, 64, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 99, 132, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 159, 64, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 99, 132, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//     				stacked: true,
//                     ticks: {
//                         beginAtZero:true
//                     }
//                 }],
//                 xAxes: [{
//     				stacked: true,
//                     ticks: {
//                         beginAtZero:true
//                     }
//                 }]
//               }
//             }
//           });

//       }, 2000);

//     }

//     getstackChartData (schoolArray) {
//       var studentAttendance = [];
//       var teacherAttendance = [];
//       var val;
//       DataFrame.fromCSV('datasets/' + this.datasetName + '.csv').then(
//           df => {
//             for (var i in schoolArray) {
//               var ex = df.filter(row => row.get('School Name') === schoolArray[i]).toCollection();
//               var studentAttendanceVal = ex[0]['Average Student Attendance'].split("%");
//               var teacherAttendanceVal = ex[0]['Average Teacher Attendance'].split("%");
//               studentAttendance.push(studentAttendanceVal[0]);
//               teacherAttendance.push(teacherAttendanceVal[0]);
//             }
//            // console.log(studentAttendance);
//            // console.log(teacherAttendance);

//               getStackData.push(studentAttendance);
//               getStackData.push(teacherAttendance)
//             //  console.log("In");
//               //return this.studentAttendance, this.teacherAttendance;
//               //return val;
//               //getData = groupedDF.toCollection();
//               //console.log(getData);

//           }
//       ).catch(err => {
//           console.log(err);
//       });
//     }
//   }*/
