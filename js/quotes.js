const quotes = [
    {
        quote : "Be yourself, everyone else is already taken.",
        author : "Oscar Wilde",
    },
    {
        quote : "So many books, so little time.",
        author : "Frank Zappa",
    },
    {
        quote : "You only live once, but if you do it right, once is enough.",
        author : "Mae West",
    },
    {
        quote : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi",
    },
    {
        quote : "If you tell the truth, you don't have to remember anything.",
        author : "Mark Twain",
    },
    {
        quote : "Always forgive your enemies, nothing annoys them so much.",
        author : "Oscar Wilde",
    },
    {
        quote : "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author : "Martin Luther King Jr.",
    },
    {
        quote : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author : "Oscar Wilde",
    },
    {
        quote : "In three words I can sum up everything I've learned about life: it goes on.",
        author : "Robert Frost",
    },
    {
        quote : "We are all in the gutter, but some of us are looking at the stars.",
        author : "Oscar Wilde",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;