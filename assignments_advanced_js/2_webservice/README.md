## Goal - How can you retrieve data from a webservice?
A webservice is a service that provides data to other applications over the internet.
In this lesson, you will learn how to retrieve data from a webservice and use it in your project.

### What is a webservice?
A webservice is a service that provides data to other applications over the internet.

For example, a webservice can provide data about the weather, the stock market, or the latest news.

It can also be a part of your own application that provides data to the front-end of your application. 
For example, a webservice that provides information about your projects for your portfolio website.

The data is usually provided in a format called JSON (JavaScript Object Notation).

JSON is a format that is easy for humans to read and write and easy for machines to parse and generate.

Example of a JSON object:
```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```
It looks like a JavaScript object, but it is a string that can be converted to a JavaScript object.

The main difference between a JSON object and a JavaScript object is that the keys in a JSON object must be in double quotes.

The values in a JSON object can be strings, numbers, arrays, or other JSON objects.

A more complex example of a JSON object:
```json
{
  "name": "John",
  "age": 30,
  "city": "New York",
  "children": [
    {
      "name": "Sara",
      "age": 5
    },
    {
      "name": "Mike",
      "age": 3
    }
  ]
}
```
As you can see, the value of the key `children` is an array.

It is an array because it is enclosed in square brackets and each item in the array is separated by a comma.

Each item in the array is a JSON object that represents a child of the person with the name John.

### How can you retrieve data from a webservice?
To retrieve data from a webservice, you can use the `fetch` function in JavaScript.

The `fetch` function is a built-in function in JavaScript that allows you to make network requests to a webservice and handle the response.

An example of how to use the `fetch` function:
```javascript
// The URL of the webservice
const url = 'https://jsonplaceholder.typicode.com/posts';

// Use the fetch function to make a network request to the webservice
const p = fetch(url)
  .then((response) => { return response.json() } )
  .then((data) => { console.log(data) });
```

In this example, the `fetch` function is used to make a network request to a webservice that provides data about posts.

### Exercise 1: connect the Food Data Central API

Follow these steps:
1. Go to the website with more info about the api: https://fdc.nal.usda.gov/api-guide.html.
2. Create an account and get an API key: https://fdc.nal.usda.gov/api-key-signup.html
3. Download the Postman app (https://www.postman.com/downloads/). This app allows you to make network requests to a webservice and see the response.
4. Try to get data in Postman by making a request to: `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=[api-key]&query=gouda`
5. Now we want te retrieve data from a web application. Use the project you've set up in the previous lesson.
6. Create a new function called `getData`in your JavaScript file that uses the `fetch` function to make a network request to the API.
7. Call the `getData` function when a button is clicked.
8. First try to log the data to the console. 
9. If that works, try to display all descriptions of the found food products on the page.
10. Add a search field to the page that allows the user to search for specific types of food.
11. When the user clicks on the product, show a list of the nutrients.

### Exercise 2: anticipate the project Rijksmuseum
1. Create a new function called `getArt` in your JavaScript file that uses the `fetch` function to make a network request to the Rijksmuseum API.
2. The function should get a random piece of art from the Rijksmuseum API.
3. Call the `getArt` function when you scroll the page.
4. Show the image of the piece of art on the page and rotate while scrolling.
5. Show the description of the piece of art on its back.

### Extra exercise: create a web application for a library
Your task is to create a web application for a library:
* Open the folder `library-management-system` in a new Webstorm window.
* The application has a backend API to handle data storage and a frontend interface to interact with the user.
* Read the README.md file in the `library-management-system` folder for more information.
* Create a front-end:
  * Register new admin users.
  * A login page.
  * A search page that shows all books that meet the search criteria.
  * The possibility to borrow a book.
  * The possibility to return a book.
  * A page that is only accessible for admin users in which:
    * An admin can add a book to the library.
    * An admin can remove a book from the library.
    * An admin can register new users.
    * An admin can delete users.
