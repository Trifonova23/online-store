# PROJECT ONLINE STORE

## Requirements

Based on the "fake store API" ( https://fakestoreapi.com/docs ) documentation, I created an online store that sells products in four different categories. I designed separate pages for different products, including a page for the latest offers, a page for all products on the site, and a page for each category. Each product has a "details" button that opens a module with more information about the product.

### About The Project

React.js
React Router Dom

### Installation & Running steps / Getting Started

To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. Clone this repo: `git clone https://github.com/Trifonova23/online-store.git`- (HTTPS) / `git@github.com:Trifonova23/online-store.git` - (SSH)
3. Install project dependancies: `npm install`
4. Start the development environment: `npm start`
5. Open your browser and visit <http://localhost:3000>

### Repo structure

/
├─ src/
│ ├─ public/ # Public
│ │ ├─ images/ # Raster images (used in component examples)
│ │
│ ├─ components/ # Components
│ │ ├─ ButtonDetails/ # ..product details button
│ │ ├─ Header/ # ..page navigation header
│ │ ├─ Product/ # …reusable component with product information
│ │
│ ├─ Pages/ #
│ │ ├─ AllProductPage/ # …page with all products on the site
│ │ ├─ Categories/ # …page with a choice of four categories
│ │ ├─ HomePage/ # …display latest offers with selected products
│ │ ├─ ProductDetails/ # …product details (features)
│ │ ├─ SelectedCategory/ # …show all provided items from selected category
│ │
│
├─ .gitignore # List of files and folders not tracked by Git
├─ package.json # Project manifest
└─ README.md # This file

|                  |                   |               |                  |
| ---------------- | ----------------- | ------------- | ---------------- |
| project-products |                   |               |                  |
|                  | node-modules/     |               |                  |
|                  | public/           |               |                  |
|                  |                   | index.html    |                  |
|                  |                   | manifest.json |                  |
|                  |                   | robots.txt    |                  |
|                  | src/              |               |                  |
|                  |                   | components/   |                  |
|                  |                   |               | ButtonDetails    |
|                  |                   |               | Header           |
|                  |                   |               | Product          |
|                  |                   | images/       |                  |
|                  |                   | pages/        |                  |
|                  |                   |               | AllProductPage   |
|                  |                   |               | Categories       |
|                  |                   |               | HomePage         |
|                  |                   |               | ProductDetails   |
|                  |                   |               | SelectedCategory |
|                  | .gitignore        |               |                  |
|                  | package.json      |               |                  |
|                  | package_lock.json |               |                  |
|                  | README.md         |               |                  |
