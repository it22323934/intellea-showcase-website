# Waste Zero - Waste Management System

![Waste Zero Logo](https://via.placeholder.com/150x50?text=Waste+Zero)

## 📋 Overview

Waste Zero is a comprehensive waste management system designed to streamline the collection, tracking, and analysis of waste disposal processes. The platform connects waste generators, collection services, and administrators in an efficient ecosystem that promotes sustainable waste management practices.

The dashboard provides real-time analytics on waste collection requests, distribution across districts, category management, and operational metrics to help administrators make informed decisions.

## 🚀 Features

- **Interactive Dashboard** - Comprehensive overview of waste management activities
- **Real-time Analytics** - Visual representation of waste management data
- **District Management** - Track active and inactive districts
- **Waste Categories** - Manage different types of waste collection
- **Request Tracking** - Monitor the status of waste collection requests
- **Collection Status Monitoring** - Track pending, completed, and rejected collections
- **Driver Assignment Tracking** - Monitor truck driver request status

## 🛠️ Technologies Used

- **Frontend**:
  - React.js
  - Redux (for state management)
  - Chart.js (for data visualization)
  - React-Toastify (for notifications)
  - Tailwind CSS (for styling)
  - Flowbite React (UI components)

- **Backend**:
  - Node.js/Express (inferred from API endpoints)
  - MongoDB (inferred from data structure)
  
- **Other Tools**:
  - React Icons
  - Google Maps API (inferred from imports)

## 📊 Dashboard Features

- **Request Status Overview** - Track pending, accepted, rejected, and completed waste requests
- **District Analytics** - Monitor active vs. inactive districts
- **Waste Category Management** - Track different waste categories and their usage
- **Geographical Insights** - Analyze waste distribution by city
- **Category Distribution** - Visualize waste quantities by category
- **Collection Metrics** - Monitor collection completion rates

## 💾 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/waste-zero.git
   cd waste-zero
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. Start the development environment:
   ```bash
   # In the root directory
   npm run dev
   ```

## 📝 Usage

### Administrator Dashboard

The administrator dashboard provides a comprehensive overview of the waste management system:

1. **Summary Statistics**: View total requests, districts, waste categories, and completed requests
2. **District Management**: Monitor district status and activity metrics
3. **Waste Category Tracking**: Track active and inactive waste categories
4. **Request Monitoring**: View pending, accepted, and rejected waste collection requests
5. **Analytics & Insights**: Visualize data through interactive charts and graphs

### API Endpoints

Based on the dashboard implementation, the following API endpoints appear to be available:

- `/api/district/get` - Get district information
- `/api/request/get` - Get waste request information
- `/api/waste-category/get` - Get waste category information

## 🔧 Project Structure

```
waste-zero/
├── api/                    # Backend API code
│   ├── controller/         # API controllers
│   ├── models/             # Database models
│   ├── utils/              # Utility functions
│   └── routes/             # API routes
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/
│       ├── components/     # React components
│       │   ├── DashWasteDashBoard.jsx  # Main dashboard component
│       │   └── ...
│       ├── redux/          # Redux state management
│       ├── assets/         # Images and static assets
│       └── App.jsx         # Main app component
└── README.md               # Project documentation
```

## 🌟 Key Dashboard Component

The DashWasteDashBoard.jsx component serves as the central administrative dashboard with:

- Real-time statistics on waste requests
- District activity monitoring
- Waste category management
- Collection status tracking
- Visual data representation with charts and graphs

## 🔄 Data Flow

1. User makes waste collection requests
2. Administrators review and process requests
3. Truck drivers are assigned to collection tasks
4. Collection status is updated and tracked
5. Analytics are generated based on collection data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Development Team

- Frontend Developers
- Backend Engineers
- UX/UI Designers
- Project Managers

## 📱 Contact

For questions or support, please contact us at support@wastezero.com

---

© 2025 Waste Zero. All Rights Reserved.
