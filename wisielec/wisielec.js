//mechanizm losowania hasła

var hasla = new Array(5);
hasla[0] = 'Zadanie na TSSI';
hasla[1] = 'Gorący jak cegła';
hasla[2] = 'Java Script';
hasla[3] = 'Hakuna matata';
hasla[4] = 'Ogniem i mieczem'
var losowa = Math.floor(Math.random()*5);


var haslo = "";

haslo = hasla[losowa];

haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var blad = 0;

var haslo1= "";

//zmiana hasła na hasło "zakodowane"
for (i=0; i<dlugosc; i++){
    if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1+"-";
    
}


function wypiszHaslo()
{
    //funkcja która wypisuje hasło
    document.getElementById("plansza").innerHTML = haslo1;
}



var litery = new Array(35);

litery = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I",
"J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś",
"T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];

function start()
{
    //funkcja która rozpoczyna gre i generuje literki 
    
    var trescDiva = "";
    
    for (i=0; i<=34; i++)
    {
        var element = "lit" + i;
        trescDiva = trescDiva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        if ((i+1)% 7 == 0) trescDiva = trescDiva + '<div style="clear:both;"></div>';

    }

    document.getElementById("alfabet").innerHTML = trescDiva;

    wypiszHaslo();
}

//wywołanie funkcji przy załadowaniu strony
window.onload = start;




String.prototype.ustawZnak = function(miejsce, znak)
{
    //funkcja która podmienia znak
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}



//funkcja sprawdzająca czy odpowiedz jest poprawna czy niepoprawna
function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
    }


    if(trafiona == true)
	{
		//zmiana koloru literki kiedy jest trafiona
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#9BFF9C";
		document.getElementById(element).style.color = "#42964F";
		document.getElementById(element).style.border = "3px solid #42964F";
		document.getElementById(element).style.cursor = "default";
		
		wypiszHaslo();
    }
    
	else
	{
		//zmiana koloru literki kiedy nie jest trafiona
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#D69898";
		document.getElementById(element).style.color = "#C23C41";
		document.getElementById(element).style.border = "3px solid #C23C41";
		document.getElementById(element).style.cursor = "default";	
        document.getElementById(element).setAttribute("onclick",";");
        
        //zmiana obrazka przy zaznaczonej złej literce
        blad++
        var obrazek = "img/s"+ blad + ".png";
        document.getElementById("szubienica").innerHTML = '<img src="' + obrazek + '">';
    }


    //wygranko
    
    if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="restart" onclick="location.reload()">ZAGRAJ PONOWNIE</span>';

    //przegranko
    if (blad >=10)
    document.getElementById("alfabet").innerHTML = "Nie udało się, prawidłowe hasło to:" + haslo + 
    '<br> <br> <span class="restart" onclick="location.reload()">ZAGRAJ PONOWNIE</span>';
}

