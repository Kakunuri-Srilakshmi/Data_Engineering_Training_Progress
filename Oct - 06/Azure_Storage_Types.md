
# **Azure Storage Services**

## **Introduction to Azure Storage**

Azure Storage is a cloud-based storage solution provided by Microsoft that offers scalable, secure, and durable storage for various data types. It supports different storage services to meet the needs of modern applications such as big data, analytics, and backup.

Azure Storage supports:

* Structured and unstructured data
* Text, binary, and multimedia data
* Integration with Azure services and applications



## **Types of Azure Storage**

### **Azure Blob Storage**

Azure **Blob Storage** is used to store **unstructured data** such as text files, images, audio, and videos. It is highly scalable and accessible over HTTP/HTTPS.

#### **Use Cases:**

* Storing backups, logs, and archives
* Hosting images and documents
* Serving content directly to browsers
* Data lake storage for analytics

#### **Types of Blobs:**

1. **Block Blob** – Used for storing text and binary files (e.g., images, videos, documents).
2. **Append Blob** – Used for logging data such as application logs and monitoring files.
3. **Page Blob** – Used for random read/write operations, such as virtual machine disks or Azure SQL database storage.



### **Azure File Storage**

Azure **File Storage** provides a shared file system accessible via SMB (Server Message Block) protocol. It acts like a traditional network file share that can be mounted on Windows, Linux, or macOS systems.

#### **Use Cases:**

* File sharing between multiple virtual machines
* Lift-and-shift applications that require file share compatibility
* Storing configuration files for multiple servers



### **Azure Queue Storage**

Azure **Queue Storage** is designed for message-based communication between different components of an application. It ensures reliable delivery of messages between producers and consumers.

#### **Use Cases:**

* Decoupling application components (asynchronous communication)
* Order processing systems
* Payment systems (e.g., MS Office payment flow)
* License generation systems (Python services interacting via queues)

#### **Example Scenario:**

In a payment and license system:

* The payment system sends data (messages) to the queue.
* The license system reads (pulls) messages from the queue to generate licenses.
  This push-pull communication ensures reliable data flow even if one component is temporarily unavailable.



### **Azure Table Storage**

Azure **Table Storage** is a NoSQL key-value store for structured, non-relational data. It provides fast access to large datasets without requiring complex joins or foreign keys.

#### **Use Cases:**

* Storing user profiles, device information, or sensor data
* Maintaining application logs or metadata
* Lightweight data storage for web applications



## **Azure Storage Architecture Overview**

The **Azure Storage Architecture** is designed for scalability, security, and availability. Each storage account provides access to multiple storage services like:

* Blob Storage
* File Storage
* Queue Storage
* Table Storage

All storage services in an Azure Storage Account share the same:

* Account name and key for authentication
* Endpoint (unique URL) for access
* Resource management under a single subscription



## **Creating an Azure Storage Account and Blob Container**

### **Steps:**

1. Sign in to the **Azure Portal**.
2. Navigate to **Storage Accounts**.
3. Click **Create** and provide:

   * Subscription
   * Resource group
   * Storage account name
   * Region and performance tier
4. Once created, open the **Storage Account**.
5. Select **Containers** under **Data Storage**.
6. Click **+ Container** to create a new container.
7. Set container access level (Private, Blob, or Container).
8. Upload images, files, or other data to the container.
9. Access Blob Storage data using Azure Portal, Azure Storage Explorer, or SDKs.



## **Summary**

| **Storage Type**  | **Description**                                    | **Use Cases**                             |
| ----------------- | -------------------------------------------------- | ----------------------------------------- |
| **Blob Storage**  | Stores unstructured data like images, videos, text | Media storage, data lake, backup          |
| **File Storage**  | Shared file system accessible via SMB protocol     | Shared configuration files, app data      |
| **Queue Storage** | Message-based communication                        | Payment & license systems, decoupled apps |
| **Table Storage** | NoSQL key-value store for structured data          | User profiles, IoT data, logs             |



## **Key Points to Remember**

* Blob Storage → Unstructured data
* File Storage → Shared file access
* Queue Storage → Asynchronous communication
* Table Storage → NoSQL structured storage
* Blob Types → Block, Append, Page
* Queue Storage connects systems via push-pull messaging
* Page Blobs are used for VM disks and Azure SQL


