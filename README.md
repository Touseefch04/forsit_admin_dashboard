# 🛒 E-commerce Admin Dashboard

A responsive web-based **E-commerce Admin Dashboard** built with **Vue 3 + Bootstrap 5** and powered by a **Node.js + Express** backend using mock data.

This dashboard allows admins to manage product inventory, analyze revenue trends, and register new products in a simple, modern UI.

---

## 🚀 Live Demo

- **Frontend (Netlify):** https://admindashboardforsit.netlify.app/dashboard
- **Backend (Render):** [https://your-api.onrender.com](#)

---

## 📂 Project Structure

ecommerce-dashboard/
├── backend/ # Node.js + Express API (products, revenue)
├── frontend/
│ └── admin-dashboard/ # Vue 3 + Bootstrap dashboard app

yaml
Copy
Edit

---

## 🛠 Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | Vue 3 + Vite, Bootstrap 5   |
| Charts    | Chart.js                    |
| Backend   | Node.js, Express.js         |
| Styling   | Bootstrap 5                 |
| Hosting   | Netlify (Frontend), Render (API)

---

## ✨ Features

 ✅ Dashboard
- Total Orders and Revenue display
- Revenue charts with trends (daily)
- Category-based revenue analysis

 ✅ Inventory Management
- List of all products
- Inline stock updates
- Low inventory alerts (coming soon)

 ✅ Product Registration
- Add new products via form
- Fields: name, price, stock, image name
- POSTs to backend and updates JSON

---


### 📦 Backend

```bash
cd backend
npm install
nodemon index.js
# Runs on http://localhost:5000
🌐 Frontend
bash
Copy
Edit
cd frontend/admin-dashboard
npm install
npm run dev
# Runs on http://localhost:5173
📁 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add new product
PUT	/api/products/:id	Update stock count
GET	/api/revenue	Get revenue data



💡 Design Choices
Used Bootstrap for faster and responsive UI

Chart.js for clean, readable analytics

Organized with Vue Router for scalability

JSON file for demo data simulation

📚 Documentation
See full PDF report here

📦 Author
Developer: Muhammad Touseef
Email: touseefchaudary487@gmail.com
GitHub: https://github.com/Touseefch04

✅ License
This project is for educational and technical demonstration purposes.

yaml
Copy
Edit
