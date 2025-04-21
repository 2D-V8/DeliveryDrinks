import { Axios, AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDrinks } from "../sources/remote/api/ApiDrinks";
import { ResponsesApiDrinks } from "../sources/remote/models/ResponsesApiDrinks";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User): Promise<ResponsesApiDrinks> {
        try {

            const response = await ApiDrinks.post<ResponsesApiDrinks>('/users/create', user);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' +JSON.stringify(e.response?.data));
            const apiError:ResponsesApiDrinks = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

}