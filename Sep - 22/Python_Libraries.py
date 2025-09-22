#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
 
data = {
    "Name": ["Rahul", "Priya", "Arjun", "Neha", "Vikram"],
    "Age": [21, 22, 20, 23, 21],
    "Course": ["AI", "ML", "Data Science", "AI", "ML"],
    "Marks": [85, 90, 78, 88, 95]
}
 
df = pd.DataFrame(data)
print(df)


# In[2]:


import matplotlib.pyplot as plt

# group by course and calculate mean
avg_marks = df.groupby("Course")["Marks"].mean()

# plot bar chart
avg_marks.plot(kind ="bar", color="blue", edgecolor ="black")

plt.title("Average Marks by Course - sri")
plt.xlabel("Course")
plt.ylabel("Average Marks")
plt.xticks(rotation=45)
plt.show()


# In[3]:


import pandas as pd
import matplotlib.pyplot as plt


data = {
    "Salesperson": ["Raghava", "Sai", "Teja", "Lakshmi", "Anusha"],
    "Units Sold": [120, 150, 100, 180, 130],
    "Revenue": [48000, 75000, 50000, 90000, 65000]
}

df = pd.DataFrame(data)
print("Sales Report Data:\n")
print(df)


# In[4]:


sales_revenue = df.groupby("Salesperson")["Revenue"].sum()


sales_revenue.plot(kind="bar", color="orange", edgecolor="black")

plt.title("Sales Revenue by Salesperson")
plt.xlabel("Salesperson")
plt.ylabel("Revenue")
plt.xticks(rotation=45)
plt.show()


# In[ ]:




