[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/nikolay-b-2887971b7/)
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <h3 align="center">Google Books Search</h3>
  <p align="center">
    A React based book search application
    <br />
    <a href="https://github.com/nikolaybutnik/google-books-search"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://infinite-fortress-13464.herokuapp.com/"><strong>Deployed application »</strong></a>
    <br />
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

![Google Books Screen Shot](https://github.com/nikolaybutnik/google-books-search/blob/main/client/public/assets/images/google-books-img.png?raw=true)

Google Books Search is a web application backed by Google Books API and MongoDB, which allows the user to search for books by keywords, and adding potential future reads to a saved list.

### Built With

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Google Books API](https://developers.google.com/books/docs/overview)

## Installation

To install the application locally, run `npm install` to install all dependencies required to run it.

## Usage

To start the application locally, run `node server.js` or `npm run start` from the CLI, and then navigate to localhost:3000 in the browser. [The app is also hosted on Heroku.](https://infinite-fortress-13464.herokuapp.com/)

This application uses Google Books API to make a query using keywords entered by the user into the search bar on the `Search` page. The displayed results each have a cover image, author, and a brief description. Each result has a `View` button to view more information on the book in a new tab, or save the book to the database. Clicking on `Saved` in the nav bar will bring the user to the favorites page. This page makes a query to the database to get and display a list of all books saved by the user. Each entry on this page also has a `Delete` button, which will remove the book from the database, and thus from this screen.

## Contributing

Contributions are what make the open source community such an amazing place to be, learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Nikolay Butnik - [Email](mailto:btnk.nik@gmail.com) - [Github](https://github.com/nikolaybutnik)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/nikolaybutnik/google-books-search/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nikolay-b-2887971b7/
