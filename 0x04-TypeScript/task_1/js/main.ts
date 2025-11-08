interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

// Example usage:
const teacher3: Teacher = {
  firstName: "Last",
  fullTimeEmployee: false,
  lastName: "Mutara",
  location: "London",
  contract: false,
};

console.log(teacher3);
