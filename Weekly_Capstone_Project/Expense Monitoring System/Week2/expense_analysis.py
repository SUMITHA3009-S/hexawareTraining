import pandas as pd
import numpy as np

# Load expense dataset
df = pd.read_csv("expenses.csv")

# Check missing values
print("Missing Values:")
print(df.isnull().sum())

# Remove missing records
df = df.dropna()

# Convert date column to datetime format
df["date"] = pd.to_datetime(df["date"])

# Convert amount column to float
df["amount"] = df["amount"].astype(float)

# Create month column
df["month"] = df["date"].dt.to_period("M")

# Calculate total expenses using NumPy
total_expense = np.sum(df["amount"])

print("Total Expense:", total_expense)

# Calculate average expense using NumPy
average_expense = np.mean(df["amount"])

print("Average Expense:", average_expense)

# Monthly expense summary
monthly_summary = (
    df.groupby("month")["amount"]
    .sum()
)

print("\nMonthly Summary:")
print(monthly_summary)

# Category-wise expense breakdown
category_summary = (
    df.groupby("category")["amount"]
    .sum()
)

print("\nCategory Wise Expense:")
print(category_summary)

# User-wise expense summary
user_summary = (
    df.groupby("user_id")["amount"]
    .sum()
)

print("\nUser Wise Expense:")
print(user_summary)

# Save cleaned data
df.to_csv(
    "cleaned_expenses.csv",
    index=False
)

print("Cleaned file saved successfully.")
