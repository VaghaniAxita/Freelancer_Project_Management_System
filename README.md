
# Project and Payment Management Dashboard

This is a full-stack application for managing projects and payments. The project includes:
- **Backend:** A RESTful API built with Node.js, Express.js, and MongoDB.
- **Frontend:** A responsive React application for managing projects and tracking payments.
The goal of this project is to provide an intuitive interface for users to manage projects and payments, with an earnings overview dashboard.

## 📚 Features 

### Backend
-  **User Authentication:** 
   - JWT-based authentication.
   - Secure password hashing using `bcrypt`.


- **Project Management:** 
  - CRUD operations for projects (Create, Read, Update, Delete).
  - CSV import/export for bulk project management.


-  **Payment Management:** 
   - CRUD operations for payments.
   - Mark payments as paid (mock payment gateway).


- **Code Organization:**  
   - Clean MVC architecture with controllers, routes, and middleware.
   - Configurable database connection using environment variables.


### Frontend


- **Dashboard:** 
   - Display project cards with names, due dates, and statuses.
 
- **Project Management:** 
   - Add new projects via a form.
   - Update or delete projects from the dashboard.

- **Payment Tracking:** 
   - List payments with amounts and statuses.
   - Mark unpaid payments as paid.

- **Code Organization:**
   - Modular React components for each feature.
   - Centralized state management using React state.

- **Styling**
    - Minimal CSS for a clean and professional UI.






## 🛠️ Technology Stack

**Backend:** 

- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt
- CSV utilities

**Frontend:** 

- React.js 
- CSS for styling 

## 🎯 Future Enhancements
   Add authentication to the frontend for secure access.

   Enhance the UI/UX with modern styling (e.g., Tailwind or Material-UI).

Add backend integration for live data instead of mock data.

Implement comprehensive testing for backend and frontend.
