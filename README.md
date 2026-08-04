# Playwright SauceDemo Automation Framework

A scalable end-to-end automation testing framework built with **Playwright** and **TypeScript** following industry-standard design patterns such as **Page Object Model (POM)** and **Custom Fixtures**.

The project is being developed feature by feature to simulate a real-world QA automation framework.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Playwright Fixtures
- Dotenv
- Git & GitHub

---

## 📂 Project Structure

```
playwright-saucedemo-framework/
│
├── docs/
│   └── TestCases/
│
├── src/
│   ├── config/
│   ├── data/
│   ├── fixtures/
│   ├── pages/
│   ├── utils/
│   ├── constants/
│   ├── helpers/
│   └── types/
│
├── tests/
│   └── login/
│       ├── positive/
│       └── negative/
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# ✅ Completed Features

## Framework

- [x] Playwright with TypeScript
- [x] Environment Configuration (.env)
- [x] Base Page
- [x] Custom Playwright Fixtures
- [x] Page Object Model
- [x] Organized Project Structure

---

## Login Module

### Positive Scenarios

- [x] Valid Login

### Negative Scenarios

- [x] Invalid Username
- [x] Invalid Password
- [x] Invalid Username & Password
- [x] Empty Username
- [x] Empty Password
- [x] Empty Username & Password
- [x] Locked Out User

### UI Validation

- [x] Verify Password Field is Masked
- [x] Verify Login Page Title
- [x] Verify Login Logo

---

# 🚧 In Progress

## Inventory Module

- [ ] Verify Inventory Page
- [ ] Verify Product List
- [ ] Verify Product Prices
- [ ] Verify Product Names
- [ ] Product Sorting
- [ ] Add Product
- [ ] Remove Product
- [ ] Cart Badge Validation

---

# 📅 Planned Features

## Cart Module

- [ ] Add to Cart
- [ ] Remove from Cart
- [ ] Continue Shopping
- [ ] Cart Validation

---

## Checkout Module

- [ ] Checkout Information
- [ ] Checkout Overview
- [ ] Order Confirmation
- [ ] Checkout Validation

---

## Future Enhancements

- [ ] Data-Driven Testing
- [ ] API Testing
- [ ] Cross Browser Execution
- [ ] Parallel Execution
- [ ] Allure Reporting
- [ ] Jenkins CI/CD
- [ ] GitHub Actions
- [ ] Retry Mechanism
- [ ] Docker Support

---

# ▶️ Getting Started

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/login
```

Open Playwright Report

```bash
npx playwright show-report
```

---

# 📊 Current Progress

| Module | Status |
|---------|--------|
| Framework | ✅ Completed |
| Login | ✅ Completed |
| Inventory | ✅ Completed |
| Cart | ✅ Completed |
| Checkout | 🚧 In Progress |
| Reporting | ⏳ Planned |
| CI/CD | ⏳ Planned |

---

## 📌 Notes

This project is actively being developed. New modules, framework enhancements, and CI/CD integrations will be added incrementally while following clean code and scalable automation practices.