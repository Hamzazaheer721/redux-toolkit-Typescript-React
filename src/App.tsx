import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./App.css";
import ReservationCard from "./components/reservationCard";
import { addReservationAction } from "./redux/features/reservationSlice";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.reservations);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {value.map((_val) => (
                <ReservationCard key={_val + Math.random()} value={_val} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input ref={inputRef} />
            <button onClick={() => inputRef.current && inputRef.current.value && dispatch(addReservationAction(inputRef.current.value))}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

