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
class Dataset6 extends Datasets {
  constructor(datasetName, parentDiv) {
    super();
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
    var test = new renderDatasets(datasetName, parentDiv);
    test.rederDataset6(datasetName, parentDiv);
  }

}
class Dataset7 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset7(datasetName, parentDiv);
    }

}
class Dataset8 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset8(datasetName, parentDiv);
    }

}
class Dataset9 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset9(datasetName, parentDiv);
    }

}
class Dataset10 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset10(datasetName, parentDiv);
    }

}
class Dataset11 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset11(datasetName, parentDiv);
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
                const selectColumns = df.select('Project Title:','Mercy Hospital','  ','  ');
                var dataset2Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>Project Title:</th><th>Mercy Hospital</th><th>  </th><th>  </th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset2Data.length; i++) { 
                    if (i==4){var content = '<tr>' +
                                    '<td><Strong>'+dataset2Data[i]["Project Title:"]+'</strong></td>'+
                                    '<td><Strong>'+dataset2Data[i]["Mercy Hospital"]+'</strong></td>'+
                                    '<td><Strong>'+dataset2Data[i]["  "]+'</strong></td>'+
                                    '<td><Strong>'+dataset2Data[i]["  "]+'</strong></td>'+
                        '</tr>';}else{
                   
                    
                   var content = '<tr>' +
                                    '<td><Strong>'+dataset2Data[i]["Project Title:"]+'</strong></td>'+
                                    '<td>'+dataset2Data[i]["Mercy Hospital"]+'</td>'+
                                    '<td>'+dataset2Data[i]["  "]+'</td>'+
                                    '<td>'+dataset2Data[i]["  "]+'</td>'+
                        '</tr>';}
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

                const selectColumns = df.select('Project Title:','Mercy Hospital','  ','  ');
                var dataset1Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>Project Title:</th><th>Mercy Hospital</th><th>  </th><th>  </th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset1Data.length; i++) { 
                    if (i==5){var content = '<tr>' +
                                    '<td><Strong>'+dataset1Data[i]["Project Title:"]+'</strong></td>'+
                                    '<td><Strong>'+dataset1Data[i]["Mercy Hospital"]+'</strong></td>'+
                                    '<td><Strong>'+dataset1Data[i]["  "]+'</strong></td>'+
                                    '<td><Strong>'+dataset1Data[i]["  "]+'</strong></td>'+
                        '</tr>';}else{
                   
                    
                   var content = '<tr>' +
                                    '<td><Strong>'+dataset1Data[i]["Project Title:"]+'</strong></td>'+
                                    '<td>'+dataset1Data[i]["Mercy Hospital"]+'</td>'+
                                    '<td>'+dataset1Data[i]["  "]+'</td>'+
                                    '<td>'+dataset1Data[i]["  "]+'</td>'+
                        '</tr>';}
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

  rederDataset6(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //console.log(cleanDF.listColumns());
// assignedTo  closingDate detectedInCycle release milestoneId taskId  projectId status


                const selectColumns = df.select('defectId','description','subject','detectedDate','detectedBy',
                                                  'severity','priority','actualFixTime','estimatedFixTime',
                                                  'assignedTo','closingDate','detectedInCycle','release',
                                                  'milestoneId','taskId','projectId','status');
                var dataset6Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>defectId</th><th>description</th><th>subject</th><th>detectedDate</th><th>detectedBy</th>'+
                                '<th>severity</th><th>priority</th><th>actualFixTime</th><th>estimatedFixTime</th>'
                                '<th>assignedTo</th><th>closingDate</th><th>detectedInCycle</th><th>release</th>'
                                '<th>milestoneId</th><th>taskId</th><th>projectId</th><th>status</th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset6Data.length; i++) {
                    var content = '<tr>' +
                                    '<td>'+dataset6Data[i]["defectId"]+'</td>'+
                                    '<td>'+dataset6Data[i]["description"]+'</td>'+
                                    '<td>'+dataset6Data[i]["subject"]+'</td>'+
                                    '<td>'+dataset6Data[i]["detectedDate"]+'</td>'+
                                    '<td>'+dataset6Data[i]["detectedBy"]+'</td>'+
                                    '<td>'+dataset6Data[i]["severity"]+'</td>'+
                                    '<td>'+dataset6Data[i]["priority"]+'</td>'+
                                    '<td>'+dataset6Data[i]["actualFixTime"]+'</td>'+
                                    '<td>'+dataset6Data[i]["estimatedFixTime"]+'</td>'+
                                    '<td>'+dataset6Data[i]["assignedTo"]+'</td>'+
                                    '<td>'+dataset6Data[i]["closingDate"]+'</td>'+
                                    '<td>'+dataset6Data[i]["detectedInCycle"]+'</td>'+
                                    '<td>'+dataset6Data[i]["release"]+'</td>'+
                                    '<td>'+dataset6Data[i]["milestoneId"]+'</td>'+
                                    '<td>'+dataset6Data[i]["taskId"]+'</td>'+
                                    '<td>'+dataset6Data[i]["projectId"]+'</td>'+
                                    '<td>'+dataset6Data[i]["status"]+'</td>'+
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }

//User ID Full Name Role  Status  Email Address

   rederDataset7(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //console.log(cleanDF.listColumns());

                const selectColumns = df.select('User ID','Full Name','Role','Status','Email Address');
                var dataset7Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>User ID</th><th>Full Name</th><th>Role</th><th>Status</th><th>Email Address</th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset7Data.length; i++) {
                    var content = '<tr>' +
                                    '<td>'+dataset7Data[i]["User ID"]+'</td>'+
                                    '<td>'+dataset7Data[i]["Full Name"]+'</td>'+
                                    '<td>'+dataset7Data[i]["Role"]+'</td>'+
                                    '<td>'+dataset7Data[i]["Status"]+'</td>'+
                                    '<td>'+dataset7Data[i]["Email Address"]+'</td>'+
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }

    rederDataset8(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //console.log(cleanDF.listColumns());
//lessonId  problemDesc solution  rootCause

                const selectColumns = df.select('lessonId','problemDesc','solution','rootCause');
                var dataset8Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>lessonId</th><th>problemDesc</th><th>solution</th><th>rootCause</th>';

                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset8Data.length; i++) {
                    var content = '<tr>' +
                                    '<td>'+dataset8Data[i]["lessonId"]+'</td>'+
                                    '<td>'+dataset8Data[i]["problemDesc"]+'</td>'+
                                    '<td>'+dataset8Data[i]["solution"]+'</td>'+
                                    '<td>'+dataset8Data[i]["rootCause"]+'</td>'+
                                   
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }

     rederDataset9(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //console.log(cleanDF.listColumns());
//trainingid    name    duartion    cost    type    description externalLink

                const selectColumns = df.select('trainingid','name','duartion','cost','type','description','externalLink');
                var dataset9Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>trainingid</th><th>name</th><th>duartion</th><th>cost</th>'+
                                '<th>type</th><th>description</th><th>externalLink</th>';
                            '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset9Data.length; i++) {
                    var content = '<tr>' +
                                    '<td>'+dataset9Data[i]["trainingid"]+'</td>'+
                                    '<td>'+dataset9Data[i]["name"]+'</td>'+
                                    '<td>'+dataset9Data[i]["duartion"]+'</td>'+
                                    '<td>'+dataset9Data[i]["cost"]+'</td>'+
                                    '<td>'+dataset9Data[i]["type"]+'</td>'+
                                    '<td>'+dataset9Data[i]["description"]+'</td>'+
                                    '<td>'+dataset9Data[i]["externalLink"]+'</td>'+                                                       
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }

       rederDataset10(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //console.log(cleanDF.listColumns());
//Rater Name    Engineer Name   Rating  Comments

                const selectColumns = df.select('Rater Name','Engineer Name','Rating','Comments');
                var dataset10Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>Rater Name</th><th>Engineer Name</th><th>Rating</th><th>Comments</th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset10Data.length; i++) {
                    var content = '<tr>' +
                                    '<td>'+dataset10Data[i]["Rater Name"]+'</td>'+
                                    '<td>'+dataset10Data[i]["Engineer Name"]+'</td>'+
                                    '<td>'+dataset10Data[i]["Rating"]+'</td>'+
                                    '<td>'+dataset10Data[i]["Comments"]+'</td>'+
                                    
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }

     rederDataset11(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //console.log(cleanDF.listColumns());
//ProjectId Name  MgrId StartDate EndDate ReleaseDate Release Status  Description

                const selectColumns = df.select('ProjectId','Name','MgrId','StartDate','EndDate','ReleaseDate','Release','Status','Description');
                var dataset11Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                                '<th>ProjectId</th><th>Name</th><th>MgrId</th><th>StartDate</th><th>EndDate</th>'+
                                '<th>ReleaseDate</th><th>Release</th><th>Status</th><th>Description</th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset11Data.length; i++) {
                    var content = '<tr>' +
                                    '<td>'+dataset11Data[i]["ProjectId"]+'</td>'+
                                    '<td>'+dataset11Data[i]["Name"]+'</td>'+
                                    '<td>'+dataset11Data[i]["MgrId"]+'</td>'+
                                    '<td>'+dataset11Data[i]["StartDate"]+'</td>'+
                                    '<td>'+dataset11Data[i]["EndDate"]+'</td>'+
                                    '<td>'+dataset11Data[i]["ReleaseDate"]+'</td>'+
                                    '<td>'+dataset11Data[i]["Release"]+'</td>'+
                                    '<td>'+dataset11Data[i]["Status"]+'</td>'+
                                    '<td>'+dataset11Data[i]["Description"]+'</td>'+
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
