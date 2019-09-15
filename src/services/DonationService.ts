import { Donation } from "../models/Donation";
import Axios from "axios";
import { BackendURI } from "./definitions/backend";

enum DonationRoute {
  GetAllDonations = "/donations"
}

export class DonationService {

  public static async getAllDonations(): Promise<Donation[]> {
    const response = await Axios.get(BackendURI + DonationRoute.GetAllDonations);
    return response.data;
  }
}
