# blog-api-cms

Features:

- Filter posts by ID
- Filter posts by tag name
- Filter posts by category
- Add a comment.
- Delete a comment.
- Create a post.
- Add post category
- Update the privacy of the post.
- Delete a post.
- live validation when signing up or logging up.

1. This is the result of the blog API content management.

![Screenshot_2024-06-14_12-34-48](https://github.com/Preslav977/battleship/assets/119291608/52fe1669-5b51-457a-aafe-b7fe482d36ef)

2. About the project the project.

- This is the blog content management system on the frontend of the blog that allows the user to create a post, delete a post, publish it, unpublish it, and leave a comment.
- In order to access these rights, you need to be verified or an admin; otherwise, you can't log in.

3. Project objectives

- [x] nav component that allows the user to log in and see a toggle drop-down with two posts
- [x] fetch posts component that fetches all the posts that can be seen on the homepage
- [x] author component that allows the users to create posts, but this is only allowed in the second frontend.
- [x] post component that is used to create each post using props
- [x] flexed post component similar to the post component with props
- [x] featured tags component can lead to different posts based on a tag.
- [x] community component that contains different images and links
- [x] footer component
- [x] log-in component that checks if you are authorized to log in or not.
- [x] user dashboard component that fetches the user information if the user is logged in
- [x] fetch posts by category component that can fetch a post based on clicked category
- [x] fetch posts by tags component similar to the category but can fetch based on a tag
- [x] fetches a single post component that can display detailed information on the post.
- [x] Create a post component that allows the authors to create a post.
- These components are different parts that represent the blog.

4. Notes and lessons learned

- I learned how to use the outlet context through outlet, which allows me to pass a state down the tree and use that state in different components.
- How to use fetch with different headers, methods, and bodies to send JSON back to the server
- How to create client validation on React to show the user before this is sent to the server
- How to use the useNavigate hook that redirects pragmatically to a different page or part of the component
- How to use the ref hook to clear the fields on the form component on submit
- learned using useParams and fetch to fetch posts based on ID, category, tag, and so on.
- Learned based on user ID to delete a comment
- learned to pass links to the component to allow fetching posts by category, ID, etc.
- learned how to handle response status 401 if the user is not authorized.
- learned how to use the different properties of the flexbox and grid to create responsive design.
- learned how to use the user event type to test if there is a value in the input.
- learned how to store the token in local storage after the user is logged in and send it back to the frontend with the Bearer schema.
- how to sanitize the HtML using dom purify and render it.
- I learned how to implement TinyMCE, which is an editor that allows you to create posts with HTML content that is saved in the database.

5. Features or things I'd love to work on in the future

- [ ] Figure out how to better organize the router and the routes instead of importing nav component everywhere.
- [ ] Figure out how to better organize the variables in the CSS.
- [ ] How to test if the user clicked a button that is not pragmatically redirected to a certain component
- [ ] How to test if the state is set to true by clicking a button similar to the one above
- [ ] how to implement semantic HMTL in all or most places instead of using divs
- [ ] implements accessibility
- [ ] How to reduce duplication with components, for example, by reusing the same component but with different styles
- [ ] How to reduce duplication on the useEffect hook by creating a custom hook
- [ ] add some animations
- [ ] create a dialog component that allows you to search for a post.
- [ ] like a comment, like a post
- [ ] allows the user to edit this information.
- [ ] Figure out a way to make users verified.
