# 🛒 Amazon Clone

A front-end clone of Amazon's e-commerce shopping experience built with **vanilla HTML, CSS, and JavaScript**. Browse products, manage your cart, choose delivery options, and view order summaries — all with a responsive, Amazon-inspired UI.

---

## ✨ Features

- **Product Listing** — Browse a grid of products with images, ratings, prices, and quantity selectors.
- **Add to Cart** — Add products to your cart with visual "Added" confirmation feedback.
- **Cart Persistence** — Cart data is saved to `localStorage`, so it persists across page refreshes.
- **Checkout Page** — Review cart items, see delivery dates, update quantities, and delete items.
- **Delivery Options** — Choose from multiple shipping speeds (Free, $4.99, $9.99) with calculated delivery dates powered by [Day.js](https://day.js.org/).
- **Payment Summary** — Real-time price breakdown including item costs, shipping, and order total.
- **Orders Page** — View placed orders and track deliveries.
- **Responsive Design** — Adapts to desktop and mobile screen sizes with separate logo assets.

---

## 📁 Project Structure

```
amazon/
├── amazon.html              # Main product listing page
├── checkout.html             # Cart / checkout page
├── orders.html               # Orders history page
├── tracking.html             # Order tracking page
│
├── data/
│   ├── cart.js               # Cart state management (add, remove, update, localStorage)
│   ├── products.js           # Product catalog data
│   └── deliveryOption.js     # Delivery option definitions
│
├── scripts/
│   ├── amazon.js             # Product grid rendering & add-to-cart logic
│   ├── checkout.js           # Checkout page initialization
│   ├── checkout/
│   │   ├── orderSummary.js   # Renders cart items with delivery options
│   │   └── paymentSummary.js # Renders price breakdown & totals
│   └── utils/
│       └── money.js          # Currency formatting utility
│
├── styles/
│   ├── shared/               # Global styles (general.css, amazon-header.css)
│   └── pages/                # Page-specific styles (amazon, checkout, orders, tracking)
│
├── images/
│   ├── products/             # Product images
│   ├── ratings/              # Star rating images
│   ├── icons/                # UI icons (cart, search, checkmark, etc.)
│   └── *.png                 # Logos and misc assets
│
└── backend/
    └── products.json         # Product data (JSON format)
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local development server (recommended) — e.g. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code

### Running the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/amazon-clone.git
   cd amazon-clone
   ```

2. **Open with Live Server**  
   Right-click `amazon.html` → **Open with Live Server**  
   _(or simply open `amazon.html` in your browser)_

3. **Browse & Shop!**
   - Add products to cart from the main page
   - Click the cart icon to go to checkout
   - Choose delivery options and review your order

---

## 🛠️ Tech Stack

| Technology                   | Purpose                                  |
| ---------------------------- | ---------------------------------------- |
| **HTML5**                    | Page structure & semantic markup         |
| **CSS3**                     | Styling, responsive design, grid layouts |
| **JavaScript (ES6 Modules)** | Application logic, DOM manipulation      |
| **Day.js** (via CDN)         | Delivery date calculations               |
| **localStorage**             | Client-side cart data persistence        |
| **Google Fonts (Roboto)**    | Typography                               |

---

## 📸 Pages Overview

| Page            | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `amazon.html`   | Main storefront — product grid with add-to-cart functionality |
| `checkout.html` | Cart review — item details, delivery options, payment summary |
| `orders.html`   | Order history — view past orders                              |
| `tracking.html` | Delivery tracking — track order shipments                     |

---

## 📝 Key Modules

- **`data/cart.js`** — Manages cart state: add/remove items, update delivery options, sync with `localStorage`.
- **`data/products.js`** — Contains the full product catalog with names, images, prices, and ratings.
- **`data/deliveryOption.js`** — Defines available shipping options with prices and delivery timeframes.
- **`scripts/amazon.js`** — Dynamically renders the product grid and handles add-to-cart interactions.
- **`scripts/checkout/orderSummary.js`** — Builds the checkout order summary with delivery date calculations.
- **`scripts/checkout/paymentSummary.js`** — Calculates and displays the payment breakdown.
- **`scripts/utils/money.js`** — Utility for formatting prices from cents to dollars.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is for **educational purposes only** and is not affiliated with Amazon.

---

> Built with ❤️ as a JavaScript learning project.
