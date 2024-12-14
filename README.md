 
# 📘 Freelancer Project Management System

This is a backend API for a Freelancer Project Management System built using Node.js, Express.js, and MongoDB.
The API provides features such as User Authentication, Project Management, Payment Handling, and CSV Data Import/Export.

The goal of this project is to create a scalable, secure, and easy-to-use API to help freelancers and clients manage their projects, payments, and project data efficiently.
The backend follows modern development practices with MVC architecture, and all sensitive routes are protected using JWT authentication.

 - Deploy on Render: https://freelancer-project-management-system.onrender.com

____________________________________________________



## 🚀 Features

 **1. User Authentication (JWT-based)**: 

- Register users with username, email, and password.
- Login using email or username to receive a JWT token.
- JWT token is used to protect sensitive routes.

**2. Project Management (CRUD Operations)**: 
- Create, Read, Update, and Delete (CRUD) projects.
- Projects have fields like name, description, and status.

**3. Payments System**:
- Create, Read, Update, and Delete (CRUD) payments.
- Mark payments as Paid.
- Payments are linked to specific projects.


___________________________________________________


## 🔗 API Endpoints

#### Auth Routes

| Method | Endpoint  | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/auth/register` |Register a new user|
| `POST` | `/api/auth/login` |Log in a user and get a token|
| `GET` | `/api/auth/` |Get all users|

#### Project Routes

| Method | Endpoint  | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/projects` |Get all projects|
| `POST` | `/api/projects` |Create a new project|
| `PUT` | `/api/projects/:id` |Update a project by ID|
| `DELETE` | `/api/projects/:id` |Delete a project by ID|
| `GET` | `/api/projects/export` |	Export all projects as CSV|
| `POST` | `/api/projects/import` |Import projects from a CSV file|

#### Payment Routes

| Method | Endpoint  | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/payments` |Create a new payment|
| `GET` | `	/api/payments` |Get all payments|
| `GET` | `	/api/payments/:id` |Get payment details by ID|
| `PUT` | `/api/payments/:id` |Update payment details by ID|
| `DELETE` | `/api/payments/:id` |Delete a payment by ID|
| `PUT` | `/api/payments/:id/pay` |Mark a payment as paid|



