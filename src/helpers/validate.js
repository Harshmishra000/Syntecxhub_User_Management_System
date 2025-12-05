
function checkEmail(mail) {
    return /^[\w.-]+@[\w.-]+\.\w+$/.test(mail);
}

function checkLength(txt, n) {
    return txt && txt.trim().length >= n;
}

module.exports = { checkEmail, checkLength };
