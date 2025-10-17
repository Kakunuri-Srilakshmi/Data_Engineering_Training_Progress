

# 🌀 **Apache Airflow – Theoretical Assessment**


## **Section A – Basics**

### **1. What is Apache Airflow and why is it used?**

Apache Airflow is an **open-source platform** used to **design, schedule, and monitor workflows** (data pipelines).

It allows you to define workflows as **code in Python**, making them easy to maintain and version-control.

**Why it is used:**

* To **automate repetitive data processes** such as ETL (Extract, Transform, Load).
* To **visualize dependencies** between tasks using a DAG view.
* To **schedule** workflows at specific times or intervals.
* To **monitor** task execution and handle failures automatically.


### **2. Define a DAG. What does each part of the acronym stand for?**

A **DAG** stands for **Directed Acyclic Graph**.
It is the **backbone of Airflow**, representing your entire workflow.

* **Directed:** The flow of execution is in one direction (from one task to the next).
* **Acyclic:** There are **no loops or cycles** — a task cannot depend on itself directly or indirectly.
* **Graph:** It’s a **collection of nodes (tasks)** connected by edges (dependencies).


A DAG defines **how tasks depend on each other and in what order** they should run.



### **3. Explain the difference between a DAG and a Task.**

* A **DAG** is the **overall workflow** or pipeline structure — like a map that shows how tasks are connected.
* A **Task** is a **single operation** or step inside the DAG (for example, running a SQL query or a Python script).

**Example:**
If a DAG represents “Daily Sales Report”,
tasks could be:

1. Extract sales data
2. Transform data
3. Load it into a dashboard



### **4. Why should workflows be “Directed Acyclic Graphs” in Airflow?**

Workflows must be **Directed Acyclic Graphs** to ensure:

* The process **follows a clear direction** without any backtracking.
* There are **no circular dependencies** (infinite loops).
* Each task is executed **only once** in the correct order.

This makes the workflow predictable, traceable, and reliable.



## **Section B – Core Concepts**

### **1. Describe the role of the following Airflow components:**

#### **Webserver**

* It provides the **Graphical User Interface (GUI)** for Airflow.
* You can use it to **view DAGs, monitor task progress, check logs, and trigger runs manually**.

#### **Scheduler**

* The **brain** of Airflow that decides **which tasks to run and when**.
* It continuously checks the DAG definitions and executes tasks based on their **schedule_interval** and **dependencies**.

#### **Metadata Database**

* It stores all **information about DAGs, tasks, runs, and their states** (success, failed, queued, etc.).
* Common databases used are **SQLite**, **PostgreSQL**, or **MySQL**.


### **2. What is the purpose of the `airflow db init` command?**

The `airflow db init` command:

* **Initializes the metadata database** the first time Airflow is set up.
* It **creates all the necessary tables** to store task details, user settings, logs, and configuration data.
  Without running this command, Airflow cannot store or track any workflows.



### **3. What is the significance of `start_date` and `schedule_interval` in a DAG?**

* **start_date:**
  Defines the **date and time** when the DAG should start running for the first time.
  Airflow uses it to determine **when to begin scheduling** the DAG runs.

* **schedule_interval:**
  Defines **how often** the DAG should run.
  Examples:

  * `"@daily"` → Runs once every day
  * `"@hourly"` → Runs once every hour
  * `"0 12 * * *"` → Cron expression for custom schedules

Together, they control **the timing and frequency** of DAG executions.



### **4. What does `catchup=False` do, and when would you use it?**

By default, Airflow tries to **"catch up"** on all past DAG runs between `start_date` and the current date.

When `catchup=False`:

* Airflow **only runs the latest scheduled run** and skips all the missed ones.
* This is useful for **real-time pipelines or monitoring workflows**, where past runs are not needed.



## **Section C – Operators & Execution**

### **1. What is an Operator? Give two examples.**

An **Operator** defines **what action** a task performs in Airflow.
It is the **building block** of a DAG.

**Examples:**

* **BashOperator** – Executes shell or command-line scripts.
* **PythonOperator** – Executes a Python function or script.
* (Other examples: EmailOperator, SQLExecuteOperator)



### **2. How does Airflow handle task failures and retries?**

Airflow has **automatic retry mechanisms** for failed tasks.
You can set:

* **`retries`** – Number of times to retry a failed task.
* **`retry_delay`** – Time gap between retries.
* **`email_on_failure`** – To send alerts when a task fails.

This helps ensure that **temporary errors (like network or API issues)** don’t stop the workflow.



### **3. What is XCom and how is it useful?**

**XCom (Cross-Communication)** allows **tasks to share small pieces of data** with each other.

* One task can **push** data to XCom.
* Another task can **pull** that data later.

**Example:**
A Python task extracts an API key and pushes it via XCom → the next task pulls that key and uses it for database access.

It helps **connect dependent tasks** smoothly without using external storage.



### **4. Explain the difference between `BashOperator` and `PythonOperator`.**

| Operator           | Description                         | Example Use                                                           |
| ------------------ | ----------------------------------- | --------------------------------------------------------------------- |
| **BashOperator**   | Runs shell commands or scripts.     | `BashOperator(task_id='list_files', bash_command='ls -l')`            |
| **PythonOperator** | Executes Python functions directly. | `PythonOperator(task_id='process_data', python_callable=my_function)` |



* Use **BashOperator** for command-line operations.
* Use **PythonOperator** for Python logic.



## **Section D – Real-World Use**

### **1. Give one real-world example where Airflow can be used for ETL.**

Example:
A company wants to update its **sales dashboard** daily.
Airflow can:

1. **Extract** data from an API or database.
2. **Transform** it using Python or SQL.
3. **Load** the cleaned data into a data warehouse (e.g., Snowflake or BigQuery).

This makes the process automatic and reliable.



### **2. Why is it recommended to keep DAG scripts lightweight and avoid heavy computations inside them?**

* The Airflow **scheduler continuously scans DAG files** to check for updates.
* If DAG files contain **heavy computations**, it slows down scheduling performance.
* Heavy work should be done **inside task functions**, not in the DAG definition.

This keeps the system **efficient and responsive**.



### **3. Why should every DAG have a unique `dag_id`?**

Each DAG must have a **unique `dag_id`** because:

* It serves as the **unique identifier** for Airflow to track runs, logs, and schedules.
* If two DAGs have the same ID, Airflow can become **confused and overwrite metadata**.

Unique IDs ensure **clear distinction and safe management** of all workflows.



### **4. How does Airflow ensure workflows run in the correct order?**

Airflow uses **task dependencies** to control execution order.
You can define dependencies using:

* `>>` (set downstream)
* `<<` (set upstream)

**Example:**

```python
extract_data >> transform_data >> load_data
```

Here, `extract_data` runs first, followed by `transform_data`, and finally `load_data`.
Airflow’s **scheduler** respects these dependencies and runs tasks **in sequence or parallel** as defined.



