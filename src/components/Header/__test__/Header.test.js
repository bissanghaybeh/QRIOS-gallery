import React from 'react';
import Header from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test('Logo must have src = "/logo.png" and alt = "The gallery logo"', () => {
    render(<Header/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'logo.png');
    expect(logo).toHaveAttribute('alt', 'The gallery logo');
});