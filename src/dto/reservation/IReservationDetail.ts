import IPassenger from '../passenger/IPassenger';
import IReservationIdentifier from './IReservationIdentifier';

export default interface IReservationDetail extends IReservationIdentifier {
	readonly passengers: IPassenger[];
}
