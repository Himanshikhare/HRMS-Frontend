# HR Cloud - A Modern HRMS Solution

## Project Overview

HR Cloud is a web-based Human Resource Management System (HRMS) designed to help companies streamline HR operations and improve employee management efficiency. It offers a centralized platform for HR admins and employees to handle key HR tasks like onboarding, attendance tracking, performance reviews, and payroll management.

---

## Features

### For HR Admins:
- Monitor employee attendance and leaves
- Manage payroll and compliance tasks
- Access and update employee records

### For Employees:
- View attendance logs and leave status
- Access payslips and important documents
- Simplified communication with HR

### General:
- Clean and responsive UI
- Modern animations for an engaging experience
- Cross-device compatibility (desktop, tablet, and mobile)

---

##  Pages in the Application

### 1. **Home Page**  
- A hero section introducing HR Cloud  
- Key features with icons or illustrations  
- Optional: Testimonials or use cases

### 2. **Services Page**  
- Detailed list of services offered by HR Cloud  
- Visually engaging layout using cards or tabs  
- Illustrations or icons to enhance usability

### 3. **Contact Page**  
- Contact form (Name, Email, Message)  
- Company contact details (address, phone, email)  
- Social media links and an optional embedded map  

### 4. **About Page**  
- HR Cloud’s mission, vision, and brand values  
- Team information and any press or recognition (optional)

---

## Technology Stack

- **Frontend:** React, Tailwind CSS, JavaScript  
- **Tools:** Vite for fast development  
- **Additional Libraries:** React-Router-dom, axios, popover, Button, label, Input, radio-groups, avatar, react-redux

---

## Folder Structure
hrms-project/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── auth/
|   |   |   |     ├── Login.jsx
|   |   |   |     ├── Signup.jsx
│   │   │   ├── pages/
|   |   |   |     ├── About.jsx
|   |   |   |     ├── Contact.jsx
|   |   |   |     ├── Home.jsx
|   |   |   |     ├── Services.jsx
|   |   |   ├  
│   │   │   ├── shared/
|   |   |   |     ├──Footer.jsx
|   |   |   |     ├──Navbar.jsx  
│   │   |   ├──ui/
|   |   |   |   ├──avatar.jsx
|   |   |   |   ├──button.jsx
|   |   |   |   ├──card.jsx
|   |   |   |   ├──input.jsx
|   |   |   |   ├──label.jsx
|   |   |   |   ├──popover.jsx
|   |   |   |   ├──radio-group.jsx
|   |   |   |   ├──sonner.jsx
│   │   │   ├── Herosection.jsx
│   │   │   
│   │   ├── lib/
|   |   |    ├──utils.js
│   │   │   
│   │   ├── lib/ 
│   │   │    ├──constants.js
│   │   │   
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
|   | 
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   └── README.md

## Prerequisites
To run this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (comes with Node.js)


## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hrms-project/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Tailwind CSS:
   Ensure the `tailwind.config.js` file includes the correct paths to your components and pages:
   ```javascript
   const withShadcn = require('@shadcn/tailwindcss');

   module.exports = withShadcn({
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   });
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

## Usage

1. Open the application in your browser at `http://localhost:5173`.
2. Log in with valid credentials.
3. Navigate through the dashboard, manage employees, and explore available features.
4. Use role-based functionalities based on your user type.

## Customization

To add or modify components:
1. Visit [ui.shadcn.com](https://ui.shadcn.com/) to explore components.
2. Copy the desired component code.
3. Integrate it into the `src/components/` directory and customize as needed.

## Tech Stack
- **Framework**: React.js
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: [ui.shadcn.com](https://ui.shadcn.com/)

## Contributing
Contributions are welcome! Please adhere to the project's coding standards and document any new features you add.
