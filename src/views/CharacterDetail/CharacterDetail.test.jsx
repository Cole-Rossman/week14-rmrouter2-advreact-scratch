import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from '../../App';

describe('<CharacterDetail />', () => {
  it('renders selected character details', async () => {
    render(
        <MemoryRouter
        initialEntries={["/character/16"]}
        initialIndex={15}
        >
            <App />
        </MemoryRouter>
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i)); 

    const image = await screen.findByAltText('Image of Amish Cyborg');
    expect(image).toBeInTheDocument();

    const name = await screen.findByText(/amish cyborg/i);
    expect(name).toBeInTheDocument();

    const species = await screen.findByText(/alien/i);
    expect(species).toBeInTheDocument();

    const status = await screen.findByText(/dead/i);
    expect(status).toBeInTheDocument();

    const listLink = await screen.findByText(/back to character list/i); 
    userEvent.click(listLink);
  });
});