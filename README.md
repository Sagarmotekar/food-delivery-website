# 🍔 Food Delivery App

A full-stack food delivery web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The project consists of three separate applications: a **Frontend** for customers, an **Admin Panel** for restaurant management, and a **Backend** API server.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green) ![React](https://img.shields.io/badge/React-18-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)

## 🌟 Features

### Customer Frontend
- 🏠 Browse food items by category
- 🔍 Search for specific dishes
- 🛒 Add/remove items from cart
- 💳 Secure online payment integration (Stripe)
- 📦 Track order status in "My Orders"
- 🔐 User authentication (Login/Signup)
- 📱 Fully responsive design

### Admin Panel
- ➕ Add new food items with images
- 📋 View and manage food list
- 🗑️ Delete food items
- 📊 View and manage customer orders
- 🔒 Admin-only access

### Backend API
- RESTful API architecture
- JWT-based authentication
- MongoDB database integration
- Image upload handling
- Stripe payment gateway integration
- CORS enabled for cross-origin requests

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, React Router, Axios, Vite |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JWT (JSON Web Tokens), bcrypt |
| **Payments** | Stripe |
| **Styling** | CSS3 |
| **Deployment** | Vercel (Frontend & Admin), Render (Backend) |

## 📁 Project Structure

```
food-delivery-app/
│
├── admin/                 # Admin panel (React + Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Add, List, Orders pages
│   │   └── assets/        # Images and icons
│   └── package.json
│
├── frontend/              # Customer-facing app (React + Vite)
│   ├── src/
│   │   ├── components/    # Navbar, Footer, FoodItem, etc.
│   │   ├── context/       # StoreContext (global state)
│   │   ├── pages/         # Home, Cart, PlaceOrder, Verify, MyOrders
│   │   └── assets/        # Images and icons
│   └── package.json
│
├── backend/               # API server (Node.js + Express)
│   ├── config/            # Database configuration
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API endpoints
│   ├── uploads/           # Uploaded food images
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Stripe account (for payments)

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend server:
```bash
node server.js
# Server runs on http://localhost:4000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

### 4. Admin Panel Setup
```bash
cd ../admin
npm install
npm run dev
# Admin panel runs on http://localhost:5174
```

## 🌐 API Endpoints

### User Routes
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user

### Food Routes
- `GET /api/food/list` - Get all food items
- `POST /api/add` - Add new food item (Admin)
- `POST /api/food/remove` - Remove food item (Admin)

### Cart Routes
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user's cart

### Order Routes
- `POST /api/order/place` - Place a new order
- `POST /api/order/verify` - Verify payment status
- `POST /api/order/userorders` - Get user's orders
- `POST /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 🔐 Environment Variables

### Backend (`.env`)
| Variable | Description |
|----------|-------------|
| `MONGO_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `STRIPE_SECRET_KEY` | Stripe secret API key |

### Frontend & Admin
Both apps use the backend URL. In production, configure via Vercel environment variables:
| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Backend API URL (e.g., `https://your-backend.onrender.com`) |

## 🌍 Deployment

### Backend (Render)
1. Push code to GitHub
2. Connect repo to [Render](https://render.com)
3. Set root directory to `backend`
4. Add environment variables
5. Deploy

### Frontend & Admin (Vercel)
1. Connect repo to [Vercel](https://vercel.com)
2. Import the repo twice (once for frontend, once for admin)
3. Set root directories to `frontend` and `admin` respectively
4. Add `VITE_BACKEND_URL` environment variable
5. Deploy

## 📸 Screenshots

### Customer Frontend
- Home Page - Browse food categories and items
- Cart Page - Review and manage selected items
- Payment - Secure Stripe checkout
- My Orders - Track order status

### Admin Panel
- Dashboard - Overview of orders and items
- Add Food - Upload new menu items
- List Food - Manage existing items
- Orders - Update order status

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**  
GitHub: [@yourusername](https://github.com/yourusername)  
LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- React Documentation
- Express.js Guide
- MongoDB Atlas
- Stripe Payment Integration

---

⭐ If you found this project helpful, please consider giving it a star!
