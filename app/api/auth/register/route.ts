// app/api/auth/register/route.ts
import axios from "axios";

export async function POST(req: Request) {
  const data = await req.json();
  const { user, organization } = data;

  try {
    // Make an API call to the external backend API
    const response = await axios.post("https://mohasel.net/api/Client/Auth/Register", {
      user,
      organization,
    });

    // Return the response from the external API
    const { id, message } = response.data;
    return new Response(JSON.stringify({ id, message }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    const errorData = error.response?.data || error.message;

    return new Response(
      JSON.stringify({
        type: "Error",
        title: "Registration failed",
        status: 400,
        traceId: errorData.traceId || "",
        errors: errorData.errors || {},
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
