import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { Manager } from "../models/Manager";

enum ManagerRoute {
  GetManager = "/getManager",
  GetLoggedManager = "/getLoggedManager"
}

export class ManagerService {

  public static async getManager(email: string): Promise<Manager> {
    const params = {
      params: {
        email
      }
    }
    const response = await Axios.get(BackendURI + ManagerRoute.GetManager, params);
    return response.data;
  }

  public static async getLoggedManager(): Promise<Manager> {
    const response = await Axios.get(BackendURI + ManagerRoute.GetLoggedManager);
    return response.data;
  }
}
