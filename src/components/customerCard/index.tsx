import { FC, memo, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { addFoodtoCustomerAction } from "../../redux/features/customerSlice";

interface ICustomerCardProps {
  id: string,
  name: string,
  food: string[]
}

const CustomerCard: FC<ICustomerCardProps> = memo(({ id, food, name }) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null)
  const handleFoodAdd = useCallback(() => {
    if (inputRef.current) {
      const { value } = inputRef.current;
      dispatch(addFoodtoCustomerAction({ id, name: value }))
    }
  }, [])

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        {food.map(_food => (
          <div className="customer-food">{_food}</div>
        ))}
        <div className="customer-food-input-container">
          <input ref={inputRef} />
          <button onClick={handleFoodAdd}>Add</button>
        </div>
      </div>
    </div>
  )
});

export default CustomerCard;