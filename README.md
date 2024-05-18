# FireAlert

FireAlert is a mobile application designed to quickly report fires using geolocation and visualize reported fires on an interactive map.

## Table of Contents
- [Project Objective](#project-objective)
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Project Objective
Develop a mobile application that allows users to quickly report fires using geolocation and visualize the reported fires on an interactive map.

## Features
- **Home Screen with Interactive Flame:**
  - Display a large flame icon on opening the app.
  - Request user’s geolocation when the flame is clicked.
  
- **Geolocation:**
  - Retrieve user’s GPS coordinates upon permission.
  - Display coordinates for verification.
  
- **Report and Send Message to Emergency Services:**
  - A button to "Send Alert" to report a fire.
  - Send a pre-filled message to emergency services with GPS coordinates and a standard fire alert message.
  - Visual confirmation of alert sent.

- **Interactive Map of Reported Fires:**
  - Display an interactive map with markers for reported fires.
  - Markers include details such as the date and time of the report.
  - Automatically remove fires from the map after a set period (e.g., 48 hours).

## Technologies

### Front-end:
- **Framework:** React Native for cross-platform mobile application (iOS and Android).
- **Mapping API:** Google Maps API, Mapbox, or Leaflet for the interactive map.

### Back-end:
- **API:** Node.js with Express to handle message sending requests.
- **Geolocation Service:** Google Maps API to obtain GPS coordinates.
- **Database:** Firebase for real-time storage and updates of fire reports.

## Prerequisites
- Node.js and npm installed.
- React Native environment set up.
- Firebase account and project setup.

## Installation

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/edecadt/EpitechJAM_3
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Start the app on the phone**
   -install Expo Go

   *Android*:
     -Scan the QR code with Expo Go /
   *iOS*:
     -Scan the QR code with Camera app

Thank you for using FireAlert! We hope this application helps in reporting and managing fire incidents effectively.
