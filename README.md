## Tic-Tac-Toe Project

Link to game:  https://jwaskow.github.io/tic-tac-toe/

## Technologies Used

- HTML
- CSS / SASS
- Javascript
- jQuery
- AJAX

## Development Process

The project began on Tuesday.  On Tuesday night I wrote pseudo-code for the javascript game engine.
By the end of class on Wednesday I had a working javascript engine in node, but no visual game on the page.
Thursday morning I built a basic (no styling) page with the game board.  Then I began the API work, which I found to
be far more difficult than the game engine.  The authorization api was simple enough because we had the code already
from a previous lesson.  I spent the majority of Thursday making sense of how the authorization api worked.
Being able to understand this code allowed me to begin the game api functions of getting games, creating games,
and updating games.  On Friday I completed writing the game api with the exception of the update function, which I
finished on Saturday.  Then, I spent time on css and formatting and styling the page.  I made a button with a
function that requests games from the server and shows the user the total number of games on that account.
I then added a message box that displays a message each time the user does something, so they know that their
action was processed.

## Fixes for Future Iterations

If I had more time I would have liked to make the css better and add animations.  The current game board feels very
flat and I'd like to add more depth to it.  Another issue is that when the message boxes under the game dont have any
text in them, they still take up space.  This looks kind of awkward and I'd like to have them only take up space
when they have text in them.  I'd also like to add more statistics like the total games played, such as displaying
how many games are finished vs. unfinished, or being able to load previous unfinished games and complete them.

## Wireframes and User Stories

Wireframe link: http://imgur.com/a/o0fNt

User Stories:

- As a player, I want the game to feel quick and responsive.
- If I win the game, I’d like the game to declare my victory with fanfare.
- As a player, I want to be able to see my game history and be able to access my account from different computers.
- I want the page style to be colorful, but not aesthetically chaotic.
- I want the app the feel responsive and alive, like having animations for when buttons are pressed or moves are made.
