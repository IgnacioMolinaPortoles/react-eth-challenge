import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';
import data from '../../__mocks__/styleMock'

describe('<About />', () => {
  const about = shallow(
    <About
      data={{
        profession: data.profession,
        email: data.email,
        phone: data.phone,
        website: data.website,
        address: data.address,
      }}
    />
  );

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });
});
