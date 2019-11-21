import Axios from "axios";
import { BackendURI } from "./definitions/backend";
import { StockItem } from "../models/StockItem";

enum StockItemRoute {
  GetAllStockItems = "/stockItems",
  CreateStockItem = "/createStockItem",
  GetStockItemById = "/stockItemById",
  DeleteStockItemById = "/deleteStockItemById"
}

export class StockItemService {

  public static async getAllStockItems(): Promise<StockItem[]> {
    const response = await Axios.get(BackendURI + StockItemRoute.GetAllStockItems);
    return response.data;
  }

  public static async createStockItem(stockItem: any): Promise<StockItem> {
    const response = await Axios.post(BackendURI + StockItemRoute.CreateStockItem, stockItem);
    return response.data;
  }

  public static async getStockItemById(id: string): Promise<StockItem | null> {
    const response = await Axios.get(BackendURI + StockItemRoute.GetStockItemById, {
      params: {
        stockItemId: id
      }
    });
    return response.data;
  }

  public static async deleteStockItemById(stockItemId: string): Promise<void> {
    const response = await Axios.post(BackendURI + StockItemRoute.DeleteStockItemById, { stockItemId });
    return response.data;
  }
}
