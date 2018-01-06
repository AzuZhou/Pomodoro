document.addEventListener('DOMContentLoaded', function () {

    const quotes = ["It's not knowing what to do, it's doing what you know.",
        "Focus on being productive instead of busy.",
        "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
        "Ordinary people think merely of spending time, great people think of using it.",
        "Your mind is for having ideas, not holding them.",
        "Success is often achieved by those who don't know that failure is inevitable.",
        "If you don't pay appropriate attention to what has your attention, it will take more of your attention than it deserves.",
        "Action is the foundational key to all success.",
        "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
        "The best way out is always through.",
        "It's not always that we need to do more but rather that we need to focus on less.",
        "Productivity is being able to do things that you were never able to do before.",
        "Life is too complicated not to be orderly.",
        "You don't need a new plan for next year. You need a commitment.",
        "Until we can manage time, we can manage nothing else.",
        "If you spend too much time thinking about a thing, you'll never get it done.",
        "Great acts are made up of small deeds.",
        "It's fine to decide not to decide about something. You just need a decide-not-to-decide system to get it off your mind.",
        "Don't wait. The time will never be just right.",
        "It is not enough to be busy.... The question is: What are we busy about?",
        "There's a tendency to mistake preparation for productivity. You can prepare all you want, but if you never roll the dice you'll never be successful.",
        "You only have to do a very few things right in your life so long as you don't do too many things wrong.",
        "When you have to make a choice and don't make it, that in itself is a choice.",
        "Effective performance is preceded by painstaking preparation",
        "The way to get started is to quit talking and begin doing.",
        "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
        "Sometimes, things may not go your way, but the effort should be there every single night.",
        "Plans are nothing; planning is everything.",
        "There are risks and costs to action. But they are far less than the long-range risks of comfortable inaction.",
        "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.",
        "Live daringly, boldly, fearlessly. Taste the relish to be found in competition--in having put forth the best within you.",
        "The simple act of paying positive attention to people has a great deal to do with productivity.",
        "If you have time to whine then you have time to find a solution.",
        "I get to do what I like to do every single day of the year.",
        "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        "Whenever you are asked if you can do a job, tell 'em, 'Certainly I can!' Then get busy and find out how to do it.",
        "To be disciplined is to follow in a good way. To be self-disciplined is to follow in a better way.",
        "Time is not refundable; use it with intention.",
        "Starve your distraction and feed your focus.",
        "Create with the heart; build with the mind.",
        "Passion is energy. Feel the power that comes from focusing on what excites you.",
        "Reflect on what you do in a day. You may have never realized how some simple, harmless activities rob you of precious time.",
        "Start by doing what is necessary, then do what's possible, and suddenly you are doing the impossible.",
        "Remember that failure is an event, not a person.",
        "Time is an equal opportunity employer. Each human being has exactly the same number of hours and minutes in a day.",
        "He who is not courageous enough to take risks will accomplish nothing in life.",
        "To think is easy. To act is difficult. To act as one thinks is the most difficult.",
        "There is no substitute for hard work.",
        "When we truly need to do is often what we most feel like avoiding.",
        "Stressing output is the key to improving productivity, while looking to increase activity can result in just the opposite.",
        "Words may show a man's wit but actions will show his meaning.",
        "You don't have to see the whole staircase, just take the first step.",
        "Never mistake motion for action.",
        "You don't get paid for the hour, you get paid for the value you bring to the hour.",
        "Tomorrow hopes we have learned something from yesterday.",
        "Don't watch the clock; do what it does. Keep going.",
        "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
        "While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior.",
        "Lost time is never found.",
        "Don't confuse activity with productivity. Many people are simply busy being busy.",
        "Do the hard jobs first. The easy jobs will take care of themselves.",
        "Obstacles are those frightful things you see when you take your eyes off the goal.",
        "Sameness leaves us in peace but it is contradiction that makes us productive.",
        "Over the long run, the unglamorous habit of frequency fosters both productivity and creativity.",
        "Knowledge is the source of wealth. Applied to tasks we already know, it becomes productivity. Applied to tasks that are new, it becomes innovation.",
        "The three great essentials to achieve anything worthwhile are: hard work, stick-to-itiveness, and common sense.",
        "If you want an easy job to seem mighty hard, just keep putting if off.",
        "Nothing in the world can take the place of persistence.",
        "Work hard, have fun, and make history.",
        "The merit in action lies in finishing it to the end.",
        "There is never enough time to do it right, but there is always enough time to do it over.",
        "Creativity isn't about wild talent as much as it's about productivity. To find new ideas that work, you need to try a lot that don't. It's a pure numbers game.",
        "Position yourself to succeed by doing the other things in your life that rejuvenate you. Exhaustion affects your quality and productivity.",
        "Productivity growth, however it occurs, has a disruptive side to it. In the short term, most things that contribute to productivity growth are very painful.",
        "The key to productivity is to rotate your avoidance techniques.",
        "It is not the strongest of the species that survive, nor the most intelligent, but the ones most responsive to change.",
        "If we all did the things we are capable of doing, we would literally astound ourselves.",
        "Multitasking is a lie",
        "It is not the mountain we conquer, but ourselves."
    ];
    const authors = ["Tony Robbins",
        "Tim Ferriss",
        "Stephen Covey",
        "Arthur Schopenhauer",
        "David Allen",
        "Coco Chanel",
        "David Allen",
        "Pablo Picasso",
        "Paul J. Meyer",
        "Robert Frost",
        "Nathan W. Morris",
        "Franz Kafka",
        "Martha Stewart",
        "Seth Godin",
        "Peter Drucker",
        "Bruce Lee",
        "Lao Tzu",
        "David Allen",
        "Napoleon Hill",
        "Henry David Thoreau",
        "Shia LaBeouf",
        "Warren Buffett",
        "William James",
        "Brian Tracy",
        "Walt Disney",
        "Zig Ziglar",
        "Michael Jordan",
        "Dwight D. Eisenhower",
        "John F. Kennedy",
        "Leo Babauta",
        "Henry J. Kaiser",
        "Tom Peters",
        "Dee Dee Artner",
        "Warren Buffett",
        "Stephen King",
        "Theodore Roosevelt",
        "Corita Kent",
        "Unknown",
        "Unknown",
        "Criss Jami",
        "Oprah Winfrey",
        "Vivek Naik",
        "Saint Francis of Assisi",
        "Zig Ziglar",
        "Denis Waitley",
        "Muhammad Ali",
        "Johann Wolfgang von Goethe",
        "Thomas Edison",
        "David Allen",
        "Paul Gauguin",
        "Benjamin Franklin",
        "Martin Luther King",
        "Ernest Hemingway",
        "Jim Rohn",
        "John Wayne",
        "Sam Levenson",
        "Napoleon Bonaparte",
        "Henry C. Link",
        "Benjamin Franklin",
        "Robin Sharma",
        "Dale Carnegie",
        "Henry Ford",
        "Johnann Wolfgang von Goethe",
        "Gretchen Rubin",
        "Peter Drucker",
        "Thomas Edison",
        "Richard Miller",
        "Calvin Coolidge",
        "Jeff Bezos",
        "Genghis Khan",
        "John W. Bergman",
        "Robert Sutton",
        "Jeff VanderMeer",
        "Janet Yellen",
        "Shannon Wheeler",
        "Charles Darwin",
        "Thomas Edison",
        "Gary Keller",
        "Sir Edmund Hillary"
    ];
    let randomNumber;
    let quote;
    let author;
    let sessionStarted = false;
    let pause = false;
    let minutes = Number(document.getElementById("default-session").innerHTML) - 1;
    let seconds = 60;
    let lastMin;
    let lastSec;
    let min;
    let sec;
    let counter = 1;
    let defaultBreak = Number(document.getElementById("default-break").innerHTML);
    let defaultSession = Number(document.getElementById("default-session").innerHTML);
    let finished = false;
    let sessionType;
    let firstCicle = 1;

    let correct = function () {
        if (document.getElementById("minutes").innerHTML.length == 1) {
            document.getElementById("minutes").innerHTML = "0" + document.getElementById("minutes").innerHTML;
        }
    }

    let breakMinus = function () {
        if (defaultBreak > 1) {
            defaultBreak--;
            document.getElementById("default-break").innerHTML = defaultBreak;
            correct();
        }
    }

    let breakPlus = function () {
        if (defaultBreak < 59) {
            defaultBreak++;
            document.getElementById("default-break").innerHTML = defaultBreak;
            correct();
        }
    }

    let sessionMinus = function () {
        if (defaultSession > 1) {
            defaultSession--;
            document.getElementById("default-session").innerHTML = defaultSession;
            document.getElementById("minutes").innerHTML = document.getElementById("default-session").innerHTML;
            minutes = Number(document.getElementById("default-session").innerHTML) - 1;
            correct();
        }
    }

    let sessionPlus = function () {
        if (defaultSession < 59) {
            defaultSession++;
            document.getElementById("default-session").innerHTML = defaultSession;
            document.getElementById("minutes").innerHTML = document.getElementById("default-session").innerHTML;
            minutes = Number(document.getElementById("default-session").innerHTML) - 1;
            correct();
        }
    }

    document.getElementById("break-minus").onclick = breakMinus;
    document.getElementById("break-plus").onclick = breakPlus;
    document.getElementById("session-minus").onclick = sessionMinus;
    document.getElementById("session-plus").onclick = sessionPlus;


    let generateQuote = function () {
        randomNumber = Math.floor(Math.random() * quotes.length);
        quote = quotes[randomNumber];
        author = authors[randomNumber];
        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = author;
    }

    let clickCounter = function () {
        counter++;
    }

    let resume = function () {
        if (counter % 2 != 0) {
            return true;
        } else {
            return false;
        }
    }

    let showTime = function (lastMin, lastSec) {
        sec = lastSec.toString();
        min = lastMin.toString();

        if (sec.length == 1) {
            sec = "0" + sec;
            document.getElementById("seconds").innerHTML = sec;
        } else {
            document.getElementById("seconds").innerHTML = lastSec;
        }

        if (min.length == 1) {
            min = "0" + min;
            document.getElementById("minutes").innerHTML = min;
        } else {
            document.getElementById("minutes").innerHTML = lastMin;
        }
    }

    let startInterval = function (minutes, seconds) {

        let theInterval = setInterval(function () {

            if (pause) {
                clearInterval(theInterval);
            } else {
                if (minutes > 0) {
                    if (seconds > 0) {
                        seconds--;
                    } else {
                        seconds = 59;
                        minutes--;
                    }
                } else if (minutes == 0) {
                    if (seconds == 0) {
                        generateQuote();
                        document.getElementsByClassName("time")[0].style.display = "none";
                        document.getElementById("trigger").style.display = "none";
                        document.getElementById("start-break").style.display = "flex";
                        document.getElementById("start-session").style.display = "flex";
                        finished = true;
                        document.getElementById("session-plus").disabled = false;
                        document.getElementById("session-minus").disabled = false;
                        clearInterval(theInterval);
                    } else {
                        document.getElementById("seconds").innerHTML = seconds--;
                    }
                }
            }

            lastMin = minutes;
            lastSec = seconds;

            showTime(lastMin, lastSec);

        }
            , 1000);

    }

    let interval = function () {

        setTimeout(function () {
            return document.getElementById("minutes").innerHTML = minutes;
        }, 1000)


        startInterval(minutes, seconds);
    };

    let newInterval = function () {

        minutes = lastMin;
        seconds = lastSec;

        startInterval(minutes, seconds);
    };

    let reset = function () {
        minutes = document.getElementById("minutes").innerHTML - 1;
        document.getElementsByClassName("time")[0].style.display = "flex";
        document.getElementById("trigger").style.display = "flex";
        document.getElementById("start-break").style.display = "none";
        document.getElementById("start-session").style.display = "none";
        document.getElementById("quote").innerHTML = "";
        document.getElementById("author").innerHTML = "";
        counter = 1;
        pause = false;
        sessionStarted = false;
        finished = false;
        seconds = 60;
    }

    let startBreak = function () {
        document.getElementById("minutes").innerHTML = document.getElementById("default-break").innerHTML;
        reset();
    }

    let startSession = function () {
        document.getElementById("minutes").innerHTML = document.getElementById("default-session").innerHTML;
        reset();
    }

    let start = function () {

        if (finished) {
            if (sessionType == "break") {
                startBreak();
            }
            if (sessionType == "session") {
                startSession();
            }
        }

        if (document.getElementById("minutes").innerHTML.length == 1) {
            document.getElementById("minutes").innerHTML = "0" + document.getElementById("minutes").innerHTML;
        }

        if (sessionStarted) {
            if (resume()) {
                document.getElementById("message").innerHTML = "Pause";
                pause = false;
                newInterval();
            } else {
                document.getElementById("message").innerHTML = "Resume";
                pause = true;
                newInterval();
            }
        } else {
            if (firstCicle) {
                document.getElementById("session-plus").disabled = true;
                document.getElementById("session-minus").disabled = true;
                firstCircle = 0;
            }
            document.getElementById("message").innerHTML = "Pause";
            sessionStarted = true;
            interval();
        }
    };


    let itIsASession = function () {
        sessionType = "session";
    }

    let itIsABreak = function () {
        sessionType = "break";
    }

    let begin = document.getElementById("trigger").addEventListener('click', start);
    let count = document.getElementById("trigger").addEventListener('click', clickCounter);
    let ifBreak = document.getElementById("start-break").addEventListener('click', itIsABreak);
    let breakStart = document.getElementById("start-break").addEventListener('click', start);
    let breakClickCounter = document.getElementById("start-break").addEventListener('click', clickCounter);
    let ifSession = document.getElementById("start-session").addEventListener('click', itIsASession);
    let sessionStart = document.getElementById("start-session").addEventListener('click', start);
    let sessionClickCounter = document.getElementById("start-session").addEventListener('click', clickCounter);

})
