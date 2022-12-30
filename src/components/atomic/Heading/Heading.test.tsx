import { render } from "../../../../__tests__/utils";
import { Heading } from "./Heading";

describe("#Heading", () => {
  it("Should be render", () => {
    const { getByText } = render(<Heading>Hello World</Heading>);
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("Should be make polymorphism correctly", () => {
    const { getByRole } = render(<Heading as="h3">Hello World</Heading>);

    expect(getByRole("heading", { level: 3 })).toBeInTheDocument();
  });
});
