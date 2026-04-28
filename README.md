# 💱 Currency Converter — React Project

A real-time currency converter built with React and Vite. Enter an amount, select your source and target currencies, and instantly see the converted value. Built as a hands-on learning project to practice core React concepts.

![Currency Converter](./src/assets/background.jpg)

---

## Features

- Supports 150+ world currencies via live API
- Swap currencies with one click
- Real-time conversion on submit
- Beautiful glassmorphism UI with Tailwind CSS
- Reusable components and custom hooks

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool and dev server |
| Tailwind CSS | Styling |
| JavaScript (ES6+) | Logic |
| [Fawaz Ahmed Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/) | Live exchange rate data |

---

## Project Structure

```
currencyConverter/
├── src/
│   ├── assets/
│   │   └── background.jpg
│   ├── components/
│   │   └── Input.jsx          # Reusable input component
│   ├── hooks/
│   │   └── useCurrencyInfo.js # Custom hook for fetching rates
│   ├── App.jsx                # Main app component
│   ├── App.css
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

---

##  How It Works

1. User enters an amount in the **From** field
2. User selects source and target currencies from dropdowns
3. On clicking **Convert**, the app multiplies the amount by the exchange rate fetched from the API
4. The **Swap** button flips the from/to currencies and their amounts instantly

---

## Key Components

### `useCurrencyInfo` (Custom Hook)
Fetches live exchange rate data from the API whenever the base currency changes. Uses `useEffect` with a dependency array so it re-fetches automatically when the currency selection updates.

### `Input` (Reusable Component)
A controlled input component that accepts:
- `amount` — the number value
- `currencyOptions` — list of all available currencies
- `onAmountChange` — callback to update amount in parent
- `onCurrencyChange` — callback to update selected currency in parent
- `selectCurrency` — currently selected currency
- `amountDisabled` — disables input for the result field

---

## 🧠 What I Learned Building This

### React Fundamentals
- **Components** — breaking UI into small, reusable pieces (`Input`, `App`)
- **Props** — passing data from parent to child components
- **State (`useState`)** — managing `amount`, `from`, `to`, and `convertAmount` as reactive state values
- **Controlled components** — keeping form inputs in sync with React state

### React Hooks
- **`useState`** — storing and updating values that trigger UI re-renders
- **`useEffect`** — running the API fetch whenever the base currency changes (dependency array)
- **`useCallback`** — memoizing the `passwordGenerator` function to prevent unnecessary re-creation on every render
- **Custom Hook (`useCurrencyInfo`)** — extracting fetch logic into a reusable `use*` function that any component can call

### JavaScript Concepts
- **Array destructuring** — `const [value, setter] = useState()` unpacks the array returned by React
- **`Object.keys()`** — extracting currency names from the API response object
- **Template literals** — building the API URL dynamically with `${currency}`
- **`.then()` chaining** — handling the two-step fetch → JSON parse → setState flow
- **Arrow functions as callbacks** — passing `(currency) => setFrom(currency)` as props
- **`prev => !prev` pattern** — safely toggling boolean state using the functional updater form

### State Management Patterns
- **Lifting state up** — moving shared state to the parent (`App.jsx`) so multiple components can read and update it
- **Functional state updates** — using `prev => prev + 1` instead of `count + 1` to avoid stale state bugs
- **Snapshot vs latest state** — understanding that `count` inside a function is frozen at render time

### Prop Passing
- Passing data down (parent → child): `amount={amount}`
- Passing functions down (child calls parent's logic): `onAmountChange={(amount) => setAmount(amount)}`
- `children` prop — rendering content between component tags

### Custom Hooks
- A custom hook is just a function starting with `use` that can contain `useState` and `useEffect`
- `return data` from a hook works exactly like returning from any normal function
- Exporting with `export default` and importing where needed — same as components

### Tooling & Project Setup
- Setting up a Vite + React project
- Using Tailwind CSS utility classes for rapid UI building
- Importing images in React/Vite (must `import` the file, cannot use raw string paths)
- Git workflow — initializing a repo, staging specific folders, committing, and pushing to GitHub

---

## 🏃 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/react-learning.git

# Navigate to the project
cd currencyConverter

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 🌐 API Used

[Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api) — free, no API key required.

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

---

## 👨‍💻 Author

**Sakshyam Dhakal** — Learning React one project at a time 🚀
