import { Manager } from "./Manager";

export interface DonationNeed {
  dateCreationDate: Date;
  itemName: string;
  itemDescription: string;
  itemQuantity: number;
  manager: Manager;
}
