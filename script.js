/*
Skrypt JavaScript do gry 59 Sekund
Autor: Marcin Kowalicki
Wersja: 1.0
Data wydania: 12.02.2020
59 Sekund. Gra do nauki tabliczki mnożenia.
Copyright (C) 2020  Marcin Kowalicki

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/ // rome-ignore lint/js/noVar
var liczba = 59;
// rome-ignore lint/js/noVar

const startBtn = document.getElementById('zaczynajmy').addEventListener('click', () => {
	odliczanie();
	start();
});

var wynik = 0;

var p_odp = 0;

var b_odp = 0;

function start() {
	let liczba1 = Math.floor(Math.random() * 10);
	let liczba2 = Math.floor(Math.random() * 10);
	wynik = liczba1 * liczba2;

	document.getElementById("gra").innerHTML = `<h4>${liczba1} * ${liczba2}</h4> <input type="text" id="pole" /> <button type="button" id="sprawdz" onclick="sprawdz()" >Sprawdź</button> <button type="button" id="k_gry" onclick="koniec()" >Koniec gry</button>`;
}

// rome-ignore lint/js/noUnusedVariables
function sprawdz() {
	if (document.getElementById("pole").value == wynik) {
		liczba = liczba + 2;
		p_odp = p_odp + 1;
		document.getElementById("czy_poprawna").innerHTML = "<p>Poprawna odpowied\u017a!</p>";
		start();
	} else if(typeof liczba == "number") {
			document.getElementById("czy_poprawna").innerHTML = `<p>Podaj prawidłową liczbę!</p>`;
	} else {
		b_odp = b_odp + 1;
		document.getElementById("czy_poprawna").innerHTML = `<p>To nie jest poprawna odpowiedź! Poprawna odpowiedź to: ${wynik}.</p>`;
		start();
	}
}

// rome-ignore lint/js/useCamelCase
function zacznij_odliczac() {
	document.getElementById("odliczanie").innerHTML = liczba;
	liczba = liczba - 1;

	// rome-ignore lint/js/noVar
	var odliczanie = setTimeout("zacznij_odliczac()", 1_000);

	if (liczba === 0) {
		clearTimeout(odliczanie);

		//koniec gry na koniec czasu
		document.getElementById("gra").innerHTML = `<h5>Koniec czasu. Poprawnych odpowiedzi:  ${p_odp}. Błędnych odpowiedzi: ${b_odp}.</h5><button id="jeszcze_raz" type="button" onclick="start()" >Jeszcze raz?</button>`;
	}
}

// rome-ignore lint/js/noUnusedVariables
function koniec() {
	document.getElementById("gra").innerHTML = `<h5>Zakończyłeś grę. Poprawnych odpowiedzi:  ${p_odp}. Błędnych odpowiedzi: ${b_odp}.</h5><button id="jeszcze_raz" type="button" onclick="start()" >Jeszcze raz?</button>`;
}

function odliczanie() {
	//rozpoczęcie odlicznia
	zacznij_odliczac();
}
