import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { DonationIntention } from "../models/DonationIntention";

enum DonationIntentionRoute {
  GetAllDonationIntentions = "/donationIntentions",
  CreateDonationIntention = "/createDonationIntention",
  AcceptDonation = "/acceptDonation",
  RejectDonation = "/rejectDonation",
  GetApprovedDonations = "/approvedDonationsIntentions"
}

export class DonationIntentionService {

  public static async getAllDonationIntentions(): Promise<DonationIntention[]> {
    const response = await Axios.get(BackendURI + DonationIntentionRoute.GetAllDonationIntentions);
    return response.data;
  }

  public static async createDonationIntention(donationIntention: object): Promise<DonationIntention[]> {
    const response = await Axios.post(BackendURI + DonationIntentionRoute.CreateDonationIntention, donationIntention);
    return response.data;
  }

  public static async acceptIntention(donationIntention: any): Promise<any> {
    const response = await Axios.post(BackendURI + DonationIntentionRoute.AcceptDonation, donationIntention, {
      params: {
        intentionId: donationIntention._id
      }
    });
    return response.data;
  }

  public static async rejectIntention(donationIntention: any): Promise<any> {
    const response = await Axios.post(BackendURI + DonationIntentionRoute.RejectDonation, donationIntention, {
      params: {
        intentionId: donationIntention._id
      }
    });
    return response.data;
  }

  public static async getApprovedDonationIntentions(): Promise<DonationIntention[]> {
    const response = await Axios.get(BackendURI + DonationIntentionRoute.GetApprovedDonations);
    return response.data;
  }
}
