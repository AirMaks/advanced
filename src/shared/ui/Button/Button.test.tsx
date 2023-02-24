import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

describe("Button", () => {
    test("button in document", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    test("button has class", () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
        screen.debug();
    });
});
