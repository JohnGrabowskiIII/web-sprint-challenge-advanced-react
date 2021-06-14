import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const checkoutHeader = screen.getByText(/checkout form/i)

    expect(checkoutHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const submitButton = screen.getByRole(/button/)

    userEvent.type(firstName, 'Dustin')
    userEvent.type(lastName, 'Myers')
    userEvent.type(address, '505 Ezy St')
    userEvent.type(city, 'New York')
    userEvent.type(state, 'NY')
    userEvent.type(zip, '12345')
    userEvent.click(submitButton)

    const successMessage = screen.getByTestId(/successMessage/i)

    expect(successMessage).toBeInTheDocument();

});
