import { DonationItem } from "../models/DonationItem";
import Axios from "axios";
import { BackendURI } from "./definitions/backend";

enum DonationItemRoute {
  GetAllDonationItems = "/donationItems",
  GetDonationItemById = "/donationItemById"
}

export class DonationItemService {

  public static async getAllDonationItems(): Promise<DonationItem[]> {
    const response = await Axios.get(BackendURI + DonationItemRoute.GetAllDonationItems);
    return response.data;
  }

  public static async getDonationItemById(id: string | undefined | Partial<DonationItem>): Promise<any> {
    const response = await Axios.get(BackendURI + DonationItemRoute.GetDonationItemById, {
      params: {
        donationItemId: id
      }
    });
    return response.data;
  }
}
