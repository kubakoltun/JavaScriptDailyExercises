function find_employees_role(name) {
  const employee = employees.find(employee => {
    const [firstName, lastName] = name.split(' ');
    return `${employee.firstName} ${employee.lastName}` === `${firstName} ${lastName}`;
  });

  if (employee) {
    return employee.role;
  } else {
    return 'Does not work here!';
  }
}
