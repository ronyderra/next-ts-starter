import React from 'react';
import {cleanup, render, waitForElement} from 'react-testing-library';
import {Body, Footer, Header, Lead} from '../components';
import Home from '../pages';

afterEach(cleanup);

describe('<Body />', async () => {
  it('renders children component', async () => {
    const {getByText} = render(
      <Body title={'Title'}>
        <div>Hello Felix</div>
      </Body>,
    );
    await waitForElement(() => getByText(/hello Felix/i));
  });
});

describe('<Footer/>', async () => {
  it('renders the footer', async () => {
    const {getByText} = render(<Footer />);
    await waitForElement(() => getByText(/sticky footer/i));
  });
});

describe('<Header />', async () => {
  it('renders the navbar', async () => {
    const {getByText} = render(<Header />);
    await waitForElement(() => getByText(/reactstrap/i));
  });
});

describe('<Home />', async () => {
  it('renders the navbar', async () => {
    const {getByText} = render(<Home />);
    await waitForElement(() => getByText(/reactstrap/i));
  });
});

describe('<Lead />', async () => {
  it('renders a lead text', async () => {
    const {getByText} = render(<Lead />);
    await waitForElement(() => getByText(/Pin a footer/i));
  });
});