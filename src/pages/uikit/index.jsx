import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Uikit = () => {
  const location = useLocation();
  const [value, setValue] = useState(() => {
    if (location.pathname.includes('item-one')) return 0;
    if (location.pathname.includes('item-two')) return 1;
    if (location.pathname.includes('item-three')) return 2;
    return 0;
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab component={Link} to="form" label="form" />
          <Tab component={Link} to="item-two" label="Item Two" />
          <Tab component={Link} to="item-three" label="Item Three" />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
};
