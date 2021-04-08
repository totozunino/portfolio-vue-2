import axios from "axios";

const mail = {
  from: "",
  to: "mathiaszunino@gmail.com",
  subject: "Portfolio",
  text: ""
};

export async function sendMail(data: { name: string; email: string; message: string }): Promise<void> {
  mail.from = `${data.name} <${data.email}>`;
  mail.text = data.message;
  await axios.post(`https://api.mailgun.net/v3/${process.env.VUE_APP_DOMAIN}/messages`, null, {
    params: { ...mail },
    auth: { username: "api", password: process.env.VUE_APP_API_KEY }
  });
}
