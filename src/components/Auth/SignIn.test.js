// import React from "react";
// import { render, cleanup, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import SignIn from "./SingIn";
// import * as reactRedux from "react-redux";
// import "@testing-library/jest-dom/extend-expect";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";

// const data = {
//   token: "",
//   user: {
//     _id: "615559cf21d8c861693cf3f4",
//     username: "admin",
//     email: "admin@gmail.com",
//     type: "admin",
//     password: "admin1*",
//     createdAt: "2021-10-12T07:42:52.634+00:00",
//   },
// };

// const mockStore = {};

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// const useSelectorMock = reactRedux.useSelector;
// const useDispatchMock = reactRedux.useDispatch;

// afterEach(cleanup);

// describe("Sign in component", () => {
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

//   it("should fetch admin data from API", async () => {
//     const fakeResponse = data;
//     const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
//     const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
//     global.fetch = mockedFetch;
    
//     const { getByTestId } = render(
//       <Router history={history}>
//         <SignIn />
//       </Router>
//     );
//     const email = getByTestId("email");
//     const password = getByTestId("password");

//     userEvent.type(email, "admin@gmail.com");
//     userEvent.type(password, "admin1*");
//     userEvent.click(getByTestId("signin"));

//     expect(getByTestId("email")).toHaveValue("admin@gmail.com");
//     expect(getByTestId("password")).toHaveValue("admin1*");
//     await waitFor(() => {
//       expect(history.location.pathname).toBe("/profiles/");
//     });
//   });

//   it("should fetch admin data from API and get error", async () => {
//     const fakeResponse = { errors: [{ message: "Wrong password or email" }] };
//     const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
//     const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
//     global.fetch = mockedFetch;
//     const { getByText, getByTestId } = render(
//       <Router history={history}>
//         <SignIn />
//       </Router>
//     );
//     const email = getByTestId("email");
//     const password = getByTestId("password");

//     userEvent.type(email, "admine@gmail.com");
//     userEvent.type(password, "admin1*");
//     userEvent.click(getByTestId("signin"));

//     await waitFor(() => {
//       expect(getByText("Wrong email or password")).toBeInTheDocument();
//       expect(history.location.pathname).toBe("/profiles/");
//     });
//   });

//   it("should fetch user data from API", async () => {
//     const fakeResponse = {
//       token: "",
//       user: {
//         _id: "615c33299215cb7c1a02f0d4",
//         username: "user100",
//         email: "user100@gmail.com",
//         type: "user",
//         password: "user100*",
//       },
//     };
//     const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
//     const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
//     global.fetch = mockedFetch;
//     const { getByTestId } = render(
//       <Router history={history}>
//         <SignIn />
//       </Router>
//     );
//     const email = getByTestId("email");
//     const password = getByTestId("password");

//     userEvent.type(email, "user100@gmail.com");
//     userEvent.type(password, "user100*");
//     userEvent.click(getByTestId("signin"));

//     await waitFor(() => {
//       expect(history.location.pathname).toBe(
//         "/profiles/615c33299215cb7c1a02f0d4"
//       );
//     });
//   });
// });
