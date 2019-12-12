import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { DonationIntention } from "../models/DonationIntention";

enum DonationIntentionRoute {
  GetAllDonationIntentions = "/donationIntentions",
  CreateDonationIntention = "/createDonationIntention",
  AcceptDonation = "/acceptDonation",
  RejectDonation = "/rejectDonation",
  GetApprovedDonations = "/approvedDonationsIntentions",
  ReceiveDonation = "/receiveDonation"
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

  public static async rejectIntention(donationIntention: any, reprovedReason: string): Promise<any> {
    const response = await Axios.post(BackendURI + DonationIntentionRoute.RejectDonation, donationIntention, {
      params: {
        intentionId: donationIntention._id,
        reprovedReason: reprovedReason
      }
    });
    return response.data;
  }

  public static async receiveDonation(donation: any): Promise<any> {
    const response = await Axios.post(BackendURI + DonationIntentionRoute.ReceiveDonation, donation, {
      params: {
        donationId: donation._id
      }
    });
    return response.data;
  }

  public static async getApprovedDonationIntentions(): Promise<DonationIntention[]> {
    const response = await Axios.get(BackendURI + DonationIntentionRoute.GetApprovedDonations);
    return response.data;
  }
}
