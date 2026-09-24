# E-commerce Platform Architecture (Clothes & Shoes Store)

Two user roles: **User** (customer) and **Admin**. Stack: React/Vite frontend, Node/Express/MongoDB backend.

---

## 1. Backend

### 1.1 Roles

There is **no separate admin system** — one `User` model with a `role` field (`'user' | 'admin'`). Two middlewares protect routes:

```js
router.post('/', protect, adminOnly, createProduct);  // admin only
router.get('/my', protect, getMyOrders);               // any logged-in user
```

- `protect` — verifies JWT, attaches `req.user`
- `adminOnly` — checks `req.user.role === 'admin'`, else 403

**Never** accept `role` from the register request body. Create the first admin manually (DB edit or seed script).

### 1.2 Database models

| Model | Fields |
|---|---|
| **User** | `name, email, password (hashed), role, addresses[]` |
| **Product** | `name, description, category, price, images[], variants[{ size, color, stock }], isActive` |
| **Cart** | `user, items[{ product, size, quantity }]` |
| **Order** | `user, items[{ product, name, price, size, quantity }], shippingAddress, totalAmount, paymentStatus, orderStatus, paymentId` |

Key details for a clothing/shoe store:
- **Stock is per size**, not per product → lives inside `variants`.
- **Copy `name` and `price` into order items at purchase time** — so past orders stay correct even if product price changes later.

### 1.3 API routes

| Access | Route | Purpose |
|---|---|---|
| Public | `POST /api/auth/register`, `/login`, `/refresh` | Auth |
| Public | `GET /api/products` (`?category=&search=&page=`), `GET /api/products/:id` | Browse |
| User | `GET/PUT /api/users/me` | Profile, addresses |
| User | `GET/POST/PUT/DELETE /api/cart` | Cart |
| User | `POST /api/orders`, `GET /api/orders/my`, `GET /api/orders/:id` | Orders |
| User | `POST /api/payments/create`, `POST /api/payments/verify` | Payment |
| Admin | `POST/PUT/DELETE /api/products/:id` | Manage products |
| Admin | `GET /api/admin/orders`, `PATCH /api/admin/orders/:id/status` | Manage orders |
| Admin | `GET /api/admin/users`, `GET /api/admin/stats` | Users, dashboard |

### 1.4 Backend folder structure

```
backend/
├── config/        # db.js, cloudinary.js
├── models/        # User.js, Product.js, Cart.js, Order.js
├── controllers/   # authController.js, productController.js ...
├── routes/        # authRoutes.js, productRoutes.js ...
├── middleware/    # auth.js (protect, adminOnly), error.js, upload.js
├── utils/         # generateToken.js
├── server.js
└── .env
```

### 1.5 Suggested build order

1. Project setup, MongoDB connection, error handler
2. User model + register/login + JWT + `protect`/`adminOnly`
3. Product model + admin CRUD + image upload (Cloudinary)
4. Public product listing with filters and pagination
5. Cart
6. Orders (check stock, calculate total on the server)
7. Payment (Razorpay create + verify)
8. Admin order management + stats
9. Security and polish

### 1.6 Rules that prevent real bugs

- **Calculate the total on the server** from DB prices. Never trust a price sent from the frontend.
- **Verify the Razorpay signature** before marking an order as paid.
- Hash passwords with `bcrypt`; add `helmet`, `cors`, `express-rate-limit`.
- Validate input (`zod` or `express-validator`).
- Reduce stock only after payment succeeds, using an atomic update so two people can't buy the last item.

---

## 2. Frontend Features (by role)

### 2.1 Public / Normal User

**Browsing & discovery**
- Home page: banners, featured products, new arrivals, category tiles
- Product listing: filters (category, size, color, price), sort, pagination/infinite scroll
- Search bar with live suggestions
- Product detail: image gallery/zoom, size & color selector, stock availability, size chart, reviews/ratings, related products

**Account**
- Register/login (email+password, optional Google OAuth)
- Forgot/reset password
- Profile page: edit name, phone, avatar
- Saved addresses (add/edit/delete, set default)
- Order history + order detail/tracking
- Wishlist

**Shopping flow**
- Add to cart (listing + detail page), cart drawer/page
- Update quantity, remove item, apply coupon/promo code
- Cart persists across sessions
- Checkout: address selection, order summary, payment (Razorpay UI)
- Order confirmation page

**Supporting pages**
- About, Contact, FAQ, Size guide, Return/refund policy
- 404 page, loading skeletons, empty states

### 2.2 Admin (`/admin`)

- Admin login (reuse main login, redirect based on role); protected routes
- **Product management**: list w/ search/filter, add/edit form (images, variants), toggle active, delete, bulk stock update
- **Order management**: all orders table (filter by status/date, search by customer), order detail, status updates, cancel/refund
- **User management**: list users, view user's orders, promote/demote role (with confirm dialog)
- **Dashboard**: sales stats (revenue, orders today, top-selling products), simple charts

### 2.3 Cross-cutting concerns
- Global state: cart, auth/user
- Axios instance with JWT refresh interceptor
- Toast notifications
- Responsive, mobile-first design
- Protected route wrappers (`<PrivateRoute>`, `<AdminRoute>`)

---

## 3. Frontend Architecture — 4-Layer Model

```
UI (Presentation)
  ↓
Hooks (Orchestration)
  ↓
State (Memory)
  ↓
API (Backend Communication)
```

| Layer | Responsibility | Must NOT do |
|---|---|---|
| **UI** | Render screens, collect input, call hooks, show loading/error, navigate | Call API directly, touch localStorage/cookies, parse tokens, manage global state directly, contain business rules |
| **Hooks** | Coordinate: call API → update State → return simple interface to UI | Return JSX, manipulate DOM, hold axios setup, store data itself |
| **State** | Hold shared data + derived values, expose setters, trigger re-renders | Call API, navigate, render UI, show toasts, contain `async`/`try-catch` |
| **API** | Talk to backend via HTTP, normalize responses/errors | Update React state, navigate, show UI errors, use hooks |

**Strict rules:** UI → Hooks → State/API. State talks to nothing. No skipping layers.

### 3.1 Full folder structure

```
src/
├── features/
│   ├── home/
│   │   ├── pages/            # HomePage.jsx
│   │   ├── components/       # Hero, CategoryTiles, FeaturedProducts, NewArrivals
│   │   ├── hooks/             # useHomeData.js
│   │   └── services/          # home.api.js (or reuses products.api.js)
│   │
│   ├── auth/
│   │   ├── pages/             # LoginPage, RegisterPage, ForgotPasswordPage
│   │   ├── components/        # LoginForm, RegisterForm
│   │   ├── hooks/              # useAuth.js
│   │   ├── auth.context.jsx    # State layer
│   │   └── services/           # auth.api.js
│   │
│   ├── products/
│   │   ├── pages/              # ProductListingPage, ProductDetailPage
│   │   ├── components/         # ProductCard, ProductGrid, SizeSelector, FilterBar
│   │   ├── hooks/                # useProducts.js, useProductDetail.js
│   │   ├── products.context.jsx
│   │   └── services/             # products.api.js
│   │
│   ├── cart/
│   │   ├── pages/               # CartPage
│   │   ├── components/          # CartItem, CartSummary
│   │   ├── hooks/                 # useCart.js
│   │   ├── cart.context.jsx
│   │   └── services/               # cart.api.js
│   │
│   ├── orders/
│   │   ├── pages/                # CheckoutPage, OrderHistoryPage, OrderDetailPage
│   │   ├── components/           # OrderSummary, AddressForm, OrderStatusBadge
│   │   ├── hooks/                  # useOrders.js, useCheckout.js
│   │   ├── orders.context.jsx
│   │   └── services/                # orders.api.js, payment.api.js
│   │
│   └── admin/
│       ├── pages/                 # Dashboard, ProductManage, OrderManage, UserManage
│       ├── components/            # AdminSidebar, StatsCard, ProductForm, OrdersTable
│       ├── hooks/                   # useAdminProducts.js, useAdminOrders.js, useAdminUsers.js
│       ├── admin.context.jsx
│       └── services/                 # admin.api.js
│
├── shared/
│   ├── components/            # Button, Input, Modal, Loader, Toast
│   ├── layout/                 # Navbar, Footer, AdminLayout
│   ├── lib/
│   │   └── axiosInstance.js   # base config + JWT refresh interceptor
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── AdminRoute.jsx
│   └── utils/                  # formatPrice.js, validators.js, constants.js
│
├── App.jsx
└── main.jsx
```

### 3.2 Feature → State/Hooks map

| Feature | State holds | Hooks expose |
|---|---|---|
| `home` | `featured, newArrivals` | `load` |
| `auth` | `user, loading, error`, derived `isAuthenticated`, `isAdmin` | `handleLogin, handleRegister, handleLogout` |
| `products` | `products, filters, pagination` | `fetchProducts, fetchProductById, applyFilter` |
| `cart` | `items`, derived `total, itemCount` | `addItem, removeItem, refresh` |
| `orders` | `orders, currentOrder` | `placeOrder, fetchMyOrders, verifyPayment` |
| `admin` | `dashboardStats, adminProducts, adminOrders` | `createProduct, updateOrderStatus, fetchStats` |

Notes:
- `isAdmin` is a **derived value** in `auth.context.jsx` (`user?.role === 'admin'`); `AdminRoute` reads it — never re-derived inline in components.
- `shared/lib/axiosInstance.js` is the **one place** with the JWT refresh interceptor. Every feature's `services/` file imports it, but no single feature owns it.

### 3.3 Worked example — `cart` feature (all 4 layers)

**services/cart.api.js** — API layer, pure, no React
```js
import axios from "../../../shared/lib/axiosInstance";

export const fetchCartApi = () => axios.get("/cart").then(r => r.data);
export const addToCartApi = (productId, size, qty) =>
  axios.post("/cart", { productId, size, qty }).then(r => r.data);
export const removeFromCartApi = (itemId) =>
  axios.delete(`/cart/${itemId}`).then(r => r.data);
```

**cart.context.jsx** — State layer, pure storage
```jsx
import { createContext, useMemo, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = useMemo(() => ({
    items,
    itemCount: items.reduce((sum, i) => sum + i.qty, 0), // derived
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0), // derived
    loading, error,
    setItems, setLoading, setError,
  }), [items, loading, error]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
```

**hooks/useCart.js** — Hooks layer, orchestration
```js
import { useCallback, useContext } from "react";
import { CartContext } from "../cart.context.jsx";
import { fetchCartApi, addToCartApi, removeFromCartApi } from "../services/cart.api.js";

export function useCart() {
  const { setItems, setLoading, setError, ...state } = useContext(CartContext);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchCartApi();
      setItems(data.items);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setItems, setLoading, setError]);

  const addItem = useCallback(async (productId, size, qty) => {
    setLoading(true);
    try {
      const data = await addToCartApi(productId, size, qty);
      setItems(data.items);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setItems, setLoading, setError]);

  return { ...state, refresh, addItem };
}
```

**pages/CartPage.jsx** — UI layer, dumb
```jsx
import { useEffect } from "react";
import { useCart } from "../hooks/useCart.js";

const CartPage = () => {
  const { items, total, loading, refresh } = useCart();

  useEffect(() => { refresh(); }, [refresh]);

  if (loading) return <Loader />;
  return (
    <div>
      {items.map(item => <CartItem key={item._id} item={item} />)}
      <CartSummary total={total} />
    </div>
  );
};
```

### 3.4 Home page

Its own `features/home/` — pulls from multiple places (featured products, categories, later maybe banners from a CMS) and has its own layout, so it doesn't belong inside `products`.

```js
// features/home/services/home.api.js
import axios from "../../../shared/lib/axiosInstance";

export const fetchFeaturedProductsApi = () =>
  axios.get("/products?featured=true&limit=8").then(r => r.data);

export const fetchNewArrivalsApi = () =>
  axios.get("/products?sort=newest&limit=8").then(r => r.data);
```

```js
// features/home/hooks/useHomeData.js
export function useHomeData() {
  const [featured, setFeatured] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const [f, n] = await Promise.all([fetchFeaturedProductsApi(), fetchNewArrivalsApi()]);
    setFeatured(f); setNewArrivals(n);
    setLoading(false);
  }, []);

  return { featured, newArrivals, loading, load };
}
```

Routing (`shared/routes/AppRoutes.jsx`):
```jsx
<Route path="/" element={<HomePage />} />
<Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
<Route path="/admin/*" element={<AdminRoute><AdminLayout /></AdminRoute>} />
```

---

## 4. Suggested build order (frontend)

1. `shared/lib/axiosInstance.js` + `auth` feature (context, hook, login/register) → auth working end-to-end
2. `PrivateRoute` / `AdminRoute` guards
3. `products` feature — listing + detail (public, read-only)
4. `home` feature
5. `cart` feature
6. `orders` feature — checkout, history, payment
7. `admin` feature — products, orders, users
8. Admin dashboard/stats
