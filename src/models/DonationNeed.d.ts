import { Manager } from "./Manager";
import { DonationItem } from "./DonationItem";

export interface DonationNeed {
  dateCreationDate: Date;
  donationItem: DonationItem;
  itemQuantity: number;
  manager: Manager;
}
