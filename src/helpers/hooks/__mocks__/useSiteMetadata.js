const mock = jest.fn().mockImplementation(() => {
  return {
    siteTitle: 'Trig',
    siteDescription: 'Knowledge Management for Teams',
    siteUrl: 'https://trytrig.com',
    themeColor: '#2C2929',
    social: {
      twitter: 'gatsbyjs',
      fbAppId: '966242223397117',
    },
  };
});

export default mock;
