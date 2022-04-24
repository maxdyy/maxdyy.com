import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

interface Body {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!process.env.SENDGRID_API_KEY) throw 'no sendgrid api key';
    if (!process.env.SENDGRID_TO_EMAIL) throw 'no "sendgrid to" email defined';
    if (!process.env.SENDGRID_FROM_EMAIL)
      throw 'no "sendgrid from" email defined';

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const body = JSON.parse(req.body) as Body;

    const msg = {
      to: process.env.SENDGRID_FROM_EMAIL, // Change to your recipient
      from: process.env.SENDGRID_FROM_EMAIL, // Change to your verified sender
      subject: `MAXDYY.COM - Info request from: ${body.name}`,
      html: `
        <strong>Name/Company:</strong> ${body.name} <br/>
        <strong>Email:</strong> ${body.email} <br/>
        <strong>Message:</strong> ${body.message}
      `,
    };
    const sgRes = await sgMail.send(msg);
    if (sgRes[0].statusCode !== 202)
      throw `something went wrong, ${sgRes[0].statusCode} - ${sgRes[0].body}`;
    res.status(202).json({ statusCode: 202 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'oops something went wrong' });
  }
};

export default handler;
