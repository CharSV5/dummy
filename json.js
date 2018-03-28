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
    name: "myHouseInTheMiddleOfOurStreet",
    address: "25 aldgate",
    description: "great place",
    numberOfRooms: 4,
    images: [
      'url',
      'url'
    ]
    price: 10,
    unavailabe: [
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
    address: "26 aldgate",
    description: "shit place",
    price: 10,
    numberOfRooms: 5,
    images: [
      'url',
      'url'
    ]
    unavailabe: [
      {
        start: '1st March'
        end: '12th March'
      },
      {
        start: '18th March'
        end: '21st March'
      }
    ]
  },
  {
    id: 3,
    hostId: 2,
    hostName: "Alfie",
    address: "44 Bethanal Green",
    description: "crib",
    price: 10,
    numberOfRooms: 5,
    images: [
      'url',
      'url',
      'url',
      'url'
    ]
    unavailabe: [
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
