# My WebApp

## Project Overview
My WebApp is a modern web application built with TypeScript and Vite. It features a modular architecture, reusable components, and interactive graphical elements. The project leverages Three.js for 3D rendering and includes a variety of assets such as images, fonts, and 3D models to create a visually appealing user experience.

<img width="1680" height="938" alt="Captura de ecrã 2026-03-02, às 20 05 09" src="https://github.com/user-attachments/assets/b42e7cf3-40db-4538-a10c-3a646049b877" />


### Key Features
- Modular and reusable components for scalability.
- Integration with Three.js for 3D graphics.
- Organized folder structure for maintainability.
- Custom fonts and assets for a unique design.

## Installation Guide

Follow these steps to set up and run the project locally:

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
- **Package Manager**: npm (comes with Node.js) or yarn.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the Application**:
   Open your browser and navigate to `http://localhost:5173` (default Vite port).

5. **Build for Production**:
   To create an optimized production build, run:
   ```bash
   npm run build
   # or
   yarn build
   ```

6. **Preview the Production Build**:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Libraries and Tools Used

### Core Libraries
- **TypeScript**: For static typing and improved developer experience.
- **Vite**: A fast build tool for modern web applications.
- **Three.js**: For creating and displaying 3D graphics in the browser.

### Additional Libraries
- **React**: For building user interfaces with a component-based architecture.
- **React-DOM**: For rendering React components in the browser.
- **@react-three/fiber**: A React renderer for Three.js, enabling declarative 3D scenes.
- **@react-three/drei**: A collection of helpers for working with Three.js and React.
- **motion**: For animations and transitions.
- **tailwindcss**: A utility-first CSS framework for styling.
- **@tailwindcss/vite**: Integration of Tailwind CSS with Vite.

### Development Tools
- **ESLint**: For maintaining code quality and consistency.
- **Prettier**: For code formatting.
- **@vitejs/plugin-react**: For integrating React with Vite.

### Assets and Styling
- **CSS**: For styling the application.
- **Custom Fonts**: Located in `src/assets/fonts/`.
- **Static Assets**: Images and 3D models located in `public/assets/`.

### Build and Configuration
- **tsconfig.json**: TypeScript configuration for the project.
- **vite.config.ts**: Vite configuration for development and production builds.

## Folder Structure

- `src/`: Contains the source code, including components, features, layouts, and pages.
- `public/`: Contains static assets such as images and 3D models.
- `tsconfig.json`: TypeScript configuration.
- `vite.config.ts`: Vite configuration.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
