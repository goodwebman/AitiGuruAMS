import { selectIsAuthorized } from '@/entities/session';
import { ROUTES } from '@/shared/config/routes/routes';
import { useAppSelector } from '@/shared/store/redux-store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PrivateOutlet = () => {
  const location = useLocation();
  const isAuth = useAppSelector(selectIsAuthorized);

  if (!isAuth) {
    return <Navigate to={ROUTES.AUTH} state={{ from: location }} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
