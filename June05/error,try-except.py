# ZeroDivisionError
a=10
b=0
result=a/b
print(result)
print("Program Completed")

# try-except
try:
    a=10
    b=0
    result=a/b
    print(result)
except:
    print("Error Occurred")
print("Program Completed")

# specific exception
try:
    a=10
    b=0
except ZeroDivisionError:
    print("Cannot divide by zero")

# another exception
try:
    age=int(input("Enter age:"))
    print(age)
except ValueError:
    print("Please enter numeric value")

try:
    age=int(input("Enter age:"))
    print(100/age)
except ValueError:
    print("Invalid Number")
except ZeroDivisionError:
    print("Age cannot be zero")

#Exception object
try:
    num=int("abc")
except Exception as e:
    print(e)

# else block
try:
    num=10
    print(num)
except:
    print("Error")
else:
    print("Success")

# finally
try:
    print(10/0)
except:
    print("Error")
finally:
    print("Connection Closed")

# Raise error
salary=-1000
if salary<0:
    raise ValueError("Salary cannot be negative")
