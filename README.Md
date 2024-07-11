# Task Management App

A simple full-stack task management application built with FastAPI for the backend and React for the frontend. The backend uses SQLAlchemy ORM and PostgreSQL for database management.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
  - [Backend Deployment](#backend-deployment)
  - [Frontend Deployment](#frontend-deployment)
  - [Connecting Frontend and Backend](#connecting-frontend-and-backend)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete tasks
- Manage task status (To Do, In Progress, Done)
- Responsive design using React and basic CSS

## Requirements

- Python 3.8+
- Node.js 14+
- PostgreSQL

## Installation

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    cd task-management-app/backend
    ```

2. **Create a virtual environment and activate it:**

    ```bash
    python -m venv env
    source env/bin/activate  # On Windows, use `env\Scripts\activate`
    ```

3. **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Configure the database:**

    Create a `.env` file in the `backend` directory and add your database URL:

    ```env
    DATABASE_URL=postgresql://username:password@localhost/dbname
    ```

5. **Run the backend server:**

    ```bash
    uvicorn main:app --reload
    ```

    The backend server will start at `http://127.0.0.1:8000`.

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Run the frontend development server:**

    ```bash
    npm run dev
    ```

    The frontend development server will start at `http://localhost:5173`.

## Running the Application

Once both the backend and frontend are set up and running, you can access the application by navigating to `http://localhost:5173` in your web browser.
<!-- 
## Deployment

### Backend Deployment

1. **Create a repository on GitHub:**

    Push your backend code to a new GitHub repository.

2. **Add a `Dockerfile`:**

    ```dockerfile
    # Use the official Python image from the Docker Hub
    FROM python:3.10-slim

    # Set the working directory in the container
    WORKDIR /app

    # Copy the requirements.txt file into the container at /app
    COPY requirements.txt .

    # Install the dependencies
    RUN pip install --no-cache-dir -r requirements.txt

    # Copy the rest of the code into the container at /app
    COPY . .

    # Command to run the app
    CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
    ```

3. **Deploy on Render:**

    - Sign up on [Render](https://render.com/).
    - Create a new web service and connect your GitHub repository.
    - Use Docker as the environment and leave build/start commands blank.

### Frontend Deployment

1. **Create a repository on GitHub:**

    Push your frontend code to a new GitHub repository.

2. **Deploy on Vercel:**

    - Sign up on [Vercel](https://vercel.com/).
    - Import your GitHub repository.
    - Vercel will automatically detect the React project and deploy it.

### Connecting Frontend and Backend

1. **Update API URL in React Frontend:**

    Update your React frontend code to use the deployed FastAPI backend URL instead of `http://127.0.0.1:8000`.

    For example, in your API calls, replace:

    ```javascript
    const response = await fetch('http://127.0.0.1:8000/api/tasks');
    ```

    with:

    ```javascript
    const response = await fetch('https://your-fastapi-backend-url/api/tasks');
    ```

2. **Configure CORS for Production:**

    Update the `allow_origins` in your FastAPI CORS middleware to include your deployed frontend URL:

    ```python
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["https://your-frontend-url"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. -->
