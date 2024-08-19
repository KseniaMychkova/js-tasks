// Навходподается строка, представляющая URL, например, "http://example.com". 
// Убедитесь, что URL начинается с http:// или https://. 
// Входные: "http://example.com" → Результат: true 
// Входные: "https://site.org" → Результат: true Входные: "ftp://files.net" → Результат: false

let str = prompt();

if (str.includes('http://') || str.includes('https://')) {
    console.log(true);
} else {
    console.log(false);
}