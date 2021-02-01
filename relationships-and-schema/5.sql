SELECT
  e.emp_name as Manager_Name,
  d.dept_name as Department,
  p.project_name as Project
FROM
  employee e
  JOIN
  department d ON e.id = d.manager
  JOIN
  employee_project ep ON e.id = ep.emp_id
  JOIN
  project p ON p.id = ep.project_id
WHERE
  p.project_name = 'Watch paint dry';