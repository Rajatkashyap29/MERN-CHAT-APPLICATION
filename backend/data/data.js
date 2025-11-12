const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Rajat",
        email: "rajat@example.com",
      },
      {
        name: "Rishav",
        email: "rishav@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Rajat",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Ritik",
        email: "ritik@example.com",
      },
      {
        name: "Rishav",
        email: "rishav@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Ritik",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Harsh",
        email: "harsh@example.com",
      },
      {
        name: "Rishav",
        email: "rishav@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Harsh",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Rajat",
        email: "rajat@example.com",
      },
      {
        name: "Rishav",
        email: "rishav@example.com",
      },
      {
        name: "Ritik",
        email: "ritik@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Ritik",
      email: "ritik@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Harsh",
        email: "harsh@example.com",
      },
      {
        name: "Rishav",
        email: "rishav@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Harsh",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Rajat",
        email: "rajat@example.com",
      },
      {
        name: "Rishav",
        email: "rishav@example.com",
      },
      {
        name: "Ritik",
        email: "ritik@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Rajat",
      email: "rajat@example.com",
    },
  },
];

module.exports = { chats };
