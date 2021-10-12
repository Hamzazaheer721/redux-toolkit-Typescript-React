import { FC, memo, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCustomerAction } from "../../redux/features/customerSlice";
import { removeReservationAction } from "../../redux/features/reservationSlice";
interface IReservationCardProps {
  value: string
  index: number
}

const ReservationCard: FC<IReservationCardProps> = memo(({ value, index }: IReservationCardProps) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(removeReservationAction(index));
    dispatch(addCustomerAction({
      id: uuidv4(),
      food: [],
      name: value
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="reservation-card-container" onClick={handleClick}>{value}</div>
  )
});

export default ReservationCard;