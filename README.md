# Next.js Blog Platform

A simple blog platform built with Next.js, authentication, and MongoDB.

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.



## 🧠 Features

* ✅ **SSR (Server-Side Rendering)** – Pages are rendered on the server at request time for better SEO and faster initial load
* ✅ **SGR (Static Generation Rendering)** – Blog listings are statically generated at build time for optimized performance
* ✅ **CSR (Client-Side Rendering)** – Interactive components and dynamic updates rendered on the client
* ✅ **Server Actions** – Secure server-side logic using API routes and server functions
* ✅ **Authentication (NextAuth.js)**:
   * 🔐 Google Login
   * 🔐 GitHub Login
   * 🔐 Credentials Login (Email & Password)
* ✅ **Blog System**:
   * 📰 View all blogs (public access)
   * ✍️ Create blog posts (after login)
   * ❌ Delete blog posts (only by the author)
* ✅ **Visitor Counter**:
   * 👁️‍🗨️ Shows number of website visitors in the **footer** (live or cumulative)

## 📦 Tech Stack

* **Next.js**
* **React**
* **NextAuth.js**
* **MongoDB**
* **Tailwind CSS**
* **TypeScript**



1. **Set up environment variables**
   
   Create a `.env` file:
   ```env
   DATABASE_URL="your-mongodb-connection-string"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   BACKEND_URL="your backend url"
   ```


2. **Open [https://blogiz-one.vercel.app/](https://blogiz-one.vercel.app/)**

## 🔗 Live Demo

🌐 Visit Live Site

## 🙌 Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 📞 Contact

📧 Email: talat1.web@gmail.com

---

⭐ Star this repo if you found it helpful!
