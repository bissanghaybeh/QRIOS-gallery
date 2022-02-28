import React from 'react';
import Gallery from "../../Gallery/Gallery";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ImagePopup from '../../ImagePopup/ImagePopup';

test("Popup opens with correct props", () => {
    render(<Gallery/>);
    const popupContainer =  screen.getByTestId('popupcontainer');
    const listItem =  screen.getAllByRole("figure", { class: 'gallery-grid__item'});

    const popup = render(<ImagePopup />);

    fireEvent.click(listItem[0]);
    const img = popup.getAllByTestId('image');
    const desc = popup.getAllByTestId('desc');
    expect(img[0]).toHaveAttribute('src', 'https://via.placeholder.com/200x150.png');
    expect(desc[0].textContent).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry');
});


