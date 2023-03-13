import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Navbar } from "widgets/Navbar";
describe("Navbar", () => {
    test("test toggle", () => {
        componentRender(<Sidebar collapsed={true} />);
        componentRender(<Navbar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
