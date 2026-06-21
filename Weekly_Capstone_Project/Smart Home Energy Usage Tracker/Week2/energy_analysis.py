import pandas as pd
import numpy as np

# Load CSV
df = pd.read_csv("energy_usage.csv")

# Check missing values
print(df.isnull().sum())

# Clean data
df["timestamp"] = pd.to_datetime(df["timestamp"])

df["energy_kwh"] = (
    df["energy_kwh"]
    .astype(float)
)

df = df.dropna()

# Total energy
total = np.sum(df["energy_kwh"])

print(
    "Total Energy:",
    total
)

# Average energy
average = np.mean(
    df["energy_kwh"]
)

print(
    "Average Energy:",
    average
)

# Room summary
room_summary = (
    df.groupby("room_id")
    ["energy_kwh"]
    .sum()
)

print(
    "Room Summary"
)

print(room_summary)

# Device summary
device_summary = (
    df.groupby("device_id")
    ["energy_kwh"]
    .mean()
)

print(
    "Device Summary"
)

print(device_summary)
