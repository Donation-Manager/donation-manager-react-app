import { Giver } from "./Giver";

export interface DonationIntention {
  _id: string;
  collectFromGiver: boolean;
  collectDate: Date;
  description: string;
  giver: Giver;
}
