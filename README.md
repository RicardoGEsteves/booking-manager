# Bookings Manager

> **(UPDATE)** - with the latest dependencies updates, you will have to do some small config changes.

Bookings Manager is a comprehensive React application designed for internal booking management, featuring an intuitive dashboard and a plethora of functionalities. It's optimized using composition, context, and the compound components pattern to deliver an efficient and scalable solution.

## Overview

The Booking Manager application streamlines the process of managing bookings internally, providing a user-friendly dashboard loaded with robust features. With an emphasis on React's best practices, it leverages composition, context, and compound components to ensure modularity, flexibility, and maintainability.

## Key Features

- **Dashboard:** Access a visually appealing and functional dashboard for managing bookings.
- **Effortless Booking Creation and Management:** Seamlessly create, edit, and cancel bookings with granular control over booking details.

- **Detailed Booking Dashboard:** View a centralized overview of all bookings, including status, attendees, and timestamps.

- **Search and Filter Functionality:** Quickly locate specific bookings using powerful search and filter options.

- **Customizable User Roles and Access Control:** Implement granular access control based on user roles for enhanced data security.

- **Seamless Integration with External APIs:** Seamlessly integrate with external APIs to expand booking capabilities.
- **Composition & Context:** Utilize React's composition and context for scalable and maintainable code.
- **Compound Components Pattern:** Implement modular components for enhanced reusability and flexibility.

## Technical Stack

- **React:** The core JavaScript library for building user interfaces, providing a declarative and component-based approach.
- **JavaScript:** The fundamental language of the application, enabling dynamic and interactive web experiences.
- **React Router:** Handles routing between different application components, ensuring a smooth user experience.
- **Styled Components:** A CSS-in-JS library for creating reusable and maintainable styling across components.
- **PostgreSQL:** The relational database management system powering the application's data storage.
- **Date-fns:** A powerful JavaScript library for manipulating and formatting dates.
- **React Icons:** A collection of open-source React icons for enriching the application's visual design.
- **Vite:** A modern JavaScript build tool that accelerates the development process.
- **React Hook Form:** A library for handling form data and validation within React components.
- **Supabase:** A cloud-based Firebase alternative offering a comprehensive suite of backend services, including authentication, databases, and storage.
- **Tanstack React Query:** A powerful data fetching and caching library for React applications.
- **React Error Boundary:** A tool for preventing errors from reaching the user and providing a graceful error handling mechanism.
- **React Hot Toast:** A lightweight notification library for displaying user-friendly toast messages.
- **Recharts:** A React charting library for creating interactive and data-driven charts.
- **Context API:** A React feature for sharing data between components without the need for prop drilling.
- **Composition:** A design pattern for creating reusable and composable React components.
- **Compound Components:** A pattern for combining multiple components into a higher-order component for enhanced modularity and maintainability.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up the PostgreSQL database and configure Supabase for data management.
5. Start the application with `npm start`.

## Usage

1. Access the application via the provided URL.
2. Explore the dashboard and its various functionalities.
3. Manage bookings, utilize compound components, and leverage the power of context and composition for efficient workflow.

### Important info:

Create a .env file in the root of the project with `VITE_SUPABASE_KEY=YOURKEY`
setup `supabase` database postgres, storage and Authentication, don't forget to add policies on your tables.

## Contributions

Contributions are welcome! Please follow the contribution guidelines outlined in the CONTRIBUTING.md file.

## Conclusion

Bookings Manager stands as a testament to the power of React, composition, context, and compound components in crafting a performant, maintainable, and feature-rich application. It serves as a valuable tool for businesses seeking to streamline their booking processes and enhance overall operational efficiency.

## License

This project is licensed under the [MIT License](LICENSE).
