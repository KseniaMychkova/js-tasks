// Создайте объект textAnalyzer с полем text– строка и методом getTextLength, который возвращает длину текста, хранящегося вполе text. В задаче использовать контекст

const textAnalyzer = {
    text: 'hschool',
    getTextLength: function() {
        return this.text.length;
    }
}
console.log(textAnalyzer.getTextLength());