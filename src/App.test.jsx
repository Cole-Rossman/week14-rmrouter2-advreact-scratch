import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe('<App />', () => {
  it(`renders a list of Rick and Morty Characters from api`, async () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const characterDetailLink = await screen.findByText(/morty smith/i);
    userEvent.click(characterDetailLink);

    await screen.findByAltText('Image of Morty Smith');

    await screen.findByText('Species: Human');

    await screen.findByText('Status: Alive');
  });
});