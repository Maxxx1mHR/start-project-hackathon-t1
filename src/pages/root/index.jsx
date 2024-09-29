import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  decrement,
  increment,
  fetchData,
  addPerson,
} from '@/redux/slices/counter/counterSlice';
import { useEffect } from 'react';

export const Root = () => {
  const { value, items, status, error } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(addPerson({ name: 'Max' }));
  }, []);

  useEffect(() => {
    // dispatch(fetchData());
  }, []);

  console.log(items);
  console.log(status);
  console.log(error);

  return (
    <>
      <Link to="/books">books</Link>
      <div>Count: {value}</div>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
    </>
  );
};
