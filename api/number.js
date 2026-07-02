export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) {
    return res.status(400).json({
      success: false,
      message: "num parameter missing"
    });
  }

  const apiKey = "nxsahilx928x926";

  try {
    const response = await fetch(
      `https://ft-osint-api.duckdns.org/api/number?key=${apiKey}&num=${encodeURIComponent(num)}`
    );

    const data = await response.json();

    data.by = "@developer_NovaG";
    data.channel = "https://t.me/+uWD5M5dAUnkxNTZl";

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
