// ============================================================
//  GAW — Aldi Order Plan  |  orders.js
//  Edit this file to add, update or remove orders.
//
//  FIELDS:
//    ref        — GAW reference (e.g. "GAWJoven114")
//    type       — "Joven" or "Blanco"
//    product    — full product name
//    xl         — 2XL reference (leave "" if not yet assigned)
//    placed     — date order sent to winery "YYYY-MM-DD" (leave "" if not yet sent)
//    collection — planned collection date "YYYY-MM-DD"
//    delivery   — planned delivery date   "YYYY-MM-DD"
//    status     — "CONFIRMED" or "PLANNED"
//    booked     — "Yes", "TBC", or "" (blank = not applicable / not sent yet)
//    archived   — true to hide from main view (set to false or omit for active orders)
// ============================================================

const ORDERS = [
  { ref:"GAWJoven114", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115890", placed:"2026-04-08", collection:"2026-05-14", delivery:"2026-05-16", status:"CONFIRMED", booked:"Yes",  archived:false },
  { ref:"GAWJoven115", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115891", placed:"2026-04-08", collection:"2026-05-14", delivery:"2026-05-16", status:"CONFIRMED", booked:"Yes",  archived:false },
  { ref:"GAWJoven116", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115892", placed:"2026-04-08", collection:"2026-05-20", delivery:"2026-05-22", status:"CONFIRMED", booked:"Yes",  archived:false },
  { ref:"GAWJoven117", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115894", placed:"2026-04-08", collection:"2026-05-27", delivery:"2026-05-29", status:"CONFIRMED", booked:"Yes",  archived:false },
  { ref:"GAWJoven118", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115895", placed:"2026-04-08", collection:"2026-05-27", delivery:"2026-05-29", status:"CONFIRMED", booked:"Yes",  archived:false },
  { ref:"GAWBlanco67",  type:"Blanco", product:"Baron Amarillo Rioja Blanco", xl:"G A114586", placed:"2026-03-10", collection:"2026-06-01", delivery:"2026-06-03", status:"CONFIRMED", booked:"Yes",  archived:false },
  { ref:"GAWJoven119", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115897", placed:"2026-04-29", collection:"2026-06-03", delivery:"2026-06-05", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWJoven120", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115898", placed:"2026-04-29", collection:"2026-06-03", delivery:"2026-06-05", status:"PLANNED",   booked:"Yes",  archived:false },
  { ref:"GAWJoven121", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115899", placed:"2026-04-29", collection:"2026-06-10", delivery:"2026-06-12", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWBlanco68",  type:"Blanco", product:"Baron Amarillo Rioja Blanco", xl:"G A116346", placed:"2026-04-08", collection:"2026-06-15", delivery:"2026-06-17", status:"CONFIRMED", booked:"Yes",  archived:false },
  { ref:"GAWJoven122", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115900", placed:"2026-04-29", collection:"2026-06-17", delivery:"2026-06-19", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWJoven123", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A115902", placed:"2026-04-29", collection:"2026-06-17", delivery:"2026-06-19", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWJoven124", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A117720", placed:"2026-04-29", collection:"2026-06-24", delivery:"2026-06-26", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWJoven125", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"G A117721", placed:"2026-04-29", collection:"2026-06-24", delivery:"2026-06-26", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWBlanco69",  type:"Blanco", product:"Baron Amarillo Rioja Blanco", xl:"G A116347", placed:"",          collection:"2026-06-29", delivery:"2026-07-01", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWJoven126", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"",          placed:"",          collection:"2026-07-01", delivery:"2026-07-03", status:"PLANNED",   booked:"",    archived:false },
  { ref:"GAWJoven127", type:"Joven",  product:"Baron Amarillo Rioja Joven",  xl:"",          placed:"",          collection:"2026-07-01", delivery:"2026-07-03", status:"PLANNED",   booked:"",    archived:false },
  { ref:"GAWBlanco71",  type:"Blanco", product:"Baron Amarillo Rioja Blanco", xl:"",          placed:"",          collection:"2026-07-06", delivery:"2026-07-08", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWBlanco70",  type:"Blanco", product:"Baron Amarillo Rioja Blanco", xl:"G A116348", placed:"",          collection:"2026-07-13", delivery:"2026-07-15", status:"PLANNED",   booked:"TBC", archived:false },
  { ref:"GAWBlanco72",  type:"Blanco", product:"Baron Amarillo Rioja Blanco", xl:"",          placed:"",          collection:"2026-07-20", delivery:"2026-07-22", status:"PLANNED",   booked:"",    archived:false },
];
