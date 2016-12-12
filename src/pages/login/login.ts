import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { InAppBrowser } from "ionic-native";

@Component({
    selector: "page-login",
    templateUrl: "login.html"
})
export class LoginPage {
    private urlOauth = {
        facebook: "https://m.facebook.com/",
        instagram: "https://www.instagram.com/accounts/login/?hl=es",
        twitter: "https://mobile.twitter.com/session/new",
        googlePlus: "https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://plus.google.com/collections/featured&followup=https://plus.google.com/collections/featured#identifier"
    };
    public usuarioLogeado: boolean;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) { 
        this.usuarioLogeado = false;
    }

    iniciarSesion() {
        this.loadingCtrl
            .create({
                content: "Cargando...",
                duration: 1000
            })
            .present();
        this.usuarioLogeado = true;
    }

    abrirFacebook() {
        this.abrirNavegador(this.urlOauth.facebook);
    }

    abrirInstagram() {
        this.abrirNavegador(this.urlOauth.instagram);
    }

    abrirTwitter() {
        this.abrirNavegador(this.urlOauth.twitter);
    }

    abrirGooglePlus() {
        this.abrirNavegador(this.urlOauth.googlePlus);
    }

    private abrirNavegador(urlPagina) {
        new InAppBrowser(urlPagina, "_system");
    }
}