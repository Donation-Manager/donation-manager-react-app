import { Donation } from "../models/Donation";
import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { DonationIntention } from "../models/DonationIntention";

enum DonationIntentionRoute {
  GetAllDonationIntentions = "/donationIntentions",
  CreateDonationIntention = "/createDonationIntention"
}

export class DonationService {

  public static async getAllDonationIntentions(): Promise<DonationIntention[]> {
    const response = await Axios.get(BackendURI + DonationIntentionRoute.GetAllDonationIntentions);
    return response.data;
  }

  public static async createDonationIntention(donationIntention: DonationIntention): Promise<Donation[]> {
    const response = await Axios.post(BackendURI + DonationIntentionRoute.CreateDonationIntention, donationIntention);
    return response.data;
  }
}
