import { supabase } from "@/services/supabase";

import type { NextApiRequest, NextApiResponse } from "next";

import { signUpSchema } from "@/forms/signupSchema";

import type { SignUpForm } from "@/forms/signupSchema";

type Response = {
  error?: any;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const validatedBody = signUpSchema.safeParse(req.body);
  if (!validatedBody.success) {
    return res.json({ error: validatedBody.error });
  }

  const { email, password, handle } = req.body satisfies SignUpForm;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.json({ error });
  }

  const { id } = data.user!;

  const { error: updateError, data: updateData } = await supabase
    .from("profiles")
    .update({ handle })
    .eq("id", id)
    .select();

  if (!error) {
    res.json({ data });
  } else {
    res.json({ error: updateError });
  }
}
