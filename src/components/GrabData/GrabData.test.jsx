import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import GrabData from "./GrabData.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";
import { server } from "./Mocks/server";

// Helper to wrap with QueryClientProvider
const renderWithClient = (ui) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe("GrabData Component", () => {
  test("Displays loading state initially", () => {
    renderWithClient(<GrabData />);
    expect(screen.getByText(/fetching data/i)).toBeInTheDocument();
  });

  test("Renders data after successful API call", async () => {
    renderWithClient(<GrabData />);
    const title1 = await screen.findByText("Mock Post 1");
    const title2 = await screen.findByText("Mock Post 2");
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });

  test("Displays error message on failed API call", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/posts",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    renderWithClient(<GrabData />);
    const errorMsg = await screen.findByText(/error/i);
    expect(errorMsg).toHaveTextContent("Network response was not ok");
  });
});
