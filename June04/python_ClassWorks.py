print("hello")

customer_name="Sumi"
age=28
salary=50000
is_active=True

print(customer_name)
print(age)
print(salary)
print(is_active)

print(type(customer_name))
print(type(age))
print(type(salary))
print(type(is_active))

# if-else
salary=100000
if salary>50000:
    print("High Income")
else:
    print("Normal Income")

# Multiple conditions
salary=75000
experience=5
if salary>50000 and experience>=3:
    print("Eligible")
else:
    print("Not Eligible")

# if else
marks=85
if marks>=90:
    print("Grade A")
elif marks>=75:
    print("grade B")
elif marks>=60:
    print("Grade c")
else:
    print("Grade D")

# OR Operator
salary=80000
experience=1
if salary>=50000 or experience>=3:
    print("Eligible")
else:
    print("Not Eligible")

# NOT Operator
is_blocked=False
if not is_blocked:
    print("Login Allowed")

# for loop
for i in range(1,6):
    print(i)

# while loop
count=1
while count<=5:
    print(count)
    count+=1

# list
cities=["Hyderabad","Mumbai","Delhi"]
print(cities[0])
print(cities[1])
print(cities[2])
# negative indexing
print(cities[-1])
print(cities[-2])
# update an element
cities[1]="bangalore"
print(cities[1])
# append
cities.append("Chennai")
print(cities)
# insert
cities.insert(1,"Pune")
print(cities)
# multiple values
cities.extend(["Kochi","Pondi"])
print(cities)
# remove
cities.remove("Mumbai")
print(cities)

cities.pop(1)
print(cities)

del cities[0]
print(cities)

cities.clear()
print(cities)

print(len(cities))

# print membership
print("Mumbai" in cities)
print("Pune" in cities)

print(cities.index("Mumbai"))

cities.sort()

# tuple
cities=("Hyderabad","Mumbai","Delhi","Chennai","Pune")
print(cities)
print(cities[0])
print(cities[1])
print(cities[-1])
print(cities[-2])
print(len(cities))
print(cities[1:4])

# packing
employee=(101,"Rahul",75000)
print(employee)
emp_id,emp_name,salary=employee
print(emp_id)
print(emp_name)
print(salary)

# multiple values
def get_employee():
    return 101,"Rahul",75000
result=get_employee()
print(result)

# each row is represented as a tuple
record=(101,"Rahul","Hyderabad",75000)
print(record)

# set
cities={"Hyderabad","Mumbai","Delhi"}
print(cities)
cities={"Hyderabad","Mumbai","Delhi","Mumbai"}
print(cities)

# remove duplicates from list
# unique_cities=set(cities)
# print(unique_cities)

cities.add("Chennai")
print(cities)
cities.update(["Delhi","Pune"])
print(cities)
cities.remove("Mumbai")
print(cities)
cities.discard("Pune")
print(cities)

set1={"Python","SQL"}
set2={"MongoDB","Python"}
# union
result=set1.union(set2)
print(result)
# intersection
result=set1.intersection(set2)
print(result)
# difference
result=set1.difference(set2)
print(result)
# symmetric_difference
result=set1.symmetric_difference(set2)
print(result)

# Dictionary
customer={
    "customer_id":101,
    "name":"Rahul",
    "city":"Hyderabad"
}
print(customer)
print(customer["city"])
print(customer["name"])
# safe
print(customer.get("name"))
print(customer.get("salary"))
# add new key value pair
customer["salary"]=75000
print(customer)
# update
customer["name"]="rahul Sharma"
print(customer)

customer.pop("salary")
print(customer)

del customer["salary"]


