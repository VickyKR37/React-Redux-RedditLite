Codecademy Project – Reddit Client
Planning Documentation
Reddit is a website where people share links to articles, media and other things on the web. This application, which I have called ReddittLite, will allow users to view and search posts and comments provided by the Reddit provided API. This project will use HTML, CSS, JavaScript, React, Redux, Git and GitHub and includes wireframes. 

Breaking The UI Into A Component Hierarchy For Page 1

 

•	RedditLite – contains the entirety of the app
o	Search Bar
o	Articles Container
•	Articles







Breaking The UI Into A Component Hierarchy For Page 2

 
•	Article container
o	Article Title and	Article Media
o	Comments Container

The Data That Each Component Manipulates and How the Components Fit with One Another

App Component – takes the data model
Search Bar and Button – the search bar takes user input and returns articles containing the keywords that have been input by the user, on pressing enter or after clicking on the search button. This component is state because it changes over time and can't be computed from anything. 
Article container – displays the article, its headline and comments that the user selects from a list of articles returned by the search bar and button. This is not state because it has been passed in from the Search Bar and Button component.
