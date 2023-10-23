import {data} from './data.js';
import {Serie} from './serie.js';


let seriesTable : HTMLElement = document.getElementById("series-table")!;
let divAverage : HTMLElement = document.getElementById("average")!;

mostrarDatosSeries(data);
mostrarAverage(data);

function mostrarDatosSeries(series : Serie[]):void{
    for(let serie of series){
        let row = document.createElement("tr");
        row.innerHTML = `<td><b>${serie.getID()}</b></td>
        <td><a href= "#">${serie.getName()}</a></td>
        <td>${serie.getChannel()}</td>
        <td>${serie.getSeasons()}</td>`;
        seriesTable.appendChild(row);
    }
}

function mostrarAverage(serier : Serie[]){
    let average = 0;
    for(let serie of serier){
        average += serie.getSeasons();
    }
    average = average/serier.length;
    divAverage.innerHTML = `<p><b>Seasons average: </b>${average}</p>`;
}