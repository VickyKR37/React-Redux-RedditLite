# Codecademy Project – Reddit Client


**Planning Documentation**

Reddit is a website where people share links to articles, media and other things on the web. This application, which I have called ReddittLite, will allow users to view and search posts and comments provided by the Reddit provided API. This project will use HTML, CSS, JavaScript, React, Redux, Git and GitHub and includes wireframes. 

**Breaking The UI Into A Component Hierarchy For Page 1**

 - 	RedditLite – contains the entirety of the app 	 		
	 - 	Search Bar
   	 -	Articles Container
   	 -	Comments Container

#### The Data That Each Component Manipulates and How the Components Fit with One Another

App Component – takes the data model. 

Search Bar and Button – the search bar takes user input and returns articles containing the keywords that have been input by the user, on pressing enter or after clicking on the search button. This search bar is state because it changes over time and can't be computed from anything. 

Comments - displays the comments on the articles displayed by Search Bar and Button.


