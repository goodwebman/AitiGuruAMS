import { Outlet } from 'react-router-dom';


export const PrivateOutlet = () => {
    //todo Private logic
  return (
    <div>
      <Outlet />
    </div>
  );
};