import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { DonationNeed } from "../models/DonationNeed";

enum DonationNeedRoute {
  GetAllDonationNeeds = "/donationNeeds",
  CreateDonationNeed = "/createDonationNeed"
}

export class DonationNeedService {

  public static async getAllDonationNeeds(): Promise<DonationNeed[]> {
    const response = await Axios.get(BackendURI + DonationNeedRoute.GetAllDonationNeeds);
    return response.data;
  }

  public static async createDonationNeed(donationNeed: Partial<DonationNeed>): Promise<DonationNeed> {
    const response = await Axios.post(BackendURI + DonationNeedRoute.CreateDonationNeed, donationNeed);
    return response.data;
  }
}
