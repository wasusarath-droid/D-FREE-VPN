export default function handler(req, res) {
  try {
    // Basic debug log (Vercel logs වල පේනවා)
    console.log("Function triggered");

    // Safe response
    res.status(200).json({
      status: "OK",
      message: "Server is working 🚀"
    });

  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      error: "Internal Server Error",
      details: error.message
    });
  }
}
