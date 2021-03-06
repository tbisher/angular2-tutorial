import {Http} from "@angular/http";
import {Injectable, Inject} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    private BASE_URL:string = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http:Http) {
    }

    list() {
        return this._http.get(`${this.BASE_URL}`)
            .map(result => result.json());
    }

    get(userId:string) {
        return this._http.get(`${this.BASE_URL}/${userId}`)
            .map(result => result.json());
    }
}