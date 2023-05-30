# OSA - Optimal Selection of Accessories

&emsp;OSA is a web application 🔮 designed to assist 👷 users 🔍 in finding ⭐ the best in terms of price-quality ratio accessories for 🔧 upgrading, 🔨 repairing, or 🔱 enhancing various types of gates and roller shutters. 

### 🔩 Key Features

- **User-Friendly Interface**: OSA offers a user-friendly interface that allows seamless navigation and easy access to information.
- **Categorized Product Groups**: The main page presents four distinct product groups - Residential Gates, Industrial Gates, Garage Roller Shutters, and Window Roller Shutters. Users can explore each category to find the relevant accessories.
- **Order Customization**: OSA enables users to select the desired accessories by clicking the "Choose" button. Selected items are added to the order window, where users can input the desired quantities.
- **Responsive Design**: The web application is designed with responsiveness in mind, ensuring an optimal viewing experience across various devices.

### 📝 How to Use

1. Visit the OSA web application and explore the main page, where you will find an overview of the available product groups.
2. Click on a specific group to access the corresponding page, where a comprehensive list of products and accessories will be displayed.
3. To select desired items, click the "Choose" button next to each product. The selected items will appear in the order window at the bottom of the page.
4. In the order window, input the desired quantities for each item.
5. Once you have finalized your selection and specified the quantities, you can download your order as an image (e.g., JPG, PNG) or a PDF file.

### 📒 About

&emsp;OSA is developed using React.js and React Bootstrap, ensuring a seamless user experience and a responsive design. 
The logic and data handling are implemented using separation of concerns principles, ensuring a clean and maintainable codebase.

### 🔭 Future Enhancements

&emsp;In the future, we plan to introduce registration functionality, allowing registered users to access additional features and customization options. We also aim to expand the database of accessories and continuously improve the user interface for an enhanced user experience.

- - -

### 📚 The project structure (architecture):

```css
src/
├── index.js
├── index.scss
├── variables.scss
├── App.js
├── components/
│   ├── common/
│   │   ├── Header.js
│   │   ├── Navbar.js
│   │   ├── Spinner.js
│   │   ├── Footer.js
│   │   └── Common.scss
│   ├── pages/
│   │   ├── MainPage.js
│   │   ├── IndustrialGatesPage.js
│   │   ├── ResidentialGatesPage.js
│   │   ├── GarageRollersPage.js
│   │   ├── WindowRollersPage.js
│   │   ├── NotFoundPage.js
│   │   └── Pages.scss
│   └── order/
│       ├── ProductCard.js
│       ├── OrderForm.js
│       ├── OrderSummary.js
│       ├── OrderConfirmation.js
│       └── Order.scss
├── database/
│   ├── GatesDatabase.js
│   └── RollersDatabase.js
├── services/
│   ├── DataService.js
│   └── AuthService.js
├── resources/
│   ├── rollersImages/
│   └── gatesImages/
└── └── commonImages/
```

See [Components Guide](https://github.com/SKindij/OSAtechno-app/blob/main/COMPONENTS.md) for more explanation and description.

- - -

### Thank you for choosing OSA - 🏡 Optimal Selection of Accessories!
🔗 to: <https://osatechno.com/>

©️ SKIndij 2023
