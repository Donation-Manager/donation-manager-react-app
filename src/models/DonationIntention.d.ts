import { Giver } from "./Giver";

export interface DonationIntention {
  _id: int;
  collectFromGiver: boolean;
  collectDate: Date;
  description: string;
  giver: Giver;
}
