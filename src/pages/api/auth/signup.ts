import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "@/services/supabase";

// TODO: Type this
type Response = {
  error?: any;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const { email, password, handle } = req.body;

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
    .eq("id", "" + id)
    .select();

  if (!error) {
    res.json({ data });
  } else {
    res.json({ error: updateError });
  }
}
