import { Outlet } from 'react-router-dom';
export const Root = () => {
  return (
    <div className="wrapper">
      <header>
        <h1>Общий header</h1>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <div>Общий footer</div>
    </div>
  );
};
