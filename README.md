# 🌤️ Weather Forecasting Site – Real-Time Updates

<p align="center">
<img src="https://i.postimg.cc/Njh3LmHH/image.png" width=900>
</p>

This weather forecasting site provides real-time weather updates, 5-day forecasts, and detailed climate data for locations around the world. Users can search for any city and receive accurate and up-to-date weather metrics in a clean, responsive interface.

> **This was a personal project built to enhance skills in frontend development, backend integration, working with third-party APIs, and full-stack architecture using Next.js and Node.js.**

---

## 🔍 Features

- 🔎 **City Search** – Search weather by city name
- 🌡️ **Real-Time Weather Info** – Temperature, conditions, humidity, pressure, wind speed, visibility, and cloudiness
- 📅 **5-Day Forecast** – Shows daily forecasts with temperature and conditions
- 🌫️ **Weather Alerts** – Displays any relevant severe weather alerts if available
- ☁️ **Animated UI** – Smooth visual interface with Tailwind CSS animations
- 📱 **Responsive Design** – Fully responsive layout for desktop, tablet, and mobile
- 🔐 **Backend API Integration** – Secured backend calls to OpenWeather API using a Node server

---

## 🧰 Tech Stack

| Layer        | Technology       |
|--------------|------------------|
| Frontend     | HTML, Tailwind CSS, JavaScript |
| Backend      | Node.js, Express |
| Full-stack Framework | Next.js (for future expansion or integration) |
| API Provider | OpenWeather API  |

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### 🔑 1. Get an OpenWeather API Key
1. Visit [https://home.openweathermap.org/](https://home.openweathermap.org/)
2. Create an account (or sign in if you already have one)
3. Go to the **API Keys** tab
4. Copy your default API key (or generate a new one)

### 📦 2. Clone the Repository

git clone https://github.com/your-username/weather-app.git

### ⚙️ 3. Replace .env file
In the .env file in the root directory of the project add your OpenWeather API key:

### 📥 4. Install Dependencies
Install backend dependencies using:

> npm install

### 🖥️ 5. Start the Server

> npm start

Once started, the backend will run on:

> http://localhost:3000

### 🌐 6. Open the Frontend
To view the UI:

Open index.html in your browser via Live Server (recommended), or
Just simply go to the url:

> http://localhost:3000/ (or relevant port)

### ⚠️ Note
Please do not host this project as-is without securing the backend.

The API key stored in the .env file can be exposed if the backend is not properly protected or if the project is deployed carelessly. This repository was built for educational purposes and local use only.

### 📬 Contributions
Feel free to fork the project and contribute improvements, UI enhancements, or API expansions!

