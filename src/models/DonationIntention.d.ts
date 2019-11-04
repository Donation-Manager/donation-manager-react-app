import { Giver } from "./Giver";

export interface DonationIntention {
  collectFromGiver: boolean;
  collectDate: Date;
  description: string;
  giver: Giver;
}
