
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: "Khothatso",
  lastName: "Sibasa",
  age: 24,
  location: "Johannesburg",
};

const student2: Student = {
  firstName: "Lerato",
  lastName: "Mokoena",
  age: 21,
  location: "Cape Town",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

const headerRow = document.createElement("tr");
const headerName = document.createElement("th");
const headerLocation = document.createElement("th");
headerName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
tableBody.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
