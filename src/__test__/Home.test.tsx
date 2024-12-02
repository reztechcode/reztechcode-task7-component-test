import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/Home";

describe("Home Page", () => {
    it("renders the heading correctly", () => {
        render(<Home />);
        const headingElement = screen.getByRole("heading", {
            name: /i`m web developer based in sukabumi/i,
        });
        expect(headingElement).toBeInTheDocument();
    });

    it("renders the introduction text correctly", () => {
        render(<Home />);
        const introText = screen.getByText(/hi everyone 👋, i'm irez abdullah/i);
        expect(introText).toBeInTheDocument();
    });

    it("renders the 'See More' button with correct link", () => {
        render(<Home />);
        const seeMoreButton = screen.getByRole("link", { name: /see more/i });
        expect(seeMoreButton).toHaveAttribute("href", "https://rezweb.my.id");
        expect(seeMoreButton).toHaveAttribute("target", "_blank");
    });

    it("renders the LinkedIn link with correct icon", () => {
        render(<Home />);
        const linkedInLink = screen.getByRole("link", { name: "LinkedIn" });
        expect(linkedInLink).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/irez-abdullah/"
        );
    });


    it("renders the image with correct attributes", () => {
        render(<Home />);
        const imgElement = screen.getByAltText("Portrait of Irez Abdullah");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute(
            "src",
            "https://res.cloudinary.com/dg6ktaklq/image/upload/v1732230457/irez-xupbb1_nidp7f.jpg"
        );
    });
});
