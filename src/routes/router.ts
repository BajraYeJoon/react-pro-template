import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const Home = await import("../pages/home");
      return { Component: Home.default };
    },
  },
]);
