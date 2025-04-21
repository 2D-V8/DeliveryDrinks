import { ResponsesApiDrinks } from "../../Data/sources/remote/models/ResponsesApiDrinks";
import { User } from "../entities/User";

export interface AuthRepository {
    register(user: User): Promise<ResponsesApiDrinks>
}