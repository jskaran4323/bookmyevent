### ✅ TODO

We are evaluating you based on your front-end and/or back-end capabilities. **Failure to complete one side fully does not necessarily result in disqualification.** Please complete the task to the best of your abilities.

#### Components to Implement

You are expected to create at least **three components**:

---

#### 1. Admin Data Table View

- Create an API function that fetches data from `backend/data/funds_data.json`.
- Display the data in a table format.
- Style the table using your best UI/UX judgment.
- When clicking on the **Name** of a data point, navigate to the **User Facing Data View**.
- Include an edit icon (e.g., a pencil) that navigates to the **Admin Edit View**.

---

#### 2. User Facing Data View

- Create an API function to fetch a **single data point** from `backend/data/funds_data.json`.
- Display all available information for that data point.
- Style the view using your best UI/UX judgment.

---

#### 3. Admin Edit View

- Create an API function to fetch and edit a **single data point** from `backend/data/funds_data.json`.
- Allow the admin to **edit** and **delete** the data.
- Automatically save changes when the admin finishes editing.
- Design the view using your best UI/UX judgment.
- You may implement this as a **separate page** or a **modal/dialog** (e.g., MatDialog).


#### ANSWER: 

## Approach and Design Explanation

## Backend Approach
The backend of this application is built using a function-based architecture instead of a class-based one. The structure is organized into clear layers where routes define the API endpoints, controllers handle request and response logic, services contain the core business logic and file operations, types define the data structure using TypeScript interfaces, and middleware is used for centralized error handling. 
The overall flow follows a simple pattern where a request moves from the route to the controller, then to the service, and finally interacts with the JSON file.

A function-based approach was chosen because the application is stateless and primarily performs simple CRUD operations. This keeps the code lightweight, easier to read, and faster to implement and debug. For a project of this scale, introducing classes would add unnecessary complexity without providing significant benefits. However, for larger systems that require shared logic, dependency injection, or more structured abstractions, a class-based architecture would be more appropriate.

The backend uses a JSON file located at `backend/data/funds_data.json` as its data source. Since there is no database involved, file operations are handled using `fs/promises`. This simplifies development and setup, although it does come with limitations in terms of scalability and concurrent access.

To maintain type safety, a TypeScript interface called `Fund` is used instead of a traditional database model. This ensures that the data structure remains consistent throughout the application and improves the developer experience with better autocomplete and compile-time checks.

Error handling is implemented using a custom `AppError` class that extends the built-in Error class and includes a status code. Errors are thrown within the service layer and handled centrally באמצעות middleware. This avoids repeating error-handling logic in every controller, ensures consistent API responses, and keeps the controller code clean and focused.

On the frontend, the application is built using Angular with standalone components and routing. The application is divided into three main components: a table view to display all funds, a detail view to show information for a single fund, and an edit view for administrative changes. Each component corresponds directly to one of the requirements, making the structure intuitive and easy to follow.

Routing is used to manage navigation between views. The root path displays the table view, `/fund/:name` shows the user-facing detail view, and `/admin/edit/:name` opens the admin edit view. This approach provides clear navigation and makes each view independently accessible.

The admin edit functionality is implemented as a separate page rather than using a modal dialog such as Angular Material’s MatDialog. This decision was made because a full page is better suited for forms with multiple fields, offers clearer navigation through URLs, and is easier to test and extend. While a modal would be useful for quick edits, a dedicated page provides a more structured and scalable user experience in this case.

Data fetching on the frontend is handled באמצעות Angular’s HttpClient, with all API interactions centralized in a service. This includes fetching all funds, retrieving a single fund, updating a fund, and deleting a fund. Centralizing this logic keeps components cleaner and promotes reusability.

In the admin edit view, autosave is implemented using the blur event. This means that changes are saved when the user finishes editing a field rather than on every keystroke. This approach reduces unnecessary API calls, improves performance, and aligns better with real-world application behavior.

From a UI and UX perspective, the table view is designed to be clean and readable with clickable rows for navigation. The detail view uses a card-based layout to present information clearly, and the edit view uses a structured form layout. Loading states and error states are also handled to improve user experience.

One important design decision is using the fund name as a unique identifier. While this works for the scope of this task, it is not ideal for a production system because names can change or may not be unique. A better approach would be to introduce a dedicated unique ID.

Another trade-off is the use of a JSON file instead of a database. This simplifies the setup and development process but limits scalability and proper handling of concurrent updates.

If this project were to be extended further, improvements could include introducing unique IDs, adding validation using tools like Zod or class-validator, implementing debounced autosave using RxJS, adding pagination and filtering, introducing role-based access control, and integrating a proper database such as PostgreSQL or MongoDB.

Overall, the implementation focuses on clarity, separation of concerns, and maintainability. The architecture is simple but flexible enough to be extended, and it reflects practical design decisions that would scale well with further development.

