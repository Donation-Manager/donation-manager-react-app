import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { Giver } from "../models/Giver";

enum GiverRoute {
  GetGiver = "/getGiver",
  GetLoggedGiver = "/getLoggedGiver"
}

export class GiverService {

  public static async getGiver(email: string): Promise<Giver> {
    const params = {
      params: {
        email
      }
    }
    const response = await Axios.get(BackendURI + GiverRoute.GetGiver, params);
    return response.data;
  }

  public static async getLoggedGiver(): Promise<Giver> {
    const response = await Axios.get(BackendURI + GiverRoute.GetLoggedGiver);
    return response.data;
  }
}
