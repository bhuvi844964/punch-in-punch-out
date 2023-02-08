import React from 'react';
import { FaUserFriends} from 'react-icons/fa';

import { VscAccount } from "react-icons/vsc";
import { GiPunchBlast } from "react-icons/gi";
export const links = [
  {
    id: 1,
    url: '/list',
    text: 'profile',
    icon: <VscAccount />,
  },
  {
    id: 2,
    url: `/attendance/${localStorage.getItem("id")}`,
    text: 'all attendance',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/punch',
    text: 'punch',
    icon: <GiPunchBlast />,
  },
  
];

