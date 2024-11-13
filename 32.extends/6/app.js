// 6. Создайте класс SentenceRepository, который имеет массив строк sentences.Наследуйте от него класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную строку по количеству символов.

// Входные:
//     const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();

// →
// Результат: "This is a longer sentence"

// Входные:
//     const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();

// →
// Результат: "JavaScript is fun"

// Входные:
//     const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();

// →
// Результат: "A sentence that is quite long"


class SentenceRepository {
    sentences = ["Hello world", "This is a longer sentence", "Short"]
}

class LongestSentence extends SentenceRepository {
    count = 0;
    result;
    getLongestSentence = () => {
        this.sentences.forEach(el => {
            if (el.length > this.count) {
                this.count = el.length
                this.result = el
            }
        })
        return this.result
    }

}

const longestSentence = new LongestSentence()
console.log(longestSentence.getLongestSentence());