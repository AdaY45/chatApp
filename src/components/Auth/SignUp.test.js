// import React from "react";
// import { render, cleanup, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import SignUp from "./SignUp";
// import * as reactRedux from "react-redux";
// import "@testing-library/jest-dom/extend-expect";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";

// const data = {
//   token: "",
//   user: {
//     _id: "615559cf21d8c861693cf3f4",
//     username: "user111",
//     email: "user111@gmail.com",
//     type: "user",
//     password: "user111*",
//   },
// };

// const mockStore = {
//   user: {
//       auth: ""
//   }
// };

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// const useSelectorMock = reactRedux.useSelector;
// const useDispatchMock = reactRedux.useDispatch;

// afterEach(cleanup);

// describe("Sign up component", () => {
//   let originFetch;
//   const history = createMemoryHistory();

//   beforeEach(() => {
//     originFetch = global.fetch;
//     useDispatchMock.mockImplementation(() => () => {});
//     useSelectorMock.mockImplementation((selector) => selector(mockStore));
//   });
//   afterEach(() => {
//     global.fetch = originFetch;
//     useDispatchMock.mockClear();
//     useSelectorMock.mockClear();
//   });

//   it("should push data to API", async () => {
//     const fakeResponse = data;
//     const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
//     const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
//     global.fetch = mockedFetch;
//     const { getByTestId } = render(
//       <Router history={history}>
//         <SignUp />
//       </Router>
//     );
//     const username = getByTestId("username");
//     const email = getByTestId("email");
//     const password = getByTestId("password");

//     userEvent.type(username, "user111");
//     userEvent.type(email, "user111@gmail.com");
//     userEvent.type(password, "user111*");
//     userEvent.click(getByTestId("signup"));

//     expect(getByTestId("username")).toHaveValue("user111");
//     expect(getByTestId("email")).toHaveValue("user111@gmail.com");
//     expect(getByTestId("password")).toHaveValue("user111*");
//     await waitFor(() => {
//       expect(history.location.pathname).toBe("/login");
//     });
//   });

//   it("should check checkbox", async () => {
//     const { getByTestId } = render(
//       <Router history={history}>
//         <SignUp />
//       </Router>
//     );
//     const checkbox = getByTestId("checkbox");

//     userEvent.click(checkbox);

//     expect(checkbox).toBeChecked();
//   });
// });
