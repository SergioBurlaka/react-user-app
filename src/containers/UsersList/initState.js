


const mockUsers = [
  {
    id: 1,
    first_name: 'Jhon',
    last_name: 'Doe',
    birth_date: '1991-11-22',
    gender: 'male',
    job: 'builder',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    is_active: true,
  },
  {
    id: 2,
    first_name: 'Rouse',
    last_name: 'Ganmle',
    birth_date: '1992-11-22',
    gender: 'female',
    job: 'sex worker',
    biography: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    is_active: true,

  },
  {
    id: 3,
    first_name: 'Kate',
    last_name: 'Korablina',
    birth_date: '1993-11-22',
    gender: 'female',
    job: 'model',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    is_active: false,

  },
]

export default {
  users: mockUsers,
  currentUser: null,
  currentUserId: null,


}