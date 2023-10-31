var selectedRow = null;  // if selectedRow is null, then it is a new record, else it is an existing record


function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)   // create new record
        insertNewRecord(formData);
    else
        updateRecord(formData);  // update existing record
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>`
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onDelete(this)">Delete</a>`
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;  // populating the input fields with the selected row's data
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}
// The deleteRow() method removes the row at the specified index from a table. Tip: Use the insertRow() to create and insert a new row
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
    }
}







// Make a Teacher Management System where you will store the following information of a teacher:
// Name, Email, Phone, Address, Department, Salary
// crud operation


/*
You are given a budget if the budget is less than 500 --> Gift A , if its equal to or more than but less than 
1000 --> Gift B , if its equal to or more than 1000 --> Gift C

Do it using callbacks and Promises


script.js

cosnt response = fetch(url)
const data = response.json()
console.data(data)  ---- > this is an array 

Dom Manipulation

for(let i = 0; i < data.length; i++){
    const div = document.createElement('div')
    div.innerHTML = data[i].name
    document.body.appendChild(div)
}






<h1 class="heading">Hello World</h1>
<p class="heading">Hello World</p>
<p class="heading">Hello World</p>

//var ele = document.queryselector("p .heading")  ----> this will give you an array of all the p tags with class heading
ele[1].innerHTML= "hi there"









*/