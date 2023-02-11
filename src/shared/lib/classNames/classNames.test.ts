import { cn } from "./classNames";

describe("classNames", () => {
    test("with first param", () => {
        expect(cn("class")).toBe("class");
    });

    test("with additional classes", () => {
        expect(cn("class", {}, ["class-2", "class-3"])).toBe("class class-2 class-3");
    });

    test("with mods", () => {
        expect(cn("class", { hovered: true, focus: false }, ["class-2", "class-3"])).toBe("class hovered class-2 class-3");
    });
});
