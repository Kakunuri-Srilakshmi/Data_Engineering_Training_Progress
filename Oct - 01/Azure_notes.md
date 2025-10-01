# Cloud Computing



## Introduction  
Cloud computing is the delivery of IT resources such as servers, storage, databases, networking, and software over the internet.  
It offers **on-demand service, pay-as-you-go pricing, scalability, global access, and reliability**.  


## On-Premises Hosting (Traditional IT Model)  

### Example: TaxSmile – IT Returns Portal (On-Premises Solution)  
- In February, the portal was launched with **2 physical servers**.  
- From April to August, additional **3 servers** were required for load and stress testing.  

**Steps Involved**  
- Approvals from stakeholders like Directors, CEO, and COO.  
- Servers procured from a vendor in Germany, which took nearly 2 weeks.  
- Network engineers worked **24/7**, organized into **3 main teams plus 1 backup team** (incurring CTC).  
- Additional costs for **power supply** and **room rent** to host the servers.  

**Challenges**  
- Very slow process (weeks for procurement).  
- High upfront investment in hardware and resources.  
- Complex maintenance of network, power, cooling, and staff.  
- Scalability was limited.  



## Cloud Hosting (Modern IT Model)  

### Example: TaxSmile – Cloud Solution  
- In February, the system was deployed using **2 Virtual Machines (VMs)** instantly.  
- Application services were configured on **2 servers** virtually without procurement delays.  
- Scaling was elastic, meaning resources automatically increased or decreased based on demand.  

**Benefits**  
- Provisioning within minutes instead of weeks.  
- Pay only for the resources used.  
- No physical maintenance required.  
- High availability, reliability, and global access.  



## Elastic Scaling  
- Elasticity allows cloud resources to automatically expand or shrink depending on demand.  
- **Horizontal Scaling (Scale Out/In):** Adding or removing servers.  
  - Example: Adding 5 VMs during peak tax-filing season.  
- **Vertical Scaling (Scale Up/Down):** Increasing or decreasing CPU, RAM, or storage of an existing server.  



## Virtual Machines (VMs)  
- A VM is a software-based environment that behaves like a physical computer.  
- Multiple VMs can run on the same physical server.  
- Advantages include isolation, easy migration, and cost-effectiveness.  



## Hypervisors (Virtualization Layer)  
- A hypervisor enables multiple VMs to run on a single server by allocating CPU, RAM, and storage.  
- **Type 1 (Bare Metal):** Runs directly on hardware (examples: VMware ESXi, Microsoft Hyper-V).  
- **Type 2 (Hosted):** Runs on top of an OS (examples: VirtualBox, VMware Workstation).  



## Microsoft Azure Cloud Architecture  
- **Data Centers** across the world host cloud services.  
- **Racks** contain servers and storage devices.  
- **Servers** run applications, VMs, and databases.  
- **Network Switches** provide connectivity.  
- **Fabric Controller** manages servers, load balancing, and failover.  
- **Orchestrator** automates provisioning and scaling.  
- **Web API** allows developers to access Azure services.  
- **Virtualization** enables multiple VMs on a single server.  



## Cloud Service Models  
- **Infrastructure as a Service (IaaS):** Provides virtualized infrastructure like servers, networking, and storage.  
  - Examples: AWS EC2, Azure VMs.  
- **Platform as a Service (PaaS):** Provides a platform for developers to build and run applications.  
  - Examples: Azure App Services, Google App Engine.  
- **Software as a Service (SaaS):** Provides ready-to-use applications over the cloud.  
  - Examples: Microsoft 365, Salesforce, Gmail.  


## Summary  
On-premises hosting involves high cost, delays, and limited scalability.  
Cloud hosting provides faster deployment, cost savings, elastic scaling, and global access.  


