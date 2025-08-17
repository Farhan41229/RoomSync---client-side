# 🏠 RoomSync - Roommate Finding Platform

![RoomSync Banner](https://i.ibb.co/kgd2hxd5/undraw-developer-avatar-f6ac.png)

## 📖 Description

**RoomSync** is a modern, full-stack roommate finding platform designed to help students and young professionals in NYC find affordable living options and compatible roommates. The platform provides an intuitive interface for browsing listings, creating new room postings, and connecting with potential roommates based on lifestyle preferences and budget constraints.

**Live Project:** [https://roomsync-229.web.app/](https://roomsync-229.web.app/)

## ✨ Core Features

- 🔐 **User Authentication** - Secure login/registration with Firebase
- 🏠 **Room Listings** - Browse and search available rooms
- ➕ **Add Listings** - Create detailed room postings
- 👤 **User Profiles** - Manage personal information and preferences
- 🔍 **Smart Filtering** - Find rooms by location, budget, and lifestyle
- 📱 **Responsive Design** - Optimized for all devices
- 💬 **Contact System** - Secure way to connect with roommates
- 🎨 **Modern UI/UX** - Beautiful animations and smooth interactions

## 🛠️ Technologies Used

### Frontend
- **React 19** - Latest React with modern hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Router 7** - Client-side routing

### Backend & Services
- **Firebase Authentication** - User management and security
- **MongoDB** - NoSQL database for data persistence
- **Express.js** - Node.js web framework
- **Vercel** - Deployment and hosting platform

### Additional Libraries
- **AOS (Animate On Scroll)** - Smooth scroll animations
- **Swiper** - Touch slider and carousel
- **SweetAlert2** - Beautiful alert dialogs
- **React Icons** - Comprehensive icon library
- **React Simple Typewriter** - Typing animation effects

## 📦 Dependencies

### Core Dependencies
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router": "^7.6.2",
  "firebase": "^11.9.0",
  "tailwindcss": "^4.1.8",
  "daisyui": "^5.0.43"
}
```

### Development Dependencies
```json
{
  "vite": "^6.3.5",
  "@vitejs/plugin-react": "^4.4.1",
  "eslint": "^9.25.0"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd RoomSync-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation component
│   ├── Banner.jsx      # Hero section
│   ├── Listing.jsx     # Room listing card
│   ├── AddListing.jsx  # Create listing form
│   └── ...
├── layouts/            # Page layout components
│   ├── HomeLayout.jsx  # Home page layout
│   ├── AuthLayout.jsx  # Authentication layout
│   └── ListingsLayout.jsx # Listings page layout
├── provider/           # Context providers
│   └── AuthProvider.jsx # Authentication context
├── routes/             # Routing configuration
│   └── Route.jsx       # Main router setup
├── firebase/           # Firebase configuration
│   └── firebase.init.js
└── assets/             # Static assets and images
```

## 🌐 Live Demo & Resources

- **Live Application:** [https://roomsync-229.web.app/](https://roomsync-229.web.app/)
- **Backend API:** [https://room-sync-server-one.vercel.app/](https://room-sync-server-one.vercel.app/)
- **GitHub Repository:** [Your Repository Link]

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint



## 👨‍💻 Author

**Your Name**

## 🙏 Acknowledgments

- Firebase for authentication services
- Tailwind CSS for the amazing utility-first framework
- DaisyUI for beautiful component library
- MongoDB for database services
- Vercel for hosting and deployment

---

⭐ **Star this repository if you found it helpful!**
