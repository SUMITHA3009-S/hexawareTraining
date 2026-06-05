# CSV ASSESSMENT
# highest_salary
highest_salary=0
for read in reader:
    if read["salary"] > highest_salary:
        highest_salary = read["salary"]
print(highest_salary)

# lowest_salary
lowest_salary=0
for read in reader:
    if read["salary"] < lowest_salary:
        lowest_salary = read["salary"]
print(lowest_salary)

# average salary
total_salary=0
for row in reader:
    total_salary += row["salary"]
average_salary=total_salary/len(reader)
print(average_salary)
print(total_salary)

# display hyderabad employees
for row in reader:
    if row["city"] == "Hyderabad":
        print(row)
      
# display data engineering employees
for row in reader:
    if row["department"] == "AI Engineering":
        print(row)
      
# employee earning more than 80000
for row in reader:
    if row["salary"]>80000:
        print(row)
