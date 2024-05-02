import { AccessToken, Credentials, UserSessionToken, User } from './users.resources'

class AuthService {
    baseURL: string = 'http://localhost:8080/v1/users'
    static AUTH_PARAM: string = '_auth'

    async authenticate(credentials: Credentials) : Promise<AccessToken> {
        const response = await fetch(this.baseURL + "/auth", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(response.status == 401){
            throw new Error("User or password are incorrect!")
        }

        return await response.json();
    }

    async save(user: User) : Promise<void> {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log("Reposta Auth.save ", response);

        if(response.status == 409){
            const responserError = await response.json();
            throw new Error(responserError.error)
        }
    }
}

export const useAuth = () => new AuthService();