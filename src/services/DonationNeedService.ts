import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { DonationNeed } from "../models/DonationNeed";

enum DonationNeedRoute {
  GetAllDonationNeeds = "/donationNeeds",
  CreateDonationNeed = "/createDonationNeed",
  GetDonationNeedById = "/donationNeedById"
}

export class DonationNeedService {

  public static async getAllDonationNeeds(): Promise<DonationNeed[]> {
    const response = await Axios.get(BackendURI + DonationNeedRoute.GetAllDonationNeeds);
    return response.data;
  }

  public static async createDonationNeed(donationNeed: any): Promise<DonationNeed> {
    const response = await Axios.post(BackendURI + DonationNeedRoute.CreateDonationNeed, donationNeed);
    return response.data;
  }

  public static async getDonationNeedById(id: string): Promise<DonationNeed | null> {
    const response = await Axios.get(BackendURI + DonationNeedRoute.GetDonationNeedById, {
      params: {
        donationNeedId: id
      }
    });
    return response.data;
  }
}
