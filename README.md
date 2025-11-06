# Full Stack MERN CRUD Application

A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that demonstrates complete CRUD (Create, Read, Update, Delete) functionality for managing notes.

## 🚀 Features

- Create new notes with title and content
- View all notes in a clean, organized interface
- Update existing notes
- Delete notes
- RESTful API architecture
- Responsive design

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Modern JavaScript (ES6+)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM

## 📁 Project Structure

```
├── frontend/          # React frontend application
│   ├── src/          # Source files
│   ├── public/       # Static files
│   └── build/        # Production build
├── server/           # Express backend server
│   ├── config/       # Database configuration
│   ├── controllers/  # Route controllers
│   ├── models/       # Mongoose models
│   └── server.js     # Server entry point
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally or MongoDB Atlas account

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## 🔌 API Endpoints

| Method | Endpoint        | Description          |
|--------|----------------|----------------------|
| GET    | /notes         | Get all notes        |
| GET    | /notes/:id     | Get a single note    |
| POST   | /notes         | Create a new note    |
| PUT    | /notes/:id     | Update a note        |
| DELETE | /notes/:id     | Delete a note        |

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built as a learning project to understand full-stack development
- MERN stack documentation and community resources
