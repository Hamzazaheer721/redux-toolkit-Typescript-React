import { FC, memo } from "react";

interface IReservationCardProps {
  value: string
}
const ReservationCard: FC<IReservationCardProps> = memo(({ value }: IReservationCardProps) => {
  return (
    <div className="reservation-card-container">{value}</div>
  )
});

export default ReservationCard;