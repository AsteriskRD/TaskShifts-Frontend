# TaskShifts

A modern web application built with Next.js, designed to connect freelancers with gig opportunities.

## 🚀 Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Language:** JavaScript
-   **Code Quality:** ESLint
-   **Build Tool:** Turbopack (for faster development)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v18.17 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## 🛠️ Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## 🏃‍♂️ Running the Application

### Development Mode

Start the development server with Turbopack (faster builds):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the application for production:

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## 📁 Project Structure

```
TaskShifts/
├── src/
│   ├── app/              # App Router pages and layouts
│   │   ├── layout.js     # Root layout
│   │   ├── page.js       # Home page
│   │   └── ...
│   ├── components/       # Reusable React components
│   ├── styles/           # Global styles and Tailwind configs
│   └── lib/              # Utility functions and helpers
├── public/               # Static assets (images, fonts, etc.)
├── .eslintrc.json        # ESLint configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies
```

## 🧹 Code Quality

This project uses ESLint to maintain code quality. Run the linter with:

npm run lint

# or

yarn lint

# or

pnpm lint

````

## 🎨 Styling

Tailwind CSS is configured for utility-first styling. You can:

-   Add global styles in `src/app/globals.css`
-   Use Tailwind utility classes directly in your components

## 📝 Available Scripts

-   `npm run dev` - Start development server with Turbopack
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint for code quality checks

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
````

## 📚 Learn More

-   [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind utility classes and customization
-   [Next.js App Router](https://nextjs.org/docs/app) - Learn about the App Router
-   [Turbopack](https://nextjs.org/docs/architecture/turbopack) - Learn about the faster bundler
