import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { User } from "../models/User";

enum UserRoute {
  GetLoggedUser = "/getLoggedUser"
}

export class UserService {

  public static async getLoggedUser(): Promise<User> {
    const response = await Axios.get(BackendURI + UserRoute.GetLoggedUser);
    return response.data;
  }
}
