import fetch from "node-fetch"
import * as cheerio from "cheerio"

const res = await fetch('https://kingsleague.pro/estadisticas/clasificacion/');
const html = await res.text();

const $ = cheerio.load(html);

const cleanText = text => text.replace(/\t|\n|\s:/g, '').replace(/.*:/g, ' ');

$('table tbody tr').each((index, el) => {
  const equipo = $(el).find('.fs-table-text_3').text().trim();
  const victorias = $(el).find('.fs-table-text_4').text().trim();
  const derrotas = $(el).find('.fs-table-text_5').text().trim();
  const golesAFavor = $(el).find('.fs-table-text_6').text().trim();
  const golesEnContra = $(el).find('.fs-table-text_7').text().trim();
  const tarjetasAmarillas = $(el).find('.fs-table-text_8').text().trim();
  const tarjetasRojas = $(el).find('.fs-table-text_9').text().trim();
  console.log({
    equipo: cleanText(equipo),
    victorias: cleanText(victorias),
    derrotas: cleanText(derrotas),
    golesAFavor: cleanText(golesAFavor),
    golesEnContra: cleanText(golesEnContra),
    tarjetasAmarillas: cleanText(tarjetasAmarillas),
    tarjetasRojas: cleanText(tarjetasRojas)
  })
});

// console.log({
//   levelLol,
//   stats
// })
