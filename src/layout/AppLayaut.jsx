import { DrawerOffcanvas } from '@/components/ui-components/Offcanvas';
import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';

export const OffcanvasContext = createContext();
const AppLayout = () => {
  const [open, setOpen] = React.useState(false);

  const closeDrawer = () => setOpen(false);
  return (
    <OffcanvasContext.Provider value={{ open, setOpen, closeDrawer }}>
      <Outlet />
    </OffcanvasContext.Provider>
  );
};

export default AppLayout;