# ⚙️ FishPedia Server — RESTful API & Backend Services

> A robust, high-performance Express.js backend API built with TypeScript and MongoDB, powering authentication, role-based access control, and aquatic product data management for FishPedia.

---

## 🌐 Live API & Repository

🔗 **Live Server API:** [https://fishpedia-server.onrender.com](https://fishpedia-server.onrender.com)  
🔗 **Server Repo:** [https://github.com/Asmual/FishPedia-Server](https://github.com/Asmual/FishPedia-Server)  
🔗 **Client Repo:** [https://github.com/Asmual/FishPedia-Client](https://github.com/Asmual/FishPedia-Client)  
🔗 **Live Frontend App:** [https://fishpedia.vercel.app](https://fishpedia.vercel.app)

---

## 🛠️ Tech Stack & Dependencies

| Technology | Purpose |
|---|---|
| ⚡ Node.js & Express.js | Core Server Framework |
| 📘 TypeScript | Type-safe Backend Architecture |
| 🍃 MongoDB Native Driver | High-Performance Database Operations |
| 🔐 JWT (JSON Web Token) | Secure User Authentication & Authorization |
| 🔑 BetterAuth | Hybrid Session Validation |
| 🌐 CORS | Secure Cross-Origin Data Exchange (`Render` to `Vercel`) |
| ⚡ TSX | Ultra-fast TypeScript Execution Runner for Dev |
| 🔐 Dotenv | Environment Variable Management |

---

## ✨ Key Features & API Functionalities

### 🔐 Auth & Security Layer
- Hybrid session and token verification system supporting **BetterAuth** and custom **JWT**.
- Cross-origin cookie handling and authorization header processing.
- Middleware-driven **Role-Based Access Control (RBAC)** restricting endpoints between **`admin`** and **`buyer`**.

### 🐟 Product Management API
- Full CRUD operations (Create, Read, Update, Delete) for aquatic products and accessories.
- Efficient query handling for search, category filtering, and pagination.
- Admin-only guarded routes for product additions, modifications, and deletions.

### 🛒 Orders & Cart Operations
- Secure order generation linked directly to user profiles.
- Automated database queries utilizing MongoDB Native Driver for optimized read/write performance.

---

## 📋 API Endpoints Summary

| Endpoint | Method | Access Level | Description |
|---|---|---|---|
| 🟢 `/` | `GET` | Public | Health check route to verify server status. |
| 🔑 `/api/v1/auth/*` | `POST` | Public | User authentication, login, and registration endpoints. |
| 🛍️ `/api/v1/products` | `GET` | Public | Fetch all products with search & category filters. |
| 📄 `/api/v1/products/:id` | `GET` | Public | Get detailed information for a single product. |
| ➕ `/api/v1/products` | `POST` | Admin | Create a new fish or product entry. |
| ✏️ `/api/v1/products/:id` | `PATCH / PUT` | Admin | Update existing product details or stock. |
| 🗑️ `/api/v1/products/:id` | `DELETE` | Admin | Remove a product from the database. |
| 📦 `/api/v1/orders` | `POST` | Protected (Buyer) | Place a new order for items in the cart. |
| 📜 `/api/v1/orders/my-orders` | `GET` | Protected (Buyer) | Retrieve order history for the logged-in buyer. |
