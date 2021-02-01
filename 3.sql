SELECT
  e.emp_name as Full_Name,
  d.dept_name as Department,
  p.project_name as Project
FROM
  employee e
  JOIN department d ON e.department = d.id
  JOIN employee_project ep ON e.id = ep.emp_id
  JOIN project p ON ep.project_id = p.id
WHERE
  p.project_name = 'Watch paint dry'
  AND d.dept_name = 'Warehouse';