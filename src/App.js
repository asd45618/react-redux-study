import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "kkm", password: "123" } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 2 } });
  };

  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>버튼</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소</button>
      <Box />
    </div>
  );
}

export default App;
