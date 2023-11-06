export const getCarId = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
    }
  }
`;

export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      User {
        id
        name
        phone_number
        email
        ratings
        createdAt
        updatedAt
        userCarId
        __typename
      }
      createdAt
      updatedAt
      carUserId
      __typename
    }
  }
`;
