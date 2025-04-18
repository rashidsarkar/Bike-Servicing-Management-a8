# 🚴‍♂️ Bike Servicing Management Backend

This is a RESTful backend application designed to manage bike servicing operations efficiently. It supports customer and bike management, service records (including service status tracking), and basic authentication setup. Built with **Node.js**, **Express**, **Prisma**, and **TypeScript**, it ensures type safety, structured database access, and clean project architecture.

---

## 📁 Project Structure

```
src/
│
├── modules/
│   ├── bikes/
│   ├── customers/
│   ├── services/
│
├── middleware/
├── shared/
├── utils/
├── server.ts
```

---

## ⚙️ Technologies Used

### Backend & Server

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **TypeScript** – Type-safe JavaScript
- **Prisma ORM** – Database toolkit for PostgreSQL (or others)
- **Zod** – Schema validation
- **HTTP-Status** – Semantic HTTP status codes

### Authentication & Security

- **bcrypt** – Password hashing
- **jsonwebtoken** – JWT token generation & verification
- **cookie-parser** – Parsing cookies for auth

### Dev Tools & Utilities

- **ts-node-dev** – TypeScript live-reloading for development
- **CORS** – Cross-Origin Resource Sharing
- **Zod** – Request data validation
- **dotenv** – Environment variable management (recommended for config)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/bike-servicing-management.git
cd bike-servicing-management
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

> Make sure your PostgreSQL or preferred database is up and configured in `.env` before running.

---

## 🔌 API Endpoints Overview

### 🔧 Bikes

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| GET    | `/bikes`      | Get all bikes         |
| GET    | `/bikes/:idx` | Get single bike by ID |
| POST   | `/bikes`      | Create a new bike     |

### 👤 Customers

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/customers`      | Get all customers       |
| GET    | `/customers/:idx` | Get customer by ID      |
| POST   | `/customers`      | Create a new customer   |
| PUT    | `/customers/:idx` | Update customer details |
| DELETE | `/customers/:idx` | Delete a customer       |

### 🛠️ Services

| Method | Endpoint                  | Description                     |
| ------ | ------------------------- | ------------------------------- |
| GET    | `/services`               | Get all service records         |
| GET    | `/services/:idx`          | Get single service record       |
| GET    | `/services/status`        | Get overdue or pending services |
| POST   | `/services`               | Create a service record         |
| PUT    | `/services/:idx/complete` | Mark a service as completed     |

---

## 🥪 Validation

- All `POST` and `PUT` requests are validated using **Zod** schema before reaching controllers.
- Ensures data integrity and prevents malformed data from reaching the database.

---

## 🛡️ Authentication (Coming Soon)

Basic JWT authentication setup is scaffolded and planned for:

- Login/Register
- Role-based access control (Admin, User)

---

## 📌 Environment Variables (Sample)

Create a `.env` file in the root with the following:

```env
DATABASE_URL=your_prisma_database_url
PORT=5000
JWT_SECRET=your_jwt_secret
```

---

## 📁 Scripts

```bash
npm run dev      # Start server with ts-node-dev
```

---

## 📚 Future Improvements

- Add unit & integration testing with Jest or Vitest
- Role-based authentication
- Pagination & filtering for listings
- Monthly service reporting dashboard

---

## 👨‍💻 Author

**MD Rashid Sarkar**  
📢 [rashidsarkar558@gmail.com](mailto:rashidsarkar558@gmail.com)  
🌐 [Portfolio](https://fabulous-meringue-442652.netlify.app)  
🐈 [GitHub](https://github.com/rashidsarkar)

---

## 📍 License

This project is licensed under the **ISC License**.
