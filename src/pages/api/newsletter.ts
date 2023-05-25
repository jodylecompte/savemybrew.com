import MailerLite from "@mailerlite/mailerlite-nodejs";
import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const { email } = req.body;

  const mailerlite = new MailerLite({
    api_key: process.env.MAILERLITE_API_KEY!,
  });

  mailerlite.subscribers
    .createOrUpdate({ email })
    .then(() => {
      return res.json({ success: true });
    })
    .catch((error) => {
      if (error.response) return res.json({ success: false });
    });
}
