const readline = require('readline-sync')
const robots = {
    //userInput : require('./robots/user-input.js')
    text: require('./robots/text.js')
}

async function start(){
    const content = {
        maximumSentences: 7
      }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectPrefixText = prefixes[selectPrefixIndex]

        return selectPrefixText
    }

    console.log(JSON.stringify(content, null, 4))
}

start()