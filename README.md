# CROB - E-commerce Platform

![CROB](https://www.crob.shop/src/img/topbar_logo.png) <!-- Replace with the actual logo URL if available -->

## Overview

CROB is a sleek and modern e-commerce platform designed to sell posters and digital products. The website is developed using a blend of modern web technologies to offer a seamless and engaging shopping experience, particularly aimed at young buyers. The platform integrates secure payment processing and real-time order tracking to ensure reliability and convenience.

## Live Demo

Check out the live site: [CROB](https://www.crob.shop)

## Tech Stack

- **Frontend**: JavaScript, HTML, Tailwind CSS
- **Backend**: Python Flask
- **Payment Integration**: Razorpay API

## Features

- **User-Friendly Interface**: Designed with Tailwind CSS to create a sleek, modern look that appeals to the younger generation.
- **End-to-End Order Management**: Seamless order placement, buying functionalities, and real-time updates on product deliveries.
- **Secure Payment Gateway**: Integrated Razorpay API for secure and efficient payment processing.
- **Real-Time Status Updates**: Buyers can track the status of their products and purchases in real-time.

## Getting Started

### Prerequisites

- Node.js
- Python 3.x
- Flask
- Razorpay Account for Payment Integration

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nagesh-merva/CROB.git
   cd CROB

2. **Install Dependencies**
- Frontend
     ```bash
     npm install
- Backend
    ```bash
    pip install -r requirements.txt

3. **Environment Setup**
     ```bash
     RAZORPAY_KEY_ID=your_key_id
     RAZORPAY_SECRET_KEY=your_secret_key
4. **Running the Application**
- Frontend
     ```bash
     npm run dev
- Backend
    ```bash
    python app.py
- Access the platform by navigating to http://localhost:3000 on your web browser.

  ## Project Structure
    ```bash
    CROB/
    ├── frontend/         # Frontend source code
    │   ├── public/       # Public assets and HTML
    │   └── src/          # JavaScript, CSS, and Tailwind files
    │
    ├── backend/          # Backend source code
    │   ├── app.py        # Main application file
    │   └── routes/       # API endpoints and routes
    │
    ├── .env              # Environment variables
    ├── package.json      # Frontend dependencies
    ├── requirements.txt  # Backend dependencies
    └── README.md         # Project documentation

**Payment Integration**
- The Razorpay API is integrated for a secure and efficient payment experience. Users can pay for their products using various payment methods such as credit/debit cards, net banking, and more.

**Contributing**
1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch-name
3. Make your changes and commit them: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature-branch-name
5. Submit a pull request.
