
window.fbAsyncInit = function () {
    FB.init({
        appId: '318287612189770',
        cookie: true,
        xfbml: true,
        version: 'v3.2'
    });

    FB.AppEvents.logPageView();

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export function Login() {
    return new Promise((resolve) => {
        FB.login(function (response, reject) {
            //handle response
            console.log(response);
            if (response.status === "connected") {
                FB.api("me?fields=id,email", response2 => {
                    resolve(response2);
                });
            } else {
                rejec(Error("User did not log in"));
            }
        }, { scope: 'public_profile,email' }); //list of data that you're requesting to access
    })
}