export default function handler(req, res) {
  try {
    return res.status(200).json({
      status: "OK",
      message: "API running successfully 🚀"
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}
