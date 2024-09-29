import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/pages/root';
import { Book } from '@/pages/Book';
import { ErrorElement } from '@/components/ErrorElement';
import { Uikit } from '@/pages/uikit';
import { CustomForm } from '@/pages/uikit/form';
import { AsyncSelect } from '@/pages/uikit/asyncSelect';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'books',
        element: <Book />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: 'uikit',
    element: <Uikit />,
    children: [
      {
        path: 'form',
        element: <CustomForm />,
      },
      {
        path: 'item-two',
        element: <AsyncSelect />,
      },
      {
        path: 'item-three',
        element: <AsyncSelect />,
      },
    ],
  },
]);
