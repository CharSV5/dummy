// const users = [{
//   id: 222,
//   username: "funnyguy",
//   email: "theRealSlimRicky@hotmail.com",
//   password: "12345",
//   firstName: "Ricky",
//   lastName: "Hewitt",
//   accomodations: [
//     {
//       accomodationId: 111,
//       accomodationName: "myHouseInTheMiddleOfOurStreet"
//     }
//   ]
// }]

const accomodations = [
  {
    id: 1,
    hostId: 1,
    hostName: "theRealSlimRicky",
    house: "myhouse"
    street: "big street",
    city: "Southend"
    description: "great place",
    bedrooms: 5,
    bathrooms: 2,
    reviews: [
      {
        rating: 4
        text: 'I liked it'
      },
      {
        rating: 4
        text: 'I liked it'
      }
    ],
    images: [
      'url',
      'url'
    ],
    price: 10,
    bookings: [
      {
        start: '10th Feb'
        end: '12th Feb'
      },
      {
        start: '18th Feb'
        end: '21st Feb'
      }
    ]
  },
  {
    id: 2,
    hostId: 1,
    hostName: "theRealSlimRicky",
    house: "myhouse",
    street: "terrible street",
    city: "Southhampton",
    description: "shit place",
    price: 10,
    numberOfRooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    reviews: [
      {
        rating: 2
        text: 'unclean'
      },
      {
        rating: 2
        text: 'bad'
      }
    ],
    images: [
      'url',
      'url'
    ],
    bookings: [
      {
        start: '1st March'
        end: '12th March'
      },
      {
        start: '18th March'
        end: '21st March'
      }
    ]
  }
]
