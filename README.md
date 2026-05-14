# GAW Aldi Order Plan Dashboard

A lightweight order tracking dashboard for Guy Anderson Wines' Aldi programme.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The dashboard — don't need to edit this |
| `orders.js` | **Your data** — edit this to add/update orders |

---

## Hosting on GitHub Pages (one-time setup)

1. Create a new repository on GitHub (e.g. `aldi-orders`) — set it to **Private** if you don't want it public
2. Upload both `index.html` and `orders.js` to the repo
3. Go to **Settings → Pages**
4. Under *Source*, select **Deploy from a branch** → `main` → `/ (root)`
5. Click Save — GitHub will give you a URL like `https://yourusername.github.io/aldi-orders/`

Your dashboard is now live and accessible from any browser.

---

## Adding a new order

**Option A — via the dashboard (temporary):**
Click the pink **+ Add order** button. The order will appear in the session, but won't persist after a page refresh.

**Option B — by editing `orders.js` (permanent):**
Open `orders.js` and add a new entry at the bottom of the `ORDERS` array:

```js
{ ref:"GAWJoven128", type:"Joven", product:"Baron Amarillo Rioja Joven", xl:"G A117722", placed:"2026-07-01", collection:"2026-07-27", delivery:"2026-07-29", status:"PLANNED", booked:"TBC", archived:false },
```

Then commit and push to GitHub — the live dashboard updates automatically.

---

## Archiving an order

Click the **Archive** button on any row. Archived orders are hidden from the main view but remain in the data.

To see them, tick **Show archived** above the table.

To permanently archive an order in the data file, set `archived: true` in `orders.js`.

---

## Exporting

Click **↓ Export CSV** in the header. Downloads a CSV of all orders (including archived) with today's date in the filename — ready to email or open in Excel.

---

## Field reference

| Field | Values | Notes |
|-------|--------|-------|
| `ref` | `GAWJoven###` / `GAWBlanco##` | Unique GAW reference |
| `type` | `"Joven"` or `"Blanco"` | Controls product badge colour |
| `product` | Full product name | |
| `xl` | `"G A######"` or `""` | Leave blank if not yet assigned |
| `placed` | `"YYYY-MM-DD"` or `""` | Leave blank = not yet sent to winery |
| `collection` | `"YYYY-MM-DD"` | |
| `delivery` | `"YYYY-MM-DD"` | |
| `status` | `"CONFIRMED"` or `"PLANNED"` | |
| `booked` | `"Yes"`, `"TBC"`, or `""` | |
| `archived` | `true` or `false` | |
