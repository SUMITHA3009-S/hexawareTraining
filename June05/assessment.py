# TXT ASSESSMENT
with open("employees.txt","r") as f:
    print(f.read())

with open("employees.txt","r") as f:
    for line in f:
        print(line.strip())

with open("employees.txt","r") as f:
    print("Total Employees =", len(f.readlines()))

with open("employees.txt","r") as f:
    for line in f:
        print(line.strip().split(",")[1])

with open("employees.txt","r") as f:
    for line in f:
        data=line.strip().split(",")
        if data[4]=="Hyderabad":
            print(line.strip())

with open("employees.txt","r") as f:
    for line in f:
        data=line.strip().split(",")
        if data[4]=="Hyderabad":
            print(line.strip())

with open("employees.txt","r") as f:
    for line in f:
        data=line.strip().split(",")
        if data[4]=="Bangalore":
            print(line.strip())

with open("employees.txt","r") as f:
    for line in f:
        data=line.strip().split(",")
        if int(data[3])>80000:
            print(line.strip())

with open("employees.txt","r") as f:
    salaries=[int(line.strip().split(",")[3]) for line in f]
print(max(salaries))

with open("employees.txt","r") as f:
    salaries=[int(line.strip().split(",")[3]) for line in f]
print(min(salaries))

with open("employees.txt","r") as f:
    salaries=[int(line.strip().split(",")[3]) for line in f]
print(sum(salaries)/len(salaries))

with open("employees.txt","r") as f:
    salaries=[int(line.strip().split(",")[3]) for line in f]
print(sum(salaries))

count=0
with open("employees.txt","r") as f:
    for line in f:
        if line.strip().split(",")[2]=="AI Engineering":
            count+=1
print(count)

count=0
with open("employees.txt","r") as f:
    for line in f:
        if line.strip().split(",")[2]=="Data Engineering":
            count+=1
print(count)

with open("employees.txt","r") as f:
    for line in f:
        if line.strip().split(",")[2]=="AI Engineering":
            print(line.strip())

with open("employees.txt","r") as f, open("high_salary_employees.txt","w") as out:
    for line in f:
        if int(line.strip().split(",")[3])>80000:
            out.write(line)

with open("employees.txt","r") as f, open("hyderabad_employees.txt","w") as out:
    for line in f:
        if line.strip().split(",")[4]=="Hyderabad":
            out.write(line)

cities=set()
with open("employees.txt","r") as f:
    for line in f:
        cities.add(line.strip().split(",")[4])

for city in cities:
    print(city)

dept={}
with open("employees.txt","r") as f:
    for line in f:
        d=line.strip().split(",")[2]
        dept[d]=dept.get(d,0)+1

for k,v in dept.items():
    print(k,"=",v)

max_salary=0
emp=""

with open("employees.txt","r") as f:
    for line in f:
        data=line.strip().split(",")
        salary=int(data[3])

        if salary>max_salary:
            max_salary=salary
            emp=data[1]

print(emp)
print(max_salary)

with open("employees.txt","r") as f:
    data=[line.strip().split(",") for line in f]

total=len(data)
salaries=[int(x[3]) for x in data]

with open("employee_report.txt","w") as r:
    r.write(f"Total Employees = {total}\n")
    r.write(f"Highest Salary = {max(salaries)}\n")
    r.write(f"Lowest Salary = {min(salaries)}\n")
    r.write(f"Average Salary = {sum(salaries)/len(salaries)}\n")
    r.write(f"Total Salary = {sum(salaries)}\n")

# JSON ASSESSMENT

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
