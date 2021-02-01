SELECT
  e.id as Employee_ID,
  e.emp_name as Full_Name,
  d.dept_name as Department,
  e.title as Title,
  e.salary as Salary
FROM employee e
JOIN department d
ON e.department = d.id
WHERE d.dept_name = 'Sales';
