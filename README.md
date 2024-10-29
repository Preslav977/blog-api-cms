# blog-api-cms

![Screenshot_2024-06-14_12-34-48](https://github.com/Preslav977/battleship/assets/119291608/52fe1669-5b51-457a-aafe-b7fe482d36ef)

# Overview

This is the front-end content management of the project. Created with React library.

# About the project the project

This is the blog content management system on the frontend of the blog that allows the user to create a post, delete a post, publish it, unpublish it, and leave a comment.
In order to access these rights, you need to be verified or an admin; otherwise, you can't log in.

# Features

- Filter posts by ID
- Filter posts by tag
- Filter posts by category
- Add a comment.
- Delete a comment.
- Create a post.
- Add post category
- Update the privacy of the post.
- Delete a post.
- Live validation when signing up or logging up.
- Guest account

# Technology Used

- React Context API: for allowing to pass down the state in the tree
- React Router: rendering different components depending on the route
- PropTypes: validating the prop of a component
- Vitest: testing the components of the application
- Dom Purify: sanitize the content of the post in order to prevent injections.
- Date Fns: library for date formatting
- CSS module: organized CSS style files for each component

# Lessons Learned

- React Content API: how to use the useContext API, which allows me to pass a state down the tree and use that state in different components
- HTTP headers: how to use fetch with different headers, methods, and bodies to send JSON back to the server
- Client Side Validation: show the user before this is sent to the server.
- useNavigate Hook: that redirects pragmatically to a different page or part of the component
- useRef hook: clear the fields on the form component on submit
- useParams hook: fetch to fetch posts based on ID, category, tag, and so on.
- HTTP status: handle response status 401 if the user is not authorized
- Live Validation: how to use the user event type to test if there is a value on the input
- Local Storage: how to store the token in the local storage after the user is logged in and send it back to the frontend with the Bearer schema.
- DOM Purify: how to sanitize the HtML using dom purify and render it.
- Tiny MCE: third-party component, which is an editor that allows you to create posts with HTML content that is saved in the database.

# Future Improvements

- Better organization of the routes
- Better organization of CSS variables
- Test if the user clicked a button that is not pragmatically redirected to a certain component.
- Testing if the state is true after the button has been clicked
- Implementing semantic HTML
- Improve accessibility
- Reducing components by reusing the CSS styling
- Add Animations
- Dialog that allows you to search for posts
- Implement like for a post and a comment.
- Implementing use to be able to edit his information
- How to make users verified
