"use strict";

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All of our tests are within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* First test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('have URLs', function() {
            allFeeds.forEach(function(feed) {
                // Test that url is defined
                expect(feed.url).toBeDefined();

                // Test that url is a string
                expect(feed.url).toEqual(jasmine.any(String));

                // Test that url is not empty
                expect(feed.url.length).toBeGreaterThan(0);

                // Test that url is a url
                // Regexp from https://www.regextester.com/93652
                expect(feed.url).toMatch(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm);
            });
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have a name', function() {
            allFeeds.forEach(function(feed) {
                // Test that name is defined
                expect(feed.name).toBeDefined();

                // Test that name is not empty
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });


    /* Test suite named "The menu" */

    describe('The menu', function() {
        const body = document.body;

        /* Test that ensures the menu element is
         * hidden by default.
         */

        it('is hidden by default', function() {
            // Menu is hidden when body has class menu-hidden
            expect(body).toHaveClass('menu-hidden');
        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: the menu displays when
          * clicked and hides when clicked again.
          */

        it('changes visibility on click', function() {
            const menuIcon = document.querySelector('.menu-icon-link');

            // Make click event
            const event = new Event('click');

            // Listen for click event on Menu hamburger
            menuIcon.addEventListener('click', function (e) {}, false);
            // Click menu
            menuIcon.dispatchEvent(event);

            // Menu should show when clicked
            expect(body).not.toHaveClass('menu-hidden');

            // Menu should be hidden when menu hamburger is clicked again
            menuIcon.dispatchEvent(event);
            expect(body).toHaveClass('menu-hidden');

        });
    });


    /* Test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function(){
            done();
            });
        });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('exist in the feed container', function() {
            let feed = document.querySelector('.feed');
            let entry = document.querySelector('.entry');

            // Feed has at least one entry
            expect(feed.contains(entry)).toBe(true);
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let feed;
        let newFeed;

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            // Load first feed
            loadFeed(0, function() {

                feed = document.querySelectorAll('.feed');
                // Load second feed
                loadFeed(1, done);
            });
        });

        // Content changes when a new feed is loaded
        it('change with new content', function() {
            newFeed = document.querySelectorAll('.feed');

            // Feeds shouldn't have the same content
            expect(feed).not.toBe(newFeed);
        });
    });

});
