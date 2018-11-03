import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class SessionService {

    private api = {
        sessionID: "",
        actualPath: "",
        userInfo: {
        }
    }
    constructor() {
        let localSession = localStorage.getItem("session")
        if (localSession) {
            this.api = JSON.parse(localSession)
        }
    }
    set sessionID(sessionID) {
        this.api.sessionID = sessionID
        localStorage.setItem("session", JSON.stringify(this.api))
    }
    get sessionID() {
        return this.api.sessionID
    }
    set actualPath(actualPath) {
        this.api.actualPath = actualPath
        localStorage.setItem("session", JSON.stringify(this.api))
    }
    get actualPath() {
        return this.api.actualPath
    }
    set userInfo(userinfo) {
        this.api.userInfo = userinfo
        localStorage.setItem("session", JSON.stringify(this.api))
    }
    get userInfo() {
        return this.api.userInfo
    }
    clearSession() {
        this.api.sessionID = ""
        this.api.userInfo = { name: "", email: "", phoneNo: null }
        this.api.actualPath = "";
        localStorage.removeItem("session")
        return true;
    }
}

