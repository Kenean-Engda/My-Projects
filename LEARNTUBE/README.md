# LearnTube 🎓

**LearnTube** is a curated, interactive web-based learning platform built with React and JavaScript. It transforms YouTube video tutorials into structured, organized learning paths across web development topics (HTML, CSS, JavaScript, and React).

Users can explore beginner to advanced level courses, track their watch progress in real time, search for additional YouTube content using the YouTube Data API v3, and resume videos from where they left off.

---

## ✨ Features

- **🎯 Curated Learning Paths:** Handpicked, structured courses categorized by topic (_HTML, CSS, JavaScript, React JS_) and skill level (_Beginner, Intermediate, Advanced_).
- **🔒 Privacy-Focused Player:** Utilizes YouTube's Privacy-Enhanced Mode (`youtube-nocookie.com`) to embed videos without storing tracking cookies on the user's browser.
- **📊 Real-Time Progress Tracking:** Tracks video watch percentage against ISO duration standards and persists user progress locally using `localStorage`.
- **🎬 Integrated Video Player:** Embedded, distraction-free playback with automatic playback restoration and position saving.
- **🔍 YouTube API Integration:** Built-in search engine allowing users to discover and stream external web development tutorials directly within the platform.
- **📈 Personal Dashboard:** Dedicated progress hub split into **In Progress** and **Completed** courses.
- **⚡ Fully Responsive:** Seamless user experience across mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework:** React 18+ (Vite / React Router v6)
- **Styling:** Modern CSS3 / Tailwind CSS (Flexbox, Grid, Utility classes)
- **State & Routing:** React Router v6 (`<Outlet />`, `NavLink`, dynamic parameters)
- **APIs:** YouTube Data API v3 & YouTube Interactive IFrame API
- **Storage:** Web Storage API (`localStorage`)

---

## 📁 Project Structure

- **LEARNTUBE/**
  - **src/**
    - **components/**
      - **cards/**
        - `CourseCard.jsx`
        - `CourseStatusCard.jsx`
        - `SearchVideoCard.jsx`
        - `TopicCard.jsx`
      - **common/**
        - `Footer.jsx`
        - `Navbar.jsx`
      - **layout/**
        - `RootLayout.jsx`
    - **data/**
      - `coursesData.js`
    - **pages/**
      - `CatalogPage.jsx`
      - `CoursesPage.jsx`
      - `DashboardPage.jsx`
      - `HomePage.jsx`
      - `PlayerPage.jsx`
      - `SearchPage.jsx`
    - **utils/**
      - `timeUtils.js`
    - `App.jsx`
    - `index.css`
    - `main.jsx`
  - `.env`
  - `.env.example`
  - `.gitignore`
  - `.oxlintrc.json`
  - `index.html`
  - `package-lock.json`
  - `package.json`
  - `README.md`
  - `vite.config.js`

---

## 🚀 Getting Started

Follow these steps to run **LearnTube** on your local environment:

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn**
- **YouTube Data API v3 Key** (Get your API Key from Google Cloud Console)

### Installation

1. **Clone the repository:**
   git clone https://github.com/ISHUBTEAM/Amanuel-Kenean-.git
   cd Amanuel-Kenean-

2. **Install dependencies:**
   npm install

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your YouTube API Key:
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here

4. **Start the local development server:**
   npm run dev

5. **Open in Browser:**
   Navigate to http://localhost:5173 in your web browser.

---

## 👥 Authors & Contributors

- **Amanuel** - _Developer_ - [GitHub](https://github.com/AmanuCodes)
- **Kenean** - _Developer_ - [GitHub](https://github.com/Kenean-Engda)

---

## 📜 Available Scripts

In the project directory, you can run:

- **npm run dev** – Runs the app in development mode with HMR.
- **npm run build** – Builds the production-ready application inside the `dist` folder.
- **npm run preview** – Locally previews the production build.
