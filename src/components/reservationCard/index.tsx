import { FC, memo } from "react";
import { useDispatch } from 'react-redux';
import { removeReservationAction } from "../../redux/features/reservationSlice";
interface IReservationCardProps {
  value: string
  index: number
}

const ReservationCard: FC<IReservationCardProps> = memo(({ value, index }: IReservationCardProps) => {
  const dispatch = useDispatch();
  return (
    <div className="reservation-card-container" onClick={() => dispatch(removeReservationAction(index))}>{value}</div>
  )
});

export default ReservationCard;