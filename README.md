# Acadify LMS

Acadify is a modern Learning Management System for students, teachers, and administrators.

## Key Features
- Role-based dashboards: Student, Teacher, Admin
- Course creation, enrollment, and progress tracking
- Video lessons, quizzes, and analytics
- Secure authentication (JWT)
- Responsive UI (React)
- RESTful backend API (Node.js, Express, PostgreSQL)

## File Structure
```
acadify-client/      # React frontend
  ├── public/
  └── src/
      ├── components/      # Reusable UI components
      ├── dashboards/      # Student, Teacher, Admin dashboards
      └── auth.js          # Auth utilities
controllers/         # Backend controllers
middleware/          # Auth middleware
routes/              # API routes
server.js            # Express server
.env                 # Environment config
README.md            # Project documentation
```

## Tech Stack
- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Authentication:** JWT

## Getting Started
1. Install dependencies:
   - `npm install`
   - `cd acadify-client && npm install`
2. Configure `.env` with database and JWT secret
3. Start backend: `npm start`
4. Start frontend: `cd acadify-client && npm start`

---
For more, explore the dashboards and codebase.