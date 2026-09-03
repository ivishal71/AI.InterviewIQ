# 🤖 InterviewIQ — AI-Powered Interview Platform

<p align="center">
  <b>Practice smarter. Interview better.</b>
</p>

<p align="center">
  An AI-powered full-stack interview preparation platform that analyzes resumes, generates personalized interview questions, conducts mock interview sessions, and provides AI-driven performance feedback.
</p>

<p align="center">
  <a href="https://ai-interview-iq-green.vercel.app/">Live Demo</a>
  •
  <a href="https://github.com/ivishal71/AI.InterviewIQ">GitHub Repository</a>
</p>

---

## 📌 Overview

**InterviewIQ** is a full-stack MERN-based interview preparation platform designed to help candidates practice interviews using Generative AI.

Users can authenticate securely, upload their resume, receive personalized interview questions based on their skills and experience, complete interview sessions, and receive AI-generated performance feedback.

The project combines **React.js, Node.js, Express.js, MongoDB, Firebase Authentication, JWT, RESTful APIs, and Google Gemini API** into a complete end-to-end application.

---

## ✨ Key Features

### 📄 Resume Analysis

* Upload and process resume PDF files.
* Extract relevant candidate information from the resume.
* Analyze skills and experience to provide personalized interview preparation.

### 🤖 AI-Powered Question Generation

* Generate interview questions dynamically using Generative AI.
* Questions are tailored to the candidate's resume, skills, and experience.
* Supports a more personalized interview experience than static question banks.

### 🎯 Personalized Mock Interviews

* Conduct interview sessions based on the candidate's profile.
* Present dynamically generated questions.
* Capture candidate responses for further analysis.

### 📊 AI-Powered Performance Feedback

* Analyze interview responses using AI.
* Provide performance insights and personalized feedback.
* Help candidates identify areas for improvement.

### 🔐 Authentication & Authorization

* Google Authentication using Firebase.
* JWT-based authentication and authorization.
* Protected backend resources and user-specific data access.

### 🔄 RESTful API Architecture

* REST APIs connect the React frontend with the Express backend.
* Axios is used for client-server communication.
* Backend functionality is organized using controllers, routes, middleware, models, and services.

### 📱 Responsive User Interface

* Modern React-based interface.
* Responsive layouts for different screen sizes.
* Tailwind CSS for styling and UI development.

---



# 🛠️ Tech Stack

## Frontend

| Technology                 | Purpose                      |
| -------------------------- | ---------------------------- |
| React.js                   | Frontend application         |
| Vite                       | Development & build tooling  |
| React Router               | Client-side routing          |
| Redux Toolkit              | Application state management |
| Axios                      | API communication            |
| Tailwind CSS               | Styling                      |
| Firebase                   | Google authentication        |
| Motion                     | UI animations                |
| React Icons                | Interface icons              |
| React Circular Progressbar | Performance visualization    |

## Backend

| Technology | Purpose                             |
| ---------- | ----------------------------------- |
| Node.js    | Server-side runtime                 |
| Express.js | REST API framework                  |
| MongoDB    | Database                            |
| JWT        | Authentication & authorization      |
| REST APIs  | Client-server communication         |
| Middleware | Request authentication & processing |

## AI & Processing

| Technology        | Purpose                                     |
| ----------------- | ------------------------------------------- |
| Google Gemini API | AI-powered analysis and question generation |
| PDF Parsing       | Resume data extraction                      |

## Deployment

| Service       | Usage               |
| ------------- | ------------------- |
| Vercel        | Frontend deployment |
| Render        | Backend deployment  |
| MongoDB Atlas | Cloud database      |

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │       User          │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React Frontend    │
                         │      + Vite         │
                         └──────────┬──────────┘
                                    │
                         Axios / REST APIs
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Backend   │
                         │      + Node.js      │
                         └──────────┬──────────┘
                                    │
                 ┌──────────────────┼──────────────────┐
                 │                  │                  │
                 ▼                  ▼                  ▼
          ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
          │   MongoDB   │    │ Gemini API  │    │    JWT      │
          │   Database  │    │     AI      │    │    Auth     │
          └─────────────┘    └─────────────┘    └─────────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ AI Interview &      │
                         │ Performance         │
                         │ Analysis             │
                         └─────────────────────┘
```

---

# 🔄 Application Workflow

```text
User Authentication
        │
        ▼
Upload Resume
        │
        ▼
Resume PDF Processing
        │
        ▼
Extract Skills & Experience
        │
        ▼
AI-Based Question Generation
        │
        ▼
Personalized Interview
        │
        ▼
Candidate Responses
        │
        ▼
AI Response Analysis
        │
        ▼
Performance Feedback
        │
        ▼
Areas for Improvement
```

---

# 📁 Project Structure

```text
AI.InterviewIQ/
│
├── Client/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── Server/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── Models/
│   ├── Routes/
│   ├── config/
│   ├── services/
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/ivishal71/AI.InterviewIQ.git

cd AI.InterviewIQ
```

## 2. Install Frontend Dependencies

```bash
cd Client
npm install
```

## 3. Install Backend Dependencies

Open another terminal:

```bash
cd Server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `Server` directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

Configure Firebase Authentication credentials in the frontend according to your Firebase project configuration.

> ⚠️ Never commit `.env` files, API keys, database credentials, or authentication secrets to GitHub.

---

# ▶️ Running the Application Locally

## Start the Backend

```bash
cd Server
node index.js
```

## Start the Frontend

```bash
cd Client
npm run dev
```

The frontend will be available through the Vite development server.

---

# 🔐 Security

InterviewIQ implements several mechanisms to protect application resources:

* Firebase-based Google authentication
* JWT-based authorization
* Protected API routes
* Environment variables for sensitive credentials
* Server-side API key management
* User-specific database access

---

# 🧠 AI Integration

The application uses the **Google Gemini API** to power its intelligent interview functionality.

The AI workflow includes:

```text
Resume
   ↓
Resume Information
   ↓
Skills & Experience
   ↓
AI Prompt
   ↓
Personalized Questions
   ↓
Candidate Answers
   ↓
AI Evaluation
   ↓
Performance Feedback
```

This allows InterviewIQ to provide interview preparation tailored to each candidate instead of relying solely on predefined questions.

---

# 📡 API Layer

The backend follows a RESTful architecture and separates application responsibilities into:

* **Routes** — API endpoint definitions
* **Controllers** — Business logic
* **Models** — Database schemas
* **Middlewares** — Authentication and request processing
* **Services** — External/API-related functionality
* **Config** — Application configuration

This separation improves maintainability and makes the backend easier to extend.

---

# ☁️ Deployment

The application is deployed using cloud-based services.

### Frontend

**Vercel**

### Backend

**Render**

### Database

**MongoDB Atlas**

### Live Application

🔗 https://ai-interview-iq-green.vercel.app/

---

# 📚 What I Learned

Building InterviewIQ provided hands-on experience with:

* Full-stack MERN development
* React application architecture
* RESTful API development
* JWT authentication and authorization
* Firebase Google Authentication
* MongoDB database integration
* Generative AI API integration
* Resume PDF processing
* Frontend-backend integration
* API debugging using Postman and browser DevTools
* Cloud deployment
* Managing environment variables and production configuration

---

# 🚀 Future Improvements

* 📈 Advanced interview performance analytics
* 📊 Interview history and progress tracking
* 🔔 Personalized preparation recommendations

---

# 👨‍💻 Author

## Vishal Shankhdhar

Full-Stack Developer focused on building scalable web applications and AI-powered solutions.

* LinkedIn: https://www.linkedin.com/in/vishal-shankhdhar-2753a8410
* GitHub: https://github.com/ivishal71
* LeetCode: https://leetcode.com/u/vishal_shankhdhar/

---

## ⭐ Show Your Support

If you found InterviewIQ interesting, consider giving the repository a ⭐.

**Built with React, Node.js, Express, MongoDB & Generative AI.**
