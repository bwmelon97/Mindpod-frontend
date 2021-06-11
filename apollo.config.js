module.exports = {
    client: {
      service: {
        name: 'github',
        url: 'https://mindpod-backend.herokuapp.com/graphql',
      },
      includes: ['./src/**/*.tsx', './src/**/*.ts'],
      tagName: "gql",
    }
  };