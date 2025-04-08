export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const { data_id, start_time, end_time } = req.body;

  const response = await fetch("https://api.jiandaoyun.com/api/v5/app/entry/data/update", {
    method: "POST",
    headers: {
      Authorization: process.env.JDY_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      app_id: process.env.JDY_APP_ID,
      entry_id: process.env.JDY_ENTRY_ID,
      data_id,
      data: {
        _widget_1686679417152: { value: start_time },
        _widget_1686679417154: { value: end_time },
      }
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
