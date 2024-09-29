import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/pages/root';
import { Book } from '@/pages/Book';
import { ErrorElement } from '@/components/ErrorElement';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
  },
  {
    path: 'books',
    element: <Book />,
    errorElement: <ErrorElement />,
  },
]);
