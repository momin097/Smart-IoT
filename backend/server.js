const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const otpStore = {};

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mo.minthana@gmail.com",
    pass: "iswbyltthjhrywvj", // เปลี่ยนเป็น App Password ของคุณจริง
  },
});

app.post("/api/send-otp", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const otp = generateOtp();
  const expire = Date.now() + 5 * 60 * 1000; // หมดอายุ 5 นาที

  otpStore[email] = { otp, expire };

  const mailOptions = {
    from: "mo.minthana@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error("Send mail error:", error);
      return res.status(500).json({ message: "Failed to send OTP" });
    }
    console.log(`OTP sent to ${email}: ${otp}`);
    res.json({ message: "OTP sent" });
  });
});

app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ message: "Email and OTP required" });

  const record = otpStore[email];
  if (!record) return res.status(400).json({ message: "No OTP sent to this email" });
  if (Date.now() > record.expire) {
    delete otpStore[email];
    return res.status(400).json({ message: "OTP expired" });
  }
  if (record.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

  delete otpStore[email];
  res.json({ message: "OTP verified" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
