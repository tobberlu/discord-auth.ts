import {AccessToken} from "./interfaces/user/accessToken";
import {Endpoints} from "./enums/endpoints";

export class User {

    public accessToken: AccessToken = <AccessToken>{};
    constructor(private _accessToken: AccessToken) {
        this.accessToken = _accessToken;
    }

    public getAccessToken(): AccessToken {
        return this.accessToken;
    }

    public async sendRequest(endpoint: Endpoints, method: string): Promise<any> {

        let response = await fetch(endpoint, {
            method: method,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `${this.accessToken.token_type} ${this.accessToken.access_token}`
            }
        })
        return await response.json();
    }

}