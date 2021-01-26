import { fireEvent, render } from "@testing-library/react";
import App from "../App";

jest.mock("../components/SearchInput", () => ({ onSearchResult }) => (
  <button
    data-testid="search-button"
    onClick={() =>
      onSearchResult([
        {
          id: Date.now,
          date: new Date("2021-01-26"),
          min: 11.2,
          max: 11.9,
          state: "state",
          stateAbbr: "ste",
        },
      ])
    }
  >
    Search
  </button>
));

describe("App", () => {
  it("should render empty forecast data if there is no data", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it("should render forecast data if data available", () => {
    const { container, getByTestId } = render(<App />);
    const button = getByTestId("search-button");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});
