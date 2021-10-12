import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./App.css";
import CustomerCard from "./components/customerCard";
import ReservationCard from "./components/reservationCard";
import { addReservationAction } from "./redux/features/reservationSlice";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const { value: reservatonValue } = useSelector((state: RootState) => state.reservations);
  const { value: customerValue } = useSelector((state: RootState) => state.customers)
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservatonValue.map((_val, index) => (
                <ReservationCard key={index} value={_val} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input ref={inputRef} />
            <button onClick={() => inputRef.current && inputRef.current.value && dispatch(addReservationAction(inputRef.current.value))}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customerValue.map((_val) => (
            <CustomerCard id={_val.id} name={_val.name} food={_val.food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

