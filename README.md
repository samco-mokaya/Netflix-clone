**Netflix Clone App**
======================

**Table of Contents**
-----------------

* [Overview](#overview)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [API Documentation](#api-documentation)
* [Contributing](#contributing)
* [License](#license)

**Overview**
------------

This is a Netflix clone app built using React and Vite, utilizing a public API to fetch movie and TV show data.

**Features**
------------

* Browse through a list of popular movies and TV shows
* Search for specific titles
* View movie and TV show details, including descriptions and trailers
* Add movies and TV shows to a watchlist

**Installation**
------------

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
npm install
```

**Usage**
-----

To run the app, execute the following command:

```bash
npm run dev
```

Open your web browser and navigate to `http://localhost:3000` to access the app.

**API Documentation**
--------------------

The app utilizes the [TMDB API](https://www.themoviedb.org/) to fetch movie and TV show data. The API endpoint used is `/discover/movie` and `/discover/tv`.

**Contributing**
------------

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

**License**
----------

This project is licensed under the MIT License. See the `LICENSE` file for details.

### API Endpoints

* `GET /discover/movie`: Fetch a list of popular movies
* `GET /discover/tv`: Fetch a list of popular TV shows
* `GET /movie/{id}`: Fetch movie details by ID
* `GET /tv/{id}`: Fetch TV show details by ID

### API Parameters

* `api_key`: Your TMDB API key
* `language`: The language to use for the API response (e.g. `en-US`)
* `page`: The page number to fetch (e.g. `1`)

### API Response

The API response is a JSON object containing the following properties:

* `results`: An array of movie or TV show objects
* `total_results`: The total number of results
* `total_pages`: The total number of pages

### Movie and TV Show Objects

Each movie or TV show object contains the following properties:

* `id`: The ID of the movie or TV show
* `title`: The title of the movie or TV show
* `overview`: A brief description of the movie or TV show
* `poster_path`: The path to the poster image
* `backdrop_path`: The path to the backdrop image
* `release_date`: The release date of the movie or TV show
* `genres`: An array of genres associated with the movie or TV show
* `production_companies`: An array of production companies associated with the movie or TV show