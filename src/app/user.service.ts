import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    constructor(private http: HttpClient) { }
    baseUrl: any = 'http://localhost:3000/users';

    getUsers() {
        return this.http.get<User[]>(this.baseUrl);
    }

    deleteUser(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
    }

    createUser(user: User) {
        return this.http.post(this.baseUrl, user);
    }

    getUserById(idUser) {
        return this.http.get<User>(this.baseUrl + '/' + idUser);
    }

    updateUser(user: User) {
        return this.http.put(this.baseUrl + '/' + user.id, user);
    }

}
