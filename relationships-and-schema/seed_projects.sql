TRUNCATE department,
employee,
employee_project,
project RESTART IDENTITY CASCADE;

INSERT INTO
  project (project_name, budget, start_date)
VALUES
  ('Build Database', 20000, '2019-03-04'),
  ('Plan Christmas party', 500, '2019-11-20'),
  ('Remove old stock', 1000, '2019-04-06'),
  ('Watch paint dry', 3000, '2019-02-11');

INSERT INTO
  department (dept_name)
VALUES
  ('Development'),
  ('Sales'),
  ('Human Resources'),
  ('Warehouse');

INSERT INTO
  employee (emp_name, phone, title, salary, department)
VALUES
  (
    'Michael Scott',
    '5551234',
    'Regional Manager',
    80000,
    2
  ),
  (
    'Dwight Schrute',
    '5554321',
    'Assistant to Regional Manager',
    30000,
    2
  ),
  ('Jim Halpert', '5555678', 'Salesman', 50000, 2),
  ('Pam Beasley', '5558765', 'Secretary', 35000, 2),
  (
    'Meredith Palmer',
    '5559876',
    'Supplier Relations',
    30000,
    4
  ),
  (
    'Toby Flenderson',
    '5558769',
    'Head Human Resources',
    60000,
    3
  ),
  (
    'Edgar Djikstra',
    '5554567',
    'Lead Software Developer',
    120000,
    1
  );

UPDATE
  department
SET
  manager = 7
WHERE
  id = 1;

UPDATE
  department
SET
  manager = 3
WHERE
  id = 2;

UPDATE
  department
SET
  manager = 6
WHERE
  id = 3;

UPDATE
  department
SET
  manager = 5
WHERE
  id = 4;

INSERT INTO
  employee_project (emp_id, project_id, start_date, end_date)
VALUES
  (7, 1, '2019-04-03', '2019-06-01'),
  (6, 2, '2019-11-20', '2019-12-25'),
  (5, 3, '2019-04-6', '2019-04-12'),
  (4, 4, '2019-02-11', '2019-02-15'),
  (3, 4, '2019-02-25', '2019-03-15'),
  (2, 4, '2019-02-11', '2019-02-25'),
  (1, 4, '2019-02-15', '2019-04-12');