export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const response = await fetch("https://api.jiandaoyun.com/api/v5/app/entry/data/list", {
    method: "POST",
    headers: {
      Authorization: process.env.JDY_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      app_id: process.env.JDY_APP_ID,
      entry_id: process.env.JDY_ENTRY_ID,
      page_size: 1000,
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
