# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A stateful component is set up like a class, with different functions running and defining what actions occur at different points in the components lifecycle. Functional components are set up using more recent react syntax, and are defined as a function.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount is called directly before a component mounts, and componentWillUpdate is called directly before the component updates.

3. Define stateful logic.
    Stateful logic is logic that deals with the manipulation of "behind the scenes" data. which is in essence, the logic that does not directly relate to how things are displayed on the page. Stateful logic is generally backend logic, as opposed to front end "display" related logic.

4. What are the three step of creating a successful test? What is done in each phase?
    Arrange: set up the proper steps to define and begin your test, including making sure the correct elements are loaded into the test
    Assert: define the elements that you will need to test, and prepare the page to run through the elements
    Act: simulate user actions, and ensure that things run smoothly. This includes testing if certain elements exist within the rendered document.
