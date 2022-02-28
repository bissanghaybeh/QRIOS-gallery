import React from 'react';
import Gallery from "../Gallery";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ImagePopup from '../../ImagePopup/ImagePopup';
const togglePopup = jest.fn();
test("List works correctly", () => {
    render(<Gallery/>);
    const popupContainer =  screen.getByTestId('popupcontainer');
    const listItem =  screen.getAllByRole("figure", { class: 'gallery-grid__item'});

    const popup = render(<ImagePopup togglePopup={togglePopup}/>);
    const closeBtn = popup.getByTestId('closeBtn');
    expect(popupContainer.className).toBe('popupoverlay closed');
    fireEvent.click(listItem[0]);
    expect(popupContainer.className).toBe('popupoverlay open');
    fireEvent.click(closeBtn);
    expect(togglePopup).toHaveBeenCalledTimes(1);
});

