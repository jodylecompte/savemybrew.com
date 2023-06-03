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

  console.log("id: ", id);
  console.log("handle: ", handle);

  /*
  const { error: updateError, data: updateData } = await supabase
  .from("profiles")
  .update({ handle })
  .eq("id", `${id}::uuid`)
  .select();
*/

  const { data: selectData } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id);

  console.log("selectData: ", selectData);

  const { error: updateError, data: updateData } = await supabase
    .from("profiles")
    .update({ handle })
    .eq("id", "" + id)
    .select();

  console.log("updateError: ", updateError);
  console.log("updateData: ", updateData);

  res.json(data);
}
