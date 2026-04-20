import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  token: string;
}

export async function POST(request: NextRequest) {
  const reqBody: RequestBody = await request.json();
  const secret_key = process.env.RECAPTCHA_SECRET_KEY_V3;

  try {
    // const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${reqBody.token}`;
    const url = "https://www.google.com/recaptcha/api/siteverify";
    const res = await axios.post(url, null, {
      params: {
        secret: secret_key,
        response: reqBody.token,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (res.data.success && res.data.score >= 0.5) {
      return NextResponse.json({
        message: "Captcha verification success!!",
        success: true,
      });
    }

    return NextResponse.json(
      {
        score: res.data.score || 0,
        error: "Captcha verification failed!",
        success: false,
      },
      { status: 400 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Captcha verification failed!",
        success: false,
      },
      { status: 500 },
    );
  }
}
