const prompts = [
    "What if the self is just a recursive function?",
    "Are you optimizing for happiness or efficiency?",
    "If reality is a neural net, are you overfitting your worldview?",
    "What inputs have most shaped your current beliefs?",
    "When was the last time you debugged your own thinking?"
];

document.getElementById("thought").textContent = prompts[Math.floor(Math.random() * prompts.length)];
