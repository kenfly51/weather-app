import { render } from "@testing-library/react";
import WeatherItem from "../WeatherItem";

describe("WeatherItem", () => {
  it("should render WeatherItem correctly", () => {
    const { container } = render(
      <WeatherItem
        item={{
          date: new Date("2021-01-26"),
          min: 11.2,
          max: 11.9,
          state: "state",
          stateAbbr: "ste",
        }}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
