import json

employees = [

    {
        "employee_id": 101,
        "name": "Rahul Sharma",
        "department": "Data Engineering",
        "salary": 75000,
        "city": "Hyderabad"
    },

    {
        "employee_id": 102,
        "name": "Priya Reddy",
        "department": "AI Engineering",
        "salary": 85000,
        "city": "Bangalore"
    },

    {
        "employee_id": 103,
        "name": "Amit Kumar",
        "department": "Data Engineering",
        "salary": 65000,
        "city": "Mumbai"
    },

    {
        "employee_id": 104,
        "name": "Sneha Patel",
        "department": "Data Science",
        "salary": 95000,
        "city": "Chennai"
    },

    {
        "employee_id": 105,
        "name": "Farhan Ali",
        "department": "Cloud Engineering",
        "salary": 80000,
        "city": "Delhi"
    }
]
with open("employees.json", "w") as file:
    json.dump(employees, file,indent=4)
print("JSON file created successfully")

with open("employees.json", "r") as file:
    employees = json.load(file)
print(employees)

# print all employees:
for employee in employees:
    print(employee)
# print names
for employee in employees:
    print(employee["name"])
# find number of employees
print(len(employees))
# highest salary
highest_salary=0
for employee in employees:
    if employee["salary"] > highest_salary:
        highest_salary = employee["salary"]
print(highest_salary)
-----------------------------------------------ASSESSMENT-------------------------------------------------
# average salary
total_salary=0
for employee in employees:
    total_salary += employee["salary"]
average_salary=total_salary/len(employees)
# display data engineering employees
for employee in employees:
    if employee["department"] == "Data Engineering":
        print(employee)
# employee earning more than 80000
for employee in employees:
    if employee["salary"]>80000:
        print(employee)
# update salary
for employee in employees:
    if employee["employee_id"] == 102:
        employee["salary"]=100000

# add new employee
new_employee = {
    "employee_id": 106,
    "name": "Arjun Rao",
    "department": "DevOps",
    "salary": 85000,
    "city": "Bangalore"
}

employees.append(new_employee)

# delete the employee
for employee in employees:
    if employee["employee_id"] == 104:
        employees.remove(employee)
        break
for employee in employees:
    print(employee)
