/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d605c94f4f9e97325c0f662
*
* You will get 10% discount for each one of your friends
* 
*/
import { UserBase } from './base/user.base';

/**
 * YOU CAN OVERRIDE HERE UserBase.ts
 */
export class User extends UserBase {

    // Insert here your custom attributes and function

    // Functions for User

    public token: string;

    constructor(
        _id?: string,
        username?: string,
        token?: string,
        roles?: string[]
    ) {
        super();
        this._id = _id;
        this.username = username;
        this.token = token;
        this.roles = roles;
    }

    // UTILS FUNCTIONS

    /**
     * Check if logged user is admin
     */
    isAdmin(): boolean {
        if (!this.roles)
            return false;
        return this.roles.indexOf('ADMIN') === 0;
    }

    /**
     * Check if logged user has one role
     */
    hasRole(role: string | Array<string>): boolean {
        if (!this.roles) return false;

        if (typeof role === 'string') {
            return (this.roles.indexOf(role) !== -1);
        } else {
            const found = role.filter(rol => {
                return (this.roles.indexOf(rol) !== -1);
            });
            return found.length > 0;
        }
    }
}