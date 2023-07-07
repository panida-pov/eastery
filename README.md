# Eastery
## Description
Eastery is an interactive front-end website built with react framework. It allows users to easily find their restaurants by typing in the keyword and the location they are looking for. As this project does not include the back-end part, the information of each restaurant will be fetched from [Yelp Fusion API](https://docs.developer.yelp.com/reference/v3_business_search) and displayed on the browser. Hope you enjoy!

## Features
* Users can type keyword and location in the search fields to find their target restaurants
* Users can select their preferred sorting option (`best match`/`heighest rated`/`most reviewed`) to sort the restaurants
* Current search status is shown to the users
* The image of the restaurant, the address, along with reviews and ratings are displayed as search results
* Users can redirect to the original website by clicking on the image of the restaurant of interest
* Searching for the restaurant using the search query is supported

## Step-by-step Guides
1. Clone the repo
   ```
   git clone https://github.com/panida-pov/eastery.git
   ```
2. Install NPM packages 
   ```
   npm install
   ```
3. Create `.env` file from `.env.example`
4. Create an account and get your API key [here](https://www.yelp.com/developers/v3/manage_app)
5. Insert your API key in `.env`
6. Use CORS Anywhere by clicking on [Request temporary access to the demo server](https://cors-anywhere.herokuapp.com/corsdemo) button
7. Run the project
    ```
   npm start
   ```
## Screenshots
* Search fields
 
  ![Before search](https://github.com/panida-pov/eastery/blob/main/screenshots/EasteryPage1.jpg?raw=true "Before search")
  
* Search results
  
  ![After search](https://github.com/panida-pov/eastery/blob/main/screenshots/EasteryPage2.jpg?raw=true "After search")
