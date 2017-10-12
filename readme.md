## Knex Assignment (it's kinda a big deal):
Make sure you install all needed modules for the assignment before hand. If you're unsure what you need. Here's a list:
 - Express
 - EJS
 - pg
 - Knex

### What do i use?
You can use the existing users database that we have or create a new one. It's up to you.


### Users Management App

The base goal of the assignment is to make a user management app (crud) based off of a restful backend.
Here's a list of stories to complete:
- As a user, when I visit "/users" it should display a list of all users in a table format. There should be a clickable link in the table to view the users profile.
- At the top of the display all page there should be a form for creating a new user. When the form is submitted the page should refresh and the user should be added to the list.
- As a user, when I click on "view profile" it should bring me to a specific users page ("/users/:id"). The users page should display all of the information for the user and should have a edit and delete button.
- As a user, when I click "edit" on the view profile page it should take me to a separate page with a form that's pre-populated with the users information. I should be able to update all fields (except id) and when I click the "update" button it should properly update the user in the database.
- As a user, when I click "delete" on the view profile page it should remove the user from the database and redirect the "/users" page.


### Big time stretch goals:

- Style it up! Make it look pretty!
- When I delete a user pop open a alert or modal to confirm the action. "Are you sure you want to delete <name>?"
- Add multiple pages to the view all page. Limit it to 10 users shown per page.
- Expand the app to include user posts! When I visit a users profile it should list all posts they have made.
- On the view profile page above the list of posts add a form for creating a new post for a user.
- Implement a commenting system on each post. Since we don't have a login/registration you will need to include a dropdown or input field to select what user is making the comment.
