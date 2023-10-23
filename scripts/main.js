import { data } from './data.js';
var seriesTable = document.getElementById("series-table");
var divAverage = document.getElementById("average");
mostrarDatosSeries(data);
mostrarAverage(data);
function mostrarDatosSeries(series) {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var row = document.createElement("tr");
        row.innerHTML = "<td><b>".concat(serie.getID(), "</b></td>\n        <td><a href= \"#\">").concat(serie.getName(), "</a></td>\n        <td>").concat(serie.getChannel(), "</td>\n        <td>").concat(serie.getSeasons(), "</td>");
        seriesTable.appendChild(row);
    }
}
function mostrarAverage(serier) {
    var average = 0;
    for (var _i = 0, serier_1 = serier; _i < serier_1.length; _i++) {
        var serie = serier_1[_i];
        average += serie.getSeasons();
    }
    average = average / serier.length;
    divAverage.innerHTML = "<p><b>Seasons average: </b>".concat(average, "</p>");
}
