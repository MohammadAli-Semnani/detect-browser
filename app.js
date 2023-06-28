window.addEventListener("load", () => {
    let userAgent = navigator.userAgent;
    let mainBrowsr = null;

    if (userAgent.match(/edg/i)) {
        mainBrowsr = "edge"
    } else if (userAgent.match(/firefox/i)) {
        mainBrowsr = "firefox";
    } else if (userAgent.match(/opr/i)) {
        mainBrowsr = "opera";

    } else if (userAgent.match(/chrome/i)) {
        mainBrowsr = "chrome";

    } else if (userAgent.match(/safari/i)) {
        mainBrowsr = "safari";

    }


    let chooseBrowser = document.querySelector(`.${mainBrowsr}`)
    if (chooseBrowser) {
        chooseBrowser.style.opacity = "1"
    }
})

