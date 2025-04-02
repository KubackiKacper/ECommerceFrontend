# ECommerce - Frontend
## React + Typescript
### This is my implemetation of frontend part for my E-Commerce solution. Using React + TypeScript and Bootstrap, I have developed a graphical user interface for my e-commerce solution, displaying available products. All visible elements on the page are JSX components, written in React with precise type definitions using TypeScript.
![Reference Image](/README_photos/main_view.PNG)
### The website is fully responsive and dynamically adapts to the user's browser window size. Users can add products to the cart while specifying the quantity. After adding an item, an alert is displayed with relevant information.
![Reference Image](/README_photos/to_cart.PNG)
### To access the cart view, users can click the icon in the upper-right corner to see its contents.
![Reference Image](/README_photos/cart_view.PNG)
### The application utilizes local storage, ensuring that products added to the cart remain there even after refreshing the page. After clicking the *Checkout* button, the user will be redirected to the checkout view page.
![Reference Image](/README_photos/checkout_view.PNG)
### All user input fields are validated to ensure that the required information is provided. After that, by pressing the *Proceed* button, an alert message will be displayed, and the client will send a request to the API to store the information in the database.
![Reference Image](/README_photos/submit.PNG)
### Afterward, the user will be redirected to the main page, local storage will be cleared, and the data will be saved in the database.
![Reference Image](/README_photos/database.PNG)