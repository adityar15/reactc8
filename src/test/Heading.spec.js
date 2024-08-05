import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from "../components/Heading";


describe("Heading component unit test", () => {
  test("renders heading", async () => {
    const { getByText } = render(<Heading content="Test heading" />);
    const headingElement = getByText("Test heading");
    expect(headingElement).toBeInTheDocument();
  });
});