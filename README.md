# Project Overview

In this project I was given a web-based application that reads RSS feeds. I wrote test suites in Jasmine to test the RSS Feeds, the Menu, the Initial Entries, and the New Feed Selection.


## Tests

The Feed Reader application must have:
* Named feeds with valid URLs
* The menu must be hidden upon load and able to toggle between being shown and hidden when clicked
* There must be at least a single entry upon load
* New content must change when a new feed is loaded

## How to Use This Project

Download or clone this repository. Tests are contained in the [jasmine/spec/feedreader.js](https://github.com/ileanahi/frontend-nanodegree-feedreader/blob/master/jasmine/spec/feedreader.js) file and can be deleted, updated, or added to. Tests are run when the [index.html](https://github.com/ileanahi/frontend-nanodegree-feedreader/blob/master/index.html) file is launched with the results appearing at the bottom of the page.

## Dependencies

This application uses [Jasmine 3.1.0](https://jasmine.github.io/api/3.0/global) for testing. [jQuery](https://jquery.com/), [Handlebars](https://handlebarsjs.com/) for templating, and the [Google Feed API](https://developers.google.com/feed/) to load the feeds.