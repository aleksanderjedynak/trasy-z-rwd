
# Web Application using React and React Router DOM

This simple web application demonstrates the use of React and `react-router-dom` to manage routes efficiently using `useRoutes()`. The routes configuration is defined in the `routeConfig` variable for easy management. Additionally, the `PeopleLayout` component utilizes the `react-media` library to dynamically render components based on screen width.

## Features
- **React Router DOM**: Efficient route management with `useRoutes()`.
- **Responsive Design**: The `PeopleLayout` component uses `react-media` for screen-width-based component rendering.
- **Styling**: Utilizes **Bulma CSS framework** for styling with additional custom CSS.

---

## Project Structure

```
src/
├── App.tsx
├── AppRoute.tsx
├── assets
│    └── data.json
├── components
│    ├── Footer.tsx
│    ├── People.tsx
│    ├── PeopleLayout.tsx
│    ├── PeopleList.tsx
│    └── PersonDetails.tsx
├── main.tsx
├── pages
│    ├── Dashboard.tsx
│    ├── DashboardMobile.tsx
│    └── NotFound.tsx
├── version.ts
└── vite-env.d.ts
```

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (version >= 20)
- Yarn or npm (package manager)

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:aleksanderjedynak/trasy-z-rwd.git
   cd trasy-z-rwd
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## Scripts

- **Development**: Start the development server:
  ```bash
  npm run dev
  ```
---

## Code Example

### `AppRoute.js`
```javascript
  const routeConfig = [
  {
    path: '/',
    element: <PeopleLayout />,
    children: [
      { index: true, element: <People /> },
      { path: 'people/:id', element: <PersonDetails /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
```

---

## Dependencies

### Main Dependencies
- **React** (`^18.3.1`)
- **React Router DOM** (`^7.1.1`)
- **React Media** (`^1.10.0`)
- **Bulma** (`^1.0.3`)

### Dev Dependencies
- **Vite** (Fast development server and build tool)
- **TypeScript** (Static type checking)
- **ESLint** & **Prettier** (Code quality and formatting)

---

## Deployment
Deploy the application using [Vercel](https://vercel.com):
```bash
npm run deploy
```

---

## Author
**Aleksander Jedynak**  
📧 Email: [aleksander.jedynak@gmail.com](mailto:aleksander.jedynak@gmail.com)
