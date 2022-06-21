
// function Map123() {
//     let mapOptions = {
//         center: new google.maps.LatLng(50.4669, 4.86746),
//         zoom: 9,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     let map = new google.maps.Map(document.getElementById("map"), mapOptions);
// } 

// FORMULAIRE VERIFICATION

function VerifForm(form) {
    let nom = document.getElementById('form').identity.value;
    let mail = document.getElementById('form').mail.value;
    let reason = document.getElementById('form').reason.value;

    if (nom == "") {
        document.getElementById('error').innerHTML = 'Veuillez indiquer votre nom, email et demande !';
        document.getElementById('error').style.display = 'flex';
        document.getElementById('error').className = 'focus';
        form.identity.focus();

        return false;
    } else {
        document.getElementById('error').style.display = 'none';
    }

    if (mail == "") {
        document.getElementById('error').innerHTML = 'Veuillez indiquer votre e-mail et demande !';
        document.getElementById('error').style.display = 'flex';
        document.getElementById('error').className = 'focus';
        form.mail.focus();

        return false;
    } else {
        document.getElementById('error').style.display = 'none';
    }

    if (reason == "") {
        document.getElementById('error').innerHTML = 'Veuillez indiquer votre demande!';
        document.getElementById('error').style.display = 'flex';
        document.getElementById('error').className = 'focus';
        form.reason.focus();
        return false;
    } else {
        document.getElementById('error').style.display = 'none';
    }
    return true;
}

// MAIL-TO V1
// function sendMail() {
//     let name = document.getElementById("identity").value;
//     let email = document.getElementById("mail").value;
//     let subject = document.getElementById("reason").value;
//     let message = document.getElementById("message").value;
//     let mail = "mailto:mlvproconcept@gmail.com?subject=" + subject + "&body=" + name + email + message;

//     window = window.open(mail, 'emailWindow')
// }

// MAIL-TO V2

function sendMail() {
    let name = document.getElementById("identity").value;
    let email = document.getElementById("mail").value;
    let subject = document.getElementById("reason").value;
    let message = document.getElementById("message").value;
    document.location.href = "mailto:mlvproconcept@gmail.com?subject="
        + encodeURIComponent(subject),
        + "&body=" + encodeURIComponent(name),
        + "&body=" + encodeURIComponent(message);
}

// MENU SECOND STATE

gsap.registerPlugin(ScrollTrigger);

gsap.to(".nav", {
    scrollTrigger: {
        trigger: "trigger1",
        start: 'top -600',
        end: 99999,
        toggleActions: "restart pause pause reverse",

    },
    opacity: 1,


}
);

gsap.to(".menu", {
    scrollTrigger: {
        trigger: "trigger1",
        start: 'top -900',
        toggleActions: "restart pause pause reverse",

    },
    opacity: 1,
    visibility: "visible",

})

// REALISATION ANIMATION TRASLATE

gsap.to(".boxRealLeft1", {
    scrollTrigger: {
        trigger: ".trigger2",
        start: "top bottom",
        end: "top 100px",
        scrub: 2,
        toggleActions: "restart pause reverse pause"

    },
    duration: 5,
    x: 0.5,

}
)

gsap.to(".boxRealRight1", {
    scrollTrigger: {
        trigger: ".trigger3",
        start: "top bottom",
        end: "top 100px",
        scrub: 2,
        toggleActions: "restart pause reverse pause"

    },
    duration: 5,
    x: 0.5,

}
)


// MENU ICONE Interaction
function setActive() {
    aObj = document.querySelector('.nav').getElementsByTagName('img');
    for (i = 0; i < aObj.length; i++) {
        if (document.location.href.indexOf(aObj[i].href) >= 0) {
            aObj[i].className = 'active';
        }
    }
}

window.onload = setActive;


