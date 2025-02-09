# Umurava - Skills Challenges

Umurava's **Skills Challenges** is an innovative EdTech solution designed to help young talents build their portfolios and gain real-world experience through project-based learning. It enables participants to take part in challenges, competitions, and hackathons, fostering skill mastery in high-demand fields.

### Key Features:
- **Admins** can create, edit, and manage challenges.
- **Participants** can join challenges, submit their work, and showcase their skills.
- **Institutions** can integrate the platform to enhance technical education.

Since its launch, the **Skills Challenges Program** has engaged **3,000+ participants** and facilitated **300+ project submissions**. Now, we’re digitizing the experience to scale impact across Africa, aiming to reach **60,000+ users in 10 countries** within the next two years.

This platform is built on **Umurava’s existing infrastructure**, ensuring a seamless and scalable experience for the youth-driven digital economy.

🚀 **Join us in shaping the future of learning and innovation!**

## Getting Started

To run this project from scratch, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Viateur-akimana/umurava

   cd umurava
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Technologies Used
- **Next.js**: A React framework that enables server-side rendering and static site generation for building fast and user-friendly web applications.
- **TypeScript**: A superset of JavaScript that adds static types, enabling better tooling and error checking.
- **Redux Toolkit**: a library built on top of the Redux state management library, designed to simplify and streamline the process of developing Redux applications by providing tools and utilities that significantly reduce boilerplate code, making it easier to write cleaner and more efficient Redux logic.
- **Sentry**: An error tracking and performance monitoring tool that helps developers identify and fix issues in real-time.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development with a focus on customization and responsiveness.

## Folder Structure

The project is organized into several directories, each serving a specific purpose:

- **node_modules**: Contains all the npm packages and dependencies required for the project.
- **public**: Stores static assets like images, fonts, and other files that are served directly to the client.
- **src**: The main source code directory.
  - **app**: Contains the main application components and pages.
  - **components**: Reusable UI components.
    - **forms**: Form-related components.
    - **layout**: Layout components for structuring pages.
    - **shared**: Shared components across different parts of the application.
    - **ui**: UI-specific components like buttons, modals, etc.
  - **fonts**: Custom font files.
  - **hooks**: Custom React hooks.
  - **lib**: Utility libraries and helper functions.
  - **redux**: Redux-related files for state management.
  - **utils**: Utility functions and helpers.
  - **services**: API services and data fetching logic.
  - **styles**: Global and component-specific styles.

- **types**: TypeScript type definitions.
  - **instrumentation.ts**: Instrumentation setup for monitoring and logging.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **.hintrc**: Configuration file for webhint, a linting tool for web projects.
- **eslint.config.mjs**: ESLint configuration file for JavaScript/TypeScript linting.
- **next-env.d.ts**: TypeScript definitions for Next.js environment.
- **next.config.ts**: Next.js configuration file.
- **package-lock.json**: Automatically generated file for npm to track exact package versions.
- **package.json**: Contains project metadata and dependencies.

## Core Features for Fronted Development

- Build a responsible and accessible frontend based on the provided design specifications

#### Responsive Design Showcase
![Fullscreen View](/public/fullscreen.png)
*Desktop View*

![Tablet View](/public/tablet.png)
*Tablet View*

![Mobile View](/public/phone.png)
*Mobile View*

## Flow of the Application Usage

Firstly, you access the page at "https://umurava-3m77.vercel.app/" as the homepage.

1. **Challenges Page**: `/web/pages/challenges` - This is to see all challenges as an unauthorized user.
2. **Education Page**: `/web/pages/education` - This highlights our educational partners that are using Umurava and our offerings.
3. **About Us Page**: `/web/pages/about` - This provides information about us.

### General Flow

1. **Login**: `/login` - For logging in.
2. **Signup**: `/signup` - For registering.

#### User Types
- **Admin**
  - **Credentials**:
    - Email: `user586@example.com`
    - Password: `password586`
  - After signing in, the admin is redirected to the dashboard.
  
  **Admin Part**:
  a) `/admin` - Displays stats of the whole system and recent challenges.
  
  b) `/admin/challenges` - Lists all challenges, and an admin can view a challenge.
  
  c) `/admin/challenges/67a336c56a075651f0ce0a96` - View a single selected challenge with all info about the challenge and its participants. An admin can delete or edit a challenge here.
  
  d) `/admin/challenges/67a336c56a075651f0ce0a96/edit` - Edit the selected challenge.
  
  e) `/admin/challenges/add` - Create a new challenge.
  
  f) Community tab on the sidebar to join our community on WhatsApp groups.

- **Talent**
  - After signing in as a talent:
  
  a) `/talent` - Dashboard with stats and recent challenges.
  
  b) `/talent/challenges` - Lists all challenges, and you can view a single challenge.
  
  c) `/talent/challenges/67a20af5a1a7bcbcd8988c6a` - View a single challenge with all details and specifications. A talent may start that challenge and become a participant immediately after clicking the start button. Later, if you've started that challenge, you may be able to submit your work.
  
  f) Community tab on the sidebar to join our community on WhatsApp groups.

## Credits

1. **Viateur AKIMANA**: [GitHub](https://github.com/Viateur-akimana) | [LinkedIn](https://www.linkedin.com/in/akimana-viateur-704402262/)
2. **Elissa DUSABE IRADUKUNDA**: [GitHub](https://github.com/Elissa-DI) | [LinkedIn](https://www.linkedin.com/in/elissa-dusabe-415161256/)



The application is successfully deployed on Vercel and can be accessed at [https://umurava-dk8q-k8b11h84b-viateurs-projects.vercel.app/](https://umurava-dk8q-k8b11h84b-viateurs-projects.vercel.app/)
