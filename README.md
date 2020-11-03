Base Feature Assignment - Task 1

    Create TWO new components: UserInput and UserOutput

    UserInput should hold an input element, UserOutput two paragraphs

    Output multiple UserOutput components in the App component (any paragraph texts of your choice)

    Pass a username (of your choice) to UserOutput via props and display it there
    
    Add state to the App component (=> the username) and pass the username to the UserOutput component
    
    Add a method to manipulate the state (=> an event-handler method)
    Pass the event-handler method reference to the UserInput component and bind it to the input-change event

    Ensure that the new input entered by the user overwrites the old username passed to UserOutput
    
    Add two-way-binding to your input (in UserInput) to also display the starting username
    
    Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

Assignment 2: Time to Practice - Lists & Conditionals

    1.Create an input field (in App Component) with change event listener witch outputs the length of the entered text below (e.g. in a paragraph).
    
    2.Create new component (=> ValidationComponent) which receives the text length as a prop
    
    3.Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g take 5 as a minimum length)
    
    4. Create another component (=> CharComponent) and style it as an inline box 
    
    5. Display a list of CharComponents where each CharComponent receives a different letter of entered text  (in the initial input field) as a prop.
    
    6. When you click a CharComponent, it should be removed from entered text.

    Hint: Keep in mind that Javascript strings are basically arrays!

    You'll also need to transform a string into a real array and then join it back into a string again to complete task 5 of the assignment.

    You can split a string into an array of its characters with the split('')  method. By passing just an empty string, it's split after every character.

    You may then re-create a string from that array by using join('')  - again, joining with an empty string as a separator
