# Thesis Frontend

A modern frontend application built with **Next.js 16**, **React**, **TypeScript**, and **Shadcn UI** for a microservices-based e-commerce system.

The application communicates exclusively with an API Gateway and provides authentication, product management, order management, and user management with role-based authorization.

---

# Features

## Authentication

* User registration
* User login
* JWT-based authentication
* Automatic Authorization header injection using Axios interceptors
* Role-based access control (USER / ADMIN)

## Products

* Public product listing
* Product details
* Create product (Admin)
* Update product (Admin)
* Delete product (Admin)

## Orders

### User

* Create order
* View personal orders
* View order details

### Administrator

* View all orders
* View order details
* Update order quantity

## Users (Administrator)

* View all users
* View user details
* Update user information
* Delete user
* View a specific user's orders

---

# Tech Stack

## Framework

* Next.js 16 (App Router)

## Language

* TypeScript

## UI

* Shadcn UI
* Tailwind CSS
* Lucide React

## State Management

* TanStack React Query

## Forms & Validation

* React Hook Form
* Zod

## HTTP Client

* Axios

## Notifications

* Sonner

## Containerization

* Docker
* Docker Compose

---

# Project Structure

```text
src/
├── app/
├── components/
│   ├── forms/
│   ├── guards/
│   ├── layout/
│   ├── modals/
│   ├── shared/
│   └── ui/
├── constants/
├── hooks/
├── lib/
├── providers/
├── schemas/
├── services/
└── types/
```

---

# Authentication

The application uses JWT authentication.

After a successful login:

1. The backend returns an access token.
2. The access token is stored in Local Storage.
3. Axios automatically attaches the token to authenticated requests.
4. User role is determined by decoding the JWT payload.

Role-based layouts protect authenticated and administrator pages.

---

# API Communication

The frontend communicates only with the API Gateway.

```
Frontend
      │
      ▼
API Gateway
      │
 ┌────┴────┐
 │         │
Users   Products
 │         │
 └────┬────┘
      │
   Orders
```

No requests are sent directly to individual microservices.

---

# Environment Variables

Create a `.env.local` file for local development.

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
pnpm install
```

Run the development server

```bash
pnpm dev
```

The application will be available at:

```
http://localhost:3100
```

---

# Production Build

Build the application

```bash
pnpm build
```

Start the production server

```bash
pnpm start
```

---

# Docker

Build the Docker image

```bash
docker compose build
```

Run the application

```bash
docker compose up
```

The frontend will be available at

```
http://localhost:3100
```

---

# Implemented Features

* JWT Authentication
* Role-based Authorization
* Protected Routes
* Public Product Catalog
* Product CRUD
* Order Management
* User Management
* Pagination
* Form Validation
* Loading Skeletons
* Error States
* Empty States
* Toast Notifications
* Responsive Design
* Dockerized Deployment

---

# Development Practices

* Feature-based architecture
* Reusable components
* Type-safe API models
* Centralized Axios configuration
* Schema-based validation
* React Query caching and mutations
* Modular service layer
* Production-ready Docker configuration

---

# Future Improvements

* Refresh token authentication
* HTTP-only cookie authentication
* Image upload support
* Search and filtering
* Product categories
* Unit and integration tests
* GitHub Actions CI/CD
* Internationalization (i18n)

---

# License

This project was developed as part of a university thesis for educational purposes.
