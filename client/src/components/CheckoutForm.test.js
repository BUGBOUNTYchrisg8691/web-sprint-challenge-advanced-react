import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const formHeader = screen.getByText(/checkout form/i);
  expect(formHeader).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const fname = screen.getByLabelText(/first name./i);
  const lname = screen.getByLabelText(/last name./i);
  const addr = screen.getByLabelText(/address./i);
  const city = screen.getByLabelText(/city./i);
  const state = screen.getByLabelText(/state./i);
  const zip = screen.getByLabelText(/zip./i);

  fireEvent.change(fname, { target: { value: "Chris" } });
  fireEvent.change(lname, { target: { value: "Girvin" } });
  fireEvent.change(addr, { target: { value: "111 Cool Street" } });
  fireEvent.change(city, { target: { value: "Tampa" } });
  fireEvent.change(state, { target: { value: "FL" } });
  fireEvent.change(zip, { target: { value: "34219" } });

  const submit = screen.getByRole("submitBtn");
  fireEvent.click(submit);

  const fnameSub = await screen.findByText(/chris/i);
  const lnameSub = await screen.findByText(/girvin/i);
  const addrSub = await screen.findByText(/111 cool street/i);
  const citySub = await screen.findByText(/tampa/i);
  const stateSub = await screen.findByText(/fl/i);
  const zipSub = await screen.findByText(/34219/);

  expect(fnameSub).toBeTruthy();
  expect(lnameSub).toBeTruthy();
  expect(addrSub).toBeTruthy();
  expect(citySub).toBeTruthy();
  expect(stateSub).toBeTruthy();
  expect(zipSub).toBeTruthy();
});
