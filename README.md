# weather-app

**_The actual app can be found on my repo Node_Projects, this single repo is made to upload it to Heroku cuz in the other repo, the project is in his own branch aside from master._** 

A Nodejs based app that retrieves forecast and location data from two API´s, mapbox.com and darksky.net, via user input form, uploaded to Heroku.

It contains the next work:
1. A web server from ground up with basic endpoints
   - Home
   - About
   - Help
2. Retrieving API data from mapbox
   - Applied the callback pattern
3. Retrieving API data from darksky
   - Applied the callback pattern
4. Rendering the retrieved data in the index endpoint
   - The user can enter the desired location to show the current climate change
5. The client side modularize code using hbs:
   - Views
   - Partials
6. Very basic styling, the project was more about the back-end structure
7. Uploaded via Heroku CLI

Task list of updates:
- [ ] Add testing files
- [ ] Retrive more data to render
- [ ] Refactor codebase with ES6 features, if possible
- [ ] Improve the styling
