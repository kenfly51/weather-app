import { fireEvent, render } from "@testing-library/react";
import SearchInput from "../SearchInput";
import * as hooks from "../../hooks/useForecast";

describe("SearchInput", () => {
  const onSearchResult = jest.fn();

  it("should render SearchInput correctly", () => {
    const { container } = render(
      <SearchInput onSearchResult={onSearchResult} />
    );

    expect(container).toMatchSnapshot();
  });

  it("trigger search when user hit enter", () => {
    const getForecastData = jest.fn();
    jest
      .spyOn(hooks, "useForecast")
      .mockImplementation(() => [
        { loading: false, result: null },
        getForecastData,
      ]);

    const { container, getByTestId } = render(
      <SearchInput onSearchResult={onSearchResult} />
    );
    const input = getByTestId("search-input");
    fireEvent.keyUp(input, {
      key: "Enter",
      target: {
        value: "text",
      },
    });
    expect(container).toMatchSnapshot();
    expect(getForecastData).toHaveBeenCalledWith("text");
  });

  it("should not trigger search when user is searching", () => {
    const getForecastData = jest.fn();
    jest
      .spyOn(hooks, "useForecast")
      .mockImplementation(() => [
        { loading: true, result: [] },
        getForecastData,
      ]);

    const { container, getByTestId } = render(
      <SearchInput onSearchResult={onSearchResult} />
    );
    const input = getByTestId("search-input");
    fireEvent.keyUp(input, {
      key: "Enter",
      target: {
        value: "text",
      },
    });
    expect(container).toMatchSnapshot();
    expect(getForecastData).not.toHaveBeenCalled();
  });

  it("should not trigger search when search text is empty", () => {
    const getForecastData = jest.fn();
    jest
      .spyOn(hooks, "useForecast")
      .mockImplementation(() => [
        { loading: false, result: [] },
        getForecastData,
      ]);

    const { getByTestId } = render(
      <SearchInput onSearchResult={onSearchResult} />
    );
    const input = getByTestId("search-input");
    fireEvent.keyUp(input, {
      key: "Enter",
      target: {
        value: "",
      },
    });

    expect(getForecastData).not.toHaveBeenCalled();
  });

  it("fire onSearchResult when data avaibale", () => {
    const getForecastData = jest.fn();
    const data = [
      {
        id: Date.now,
        date: new Date("2021-01-26"),
        min: 11.2,
        max: 11.9,
        state: "state",
        stateAbbr: "ste",
      },
    ];
    jest.spyOn(hooks, "useForecast").mockImplementation(() => [
      {
        loading: false,
        result: data,
      },
      getForecastData,
    ]);
    render(<SearchInput onSearchResult={onSearchResult} />);

    expect(onSearchResult).toHaveBeenCalledWith(data);
  });
});
