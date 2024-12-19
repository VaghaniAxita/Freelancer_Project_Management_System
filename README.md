
# Freelancer Project Management System API

This is a backend API for a Freelancer Project Management System built using Node.js, Express.js, and MongoDB. The API provides features such as User Authentication, Project Management, Payment Handling, and CSV Data Import/Export.


 - Deploy on Render:  https://freelancer-project-management-system.onrender.com
____________________________________________________




## Tech Stack

- Node.js 
- Express.js
- MongoDB 
- Mongoose for database interaction
- Multer (file handling)
- JWT  (authntication)
- CSV-Parser 
## Features

1. User Authentication (JWT-based):
- Register users with username, email, and password.
- Login using email or username to receive a JWT token.
- JWT token is used to protect sensitive routes.

2. Project Management (CRUD Operations):
- Create, Read, Update, and Delete (CRUD) projects.
- Projects have fields like name, description, and status.

3. Payments System:
- Create, Read, Update, and Delete (CRUD) payments.
- Mark payments as Paid.
Payments are linked to specific projects.

___________________________________________________


## Setup

1. Clone the Repository

```bash
 https://github.com/VaghaniAxita/Freelancer_Project_Management_System
```

2. Navigate to the Project Directory:

```bash
  cd backend  
```

3. Run the server:
```bash
  nodemon
```




# Routes

### User Authentication Routes
  
  **Register  User**

- Route:POST /register
- Description: Register a new user
- Request Body:
```bash
  {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
{
  "message": "User registered successfully",
  "user": {
    "id": "63f16c2bfc13ae1d3e000001",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**User Login**

- Route: POST /login
- Description:Login an existing usertoken.
- Request Body:
```bash
 {
  "email": "john@example.com",
  "password": "password123"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg",
 }
```

**Get All User**

- Route: GET /
- Description:Get all users.
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 [
  {
    "id": "63f16c2bfc13ae1d3e000001",
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": "63f16c2bfc13ae1d3e000002",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```
### Projects Routes

**Create Project**

- Route:POST /
- Request Body:  
```bash
{
  "title": "E-commerce Platform",
  "description": "Building an online store for selling products.",
  "status": "Not Started"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
{
  "message": "Project created successfully",
  "project": {
    "id": "63f16c2bfc13ae1d3e000007",
    "title": "E-commerce Platform",
    "description": "Building an online store for selling products.",
    "status": "Not Started"
  }
}
```

**Get Projects**

- Route:GET /
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
[
  {
    "id": "63f16c2bfc13ae1d3e000005",
    "title": "Website Redesign",
    "description": "Redesigning the client website for better UX.",
    "status": "In Progress"
  },
  {
    "id": "63f16c2bfc13ae1d3e000006",
    "title": "Mobile App Development",
    "description": "Developing a cross-platform mobile app.",
    "status": "Completed"
  }
]
```

**Update Project Details**

- Route:PUT /:id
- Request Body:
```bash
 {
  "title": "E-commerce Platform V2",
  "description": "Enhanced features for the online store.",
  "status": "In Progress"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "Project updated successfully",
  "project": {
    "id": "63f16c2bfc13ae1d3e000007",
    "title": "E-commerce Platform V2",
    "description": "Enhanced features for the online store.",
    "status": "In Progress"
  }
}
```
**Delete Project**

- Route:DELETE /:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "Project deleted successfully"
}
```

###  Payments Routes

**Create Payment**

- Route:POST /
- Request Body:  
```bash
{
  "amount": 500.75,
  "description": "Invoice #12345",
  "userId": "63f16c2bfc13ae1d3e000001"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
{
  "message": "Payment created successfully",
  "payment": {
    "id": "63f16c2bfc13ae1d3e000003",
    "amount": 500.75,
    "description": "Invoice #12345",
    "userId": "63f16c2bfc13ae1d3e000001",
    "status": "Pending"
  }
}
```

**Get Payment**

- Route:GET /api/lists/
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
[
  {
    "id": "63f16c2bfc13ae1d3e000003",
    "amount": 500.75,
    "description": "Invoice #12345",
    "userId": "63f16c2bfc13ae1d3e000001",
    "status": "Pending"
  },
  {
    "id": "63f16c2bfc13ae1d3e000004",
    "amount": 300.00,
    "description": "Invoice #67890",
    "userId": "63f16c2bfc13ae1d3e000002",
    "status": "Paid"
  }
]
```

**Get Payment by ID**

- Route:GET /:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "id": "63f16c2bfc13ae1d3e000003",
  "amount": 500.75,
  "description": "Invoice #12345",
  "userId": "63f16c2bfc13ae1d3e000001",
  "status": "Pending"
}
```
**Update Payment Details**

- Route:PUT /:id
- Request Body:
```bash
 {
  "amount": 550.00,
  "description": "Updated Invoice #12345"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "Payment updated successfully",
  "payment": {
    "id": "63f16c2bfc13ae1d3e000003",
    "amount": 550.00,
    "description": "Updated Invoice #12345",
    "status": "Pending"
  }
}
```
**Delete Payment**

- Route: DELETE /:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "Payment deleted successfully"
}
```

**Mark Payment as Paid**

- Route:PUT /:id/pay
- Sample Response:
  - Status: 200 Created
   - Body:
```bash
{
  "message": "Payment marked as paid",
  "payment": {
    "id": "63f16c2bfc13ae1d3e000003",
    "amount": 500.75,
    "description": "Invoice #12345",
    "status": "Paid"
  }
}
```

