﻿// Правила транслітерації
// 1.01 Додано апостроф.
if(!Translator);
else{

var CyrillicConsonants = "бвгґѓдџђжѕзкќлмнпѱҁѯрстфѳхцчшщ";
Translator.BelarusianToLatinka = Translator.RuleMap(Array(
Array("грунт","grunt"),
Array("енерг","energ"),
Array("гедз","gedz"),
Array("гудз","gudz"),
Array("реліг","relig"),
Array("кг","kg"),
Array("регіо","regio"),
Array("а","a"),
Array("б","b"),
Array("в","v"),
Array("г","h"),
Array("ґ","g"),
Array("дя","ďa"),
Array("дє","ďe"),
Array("дь","ď"),
Array("дю","ďu"),
Array("д","d"),
Array("ж","ž"),
Array("зя","źa"),
Array("зє","źe"),
Array("зь","ź"),
Array("зю","źu"),
Array("з","z"),
Array("к","k"),
Array("ля","ľa"),
Array("лє","ľe"),
Array("ль","ľ"),
Array("лю","ľu"),
Array("л","l"),
Array("м","m"),
Array("ня","ńa"),
Array("нє","ńe"),
Array("нь","ń"),
Array("ню","ńu"),
Array("н","n"),
Array("о","o"),
Array("п","p"),
Array("ря","ŕa"),
Array("рє","ŕe"),
Array("рь","ŕ"),
Array("рю","ŕu"),
Array("р","r"),
Array("ся","śa"),
Array("сє","śe"),
Array("сь","ś"),
Array("сю","śu"),
Array("с","s"),
Array("тя","ťa"),
Array("тє","ťe"),
Array("ть","ť"),
Array("тю","ťu"),
Array("т","t"),
Array("у","u"),
Array("ф","f"),
Array("х","x"),
Array("ця","ća"),
Array("цє","će"),
Array("ць","ć"),
Array("цю","ću"),
Array("ц","c"),
Array("ч","č"),
Array("ш","š"),
Array("щ","šč"),
Array("и","y"),
Array("ь",""),
Array("'",""),
Array("’",""),
Array("і","i"),
Array("е","e"),
Array("ю","ju"),
Array("й","j"),
Array("є","je"),
Array("ї","ji"),
Array("ю","ju"),
Array("я","ja")
));

Translator.BelarusianToLatinka.version = "1.01";

}