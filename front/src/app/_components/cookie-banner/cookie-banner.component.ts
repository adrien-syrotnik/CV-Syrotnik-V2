import { Component, ElementRef, OnInit } from "@angular/core";
import { Gtag } from "angular-gtag";

declare let gtag:Function;

@Component({
    selector: 'app-cookie-banner',
    templateUrl: './cookie-banner.component.html',
    styleUrls: ['./cookie-banner.component.scss']
  })
  export class CookieBannerComponent {


    constructor(private gtag: Gtag, private container: ElementRef) {

        this.checkCookieConsent();

        //Test event
        // gtag.event('test_event', {
        //     'event_category': 'test_category',
        //     'event_label': 'test_label',
        //     'value': 'test_value'
        // });

    }

    public AcceptCookie() {
        this.setCookieConsent();
    }

    public RefuseCookie() {
        this.hideCookieBanner();
    }

    // // Vérifier si l'utilisateur a accepté les cookies
    private checkCookieConsent() {
        if (localStorage.getItem("cookieConsent")) {
            this.consentGranted();
        }
    }

    // Enregistrer le consentement de l'utilisateur pour les cookies
    private setCookieConsent() {
        localStorage.setItem("cookieConsent", "true");
        this.consentGranted();
    }

    // Masquer la bannière d'acceptation des cookies
    private hideCookieBanner() {
        this.container.nativeElement.style.display = "none";
    }

    private consentGranted() {
        //console.log("Consent granted");
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
        });
        this.hideCookieBanner();
    }
  
  }


