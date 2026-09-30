// Konfigurace časování (v milisekundách)
const CAS_ZOBRAZENI = 6000; // Jak dlouho moudro svítí (6 sekund)
const CAS_ANIMACE = 2500;   // Délka zjevování / mizení (musí odpovídat CSS transition)

// Seznam mouder v uvozovkách a oddělený čárkami
const moudra = [
    "Ale na webu se píše, že máš čas.",
    "Humanitní vědy jsou pro ty, co nejsou schopni cokoliv vymyslet.",
    "Špatný to není, ale dobrý taky ne.",
    "Píšu jako student průmyslovky.",
    "Já pláču, a to nejsou slzy štěstí.",
    "Tady vtipy neexistují, tady je vše vážné.",
    "Já zvažuji, kdy poprosíme dědka.",
    "Bebínkuje, to je taky takový matlas.",
    "Já nepracuji s časem, čas pracuje se mnou.",
    "Lukáši, ty ceny jako by padaly z nebe přímo k zemi!",
    "Jsi shrbený jako pán s kufříkem.",
    "Tebe snad políbila múza. Ne, mě políbil Adam.",
    "My už nerozumíme česky.",
    "Já nechci efekty, já chci piánko dole.",
    "To není dědek, to je bába.",
    "Jsou schopni tě rozeznat, nebo jsou tak blbí?",
    "Tváří se důležitě, ale ve skutečnosti důležití jsou.",
    "Babemas.",
    "Chce to knižní, ale ne zas tak moc knižní.",
    "My jsme včerejší generace.",
    "My už vás neslyšíme česky.",
    "Ou jé za každou větou.",
    "Oni jsou kroužek, my jsme čtverec.",
    "A rezistor nás nezajímá.",
    "Tak dlouho se s prutem pro vodu chodí, než se pivo přinese.",
    "Každá ryba někde začíná i končí.",
    "My nechceme obrys, my chceme vzdělání.",
    "Lukáši, ty ceny jako by padaly z nebe přímo k zemi!",
    "Zmenším jim to egoistický logo."
];

let currentIndex = 0;
const quoteElement = document.getElementById('quote-text');

function zobrazDalsiMoudro() {
    if (moudra.length === 0) return;

    // 1. Nastavíme text moudra
    quoteElement.textContent = moudra[currentIndex];
    
    // 2. Postupné zjevení (odebrání třídy 'hidden')
    quoteElement.classList.remove('hidden');

    // 3. Po uplynutí času zobrazení moudro skryjeme
    setTimeout(() => {
        quoteElement.classList.add('hidden');

        // 4. Po dokončení animace skrytí přejdeme na další moudro
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % moudra.length; // Posun na další (po posledním zpět na začátek)
            zobrazDalsiMoudro();
        }, CAS_ANIMACE);

    }, CAS_ZOBRAZENI);
}

// Spuštění cyklu po načtení stránky
window.addEventListener('DOMContentLoaded', zobrazDalsiMoudro);
