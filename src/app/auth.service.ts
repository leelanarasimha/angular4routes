import {reject} from "q";
/**
 * Created by TeK7_Sys30 on 15-05-2017.
 */

export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }
    login() {
        this.loggedIn = true;
        return this.loggedIn;
    }

    logout() {
        this.loggedIn = false;
    }
}
