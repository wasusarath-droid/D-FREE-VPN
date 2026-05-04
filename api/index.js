export default function handler(req, res) {
  res.status(200).json({
    status: "API Working ✅",
    message: "No more build errors 🎉"
  });
}
