var selectedRow = null;
function onFormsubmit() {
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData)
    }
    resetForm();

}
//retrieve the data
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empcode"] = document.getElementById("empcode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    // console.log(formData);
    return formData;
}
//insert the data
function insertNewRecord(data) {
    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var Cell1 = newRow.insertCell(0);
    Cell1.innerHTML = data.fullName;
    var Cell2 = newRow.insertCell(1);
    Cell2.innerHTML = data.empcode;
    var Cell3 = newRow.insertCell(2);
    Cell3.innerHTML = data.salary;
    var Cell4 = newRow.insertCell(3);
    Cell4.innerHTML = data.city;
    var Cell5 = newRow.insertCell(4);
    Cell5.innerHTML = `<button onclick="onEdit(this)">Edit</button>, <button onclick="onDelete(this)">Delete</button>`;

}
//to reset the form data
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empcode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

    //Edit the data
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
        document.getElementById("empcode").value = selectedRow.cells[1].innerHTML;
        document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
        document.getElementById("city").value = selectedRow.cells[3].innerHTML;
    }

    //update the records
    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.fullName;
        selectedRow.cells[1].innerHTML = formData.empcode;
        selectedRow.cells[2].innerHTML = formData.salary;
        selectedRow.cells[3].innerHTML = formData.city;
    }

    //Delete the Data
    function onDelete(td) {
        if (confirm("Do you want delete this record?")) {
            row = td.parentElement.parentElement;
            document.getElementById('empList').deleteRow(row.rowIndex)
        }
        resetForm();
    }
    
