(function () {
  var OPENINGS_NEW = [
    "Hi,<br><br>How's everything?",
    "Hey,<br><br>How have you been? I just wanted to",
    "Hi,<br><br>Hope you're having a great day. A quick note",
    "Hi,<br><br>How is the day going? I wanted to drop a quick line to",
    "Hi,<br><br>Just a quick one!...",
    "Hey,<br><br>Happy Xday! Trust it's going well?",
    "Hi,<br><br>How have you been?",
  ]

  var OPENINGS_REPLY = [
    "Hi,<br><br>Thanks very much for reaching out.",
    "Hi,<br><br>Thanks for this",
    "Hey,<br><br>Sorry for the delay",
    "Hey,<br><br>Just got to this",
    "Hi,<br><br>Thanks very much for this",
    "Hi,<br><br>I am only just reaching this now, apologies for any delays.",
    "Hi,<br><br>Good to hear from you!",
    "Hi,<br><br>This sounds great, thanks for the info.",
    "Hey,<br><br>Thank you for sending this across.",
    "Hi,<br><br>Thanks for the reach out.",
    "Hey,<br><br>Thanks for the kind message.",
    "Hi,<br><br>Thanks for the thoughtful reachout. ",
  ]

  var RANDOM_SMALLTALK = [
    "Things going well on your end?",
    "We're super busy at the moment, but it's great!",
    "While I have you, how is everything with you?",
    "So great to hear from you!",
    "While I have you, you should come along to our next Strange Tales event, let me know if you need the details!",
    "Looking forward to seeing you soon, we should arrange something.",
    "How is everything with you and the team?",
    "How have you been? It's been a while!",
    "Enjoying the lovely British weather? ",
    "Hope the week is going well for you!",
  ]

  var CLOSINGS = [
    "Thanks so much again, let me know if you have any questions!",
    "Don't be afraid to reach out if you have any concerns or questions.",
    "Let me know if and how I can help further.",
    "Here if you need me, speak soon.",
    "Don't hesitate to reach back out for more clarification.",
    "Thanks again, speak soon.",
    "Very much appreciated.",
    "Please let me know if there are any issues with this.",
    "Let me know if you have any trouble.",
    "Here to help!",
    "Feel free to ask any further questions, I am here to help.",
  ]

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  var keybindings = {
    // [alt 9]
    'ª': OPENINGS_NEW,
    // [alt 0]
    'º': OPENINGS_REPLY,
    // [alt -]
    '–': RANDOM_SMALLTALK,
    // [alt +]
    '≠': CLOSINGS,
  }

  function onKeyPress(event) {
    var phrases = keybindings[event.key];
    if (!phrases) {
      return
    }
    var text = pickRandom(phrases) + '\n\n<br />'
    document.execCommand("InsertHTML", false, text)
    return false
  }

  function bindContenteditables() {
    document.querySelectorAll('[contenteditable]:not(.petty-small-talk-bound)')
      .forEach(function (el) {
        console.log('petty-small-talk-binding', el)
        el.className = el.className + ' petty-small-talk-bound'
        el.onkeypress = onKeyPress
      })
  }

  // We need to constantly bind unbound editables because they may appear at any time
  setInterval(bindContenteditables, 1000)

})();


