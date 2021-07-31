// Your code here
function createEmployeeRecord(x) {
   return {
      firstName: x[0],
      familyName: x[1],
      title: x[2],
      payPerHour: x[3],
      timeInEvents: [],
      timeOutEvents: []
   }
}

let createEmployeeRecords = (dataOfEmployees) => {
   return dataOfEmployees.map(function(row){
      return createEmployeeRecord(row)
   })
}

function createTimeInEvent(employee, timeStamp) {
   let [date,hour] = timeStamp.split(' ')

   employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10),
   })
   return employee
}

function createTimeOutEvent(employee, timeStamp) {
   let [date,hour] = timeStamp.split(' ')
   
   employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
   })
   return employee
}
