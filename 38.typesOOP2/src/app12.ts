// Необходимо реализовать класс QuoteGenerator, который будет содержать список заранее заданных цитат и метод для получения случайной цитаты. Класс должен содержать массив с заранее определёнными цитатами и иметь метод getRandomQuote(), который: Возвращает одну случайную цитату из массива. Список цитат можно расширить или изменить, добавив свои.
// this.quotes = [
//       "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
//       "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
//       "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
//       "Believe you can and you're halfway there. — Theodore Roosevelt",
//       "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
//       "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
//       "It does not matter how slowly you go as long as you do not stop. — Confucius",
//       "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
//       "The best way to predict the future is to create it. — Peter Drucker",
//       "You miss 100% of the shots you don't take. — Wayne Gretzky"
//     ];

interface iQuoteGenerator {
    quotes: string[]
    getRandomQuote(): string
}


class QuoteGenerator implements iQuoteGenerator{
    quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
        "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
        "Believe you can and you're halfway there. — Theodore Roosevelt",
        "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
        "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
        "It does not matter how slowly you go as long as you do not stop. — Confucius",
        "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
        "The best way to predict the future is to create it. — Peter Drucker",
        "You miss 100% of the shots you don't take. — Wayne Gretzky"
    ];
    getRandomQuote() {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)]
    }
}

const quoteGenerator = new QuoteGenerator()
console.log(quoteGenerator.getRandomQuote());
