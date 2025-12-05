const Person = require("../schema/Person");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { checkEmail, checkLength } = require("../helpers/validate");

async function register(req, res) {
    const { username, contactMail, password } = req.body;

    if (!username || !contactMail || !password)
        return res.status(400).json({ msg: "All fields required." });

    if (!checkEmail(contactMail))
        return res.status(400).json({ msg: "Invalid email entered." });

    if (!checkLength(password, 6))
        return res.status(400).json({ msg: "Password must be 6+ chars." });

    const exists = await Person.findOne({ contactMail });
    if (exists)
        return res.status(409).json({ msg: "Mail already used." });

    const hashed = await bcrypt.hash(password, 10);

    const person = new Person({
        username,
        contactMail,
        secret: hashed,
    });

    await person.save();

    res.status(201).json({
        id: person._id,
        name: person.username,
        email: person.contactMail
    });
}

async function login(req, res) {
    const { contactMail, password } = req.body;

    const user = await Person.findOne({ contactMail });
    if (!user) return res.status(404).json({ msg: "Account not found." });

    const ok = await bcrypt.compare(password, user.secret);
    if (!ok) return res.status(401).json({ msg: "Wrong password." });

    const token = jwt.sign(
        { uid: user._id, mail: user.contactMail },
        process.env.JWT_KEY,
        { expiresIn: "2h" }
    );

    res.json({ token });
}

async function myInfo(req, res) {
    const data = await Person.findById(req.user.uid).select("username contactMail createdOn");
    res.json(data);
}

async function updateMe(req, res) {
    const { username } = req.body;

    const updated = await Person.findByIdAndUpdate(
        req.user.uid,
        { username },
        { new: true }
    );

    res.json(updated);
}

async function removeMe(req, res) {
    await Person.findByIdAndDelete(req.user.uid);
    res.json({ msg: "Account removed." });
}

module.exports = { register, login, myInfo, updateMe, removeMe };
