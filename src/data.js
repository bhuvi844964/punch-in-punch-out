import React from 'react';
import {
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms
} from 'react-icons/fa';

import { VscAccount } from "react-icons/vsc";

export const links = [
  {
    id: 1,
    url: '/list',
    text: 'users',
    icon: <VscAccount />,
  },
  {
    id: 2,
    url: '/attendance',
    text: 'all attendance',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

