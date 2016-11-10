var newsArray = [
  {
    "id": "12921652",
    "timestamp": "Nov 10, 2016 5:29:12 PM",
    "topic": "Show HN: End to end encryption for Twitter direct messages",
    "votes": 3,
    "posted": "Nov 10, 2016 5:15:58 PM"
  },
  {
    "id": "12921570",
    "timestamp": "Nov 10, 2016 5:49:14 PM",
    "topic": "PHP 7 at Tumblr",
    "url": "https://engineering.tumblr.com/post/152998126990/php-7-at-tumblr",
    "votes": 5,
    "posted": "Nov 10, 2016 5:08:03 PM"
  },
  {
    "id": "12921397",
    "timestamp": "Nov 10, 2016 5:09:11 PM",
    "topic": "The Threat of a Brain Drain Under a Trump Presidency Is Real",
    "url": "http://motherboard.vice.com/read/trump-election-science-tech",
    "votes": 3,
    "posted": "Nov 10, 2016 4:52:05 PM"
  },
  {
    "id": "12921389",
    "timestamp": "Nov 10, 2016 4:59:09 PM",
    "topic": "Show HN: Amazon S3, Microsoft Azure, Rackspace, Backblaze via a Single API",
    "url": "https://cloudrail.com/enterprise-cloud-storage-interface/",
    "votes": 5,
    "posted": "Nov 10, 2016 4:50:56 PM"
  },
  {
    "id": "12921154",
    "timestamp": "Nov 10, 2016 4:39:08 PM",
    "topic": "Is America Great Yet?",
    "url": "http://isamericagreatyet.io/",
    "votes": 3,
    "posted": "Nov 10, 2016 4:29:25 PM"
  },
  {
    "id": "12920994",
    "timestamp": "Nov 10, 2016 4:29:06 PM",
    "topic": "Atom 1.12 released",
    "url": "http://blog.atom.io/2016/11/09/atom-1-12.html",
    "votes": 4,
    "posted": "Nov 10, 2016 4:14:21 PM"
  },
  {
    "id": "12920783",
    "timestamp": "Nov 10, 2016 4:09:05 PM",
    "topic": "OpenSource Smart Mirror, that recommends you clothes",
    "url": "https://www.hackster.io/Techblogogy/magic-mirror-w-stylist-4b3ff7",
    "votes": 4,
    "posted": "Nov 10, 2016 3:50:51 PM"
  },
  {
    "id": "12920598",
    "timestamp": "Nov 10, 2016 3:49:03 PM",
    "topic": "Seven years of Go",
    "url": "https://blog.golang.org/7years",
    "votes": 11,
    "posted": "Nov 10, 2016 3:30:27 PM"
  },
  {
    "id": "12920498",
    "timestamp": "Nov 10, 2016 3:39:02 PM",
    "topic": "The sneering response to Trump’s victory reveals exactly why he won",
    "url": "http://blogs.spectator.co.uk/2016/11/sneering-response-trumps-victory-reveals-exactly-won/",
    "votes": 3,
    "posted": "Nov 10, 2016 3:15:58 PM"
  },
  {
    "id": "12920496",
    "timestamp": "Nov 10, 2016 3:29:01 PM",
    "topic": "In wake of Trump win, some in Silicon Valley wonder if Facebook too influential",
    "url": "http://www.latimes.com/business/la-fi-election-media-20161109-story.html",
    "votes": 3,
    "posted": "Nov 10, 2016 3:15:52 PM"
  },
  {
    "id": "12920490",
    "timestamp": "Nov 10, 2016 3:39:02 PM",
    "topic": "Why the Chinese Market Is Crazy about Numeric Domain Names: Pinyin Acronyms",
    "url": "https://pop.co/blog/chinese-numeric-domain-names-pinyin/",
    "votes": 3,
    "posted": "Nov 10, 2016 3:15:22 PM"
  },
  {
    "id": "12920449",
    "timestamp": "Nov 10, 2016 4:09:05 PM",
    "topic": "C puzzles",
    "url": "http://www.gowrikumar.com/c/index.php",
    "votes": 7,
    "posted": "Nov 10, 2016 3:09:14 PM"
  },
  {
    "id": "12920447",
    "timestamp": "Nov 10, 2016 3:29:01 PM",
    "topic": "Democratic forum hacked",
    "url": "http://www.democraticunderground.com/503.php",
    "votes": 6,
    "posted": "Nov 10, 2016 3:09:02 PM"
  },
  {
    "id": "12920364",
    "timestamp": "Nov 10, 2016 3:59:04 PM",
    "topic": "Trump’s Data Team Saw a Different America",
    "url": "http://www.bloomberg.com/news/articles/2016-11-10/trump-s-data-team-saw-a-different-america-and-they-were-right",
    "votes": 6,
    "posted": "Nov 10, 2016 2:58:15 PM"
  },
  {
    "id": "12920349",
    "timestamp": "Nov 10, 2016 3:19:00 PM",
    "topic": "SILICON VALLEY THREATENS TO SECEDE AFTER TRUMP WINS ELECTION",
    "url": "http://www.vanityfair.com/news/2016/11/donald-trump-victory-silicon-valley-california-secession-threat",
    "votes": 5,
    "posted": "Nov 10, 2016 2:56:27 PM"
  },
  {
    "id": "12920279",
    "timestamp": "Nov 10, 2016 5:09:11 PM",
    "topic": "The first cryptor to exploit Telegram protocol",
    "url": "https://securelist.com/blog/research/76558/the-first-cryptor-to-exploit-telegram/",
    "votes": 4,
    "posted": "Nov 10, 2016 2:47:11 PM"
  },
  {
    "id": "12920268",
    "timestamp": "Nov 10, 2016 3:08:59 PM",
    "topic": "Apple CEO Tim Cook Calls for Unity in Memo to Staff Following Trump Victory",
    "url": "http://www.macrumors.com/2016/11/10/tim-cook-calls-for-unity-trump-victory/",
    "votes": 3,
    "posted": "Nov 10, 2016 2:45:55 PM"
  },
  {
    "id": "12919999",
    "timestamp": "Nov 10, 2016 2:08:54 PM",
    "topic": "Shipbob(YC-S14) hiring software engineers",
    "url": "http://www.builtinchicago.org/job/software-engineer-205",
    "votes": 1,
    "posted": "Nov 10, 2016 2:05:08 PM"
  },
  {
    "id": "12919975",
    "timestamp": "Nov 10, 2016 4:29:07 PM",
    "topic": "The Battle Against TPP Isn’t Over, but It Has Shifted",
    "url": "https://www.eff.org/deeplinks/2016/11/battle-against-tpp-isnt-over-it-has-shifted",
    "votes": 3,
    "posted": "Nov 10, 2016 1:58:28 PM"
  },
  {
    "id": "12919894",
    "timestamp": "Nov 10, 2016 1:58:53 PM",
    "topic": "“Trump will be the first anti-science president we have ever had”",
    "url": "http://www.nature.com/news/donald-trump-s-us-election-win-stuns-scientists-1.20952",
    "votes": 4,
    "posted": "Nov 10, 2016 1:42:46 PM"
  },
  {
    "id": "12919817",
    "timestamp": "Nov 10, 2016 3:59:04 PM",
    "topic": "Peter Thiel’s Bet on Donald Trump Pays Off",
    "url": "http://www.nytimes.com/2016/11/10/technology/peter-thiel-bet-donald-trump-wins-big.html",
    "votes": 4,
    "posted": "Nov 10, 2016 1:28:06 PM"
  },
  {
    "id": "12919780",
    "timestamp": "Nov 10, 2016 1:48:52 PM",
    "topic": "Scouts and guides provide \u0027mental health boost for life\u0027",
    "url": "http://www.bbc.co.uk/news/uk-scotland-37923133",
    "votes": 5,
    "posted": "Nov 10, 2016 1:21:35 PM"
  },
  {
    "id": "12919758",
    "timestamp": "Nov 10, 2016 4:19:06 PM",
    "topic": "Facebook demonstrates record-breaking data rate using millimeter-wave technology",
    "url": "https://code.facebook.com/posts/1197678800270377/facebook-demonstrates-record-breaking-data-rate-using-millimeter-wave-technology/",
    "votes": 5,
    "posted": "Nov 10, 2016 1:17:41 PM"
  },
  {
    "id": "12919746",
    "timestamp": "Nov 10, 2016 2:48:57 PM",
    "topic": "When Pseudosex Is Better Than the Real Thing",
    "url": "http://nautil.us/issue/42/fakes/when-pseudosex-is-better-than-the-real-thing",
    "votes": 6,
    "posted": "Nov 10, 2016 1:15:04 PM"
  },
  {
    "id": "12919693",
    "timestamp": "Nov 10, 2016 1:48:52 PM",
    "topic": "Tesla made more money last quarter than the US oil industry made last year",
    "url": "https://electrek.co/2016/11/10/tesla-made-more-money-last-quarter-than-the-entire-us-oil-industry-made-last-year/",
    "votes": 5,
    "posted": "Nov 10, 2016 1:03:49 PM"
  },
  {
    "id": "12919685",
    "timestamp": "Nov 10, 2016 4:29:07 PM",
    "topic": "Google’s miniature radars can now identify objects",
    "url": "http://www.theverge.com/2016/11/10/13582700/google-soli-radarcat-object-recognition",
    "votes": 5,
    "posted": "Nov 10, 2016 1:02:01 PM"
  },
  {
    "id": "12919683",
    "timestamp": "Nov 10, 2016 2:48:57 PM",
    "topic": "1983 Iphone Prototype",
    "url": "http://www.ua-magazine.com/1983-iphone-prototype/",
    "votes": 11,
    "posted": "Nov 10, 2016 1:01:31 PM"
  },
  {
    "id": "12919633",
    "timestamp": "Nov 10, 2016 1:18:49 PM",
    "topic": "Dear Democrats, Read This If You Do Not Understand Why Trump Won",
    "url": "https://medium.com/@trentlapinski/dear-democrats-read-this-if-you-do-not-understand-why-trump-won-5a0cdb13c597#.jhhanptn7",
    "votes": 4,
    "posted": "Nov 10, 2016 12:51:57 PM"
  },
  {
    "id": "12919390",
    "timestamp": "Nov 10, 2016 4:39:08 PM",
    "topic": "Silicon Valley Is Worried That Trump Is Going to Grab Them by the Data",
    "url": "https://www.buzzfeed.com/sheerafrenkel/silicon-valley-is-worried-that-trump-is-going-to-g",
    "votes": 5,
    "posted": "Nov 10, 2016 12:02:07 PM"
  },
  {
    "id": "12919257",
    "timestamp": "Nov 10, 2016 3:29:01 PM",
    "topic": "Ask HN: Will the US electoral voting system ever change?",
    "votes": 8,
    "posted": "Nov 10, 2016 11:33:57 AM"
  },
  {
    "id": "12919255",
    "timestamp": "Nov 10, 2016 12:08:44 PM",
    "topic": "DDoS attack halts heating in Finland amidst winter",
    "url": "https://metropolitan.fi/entry/ddos-attack-halts-heating-in-finland-amidst-winter",
    "votes": 7,
    "posted": "Nov 10, 2016 11:33:43 AM"
  },
  {
    "id": "12919141",
    "timestamp": "Nov 10, 2016 5:39:13 PM",
    "topic": "Show HN: Obfuscate JavaScript files using amazing javascript-obfuscator",
    "url": "https://github.com/tomasz-oponowicz/grunt-javascript-obfuscator",
    "votes": 7,
    "posted": "Nov 10, 2016 11:09:18 AM"
  },
  {
    "id": "12919107",
    "timestamp": "Nov 10, 2016 5:29:13 PM",
    "topic": "Enforcing Content Security by Default Within Firefox",
    "url": "https://blog.mozilla.org/security/2016/11/10/enforcing-content-security-by-default-within-firefox/",
    "votes": 3,
    "posted": "Nov 10, 2016 11:02:02 AM"
  },
  {
    "id": "12919058",
    "timestamp": "Nov 10, 2016 1:58:53 PM",
    "topic": "Trump Won Because Leftist Political Correctness Inspired a Terrifying Backlash",
    "url": "http://reason.com/blog/2016/11/09/trump-won-because-leftist-political-corr",
    "votes": 4,
    "posted": "Nov 10, 2016 10:50:27 AM"
  },
  {
    "id": "12918967",
    "timestamp": "Nov 10, 2016 4:49:09 PM",
    "topic": "Michael Moore’s 5-Point Plan Post Is Being Shared by 30,000 People an Hour",
    "url": "https://www.good.is/articles/moore-five-point-plan?sid\u003dsst314956uh",
    "votes": 3,
    "posted": "Nov 10, 2016 10:32:33 AM"
  },
  {
    "id": "12918756",
    "timestamp": "Nov 10, 2016 10:18:35 AM",
    "topic": "Bernie Sanders statement on Trump",
    "url": "http://www.sanders.senate.gov/newsroom/press-releases/sanders-statement-on-trump",
    "votes": 10,
    "posted": "Nov 10, 2016 9:47:12 AM"
  },
  {
    "id": "12918711",
    "timestamp": "Nov 10, 2016 11:48:43 AM",
    "topic": "The Dutch prison crisis: A shortage of prisoners",
    "url": "http://www.bbc.co.uk/news/magazine-37904263",
    "votes": 7,
    "posted": "Nov 10, 2016 9:37:37 AM"
  },
  {
    "id": "12918704",
    "timestamp": "Nov 10, 2016 10:18:35 AM",
    "topic": "The fastest Clojure REPL in the world",
    "url": "https://anmonteiro.com/2016/11/the-fastest-clojure-repl-in-the-world/",
    "votes": 8,
    "posted": "Nov 10, 2016 9:36:18 AM"
  },
  {
    "id": "12918699",
    "timestamp": "Nov 10, 2016 10:18:35 AM",
    "topic": "700 megapixels served in under 700 miliseconds",
    "url": "http://mag.prodibi.com/2016/11/10/700-megapixels-through-the-interwebs-in-under-700-miliseconds/",
    "votes": 5,
    "posted": "Nov 10, 2016 9:34:55 AM"
  },
  {
    "id": "12918665",
    "timestamp": "Nov 10, 2016 9:58:34 AM",
    "topic": "General Motors announces plans to lay off 2,000 employees",
    "url": "http://www.dailymail.co.uk/news/article-3921304/General-Motors-announces-plans-lay-2-000-employees-two-plants-just-hours-Donald-Trump-wins-election.html",
    "votes": 4,
    "posted": "Nov 10, 2016 9:25:44 AM"
  },
  {
    "id": "12918547",
    "timestamp": "Nov 10, 2016 8:58:29 AM",
    "topic": "New NASA Emdrive paper shows force of 1.2 millinewtons per kilowatt",
    "url": "http://www.nextbigfuture.com/2016/11/new-nasa-emdrive-paper-shows-force-of.html",
    "votes": 3,
    "posted": "Nov 10, 2016 8:56:49 AM"
  },
  {
    "id": "12918493",
    "timestamp": "Nov 10, 2016 4:59:10 PM",
    "topic": "Do the Right Thing and Leave Judgment to Algorithms",
    "url": "http://www.3quarksdaily.com/3quarksdaily/2016/11/do-the-right-thing-and-leave-judgment-to-algorithms-.html",
    "votes": 4,
    "posted": "Nov 10, 2016 8:42:44 AM"
  },
  {
    "id": "12918490",
    "timestamp": "Nov 10, 2016 4:59:10 PM",
    "topic": "Silicon Valley investors call for California to secede from the US",
    "url": "https://www.theguardian.com/technology/2016/nov/09/trump-win-california-secede-calexit-silicon-valley",
    "votes": 3,
    "posted": "Nov 10, 2016 8:42:07 AM"
  },
  {
    "id": "12918465",
    "timestamp": "Nov 10, 2016 8:38:28 AM",
    "topic": "Standard Cyborg Is Hiring a Customer Success Manager",
    "votes": 1,
    "posted": "Nov 10, 2016 8:37:19 AM"
  },
  {
    "id": "12918437",
    "timestamp": "Nov 10, 2016 4:59:10 PM",
    "topic": "President Obama Should Shut Down the NSA’s Mass Spying Before It’s Too Late",
    "url": "http://time.com/4565149/obama-trump-nsa-surveillance/",
    "votes": 4,
    "posted": "Nov 10, 2016 8:30:17 AM"
  },
  {
    "id": "12918432",
    "timestamp": "Nov 10, 2016 9:58:34 AM",
    "topic": "What a Difference 2 Percentage Points Make",
    "url": "http://fivethirtyeight.com/features/what-a-difference-2-percentage-points-makes/",
    "votes": 3,
    "posted": "Nov 10, 2016 8:28:48 AM"
  },
  {
    "id": "12918211",
    "timestamp": "Nov 10, 2016 8:18:26 AM",
    "topic": "Joyent’s Bryan Cantrill on technology, fear, and the rise of Trump",
    "url": "http://www.structureevents.com/joyents-bryan-cantrill-on-technology-fear-and-the-rise-of-trump/",
    "votes": 4,
    "posted": "Nov 10, 2016 7:36:04 AM"
  },
  {
    "id": "12918209",
    "timestamp": "Nov 10, 2016 1:28:50 PM",
    "topic": "Trump’s Win Isn’t the Death of Data",
    "url": "https://www.wired.com/2016/11/trumps-win-isnt-death-data-flawed-along/",
    "votes": 3,
    "posted": "Nov 10, 2016 7:35:33 AM"
  },
  {
    "id": "12918191",
    "timestamp": "Nov 10, 2016 7:48:24 AM",
    "topic": "WOT is selling your PII and browsing history",
    "url": "http://lifehacker.com/web-of-trust-sells-your-browsing-history-uninstall-it-1788667989",
    "votes": 3,
    "posted": "Nov 10, 2016 7:31:40 AM"
  },
  {
    "id": "12918150",
    "timestamp": "Nov 10, 2016 9:48:33 AM",
    "topic": "What Trump means for tech",
    "url": "http://www.bbc.com/news/technology-37932661",
    "votes": 7,
    "posted": "Nov 10, 2016 7:19:24 AM"
  },
  {
    "id": "12917929",
    "timestamp": "Nov 10, 2016 7:08:20 AM",
    "topic": "Nasty Gal is expected to file for bankruptcy",
    "url": "http://www.recode.net/2016/11/9/13578718/nasty-gal-is-expected-to-file-for-bankruptcy",
    "votes": 4,
    "posted": "Nov 10, 2016 6:15:00 AM"
  },
  {
    "id": "12917924",
    "timestamp": "Nov 10, 2016 7:18:22 AM",
    "topic": "How Japan Prepares Its Children for Independence",
    "url": "http://savvytokyo.com/japan-prepares-children-independence/",
    "votes": 5,
    "posted": "Nov 10, 2016 6:13:12 AM"
  },
  {
    "id": "12917912",
    "timestamp": "Nov 10, 2016 7:18:22 AM",
    "topic": "The status of Linux kernel hardening",
    "url": "https://lwn.net/Articles/705262/",
    "votes": 7,
    "posted": "Nov 10, 2016 6:10:07 AM"
  },
  {
    "id": "12917751",
    "timestamp": "Nov 10, 2016 11:48:43 AM",
    "topic": "Colorado Voters Accept Right-To-Die Measure",
    "url": "http://www.npr.org/sections/thetwo-way/2016/11/09/501476275/colorado-voters-accept-right-to-die-measure",
    "votes": 3,
    "posted": "Nov 10, 2016 5:33:49 AM"
  },
  {
    "id": "12917640",
    "timestamp": "Nov 10, 2016 1:58:53 PM",
    "topic": "Laws or comets?",
    "url": "https://aeon.co/essays/how-chance-and-probability-affect-the-path-of-big-history",
    "votes": 3,
    "posted": "Nov 10, 2016 5:08:50 AM"
  },
  {
    "id": "12917538",
    "timestamp": "Nov 10, 2016 6:28:17 AM",
    "topic": "NeuroEvolution – Flappy Bird",
    "url": "https://xviniette.github.io/FlappyLearning/",
    "votes": 4,
    "posted": "Nov 10, 2016 4:42:51 AM"
  },
  {
    "id": "12917466",
    "timestamp": "Nov 10, 2016 12:28:46 PM",
    "topic": "Silicon Valley Reels After Trump’s Election",
    "url": "http://www.nytimes.com/2016/11/10/technology/trump-election-silicon-valley-reels.html",
    "votes": 5,
    "posted": "Nov 10, 2016 4:26:55 AM"
  },
  {
    "id": "12917407",
    "timestamp": "Nov 10, 2016 4:58:10 AM",
    "topic": "Lenovo is ditching its own brand name to make way for \u0027Moto\u0027",
    "url": "http://thenextweb.com/mobile/2016/11/09/lenovo-is-ditching-its-own-brand-name-to-make-way-for-moto/",
    "votes": 3,
    "posted": "Nov 10, 2016 4:15:03 AM"
  },
  {
    "id": "12917398",
    "timestamp": "Nov 10, 2016 4:18:04 AM",
    "topic": "Want to Leave the US? – UserGems (YC S14) Is Hiring Full-Stack Devs in Austria",
    "votes": 1,
    "posted": "Nov 10, 2016 4:14:09 AM"
  },
  {
    "id": "12917324",
    "timestamp": "Nov 10, 2016 4:08:03 AM",
    "topic": "Let\u0027s get Trump to accept climate change",
    "url": "https://www.reddit.com/r/environment/comments/5byi0k/lets_get_trump_to_accept_climate_change/",
    "votes": 3,
    "posted": "Nov 10, 2016 3:58:20 AM"
  },
  {
    "id": "12917301",
    "timestamp": "Nov 10, 2016 4:18:04 AM",
    "topic": "The Future of USDS: Trump, Civic Tech and the Lesson of GDS",
    "url": "https://medium.com/@daeaves/the-future-of-usds-trump-civic-tech-and-the-lesson-of-gds-ccdc904976fa#.12d28q15c",
    "votes": 3,
    "posted": "Nov 10, 2016 3:52:47 AM"
  },
  {
    "id": "12917223",
    "timestamp": "Nov 10, 2016 4:28:05 AM",
    "topic": "Tech founders want California to secede",
    "url": "http://money.cnn.com/2016/11/09/technology/shervin-pishevar-california/index.html",
    "votes": 3,
    "posted": "Nov 10, 2016 3:34:04 AM"
  },
  {
    "id": "12917169",
    "timestamp": "Nov 10, 2016 3:58:03 AM",
    "topic": "How President-Elect Trump Views Science",
    "url": "https://www.scientificamerican.com/article/how-president-elect-trump-views-science/",
    "votes": 4,
    "posted": "Nov 10, 2016 3:23:50 AM"
  },
  {
    "id": "12917071",
    "timestamp": "Nov 10, 2016 12:28:46 PM",
    "topic": "Davy Crockett Portable Nuclear Weapon",
    "url": "https://www.damninteresting.com/davy-crockett-king-of-the-atomic-frontier/",
    "votes": 3,
    "posted": "Nov 10, 2016 3:05:37 AM"
  },
  {
    "id": "12917043",
    "timestamp": "Nov 10, 2016 3:58:03 AM",
    "topic": "The first ever photograph of light as both a particle and wave",
    "url": "http://m.phys.org/news/2015-03-particle.html",
    "votes": 6,
    "posted": "Nov 10, 2016 3:01:25 AM"
  },
  {
    "id": "12916950",
    "timestamp": "Nov 10, 2016 2:57:57 AM",
    "topic": "Serve America",
    "url": "https://www.greatagain.gov/serve-america.html",
    "votes": 11,
    "posted": "Nov 10, 2016 2:45:49 AM"
  },
  {
    "id": "12916928",
    "timestamp": "Nov 10, 2016 2:57:57 AM",
    "topic": "Trump Picks Top Climate Skeptic to Lead EPA Transition",
    "url": "https://www.scientificamerican.com/article/trump-picks-top-climate-skeptic-to-lead-epa-transition/?wt.mc\u003dSA_Twitter-Share",
    "votes": 27,
    "posted": "Nov 10, 2016 2:41:43 AM"
  },
  {
    "id": "12916747",
    "timestamp": "Nov 10, 2016 2:57:58 AM",
    "topic": "Understanding is Dangerous",
    "url": "https://thepointmag.com/2016/politics/understanding-is-dangerous",
    "votes": 3,
    "posted": "Nov 10, 2016 2:14:16 AM"
  },
  {
    "id": "12916729",
    "timestamp": "Nov 10, 2016 2:37:56 AM",
    "topic": "National Popular Vote Interstate Compact",
    "url": "https://en.wikipedia.org/wiki/National_Popular_Vote_Interstate_Compact",
    "votes": 3,
    "posted": "Nov 10, 2016 2:11:36 AM"
  },
  {
    "id": "12916510",
    "timestamp": "Nov 10, 2016 2:57:58 AM",
    "topic": "How Facebook Saw Trump Coming When No One Else Did",
    "url": "https://medium.com/@erinpettigrew/how-facebook-saw-trump-coming-when-no-one-else-did-84cd6b4e0d8e",
    "votes": 3,
    "posted": "Nov 10, 2016 1:39:13 AM"
  },
  {
    "id": "12916498",
    "timestamp": "Nov 10, 2016 2:07:53 AM",
    "topic": "Ask HN: How Can I Get into NLP (Natural Language Processing)?",
    "votes": 10,
    "posted": "Nov 10, 2016 1:37:44 AM"
  },
  {
    "id": "12916278",
    "timestamp": "Nov 10, 2016 1:57:52 AM",
    "topic": "Angular 3 is hot on the heels of Angular 2",
    "url": "http://www.infoworld.com/article/3139891/javascript/angular-3-is-hot-on-the-heels-of-angular-2.html",
    "votes": 4,
    "posted": "Nov 10, 2016 1:09:18 AM"
  },
  {
    "id": "12916082",
    "timestamp": "Nov 10, 2016 1:07:48 AM",
    "topic": "Pangu Team talk: iOS 9 internals [pdf]",
    "url": "http://blog.pangu.io/wp-content/uploads/2016/08/us-16-Pangu9-Internals.pdf",
    "votes": 3,
    "posted": "Nov 10, 2016 12:43:19 AM"
  },
  {
    "id": "12915904",
    "timestamp": "Nov 10, 2016 12:37:45 AM",
    "topic": "TDD Dijkstra\u0027s Algorithm as Performed by Uncle Bob",
    "url": "http://blog.cleancoder.com/uncle-bob/2016/10/26/DijkstrasAlg.html",
    "votes": 4,
    "posted": "Nov 10, 2016 12:23:10 AM"
  },
  {
    "id": "12915850",
    "timestamp": "Nov 10, 2016 6:28:17 AM",
    "topic": "Andrew Ng – What Artificial Intelligence Can and Can’t Do Right Now",
    "url": "https://hbr.org/2016/11/what-artificial-intelligence-can-and-cant-do-right-now",
    "votes": 4,
    "posted": "Nov 10, 2016 12:18:05 AM"
  },
  {
    "id": "12915809",
    "timestamp": "Nov 10, 2016 12:37:45 AM",
    "topic": "The One Method I’ve Used to Eliminate Bad Tech Hires",
    "url": "https://mattermark.com/the-one-method-ive-used-to-eliminate-bad-tech-hires/",
    "votes": 3,
    "posted": "Nov 10, 2016 12:13:47 AM"
  },
  {
    "id": "12915797",
    "timestamp": "Nov 10, 2016 12:47:46 AM",
    "topic": "Icahn Left Trump Victory Party to Bet $1B on Stocks",
    "url": "http://www.bloomberg.com/news/articles/2016-11-09/icahn-left-trump-victory-party-to-bet-1-billion-on-u-s-stocks",
    "votes": 5,
    "posted": "Nov 10, 2016 12:12:43 AM"
  },
  {
    "id": "12915773",
    "timestamp": "Nov 10, 2016 12:17:42 AM",
    "topic": "Abacus (YC W14) is looking for a designer",
    "url": "https://jobs.lever.co/abacus/1ecd9f74-03ca-4741-9fba-bcd5656425b7",
    "votes": 1,
    "posted": "Nov 10, 2016 12:09:28 AM"
  },
  {
    "id": "12915749",
    "timestamp": "Nov 10, 2016 12:27:44 AM",
    "topic": "Well written blog post explaining Trump\u0027s victory",
    "url": "https://medium.com/@trentlapinski/dear-democrats-read-this-if-you-do-not-understand-why-trump-won-5a0cdb13c597#.naed8cy1v",
    "votes": 7,
    "posted": "Nov 10, 2016 12:05:01 AM"
  },
  {
    "id": "12915619",
    "timestamp": "Nov 10, 2016 12:47:46 AM",
    "topic": "TensorFlow – Google\u0027s Machine Learning System Open Sourced",
    "url": "https://research.googleblog.com/2015/11/tensorflow-googles-latest-machine_9.html",
    "votes": 5,
    "posted": "Nov 9, 2016 11:51:55 PM"
  },
  {
    "id": "12915515",
    "timestamp": "Nov 9, 2016 11:47:39 PM",
    "topic": "The SSD Endurance Experiment: They\u0027re All Dead",
    "url": "http://techreport.com/review/27909/the-ssd-endurance-experiment-theyre-all-dead",
    "votes": 3,
    "posted": "Nov 9, 2016 11:42:28 PM"
  },
  {
    "id": "12915505",
    "timestamp": "Nov 9, 2016 11:47:40 PM",
    "topic": "Donald Trump in 1987: \u0027I don\u0027t want to be president\u0027",
    "url": "http://www.cnn.com/videos/tv/2016/05/09/donald-trump-1987-interview-larry-king-live.cnn/video/playlists/look-back-at-donald-trump/",
    "votes": 3,
    "posted": "Nov 9, 2016 11:40:45 PM"
  },
  {
    "id": "12915497",
    "timestamp": "Nov 9, 2016 11:47:39 PM",
    "topic": "Beyond 10,000 Lines – Elixir and Phoeniz",
    "url": "https://shift.infinite.red/beyond-10-000-lines-ba1adc17cc7b",
    "votes": 3,
    "posted": "Nov 9, 2016 11:40:11 PM"
  },
  {
    "id": "12915481",
    "timestamp": "Nov 10, 2016 2:17:54 AM",
    "topic": "Ask HN: Where is a good place for a college student to vacation?",
    "votes": 4,
    "posted": "Nov 9, 2016 11:38:19 PM"
  },
  {
    "id": "12915443",
    "timestamp": "Nov 9, 2016 11:47:39 PM",
    "topic": "Trump won because of Facebook",
    "url": "http://nymag.com/selectall/2016/11/donald-trump-won-because-of-facebook.html?mid\u003dtwitter_nymag",
    "votes": 4,
    "posted": "Nov 9, 2016 11:34:22 PM"
  },
  {
    "id": "12915428",
    "timestamp": "Nov 9, 2016 11:47:39 PM",
    "topic": "Trump, our next president, promised to block AT\u0026T/Time Warner merger",
    "url": "http://arstechnica.com/tech-policy/2016/11/president-trump-may-be-trouble-for-atttime-warner-merger-and-comcast/",
    "votes": 8,
    "posted": "Nov 9, 2016 11:32:53 PM"
  },
  {
    "id": "12915345",
    "timestamp": "Nov 9, 2016 11:47:39 PM",
    "topic": "Peter Thiel’s Bet on Donald Trump Wins Big",
    "url": "http://www.nytimes.com/2016/11/10/technology/peter-thiel-bet-donald-trump-wins-big.html?hpw\u0026rref\u003dtechnology\u0026action\u003dclick\u0026pgtype\u003dHomepage\u0026module\u003dwell-region\u0026region\u003dbottom-well\u0026WT.nav\u003dbottom-well",
    "votes": 8,
    "posted": "Nov 9, 2016 11:24:41 PM"
  },
  {
    "id": "12915294",
    "timestamp": "Nov 9, 2016 11:37:38 PM",
    "topic": "Imgix – Image Processing as a Service Reviewed",
    "url": "https://medium.com/@nparsons08/imgix-image-processing-as-a-service-reviewed-5195b7efe757#.jh82vyn32",
    "votes": 3,
    "posted": "Nov 9, 2016 11:19:00 PM"
  },
  {
    "id": "12915233",
    "timestamp": "Nov 9, 2016 11:57:41 PM",
    "topic": "Adam Bain to Leave Twitter, Company Appoints Anthony Noto as COO",
    "url": "https://www.sec.gov/Archives/edgar/data/1418091/000156459016028706/twtr-ex991_6.htm",
    "votes": 5,
    "posted": "Nov 9, 2016 11:12:50 PM"
  },
  {
    "id": "12915148",
    "timestamp": "Nov 10, 2016 12:17:43 AM",
    "topic": "Twitter’s Chief Operating Officer to Step Down",
    "url": "http://www.nytimes.com/2016/11/10/technology/adam-bain-twitter-chief-operating-officer-step-down.html",
    "votes": 10,
    "posted": "Nov 9, 2016 11:02:15 PM"
  },
  {
    "id": "12914994",
    "timestamp": "Nov 10, 2016 3:07:59 AM",
    "topic": "Not Your Problem",
    "url": "http://howtomakeanrpg.com/a/not-your-problem.html",
    "votes": 4,
    "posted": "Nov 9, 2016 10:47:10 PM"
  },
  {
    "id": "12914942",
    "timestamp": "Nov 10, 2016 2:57:58 AM",
    "topic": "New Airless Bike Tires That Will Never Get Flat",
    "url": "http://www.boredpanda.com/airless-flat-free-tire-bike-nexo/?_t\u003d1\u0026_f\u003dfeatured",
    "votes": 3,
    "posted": "Nov 9, 2016 10:40:10 PM"
  },
  {
    "id": "12914828",
    "timestamp": "Nov 9, 2016 10:37:34 PM",
    "topic": "Trump Picks Top Climate Skeptic to Lead EPA Transition",
    "url": "https://www.scientificamerican.com/article/trump-picks-top-climate-skeptic-to-lead-epa-transition/",
    "votes": 8,
    "posted": "Nov 9, 2016 10:26:22 PM"
  },
  {
    "id": "12914825",
    "timestamp": "Nov 9, 2016 11:57:41 PM",
    "topic": "Deep Learning Papers Ordered by Task",
    "url": "https://github.com/sbrugman/deep-learning-papers/blob/master/README.md",
    "votes": 3,
    "posted": "Nov 9, 2016 10:25:52 PM"
  },
  {
    "id": "12914716",
    "timestamp": "Nov 10, 2016 2:57:58 AM",
    "topic": "Michael Moore was right about a Donald Trump victory, and now he has a plan",
    "url": "http://globalnews.ca/news/3057433/michael-moore-was-right-about-a-donald-trump-victory-and-now-he-has-a-plan/",
    "votes": 8,
    "posted": "Nov 9, 2016 10:12:25 PM"
  },
  {
    "id": "12914510",
    "timestamp": "Nov 9, 2016 10:17:32 PM",
    "topic": "Show HN: Personal Storage System with a PI",
    "url": "https://github.com/timgrossmann/StorageSystem",
    "votes": 3,
    "posted": "Nov 9, 2016 9:52:26 PM"
  },
  {
    "id": "12914495",
    "timestamp": "Nov 9, 2016 9:57:30 PM",
    "topic": "Trie (Prefix tree) algorithm simply explained",
    "url": "https://medium.com/algorithms/trie-prefix-tree-algorithm-ee7ab3fe3413#.ydm9bvqbh",
    "votes": 3,
    "posted": "Nov 9, 2016 9:50:56 PM"
  },
  {
    "id": "12914285",
    "timestamp": "Nov 9, 2016 10:27:33 PM",
    "topic": "Donald Trump’s Contract with the American Voter [pdf]",
    "url": "https://assets.donaldjtrump.com/_landings/contract/O-TRU-102316-Contractv02.pdf",
    "votes": 3,
    "posted": "Nov 9, 2016 9:27:34 PM"
  },
  {
    "id": "12914279",
    "timestamp": "Nov 9, 2016 10:37:34 PM",
    "topic": "Elm from a Business Perspective",
    "url": "http://www.gizra.com/content/elm-business-perspective/",
    "votes": 6,
    "posted": "Nov 9, 2016 9:26:43 PM"
  },
  {
    "id": "12914201",
    "timestamp": "Nov 9, 2016 9:37:28 PM",
    "topic": "What I learned after 100,000 miles on the road talking to Trump supporters",
    "url": "https://www.theguardian.com/society/2016/nov/03/trump-supporters-us-elections",
    "votes": 4,
    "posted": "Nov 9, 2016 9:15:47 PM"
  },
  {
    "id": "12914195",
    "timestamp": "Nov 9, 2016 9:27:27 PM",
    "topic": "Why Nate Silver, Sam Wang and Everyone Else Were Wrong",
    "url": "https://www.quantamagazine.org/20161108-why-nate-silver-and-sam-wang-are-wrong/#more-32023",
    "votes": 6,
    "posted": "Nov 9, 2016 9:14:54 PM"
  },
  {
    "id": "12914193",
    "timestamp": "Nov 9, 2016 9:37:28 PM",
    "topic": "An overview of gradient descent optimization algorithms",
    "url": "http://www.datasciencecentral.com/profiles/blogs/an-overview-of-gradient-descent-optimization-algorithms",
    "votes": 3,
    "posted": "Nov 9, 2016 9:14:32 PM"
  },
  {
    "id": "12914188",
    "timestamp": "Nov 9, 2016 9:27:26 PM",
    "topic": "Spotify wears out SSDs by writing 100GB/day",
    "url": "https://community.spotify.com/t5/Desktop-Linux-Windows-Web-Player/Spotify-excessively-writing-to-drive-in-my-case-an-SSD/td-p/1365378/highlight/true",
    "votes": 7,
    "posted": "Nov 9, 2016 9:14:09 PM"
  },
  {
    "id": "12914163",
    "timestamp": "Nov 9, 2016 10:07:31 PM",
    "topic": "Trump transition team picks regulation foe as telecom point man",
    "url": "http://www.politico.com/story/2016/10/trump-transition-team-jeffrey-eisenach-229276",
    "votes": 4,
    "posted": "Nov 9, 2016 9:11:53 PM"
  },
  {
    "id": "12913698",
    "timestamp": "Nov 9, 2016 8:47:23 PM",
    "topic": "What every liberal who didn\u0027t see this coming needs to understand",
    "url": "http://reason.com/blog/2016/11/09/trump-won-because-leftist-political-corr",
    "votes": 3,
    "posted": "Nov 9, 2016 8:26:49 PM"
  },
  {
    "id": "12913369",
    "timestamp": "Nov 10, 2016 12:47:46 AM",
    "topic": "The Intelligentsia Takes a Hit",
    "url": "https://mises.org/blog/intelligentsia-takes-hit",
    "votes": 4,
    "posted": "Nov 9, 2016 7:54:04 PM"
  },
  {
    "id": "12913366",
    "timestamp": "Nov 9, 2016 7:57:18 PM",
    "topic": "Captain401 (YC S15) is hiring a UI Engineer to help people save for retirement",
    "url": "https://captain401.com/careers",
    "votes": 1,
    "posted": "Nov 9, 2016 7:53:32 PM"
  },
  {
    "id": "12913112",
    "timestamp": "Nov 9, 2016 7:57:18 PM",
    "topic": "Epic Games chief pays $15M to protect 7,000 acres of North Carolina wilderness",
    "url": "http://www.gamasutra.com/view/news/285149/Epic_Games_chief_pays_15M_to_protect_7000_acres_of_North_Carolina_wilderness.php",
    "votes": 14,
    "posted": "Nov 9, 2016 7:28:25 PM"
  },
  {
    "id": "12912887",
    "timestamp": "Nov 9, 2016 11:47:40 PM",
    "topic": "Ask HN: Where can I analyze exit poll dataset?",
    "votes": 5,
    "posted": "Nov 9, 2016 7:11:37 PM"
  },
  {
    "id": "12912846",
    "timestamp": "Nov 9, 2016 7:57:19 PM",
    "topic": "Crowdfunding to Package Browserify for Debian",
    "url": "https://www.indiegogo.com/projects/package-browserify-node-module-for-debian#/",
    "votes": 3,
    "posted": "Nov 9, 2016 7:08:35 PM"
  },
  {
    "id": "12912788",
    "timestamp": "Nov 9, 2016 7:37:16 PM",
    "topic": "So Much Denial About Workflow Among Camera Companies",
    "url": "http://www.dslrbodies.com/newsviews/so-much-denial-about-workfl.html",
    "votes": 3,
    "posted": "Nov 9, 2016 7:03:59 PM"
  },
  {
    "id": "12912781",
    "timestamp": "Nov 9, 2016 7:17:14 PM",
    "topic": "Global Markets, Initially Shaken, Edge Higher After Trump Victory",
    "url": "http://www.nytimes.com/2016/11/10/business/dealbook/stock-markets-election.html",
    "votes": 5,
    "posted": "Nov 9, 2016 7:03:14 PM"
  },
  {
    "id": "12912611",
    "timestamp": "Nov 10, 2016 7:28:23 AM",
    "topic": "Ask HN: Are generalists doomed in the job market?",
    "votes": 10,
    "posted": "Nov 9, 2016 6:48:57 PM"
  },
  {
    "id": "12912608",
    "timestamp": "Nov 9, 2016 7:57:18 PM",
    "topic": "Silicon Valley Investor Peter Thiel Wins Bet on Trump",
    "url": "http://www.wsj.com/articles/silicon-valley-investor-peter-thiel-wins-bet-on-trump-1478708226",
    "votes": 15,
    "posted": "Nov 9, 2016 6:48:55 PM"
  },
  {
    "id": "12912489",
    "timestamp": "Nov 9, 2016 7:07:12 PM",
    "topic": "The State of the Art in iOS 10 Test Automation",
    "url": "http://bitbar.com/the-state-of-the-art-in-ios-10-test-automation-frameworks/",
    "votes": 4,
    "posted": "Nov 9, 2016 6:38:42 PM"
  },
  {
    "id": "12912450",
    "timestamp": "Nov 9, 2016 7:07:12 PM",
    "topic": "Political Polarization in the American Public (2014)",
    "url": "http://www.people-press.org/2014/06/12/political-polarization-in-the-american-public/",
    "votes": 3,
    "posted": "Nov 9, 2016 6:35:25 PM"
  },
  {
    "id": "12912443",
    "timestamp": "Nov 9, 2016 7:17:14 PM",
    "topic": "Under Trump the future of Net Neutrality and broadband is uncertain",
    "url": "https://www.engadget.com/2016/11/09/under-trump-the-future-of-net-neutrality-and-broadband-is-uncert/",
    "votes": 3,
    "posted": "Nov 9, 2016 6:34:37 PM"
  },
  {
    "id": "12912366",
    "timestamp": "Nov 9, 2016 6:57:12 PM",
    "topic": "Donald Trump is moving to the White House, and liberals put him there",
    "url": "https://www.theguardian.com/commentisfree/2016/nov/09/donald-trump-white-house-hillary-clinton-liberals",
    "votes": 3,
    "posted": "Nov 9, 2016 6:29:48 PM"
  },
  {
    "id": "12912217",
    "timestamp": "Nov 9, 2016 7:07:13 PM",
    "topic": "How our dumb bot attracted 1M users without even trying",
    "url": "http://venturebeat.com/2016/11/07/how-our-dumb-bot-attracted-1-million-users-without-even-trying/",
    "votes": 5,
    "posted": "Nov 9, 2016 6:18:22 PM"
  },
  {
    "id": "12912192",
    "timestamp": "Nov 10, 2016 12:47:46 AM",
    "topic": "Ask HN: Any tech companies/devs doing anything to honor veterans this year?",
    "votes": 3,
    "posted": "Nov 9, 2016 6:16:31 PM"
  },
  {
    "id": "12912133",
    "timestamp": "Nov 9, 2016 7:07:13 PM",
    "topic": "MIT is raising $150M for a new VC fund",
    "url": "https://www.bostonglobe.com/business/2016/10/26/mit-starts-venture-fund/GzWKqD9DLOZDYvSDrUPN3L/story.html",
    "votes": 4,
    "posted": "Nov 9, 2016 6:12:13 PM"
  },
  {
    "id": "12912003",
    "timestamp": "Nov 9, 2016 8:07:19 PM",
    "topic": "How Blockchain Will Change Your Life",
    "url": "http://www.wsj.com/articles/how-blockchain-will-change-your-life-1478564751",
    "votes": 3,
    "posted": "Nov 9, 2016 6:03:11 PM"
  },
  {
    "id": "12911985",
    "timestamp": "Nov 9, 2016 6:47:11 PM",
    "topic": "Scott Adams Answers Your Questions About Predicting President",
    "url": "http://blog.dilbert.com/post/152955248046/i-answer-your-questions-about-predicting-president",
    "votes": 10,
    "posted": "Nov 9, 2016 6:01:43 PM"
  },
  {
    "id": "12911847",
    "timestamp": "Nov 9, 2016 6:07:07 PM",
    "topic": "New MacBook Pro outsold every competing laptop in just five days",
    "url": "https://9to5mac.com/2016/11/09/2016-macbook-pro-sales/",
    "votes": 16,
    "posted": "Nov 9, 2016 5:51:07 PM"
  },
  {
    "id": "12911814",
    "timestamp": "Nov 9, 2016 5:57:06 PM",
    "topic": "Judge rejects Airbnb bid to halt San Francisco ordinance",
    "url": "http://www.reuters.com/article/airbnb-sanfrancisco-ruling-idUSL1N1D923N?em_pos\u003dsmall\u0026ref\u003dheadline\u0026nl_art\u003d16",
    "votes": 9,
    "posted": "Nov 9, 2016 5:49:04 PM"
  },
  {
    "id": "12911809",
    "timestamp": "Nov 9, 2016 7:07:13 PM",
    "topic": "China \u0026 Pakistan are rebuilding the Silk Road at $51B investment",
    "url": "https://en.wikipedia.org/wiki/China%E2%80%93Pakistan_Economic_Corridor",
    "votes": 3,
    "posted": "Nov 9, 2016 5:48:38 PM"
  },
  {
    "id": "12911310",
    "timestamp": "Nov 9, 2016 5:27:04 PM",
    "topic": "After protest, Lenovo adds Linux compatibility to Yoga 900 and 900S laptops",
    "url": "http://www.pcworld.com/article/3139812/laptop-computers/after-protest-lenovo-brings-linux-compatibility-to-yoga-900-and-900s.html",
    "votes": 6,
    "posted": "Nov 9, 2016 5:14:16 PM"
  },
  {
    "id": "12911302",
    "timestamp": "Nov 9, 2016 5:37:05 PM",
    "topic": "Brambles, Partners and Options",
    "url": "https://www.bloomberg.com/view/articles/2016-11-09/brambles-partners-and-options",
    "votes": 3,
    "posted": "Nov 9, 2016 5:13:33 PM"
  },
  {
    "id": "12911259",
    "timestamp": "Nov 9, 2016 6:07:07 PM",
    "topic": "New MacBook Pro sales are surging",
    "url": "http://www.zdnet.com/article/new-macbook-pro-sales-are-surging/",
    "votes": 6,
    "posted": "Nov 9, 2016 5:09:41 PM"
  },
  {
    "id": "12911205",
    "timestamp": "Nov 9, 2016 5:27:04 PM",
    "topic": "Democrats, Trump and the Ongoing, Dangerous Refusal to Learn the Lesson of Brexit",
    "url": "https://theintercept.com/2016/11/09/democrats-trump-and-the-ongoing-dangerous-refusal-to-learn-the-lesson-of-brexit/",
    "votes": 4,
    "posted": "Nov 9, 2016 5:04:12 PM"
  },
  {
    "id": "12911192",
    "timestamp": "Nov 9, 2016 5:27:03 PM",
    "topic": "Introducing the Nextcloud Box",
    "url": "https://nextcloud.com/box/",
    "votes": 3,
    "posted": "Nov 9, 2016 5:02:25 PM"
  },
  {
    "id": "12911173",
    "timestamp": "Nov 9, 2016 5:27:03 PM",
    "topic": "Show HN: Mest – Place to talk with those you disagree with",
    "url": "http://mest.io",
    "votes": 8,
    "posted": "Nov 9, 2016 5:01:28 PM"
  },
  {
    "id": "12911152",
    "timestamp": "Nov 9, 2016 7:07:13 PM",
    "topic": "EBay fires product and tech team in India, except 15 moving to the US",
    "url": "https://www.techinasia.com/ebay-fires-entire-india-team",
    "votes": 5,
    "posted": "Nov 9, 2016 5:00:07 PM"
  },
  {
    "id": "12911138",
    "timestamp": "Nov 9, 2016 9:27:27 PM",
    "topic": "Improving Supercomputing Accuracy by Sacrificing Precision",
    "url": "https://www.top500.org/news/improving-supercomputing-accuracy-by-sacrificing-precision/",
    "votes": 3,
    "posted": "Nov 9, 2016 4:59:01 PM"
  },
  {
    "id": "12911128",
    "timestamp": "Nov 9, 2016 7:17:14 PM",
    "topic": "4G Cellular Networks at Risk of DoS Attacks",
    "url": "https://www.cyberscoop.com/4g-lte-protocols-used-smarthphones-can-hacked-researchers-found/",
    "votes": 4,
    "posted": "Nov 9, 2016 4:58:34 PM"
  },
  {
    "id": "12911070",
    "timestamp": "Nov 9, 2016 7:17:14 PM",
    "topic": "I developed a 3D browser game with Bullet Physics. Thanks to this repo",
    "url": "https://github.com/WhitestormJS/whitestorm.js",
    "votes": 8,
    "posted": "Nov 9, 2016 4:53:45 PM"
  },
  {
    "id": "12910917",
    "timestamp": "Nov 9, 2016 4:57:00 PM",
    "topic": "It\u0027s Going to Be Okay",
    "url": "http://waitbutwhy.com/2016/11/its-going-to-be-okay.html",
    "votes": 6,
    "posted": "Nov 9, 2016 4:35:24 PM"
  },
  {
    "id": "12910882",
    "timestamp": "Nov 9, 2016 7:17:14 PM",
    "topic": "Developer Book Club",
    "url": "https://henrikwarne.com/2016/11/08/developer-book-club/",
    "votes": 4,
    "posted": "Nov 9, 2016 4:29:13 PM"
  },
  {
    "id": "12910863",
    "timestamp": "Nov 9, 2016 5:17:02 PM",
    "topic": "The Democratic Party Establishment Is Finished",
    "url": "http://www.slate.com/articles/news_and_politics/politics/2016/11/the_democratic_party_establishment_is_finished_after_trump.html",
    "votes": 4,
    "posted": "Nov 9, 2016 4:25:38 PM"
  },
  {
    "id": "12910820",
    "timestamp": "Nov 9, 2016 6:07:07 PM",
    "topic": "I\u0027m Scared – Opinion piece from a Muslim MIT student on the 2016 election",
    "url": "https://medium.com/@moinnadeem/our-2016-election-a1274f808b17#.ts4eirwwg",
    "votes": 5,
    "posted": "Nov 9, 2016 4:17:39 PM"
  },
  {
    "id": "12910481",
    "timestamp": "Nov 9, 2016 5:27:04 PM",
    "topic": "Putin says Russia ready to fully restore ties with U.S",
    "url": "http://www.reuters.com/article/usa-election-russia-putin-idUSR4N1D800D?c?",
    "votes": 4,
    "posted": "Nov 9, 2016 3:26:16 PM"
  },
  {
    "id": "12910384",
    "timestamp": "Nov 9, 2016 3:16:50 PM",
    "topic": "Is SQL Your Second Language? Sift Science (YC S11) Is Hiring a Full Stack Eng",
    "url": "https://boards.greenhouse.io/siftscience/jobs/239993#.WCDAa5MrIUE",
    "votes": 1,
    "posted": "Nov 9, 2016 3:14:09 PM"
  },
  {
    "id": "12910158",
    "timestamp": "Nov 9, 2016 4:26:58 PM",
    "topic": "Neural Networks for the Prediction of Organic Chemistry Reactions",
    "url": "http://pubs.acs.org/doi/abs/10.1021/acscentsci.6b00219",
    "votes": 5,
    "posted": "Nov 9, 2016 2:44:27 PM"
  },
  {
    "id": "12909969",
    "timestamp": "Nov 9, 2016 2:56:48 PM",
    "topic": "Show HN: DevFreeCasts – A huge collection of free screencasts for developers",
    "url": "https://devfreecasts.github.io",
    "votes": 7,
    "posted": "Nov 9, 2016 2:12:12 PM"
  },
  {
    "id": "12909967",
    "timestamp": "Nov 9, 2016 2:26:45 PM",
    "topic": "Show HN: DevFreeBooks – A huge collection of free books for developers",
    "url": "https://devfreebooks.github.io",
    "votes": 12,
    "posted": "Nov 9, 2016 2:11:42 PM"
  },
  {
    "id": "12909935",
    "timestamp": "Nov 9, 2016 4:46:59 PM",
    "topic": "Ask HN: How many of you are truly considering moving to Canada?",
    "votes": 5,
    "posted": "Nov 9, 2016 2:06:23 PM"
  },
  {
    "id": "12909906",
    "timestamp": "Nov 9, 2016 3:56:55 PM",
    "topic": "Practical advice for analysis of large, complex data sets",
    "url": "http://www.unofficialgoogledatascience.com/2016/10/practical-advice-for-analysis-of-large.html",
    "votes": 3,
    "posted": "Nov 9, 2016 2:02:20 PM"
  },
  {
    "id": "12909903",
    "timestamp": "Nov 9, 2016 6:37:10 PM",
    "topic": "The USC/L.A. Times poll saw what other surveys missed: A wave of Trump support",
    "url": "http://www.latimes.com/politics/la-na-pol-usc-latimes-poll-20161108-story.html",
    "votes": 2,
    "posted": "Nov 9, 2016 2:01:41 PM"
  },
  {
    "id": "12909823",
    "timestamp": "Nov 9, 2016 2:06:44 PM",
    "topic": "A Coalition of All Democratic Forces, Part III: What If Trumps Wins",
    "url": "https://www.lawfareblog.com/coalition-all-democratic-forces-part-iii-what-if-trump-wins",
    "votes": 3,
    "posted": "Nov 9, 2016 1:49:58 PM"
  },
  {
    "id": "12909752",
    "timestamp": "Nov 9, 2016 4:57:00 PM",
    "topic": "Donald Trump Is Elected President",
    "url": "http://www.nytimes.com/2016/11/09/us/politics/hillary-clinton-donald-trump-president.html",
    "votes": 28,
    "posted": "Nov 9, 2016 1:37:41 PM"
  },
  {
    "id": "12909598",
    "timestamp": "Nov 9, 2016 1:36:41 PM",
    "topic": "Pros and cons of iOS and Android mobile app development",
    "url": "http://www.slideshare.net/WhallaLabs/mobile-application-development-ios-vs-android",
    "votes": 3,
    "posted": "Nov 9, 2016 1:13:43 PM"
  },
  {
    "id": "12909585",
    "timestamp": "Nov 9, 2016 6:27:09 PM",
    "topic": "An American Tragedy",
    "url": "http://www.newyorker.com/news/news-desk/an-american-tragedy-donald-trump",
    "votes": 5,
    "posted": "Nov 9, 2016 1:11:34 PM"
  },
  {
    "id": "12909519",
    "timestamp": "Nov 9, 2016 2:56:48 PM",
    "topic": "Now Trump is president, demand his Tax Records as he promised",
    "votes": 4,
    "posted": "Nov 9, 2016 12:59:15 PM"
  },
  {
    "id": "12909276",
    "timestamp": "Nov 9, 2016 1:36:41 PM",
    "topic": "How the Internet tricked you into thinking Trump wouldn\u0027t win",
    "url": "http://thenextweb.com/politics/2016/11/09/internet-tricked-thinking-trump-wouldnt-win/",
    "votes": 3,
    "posted": "Nov 9, 2016 12:19:34 PM"
  },
  {
    "id": "12909031",
    "timestamp": "Nov 9, 2016 11:56:33 AM",
    "topic": "Donald Trump would have lost if Bernie Sanders had been the candidate",
    "url": "http://www.independent.co.uk/news/people/presidential-election-donald-trump-would-have-lost-if-bernie-sanders-had-been-the-candidate-a7406346.html",
    "votes": 6,
    "posted": "Nov 9, 2016 11:37:33 AM"
  },
  {
    "id": "12908850",
    "timestamp": "Nov 9, 2016 11:36:31 AM",
    "topic": "Putin Congratulates US President-Elect Trump on Victory",
    "url": "https://rns.online/articles/-Donald-Tramp-Mneniya-2016-11-09/",
    "votes": 3,
    "posted": "Nov 9, 2016 11:12:08 AM"
  },
  {
    "id": "12908803",
    "timestamp": "Nov 9, 2016 11:26:30 AM",
    "topic": "Recreational marijuana is now legal in California",
    "url": "http://www.businessinsider.com/california-legalizes-recreational-marijuana-proposition-64-results-2016-11",
    "votes": 6,
    "posted": "Nov 9, 2016 11:04:53 AM"
  },
  {
    "id": "12908729",
    "timestamp": "Nov 9, 2016 11:56:33 AM",
    "topic": "GoPro is recalling its Karma drone",
    "url": "http://www.theverge.com/2016/11/8/13569730/gopro-karma-drone-recall-announced",
    "votes": 6,
    "posted": "Nov 9, 2016 10:55:22 AM"
  },
  {
    "id": "12908722",
    "timestamp": "Nov 9, 2016 11:26:30 AM",
    "topic": "Mods – genuinely curious why the Eliezer Yudkowsky on Trump post was killed",
    "votes": 4,
    "posted": "Nov 9, 2016 10:54:45 AM"
  },
  {
    "id": "12908636",
    "timestamp": "Nov 9, 2016 12:16:35 PM",
    "topic": "Docker Container Anti Patterns",
    "url": "http://blog.arungupta.me/docker-container-anti-patterns",
    "votes": 5,
    "posted": "Nov 9, 2016 10:44:06 AM"
  },
  {
    "id": "12908599",
    "timestamp": "Nov 9, 2016 11:16:29 AM",
    "topic": "FSF: “DRM Is Used to Lock In, Control and Spy on Users”",
    "url": "https://torrentfreak.com/drm-is-used-to-lock-in-control-and-spy-on-users-161108/",
    "votes": 6,
    "posted": "Nov 9, 2016 10:39:37 AM"
  },
  {
    "id": "12908569",
    "timestamp": "Nov 9, 2016 11:36:31 AM",
    "topic": "What do you think of Indian Government\u0027s decision to demonetize 500, 1000 notes?",
    "url": "https://www.quora.com/What-do-you-think-of-the-decision-by-the-Indian-Government-to-demonetize-%E2%82%B9500-and-%E2%82%B91000-notes/answer/Pallav-Kaushish?srid\u003dhKgI\u0026share\u003dc09f8eb0",
    "votes": 4,
    "posted": "Nov 9, 2016 10:35:24 AM"
  },
  {
    "id": "12908497",
    "timestamp": "Nov 9, 2016 10:36:25 AM",
    "topic": "Strikingly (YC W13) is hiring in our Shanghai office",
    "url": "http://www.strikingly.com/s/careers?utm_source\u003dhn\u0026utm_content\u003dsh",
    "votes": 1,
    "posted": "Nov 9, 2016 10:27:50 AM"
  },
  {
    "id": "12908488",
    "timestamp": "Nov 9, 2016 6:17:08 PM",
    "topic": "React component to PNG converter",
    "url": "https://github.com/jxnblk/repng",
    "votes": 3,
    "posted": "Nov 9, 2016 10:27:05 AM"
  },
  {
    "id": "12907845",
    "timestamp": "Nov 10, 2016 3:07:59 AM",
    "topic": "The Day After – Charlie\u0027s Diary",
    "url": "http://www.antipope.org/charlie/blog-static/2016/11/the-day-after.html",
    "votes": 3,
    "posted": "Nov 9, 2016 9:32:46 AM"
  },
  {
    "id": "12907349",
    "timestamp": "Nov 9, 2016 8:56:18 AM",
    "topic": "FoxNews announces Trump new president of the United States",
    "url": "http://www.foxnews.com/politics/2016/11/08/fox-news-projects-trump-wins-presidency.html",
    "votes": 4,
    "posted": "Nov 9, 2016 8:48:24 AM"
  },
  {
    "id": "12907278",
    "timestamp": "Nov 9, 2016 9:06:19 AM",
    "topic": "Hillary Clinton concedes",
    "url": "http://www.cnn.com/2016/11/08/politics/election-day-2016-highlights/index.html",
    "votes": 4,
    "posted": "Nov 9, 2016 8:43:25 AM"
  },
  {
    "id": "12907252",
    "timestamp": "Nov 9, 2016 10:06:23 AM",
    "topic": "Developer-driven development",
    "url": "https://dev.to/isaacandsuch/developer-driven-development/",
    "votes": 3,
    "posted": "Nov 9, 2016 8:41:17 AM"
  },
  {
    "id": "12907201",
    "timestamp": "Nov 9, 2016 8:46:16 AM",
    "topic": "Donald trump is the new US president",
    "url": "https://www.washingtonpost.com/news/the-fix/wp/2016/11/08/donald-trumps-path-to-victory-is-suddenly-looking-much-much-wider/?hpid\u003dhp_hp-bignews3_fix-electoralmap-210am%3Ahomepage%2Fstory",
    "votes": 77,
    "posted": "Nov 9, 2016 8:36:47 AM"
  },
  {
    "id": "12907145",
    "timestamp": "Nov 9, 2016 8:46:16 AM",
    "topic": "Ask HN: POTUS Donald Trump; What this means to Silicon Valley",
    "votes": 18,
    "posted": "Nov 9, 2016 8:30:26 AM"
  },
  {
    "id": "12907100",
    "timestamp": "Nov 9, 2016 8:46:17 AM",
    "topic": "Peter Thiel – Full Speech – 2016 Republican National Convention",
    "url": "https://www.youtube.com/watch?v\u003dUTJB8AkT1dk",
    "votes": 8,
    "posted": "Nov 9, 2016 8:26:31 AM"
  },
  {
    "id": "12907055",
    "timestamp": "Nov 9, 2016 9:26:20 AM",
    "topic": "E-Ink wallet – The next generation wallet",
    "url": "https://www.indiegogo.com/projects/e-ink-wallet-the-next-generation-wallet-gadget-gadgets",
    "votes": 3,
    "posted": "Nov 9, 2016 8:20:54 AM"
  },
  {
    "id": "12906982",
    "timestamp": "Nov 9, 2016 8:26:15 AM",
    "topic": "Ask HN: Who\u0027s making money during the election madness?",
    "votes": 6,
    "posted": "Nov 9, 2016 8:11:33 AM"
  },
  {
    "id": "12906896",
    "timestamp": "Nov 9, 2016 8:46:17 AM",
    "topic": "Trump and Brexit – International Coverage Bias",
    "url": "https://medium.com/@WolframHempel_82303/trump-brexit-international-coverage-bias-d52a2e4a3698#.ojfat4y1n",
    "votes": 6,
    "posted": "Nov 9, 2016 8:00:24 AM"
  },
  {
    "id": "12906864",
    "timestamp": "Nov 9, 2016 8:46:17 AM",
    "topic": "Ask HN: Aside from big business and Twitter, who actually won tonight?",
    "votes": 3,
    "posted": "Nov 9, 2016 7:55:05 AM"
  },
  {
    "id": "12906846",
    "timestamp": "Nov 9, 2016 8:06:12 AM",
    "topic": "Donald Trump Is the Next President of the United States",
    "url": "http://www.realclearpolitics.com/elections/live_results/2016_general/president/map.html",
    "votes": 10,
    "posted": "Nov 9, 2016 7:52:33 AM"
  },
  {
    "id": "12906836",
    "timestamp": "Nov 9, 2016 8:06:12 AM",
    "topic": "Trump Nears Victory",
    "url": "http://www.nytimes.com/2016/11/08/us/politics/election-live.html?pagewanted\u003dall",
    "votes": 19,
    "posted": "Nov 9, 2016 7:51:15 AM"
  },
  {
    "id": "12906809",
    "timestamp": "Nov 9, 2016 7:56:11 AM",
    "topic": "Snowden Live will start November 10th around 22:30 CET / 4:30 PM Eastern",
    "url": "https://www.startpage.com/snowden/",
    "votes": 14,
    "posted": "Nov 9, 2016 7:45:30 AM"
  },
  {
    "id": "12906783",
    "timestamp": "Nov 9, 2016 7:56:11 AM",
    "topic": "The smug style in American liberalism",
    "url": "http://www.vox.com/2016/4/21/11451378/smug-american-liberalism",
    "votes": 11,
    "posted": "Nov 9, 2016 7:41:30 AM"
  },
  {
    "id": "12906773",
    "timestamp": "Nov 9, 2016 8:26:15 AM",
    "topic": "XKCD Election Math",
    "url": "https://xkcd.com/1131/",
    "votes": 5,
    "posted": "Nov 9, 2016 7:38:58 AM"
  },
  {
    "id": "12906766",
    "timestamp": "Nov 9, 2016 8:06:12 AM",
    "topic": "Reddit Traffic Has Been Dropping for a Year",
    "url": "https://www.reddit.com/r/AskReddit/about/traffic/",
    "votes": 6,
    "posted": "Nov 9, 2016 7:37:40 AM"
  },
  {
    "id": "12906691",
    "timestamp": "Nov 9, 2016 7:56:11 AM",
    "topic": "Maple Match",
    "url": "http://www.maplematch.com/",
    "votes": 14,
    "posted": "Nov 9, 2016 7:24:01 AM"
  },
  {
    "id": "12906631",
    "timestamp": "Nov 9, 2016 7:56:11 AM",
    "topic": "Brexit, Trump and the Ultimatum Game",
    "url": "https://medium.com/@jamesallworth/brexit-trump-and-the-ultimatum-game-2237e17de71c#.704pmhv24",
    "votes": 3,
    "posted": "Nov 9, 2016 7:11:33 AM"
  },
  {
    "id": "12906627",
    "timestamp": "Nov 9, 2016 7:36:09 AM",
    "topic": "Ask HN: If Trump wins. How could it impact the tech industry?",
    "votes": 7,
    "posted": "Nov 9, 2016 7:10:52 AM"
  },
  {
    "id": "12906617",
    "timestamp": "Nov 9, 2016 7:36:09 AM",
    "topic": "Ask HN: Trump is winning. Is US media to blame?",
    "votes": 3,
    "posted": "Nov 9, 2016 7:09:02 AM"
  },
  {
    "id": "12906471",
    "timestamp": "Nov 9, 2016 7:16:07 AM",
    "topic": "Idiocracy (2006)",
    "url": "https://en.wikipedia.org/wiki/Idiocracy",
    "votes": 6,
    "posted": "Nov 9, 2016 6:46:52 AM"
  },
  {
    "id": "12906466",
    "timestamp": "Nov 9, 2016 7:56:11 AM",
    "topic": "The Intellectual yet Idiot",
    "url": "https://medium.com/@nntaleb/the-intellectual-yet-idiot-13211e2d0577#.8lg4jek8v",
    "votes": 4,
    "posted": "Nov 9, 2016 6:46:22 AM"
  },
  {
    "id": "12906390",
    "timestamp": "Nov 9, 2016 12:36:37 PM",
    "topic": "The Intellectual yet Idiot",
    "url": "https://medium.com/@nntaleb/the-intellectual-yet-idiot-13211e2d0577#.g7zcs1omq",
    "votes": 3,
    "posted": "Nov 9, 2016 6:35:52 AM"
  },
  {
    "id": "12906342",
    "timestamp": "Nov 9, 2016 6:36:04 AM",
    "topic": "Canadian immigration site crash",
    "url": "http://www.businessinsider.com/canadian-immigration-site-crash-election-2016-11",
    "votes": 6,
    "posted": "Nov 9, 2016 6:28:15 AM"
  },
  {
    "id": "12906339",
    "timestamp": "Nov 9, 2016 6:56:06 AM",
    "topic": "Yudkowsky: Trump elected due to misguided optimism",
    "url": "https://www.facebook.com/yudkowsky/posts/10154746398729228",
    "votes": 4,
    "posted": "Nov 9, 2016 6:27:52 AM"
  },
  {
    "id": "12906336",
    "timestamp": "Nov 9, 2016 10:46:27 AM",
    "topic": "Native virtualization for macOS",
    "url": "https://veertu.com",
    "votes": 9,
    "posted": "Nov 9, 2016 6:27:36 AM"
  },
  {
    "id": "12906308",
    "timestamp": "Nov 9, 2016 6:26:03 AM",
    "topic": "Sr. Angular Developer at Upcall in SF (YC F3)",
    "url": "http://upcall.applytojob.com/apply/s3I9tL/Sr-Frontend-Angular2-Developer",
    "votes": 1,
    "posted": "Nov 9, 2016 6:23:08 AM"
  },
  {
    "id": "12906305",
    "timestamp": "Nov 9, 2016 6:36:04 AM",
    "topic": "5 Reasons Why Trump Will Win",
    "url": "http://michaelmoore.com/trumpwillwin/",
    "votes": 6,
    "posted": "Nov 9, 2016 6:22:47 AM"
  },
  {
    "id": "12906284",
    "timestamp": "Nov 9, 2016 6:46:05 AM",
    "topic": "Ask HN: How do the news networks get the election data?",
    "votes": 9,
    "posted": "Nov 9, 2016 6:17:37 AM"
  },
  {
    "id": "12906237",
    "timestamp": "Nov 9, 2016 8:26:15 AM",
    "topic": "Google Cloud Platform Tokyo region now open for business",
    "url": "https://blog.google/topics/google-cloud/google-cloud-platform-tokyo-region-now-open-for-business/",
    "votes": 3,
    "posted": "Nov 9, 2016 6:08:24 AM"
  },
  {
    "id": "12906232",
    "timestamp": "Nov 9, 2016 6:36:04 AM",
    "topic": "Canada\u0027s immigration website crashes on election night",
    "url": "http://www.ctvnews.ca/canada/canada-s-immigration-website-crashes-on-election-night-1.3152231?hootPostID\u003d14d10ea891a36bd74ea02d19ec7cf954",
    "votes": 38,
    "posted": "Nov 9, 2016 6:07:50 AM"
  },
  {
    "id": "12906129",
    "timestamp": "Nov 9, 2016 6:36:04 AM",
    "topic": "Nginx.conf 2016: Keynote with Gus Robertson and Igor Sysoev",
    "url": "https://www.nginx.com/blog/gus-robertson-keynote-with-igor-sysoev-nginx-conf-2016/",
    "votes": 3,
    "posted": "Nov 9, 2016 5:50:58 AM"
  },
  {
    "id": "12906119",
    "timestamp": "Nov 9, 2016 6:26:03 AM",
    "topic": "Elm is Wrong",
    "url": "http://reasonablypolymorphic.com/blog/elm-is-wrong",
    "votes": 14,
    "posted": "Nov 9, 2016 5:49:05 AM"
  },
  {
    "id": "12906081",
    "timestamp": "Nov 9, 2016 5:45:59 AM",
    "topic": "California just legalized recreational marijuana",
    "url": "http://www.theverge.com/2016/11/8/13520486/marijuana-legalization-california-election-2016",
    "votes": 6,
    "posted": "Nov 9, 2016 5:38:08 AM"
  },
  {
    "id": "12906065",
    "timestamp": "Nov 9, 2016 5:45:59 AM",
    "topic": "Canada\u0027s Start-up Visa",
    "url": "http://www.cic.gc.ca/english/immigrate/business/start-up/",
    "votes": 4,
    "posted": "Nov 9, 2016 5:34:06 AM"
  },
  {
    "id": "12906040",
    "timestamp": "Nov 9, 2016 5:56:00 AM",
    "topic": "It\u0027s Charisma, Stupid",
    "url": "http://paulgraham.com/charisma.html",
    "votes": 7,
    "posted": "Nov 9, 2016 5:27:14 AM"
  },
  {
    "id": "12906019",
    "timestamp": "Nov 9, 2016 6:26:03 AM",
    "topic": "Ask HN: Any good resources for finding software jobs abroad?",
    "votes": 5,
    "posted": "Nov 9, 2016 5:23:18 AM"
  },
  {
    "id": "12906002",
    "timestamp": "Nov 9, 2016 8:46:17 AM",
    "topic": "14 Tech Tools for Your Coworking Space",
    "url": "http://www.thefarmsoho.com/magazine-blog/coworking-space-nyc/tech-coworking-space",
    "votes": 3,
    "posted": "Nov 9, 2016 5:16:43 AM"
  },
  {
    "id": "12905991",
    "timestamp": "Nov 9, 2016 5:35:58 AM",
    "topic": "LAPD Prepping for “Riot Mode” in Some Neighborhoods If Donald Trump Wins",
    "url": "http://deadline.com/2016/11/lapd-riot-mode-plans-donald-trump-election-1201850978/",
    "votes": 3,
    "posted": "Nov 9, 2016 5:12:21 AM"
  },
  {
    "id": "12905954",
    "timestamp": "Nov 9, 2016 5:25:57 AM",
    "topic": "Real-Time Stock Indices Futures",
    "url": "http://www.investing.com/indices/indices-futures",
    "votes": 4,
    "posted": "Nov 9, 2016 5:01:54 AM"
  },
  {
    "id": "12905939",
    "timestamp": "Nov 9, 2016 5:45:59 AM",
    "topic": "Why you should never use Socket.IO",
    "url": "https://github.com/uWebSockets/uWebSockets#benchmarks-table---validate",
    "votes": 11,
    "posted": "Nov 9, 2016 4:58:00 AM"
  },
  {
    "id": "12905919",
    "timestamp": "Nov 9, 2016 5:25:57 AM",
    "topic": "OpenSource Electronic Medical Records (EMR) Software",
    "url": "http://www.bahmni.org/",
    "votes": 3,
    "posted": "Nov 9, 2016 4:51:43 AM"
  },
  {
    "id": "12905883",
    "timestamp": "Nov 9, 2016 6:16:02 AM",
    "topic": "Scroll with your mouse on a remote mosh tmux session",
    "url": "https://blog.filippo.io/my-remote-shell-session-setup/",
    "votes": 3,
    "posted": "Nov 9, 2016 4:37:12 AM"
  },
  {
    "id": "12905840",
    "timestamp": "Nov 9, 2016 8:06:12 AM",
    "topic": "BGP Large Communities: time to take action",
    "url": "https://blog.apnic.net/2016/11/09/bgp-large-communities-time-take-action/",
    "votes": 4,
    "posted": "Nov 9, 2016 4:23:58 AM"
  },
  {
    "id": "12905795",
    "timestamp": "Nov 9, 2016 5:05:55 AM",
    "topic": "Nate Silver rages at Huffington Post editor in 14-part tweetstorm",
    "url": "http://www.politico.com/story/2016/11/nate-silver-huffington-post-polls-twitter-230815",
    "votes": 9,
    "posted": "Nov 9, 2016 4:07:55 AM"
  },
  {
    "id": "12905749",
    "timestamp": "Nov 9, 2016 9:16:19 AM",
    "topic": "Blockchain game that runs in the browser",
    "url": "http://gotoshi.de/about",
    "votes": 4,
    "posted": "Nov 9, 2016 3:48:52 AM"
  },
  {
    "id": "12905717",
    "timestamp": "Nov 9, 2016 5:25:57 AM",
    "topic": "GoPro is recalling the Karma drone after just 16 days on the market",
    "url": "https://techcrunch.com/2016/11/08/gopro-is-recalling-the-karma-drone-after-just-16-days-on-the-market/?ncid\u003drss",
    "votes": 4,
    "posted": "Nov 9, 2016 3:42:23 AM"
  },
  {
    "id": "12905711",
    "timestamp": "Nov 9, 2016 4:15:52 AM",
    "topic": "How Segregated Witness Is About to Fix Hardware Wallets",
    "url": "https://bitcoinmagazine.com/articles/how-segregated-witness-is-about-to-fix-hardware-wallets-1478110057?_ke\u003dbW9za2FseXVrQGdtYWlsLmNvbQ%3D%3D",
    "votes": 3,
    "posted": "Nov 9, 2016 3:41:31 AM"
  },
  {
    "id": "12905668",
    "timestamp": "Nov 9, 2016 3:45:49 AM",
    "topic": "Detecting Genre from Book Covers Using Deep Learning",
    "url": "https://arxiv.org/abs/1610.09204",
    "votes": 4,
    "posted": "Nov 9, 2016 3:31:48 AM"
  },
  {
    "id": "12905541",
    "timestamp": "Nov 9, 2016 3:25:48 AM",
    "topic": "New MacBook Pro is selling like crazy",
    "url": "https://www.google.com/amp/bgr.com/2016/11/08/macbook-pro-sale-apple-13-inch-revenue-numbers/amp/?client\u003dsafari",
    "votes": 8,
    "posted": "Nov 9, 2016 2:58:59 AM"
  },
  {
    "id": "12905470",
    "timestamp": "Nov 9, 2016 2:45:45 AM",
    "topic": "You’re engiNEARer to your dream job. Join the team at BloomThat (YC S13)",
    "url": "https://jobs.lever.co/bloomthat",
    "votes": 1,
    "posted": "Nov 9, 2016 2:41:32 AM"
  },
  {
    "id": "12905428",
    "timestamp": "Nov 9, 2016 3:45:50 AM",
    "topic": "Test-Driving a $200 Coding Font: Operator Mono",
    "url": "https://www.kennethreitz.org/essays/test-driving-a-200-programming-font-operator-mono",
    "votes": 7,
    "posted": "Nov 9, 2016 2:30:17 AM"
  },
  {
    "id": "12905398",
    "timestamp": "Nov 9, 2016 2:45:45 AM",
    "topic": "Deep Learning cleans podcast episodes from ‘ahem’ sounds",
    "url": "https://github.com/worldofpiggy/deeplearning-ahem-detector",
    "votes": 5,
    "posted": "Nov 9, 2016 2:23:08 AM"
  },
  {
    "id": "12905346",
    "timestamp": "Nov 10, 2016 12:07:42 AM",
    "topic": "Show HN: I\u0027m 17 and I created an iOS app to hide one photo within another",
    "url": "https://itunes.apple.com/us/app/veil-hide-and-reveal-photos/id1171571496",
    "votes": 7,
    "posted": "Nov 9, 2016 2:07:45 AM"
  },
  {
    "id": "12905265",
    "timestamp": "Nov 9, 2016 2:15:42 AM",
    "topic": "Live Presidential Forecast (with priors)",
    "url": "http://www.nytimes.com/elections/forecast/president?1",
    "votes": 4,
    "posted": "Nov 9, 2016 1:43:43 AM"
  },
  {
    "id": "12904962",
    "timestamp": "Nov 9, 2016 12:45:35 AM",
    "topic": "Leaked Paper Suggests That the EmDrive Actually Works",
    "url": "http://www.iflscience.com/space/leaked-paper-suggests-that-the-emdrive-actually-works/",
    "votes": 5,
    "posted": "Nov 9, 2016 12:35:54 AM"
  },
  {
    "id": "12904890",
    "timestamp": "Nov 9, 2016 12:55:36 AM",
    "topic": "Making Videos on Linux",
    "url": "http://blog.system76.com/post/152896823413/making-videos-on-linux-linux-gamer",
    "votes": 3,
    "posted": "Nov 9, 2016 12:23:59 AM"
  },
  {
    "id": "12904845",
    "timestamp": "Nov 9, 2016 12:35:35 AM",
    "topic": "Presidential Election Results",
    "url": "http://www.nytimes.com/elections/results/president?action\u003dclick\u0026pgtype\u003dHomepage\u0026clickSource\u003dstory-heading\u0026module\u003dspan-abc-region\u0026region\u003dspan-abc-region\u0026WT.nav\u003dspan-abc-region",
    "votes": 8,
    "posted": "Nov 9, 2016 12:17:50 AM"
  },
  {
    "id": "12904757",
    "timestamp": "Nov 9, 2016 12:45:36 AM",
    "topic": "We\u0027re Probably Imagining Aliens Wrong",
    "url": "http://www.theatlantic.com/video/index/506846/were-probably-imagining-aliens-wrong/?single_page\u003dtrue",
    "votes": 6,
    "posted": "Nov 9, 2016 12:06:15 AM"
  },
  {
    "id": "12904691",
    "timestamp": "Nov 9, 2016 12:25:34 AM",
    "topic": "Charge Revelas New Electric Truck Wich Looks Just Like a Box",
    "url": "http://pluginfuture.com/charge-revelas-new-electric-truck/",
    "votes": 3,
    "posted": "Nov 8, 2016 11:56:12 PM"
  },
  {
    "id": "12904561",
    "timestamp": "Nov 9, 2016 1:25:39 AM",
    "topic": "Impossible Spaceship Engine “EmDrive” Actually Works, Leaked NASA Report Reveals",
    "url": "http://www.thedrive.com/news/5904/impossible-spaceship-engine-called-emdrive-actually-works-leaked-nasa-report-reveals",
    "votes": 10,
    "posted": "Nov 8, 2016 11:34:21 PM"
  },
  {
    "id": "12904437",
    "timestamp": "Nov 8, 2016 11:15:28 PM",
    "topic": "Be the First Product Designer at Close.io",
    "url": "https://jobs.lever.co/close.io/040dbdb1-66c5-4f34-bd20-9eedc48c89f8?lever-source\u003dHN",
    "votes": 1,
    "posted": "Nov 8, 2016 11:13:45 PM"
  },
  {
    "id": "12904344",
    "timestamp": "Nov 8, 2016 11:35:30 PM",
    "topic": "Walgreens Seeks to Recover $140M Investment from Theranos",
    "url": "http://www.wsj.com/articles/walgreens-seeks-to-recover-140-million-investment-from-theranos-1478642410",
    "votes": 5,
    "posted": "Nov 8, 2016 11:01:49 PM"
  },
  {
    "id": "12904216",
    "timestamp": "Nov 8, 2016 11:15:28 PM",
    "topic": "Why Twitter Must Be Saved",
    "url": "https://stratechery.com/2016/why-twitter-must-be-saved/",
    "votes": 3,
    "posted": "Nov 8, 2016 10:42:59 PM"
  },
  {
    "id": "12903966",
    "timestamp": "Nov 8, 2016 10:25:17 PM",
    "topic": "What\u0027s the best aha moment you\u0027ve had?",
    "votes": 6,
    "posted": "Nov 8, 2016 10:10:07 PM"
  },
  {
    "id": "12903912",
    "timestamp": "Nov 8, 2016 10:35:18 PM",
    "topic": "CBC threatens podcast app makers, argues that RSS readers violate copyright",
    "url": "http://boingboing.net/2016/11/08/cbc-threatens-podcast-app-make.html",
    "votes": 3,
    "posted": "Nov 8, 2016 10:03:30 PM"
  },
  {
    "id": "12903904",
    "timestamp": "Nov 9, 2016 5:56:00 AM",
    "topic": "Show HN: The Elo rating system applied to photo, a new way to do photo contests",
    "url": "http://www.pixide.org",
    "votes": 5,
    "posted": "Nov 8, 2016 10:01:57 PM"
  },
  {
    "id": "12903801",
    "timestamp": "Nov 8, 2016 10:25:17 PM",
    "topic": "3DNES just officially dropped",
    "url": "http://helpmebro.com/posts/wbcyQqFeqa",
    "votes": 6,
    "posted": "Nov 8, 2016 9:49:42 PM"
  },
  {
    "id": "12903745",
    "timestamp": "Nov 9, 2016 2:25:43 AM",
    "topic": "Neural Networks Designing Neural Networks: Cometh the Singularity?",
    "url": "https://arxiv.org/abs/1611.02120",
    "votes": 8,
    "posted": "Nov 8, 2016 9:43:31 PM"
  },
  {
    "id": "12903673",
    "timestamp": "Nov 9, 2016 3:25:48 AM",
    "topic": "NASA has completed the $8.7B James Webb space telescope",
    "url": "https://www.engadget.com/2016/11/07/nasa-has-completed-the-8-7-billion-james-webb-space-telescope/",
    "votes": 5,
    "posted": "Nov 8, 2016 9:32:49 PM"
  },
  {
    "id": "12903533",
    "timestamp": "Nov 8, 2016 10:45:20 PM",
    "topic": "Can deep learning help solve lip reading?",
    "url": "http://www.theverge.com/2016/11/7/13551210/ai-deep-learning-lip-reading-accuracy-oxford",
    "votes": 3,
    "posted": "Nov 8, 2016 9:13:18 PM"
  },
  {
    "id": "12903359",
    "timestamp": "Nov 8, 2016 9:15:07 PM",
    "topic": "Apple Engineer Talks About New 2016 Macbook Pro",
    "url": "https://www.youtube.com/watch?v\u003dQNHGDmbbzUU",
    "votes": 4,
    "posted": "Nov 8, 2016 8:47:55 PM"
  },
  {
    "id": "12903032",
    "timestamp": "Nov 8, 2016 8:25:02 PM",
    "topic": "Kotlin 1.0.5 is here",
    "url": "https://blog.jetbrains.com/kotlin/2016/11/kotlin-1-0-5-is-here/",
    "votes": 4,
    "posted": "Nov 8, 2016 8:09:48 PM"
  },
  {
    "id": "12903005",
    "timestamp": "Nov 8, 2016 8:35:03 PM",
    "topic": "Self Driving Car Engineer Deep Dive…",
    "url": "https://medium.com/@paysa/self-driving-car-engineer-deep-dive-89b814f3ff04#.wl9u5ihhm",
    "votes": 5,
    "posted": "Nov 8, 2016 8:06:42 PM"
  },
  {
    "id": "12902887",
    "timestamp": "Nov 8, 2016 8:55:05 PM",
    "topic": "Benefits of using tmux – streamlining your development environment",
    "url": "https://blog.bugsnag.com/benefits-of-using-tmux/",
    "votes": 6,
    "posted": "Nov 8, 2016 7:52:57 PM"
  },
  {
    "id": "12902659",
    "timestamp": "Nov 8, 2016 11:55:32 PM",
    "topic": "“The Will of the People” Is a Myth",
    "url": "https://mises.org/blog/will-people-myth",
    "votes": 4,
    "posted": "Nov 8, 2016 7:27:28 PM"
  },
  {
    "id": "12902620",
    "timestamp": "Nov 8, 2016 7:44:59 PM",
    "topic": "Review: The NES Classic Edition and all 30 games on it",
    "url": "https://techcrunch.com/2016/11/07/review-the-nes-classic-edition-and-all-30-games-on-it/",
    "votes": 3,
    "posted": "Nov 8, 2016 7:22:36 PM"
  },
  {
    "id": "12902582",
    "timestamp": "Nov 8, 2016 7:24:55 PM",
    "topic": "Zoomer (YC S14) is hiring DevOps engineers for our globally distributed team",
    "url": "https://jobs.lever.co/zoomer?lever-source\u003dhackernews",
    "votes": 1,
    "posted": "Nov 8, 2016 7:18:16 PM"
  },
  {
    "id": "12902530",
    "timestamp": "Nov 8, 2016 7:24:55 PM",
    "topic": "Webscraping with Rvest",
    "url": "http://www.programmingr.com/content/webscraping-rvest-easy-mba-can/",
    "votes": 6,
    "posted": "Nov 8, 2016 7:10:59 PM"
  },
  {
    "id": "12902514",
    "timestamp": "Nov 8, 2016 7:34:56 PM",
    "topic": "Ask HN: List of frequently used UI notifications texts",
    "votes": 4,
    "posted": "Nov 8, 2016 7:09:20 PM"
  },
  {
    "id": "12902409",
    "timestamp": "Nov 10, 2016 3:39:02 PM",
    "topic": "Writing Your Own Programming Language",
    "url": "https://github.com/marciok/Mu#writing-your-own-programming-language",
    "votes": 7,
    "posted": "Nov 8, 2016 6:57:09 PM"
  },
  {
    "id": "12902304",
    "timestamp": "Nov 8, 2016 7:54:59 PM",
    "topic": "So you think you know C?",
    "url": "https://hackernoon.com/so-you-think-you-know-c-8d4e2cd6f6a6",
    "votes": 4,
    "posted": "Nov 8, 2016 6:45:22 PM"
  },
  {
    "id": "12902197",
    "timestamp": "Nov 8, 2016 9:05:06 PM",
    "topic": "Announcing TypeScript 2.1 RC: Better Inference, Async Functions, and More",
    "url": "https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more",
    "votes": 3,
    "posted": "Nov 8, 2016 6:34:03 PM"
  },
  {
    "id": "12902159",
    "timestamp": "Nov 9, 2016 5:56:00 AM",
    "topic": "Show HN: Taste Movies – Watch movies based on your taste",
    "url": "https://www.taste.io?ref\u003dhn",
    "votes": 20,
    "posted": "Nov 8, 2016 6:30:14 PM"
  },
  {
    "id": "12901933",
    "timestamp": "Nov 8, 2016 7:24:55 PM",
    "topic": "Ben Silbermann at Startup School [video]",
    "url": "http://themacro.com/articles/2016/11/ben-silbermann-at-startup-school/",
    "votes": 3,
    "posted": "Nov 8, 2016 6:07:15 PM"
  },
  {
    "id": "12901921",
    "timestamp": "Nov 8, 2016 8:55:05 PM",
    "topic": "Show HN: Browse YC Pitches and Pitch to Potential Hires",
    "url": "https://humblerise.com?keyword\u003dhackernews",
    "votes": 5,
    "posted": "Nov 8, 2016 6:05:56 PM"
  },
  {
    "id": "12901905",
    "timestamp": "Nov 8, 2016 6:14:49 PM",
    "topic": "How the Chinese Great Firewall fights off services like Tor",
    "url": "http://fermatslibrary.com/s/examining-how-the-great-firewall-discovers-hidden-circumvention-servers",
    "votes": 7,
    "posted": "Nov 8, 2016 6:04:10 PM"
  },
  {
    "id": "12901899",
    "timestamp": "Nov 8, 2016 8:45:04 PM",
    "topic": "Introducing Bloaty McBloatface: a size profiler for binaries",
    "url": "http://blog.reverberate.org/2016/11/07/introducing-bloaty-mcbloatface.html",
    "votes": 3,
    "posted": "Nov 8, 2016 6:03:47 PM"
  },
  {
    "id": "12901849",
    "timestamp": "Nov 8, 2016 7:34:56 PM",
    "topic": "Ask HN: When did you feel to resign/leave your last job?",
    "votes": 3,
    "posted": "Nov 8, 2016 5:59:34 PM"
  },
  {
    "id": "12901761",
    "timestamp": "Nov 9, 2016 5:56:00 AM",
    "topic": "Show HN: Nymeria – Find LinkedIn and GitHub User Emails",
    "url": "https://www.nymeria.io",
    "votes": 9,
    "posted": "Nov 8, 2016 5:50:42 PM"
  },
  {
    "id": "12901724",
    "timestamp": "Nov 8, 2016 6:04:48 PM",
    "topic": "How settling Mars could create a new human species",
    "url": "http://nautil.us/issue/41/selection/the-martians-are-comingand-theyre-human",
    "votes": 3,
    "posted": "Nov 8, 2016 5:47:08 PM"
  },
  {
    "id": "12901660",
    "timestamp": "Nov 8, 2016 5:54:47 PM",
    "topic": "Emergent Gravity and the Dark Universe",
    "url": "https://arxiv.org/abs/1611.02269",
    "votes": 3,
    "posted": "Nov 8, 2016 5:40:45 PM"
  },
  {
    "id": "12901570",
    "timestamp": "Nov 8, 2016 6:24:50 PM",
    "topic": "A keyboard for your back",
    "url": "https://medium.com/@tartavull/thor-your-next-keyboard-20b9ce7dd2b1#.8740gcgm7",
    "votes": 3,
    "posted": "Nov 8, 2016 5:31:39 PM"
  },
  {
    "id": "12901506",
    "timestamp": "Nov 8, 2016 5:54:47 PM",
    "topic": "Micro web-framework for COBOL",
    "url": "https://github.com/azac/cobol-on-wheelchair",
    "votes": 3,
    "posted": "Nov 8, 2016 5:25:06 PM"
  },
  {
    "id": "12901501",
    "timestamp": "Nov 8, 2016 6:44:52 PM",
    "topic": "The moment of truth arrives for the USC/L.A. Times tracking poll",
    "url": "http://www.latimes.com/politics/la-na-pol-usc-latimes-poll-20161108-story.html",
    "votes": 3,
    "posted": "Nov 8, 2016 5:24:40 PM"
  },
  {
    "id": "12901407",
    "timestamp": "Nov 8, 2016 6:04:48 PM",
    "topic": "Assange Statement on the US-Election",
    "url": "https://wikileaks.org/Assange-Statement-on-the-US-Election.html",
    "votes": 5,
    "posted": "Nov 8, 2016 5:15:15 PM"
  },
  {
    "id": "12901364",
    "timestamp": "Nov 8, 2016 5:44:46 PM",
    "topic": "Why Nate Silver and Sam Wang Are Wrong",
    "url": "https://www.quantamagazine.org/20161108-why-nate-silver-and-sam-wang-are-wrong/",
    "votes": 14,
    "posted": "Nov 8, 2016 5:10:41 PM"
  },
  {
    "id": "12901361",
    "timestamp": "Nov 9, 2016 6:26:03 AM",
    "topic": "Show HN: A real-time heat-map of #Election2016 tweets",
    "url": "http://dracula.sentimentron.co.uk/election-2016/",
    "votes": 4,
    "posted": "Nov 8, 2016 5:10:31 PM"
  },
  {
    "id": "12901355",
    "timestamp": "Nov 8, 2016 7:34:57 PM",
    "topic": "Ask HN: Am I right there\u0027s no place for C++ developers in the startup world?",
    "votes": 4,
    "posted": "Nov 8, 2016 5:09:56 PM"
  },
  {
    "id": "12901145",
    "timestamp": "Nov 8, 2016 5:34:45 PM",
    "topic": "Snowden shows how easy it is to hack into a US voting machine with a memory card",
    "url": "https://www.thesun.co.uk/news/2138902/cyber-experts-show-how-easy-it-is-to-hack-into-a-us-voting-machine-with-a-24-memory-card/",
    "votes": 3,
    "posted": "Nov 8, 2016 4:48:49 PM"
  },
  {
    "id": "12901139",
    "timestamp": "Nov 8, 2016 5:04:42 PM",
    "topic": "Julia is the hottest new language on Wall Street",
    "url": "http://waterstechnology.com/waters/feature/2476518/the-infancy-of-julia-an-inside-look-at-how-traders-and-economists-are-using-the-julia-programming-language",
    "votes": 14,
    "posted": "Nov 8, 2016 4:48:28 PM"
  },
  {
    "id": "12901132",
    "timestamp": "Nov 8, 2016 7:34:57 PM",
    "topic": "Ask HN: How to actually start freelancing?",
    "votes": 5,
    "posted": "Nov 8, 2016 4:47:29 PM"
  },
  {
    "id": "12901123",
    "timestamp": "Nov 8, 2016 5:34:45 PM",
    "topic": "How LinkedIn Drove a Wedge Between Microsoft and Salesforce",
    "url": "http://www.nytimes.com/2016/11/06/technology/how-linkedin-drove-a-wedge-between-microsoft-and-salesforce.html",
    "votes": 3,
    "posted": "Nov 8, 2016 4:46:21 PM"
  },
  {
    "id": "12901039",
    "timestamp": "Nov 8, 2016 6:14:49 PM",
    "topic": "Ask HN: How much productivity have you lost because of this election?",
    "votes": 3,
    "posted": "Nov 8, 2016 4:37:43 PM"
  },
  {
    "id": "12901012",
    "timestamp": "Nov 8, 2016 7:04:53 PM",
    "topic": "India PM Modi Abolishes 500 and 1,000 Rupee Notes to Fight Corruption",
    "url": "http://www.bloomberg.com/news/articles/2016-11-08/india-abolishes-inr500-1-000-rupee-notes-to-fight-corruption",
    "votes": 7,
    "posted": "Nov 8, 2016 4:35:07 PM"
  },
  {
    "id": "12900975",
    "timestamp": "Nov 8, 2016 5:34:45 PM",
    "topic": "China Develops High-Speed Intelligent Unmanned Sea Vessel",
    "url": "http://www.defense-aerospace.com/articles-view/release/3/178544/china-testing-composite_built-unmanned-surface-vessel.html",
    "votes": 3,
    "posted": "Nov 8, 2016 4:29:36 PM"
  },
  {
    "id": "12900965",
    "timestamp": "Nov 8, 2016 4:34:39 PM",
    "topic": "India declares 500 and 1000 rupees notes illegal",
    "url": "http://newsite.thehindu.com/news/national/500-1000-rupee-notes-cease-to-be-legal-tender-from-midnight-tonight-PM/article16225089.ece",
    "votes": 4,
    "posted": "Nov 8, 2016 4:28:35 PM"
  },
  {
    "id": "12900886",
    "timestamp": "Nov 8, 2016 4:34:39 PM",
    "topic": "Why the Midwest Is About to Become America\u0027s Next Silicon Valley",
    "url": "http://www.forbes.com/sites/petertaylor/2016/11/07/why-the-midwest-is-about-to-become-americas-next-silicon-valley/",
    "votes": 3,
    "posted": "Nov 8, 2016 4:18:58 PM"
  },
  {
    "id": "12900701",
    "timestamp": "Nov 8, 2016 4:14:35 PM",
    "topic": "“The whole world ought to be concerned”: HK lawyers on Beijing’s “clarification”",
    "url": "http://qz.com/830533/the-whole-world-ought-to-be-concerned-hong-kong-lawyers-react-to-beijings-clarification-on-oaths/",
    "votes": 9,
    "posted": "Nov 8, 2016 3:58:00 PM"
  },
  {
    "id": "12900571",
    "timestamp": "Nov 8, 2016 4:04:34 PM",
    "topic": "Microsoft Is Now \u0027Open by Default\u0027, Says Xamarin Founder Miguel de Icaza",
    "url": "http://www.forbes.com/sites/adrianbridgwater/2016/11/08/microsoft-is-now-open-by-default-says-xamarin-founder-miguel-de-icaza/#5ed2c7b520e7",
    "votes": 4,
    "posted": "Nov 8, 2016 3:41:40 PM"
  },
  {
    "id": "12900548",
    "timestamp": "Nov 8, 2016 4:14:35 PM",
    "topic": "Hyperloop may become reality in Dubai",
    "url": "http://www.bbc.com/news/technology-37908915",
    "votes": 6,
    "posted": "Nov 8, 2016 3:39:15 PM"
  },
  {
    "id": "12900537",
    "timestamp": "Nov 8, 2016 4:04:34 PM",
    "topic": "Startups are overdosing on ambition these days",
    "url": "https://medium.com/startup-grind/you-dont-need-a-master-plan-you-just-need-to-start-9a3ec0455866",
    "votes": 3,
    "posted": "Nov 8, 2016 3:38:16 PM"
  },
  {
    "id": "12900515",
    "timestamp": "Nov 8, 2016 4:14:35 PM",
    "topic": "Ask HN: How do I protect my parents from the internet?",
    "votes": 12,
    "posted": "Nov 8, 2016 3:35:44 PM"
  },
  {
    "id": "12900479",
    "timestamp": "Nov 8, 2016 3:34:31 PM",
    "topic": "Canopy Labs (YC S12) Is Hiring for BDR / Account Executive Roles",
    "url": "https://canopylabs.com/careers#openings",
    "votes": 1,
    "posted": "Nov 8, 2016 3:32:02 PM"
  },
  {
    "id": "12900458",
    "timestamp": "Nov 8, 2016 4:14:37 PM",
    "topic": "Elon Musk says ppl should receive a universal income once robots take their jobs",
    "url": "http://www.independent.co.uk/news/people/elon-musk-universal-income-robots-ai-tesla-spacex-a7402556.html",
    "votes": 3,
    "posted": "Nov 8, 2016 3:30:01 PM"
  },
  {
    "id": "12900432",
    "timestamp": "Nov 8, 2016 4:14:35 PM",
    "topic": "Exit polls aren\u0027t what you think they are",
    "url": "https://nuttersandnuttier.com/exit-polls-arent-what-you-think-they-are-e93d031726fb#.z8cow174n",
    "votes": 7,
    "posted": "Nov 8, 2016 3:26:46 PM"
  },
  {
    "id": "12900429",
    "timestamp": "Nov 8, 2016 4:14:36 PM",
    "topic": "Islamophobia killed my brother. Let\u0027s end the hate",
    "url": "https://www.ted.com/talks/suzanne_barakat_islamophobia_killed_my_brother_let_s_end_the_hate",
    "votes": 5,
    "posted": "Nov 8, 2016 3:26:19 PM"
  },
  {
    "id": "12900412",
    "timestamp": "Nov 8, 2016 4:34:39 PM",
    "topic": "Google Trends Electionland",
    "url": "http://electionlandtrends.appspot.com/",
    "votes": 5,
    "posted": "Nov 8, 2016 3:24:24 PM"
  },
  {
    "id": "12900357",
    "timestamp": "Nov 8, 2016 4:14:35 PM",
    "topic": "China’s Internet Controls Will Get Stricter, to Dismay of Foreign Business",
    "url": "http://www.nytimes.com/2016/11/08/business/international/china-cyber-security-regulations.html?ref\u003dtechnology",
    "votes": 7,
    "posted": "Nov 8, 2016 3:18:06 PM"
  },
  {
    "id": "12900349",
    "timestamp": "Nov 8, 2016 4:14:36 PM",
    "topic": "Google accused of burying webmail service on search results",
    "url": "https://www.theguardian.com/technology/2016/nov/07/google-burying-webmail-service-search-results-protonmail",
    "votes": 3,
    "posted": "Nov 8, 2016 3:16:58 PM"
  },
  {
    "id": "12900304",
    "timestamp": "Nov 8, 2016 4:14:36 PM",
    "topic": "Former-gang members get their tattoos digitally removed",
    "url": "http://www.thememo.com/2016/11/08/skin-deep-gang-photos-skin-deep-kickstarter-skin-deep-tattoo-project/",
    "votes": 4,
    "posted": "Nov 8, 2016 3:09:41 PM"
  },
  {
    "id": "12900298",
    "timestamp": "Nov 9, 2016 5:05:55 AM",
    "topic": "Show HN: Cloud storage abstraction package for Go",
    "url": "https://medium.com/@matryer/introducing-stow-cloud-storage-abstraction-package-for-go-20cf2928d93c#.j6l0q5oxb",
    "votes": 7,
    "posted": "Nov 8, 2016 3:09:10 PM"
  },
  {
    "id": "12900279",
    "timestamp": "Nov 8, 2016 4:14:37 PM",
    "topic": "So you think you know C?",
    "url": "https://medium.com/@okaleniuk/so-you-think-you-know-c-8d4e2cd6f6a6#.eogq49y4a",
    "votes": 3,
    "posted": "Nov 8, 2016 3:07:08 PM"
  },
  {
    "id": "12900257",
    "timestamp": "Nov 8, 2016 4:24:38 PM",
    "topic": "Your market size is only a fraction of what you think it is",
    "url": "https://medium.com/startup-grind/your-market-size-is-only-a-fraction-of-what-you-think-it-is-f31f79cd1e95#.yu8lso655",
    "votes": 3,
    "posted": "Nov 8, 2016 3:02:34 PM"
  },
  {
    "id": "12900226",
    "timestamp": "Nov 8, 2016 4:34:40 PM",
    "topic": "Trade votes with voters from swing states",
    "url": "http://www.pbs.org/newshour/bb/apps-trade-votes-clinton-swing-states/",
    "votes": 3,
    "posted": "Nov 8, 2016 2:58:20 PM"
  },
  {
    "id": "12900153",
    "timestamp": "Nov 8, 2016 7:34:57 PM",
    "topic": "Ask HN: What would happen if Apple open-sourced OS X?",
    "votes": 3,
    "posted": "Nov 8, 2016 2:47:28 PM"
  },
  {
    "id": "12900127",
    "timestamp": "Nov 8, 2016 4:14:37 PM",
    "topic": "ThoughtWorks Technology Radar November 2016",
    "url": "https://www.thoughtworks.com/radar",
    "votes": 5,
    "posted": "Nov 8, 2016 2:43:32 PM"
  },
  {
    "id": "12900046",
    "timestamp": "Nov 8, 2016 4:14:35 PM",
    "topic": "An Interview with Eric Douglas of the Open Source Society",
    "url": "https://theinitialcommit.com/2016/11/08/eric-douglas/",
    "votes": 4,
    "posted": "Nov 8, 2016 2:33:41 PM"
  },
  {
    "id": "12899982",
    "timestamp": "Nov 8, 2016 4:14:37 PM",
    "topic": "Hillary Clinton and Donald Trump don\u0027t know how to use a personal computer",
    "url": "http://qz.com/829647/donald-trump-and-hillary-clinton-dont-know-how-to-use-computers/",
    "votes": 5,
    "posted": "Nov 8, 2016 2:23:43 PM"
  },
  {
    "id": "12899838",
    "timestamp": "Nov 8, 2016 2:14:25 PM",
    "topic": "A small dive into, and rejection of, Elm",
    "url": "https://medium.com/@boxed/a-small-dive-into-and-rejection-of-elm-8217fd5da235#.kkt82zm3y",
    "votes": 4,
    "posted": "Nov 8, 2016 2:01:52 PM"
  },
  {
    "id": "12899814",
    "timestamp": "Nov 8, 2016 7:34:57 PM",
    "topic": "Show HN: Slik Prospector – Find Anyone\u0027s Email",
    "url": "https://slik.ai/#/",
    "votes": 24,
    "posted": "Nov 8, 2016 1:57:10 PM"
  },
  {
    "id": "12899782",
    "timestamp": "Nov 8, 2016 1:54:24 PM",
    "topic": "EasyPost is still hiring more developers",
    "url": "https://www.easypost.com/jobs",
    "votes": 1,
    "posted": "Nov 8, 2016 1:50:27 PM"
  },
  {
    "id": "12899535",
    "timestamp": "Nov 8, 2016 1:14:20 PM",
    "topic": "Almost one in ten people set to quit the internet in the UK",
    "url": "http://superfast-it.com/internet/",
    "votes": 3,
    "posted": "Nov 8, 2016 1:01:47 PM"
  },
  {
    "id": "12899427",
    "timestamp": "Nov 8, 2016 2:14:25 PM",
    "topic": "Google foobar",
    "url": "https://www.google.com/foobar",
    "votes": 3,
    "posted": "Nov 8, 2016 12:41:16 PM"
  },
  {
    "id": "12899422",
    "timestamp": "Nov 8, 2016 1:14:20 PM",
    "topic": "Uber rival Karhoo shuts down",
    "url": "https://techcrunch.com/2016/11/08/uber-competitor-karhoo-shuts-down-after-blowing-through-250m/",
    "votes": 11,
    "posted": "Nov 8, 2016 12:40:27 PM"
  },
  {
    "id": "12899419",
    "timestamp": "Nov 8, 2016 1:04:19 PM",
    "topic": "Formation of Tesla Advanced Automation Germany",
    "url": "https://www.tesla.com/blog/formation-of-tesla-advanced-automation-germany",
    "votes": 19,
    "posted": "Nov 8, 2016 12:39:43 PM"
  },
  {
    "id": "12899412",
    "timestamp": "Nov 8, 2016 1:04:19 PM",
    "topic": "A Formal Security Analysis of the Signal Messaging Protocol [pdf]",
    "url": "https://eprint.iacr.org/2016/1013.pdf",
    "votes": 3,
    "posted": "Nov 8, 2016 12:37:57 PM"
  },
  {
    "id": "12899398",
    "timestamp": "Nov 8, 2016 1:24:21 PM",
    "topic": "\u0027Trust it\u0027: Results of Signal\u0027s first formal crypto analysis are in",
    "url": "http://www.theregister.co.uk/2016/11/08/trust_it_results_of_signals_first_formal_crypto_analysis_are_in/",
    "votes": 4,
    "posted": "Nov 8, 2016 12:35:52 PM"
  },
  {
    "id": "12899261",
    "timestamp": "Nov 8, 2016 2:24:26 PM",
    "topic": "Emotions You Don’t Feel",
    "url": "http://nautil.us/blog/you-can-have-emotions-you-dont-feel",
    "votes": 5,
    "posted": "Nov 8, 2016 12:07:13 PM"
  },
  {
    "id": "12899245",
    "timestamp": "Nov 8, 2016 5:34:45 PM",
    "topic": "The secret sauce to managing our backlog and TODO lists",
    "url": "https://blogs.msdn.microsoft.com/visualstudioalmrangers/2016/11/04/the-secret-sauce-to-managing-our-backlog-and-todo-lists/",
    "votes": 3,
    "posted": "Nov 8, 2016 12:03:21 PM"
  },
  {
    "id": "12899237",
    "timestamp": "Nov 8, 2016 5:34:45 PM",
    "topic": "Worthwhile Testing: What to test in a React app (and why)",
    "url": "https://daveceddia.com/what-to-test-in-react-app/",
    "votes": 3,
    "posted": "Nov 8, 2016 12:02:05 PM"
  },
  {
    "id": "12899219",
    "timestamp": "Nov 8, 2016 5:04:42 PM",
    "topic": "Parkinson\u0027s Law: work expands to fill the time available (1955)",
    "url": "http://www.economist.com/node/14116121",
    "votes": 3,
    "posted": "Nov 8, 2016 11:58:02 AM"
  },
  {
    "id": "12899187",
    "timestamp": "Nov 8, 2016 6:34:51 PM",
    "topic": "D.T. is the embodiment of everything Singapore taught me to fear about democracy",
    "url": "http://qz.com/830136/election-2016-donald-trump-is-the-embodiment-of-everything-singapore-taught-me-to-fear-about-democracy/",
    "votes": 4,
    "posted": "Nov 8, 2016 11:49:56 AM"
  },
  {
    "id": "12899019",
    "timestamp": "Nov 8, 2016 5:14:43 PM",
    "topic": "Semiconductor-free microelectronics are now possible, thanks to metamaterials",
    "url": "http://phys.org/news/2016-11-semiconductor-free-microelectronics-metamaterials.html",
    "votes": 4,
    "posted": "Nov 8, 2016 11:16:17 AM"
  },
  {
    "id": "12898927",
    "timestamp": "Nov 8, 2016 11:44:13 AM",
    "topic": "A list of headless browsers and related automation tools",
    "url": "https://github.com/dhamaniasad/HeadlessBrowsers",
    "votes": 7,
    "posted": "Nov 8, 2016 10:51:52 AM"
  },
  {
    "id": "12898862",
    "timestamp": "Nov 8, 2016 1:04:19 PM",
    "topic": "A Conversation with Alan Kay",
    "url": "http://queue.acm.org/detail.cfm?id\u003d1039523",
    "votes": 5,
    "posted": "Nov 8, 2016 10:35:03 AM"
  },
  {
    "id": "12898857",
    "timestamp": "Nov 8, 2016 11:14:10 AM",
    "topic": "Smog Chokes Delhi, Leaving Residents ‘Cowering by Our Air Purifiers’",
    "url": "http://www.nytimes.com/2016/11/08/world/asia/india-delhi-smog.html?hp\u0026action\u003dclick\u0026pgtype\u003dHomepage\u0026clickSource\u003dimage\u0026module\u003dphoto-spot-region\u0026region\u003dtop-news\u0026WT.nav\u003dtop-news",
    "votes": 8,
    "posted": "Nov 8, 2016 10:32:56 AM"
  },
  {
    "id": "12898854",
    "timestamp": "Nov 8, 2016 10:54:09 AM",
    "topic": "The Irrational Downfall of South Korean President Park Geun-Hye",
    "url": "https://askakorean.blogspot.com/2016/10/the-irrational-downfall-of-park-geun-hye.html",
    "votes": 4,
    "posted": "Nov 8, 2016 10:31:49 AM"
  },
  {
    "id": "12898718",
    "timestamp": "Nov 8, 2016 12:04:14 PM",
    "topic": "Machine Learning for Software Engineers",
    "url": "https://github.com/ZuzooVn/machine-learning-for-software-engineers",
    "votes": 4,
    "posted": "Nov 8, 2016 10:06:02 AM"
  },
  {
    "id": "12898684",
    "timestamp": "Nov 8, 2016 11:54:13 AM",
    "topic": "WhatsApp won’t share UK user data with Facebook anymore",
    "url": "http://thenextweb.com/facebook/2016/11/08/whatsapp-wont-share-uk-user-data-with-facebook-anymore/",
    "votes": 4,
    "posted": "Nov 8, 2016 9:57:35 AM"
  },
  {
    "id": "12898626",
    "timestamp": "Nov 8, 2016 5:14:43 PM",
    "topic": "Introducing Bloaty McBloatface: a size profiler for binaries",
    "url": "http://blog.reverberate.org/2016/11/07/introducing-bloaty-mcbloatface.html",
    "votes": 4,
    "posted": "Nov 8, 2016 9:47:17 AM"
  },
  {
    "id": "12898534",
    "timestamp": "Nov 8, 2016 10:44:08 AM",
    "topic": "\u0027Big Bang Theory\u0027 Sheldon Prequel Series in the Works at CBS",
    "url": "http://www.hollywoodreporter.com/live-feed/big-bang-theory-sheldon-prequel-series-works-at-cbs-944826",
    "votes": 3,
    "posted": "Nov 8, 2016 9:18:55 AM"
  },
  {
    "id": "12898406",
    "timestamp": "Nov 8, 2016 9:54:04 AM",
    "topic": "IAB: IETF to stop requiring IPv4 compat. – will optimize for and depend on IPv6",
    "url": "https://www.iab.org/documents/correspondence-reports-documents/2016-2/iab-statement-on-ipv6/",
    "votes": 5,
    "posted": "Nov 8, 2016 8:46:28 AM"
  },
  {
    "id": "12898366",
    "timestamp": "Nov 8, 2016 10:44:07 AM",
    "topic": "Show HN: Embed HN comments in your website (alpha)",
    "url": "https://comments.network/",
    "votes": 6,
    "posted": "Nov 8, 2016 8:35:17 AM"
  },
  {
    "id": "12898316",
    "timestamp": "Nov 8, 2016 8:23:57 AM",
    "topic": "PlanGrid (YC W12) Is Hiring Full Stack, Front End and iOS Engineers and More",
    "url": "https://www.plangrid.com/jobs/",
    "votes": 1,
    "posted": "Nov 8, 2016 8:18:01 AM"
  },
  {
    "id": "12898257",
    "timestamp": "Nov 8, 2016 8:23:56 AM",
    "topic": "America has never had so much TV, and even Hollywood is overwhelmed",
    "url": "https://www.washingtonpost.com/news/the-switch/wp/2016/11/07/america-has-never-had-so-much-tv-and-even-hollywood-is-overwhelmed/#comments",
    "votes": 6,
    "posted": "Nov 8, 2016 7:59:13 AM"
  },
  {
    "id": "12898236",
    "timestamp": "Nov 8, 2016 8:13:56 AM",
    "topic": "Normal for recruiters to ask for last 4 of your social / dob on first call?",
    "votes": 5,
    "posted": "Nov 8, 2016 7:52:39 AM"
  },
  {
    "id": "12897941",
    "timestamp": "Nov 8, 2016 7:03:50 AM",
    "topic": "Apache Performance: Disable .htaccess here\u0027s why",
    "url": "https://haydenjames.io/disable-htaccess-apache-performance/",
    "votes": 9,
    "posted": "Nov 8, 2016 6:36:55 AM"
  },
  {
    "id": "12897877",
    "timestamp": "Nov 8, 2016 9:14:00 AM",
    "topic": "France plans to compile personal data of 60M people",
    "url": "http://www.dailymail.co.uk/news/article-3907908/Outcry-French-plans-compile-personal-data-60-million-people.html",
    "votes": 3,
    "posted": "Nov 8, 2016 6:21:50 AM"
  },
  {
    "id": "12897859",
    "timestamp": "Nov 8, 2016 9:14:00 AM",
    "topic": "Machine learning is up to 85% accurate in identifying a person who is suicidal",
    "url": "http://onlinelibrary.wiley.com/doi/10.1111/sltb.12312/full",
    "votes": 6,
    "posted": "Nov 8, 2016 6:15:10 AM"
  },
  {
    "id": "12897826",
    "timestamp": "Nov 8, 2016 6:13:46 AM",
    "topic": "Leaked NASA documents suggest EM drive actually works",
    "url": "https://drive.google.com/file/d/0B7kgKijo-p0ibm94VUY0TVktQlU/view",
    "votes": 3,
    "posted": "Nov 8, 2016 6:08:10 AM"
  },
  {
    "id": "12897784",
    "timestamp": "Nov 8, 2016 2:04:24 PM",
    "topic": "Show HN: Super DOM, manipulate the DOM like it\u0027s 2016",
    "url": "https://superdom.site/",
    "votes": 4,
    "posted": "Nov 8, 2016 5:58:52 AM"
  },
  {
    "id": "12897739",
    "timestamp": "Nov 8, 2016 12:04:14 PM",
    "topic": "Google really does collect lots of info about us",
    "url": "https://www.google.com/policies/privacy/",
    "votes": 4,
    "posted": "Nov 8, 2016 5:47:58 AM"
  },
  {
    "id": "12897729",
    "timestamp": "Nov 8, 2016 1:04:19 PM",
    "topic": "D3-Cloud: Create Word Clouds in JavaScript and D3.js",
    "url": "https://github.com/jasondavies/d3-cloud",
    "votes": 3,
    "posted": "Nov 8, 2016 5:44:32 AM"
  },
  {
    "id": "12897545",
    "timestamp": "Nov 8, 2016 7:23:52 AM",
    "topic": "Backlash against Apple’s new MacBook Pro from its core users is unprecedented",
    "url": "http://www.recode.net/2016/11/7/13512322/apple-macbook-pro-backlash-power-users",
    "votes": 6,
    "posted": "Nov 8, 2016 5:02:35 AM"
  },
  {
    "id": "12897415",
    "timestamp": "Nov 8, 2016 5:03:41 AM",
    "topic": "Google Data Studio",
    "url": "https://datastudio.google.com",
    "votes": 6,
    "posted": "Nov 8, 2016 4:39:47 AM"
  },
  {
    "id": "12897411",
    "timestamp": "Nov 8, 2016 12:04:15 PM",
    "topic": "Ask HN: I need advice, Mid-life crisis",
    "votes": 7,
    "posted": "Nov 8, 2016 4:39:18 AM"
  },
  {
    "id": "12897398",
    "timestamp": "Nov 8, 2016 5:53:45 AM",
    "topic": "Founder Dilution",
    "url": "http://avc.com/2016/11/founder-dilution/",
    "votes": 4,
    "posted": "Nov 8, 2016 4:34:47 AM"
  },
  {
    "id": "12897390",
    "timestamp": "Nov 8, 2016 7:13:51 AM",
    "topic": "Consistency should be more consistent",
    "url": "https://irenezhang.net/blog/2015/02/01/consistency.html",
    "votes": 8,
    "posted": "Nov 8, 2016 4:33:28 AM"
  },
  {
    "id": "12897324",
    "timestamp": "Nov 8, 2016 4:23:38 AM",
    "topic": "InfluxData (YC W13) Is Hiring a Senior JavaScript Developer in SF",
    "url": "https://boards.greenhouse.io/influxdb",
    "votes": 1,
    "posted": "Nov 8, 2016 4:17:56 AM"
  },
  {
    "id": "12897316",
    "timestamp": "Nov 8, 2016 5:13:42 AM",
    "topic": "What is the most absurd code you\u0027ve ever seen?",
    "url": "https://www.quora.com/What-is-the-most-absurd-code-youve-ever-seen?share\u003d1",
    "votes": 5,
    "posted": "Nov 8, 2016 4:16:17 AM"
  },
  {
    "id": "12897284",
    "timestamp": "Nov 8, 2016 4:23:38 AM",
    "topic": "Ask HN: Have you ever thought of leaving programming for something else?",
    "votes": 10,
    "posted": "Nov 8, 2016 4:05:54 AM"
  },
  {
    "id": "12897216",
    "timestamp": "Nov 8, 2016 4:34:40 PM",
    "topic": "A keyboard for your back",
    "url": "https://medium.com/@tartavull/thor-your-next-keyboard-20b9ce7dd2b1#.831esf3y0",
    "votes": 3,
    "posted": "Nov 8, 2016 3:52:21 AM"
  },
  {
    "id": "12897169",
    "timestamp": "Nov 8, 2016 3:34:31 PM",
    "topic": "2016’s Election Data Hero Isn’t Nate Silver. It’s Sam Wang",
    "url": "https://www.wired.com/2016/11/2016s-election-data-hero-isnt-nate-silver-sam-wang/",
    "votes": 5,
    "posted": "Nov 8, 2016 3:40:39 AM"
  },
  {
    "id": "12897125",
    "timestamp": "Nov 8, 2016 4:13:37 AM",
    "topic": "Edward Snowden Explains How FBI Could Review Clinton Emails So Fast",
    "url": "http://www.sfgate.com/business/article/Edward-Snowden-Explains-How-FBI-Could-Review-10598233.php",
    "votes": 3,
    "posted": "Nov 8, 2016 3:28:31 AM"
  },
  {
    "id": "12897022",
    "timestamp": "Nov 8, 2016 3:13:32 AM",
    "topic": "The New York Times to Offer Open Access on Web and Apps for the Election",
    "url": "http://mobile.nytimes.com/2016/11/04/homepage/new-york-times-open-access-election-2016.html?_r\u003d0\u0026referer\u003d",
    "votes": 3,
    "posted": "Nov 8, 2016 3:05:05 AM"
  },
  {
    "id": "12896987",
    "timestamp": "Nov 8, 2016 3:13:32 AM",
    "topic": "Ralph J. Cicerone, scientist who worked to protect the ozone layer, dies at 73",
    "url": "https://www.washingtonpost.com/local/obituaries/ralph-j-cicerone-scientist-who-worked-to-protect-the-ozone-layer-dies-at-73/2016/11/06/2b2ec0aa-a427-11e6-8fc0-7be8f848c492_story.html",
    "votes": 5,
    "posted": "Nov 8, 2016 2:57:25 AM"
  },
  {
    "id": "12896981",
    "timestamp": "Nov 8, 2016 3:13:32 AM",
    "topic": "Unofficial Stories: Conversation with Svetlana Alexievich",
    "url": "http://harpers.org/blog/2016/10/unofficial-stories/",
    "votes": 4,
    "posted": "Nov 8, 2016 2:55:18 AM"
  },
  {
    "id": "12896969",
    "timestamp": "Nov 8, 2016 10:04:05 AM",
    "topic": "Can you give me feedback on my website?",
    "votes": 5,
    "posted": "Nov 8, 2016 2:51:35 AM"
  },
  {
    "id": "12896927",
    "timestamp": "Nov 10, 2016 2:18:55 PM",
    "topic": "A life in ruins: On the architectural vision of John Soane",
    "url": "http://www.newcriterion.com/articles.cfm/A-life-in-ruins-8521",
    "votes": 3,
    "posted": "Nov 8, 2016 2:40:16 AM"
  },
  {
    "id": "12896859",
    "timestamp": "Nov 8, 2016 3:23:33 AM",
    "topic": "Google – My Activity",
    "url": "https://myactivity.google.com/myactivity?utm\u003demail",
    "votes": 7,
    "posted": "Nov 8, 2016 2:25:16 AM"
  },
  {
    "id": "12896841",
    "timestamp": "Nov 8, 2016 3:23:33 AM",
    "topic": "iRobot says 20 percent of the world’s vacuums are now robots",
    "url": "https://techcrunch.com/2016/11/07/irobot-says-20-percent-of-the-worlds-vacuums-are-now-robots/",
    "votes": 8,
    "posted": "Nov 8, 2016 2:22:05 AM"
  },
  {
    "id": "12896731",
    "timestamp": "Nov 8, 2016 3:33:34 AM",
    "topic": "How to get subtraction wrong",
    "url": "http://geocar.sdf1.org/numbers.html",
    "votes": 5,
    "posted": "Nov 8, 2016 1:58:59 AM"
  },
  {
    "id": "12896577",
    "timestamp": "Nov 8, 2016 4:33:39 AM",
    "topic": "Ask HN: Most overhyped technology of 2016?",
    "votes": 8,
    "posted": "Nov 8, 2016 1:28:04 AM"
  },
  {
    "id": "12896432",
    "timestamp": "Nov 8, 2016 1:23:22 AM",
    "topic": "The Sega Genesis Is Officially Back in Production",
    "url": "http://www.dailydot.com/debug/sega-genesis-preorder-details/?fb\u003ddd",
    "votes": 3,
    "posted": "Nov 8, 2016 1:00:41 AM"
  },
  {
    "id": "12896425",
    "timestamp": "Nov 10, 2016 3:08:59 PM",
    "topic": "On the importance of units",
    "url": "http://www.wall.org/~aron/blog/on-the-importance-of-units/",
    "votes": 3,
    "posted": "Nov 8, 2016 12:59:58 AM"
  },
  {
    "id": "12896353",
    "timestamp": "Nov 8, 2016 2:43:29 AM",
    "topic": "Explaining Thunderbolt 3, USB-C, and Everything in Between",
    "url": "http://tidbits.com/article/16870",
    "votes": 5,
    "posted": "Nov 8, 2016 12:45:33 AM"
  },
  {
    "id": "12896323",
    "timestamp": "Nov 8, 2016 12:43:19 AM",
    "topic": "Next Caller Is Hiring a Technical Product Manager",
    "url": "https://jobs.lever.co/nextcaller/619a158e-015b-4075-a626-afdc936b17f0",
    "votes": 1,
    "posted": "Nov 8, 2016 12:40:57 AM"
  },
  {
    "id": "12896304",
    "timestamp": "Nov 8, 2016 1:53:26 AM",
    "topic": "Tools of Titans Foreword – Arnold Schwarzenegger “I Am Not a Self-Made Man”",
    "url": "http://fourhourworkweek.com/2016/11/07/tools-of-titans-foreword-arnold-schwarzenegger-i-am-not-a-self-made-man/?utm_source\u003dfeedburner\u0026utm_medium\u003dfeed\u0026utm_campaign\u003dFeed%3A+timferriss+%28The+Blog+of+Author+Tim+Ferriss%29",
    "votes": 4,
    "posted": "Nov 8, 2016 12:37:39 AM"
  },
  {
    "id": "12896226",
    "timestamp": "Nov 10, 2016 2:18:55 PM",
    "topic": "The Genius of Winding Paths",
    "url": "https://www.firstthings.com/article/2016/10/the-genius-of-winding-paths",
    "votes": 4,
    "posted": "Nov 8, 2016 12:27:05 AM"
  },
  {
    "id": "12896182",
    "timestamp": "Nov 8, 2016 1:03:21 AM",
    "topic": "Tensorflow Deepmath: Experiments towards neural network theorem proving",
    "url": "https://github.com/tensorflow/deepmath",
    "votes": 4,
    "posted": "Nov 8, 2016 12:20:46 AM"
  },
  {
    "id": "12896148",
    "timestamp": "Nov 8, 2016 1:03:21 AM",
    "topic": "New Warship’s Big Guns Have No Bullets (Zumwalt-Class)",
    "url": "http://www.defensenews.com/articles/new-warships-big-guns-have-no-bullets",
    "votes": 6,
    "posted": "Nov 8, 2016 12:14:39 AM"
  },
  {
    "id": "12895947",
    "timestamp": "Nov 8, 2016 7:34:57 PM",
    "topic": "Show HN: Cut unwanted parts from videos directly on YouTube",
    "url": "https://eclips.io/#_\u003d_",
    "votes": 3,
    "posted": "Nov 7, 2016 11:46:56 PM"
  },
  {
    "id": "12895890",
    "timestamp": "Nov 8, 2016 2:53:30 AM",
    "topic": "Actor library for Rust: first intro post",
    "url": "http://dbeck.github.io/Rust-Actor-Library-First-assorted-thoughts/",
    "votes": 4,
    "posted": "Nov 7, 2016 11:39:00 PM"
  },
  {
    "id": "12895864",
    "timestamp": "Nov 8, 2016 12:43:19 AM",
    "topic": "A Simple Request: VLC.js",
    "url": "http://ascii.textfiles.com/archives/5084",
    "votes": 9,
    "posted": "Nov 7, 2016 11:36:25 PM"
  },
  {
    "id": "12895728",
    "timestamp": "Nov 8, 2016 2:43:30 AM",
    "topic": "Schneider blog: Firefox is removing Battery API",
    "url": "https://www.schneier.com/blog/archives/2016/11/firefox_removin.html?nc\u003d3",
    "votes": 4,
    "posted": "Nov 7, 2016 11:16:31 PM"
  },
  {
    "id": "12895663",
    "timestamp": "Nov 7, 2016 11:53:15 PM",
    "topic": "19 things I learnt reading the Node.js docs",
    "url": "https://medium.com/@david.gilbertson/19-things-i-learnt-reading-the-nodejs-docs-8a2dcc7f307f#.bzx75cpkv",
    "votes": 4,
    "posted": "Nov 7, 2016 11:07:24 PM"
  },
  {
    "id": "12895262",
    "timestamp": "Nov 8, 2016 1:33:23 AM",
    "topic": "Mozilla on Enabling the Open Metaverse with WebVR, A-Frame, and Servo",
    "url": "http://www.roadtovr.com/mozilla-enabling-open-metaverse-webvr-frame-servo/",
    "votes": 3,
    "posted": "Nov 7, 2016 10:23:15 PM"
  },
  {
    "id": "12895226",
    "timestamp": "Nov 8, 2016 5:34:45 PM",
    "topic": "The Emperor\u0027s New Museum",
    "url": "http://www.newyorker.com/magazine/2016/11/07/the-emperors-new-museum",
    "votes": 3,
    "posted": "Nov 7, 2016 10:19:12 PM"
  },
  {
    "id": "12894984",
    "timestamp": "Nov 8, 2016 12:13:17 AM",
    "topic": "They Used to Last 50 Years (2015)",
    "url": "http://recraigslist.com/2015/10/they-used-to-last-50-years/",
    "votes": 4,
    "posted": "Nov 7, 2016 9:55:35 PM"
  },
  {
    "id": "12894940",
    "timestamp": "Nov 7, 2016 10:13:07 PM",
    "topic": "Software Developers: Here’s how to get a raise without changing jobs",
    "url": "https://fearlesssalarynegotiation.com/software-developers-how-to-get-a-raise/",
    "votes": 11,
    "posted": "Nov 7, 2016 9:52:08 PM"
  },
  {
    "id": "12894897",
    "timestamp": "Nov 8, 2016 5:04:42 PM",
    "topic": "How to pick startup ideas",
    "url": "http://www.defmacro.org/2015/02/25/startup-ideas.html",
    "votes": 8,
    "posted": "Nov 7, 2016 9:48:34 PM"
  },
  {
    "id": "12894721",
    "timestamp": "Nov 7, 2016 9:43:04 PM",
    "topic": "Apple\u0027s Great GPL Purge (2014)",
    "url": "http://meta.ath0.com/2012/02/05/apples-great-gpl-purge",
    "votes": 4,
    "posted": "Nov 7, 2016 9:28:10 PM"
  },
  {
    "id": "12894615",
    "timestamp": "Nov 7, 2016 10:13:07 PM",
    "topic": "Have any companies on here used Triplebyte?",
    "votes": 3,
    "posted": "Nov 7, 2016 9:15:56 PM"
  },
  {
    "id": "12894588",
    "timestamp": "Nov 7, 2016 9:53:05 PM",
    "topic": "Firebase gets better analytics, crash reporting and more",
    "url": "https://techcrunch.com/2016/11/07/googles-firebase-developer-platform-gets-better-analytics-crash-reports-and-more?1",
    "votes": 9,
    "posted": "Nov 7, 2016 9:12:54 PM"
  },
  {
    "id": "12894542",
    "timestamp": "Nov 10, 2016 2:18:55 PM",
    "topic": "Stamp design errors",
    "url": "http://www.edbmb.net/stamps/index-1A.php",
    "votes": 3,
    "posted": "Nov 7, 2016 9:08:36 PM"
  },
  {
    "id": "12894455",
    "timestamp": "Nov 7, 2016 9:23:01 PM",
    "topic": "Close to absolute zero, the particles exhibit their quantum nature",
    "url": "http://sciencebulletin.org/archives/7440.html",
    "votes": 3,
    "posted": "Nov 7, 2016 8:59:55 PM"
  },
  {
    "id": "12894349",
    "timestamp": "Nov 7, 2016 9:43:04 PM",
    "topic": "Single Mother Facing Prison for Selling Homemade Mexican Dish to Undercover Cop",
    "url": "http://reason.com/blog/2016/11/06/single-mother-facing-prison-for-selling",
    "votes": 4,
    "posted": "Nov 7, 2016 8:50:13 PM"
  },
  {
    "id": "12894248",
    "timestamp": "Nov 7, 2016 8:42:50 PM",
    "topic": "BuildZoom (a better way to remodel) is hiring in product, growth and engineering",
    "url": "https://jobs.lever.co/buildzoom",
    "votes": 1,
    "posted": "Nov 7, 2016 8:40:52 PM"
  },
  {
    "id": "12894215",
    "timestamp": "Nov 7, 2016 9:23:02 PM",
    "topic": "Are Chinese Websites Too Complex?",
    "url": "https://www.nngroup.com/articles/china-website-complexity/?utm_source\u003dAlertbox\u0026utm_campaign\u003d43da43b3f9-Cards_UI_Component_Chinese+Complex_2016_11_07\u0026utm_medium\u003demail\u0026utm_term\u003d0_7f29a2b335-43da43b3f9-40308009",
    "votes": 3,
    "posted": "Nov 7, 2016 8:37:08 PM"
  },
  {
    "id": "12894209",
    "timestamp": "Nov 7, 2016 8:52:58 PM",
    "topic": "Ask HN: How much do you earn on average through software freelancing?",
    "votes": 8,
    "posted": "Nov 7, 2016 8:36:33 PM"
  },
  {
    "id": "12894192",
    "timestamp": "Nov 8, 2016 2:54:28 PM",
    "topic": "Why is electricity so hard to understand? (1989)",
    "url": "http://amasci.com/miscon/whyhard2.html",
    "votes": 4,
    "posted": "Nov 7, 2016 8:34:51 PM"
  },
  {
    "id": "12894039",
    "timestamp": "Nov 10, 2016 5:39:13 PM",
    "topic": "The Evolution of Startups, as Told by Analyzing Company Descriptions",
    "url": "https://priceonomics.com/the-evolution-of-startups-as-told-by-analyzing/",
    "votes": 6,
    "posted": "Nov 7, 2016 8:20:28 PM"
  },
  {
    "id": "12893956",
    "timestamp": "Nov 7, 2016 9:23:01 PM",
    "topic": "C for Python programmers",
    "url": "http://www.toves.org/books/cpy/",
    "votes": 6,
    "posted": "Nov 7, 2016 8:13:48 PM"
  },
  {
    "id": "12893924",
    "timestamp": "Nov 10, 2016 2:18:55 PM",
    "topic": "Basic Flashlight Tutorial",
    "url": "http://www.asos1.com/flashlight/flashlight01.htm",
    "votes": 4,
    "posted": "Nov 7, 2016 8:11:18 PM"
  },
  {
    "id": "12893917",
    "timestamp": "Nov 10, 2016 2:18:55 PM",
    "topic": "Well-Kept Gardens Die by Pacifism (2009)",
    "url": "http://lesswrong.com/lw/c1/wellkept_gardens_die_by_pacifism/",
    "votes": 3,
    "posted": "Nov 7, 2016 8:10:51 PM"
  },
  {
    "id": "12893801",
    "timestamp": "Nov 7, 2016 9:23:02 PM",
    "topic": "Microsoft Azure Container Registry (preview)",
    "url": "https://azure.microsoft.com/campaigns/container-registry/",
    "votes": 4,
    "posted": "Nov 7, 2016 7:59:24 PM"
  },
  {
    "id": "12893793",
    "timestamp": "Nov 7, 2016 8:22:48 PM",
    "topic": "ZigBee Light Link War-Driving",
    "url": "http://iotworm.eyalro.net/",
    "votes": 4,
    "posted": "Nov 7, 2016 7:58:31 PM"
  },
  {
    "id": "12893789",
    "timestamp": "Nov 7, 2016 8:22:47 PM",
    "topic": "The Macintosh GUI in 1984",
    "url": "http://toastytech.com/guis/macos1.html",
    "votes": 8,
    "posted": "Nov 7, 2016 7:58:22 PM"
  },
  {
    "id": "12893703",
    "timestamp": "Nov 7, 2016 8:12:46 PM",
    "topic": "Hy",
    "url": "https://en.wikipedia.org/wiki/Hy",
    "votes": 3,
    "posted": "Nov 7, 2016 7:50:07 PM"
  },
  {
    "id": "12893206",
    "timestamp": "Nov 7, 2016 8:42:50 PM",
    "topic": "Huffington Post\u0027s criticism of 538\u0027s election forecast",
    "url": "http://www.huffingtonpost.com/entry/whats-wrong-with-538_us_581ffe18e4b0334571e09e74",
    "votes": 5,
    "posted": "Nov 7, 2016 6:59:27 PM"
  },
  {
    "id": "12893123",
    "timestamp": "Nov 7, 2016 7:12:40 PM",
    "topic": "Butterfly Effects: Good Ballot Design Is Critical for Democracy",
    "url": "http://99percentinvisible.org/episode/butterfly-effects/",
    "votes": 3,
    "posted": "Nov 7, 2016 6:51:08 PM"
  },
  {
    "id": "12893118",
    "timestamp": "Nov 7, 2016 8:12:46 PM",
    "topic": "Ask HN: Why is “advice in Effective Java considered inappropriate for Android”?",
    "votes": 3,
    "posted": "Nov 7, 2016 6:50:33 PM"
  },
  {
    "id": "12893062",
    "timestamp": "Nov 8, 2016 7:34:58 PM",
    "topic": "Ask HN: How to prepare for a technical interview?",
    "votes": 6,
    "posted": "Nov 7, 2016 6:46:21 PM"
  },
  {
    "id": "12893040",
    "timestamp": "Nov 7, 2016 7:02:39 PM",
    "topic": "Open-Source 3D Graphics Design: Where to Begin",
    "url": "http://media.bemyapp.com/guide-open-source-3d-graphics-design/?utm_source\u003dbma\u0026utm_medium\u003dycombin\u0026utm_content\u003d\u0026utm_campaign\u003dmedia",
    "votes": 4,
    "posted": "Nov 7, 2016 6:44:08 PM"
  },
  {
    "id": "12892986",
    "timestamp": "Nov 8, 2016 3:53:36 AM",
    "topic": "Single mother of 6 ensnared by undercover sting for selling ceviche via Facebook",
    "url": "https://www.washingtonpost.com/news/morning-mix/wp/2016/11/07/undercover-sting-nabs-california-mother-selling-ceviche-through-facebook-group/",
    "votes": 3,
    "posted": "Nov 7, 2016 6:39:09 PM"
  },
  {
    "id": "12892975",
    "timestamp": "Nov 7, 2016 7:02:39 PM",
    "topic": "You Don’t Need a Master Plan You Just Need to Start",
    "url": "http://bryce.vc/post/152734313405/you-dont-need-a-master-plan-you-just-need-to",
    "votes": 3,
    "posted": "Nov 7, 2016 6:38:08 PM"
  },
  {
    "id": "12892738",
    "timestamp": "Nov 10, 2016 4:39:08 PM",
    "topic": "Scientists present the most accurate time measurements of quantum jumps to date",
    "url": "http://phys.org/news/2016-11-scientists-accurate-quantum-date.html",
    "votes": 5,
    "posted": "Nov 7, 2016 6:14:52 PM"
  },
  {
    "id": "12892643",
    "timestamp": "Nov 7, 2016 6:22:35 PM",
    "topic": "We’re Scientists. We’re Moms. And We Avoid Non-GMO Products",
    "url": "https://medium.com/@BioChicaGMO/were-scientists-we-re-moms-and-we-avoid-non-gmo-products-33bc0aa351a3#.x8kywi7v5",
    "votes": 3,
    "posted": "Nov 7, 2016 6:06:45 PM"
  },
  {
    "id": "12892620",
    "timestamp": "Nov 7, 2016 6:12:33 PM",
    "topic": "Microsoft Azure Container Service Supports Kubernetes",
    "url": "https://azure.microsoft.com/en-us/blog/azure-container-service-the-cloud-s-most-open-option-for-containers/",
    "votes": 11,
    "posted": "Nov 7, 2016 6:04:11 PM"
  },
  {
    "id": "12892550",
    "timestamp": "Nov 7, 2016 6:22:35 PM",
    "topic": "Power-touch a touchbar for linux and windows using your phone",
    "url": "https://github.com/rokyed/power-touch",
    "votes": 5,
    "posted": "Nov 7, 2016 5:56:47 PM"
  },
  {
    "id": "12892547",
    "timestamp": "Nov 7, 2016 6:32:37 PM",
    "topic": "Gorgeous native apps with Java",
    "url": "https://www.codenameone.com/index.html",
    "votes": 5,
    "posted": "Nov 7, 2016 5:56:33 PM"
  },
  {
    "id": "12892502",
    "timestamp": "Nov 7, 2016 6:42:37 PM",
    "topic": "Quick fix for the internet sketched on 3 napkins in 1989 is still in place today",
    "url": "http://www.washingtonpost.com/sf/business/2015/05/31/net-of-insecurity-part-2/",
    "votes": 4,
    "posted": "Nov 7, 2016 5:51:57 PM"
  },
  {
    "id": "12892473",
    "timestamp": "Nov 7, 2016 6:52:38 PM",
    "topic": "Ask HN: Do you have a side project you want to sell? (November 2016)",
    "votes": 5,
    "posted": "Nov 7, 2016 5:48:59 PM"
  },
  {
    "id": "12892450",
    "timestamp": "Nov 8, 2016 3:54:33 PM",
    "topic": "In 1961, Roald Dahl Hosted His Own Version of \u0027The Twilight Zone\u0027",
    "url": "http://www.atlasobscura.com/articles/in-1961-roald-dahl-hosted-his-own-version-of-the-twilight-zone",
    "votes": 3,
    "posted": "Nov 7, 2016 5:46:49 PM"
  },
  {
    "id": "12892412",
    "timestamp": "Nov 7, 2016 6:12:33 PM",
    "topic": "Soylent Thinks It Found What Was Making People Sick: Algae",
    "url": "https://www.bloomberg.com/news/articles/2016-11-07/soylent-thinks-it-found-what-was-making-people-sick-algae",
    "votes": 12,
    "posted": "Nov 7, 2016 5:43:42 PM"
  },
  {
    "id": "12892333",
    "timestamp": "Nov 7, 2016 6:32:36 PM",
    "topic": "Android Auto: now available in every car",
    "url": "https://blog.google/products/android/android-auto-available-in-every-car/",
    "votes": 4,
    "posted": "Nov 7, 2016 5:34:48 PM"
  },
  {
    "id": "12892268",
    "timestamp": "Nov 7, 2016 6:32:36 PM",
    "topic": "Show HN: UThreads-concurrent M:N fibers in C++",
    "url": "http://samanbarghi.com/uThreads/v0.3.0/",
    "votes": 3,
    "posted": "Nov 7, 2016 5:27:49 PM"
  },
  {
    "id": "12892257",
    "timestamp": "Nov 7, 2016 5:52:32 PM",
    "topic": "Inside Magic Leap, the Secretive $4.5B Startup Changing Computing Forever",
    "url": "http://www.forbes.com/sites/davidewalt/2016/11/02/inside-magic-leap-the-secretive-4-5-billion-startup-changing-computing-forever/#7e4ba0c9e83f",
    "votes": 5,
    "posted": "Nov 7, 2016 5:26:07 PM"
  },
  {
    "id": "12892207",
    "timestamp": "Nov 7, 2016 5:32:30 PM",
    "topic": "HumanPredictions – bootstrapping a SaaS app to $18k/mo in under a year",
    "url": "https://www.indiehackers.com/businesses/humanpredictions?utm_source\u003dhacker-news\u0026utm_campaign\u003dinterview-promotion\u0026utm_medium\u003dsocial",
    "votes": 9,
    "posted": "Nov 7, 2016 5:19:51 PM"
  },
  {
    "id": "12892172",
    "timestamp": "Nov 7, 2016 5:22:29 PM",
    "topic": "Ceasefires Don’t Work: We Have the Numbers to Prove It",
    "url": "http://isnblog.ethz.ch/conflict/ceasefires-dont-work-we-have-the-numbers-to-prove-it",
    "votes": 3,
    "posted": "Nov 7, 2016 5:16:01 PM"
  },
  {
    "id": "12892117",
    "timestamp": "Nov 7, 2016 6:12:34 PM",
    "topic": "MacBook Pro 2016 Dongles: Wifi Stops Working with Dongles",
    "url": "http://www.techplz.com/macbook-pro-2016-dongles-wifi-stops-working-dongles-apple-cuts-prices-due-incompatibilities/174136/",
    "votes": 12,
    "posted": "Nov 7, 2016 5:09:19 PM"
  },
  {
    "id": "12892063",
    "timestamp": "Nov 7, 2016 5:32:30 PM",
    "topic": "Adobe demos “photoshop for audio,” lets you edit speech as easily as text",
    "url": "http://arstechnica.com/information-technology/2016/11/adobe-voco-photoshop-for-audio-speech-editing/",
    "votes": 5,
    "posted": "Nov 7, 2016 5:03:07 PM"
  },
  {
    "id": "12892058",
    "timestamp": "Nov 7, 2016 6:12:34 PM",
    "topic": "Why Red Hat Chose Kubernetes for OpenShift",
    "url": "https://blog.openshift.com/red-hat-chose-kubernetes-openshift/",
    "votes": 4,
    "posted": "Nov 7, 2016 5:02:25 PM"
  },
  {
    "id": "12892043",
    "timestamp": "Nov 8, 2016 2:34:27 PM",
    "topic": "One Road Out of Depression",
    "url": "https://thinkfaster.co/2016/10/one-road-out-of-depression/",
    "votes": 5,
    "posted": "Nov 7, 2016 5:01:15 PM"
  },
  {
    "id": "12892032",
    "timestamp": "Nov 8, 2016 4:24:38 PM",
    "topic": "The Chopped Cheese’s Sharp Rise to Fame",
    "url": "http://www.nytimes.com/2016/11/08/nyregion/chopped-cheese-sandwich-harlem.html",
    "votes": 3,
    "posted": "Nov 7, 2016 5:00:11 PM"
  },
  {
    "id": "12891912",
    "timestamp": "Nov 7, 2016 8:22:48 PM",
    "topic": "Google and YouTube can help keep you informed on Election Day",
    "url": "https://blog.google/products/search/google-and-youtube-can-help-keep-you-informed-election-day/",
    "votes": 3,
    "posted": "Nov 7, 2016 4:45:56 PM"
  },
  {
    "id": "12891889",
    "timestamp": "Nov 7, 2016 4:52:26 PM",
    "topic": "Homebrew 1.1.0",
    "url": "http://brew.sh/2016/11/07/homebrew-1.1.0/",
    "votes": 21,
    "posted": "Nov 7, 2016 4:43:04 PM"
  },
  {
    "id": "12891765",
    "timestamp": "Nov 7, 2016 5:02:27 PM",
    "topic": "Private Porn Shoots Brilliant? No",
    "url": "https://popehat.com/2016/11/06/private-porn-shoots-brilliant-no/?utm_source\u003dfeedburner\u0026utm_medium\u003dfeed\u0026utm_campaign\u003dFeed%3A+Popehat+%28Popehat%29",
    "votes": 3,
    "posted": "Nov 7, 2016 4:26:32 PM"
  },
  {
    "id": "12891741",
    "timestamp": "Nov 7, 2016 8:12:46 PM",
    "topic": "Ask HN: Which are the countries where I can convert Bitcoin to local currency?",
    "votes": 3,
    "posted": "Nov 7, 2016 4:23:04 PM"
  },
  {
    "id": "12891727",
    "timestamp": "Nov 7, 2016 5:02:27 PM",
    "topic": "Tesla just killed one of the biggest benefits for customers",
    "url": "http://www.businessinsider.com/tesla-to-begin-charging-for-superchargers-2016-11",
    "votes": 7,
    "posted": "Nov 7, 2016 4:20:58 PM"
  },
  {
    "id": "12891685",
    "timestamp": "Nov 7, 2016 4:22:24 PM",
    "topic": "Lever is hiring an engineering manager in SF – Join a 50/50 men and women team",
    "url": "https://www.lever.co/jobs?site\u003dHacker%20News\u0026instance\u003d31\u0026copy\u003dL",
    "votes": 1,
    "posted": "Nov 7, 2016 4:17:41 PM"
  },
  {
    "id": "12891584",
    "timestamp": "Nov 7, 2016 4:32:25 PM",
    "topic": "Hyper.sh – Effortless Docker Hosting",
    "url": "https://hyper.sh/",
    "votes": 10,
    "posted": "Nov 7, 2016 4:08:24 PM"
  },
  {
    "id": "12891582",
    "timestamp": "Nov 7, 2016 5:52:32 PM",
    "topic": "Samsung is building its own AI assistant for the Galaxy S8",
    "url": "https://techcrunch.com/2016/11/07/samsung-ai/",
    "votes": 5,
    "posted": "Nov 7, 2016 4:08:18 PM"
  },
  {
    "id": "12891453",
    "timestamp": "Nov 7, 2016 5:22:29 PM",
    "topic": "Motivational Quotes for Realistic People",
    "url": "https://medium.com/art-marketing/motivational-quotes-for-realistic-people-556f9bc5af9c#.7ulfiwuvs",
    "votes": 6,
    "posted": "Nov 7, 2016 3:55:41 PM"
  },
  {
    "id": "12891169",
    "timestamp": "Nov 7, 2016 3:52:21 PM",
    "topic": "An Update to Our Supercharging Program",
    "url": "https://www.tesla.com/blog/update-our-supercharging-program",
    "votes": 5,
    "posted": "Nov 7, 2016 3:25:26 PM"
  },
  {
    "id": "12891158",
    "timestamp": "Nov 7, 2016 4:52:26 PM",
    "topic": "Show HN: DeepRhyme (D-Prime) – generating dope rhymes with machine learning",
    "url": "https://swarbrickjones.wordpress.com/2016/11/07/deeprhyme-d-prime-generating-dope-rhymes-with-deep-learning/",
    "votes": 4,
    "posted": "Nov 7, 2016 3:23:54 PM"
  },
  {
    "id": "12891157",
    "timestamp": "Nov 8, 2016 4:33:39 AM",
    "topic": "Show HN: Using Z3 to Find Clock Configuration Values for ARM UCs",
    "url": "http://cwoodall.com/blog/2016/11/06/using-z3-to-find-clock-configurations.html",
    "votes": 4,
    "posted": "Nov 7, 2016 3:23:38 PM"
  },
  {
    "id": "12891095",
    "timestamp": "Nov 7, 2016 6:52:38 PM",
    "topic": "UThreads: concurrent M:N fibers in C++",
    "url": "https://github.com/samanbarghi/uThreads",
    "votes": 5,
    "posted": "Nov 7, 2016 3:15:10 PM"
  },
  {
    "id": "12891068",
    "timestamp": "Nov 7, 2016 3:12:18 PM",
    "topic": "Inspiring Startup Lessons from Issac Lidsky\u0027s TEDTalk",
    "url": "https://www.youtube.com/watch?v\u003d3fGuzchHXAU",
    "votes": 3,
    "posted": "Nov 7, 2016 3:09:56 PM"
  },
  {
    "id": "12890921",
    "timestamp": "Nov 7, 2016 3:22:19 PM",
    "topic": "Artificial intelligence: An IT Crucial",
    "url": "https://medium.com/@shifatbd/artificial-intelligence-an-it-crucial-36ec2d2d696f",
    "votes": 3,
    "posted": "Nov 7, 2016 2:45:06 PM"
  },
  {
    "id": "12890919",
    "timestamp": "Nov 7, 2016 7:42:43 PM",
    "topic": "Show HN: Email hasn\u0027t changed in 20 years, I\u0027ve coded something new for 9 months",
    "url": "http://ivelope.com/invite/InvitedByViktor",
    "votes": 8,
    "posted": "Nov 7, 2016 2:44:57 PM"
  },
  {
    "id": "12890856",
    "timestamp": "Nov 7, 2016 2:52:16 PM",
    "topic": "Video Games Are Boring",
    "url": "http://www.gamesindustry.biz/articles/2016-11-07-video-games-are-boring",
    "votes": 5,
    "posted": "Nov 7, 2016 2:35:36 PM"
  },
  {
    "id": "12890831",
    "timestamp": "Nov 7, 2016 3:12:18 PM",
    "topic": "MacBook Pro is a lie",
    "url": "http://www.theverge.com/2016/11/7/13548052/the-macbook-pro-lie",
    "votes": 7,
    "posted": "Nov 7, 2016 2:32:10 PM"
  },
  {
    "id": "12890824",
    "timestamp": "Nov 8, 2016 9:34:02 AM",
    "topic": "Show HN: A Chrome desktop app for Google Calendar with a nice interface",
    "url": "https://chrome.google.com/webstore/detail/clean-google-calendar/magodclodecbbnbdfpmoehfdddkhlfmm",
    "votes": 7,
    "posted": "Nov 7, 2016 2:30:52 PM"
  },
  {
    "id": "12890760",
    "timestamp": "Nov 8, 2016 3:13:32 AM",
    "topic": "Show HN: Sport stats UI components",
    "url": "https://github.com/alexadam/sport-stats",
    "votes": 5,
    "posted": "Nov 7, 2016 2:19:24 PM"
  },
  {
    "id": "12890585",
    "timestamp": "Nov 7, 2016 4:42:25 PM",
    "topic": "Does P\u003dNP? Results of a poll taken among academics [2002][pdf]",
    "url": "http://www.cs.umd.edu/~gasarch/papers/poll.pdf",
    "votes": 5,
    "posted": "Nov 7, 2016 1:44:01 PM"
  },
  {
    "id": "12890412",
    "timestamp": "Nov 7, 2016 4:12:23 PM",
    "topic": "FCC ushers in a troublesome new world for online privacy",
    "url": "https://techcrunch.com/2016/11/07/fcc-ushers-in-a-troublesome-new-world-for-online-privacy/",
    "votes": 3,
    "posted": "Nov 7, 2016 1:00:30 PM"
  },
  {
    "id": "12890376",
    "timestamp": "Nov 7, 2016 5:12:28 PM",
    "topic": "Musk: We need universal basic income because robots will take all the jobs",
    "url": "http://arstechnica.co.uk/business/2016/11/elon-musk-universal-income-survive-robot-workers/",
    "votes": 4,
    "posted": "Nov 7, 2016 12:52:29 PM"
  },
  {
    "id": "12890118",
    "timestamp": "Nov 7, 2016 12:22:03 PM",
    "topic": "Tesco Bank freezes transactions after cash taken from 20,000 accounts",
    "url": "https://www.theguardian.com/business/2016/nov/07/tesco-bank-freezes-transactions-online-attack",
    "votes": 6,
    "posted": "Nov 7, 2016 11:43:41 AM"
  },
  {
    "id": "12890005",
    "timestamp": "Nov 7, 2016 11:41:59 AM",
    "topic": "Orange Pi, a Quad Core Computer for $20",
    "url": "https://techcrunch.com/2016/11/06/the-new-64-bit-orange-pi-is-a-quad-core-computer-for-20/",
    "votes": 10,
    "posted": "Nov 7, 2016 11:18:40 AM"
  },
  {
    "id": "12889956",
    "timestamp": "Nov 7, 2016 1:22:10 PM",
    "topic": "NASA: EM Drive really does work",
    "url": "http://www.sciencealert.com/leaked-nasa-paper-shows-the-impossible-em-drive-really-does-work",
    "votes": 3,
    "posted": "Nov 7, 2016 11:02:36 AM"
  },
  {
    "id": "12889907",
    "timestamp": "Nov 7, 2016 11:01:56 AM",
    "topic": "How I went from being a stranger to having a network in Silicon Valley",
    "url": "https://medium.com/startup-grind/how-i-went-from-being-a-stranger-to-having-a-network-in-silicon-valley-8cf7ac5fed",
    "votes": 3,
    "posted": "Nov 7, 2016 10:51:52 AM"
  },
  {
    "id": "12889855",
    "timestamp": "Nov 7, 2016 11:42:00 AM",
    "topic": "A bug story: data alignment on x86",
    "url": "http://pzemtsov.github.io/2016/11/06/bug-story-alignment-on-x86.html",
    "votes": 4,
    "posted": "Nov 7, 2016 10:38:02 AM"
  },
  {
    "id": "12889807",
    "timestamp": "Nov 7, 2016 11:01:56 AM",
    "topic": "LessPass: sync-less open source password manager",
    "url": "https://lesspass.com/#/",
    "votes": 4,
    "posted": "Nov 7, 2016 10:22:44 AM"
  },
  {
    "id": "12889719",
    "timestamp": "Nov 7, 2016 1:02:07 PM",
    "topic": "Tesco Bank: 20,000 customers lose money",
    "url": "http://www.bbc.co.uk/news/business-37891742",
    "votes": 4,
    "posted": "Nov 7, 2016 9:55:47 AM"
  },
  {
    "id": "12889713",
    "timestamp": "Nov 8, 2016 7:34:57 PM",
    "topic": "Show HN: An Extremely Simple Election Forecast in Scala",
    "url": "https://github.com/rcoh/electorate",
    "votes": 4,
    "posted": "Nov 7, 2016 9:54:40 AM"
  },
  {
    "id": "12889680",
    "timestamp": "Nov 7, 2016 10:01:51 AM",
    "topic": "Supercapacitors Now Carbon-Free, More Powerful",
    "url": "https://edgylabs.com/2016/11/06/supercapacitors-now-carbon-free/",
    "votes": 4,
    "posted": "Nov 7, 2016 9:45:08 AM"
  },
  {
    "id": "12889574",
    "timestamp": "Nov 7, 2016 12:02:02 PM",
    "topic": "Mistakes I made (as a developer)",
    "url": "https://dev.to/miqubel/mistakes-i-made-as-a-developer",
    "votes": 6,
    "posted": "Nov 7, 2016 9:01:08 AM"
  },
  {
    "id": "12889502",
    "timestamp": "Nov 7, 2016 2:22:14 PM",
    "topic": "Cybathlon 2016: No cyborgs yet, but we\u0027re getting there",
    "url": "http://arstechnica.co.uk/information-technology/2016/11/cybathlon-2016-no-cyborgs-yet-but-were-getting-there/",
    "votes": 3,
    "posted": "Nov 7, 2016 8:38:52 AM"
  },
  {
    "id": "12889469",
    "timestamp": "Nov 7, 2016 11:11:57 AM",
    "topic": "Apache Spark: A Unified Engine for Big Data Processing",
    "url": "http://cacm.acm.org/magazines/2016/11/209116-apache-spark/fulltext",
    "votes": 5,
    "posted": "Nov 7, 2016 8:27:02 AM"
  },
  {
    "id": "12889302",
    "timestamp": "Nov 7, 2016 7:51:41 AM",
    "topic": "Go’s alias proposal and all my concerns of Google controlling Go",
    "url": "https://hackernoon.com/gos-alias-proposal-and-all-my-concerns-of-google-controlling-go-a39f6c6046aa#.79iuuucic",
    "votes": 10,
    "posted": "Nov 7, 2016 7:32:02 AM"
  },
  {
    "id": "12889115",
    "timestamp": "Nov 7, 2016 7:11:37 AM",
    "topic": "Twitter appears to be down",
    "url": "http://downdetector.com/status/twitter",
    "votes": 3,
    "posted": "Nov 7, 2016 6:58:51 AM"
  },
  {
    "id": "12889104",
    "timestamp": "Nov 7, 2016 7:01:37 AM",
    "topic": "Twitter is down",
    "url": "http://downforeveryoneorjustme.com/twitter.com",
    "votes": 10,
    "posted": "Nov 7, 2016 6:57:07 AM"
  },
  {
    "id": "12889053",
    "timestamp": "Nov 7, 2016 8:41:45 AM",
    "topic": "Pencil: open-source GUI prototyping tool",
    "url": "http://pencil.evolus.vn/",
    "votes": 4,
    "posted": "Nov 7, 2016 6:42:29 AM"
  },
  {
    "id": "12888997",
    "timestamp": "Nov 7, 2016 6:41:35 AM",
    "topic": "The US Airline that breaks down mid-air 4x more often than other airlines",
    "url": "http://www.tampabay.com/projects/2016/investigations/allegiant-air/mechanical-breakdowns/",
    "votes": 3,
    "posted": "Nov 7, 2016 6:25:49 AM"
  },
  {
    "id": "12888993",
    "timestamp": "Nov 7, 2016 8:41:45 AM",
    "topic": "Ask HN: If MS spun off Windows, would it be forgiven?",
    "votes": 3,
    "posted": "Nov 7, 2016 6:25:17 AM"
  },
  {
    "id": "12888877",
    "timestamp": "Nov 7, 2016 6:21:34 AM",
    "topic": "Show HN: NetIn – Shorten job interviews by answering the questions only once",
    "url": "https://netin.co/candidates",
    "votes": 3,
    "posted": "Nov 7, 2016 5:46:50 AM"
  },
  {
    "id": "12888784",
    "timestamp": "Nov 7, 2016 5:51:31 AM",
    "topic": "Ask HN: Why hasn\u0027t Perl 6 taken off yet?",
    "votes": 7,
    "posted": "Nov 7, 2016 5:20:50 AM"
  },
  {
    "id": "12888739",
    "timestamp": "Nov 7, 2016 8:02:45 PM",
    "topic": "Revolting Mind: Jonathan Swift – The Reluctant Rebel",
    "url": "https://literaryreview.co.uk/revolting-mind",
    "votes": 3,
    "posted": "Nov 7, 2016 5:08:07 AM"
  },
  {
    "id": "12888718",
    "timestamp": "Nov 7, 2016 2:22:14 PM",
    "topic": "A Brief History of RTS AI Research",
    "url": "http://www.gamasutra.com/blogs/BenWeber/20161106/284970/A_Brief_History_of_RTS_AI_Research.php",
    "votes": 3,
    "posted": "Nov 7, 2016 5:01:35 AM"
  },
  {
    "id": "12888682",
    "timestamp": "Nov 7, 2016 7:41:40 AM",
    "topic": "San Bernardino: Behind the Scenes",
    "url": "https://www.zdziarski.com/blog/?p\u003d6335",
    "votes": 3,
    "posted": "Nov 7, 2016 4:52:07 AM"
  },
  {
    "id": "12888645",
    "timestamp": "Nov 7, 2016 8:21:43 AM",
    "topic": "Postmates investors changed their preferred stock to common stock",
    "url": "http://www.recode.net/2016/11/2/13481456/postmates-investors-preferred-stock-converted-common",
    "votes": 4,
    "posted": "Nov 7, 2016 4:40:52 AM"
  },
  {
    "id": "12888567",
    "timestamp": "Nov 7, 2016 11:42:00 AM",
    "topic": "How Economic Gobbledygook Divides Us",
    "url": "http://www.nytimes.com/2016/11/06/magazine/how-economic-gobbledygook-divides-us.html",
    "votes": 3,
    "posted": "Nov 7, 2016 4:23:49 AM"
  },
  {
    "id": "12888556",
    "timestamp": "Nov 7, 2016 8:41:45 AM",
    "topic": "Microsoft is moving 30% of its New York workers to WeWork offices",
    "url": "http://www.businessinsider.com/microsoft-new-york-workers-wework-2016-11",
    "votes": 3,
    "posted": "Nov 7, 2016 4:20:50 AM"
  },
  {
    "id": "12888547",
    "timestamp": "Nov 7, 2016 4:41:26 AM",
    "topic": "Freeline: A fast build tool and a replacement for Android Instant Run",
    "url": "https://github.com/alibaba/freeline",
    "votes": 4,
    "posted": "Nov 7, 2016 4:18:50 AM"
  },
  {
    "id": "12888499",
    "timestamp": "Nov 7, 2016 4:11:23 AM",
    "topic": "Gawker Pays $750,000 to That Guy Who Didn\u0027t Invent Email",
    "url": "https://news.slashdot.org/story/16/11/07/022246/gawker-pays-750000-to-that-guy-who-didnt-invent-email",
    "votes": 6,
    "posted": "Nov 7, 2016 4:04:45 AM"
  },
  {
    "id": "12888389",
    "timestamp": "Nov 7, 2016 4:41:26 AM",
    "topic": "Arctic farming: Town defies icy conditions with hydroponics",
    "url": "http://hosted.ap.org/dynamic/stories/U/US_ARCTIC_FARMING?SITE\u003dAP\u0026SECTION\u003dHOME\u0026TEMPLATE\u003dDEFAULT\u0026CTIME\u003d2016-11-04-14-31-47",
    "votes": 4,
    "posted": "Nov 7, 2016 3:32:18 AM"
  },
  {
    "id": "12888382",
    "timestamp": "Nov 7, 2016 3:51:21 AM",
    "topic": "Python: Some thoughts on asynchronous API design in a post-async/await world",
    "url": "https://vorpus.org/blog/some-thoughts-on-asynchronous-api-design-in-a-post-asyncawait-world/",
    "votes": 4,
    "posted": "Nov 7, 2016 3:30:11 AM"
  },
  {
    "id": "12888370",
    "timestamp": "Nov 7, 2016 4:31:24 AM",
    "topic": "Brain-Like Machine Learning Regulatory Feedback Networks One-Shot Learning",
    "url": "http://www.naiss.io/blog/2016/5/29/m76bvhww07z0algjbjmnl8gobjuakz",
    "votes": 3,
    "posted": "Nov 7, 2016 3:26:13 AM"
  },
  {
    "id": "12888313",
    "timestamp": "Nov 7, 2016 4:31:24 AM",
    "topic": "How to Get Beyond Tribal Politics",
    "url": "http://www.wsj.com/articles/how-to-get-beyond-our-tribal-politics-1478271810",
    "votes": 3,
    "posted": "Nov 7, 2016 3:08:43 AM"
  },
  {
    "id": "12888287",
    "timestamp": "Nov 7, 2016 4:11:23 AM",
    "topic": "Twitter Could Have Become a Protocol",
    "url": "http://blog.austingardnersmith.me/how-twitter-could-have-been-a-protocol/",
    "votes": 4,
    "posted": "Nov 7, 2016 3:00:21 AM"
  },
  {
    "id": "12888181",
    "timestamp": "Nov 7, 2016 3:11:17 AM",
    "topic": "Face electrodes let you taste and chew in virtual reality",
    "url": "https://www.newscientist.com/article/2111371-face-electrodes-let-you-taste-and-chew-in-virtual-reality/",
    "votes": 3,
    "posted": "Nov 7, 2016 2:27:54 AM"
  },
  {
    "id": "12888162",
    "timestamp": "Nov 7, 2016 3:11:17 AM",
    "topic": "Web of Trust caught selling private browsing history of millions",
    "url": "http://www.pcmag.com/news/349328/web-of-trust-browser-extension-cannot-be-trusted",
    "votes": 4,
    "posted": "Nov 7, 2016 2:22:13 AM"
  },
  {
    "id": "12888112",
    "timestamp": "Nov 7, 2016 3:11:17 AM",
    "topic": "iOS App Store flooded with fake retail apps",
    "url": "http://www.nytimes.com/2016/11/07/technology/more-iphone-fake-retail-apps-before-holidays.html",
    "votes": 3,
    "posted": "Nov 7, 2016 2:09:14 AM"
  },
  {
    "id": "12888071",
    "timestamp": "Nov 7, 2016 2:21:13 AM",
    "topic": "What does Unsplash cost to run?",
    "url": "https://crew.co/backstage/dispatch/what-does-unsplash-cost/",
    "votes": 14,
    "posted": "Nov 7, 2016 1:57:19 AM"
  },
  {
    "id": "12887967",
    "timestamp": "Nov 7, 2016 3:41:20 AM",
    "topic": "A Bad Carver: Musings on why technology often seems to challenge the sacred",
    "url": "http://www.ribbonfarm.com/2016/11/03/a-bad-carver/",
    "votes": 4,
    "posted": "Nov 7, 2016 1:31:37 AM"
  },
  {
    "id": "12887959",
    "timestamp": "Nov 7, 2016 2:21:13 AM",
    "topic": "First look at Tesla’s new self-driving Autopilot hardware in the wild",
    "url": "https://electrek.co/2016/11/06/first-look-tesla-new-self-driving-autopilot-hardware-in-the-wild/",
    "votes": 3,
    "posted": "Nov 7, 2016 1:28:56 AM"
  },
  {
    "id": "12887927",
    "timestamp": "Nov 7, 2016 4:31:25 AM",
    "topic": "NYC Bike Stats",
    "url": "https://sirpthatch.github.io/post/NYC-General-Bike-Stats/",
    "votes": 4,
    "posted": "Nov 7, 2016 1:21:02 AM"
  },
  {
    "id": "12887925",
    "timestamp": "Nov 7, 2016 2:41:15 AM",
    "topic": "Perl and the birth of the dynamic web",
    "url": "https://opensource.com/life/16/11/perl-and-birth-dynamic-web",
    "votes": 4,
    "posted": "Nov 7, 2016 1:20:40 AM"
  },
  {
    "id": "12887910",
    "timestamp": "Nov 7, 2016 2:31:14 AM",
    "topic": "I have lived the USB-C #donglelife. Here’s what you’re in for – The Verge",
    "url": "http://www.theverge.com/2016/11/5/13523372/usb-c-macbook-adapter-donglelife-problems-thunderbolt",
    "votes": 5,
    "posted": "Nov 7, 2016 1:17:02 AM"
  },
  {
    "id": "12887805",
    "timestamp": "Nov 7, 2016 3:21:18 AM",
    "topic": "Switchers – Irony and Operating Systems",
    "url": "https://brianketelsen.com/blog/switchers/",
    "votes": 4,
    "posted": "Nov 7, 2016 12:47:33 AM"
  },
  {
    "id": "12887795",
    "timestamp": "Nov 7, 2016 3:41:20 AM",
    "topic": "Whatever happened to Japanese laptops?",
    "url": "http://jamielittle.org/2016/11/06/japan-laptops.html",
    "votes": 5,
    "posted": "Nov 7, 2016 12:45:03 AM"
  },
  {
    "id": "12887729",
    "timestamp": "Nov 7, 2016 3:31:19 AM",
    "topic": "Show HN: Chrome extension that replaces words into a different language",
    "url": "http://alpharabi.us",
    "votes": 3,
    "posted": "Nov 7, 2016 12:28:47 AM"
  },
  {
    "id": "12887669",
    "timestamp": "Nov 7, 2016 8:02:45 PM",
    "topic": "Scottish witchcraft book published online",
    "url": "http://www.bbc.com/news/uk-scotland-37789413",
    "votes": 3,
    "posted": "Nov 7, 2016 12:17:26 AM"
  },
  {
    "id": "12887659",
    "timestamp": "Nov 7, 2016 12:41:05 AM",
    "topic": "Energy Giant Shell Says Oil Demand Could Peak in Just Five Years",
    "url": "http://www.bloomberg.com/news/articles/2016-11-02/europe-s-biggest-oil-company-thinks-demand-may-peak-in-5-years",
    "votes": 6,
    "posted": "Nov 7, 2016 12:14:22 AM"
  },
  {
    "id": "12887569",
    "timestamp": "Nov 7, 2016 10:41:54 AM",
    "topic": "Shyness: small acts of heroism",
    "url": "http://www.the-tls.co.uk/articles/public/a-feature-not-a-bug/",
    "votes": 5,
    "posted": "Nov 6, 2016 11:55:22 PM"
  },
  {
    "id": "12887434",
    "timestamp": "Nov 7, 2016 12:01:02 AM",
    "topic": "Common Lisp Using LLVM and C++ for Molecular Metaprogramming",
    "url": "https://www.youtube.com/watch?v\u003d8X69_42Mj-g",
    "votes": 3,
    "posted": "Nov 6, 2016 11:23:18 PM"
  },
  {
    "id": "12887422",
    "timestamp": "Nov 6, 2016 11:51:01 PM",
    "topic": "Facebook is harming our democracy",
    "url": "http://www.vox.com/new-money/2016/11/6/13509854/facebook-politics-news-bad",
    "votes": 5,
    "posted": "Nov 6, 2016 11:20:02 PM"
  },
  {
    "id": "12887416",
    "timestamp": "Nov 7, 2016 12:01:01 AM",
    "topic": "Unsplash: royalty free HD images",
    "url": "https://unsplash.com/collections",
    "votes": 4,
    "posted": "Nov 6, 2016 11:19:02 PM"
  },
  {
    "id": "12887383",
    "timestamp": "Nov 7, 2016 2:01:12 AM",
    "topic": "Rust Collections Case Study: BTreeMap",
    "url": "http://cglab.ca/~abeinges/blah/rust-btree-case/",
    "votes": 3,
    "posted": "Nov 6, 2016 11:11:33 PM"
  },
  {
    "id": "12887290",
    "timestamp": "Nov 7, 2016 11:11:57 AM",
    "topic": "Show HN: Soundbox – Keep track what you\u0027ve listened to in your Soundcloud feed",
    "url": "http://www.soundbox.fyi",
    "votes": 5,
    "posted": "Nov 6, 2016 10:55:55 PM"
  },
  {
    "id": "12887229",
    "timestamp": "Nov 6, 2016 11:30:59 PM",
    "topic": "First 64-bit Orange Pi slips in under $20",
    "url": "http://hackerboards.com/first-64-bit-orange-pi-slips-in-under-20/",
    "votes": 3,
    "posted": "Nov 6, 2016 10:45:18 PM"
  },
  {
    "id": "12887211",
    "timestamp": "Nov 6, 2016 11:51:00 PM",
    "topic": "How I Freed My Android Tablet: A Journey in Reverse Engineering",
    "url": "https://www.thanassis.space/android.html",
    "votes": 7,
    "posted": "Nov 6, 2016 10:41:47 PM"
  },
  {
    "id": "12887117",
    "timestamp": "Nov 6, 2016 11:40:59 PM",
    "topic": "10 principles for smooth web animations",
    "url": "https://blog.gyrosco.pe/smooth-css-animations-7d8ffc2c1d29#.ra51rwso4",
    "votes": 5,
    "posted": "Nov 6, 2016 10:26:13 PM"
  },
  {
    "id": "12887079",
    "timestamp": "Nov 6, 2016 10:40:52 PM",
    "topic": "Getting started in open source as a non-programmer",
    "url": "http://micheleincalifornia.blogspot.com/2016/11/getting-started-in-open-source-as-non.html",
    "votes": 3,
    "posted": "Nov 6, 2016 10:17:32 PM"
  },
  {
    "id": "12887066",
    "timestamp": "Nov 6, 2016 10:30:51 PM",
    "topic": "Learn Vim Progressively",
    "url": "http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/",
    "votes": 3,
    "posted": "Nov 6, 2016 10:13:03 PM"
  },
  {
    "id": "12887060",
    "timestamp": "Nov 6, 2016 10:30:51 PM",
    "topic": "Ask HN: Who are the other Elon Musk\u0027s?",
    "votes": 7,
    "posted": "Nov 6, 2016 10:11:57 PM"
  },
  {
    "id": "12887022",
    "timestamp": "Nov 6, 2016 10:20:49 PM",
    "topic": "Design Principles for Reducing Cognitive Load",
    "url": "https://blog.marvelapp.com/design-principles-reducing-cognitive-load/",
    "votes": 4,
    "posted": "Nov 6, 2016 10:04:33 PM"
  },
  {
    "id": "12887007",
    "timestamp": "Nov 6, 2016 10:20:49 PM",
    "topic": "Time to Dump Time Zones",
    "url": "http://www.nytimes.com/2016/11/06/opinion/sunday/time-to-dump-time-zones.html?_r\u003d0",
    "votes": 7,
    "posted": "Nov 6, 2016 10:01:22 PM"
  },
  {
    "id": "12886968",
    "timestamp": "Nov 7, 2016 1:11:08 AM",
    "topic": "Ask HN: Tired of trying to catch the JavaScript train",
    "votes": 5,
    "posted": "Nov 6, 2016 9:52:05 PM"
  },
  {
    "id": "12886957",
    "timestamp": "Nov 7, 2016 1:11:08 AM",
    "topic": "Poll: How often do you check Ask HN or ShowHN posts?",
    "votes": 3,
    "posted": "Nov 6, 2016 9:50:59 PM"
  },
  {
    "id": "12886894",
    "timestamp": "Nov 6, 2016 9:50:46 PM",
    "topic": "On the road with the 13-inch MacBook Pro",
    "url": "https://sixcolors.com/post/2016/11/review-traveling-with-the-13-inch-macbook-pro/",
    "votes": 6,
    "posted": "Nov 6, 2016 9:29:59 PM"
  },
  {
    "id": "12886820",
    "timestamp": "Nov 6, 2016 9:40:45 PM",
    "topic": "Windows 10 Store Refunds ‘Call of Duty’ Player Because Nobody\u0027s Playing It",
    "url": "http://motherboard.vice.com/read/windows-10-store-refunds-call-of-duty-player-because-nobodys-playing-it",
    "votes": 4,
    "posted": "Nov 6, 2016 9:13:25 PM"
  },
  {
    "id": "12886672",
    "timestamp": "Nov 6, 2016 9:30:43 PM",
    "topic": "Delhi’s air is so toxic that schools are closing, expats are fleeing",
    "url": "http://qz.com/828754/india-pollution-schools-shut-down-expats-flee-and-the-visiting-uk-pm-theresa-may-risks-losing-hours-from-her-life-as-delhi-chokes/",
    "votes": 3,
    "posted": "Nov 6, 2016 8:38:35 PM"
  },
  {
    "id": "12886648",
    "timestamp": "Nov 6, 2016 9:30:44 PM",
    "topic": "What I learned from writing six functions that all did the same thing",
    "url": "https://medium.freecodecamp.com/what-i-learned-from-writing-six-functions-that-all-did-the-same-thing-b38fd48f0d55",
    "votes": 3,
    "posted": "Nov 6, 2016 8:34:18 PM"
  },
  {
    "id": "12886632",
    "timestamp": "Nov 7, 2016 11:11:57 AM",
    "topic": "When Crowds Try to Flee for Their Lives",
    "url": "http://www.atlasobscura.com/articles/what-happens-when-crowds-try-to-flee-for-their-lives",
    "votes": 3,
    "posted": "Nov 6, 2016 8:30:53 PM"
  },
  {
    "id": "12886614",
    "timestamp": "Nov 6, 2016 11:41:00 PM",
    "topic": "Show HN: Bash Script to generate static responsive image web galleries",
    "url": "https://github.com/Cyclenerd/gallery_shell",
    "votes": 5,
    "posted": "Nov 6, 2016 8:27:15 PM"
  },
  {
    "id": "12886590",
    "timestamp": "Nov 6, 2016 10:10:48 PM",
    "topic": "Slack is falling into a tough cycle every hot startup goes through",
    "url": "http://www.businessinsider.com/slack-falling-into-tough-cycle-all-hot-startups-go-through-2016-11",
    "votes": 8,
    "posted": "Nov 6, 2016 8:22:26 PM"
  },
  {
    "id": "12886525",
    "timestamp": "Nov 7, 2016 2:32:15 PM",
    "topic": "Electron is flash for the desktop",
    "url": "https://josephg.com/blog/electron-is-flash-for-the-desktop/",
    "votes": 7,
    "posted": "Nov 6, 2016 8:07:17 PM"
  },
  {
    "id": "12886441",
    "timestamp": "Nov 6, 2016 9:10:41 PM",
    "topic": "Ask HN: Any tips on debugging Linux hibernate issues?",
    "votes": 3,
    "posted": "Nov 6, 2016 7:48:30 PM"
  },
  {
    "id": "12886384",
    "timestamp": "Nov 7, 2016 7:22:41 PM",
    "topic": "Bytenet in Tensorflow – Neural Machine Translation in Linear Time",
    "url": "https://github.com/paarthneekhara/byteNet-tensorflow",
    "votes": 7,
    "posted": "Nov 6, 2016 7:35:54 PM"
  },
  {
    "id": "12886381",
    "timestamp": "Nov 7, 2016 10:41:54 AM",
    "topic": "Freud’s Discontents",
    "url": "https://www.thenation.com/article/freuds-discontents/",
    "votes": 2,
    "posted": "Nov 6, 2016 7:35:44 PM"
  },
  {
    "id": "12886225",
    "timestamp": "Nov 8, 2016 12:03:16 AM",
    "topic": "Ask HN: What are you reading this weekend?",
    "votes": 7,
    "posted": "Nov 6, 2016 6:59:09 PM"
  },
  {
    "id": "12886178",
    "timestamp": "Nov 6, 2016 7:10:28 PM",
    "topic": "Google\u0027s investment arm has quietly invested in Snapchat",
    "url": "http://www.businessinsider.com/alphabet-google-capitalg-invested-in-snapchat-snap-inc-2016-11",
    "votes": 3,
    "posted": "Nov 6, 2016 6:48:11 PM"
  },
  {
    "id": "12886175",
    "timestamp": "Nov 6, 2016 8:10:36 PM",
    "topic": "Yitang Zhang proves bounded gaps prime conjecture",
    "url": "http://www.slate.com/articles/health_and_science/do_the_math/2013/05/yitang_zhang_twin_primes_conjecture_a_huge_discovery_about_prime_numbers.html",
    "votes": 4,
    "posted": "Nov 6, 2016 6:47:25 PM"
  },
  {
    "id": "12886067",
    "timestamp": "Nov 6, 2016 7:20:30 PM",
    "topic": ":syntax off",
    "url": "http://dudzik.co/digress-into-development/syntax-off",
    "votes": 14,
    "posted": "Nov 6, 2016 6:22:33 PM"
  },
  {
    "id": "12885980",
    "timestamp": "Nov 6, 2016 6:40:25 PM",
    "topic": "Intercooler.js – Making AJAX as easy as anchor tags",
    "url": "https://github.com/LeadDyno/intercooler-js",
    "votes": 5,
    "posted": "Nov 6, 2016 6:04:46 PM"
  },
  {
    "id": "12885843",
    "timestamp": "Nov 6, 2016 6:00:21 PM",
    "topic": "Books Warren Buffett thinks you should read",
    "url": "http://www.smh.com.au/business/markets/21-books-warren-buffett-thinks-you-should-read-20161103-gshv25.html",
    "votes": 3,
    "posted": "Nov 6, 2016 5:39:41 PM"
  },
  {
    "id": "12885840",
    "timestamp": "Nov 6, 2016 6:20:23 PM",
    "topic": "Getting Started with MobX: An Easy Example",
    "url": "https://medium.com/@carsoncgibbons/getting-started-with-mobx-an-easy-example-99850d13dbd7#.loxel4et0",
    "votes": 3,
    "posted": "Nov 6, 2016 5:38:49 PM"
  },
  {
    "id": "12885739",
    "timestamp": "Nov 6, 2016 7:40:32 PM",
    "topic": "Gmail Account Hijacking Vulnerability",
    "url": "http://blog.securityfuse.com/2016/11/gmail-account-hijacking-vulnerability.html",
    "votes": 5,
    "posted": "Nov 6, 2016 5:19:54 PM"
  },
  {
    "id": "12885686",
    "timestamp": "Nov 6, 2016 5:40:19 PM",
    "topic": "Elon Musk: Robots will take your jobs, government will have to pay your wage?",
    "url": "http://finance.yahoo.com/news/elon-musk-robots-jobs-government-181956572.html?.gg_invalid\u003dtrue",
    "votes": 4,
    "posted": "Nov 6, 2016 5:11:00 PM"
  },
  {
    "id": "12885594",
    "timestamp": "Nov 6, 2016 7:00:27 PM",
    "topic": "Imagine there is no media bias",
    "url": "http://www.powerlineblog.com/archives/2016/11/imagine-theres-no-media-bias-2.php",
    "votes": 3,
    "posted": "Nov 6, 2016 4:55:13 PM"
  },
  {
    "id": "12885585",
    "timestamp": "Nov 6, 2016 8:00:34 PM",
    "topic": "Show HN: LosslessCut – Cross-platform GUI tool for fast, lossless video cutting",
    "url": "https://github.com/mifi/lossless-cut",
    "votes": 4,
    "posted": "Nov 6, 2016 4:53:56 PM"
  },
  {
    "id": "12885564",
    "timestamp": "Nov 7, 2016 8:02:45 PM",
    "topic": "The Oppressive Gospel of ‘Minimalism’",
    "url": "http://www.nytimes.com/2016/07/31/magazine/the-oppressive-gospel-of-minimalism.html?_r\u003d1",
    "votes": 4,
    "posted": "Nov 6, 2016 4:48:21 PM"
  },
  {
    "id": "12885558",
    "timestamp": "Nov 7, 2016 12:22:03 PM",
    "topic": "Ask HN: How common is illegal web scraping?",
    "votes": 6,
    "posted": "Nov 6, 2016 4:47:36 PM"
  },
  {
    "id": "12885549",
    "timestamp": "Nov 6, 2016 4:50:14 PM",
    "topic": "FindBugs project in its current form  is dead",
    "url": "https://mailman.cs.umd.edu/pipermail/findbugs-discuss/2016-November/004321.html",
    "votes": 3,
    "posted": "Nov 6, 2016 4:45:08 PM"
  },
  {
    "id": "12885500",
    "timestamp": "Nov 6, 2016 7:30:31 PM",
    "topic": "Why Does the Cloud Stop Computing? Lessons from Hundreds of Service Outages",
    "url": "http://muratbuffalo.blogspot.com/2016/11/why-does-cloud-stop-computing-lessons.html",
    "votes": 7,
    "posted": "Nov 6, 2016 4:34:35 PM"
  },
  {
    "id": "12885482",
    "timestamp": "Nov 7, 2016 4:31:25 AM",
    "topic": "Ask HN: Tips for reading HN on mobile for older eyes?",
    "votes": 4,
    "posted": "Nov 6, 2016 4:31:19 PM"
  },
  {
    "id": "12885435",
    "timestamp": "Nov 6, 2016 5:20:17 PM",
    "topic": "Doing Business in Japan",
    "url": "http://www.kalzumeus.com/2014/11/07/doing-business-in-japan/",
    "votes": 5,
    "posted": "Nov 6, 2016 4:21:55 PM"
  },
  {
    "id": "12885416",
    "timestamp": "Nov 6, 2016 4:30:12 PM",
    "topic": "U.S. regulator found another cheat device in Audi car",
    "url": "http://www.reuters.com/article/us-volkswagen-emissions-audi-idUSKBN1300V7",
    "votes": 23,
    "posted": "Nov 6, 2016 4:17:24 PM"
  },
  {
    "id": "12885396",
    "timestamp": "Nov 6, 2016 4:30:12 PM",
    "topic": "Maryland will audit all votes cast in general election",
    "url": "http://www.baltimoresun.com/news/maryland/politics/bs-md-sun-investigates-election-audit-20161105-story.html",
    "votes": 3,
    "posted": "Nov 6, 2016 4:11:51 PM"
  },
  {
    "id": "12885393",
    "timestamp": "Nov 6, 2016 4:30:12 PM",
    "topic": "Retrotechtacular: FAX as a Service in 1984",
    "url": "http://hackaday.com/2016/11/04/retrotechtacular-fax-as-a-service-in-1984/",
    "votes": 5,
    "posted": "Nov 6, 2016 4:11:37 PM"
  },
  {
    "id": "12885369",
    "timestamp": "Nov 6, 2016 4:10:09 PM",
    "topic": "GiveCampus is hiring full stack engineers and biz dev roles in DC and SF",
    "votes": 1,
    "posted": "Nov 6, 2016 4:07:15 PM"
  },
  {
    "id": "12885356",
    "timestamp": "Nov 6, 2016 5:00:15 PM",
    "topic": "Acknowledging the complexity of life may be a fruitful path to well-being",
    "url": "https://www.scientificamerican.com/article/negative-emotions-key-well-being/",
    "votes": 3,
    "posted": "Nov 6, 2016 4:03:40 PM"
  },
  {
    "id": "12885235",
    "timestamp": "Nov 6, 2016 3:40:07 PM",
    "topic": "Minnesota Taxes the Rich, Pays Workers More, And–Shocking–The Economy Improves",
    "url": "https://www.fastcoexist.com/3065280/minnesota-taxes-the-rich-pays-workers-more-and-shocking-the-economy-improves",
    "votes": 4,
    "posted": "Nov 6, 2016 3:37:15 PM"
  },
  {
    "id": "12885220",
    "timestamp": "Nov 6, 2016 3:40:07 PM",
    "topic": "Best Android Libraries for Developers",
    "url": "https://cloudrail.com/best-android-libraries-for-developers/",
    "votes": 6,
    "posted": "Nov 6, 2016 3:31:57 PM"
  },
  {
    "id": "12884928",
    "timestamp": "Nov 6, 2016 3:20:05 PM",
    "topic": "SpaceX finally knows what caused the latest rocket failure",
    "url": "http://www.theverge.com/2016/11/5/13533900/elon-musk-spacex-falcon-9-failure-cause-solved",
    "votes": 5,
    "posted": "Nov 6, 2016 2:18:21 PM"
  },
  {
    "id": "12884859",
    "timestamp": "Nov 6, 2016 2:30:00 PM",
    "topic": "How Does the Electoral College Work and Is It Fair",
    "url": "http://www.npr.org/2016/11/06/500660424/how-the-electoral-college-works-and-why-you-don-t-want-to-think-about-it",
    "votes": 4,
    "posted": "Nov 6, 2016 1:51:18 PM"
  },
  {
    "id": "12884843",
    "timestamp": "Nov 6, 2016 2:40:02 PM",
    "topic": "ZType – typing game",
    "url": "http://zty.pe",
    "votes": 4,
    "posted": "Nov 6, 2016 1:44:51 PM"
  },
  {
    "id": "12884793",
    "timestamp": "Nov 6, 2016 1:59:57 PM",
    "topic": "Employees are faster and more creative when solving other people\u0027s problems",
    "url": "http://www.telegraph.co.uk/finance/businessclub/8527500/Daniel-H-Pink-employees-are-faster-and-more-creative-when-solving-other-peoples-problems.html",
    "votes": 8,
    "posted": "Nov 6, 2016 1:25:57 PM"
  },
  {
    "id": "12884776",
    "timestamp": "Nov 6, 2016 10:20:50 PM",
    "topic": "Show HN: A Cheatsheet for funcy sequence, collections and functional stuff",
    "url": "http://funcy.readthedocs.io/en/latest/cheatsheet.html",
    "votes": 7,
    "posted": "Nov 6, 2016 1:19:27 PM"
  },
  {
    "id": "12884762",
    "timestamp": "Nov 6, 2016 4:20:10 PM",
    "topic": "Nvidia  adds telemetry to latest drivers",
    "url": "http://www.majorgeeks.com/news/story/nvidia_adds_telemetry_to_latest_drivers_heres_how_to_disable_it.html",
    "votes": 10,
    "posted": "Nov 6, 2016 1:15:53 PM"
  },
  {
    "id": "12884756",
    "timestamp": "Nov 6, 2016 4:20:11 PM",
    "topic": "LinkedIn SEC filing tells exactly how its acqusition was negotiated",
    "url": "https://www.sec.gov/Archives/edgar/data/1271024/000110465916130837/a16-14187_1prem14a.htm#BackgroundoftheMerger_090652",
    "votes": 5,
    "posted": "Nov 6, 2016 1:13:47 PM"
  },
  {
    "id": "12884737",
    "timestamp": "Nov 6, 2016 4:20:11 PM",
    "topic": "China’s ‘citizen scores’ gets people barred from flights – like Black Mirror",
    "url": "https://www.techinasia.com/china-citizens-scores-barred-from-flights",
    "votes": 4,
    "posted": "Nov 6, 2016 1:07:24 PM"
  },
  {
    "id": "12884694",
    "timestamp": "Nov 6, 2016 2:30:00 PM",
    "topic": "JSCity: source code visualization for (and by) JavaScript",
    "url": "https://github.com/aserg-ufmg/JSCity/wiki/JSCITY",
    "votes": 3,
    "posted": "Nov 6, 2016 12:52:20 PM"
  },
  {
    "id": "12884633",
    "timestamp": "Nov 6, 2016 4:20:11 PM",
    "topic": "Whatsapp extremely popular among diplomats",
    "url": "https://www.theguardian.com/technology/2016/nov/04/why-do-diplomats-use-this-alien-whatsapp-emoji-for-vladimir-putin",
    "votes": 5,
    "posted": "Nov 6, 2016 12:32:22 PM"
  },
  {
    "id": "12884532",
    "timestamp": "Nov 6, 2016 3:40:07 PM",
    "topic": "Ask HN: Should I open source PropertyWebBuilder?",
    "votes": 3,
    "posted": "Nov 6, 2016 11:54:06 AM"
  },
  {
    "id": "12884526",
    "timestamp": "Nov 6, 2016 4:20:11 PM",
    "topic": "Alex, Tibet and Didier quit their jobs to cross South America on dirt bikes",
    "url": "https://medium.com/the-long-way-out",
    "votes": 3,
    "posted": "Nov 6, 2016 11:52:33 AM"
  },
  {
    "id": "12884502",
    "timestamp": "Nov 6, 2016 2:30:00 PM",
    "topic": "Verified Voting",
    "url": "https://www.verifiedvoting.org/",
    "votes": 3,
    "posted": "Nov 6, 2016 11:44:08 AM"
  },
  {
    "id": "12884477",
    "timestamp": "Nov 6, 2016 11:49:45 AM",
    "topic": "Elon Musk thinks universal income is answer to automation taking human jobs",
    "url": "http://mashable.com/2016/11/05/elon-musk-universal-basic-income/?utm_cid\u003dmash-com-fb-main-link#VfVfptagSmqG",
    "votes": 3,
    "posted": "Nov 6, 2016 11:36:27 AM"
  },
  {
    "id": "12884467",
    "timestamp": "Nov 6, 2016 4:30:13 PM",
    "topic": "Reinforcement Learning Designed NNs Equal Human Performance",
    "url": "http://openreview.net/forum?id\u003dr1Ue8Hcxg",
    "votes": 3,
    "posted": "Nov 6, 2016 11:34:26 AM"
  },
  {
    "id": "12884453",
    "timestamp": "Nov 6, 2016 12:39:49 PM",
    "topic": "Chevy starts manufacturing the Bolt",
    "url": "https://www.engadget.com/2016/11/05/chevy-starts-manufacturing-bolt/",
    "votes": 3,
    "posted": "Nov 6, 2016 11:29:15 AM"
  },
  {
    "id": "12884452",
    "timestamp": "Nov 7, 2016 1:21:09 AM",
    "topic": "Ask HN: Overwhelmed with learning machine learning, how do I proceed?",
    "votes": 11,
    "posted": "Nov 6, 2016 11:28:42 AM"
  },
  {
    "id": "12884451",
    "timestamp": "Nov 6, 2016 1:19:52 PM",
    "topic": "Sleep and creativity",
    "url": "https://en.wikipedia.org/wiki/Sleep_and_creativity",
    "votes": 3,
    "posted": "Nov 6, 2016 11:28:37 AM"
  },
  {
    "id": "12884421",
    "timestamp": "Nov 7, 2016 8:42:50 PM",
    "topic": "TV series Planet Earth II: The natural world from a new angle",
    "url": "http://www.bbc.co.uk/news/in-pictures-37872131",
    "votes": 4,
    "posted": "Nov 6, 2016 11:22:13 AM"
  },
  {
    "id": "12884417",
    "timestamp": "Nov 6, 2016 2:30:00 PM",
    "topic": "Automatic Security Updates for Developers",
    "url": "https://paragonie.com/blog/2016/10/guide-automatic-security-updates-for-php-developers",
    "votes": 3,
    "posted": "Nov 6, 2016 11:19:06 AM"
  },
  {
    "id": "12884413",
    "timestamp": "Nov 6, 2016 8:00:35 PM",
    "topic": "What Is Peter Thiel\u0027s Grand Trumpian Plan?",
    "url": "http://www.vanityfair.com/news/2016/11/what-is-peter-thiel-grand-trumpian-plan",
    "votes": 5,
    "posted": "Nov 6, 2016 11:18:17 AM"
  },
  {
    "id": "12884393",
    "timestamp": "Nov 6, 2016 2:09:58 PM",
    "topic": "How a Gift from Schoolchildren Let the Soviets Spy on the U.S. For 7 Years",
    "url": "http://www.atlasobscura.com/articles/how-a-gift-from-schoolchildren-let-the-soviets-spy-on-the-us-for-7-years",
    "votes": 5,
    "posted": "Nov 6, 2016 11:13:05 AM"
  },
  {
    "id": "12884391",
    "timestamp": "Nov 6, 2016 11:29:44 AM",
    "topic": "Why you should avoid LastPass",
    "url": "https://medium.com/@gempir/why-you-should-avoid-lastpass-f698761421b8#.xy3akp31p",
    "votes": 6,
    "posted": "Nov 6, 2016 11:12:24 AM"
  },
  {
    "id": "12884352",
    "timestamp": "Nov 6, 2016 2:30:00 PM",
    "topic": "Do-Sshuttle: Transparent Proxying via Your DigitalOcean Droplets",
    "url": "https://github.com/f/do-sshuttle",
    "votes": 5,
    "posted": "Nov 6, 2016 10:57:50 AM"
  },
  {
    "id": "12884153",
    "timestamp": "Nov 6, 2016 2:30:01 PM",
    "topic": "A Decentralized Content Registry for the Decentralized Web: CoalaIP and IPDB +IPFS",
    "url": "https://medium.com/ipdb-blog/a-decentralized-content-registry-for-the-decentralized-web-99cf1335291f#.frtz7vo79",
    "votes": 3,
    "posted": "Nov 6, 2016 9:26:31 AM"
  },
  {
    "id": "12884144",
    "timestamp": "Nov 6, 2016 10:39:40 AM",
    "topic": "Berlin Is Bringing Back Subway Trains from the 1950s",
    "url": "http://www.citylab.com/commute/2016/11/the-berlin-subway-is-bringing-back-1950s-trains/506450/?utm_source\u003dSFFB",
    "votes": 6,
    "posted": "Nov 6, 2016 9:23:20 AM"
  },
  {
    "id": "12884141",
    "timestamp": "Nov 6, 2016 10:29:39 AM",
    "topic": "Elon Musk thinks we need a \u0027popular uprising\u0027 against the fossil fuel industry",
    "url": "http://uk.businessinsider.com/elon-musk-popular-uprising-climate-change-fossil-fuels-2016-11?r\u003dUS\u0026IR\u003dT",
    "votes": 7,
    "posted": "Nov 6, 2016 9:22:16 AM"
  },
  {
    "id": "12884110",
    "timestamp": "Nov 6, 2016 1:49:54 PM",
    "topic": "Scientists Can Publish Their Best Work at Any Age",
    "url": "http://www.nature.com/news/scientists-can-publish-their-best-work-at-any-age-1.20926",
    "votes": 4,
    "posted": "Nov 6, 2016 9:08:10 AM"
  },
  {
    "id": "12884055",
    "timestamp": "Nov 6, 2016 10:29:39 AM",
    "topic": "In scathing ruling, Federal Court says CSIS bulk data collection illegal",
    "url": "http://www.theglobeandmail.com/news/national/in-scathing-ruling-federal-court-says-csis-bulk-data-collection-illegal/article32669448/",
    "votes": 6,
    "posted": "Nov 6, 2016 8:49:24 AM"
  },
  {
    "id": "12884030",
    "timestamp": "Nov 6, 2016 10:29:39 AM",
    "topic": "Reservoirs are contributing 1.5% of global greenhouse gas emissions",
    "url": "http://reflectionsonwater.org/blog/2016/10/7/damwho-knew",
    "votes": 3,
    "posted": "Nov 6, 2016 8:39:51 AM"
  },
  {
    "id": "12883872",
    "timestamp": "Nov 6, 2016 8:19:29 AM",
    "topic": "Tensions Flare in Silicon Valley Over Growth",
    "url": "http://www.nytimes.com/2016/11/05/technology/silicon-valley-california-growth.html",
    "votes": 4,
    "posted": "Nov 6, 2016 7:36:53 AM"
  },
  {
    "id": "12883836",
    "timestamp": "Nov 6, 2016 2:30:00 PM",
    "topic": "U.S. Chief Information Officer Seeks to Upgrade Government\u0027s Computers",
    "url": "http://www.npr.org/2016/10/31/500115472/u-s-chief-information-officer-seeks-to-upgrade-governments-computers",
    "votes": 3,
    "posted": "Nov 6, 2016 7:21:49 AM"
  },
  {
    "id": "12883805",
    "timestamp": "Nov 6, 2016 8:29:30 AM",
    "topic": "Nightmare Machine by MIT Media Lab",
    "url": "http://nightmare.mit.edu/#.WB7JfwRXkFc.hackernews",
    "votes": 4,
    "posted": "Nov 6, 2016 7:11:21 AM"
  },
  {
    "id": "12883645",
    "timestamp": "Nov 6, 2016 7:59:27 AM",
    "topic": "Daiwa to adopt blockchain for Myanmar stock trading",
    "url": "http://asia.nikkei.com/Business/Companies/Daiwa-to-adopt-blockchain-for-Myanmar-stock-trading",
    "votes": 5,
    "posted": "Nov 6, 2016 6:12:24 AM"
  },
  {
    "id": "12883616",
    "timestamp": "Nov 6, 2016 6:39:20 AM",
    "topic": "New NASA Emdrive paper shows force of 1.2 millinewtons per kilowatt in a Vacuum",
    "url": "http://www.nextbigfuture.com/2016/11/new-nasa-emdrive-paper-shows-force-of.html",
    "votes": 8,
    "posted": "Nov 6, 2016 6:02:45 AM"
  },
  {
    "id": "12883534",
    "timestamp": "Nov 6, 2016 7:00:27 PM",
    "topic": "When Science Went Modern",
    "url": "http://www.iasc-culture.org/THR/THR_article_2016_Fall_Daston.php",
    "votes": 3,
    "posted": "Nov 6, 2016 5:38:11 AM"
  },
  {
    "id": "12883513",
    "timestamp": "Nov 6, 2016 7:19:24 AM",
    "topic": "Adobe is working on an audio app that lets you add words someone never said",
    "url": "http://www.theverge.com/2016/11/3/13514088/adobe-photoshop-audio-project-voco",
    "votes": 4,
    "posted": "Nov 6, 2016 5:29:32 AM"
  },
  {
    "id": "12883481",
    "timestamp": "Nov 6, 2016 6:39:20 AM",
    "topic": "Eben Moglen on GPL Compliance and Building Communities: What Works",
    "url": "https://www.linux.com/news/eben-moglen-gpl-compliance-and-building-communities-what-works",
    "votes": 4,
    "posted": "Nov 6, 2016 5:17:01 AM"
  },
  {
    "id": "12883464",
    "timestamp": "Nov 6, 2016 8:00:34 PM",
    "topic": "When the FBI Has a Phone It Can\u0027t Crack, It Calls These Israeli Hackers",
    "url": "https://theintercept.com/2016/10/31/fbis-go-hackers/",
    "votes": 4,
    "posted": "Nov 6, 2016 5:10:55 AM"
  },
  {
    "id": "12883368",
    "timestamp": "Nov 6, 2016 5:19:14 AM",
    "topic": "There’s Big Money to Be Made in Asteroid Mining",
    "url": "http://www.visualcapitalist.com/theres-big-money-made-asteroid-mining/?utm_content\u003dbuffer38745\u0026utm_medium\u003dsocial\u0026utm_source\u003dfacebook.com\u0026utm_campaign\u003dbuffer",
    "votes": 4,
    "posted": "Nov 6, 2016 4:35:13 AM"
  },
  {
    "id": "12883356",
    "timestamp": "Nov 6, 2016 5:09:13 AM",
    "topic": "Cylance Discloses Voting Machine Vulnerability 4 Days Before Election",
    "url": "https://blog.cylance.com/cylance-discloses-voting-machine-vulnerability",
    "votes": 4,
    "posted": "Nov 6, 2016 4:31:59 AM"
  },
  {
    "id": "12883264",
    "timestamp": "Nov 6, 2016 7:59:27 AM",
    "topic": "Online PHP Coding Standards Fixer",
    "url": "http://phpio.net/tools/csfixer",
    "votes": 4,
    "posted": "Nov 6, 2016 4:08:31 AM"
  },
  {
    "id": "12883231",
    "timestamp": "Nov 6, 2016 4:39:11 AM",
    "topic": "Fighting Loneliness with Public Living Rooms",
    "url": "http://www.citylab.com/navigator/2016/11/fighting-loneliness-with-public-living-rooms/506360/",
    "votes": 3,
    "posted": "Nov 6, 2016 4:01:00 AM"
  },
  {
    "id": "12883206",
    "timestamp": "Nov 6, 2016 5:30:18 PM",
    "topic": "Robert Conquest’s muses",
    "url": "http://www.the-tls.co.uk/articles/public/a-sensual-muse/",
    "votes": 3,
    "posted": "Nov 6, 2016 3:54:34 AM"
  },
  {
    "id": "12883173",
    "timestamp": "Nov 6, 2016 7:59:27 AM",
    "topic": "The X3DH Key Agreement Protocol",
    "url": "https://whispersystems.org/docs/specifications/x3dh/",
    "votes": 3,
    "posted": "Nov 6, 2016 3:43:28 AM"
  },
  {
    "id": "12883084",
    "timestamp": "Nov 6, 2016 3:59:08 AM",
    "topic": "Tower – The most powerful Git client for Mac and Windows",
    "url": "https://www.git-tower.com/",
    "votes": 3,
    "posted": "Nov 6, 2016 3:16:06 AM"
  },
  {
    "id": "12883047",
    "timestamp": "Nov 6, 2016 3:29:06 AM",
    "topic": "Nyancat on the touchbar",
    "url": "https://github.com/avatsaev/touchbar_nyancat",
    "votes": 4,
    "posted": "Nov 6, 2016 3:02:41 AM"
  },
  {
    "id": "12883035",
    "timestamp": "Nov 6, 2016 2:30:01 PM",
    "topic": "Super-cavitating ship: hull friction to 1/900th that of conventional",
    "url": "https://en.wikipedia.org/wiki/Juliet_Marine_Systems_Ghost",
    "votes": 3,
    "posted": "Nov 6, 2016 2:58:35 AM"
  },
  {
    "id": "12882957",
    "timestamp": "Nov 6, 2016 4:29:10 AM",
    "topic": "What programming language should you learn first? (Answer: JavaScript)",
    "url": "https://medium.freecodecamp.com/what-programming-language-should-i-learn-first-%CA%87d%C4%B1%C9%B9%C9%94s%C9%90%CA%8C%C9%90%C9%BE-%C9%B9%C7%9D%CA%8Dsu%C9%90-19a33b0a467d#.wd4cjsynu",
    "votes": 3,
    "posted": "Nov 6, 2016 2:34:34 AM"
  },
  {
    "id": "12882847",
    "timestamp": "Nov 6, 2016 2:19:00 AM",
    "topic": "The Geek Keep: Synthesize Speech in Any Voice",
    "url": "http://geekkeep.blogspot.com/2016/11/synthesize-speech-in-any-voicenew.html#.WB6AoATmhTs.hackernews",
    "votes": 3,
    "posted": "Nov 6, 2016 2:03:06 AM"
  },
  {
    "id": "12882837",
    "timestamp": "Nov 6, 2016 2:29:01 AM",
    "topic": "Tensorflow and Deep Learning, Without a PhD, Martin Gorner, Google [video]",
    "url": "https://www.youtube.com/watch?v\u003dsEciSlAClL8",
    "votes": 3,
    "posted": "Nov 6, 2016 2:00:53 AM"
  },
  {
    "id": "12882816",
    "timestamp": "Nov 6, 2016 2:59:03 AM",
    "topic": "Ask HN: Overwhelmed with learning front-end, how do I proceed?",
    "votes": 6,
    "posted": "Nov 6, 2016 1:52:02 AM"
  },
  {
    "id": "12882790",
    "timestamp": "Nov 6, 2016 8:09:28 AM",
    "topic": "I2P: The Invisible Internet Project",
    "url": "https://geti2p.net/en/",
    "votes": 3,
    "posted": "Nov 6, 2016 1:46:55 AM"
  },
  {
    "id": "12882719",
    "timestamp": "Nov 6, 2016 2:19:59 PM",
    "topic": "The Story of “How About Never” (2014)",
    "url": "http://www.newyorker.com/cartoons/bob-mankoff/the-story-of-how-about-never",
    "votes": 5,
    "posted": "Nov 6, 2016 1:30:54 AM"
  },
  {
    "id": "12882697",
    "timestamp": "Nov 6, 2016 2:08:59 AM",
    "topic": "Harvard researchers created solid metallic hydrogen in the lab",
    "url": "http://www.nextbigfuture.com/2016/11/harvard-researchers-created-solid.html",
    "votes": 5,
    "posted": "Nov 6, 2016 1:24:57 AM"
  },
  {
    "id": "12882696",
    "timestamp": "Nov 6, 2016 1:38:57 AM",
    "topic": "Every version of Voxel Quest released (in crude, raw, glory)",
    "url": "http://www.voxelquest.com/news/every-version-of-voxel-quest-ever",
    "votes": 6,
    "posted": "Nov 6, 2016 1:24:25 AM"
  },
  {
    "id": "12882666",
    "timestamp": "Nov 6, 2016 1:18:55 AM",
    "topic": "The ruthlessly effective rebranding of Europe’s new far right",
    "url": "https://www.theguardian.com/world/2016/nov/01/the-ruthlessly-effective-rebranding-of-europes-new-far-right",
    "votes": 3,
    "posted": "Nov 6, 2016 1:14:57 AM"
  },
  {
    "id": "12882648",
    "timestamp": "Nov 6, 2016 2:29:01 AM",
    "topic": "Verifying the Substitution Cipher Folklore",
    "url": "http://www.spinellis.gr/blog/20160318/",
    "votes": 3,
    "posted": "Nov 6, 2016 1:11:44 AM"
  },
  {
    "id": "12882621",
    "timestamp": "Nov 6, 2016 1:48:57 AM",
    "topic": "Don’t Get Attached, It’s Just Luck. My Interviewing Advice and Tips",
    "url": "https://medium.com/@ehnertm/dont-get-attached-it-s-just-luck-26517994de30#.5j2hjaj2e",
    "votes": 3,
    "posted": "Nov 6, 2016 1:05:06 AM"
  },
  {
    "id": "12882615",
    "timestamp": "Nov 6, 2016 2:08:59 AM",
    "topic": "Venezuela’s currency is dying",
    "url": "https://www.washingtonpost.com/news/wonk/wp/2016/11/04/venezuelas-currency-is-dying/",
    "votes": 8,
    "posted": "Nov 6, 2016 1:03:33 AM"
  },
  {
    "id": "12882505",
    "timestamp": "Nov 6, 2016 3:10:04 PM",
    "topic": "Anti-Piracy Group Uses ‘Pirated’ Code on Its Website",
    "url": "https://torrentfreak.com/anti-piracy-group-uses-pirated-code-on-its-website-161105/",
    "votes": 4,
    "posted": "Nov 6, 2016 12:33:47 AM"
  },
  {
    "id": "12882472",
    "timestamp": "Nov 6, 2016 12:28:51 AM",
    "topic": "Mattermark Is Hiring a Principal Product Designer",
    "url": "https://jobs.lever.co/mattermark/f2b6dae3-e184-4022-b34b-658fd1eb1deb",
    "votes": 1,
    "posted": "Nov 6, 2016 12:25:07 AM"
  },
  {
    "id": "12882434",
    "timestamp": "Nov 6, 2016 4:59:13 AM",
    "topic": "Creating linked open data for 5000 works of art",
    "url": "https://blog.wikimedia.org/2016/11/05/wikidata-visiting-scholar-art-dataset/",
    "votes": 3,
    "posted": "Nov 6, 2016 12:14:34 AM"
  },
  {
    "id": "12882349",
    "timestamp": "Nov 6, 2016 12:38:52 AM",
    "topic": "Ask HN: You\u0027ve got one month, what\u0027s your challenge?",
    "votes": 6,
    "posted": "Nov 5, 2016 11:52:58 PM"
  },
  {
    "id": "12882320",
    "timestamp": "Nov 6, 2016 12:08:49 AM",
    "topic": "PaperNIC – Open Source Document Management and Collaboration System",
    "url": "https://github.com/murat-cileli/papernic",
    "votes": 5,
    "posted": "Nov 5, 2016 11:43:46 PM"
  },
  {
    "id": "12882311",
    "timestamp": "Nov 6, 2016 12:08:49 AM",
    "topic": "Internet Pioneers Slam $750,000 Settlement for the \u0027Man Who Invented Email\u0027",
    "url": "http://gizmodo.com/internet-pioneers-slam-750-000-settlement-for-the-man-1788503950",
    "votes": 5,
    "posted": "Nov 5, 2016 11:39:23 PM"
  },
  {
    "id": "12882269",
    "timestamp": "Nov 6, 2016 5:09:14 AM",
    "topic": "Ask HN: How to escape front end development?",
    "votes": 8,
    "posted": "Nov 5, 2016 11:27:30 PM"
  },
  {
    "id": "12882097",
    "timestamp": "Nov 5, 2016 11:58:48 PM",
    "topic": "The Principles Behind Voting Systems",
    "url": "https://medium.com/@tunesmith/the-principles-behind-voting-systems-65ee7d85f93#.164j5sh0n",
    "votes": 3,
    "posted": "Nov 5, 2016 10:51:35 PM"
  },
  {
    "id": "12882084",
    "timestamp": "Nov 6, 2016 4:49:12 AM",
    "topic": "Decrypt all authorization tokens on macOS without user authentication",
    "url": "https://github.com/manwhoami/MMeTokenDecrypt",
    "votes": 6,
    "posted": "Nov 5, 2016 10:49:33 PM"
  },
  {
    "id": "12882062",
    "timestamp": "Nov 6, 2016 2:59:03 AM",
    "topic": "The Pact Smart-Contract Language [pdf]",
    "url": "http://kadena.io/docs/Kadena-PactWhitepaper-Oct2016.pdf",
    "votes": 5,
    "posted": "Nov 5, 2016 10:44:53 PM"
  },
  {
    "id": "12881980",
    "timestamp": "Nov 5, 2016 11:28:45 PM",
    "topic": "How Rom-Coms Undermine Women",
    "url": "http://www.theatlantic.com/entertainment/archive/2016/11/its-rom-coms-fault-too/505928/?single_page\u003dtrue",
    "votes": 6,
    "posted": "Nov 5, 2016 10:27:31 PM"
  },
  {
    "id": "12881961",
    "timestamp": "Nov 5, 2016 10:38:40 PM",
    "topic": "The secret world of microwave networks",
    "url": "http://arstechnica.com/information-technology/2016/11/private-microwave-networks-financial-hft/",
    "votes": 3,
    "posted": "Nov 5, 2016 10:23:55 PM"
  },
  {
    "id": "12881947",
    "timestamp": "Nov 5, 2016 10:48:41 PM",
    "topic": "Inside NORAD\u0027s Cheyenne Mountain Combat Center",
    "url": "http://thememoryhole2.org/blog/inside-norad",
    "votes": 4,
    "posted": "Nov 5, 2016 10:18:28 PM"
  },
  {
    "id": "12881703",
    "timestamp": "Nov 5, 2016 10:08:37 PM",
    "topic": "Contact lenses with infrared vision",
    "url": "http://spectrum.ieee.org/nanoclast/semiconductors/optoelectronics/graphene-gives-you-infrared-vision-in-a-contact-lens",
    "votes": 3,
    "posted": "Nov 5, 2016 9:25:22 PM"
  },
  {
    "id": "12881584",
    "timestamp": "Nov 5, 2016 10:18:38 PM",
    "topic": "How (some of) your professors see you (2009)",
    "url": "http://edwardfeser.blogspot.com/2009/03/how-some-of-your-professors-see-you.html",
    "votes": 3,
    "posted": "Nov 5, 2016 9:00:55 PM"
  },
  {
    "id": "12881575",
    "timestamp": "Nov 6, 2016 2:50:03 PM",
    "topic": "Raising the Dead (2005)",
    "url": "http://www.outsideonline.com/1922711/raising-dead",
    "votes": 3,
    "posted": "Nov 5, 2016 8:58:06 PM"
  },
  {
    "id": "12881569",
    "timestamp": "Nov 5, 2016 9:18:32 PM",
    "topic": "Tech Jobs, Cheaper Housing: The New Silicon Cities",
    "url": "http://www.wsj.com/articles/tech-jobs-cheaper-housing-the-new-silicon-cities-1478181842",
    "votes": 3,
    "posted": "Nov 5, 2016 8:57:06 PM"
  },
  {
    "id": "12881537",
    "timestamp": "Nov 5, 2016 10:18:38 PM",
    "topic": "The end of the operating systen",
    "url": "http://www.morethanseven.net/2016/11/05/the-end-of-the-general-purpose-operating-system-as-it-happens/",
    "votes": 6,
    "posted": "Nov 5, 2016 8:49:47 PM"
  },
  {
    "id": "12881448",
    "timestamp": "Nov 6, 2016 5:00:15 PM",
    "topic": "The Cinematic Traumas of Kenneth Lonergan",
    "url": "http://www.newyorker.com/magazine/2016/11/07/the-cinematic-traumas-of-kenneth-lonergan",
    "votes": 4,
    "posted": "Nov 5, 2016 8:29:46 PM"
  },
  {
    "id": "12881447",
    "timestamp": "Nov 6, 2016 8:59:32 AM",
    "topic": "The NES Classic Edition Is Everything You Want It to Be",
    "url": "http://gizmodo.com/the-nes-classic-edition-is-everything-you-want-it-to-be-1788571481?utm_campaign\u003dsocialflow_gizmodo_twitter\u0026utm_source\u003dgizmodo_twitter\u0026utm_medium\u003dsocialflow",
    "votes": 3,
    "posted": "Nov 5, 2016 8:29:40 PM"
  },
  {
    "id": "12881432",
    "timestamp": "Nov 5, 2016 9:58:36 PM",
    "topic": "You Don’t Need a Master Plan You Just Need to Start",
    "url": "https://medium.com/@bryce/you-dont-need-a-master-plan-you-just-need-to-start-9a3ec0455866#---0-123.6aya1lb3c",
    "votes": 3,
    "posted": "Nov 5, 2016 8:26:17 PM"
  },
  {
    "id": "12881420",
    "timestamp": "Nov 5, 2016 8:28:27 PM",
    "topic": "Build a Legacy: The Muse (YC W12) Is Hiring a PM for Data and Analytics",
    "url": "https://www.themuse.com/jobs/themuse/product-manager-data-analytics-8b97af",
    "votes": 1,
    "posted": "Nov 5, 2016 8:25:00 PM"
  },
  {
    "id": "12881408",
    "timestamp": "Nov 5, 2016 8:48:29 PM",
    "topic": "The Model 3 Will Incorporate Tesla’s Solar Roof Technology: Elon Musk",
    "url": "http://futurism.com/elon-musk-the-model-3-will-incorporate-teslas-solar-roof-technology/",
    "votes": 3,
    "posted": "Nov 5, 2016 8:22:19 PM"
  },
  {
    "id": "12881407",
    "timestamp": "Nov 5, 2016 9:48:35 PM",
    "topic": "Procedural Dungeon Generation: A Drunkard\u0027s Walk in ClojureScript",
    "url": "http://blog.jrheard.com/procedural-dungeon-generation-drunkards-walk-in-clojurescript",
    "votes": 4,
    "posted": "Nov 5, 2016 8:22:06 PM"
  },
  {
    "id": "12881395",
    "timestamp": "Nov 5, 2016 8:58:30 PM",
    "topic": "Why 2016 is such a terrible year for the Mac",
    "url": "http://www.macworld.com/article/3138087/macs/why-2016-is-such-a-terrible-year-for-the-mac.html",
    "votes": 4,
    "posted": "Nov 5, 2016 8:20:14 PM"
  },
  {
    "id": "12881353",
    "timestamp": "Nov 6, 2016 1:48:58 AM",
    "topic": "Revisiting why incompetents think they’re awesome",
    "url": "http://arstechnica.com/science/2016/11/revisiting-why-incompetents-think-theyre-awesome/",
    "votes": 4,
    "posted": "Nov 5, 2016 8:12:05 PM"
  },
  {
    "id": "12881313",
    "timestamp": "Nov 7, 2016 2:51:16 AM",
    "topic": "\u0027We are all Thomas More’s children’ – 500 years of Utopia",
    "url": "https://www.theguardian.com/books/2016/nov/04/thomas-more-utopia-500-years-china-mieville-ursula-le-guin",
    "votes": 3,
    "posted": "Nov 5, 2016 8:02:42 PM"
  },
  {
    "id": "12881288",
    "timestamp": "Nov 6, 2016 6:30:24 PM",
    "topic": "Crocker\u0027s rules",
    "url": "https://wiki.lesswrong.com/wiki/Crocker%27s_rules",
    "votes": 3,
    "posted": "Nov 5, 2016 7:57:52 PM"
  },
  {
    "id": "12881283",
    "timestamp": "Nov 6, 2016 3:49:07 AM",
    "topic": "Giant snowballs appear on Russian beach in Siberia",
    "url": "http://www.bbc.com/news/world-europe-37883003",
    "votes": 3,
    "posted": "Nov 5, 2016 7:56:53 PM"
  },
  {
    "id": "12881119",
    "timestamp": "Nov 5, 2016 8:08:25 PM",
    "topic": "Chelsea Manning Tried Committing Suicide a Second Time in October",
    "url": "http://www.nytimes.com/2016/11/05/us/chelsea-manning-tried-committing-suicide-a-second-time-in-october.html",
    "votes": 10,
    "posted": "Nov 5, 2016 7:28:14 PM"
  },
  {
    "id": "12880979",
    "timestamp": "Nov 6, 2016 3:20:05 PM",
    "topic": "22 years in, Magic: The Gathering is the brainiest it’s ever been (2015)",
    "url": "http://www.avclub.com/article/22-years-magic-gathering-brainiest-its-ever-been-224197",
    "votes": 3,
    "posted": "Nov 5, 2016 7:05:45 PM"
  },
  {
    "id": "12880931",
    "timestamp": "Nov 5, 2016 7:18:20 PM",
    "topic": "The Most Expensive Anti-Pattern",
    "url": "http://m1el.github.io/printf-antipattern",
    "votes": 4,
    "posted": "Nov 5, 2016 6:57:38 PM"
  },
  {
    "id": "12880917",
    "timestamp": "Nov 5, 2016 7:48:23 PM",
    "topic": "Docker in Production: A retort",
    "url": "http://patrobinson.github.io/2016/11/05/docker-in-production/",
    "votes": 8,
    "posted": "Nov 5, 2016 6:55:29 PM"
  },
  {
    "id": "12880880",
    "timestamp": "Nov 6, 2016 2:29:01 AM",
    "topic": "Apple fans have click-signed more than 100,000 words of legal contracts",
    "url": "http://qz.com/797928/apple-fans-have-click-signed-more-than-100000-words-of-legal-contracts/",
    "votes": 4,
    "posted": "Nov 5, 2016 6:50:32 PM"
  },
  {
    "id": "12880804",
    "timestamp": "Nov 5, 2016 7:08:18 PM",
    "topic": "Developing a Functional Android Application in Under 5 Minutes",
    "url": "https://medium.com/sketchware/what-is-sketchware-e19aa55b4c7c#.o870ugxi8",
    "votes": 3,
    "posted": "Nov 5, 2016 6:36:03 PM"
  },
  {
    "id": "12880792",
    "timestamp": "Nov 5, 2016 7:08:18 PM",
    "topic": "How to contribute to an open source project on GitHub – a step-by-step guide",
    "url": "http://blog.davidecoppola.com/2016/11/howto-contribute-to-open-source-project-on-github/",
    "votes": 13,
    "posted": "Nov 5, 2016 6:33:10 PM"
  },
  {
    "id": "12880778",
    "timestamp": "Nov 5, 2016 7:38:22 PM",
    "topic": "Ask HN: What is encapsulation in Python?",
    "votes": 3,
    "posted": "Nov 5, 2016 6:30:04 PM"
  },
  {
    "id": "12880598",
    "timestamp": "Nov 5, 2016 6:08:11 PM",
    "topic": "A Country Is Not a Company (1996)",
    "url": "https://hbr.org/1996/01/a-country-is-not-a-company\u0026cm_sp\u003dArticle-_-Links-_-Top%20of%20Page%20Recirculation",
    "votes": 3,
    "posted": "Nov 5, 2016 5:57:29 PM"
  },
  {
    "id": "12880570",
    "timestamp": "Nov 5, 2016 6:08:11 PM",
    "topic": "Foreign students targeted by UK anti-migrant policies",
    "url": "http://www.aljazeera.com/indepth/features/2016/11/foreign-students-targeted-uk-anti-migrant-policies-161102130654314.html",
    "votes": 3,
    "posted": "Nov 5, 2016 5:51:45 PM"
  },
  {
    "id": "12880520",
    "timestamp": "Nov 5, 2016 6:08:11 PM",
    "topic": "Why I won\u0027t recommend Signal anymore",
    "url": "https://sandervenema.ch/2016/11/why-i-wont-recommend-signal-anymore/",
    "votes": 4,
    "posted": "Nov 5, 2016 5:43:53 PM"
  },
  {
    "id": "12880453",
    "timestamp": "Nov 5, 2016 6:08:11 PM",
    "topic": "How Bureaucrats and Spies Turned Canada into a Surveillance State",
    "url": "http://motherboard.vice.com/read/how-bureaucrats-and-spies-turned-canada-into-a-surveillance-state-csis",
    "votes": 4,
    "posted": "Nov 5, 2016 5:34:26 PM"
  },
  {
    "id": "12880393",
    "timestamp": "Nov 5, 2016 6:38:15 PM",
    "topic": "Alzheimer’s treatment fully restores memory function",
    "url": "http://www.sciencealert.com/new-alzheimer-s-treatment-fully-restores-memory-function",
    "votes": 6,
    "posted": "Nov 5, 2016 5:23:44 PM"
  },
  {
    "id": "12880382",
    "timestamp": "Nov 5, 2016 6:28:14 PM",
    "topic": "Lyft to offer 45 percent discount during presidential election",
    "url": "https://thetechgraph.com/2016/11/05/lyft-offer-45-percent-discount-presidential-election/",
    "votes": 4,
    "posted": "Nov 5, 2016 5:19:32 PM"
  },
  {
    "id": "12880381",
    "timestamp": "Nov 5, 2016 6:58:17 PM",
    "topic": "Man hacked his Alexa to speak out of a singing fish, and it\u0027s horrifying",
    "url": "http://mashable.com/2016/11/04/big-mouth-billy-bass-alexa-/#mrpCYng7piq4",
    "votes": 7,
    "posted": "Nov 5, 2016 5:19:26 PM"
  },
  {
    "id": "12880372",
    "timestamp": "Nov 5, 2016 7:08:18 PM",
    "topic": "Emotional, behavioral and social difficulties among high-IQ children [pdf]",
    "url": "http://www.lscp.net/persons/ramus/docs/PAID16.pdf",
    "votes": 5,
    "posted": "Nov 5, 2016 5:17:45 PM"
  },
  {
    "id": "12880290",
    "timestamp": "Nov 6, 2016 2:30:01 PM",
    "topic": "Show HN: Tea- a User\u0027s Guide",
    "url": "https://www.worldoftea.org/book",
    "votes": 5,
    "posted": "Nov 5, 2016 5:01:04 PM"
  },
  {
    "id": "12880274",
    "timestamp": "Nov 5, 2016 8:38:28 PM",
    "topic": "Ask HN: How is Windows for developers nowadays?",
    "votes": 5,
    "posted": "Nov 5, 2016 4:57:40 PM"
  },
  {
    "id": "12880203",
    "timestamp": "Nov 5, 2016 5:07:26 PM",
    "topic": "A world without the Mac Pro",
    "url": "https://marco.org/2016/11/05/world-without-mac-pro",
    "votes": 12,
    "posted": "Nov 5, 2016 4:43:10 PM"
  },
  {
    "id": "12880176",
    "timestamp": "Nov 5, 2016 7:28:21 PM",
    "topic": "Dongle dilemma provokes Apple price cut",
    "url": "http://www.bbc.co.uk/news/technology-37880723",
    "votes": 5,
    "posted": "Nov 5, 2016 4:38:05 PM"
  },
  {
    "id": "12880153",
    "timestamp": "Nov 5, 2016 7:08:18 PM",
    "topic": "My first product launches and how they succeeded and failed",
    "url": "http://jeremyaboyd.com/my-first-product-launches/",
    "votes": 4,
    "posted": "Nov 5, 2016 4:33:03 PM"
  },
  {
    "id": "12880050",
    "timestamp": "Nov 5, 2016 7:08:18 PM",
    "topic": "Jigsaw",
    "url": "https://jigsaw.google.com/vision/",
    "votes": 4,
    "posted": "Nov 5, 2016 4:09:37 PM"
  },
  {
    "id": "12880013",
    "timestamp": "Nov 5, 2016 7:08:19 PM",
    "topic": "Developing a RESTful API with Node and TypeScript",
    "url": "http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript#.WB30Vf5cA2A.hackernews",
    "votes": 3,
    "posted": "Nov 5, 2016 4:01:49 PM"
  },
  {
    "id": "12879959",
    "timestamp": "Nov 5, 2016 4:27:22 PM",
    "topic": "Samsung recalls 2.8m washing machines after reports of explosions",
    "url": "https://www.theguardian.com/technology/2016/nov/04/samsung-washing-machine-recall-explosion-risk",
    "votes": 3,
    "posted": "Nov 5, 2016 3:48:51 PM"
  },
  {
    "id": "12879942",
    "timestamp": "Nov 6, 2016 3:09:04 AM",
    "topic": "1965 Science advisory report on climate-environment [pdf]",
    "url": "http://dge.stanford.edu/labs/caldeiralab/Caldeira%20downloads/PSAC,%201965,%20Restoring%20the%20Quality%20of%20Our%20Environment.pdf",
    "votes": 4,
    "posted": "Nov 5, 2016 3:43:46 PM"
  },
  {
    "id": "12879937",
    "timestamp": "Nov 6, 2016 12:58:53 AM",
    "topic": "Lossy Image Compression with Compressive Autoencoders",
    "url": "http://openreview.net/forum?id\u003drJiNwv9gg",
    "votes": 3,
    "posted": "Nov 5, 2016 3:42:56 PM"
  },
  {
    "id": "12879882",
    "timestamp": "Nov 5, 2016 3:57:19 PM",
    "topic": "Wherefore art thou Macintosh?",
    "url": "http://www.asymco.com/2016/11/02/wherefore-art-thou-macintosh/",
    "votes": 5,
    "posted": "Nov 5, 2016 3:26:17 PM"
  },
  {
    "id": "12879852",
    "timestamp": "Nov 5, 2016 3:57:18 PM",
    "topic": "Physicists demonstrate existence of new subatomic structure",
    "url": "http://sciencebulletin.org/archives/7339.html",
    "votes": 4,
    "posted": "Nov 5, 2016 3:16:32 PM"
  },
  {
    "id": "12879850",
    "timestamp": "Nov 5, 2016 3:47:18 PM",
    "topic": "H265: Technical Overview",
    "url": "https://sonnati.wordpress.com/2014/06/20/h265-part-i-technical-overview/",
    "votes": 5,
    "posted": "Nov 5, 2016 3:15:03 PM"
  },
  {
    "id": "12879826",
    "timestamp": "Nov 5, 2016 7:08:19 PM",
    "topic": "Turkey Bans Facebook, Twitter and WhatsApp",
    "url": "https://thetechgraph.com/2016/11/05/turkey-bans-facebook-twitter-whatsapp/",
    "votes": 3,
    "posted": "Nov 5, 2016 3:08:35 PM"
  },
  {
    "id": "12879803",
    "timestamp": "Nov 5, 2016 3:17:14 PM",
    "topic": "The real Clinton email scandal is that a bullshit story has dominated campaign",
    "url": "http://www.vox.com/policy-and-politics/2016/11/4/13500018/clinton-email-scandal-bullshit",
    "votes": 4,
    "posted": "Nov 5, 2016 3:00:45 PM"
  },
  {
    "id": "12879732",
    "timestamp": "Nov 5, 2016 3:37:16 PM",
    "topic": "R Course Finder grows steadily, now includes 118 R courses",
    "url": "http://r-exercises.com/2016/11/04/r-course-finder-update-2/",
    "votes": 5,
    "posted": "Nov 5, 2016 2:42:06 PM"
  },
  {
    "id": "12879661",
    "timestamp": "Nov 5, 2016 7:48:23 PM",
    "topic": "New visual identity and branding for North Korea",
    "url": "http://www.love-is-korea.com/#love-korea",
    "votes": 4,
    "posted": "Nov 5, 2016 2:22:55 PM"
  },
  {
    "id": "12879510",
    "timestamp": "Nov 5, 2016 7:08:19 PM",
    "topic": "You Don’t Need Big Data – You Need the Right Data",
    "url": "https://hbr.org/2016/11/you-dont-need-big-data-you-need-the-right-data",
    "votes": 3,
    "posted": "Nov 5, 2016 1:40:49 PM"
  },
  {
    "id": "12879470",
    "timestamp": "Nov 5, 2016 3:37:16 PM",
    "topic": "Cartoon Laws of Physics",
    "url": "http://www.dgp.toronto.edu/~karan/courses/csc2529/cartoonlaw.htm",
    "votes": 5,
    "posted": "Nov 5, 2016 1:27:50 PM"
  },
  {
    "id": "12879464",
    "timestamp": "Nov 5, 2016 1:57:08 PM",
    "topic": "Show HN: Cloud Commander orthodox web file manager with console and editor",
    "url": "https://cloudcmd.io",
    "votes": 3,
    "posted": "Nov 5, 2016 1:26:03 PM"
  },
  {
    "id": "12879419",
    "timestamp": "Nov 5, 2016 3:17:14 PM",
    "topic": "Watching Larry Ellison Become Larry Ellison",
    "url": "https://steveblank.com/2014/09/25/watching-larry-ellison-become-larry-ellison-the-dna-of-a-winner/",
    "votes": 7,
    "posted": "Nov 5, 2016 1:11:58 PM"
  },
  {
    "id": "12879398",
    "timestamp": "Nov 6, 2016 3:50:08 PM",
    "topic": "The Pac-Man Dossier",
    "url": "http://www.gamasutra.com/view/feature/3938/the_pacman_dossier.php?print\u003d1",
    "votes": 4,
    "posted": "Nov 5, 2016 1:05:49 PM"
  },
  {
    "id": "12879330",
    "timestamp": "Nov 6, 2016 4:20:10 PM",
    "topic": "Newborn sleep patterns a survival guide for the science-minded parent",
    "url": "http://www.parentingscience.com/newborn-sleep.html",
    "votes": 3,
    "posted": "Nov 5, 2016 12:47:31 PM"
  },
  {
    "id": "12879232",
    "timestamp": "Nov 5, 2016 1:07:03 PM",
    "topic": "Be careful about what you dislike",
    "url": "http://lucumr.pocoo.org/2016/11/5/be-careful-about-what-you-dislike/",
    "votes": 7,
    "posted": "Nov 5, 2016 12:19:57 PM"
  },
  {
    "id": "12879224",
    "timestamp": "Nov 5, 2016 3:37:16 PM",
    "topic": "Visual Cryptography",
    "url": "http://www.datagenetics.com/blog/november32013/index.html",
    "votes": 4,
    "posted": "Nov 5, 2016 12:17:38 PM"
  },
  {
    "id": "12879216",
    "timestamp": "Nov 5, 2016 12:37:01 PM",
    "topic": "Man hacks Alexa into singing fish robot, terror ensues",
    "url": "http://www.theverge.com/2016/11/4/13525172/amazon-alexa-big-mouth-billy-bass-hack-api",
    "votes": 3,
    "posted": "Nov 5, 2016 12:15:06 PM"
  },
  {
    "id": "12879179",
    "timestamp": "Nov 5, 2016 1:17:04 PM",
    "topic": "Show HN: Make an app by adding JSON to this app",
    "url": "https://github.com/Jasonette/JASONETTE-iOS?hn",
    "votes": 5,
    "posted": "Nov 5, 2016 12:03:15 PM"
  },
  {
    "id": "12879117",
    "timestamp": "Nov 5, 2016 3:27:15 PM",
    "topic": "Paris agreement on climate change has come into force",
    "url": "http://www.bbc.com/news/science-environment-37872111",
    "votes": 4,
    "posted": "Nov 5, 2016 11:49:26 AM"
  },
  {
    "id": "12879103",
    "timestamp": "Nov 5, 2016 11:56:58 AM",
    "topic": "Bus1 is the new Kdbus",
    "url": "https://davmac.wordpress.com/2016/11/05/bus1-is-the-new-kdbus/",
    "votes": 5,
    "posted": "Nov 5, 2016 11:44:04 AM"
  },
  {
    "id": "12879065",
    "timestamp": "Nov 5, 2016 6:38:15 PM",
    "topic": "Notching floppy disks to double their capacity",
    "url": "https://en.wikipedia.org/w/index.php?title\u003dDouble-sided_disk\u0026oldid\u003d713168494",
    "votes": 3,
    "posted": "Nov 5, 2016 11:27:44 AM"
  },
  {
    "id": "12879056",
    "timestamp": "Nov 5, 2016 11:56:58 AM",
    "topic": "Ask HN: Do you still use UML?",
    "votes": 4,
    "posted": "Nov 5, 2016 11:23:08 AM"
  },
  {
    "id": "12879043",
    "timestamp": "Nov 5, 2016 5:48:09 PM",
    "topic": "Ask HN: Predict the future",
    "votes": 5,
    "posted": "Nov 5, 2016 11:17:37 AM"
  },
  {
    "id": "12879015",
    "timestamp": "Nov 5, 2016 11:56:58 AM",
    "topic": "Ring, officially a GNU package",
    "url": "https://blog.savoirfairelinux.com/en-ca/2016/ring-official-gnu-package/",
    "votes": 6,
    "posted": "Nov 5, 2016 11:04:45 AM"
  },
  {
    "id": "12878956",
    "timestamp": "Nov 5, 2016 11:06:54 AM",
    "topic": "Show HN: Alienslike.us – vote on what an alien society might be like",
    "url": "https://alienslike.us/",
    "votes": 4,
    "posted": "Nov 5, 2016 10:40:53 AM"
  },
  {
    "id": "12878706",
    "timestamp": "Nov 5, 2016 10:06:50 AM",
    "topic": "I don’t like computers",
    "url": "https://www.happyassassin.net/2016/11/04/i-dont-like-computers/",
    "votes": 8,
    "posted": "Nov 5, 2016 9:07:24 AM"
  },
  {
    "id": "12878496",
    "timestamp": "Nov 5, 2016 8:36:43 AM",
    "topic": "Three New Scandals Show How Pervasive Mass Surveillance Is in the West",
    "url": "https://theintercept.com/2016/11/04/three-new-scandals-show-how-pervasive-and-dangerous-mass-surveillance-is-in-the-west-vindicating-snowden/",
    "votes": 3,
    "posted": "Nov 5, 2016 7:45:26 AM"
  },
  {
    "id": "12878488",
    "timestamp": "Nov 5, 2016 10:06:50 AM",
    "topic": "Software Freedom Conservancy Publishes Agreements for Linux Compliance Program",
    "url": "https://sfconservancy.org/news/2016/nov/03/linux-compliance-agreements/",
    "votes": 3,
    "posted": "Nov 5, 2016 7:38:36 AM"
  },
  {
    "id": "12878337",
    "timestamp": "Nov 5, 2016 7:16:37 AM",
    "topic": "Is democracy a failure? (1861, NYTimes)",
    "url": "http://www.nytimes.com/1861/03/14/news/is-democracy-a-failure.html",
    "votes": 3,
    "posted": "Nov 5, 2016 6:28:50 AM"
  },
  {
    "id": "12878336",
    "timestamp": "Nov 5, 2016 10:26:51 AM",
    "topic": "Show HN: Hot or not for yachts called Yacht or Knot",
    "url": "http://www.yacht-or-knot.com",
    "votes": 4,
    "posted": "Nov 5, 2016 6:28:47 AM"
  },
  {
    "id": "12878135",
    "timestamp": "Nov 5, 2016 5:26:29 AM",
    "topic": "A High Schooler\u0027s Re-Design of the Education System",
    "url": "https://medium.com/@zachcmiel/a-high-schoolers-view-on-the-education-system-9fc85517c8fe#.4p2a9hmde",
    "votes": 3,
    "posted": "Nov 5, 2016 5:14:59 AM"
  },
  {
    "id": "12878020",
    "timestamp": "Nov 5, 2016 6:16:33 AM",
    "topic": "Google’s Chrome Hackers Are About to Upend Your Idea of Web Security",
    "url": "https://www.wired.com/2016/11/googles-chrome-hackers-flip-webs-security-model/all/1#slide-1",
    "votes": 3,
    "posted": "Nov 5, 2016 4:40:08 AM"
  },
  {
    "id": "12877945",
    "timestamp": "Nov 5, 2016 4:46:25 AM",
    "topic": "Building a Deep Learning Powered GIF Search Engine",
    "url": "https://medium.com/@zan2434/building-a-deep-learning-powered-gif-search-engine-a3eb309d7525",
    "votes": 4,
    "posted": "Nov 5, 2016 4:12:37 AM"
  },
  {
    "id": "12877931",
    "timestamp": "Nov 5, 2016 7:58:24 PM",
    "topic": "Why Is Washington Still Pushing the Trans-Pacific Partnership?",
    "url": "https://www.thenation.com/article/why-is-washington-still-pushing-the-trans-pacific-partnership/",
    "votes": 6,
    "posted": "Nov 5, 2016 4:09:03 AM"
  },
  {
    "id": "12877916",
    "timestamp": "Nov 5, 2016 4:56:27 AM",
    "topic": "Watch a drone hack a room full of smart lightbulbs from outside the window",
    "url": "http://www.theverge.com/2016/11/3/13507126/iot-drone-hack",
    "votes": 3,
    "posted": "Nov 5, 2016 3:59:07 AM"
  },
  {
    "id": "12877902",
    "timestamp": "Nov 5, 2016 5:26:30 AM",
    "topic": "Vim celebrates 25 years",
    "url": "https://opensource.com/life/16/11/happy-birthday-vim-25",
    "votes": 4,
    "posted": "Nov 5, 2016 3:50:36 AM"
  },
  {
    "id": "12877875",
    "timestamp": "Nov 5, 2016 4:56:27 AM",
    "topic": "Switching from macOS: Hardware",
    "url": "http://blog.elementary.io/post/152750962276/switching-from-macos-hardware",
    "votes": 3,
    "posted": "Nov 5, 2016 3:43:23 AM"
  },
  {
    "id": "12877784",
    "timestamp": "Nov 5, 2016 3:17:14 PM",
    "topic": "Ask HN: What are you thinking about your personal goals in 2017?",
    "votes": 5,
    "posted": "Nov 5, 2016 3:19:40 AM"
  },
  {
    "id": "12877687",
    "timestamp": "Nov 5, 2016 4:36:24 AM",
    "topic": "Fuck you, Debian",
    "url": "https://medium.com/broken-window/fuck-you-debian-ebe8cede37ed#.9d317qa1x",
    "votes": 4,
    "posted": "Nov 5, 2016 2:47:40 AM"
  },
  {
    "id": "12877649",
    "timestamp": "Nov 5, 2016 4:46:26 AM",
    "topic": "Regex that only matches itself",
    "url": "http://codegolf.stackexchange.com/questions/28821/regex-that-only-matches-itself/31863?stw\u003d2#31863",
    "votes": 5,
    "posted": "Nov 5, 2016 2:38:33 AM"
  },
  {
    "id": "12877630",
    "timestamp": "Nov 5, 2016 4:36:24 AM",
    "topic": "Asking People If They Need a Cellphone in 1999",
    "url": "https://www.youtube.com/watch?v\u003dmDx4UXcAFC8",
    "votes": 3,
    "posted": "Nov 5, 2016 2:32:54 AM"
  },
  {
    "id": "12877622",
    "timestamp": "Nov 5, 2016 10:26:52 AM",
    "topic": "Germany probes Mark Zuckerberg over Facebook\u0027s failure to remove content",
    "url": "http://www.telegraph.co.uk/news/2016/11/04/germany-probes-mark-zuckerberg-over-facebooks-failure-to-remove/",
    "votes": 4,
    "posted": "Nov 5, 2016 2:31:32 AM"
  },
  {
    "id": "12877607",
    "timestamp": "Nov 6, 2016 2:19:59 PM",
    "topic": "Design legend Milton Glaser: “Design has nothing to do with art”",
    "url": "http://qz.com/823204/graphic-design-legend-milton-glaser-dispels-a-universal-misunderstanding-of-design-and-art/",
    "votes": 5,
    "posted": "Nov 5, 2016 2:26:30 AM"
  },
  {
    "id": "12877576",
    "timestamp": "Nov 5, 2016 2:26:13 AM",
    "topic": "Lob (YC S13) Is Hiring Senior Software Engineers",
    "url": "https://lob.com/careers/48029",
    "votes": 1,
    "posted": "Nov 5, 2016 2:19:48 AM"
  },
  {
    "id": "12877568",
    "timestamp": "Nov 5, 2016 4:56:27 AM",
    "topic": "Introducing FlyWeb from Mozilla - Local Area Web Servers",
    "url": "https://flyweb.github.io/posts/2016/11/01/introducing-flyweb.html",
    "votes": 7,
    "posted": "Nov 5, 2016 2:15:53 AM"
  },
  {
    "id": "12877562",
    "timestamp": "Nov 5, 2016 2:36:14 AM",
    "topic": "Isaac Newton\u0027s Principia Mathematica Reissued",
    "url": "https://www.kickstarter.com/projects/1174653512/isaac-newtons-principia-mathematica-reissue",
    "votes": 3,
    "posted": "Nov 5, 2016 2:14:02 AM"
  },
  {
    "id": "12877451",
    "timestamp": "Nov 5, 2016 2:36:14 AM",
    "topic": "Rolling Stone Loses Defamation Case Over Rape Article",
    "url": "http://www.nytimes.com/2016/11/05/business/media/rolling-stone-rape-story-case-guilty.html",
    "votes": 6,
    "posted": "Nov 5, 2016 1:43:02 AM"
  },
  {
    "id": "12877381",
    "timestamp": "Nov 5, 2016 2:16:12 AM",
    "topic": "Dongle dilemma provokes Apple price cut",
    "url": "http://www.bbc.com/news/technology-37880723",
    "votes": 4,
    "posted": "Nov 5, 2016 1:27:25 AM"
  },
  {
    "id": "12877378",
    "timestamp": "Nov 5, 2016 2:36:14 AM",
    "topic": "Systemd and the crashing tweet",
    "url": "https://tim.siosm.fr/blog/2016/10/02/tweet-systemd/",
    "votes": 5,
    "posted": "Nov 5, 2016 1:27:03 AM"
  },
  {
    "id": "12877235",
    "timestamp": "Nov 5, 2016 5:26:29 AM",
    "topic": "Nasa\u0027s open source projects on GitHub",
    "url": "https://github.com/nasa",
    "votes": 6,
    "posted": "Nov 5, 2016 1:00:04 AM"
  },
  {
    "id": "12877169",
    "timestamp": "Nov 5, 2016 2:26:13 AM",
    "topic": "An online Jinja2 template renderer",
    "url": "http://jinja2test.tk/",
    "votes": 4,
    "posted": "Nov 5, 2016 12:46:06 AM"
  },
  {
    "id": "12877164",
    "timestamp": "Nov 5, 2016 4:46:26 AM",
    "topic": "Ask HN: Do You OK Google or Hey Siri in Public?",
    "votes": 4,
    "posted": "Nov 5, 2016 12:45:04 AM"
  },
  {
    "id": "12877071",
    "timestamp": "Nov 5, 2016 1:26:08 AM",
    "topic": "Kickstarter Campaign Produces Large Affordable CNC Cutting Machine",
    "url": "http://www.archdaily.com/798562/kickstarter-campaign-produces-large-affordable-cnc-cutting-machine",
    "votes": 3,
    "posted": "Nov 5, 2016 12:25:01 AM"
  },
  {
    "id": "12877068",
    "timestamp": "Nov 5, 2016 2:16:12 AM",
    "topic": "What Modern Democracies Didn’t Copy from Ancient Greece",
    "url": "http://news.nationalgeographic.com/2016/11/greek-ancient-origins-modern-politics/",
    "votes": 4,
    "posted": "Nov 5, 2016 12:24:28 AM"
  },
  {
    "id": "12877045",
    "timestamp": "Nov 5, 2016 12:36:04 AM",
    "topic": "Elementary Blog – Switching from MacOS: Developer Environment",
    "url": "http://blog.elementary.io/post/152671475281/switching-from-macos-developer-environment",
    "votes": 5,
    "posted": "Nov 5, 2016 12:19:27 AM"
  },
  {
    "id": "12877012",
    "timestamp": "Nov 7, 2016 3:21:18 AM",
    "topic": "Forget self-driving car anxiety: In the early days human drivers were the fear",
    "url": "https://timeline.com/forget-self-driving-car-anxiety-in-the-early-days-human-drivers-were-the-fear-55a770262c10#.vf6ekg4kz",
    "votes": 3,
    "posted": "Nov 5, 2016 12:13:58 AM"
  },
  {
    "id": "12876892",
    "timestamp": "Nov 5, 2016 4:16:22 AM",
    "topic": "Turbo.js – Dead Simple GPGPU for the Web",
    "url": "https://turbo.github.io/",
    "votes": 9,
    "posted": "Nov 4, 2016 11:55:15 PM"
  },
  {
    "id": "12876866",
    "timestamp": "Nov 5, 2016 10:28:39 PM",
    "topic": "In the Joints of Their Toes: A ruse that gave rise to the spiritualist movement",
    "url": "http://www.theparisreview.org/blog/2016/11/04/in-the-joints-of-their-toes/",
    "votes": 3,
    "posted": "Nov 4, 2016 11:50:56 PM"
  },
  {
    "id": "12876822",
    "timestamp": "Nov 5, 2016 4:16:22 AM",
    "topic": "The Lost Civilization of Dial-Up Bulletin Board Systems",
    "url": "http://www.theatlantic.com/technology/archive/2016/11/the-lost-civilization-of-dial-up-bulletin-board-systems/506465/?single_page\u003dtrue",
    "votes": 4,
    "posted": "Nov 4, 2016 11:43:31 PM"
  },
  {
    "id": "12876814",
    "timestamp": "Nov 4, 2016 11:56:01 PM",
    "topic": "Thoughts on the Pro Debacle",
    "url": "http://taoofmac.com/space/blog/2016/11/04/2230",
    "votes": 2,
    "posted": "Nov 4, 2016 11:42:20 PM"
  },
  {
    "id": "12876729",
    "timestamp": "Nov 5, 2016 4:46:26 AM",
    "topic": "The State of Machine Intelligence, 2016 [pdf]",
    "url": "https://hbr.org/resources/pdfs/hbr-articles/2016/11/the_state_of_machine_intelligence.pdf",
    "votes": 6,
    "posted": "Nov 4, 2016 11:31:10 PM"
  },
  {
    "id": "12876646",
    "timestamp": "Nov 5, 2016 3:46:20 AM",
    "topic": "Primitive Technology – Shrimp Trap",
    "url": "https://primitivetechnology.wordpress.com/2016/11/04/shrimp-trap/",
    "votes": 3,
    "posted": "Nov 4, 2016 11:20:02 PM"
  },
  {
    "id": "12876602",
    "timestamp": "Nov 4, 2016 11:56:01 PM",
    "topic": "ZCash not anonymous due to a bug",
    "url": "https://www.cryptocoinsnews.com/zcash-bug-prevents-private-transactions-soon-after-launch/",
    "votes": 3,
    "posted": "Nov 4, 2016 11:13:42 PM"
  },
  {
    "id": "12876537",
    "timestamp": "Nov 4, 2016 11:15:57 PM",
    "topic": "Y Combinator\u0027s Hardware Guy Leaves After 14 Months",
    "url": "http://www.bloomberg.com/news/articles/2016-11-04/y-combinator-s-hardware-guy-leaves-after-14-months",
    "votes": 17,
    "posted": "Nov 4, 2016 11:02:29 PM"
  },
  {
    "id": "12876536",
    "timestamp": "Nov 5, 2016 4:46:25 AM",
    "topic": "An Introduction to Deep Learning",
    "url": "http://blog.algorithmia.com/introduction-to-deep-learning-2016/",
    "votes": 5,
    "posted": "Nov 4, 2016 11:02:24 PM"
  },
  {
    "id": "12876533",
    "timestamp": "Nov 4, 2016 11:45:59 PM",
    "topic": "Simultaneous “nirvana” JavaScript Debugging for Chrome and Node.js in VS Code",
    "url": "https://medium.com/@auchenberg/introducing-simultaneous-nirvana-javascript-debugging-for-node-js-and-chrome-in-vs-code-d898a4011ab1#.6mb86aaj3",
    "votes": 3,
    "posted": "Nov 4, 2016 11:02:19 PM"
  },
  {
    "id": "12876491",
    "timestamp": "Nov 5, 2016 4:26:23 AM",
    "topic": "Pure Ancient Greek lesson",
    "url": "https://www.youtube.com/watch?v\u003djlyWn_U1xHs",
    "votes": 3,
    "posted": "Nov 4, 2016 10:56:23 PM"
  },
  {
    "id": "12876458",
    "timestamp": "Nov 4, 2016 11:05:54 PM",
    "topic": "Can We Put the 16GB “Pro” Myth to Rest?",
    "url": "https://www.zdziarski.com/blog/?p\u003d6355",
    "votes": 4,
    "posted": "Nov 4, 2016 10:51:16 PM"
  },
  {
    "id": "12876417",
    "timestamp": "Nov 4, 2016 11:15:57 PM",
    "topic": "OCaml 4.04.0 released",
    "url": "https://sympa.inria.fr/sympa/arc/caml-list/2016-11/msg00010.html",
    "votes": 19,
    "posted": "Nov 4, 2016 10:43:28 PM"
  },
  {
    "id": "12876411",
    "timestamp": "Nov 4, 2016 11:56:00 PM",
    "topic": "Cholera 101: Why an Ancient Disease Keeps on Haunting Us",
    "url": "http://www.npr.org/sections/goatsandsoda/2016/11/04/500664156/cholera-101-why-an-ancient-disease-keeps-on-haunting-us",
    "votes": 2,
    "posted": "Nov 4, 2016 10:42:34 PM"
  },
  {
    "id": "12876370",
    "timestamp": "Nov 5, 2016 4:26:23 AM",
    "topic": "Open Source Storage founder accused of fraud by former 49ers star Patrick Willis",
    "url": "http://www.inc.com/salvador-rodriguez/patrick-willis-alleges-fraud-in-lawsuit.html",
    "votes": 5,
    "posted": "Nov 4, 2016 10:38:03 PM"
  },
  {
    "id": "12876292",
    "timestamp": "Nov 4, 2016 10:35:51 PM",
    "topic": "Segment (YC S11) Is Hiring a Head of Solutions Enginering",
    "url": "https://boards.greenhouse.io/segment/jobs/463624",
    "votes": 1,
    "posted": "Nov 4, 2016 10:28:56 PM"
  },
  {
    "id": "12876256",
    "timestamp": "Nov 5, 2016 1:16:07 AM",
    "topic": "Autovacuum is Not the Enemy",
    "url": "https://www.citusdata.com/blog/2016/11/04/autovacuum-not-the-enemy/",
    "votes": 8,
    "posted": "Nov 4, 2016 10:24:54 PM"
  },
  {
    "id": "12876214",
    "timestamp": "Nov 4, 2016 11:15:57 PM",
    "topic": "Samsung Recalls 2.8M Top-Load Washing Machines",
    "url": "http://www.npr.org/sections/thetwo-way/2016/11/04/500685316/samsung-recalls-2-8-million-top-load-washers-over-disloding-lids",
    "votes": 6,
    "posted": "Nov 4, 2016 10:19:41 PM"
  },
  {
    "id": "12876203",
    "timestamp": "Nov 5, 2016 4:46:25 AM",
    "topic": "Adobe’s Project VoCo lets you edit speech as easily as text",
    "url": "https://techcrunch.com/2016/11/03/adobes-project-voco-lets-you-edit-speech-as-easily-as-text/",
    "votes": 4,
    "posted": "Nov 4, 2016 10:18:40 PM"
  },
  {
    "id": "12876194",
    "timestamp": "Nov 4, 2016 10:55:53 PM",
    "topic": "Visual Cryptography",
    "url": "http://www.datagenetics.com/blog/november32013/index.html",
    "votes": 3,
    "posted": "Nov 4, 2016 10:17:23 PM"
  },
  {
    "id": "12876017",
    "timestamp": "Nov 4, 2016 10:35:51 PM",
    "topic": "The Orange Pi Zero single-board computer ships for $6.99",
    "url": "http://www.pcworld.com/article/3138886/computers/the-orange-pi-zero-single-board-computer-ships-for-699.html#tk.rss_all",
    "votes": 3,
    "posted": "Nov 4, 2016 9:53:18 PM"
  },
  {
    "id": "12875950",
    "timestamp": "Nov 4, 2016 10:15:49 PM",
    "topic": "Mysterious \u0027ping\u0027 sound from sea floor baffles Igloolik",
    "url": "http://www.cbc.ca/news/canada/north/ping-beep-hum-sound-arctic-ocean-igloolik-1.3831861",
    "votes": 3,
    "posted": "Nov 4, 2016 9:44:30 PM"
  },
  {
    "id": "12875868",
    "timestamp": "Nov 5, 2016 12:46:05 AM",
    "topic": "Solid metallic hydrogen has been produced in the laboratory",
    "url": "https://arxiv.org/abs/1610.01634",
    "votes": 6,
    "posted": "Nov 4, 2016 9:34:38 PM"
  },
  {
    "id": "12875794",
    "timestamp": "Nov 5, 2016 2:56:16 AM",
    "topic": "The Prophet of Cyberspace",
    "url": "http://www.filfre.net/2016/11/the-prophet-of-cyberspace/",
    "votes": 3,
    "posted": "Nov 4, 2016 9:26:24 PM"
  },
  {
    "id": "12875720",
    "timestamp": "Nov 5, 2016 1:16:07 AM",
    "topic": "Novelty Talking Fish Integrated with Alexa API",
    "url": "http://www.theverge.com/2016/11/4/13525172/amazon-alexa-big-mouth-billy-bass-hack-api",
    "votes": 3,
    "posted": "Nov 4, 2016 9:18:30 PM"
  },
  {
    "id": "12875593",
    "timestamp": "Nov 4, 2016 9:25:45 PM",
    "topic": "The Cognitive Upside to an Extended Adolescence",
    "url": "https://www.theatlantic.com/health/archive/2016/11/metaplasticity/506390/",
    "votes": 3,
    "posted": "Nov 4, 2016 9:03:19 PM"
  },
  {
    "id": "12875559",
    "timestamp": "Nov 4, 2016 9:15:43 PM",
    "topic": "2016 Rust Commercial User Survey Results",
    "url": "https://internals.rust-lang.org/t/2016-rust-commercial-user-survey-results/4317",
    "votes": 6,
    "posted": "Nov 4, 2016 8:59:38 PM"
  },
  {
    "id": "12875502",
    "timestamp": "Nov 4, 2016 9:15:44 PM",
    "topic": "Peter Thiel Speaks About Support for Trump",
    "url": "https://www.youtube.com/watch?v\u003daswsnLvtEOA",
    "votes": 6,
    "posted": "Nov 4, 2016 8:53:39 PM"
  },
  {
    "id": "12875348",
    "timestamp": "Nov 4, 2016 8:55:42 PM",
    "topic": "I’m a Latino in Tech, and I Think the ‘Diversity’ Discussion Is Utterly Broken",
    "url": "http://observer.com/2016/10/lets-be-honest-we-have-no-idea-what-diversity-means/",
    "votes": 5,
    "posted": "Nov 4, 2016 8:37:30 PM"
  },
  {
    "id": "12875330",
    "timestamp": "Nov 4, 2016 8:55:42 PM",
    "topic": "One week with the Google Pixel",
    "url": "https://medium.com/@elliotjaystocks/one-week-with-the-google-pixel-f43e6647906f#.2l4udx8oo",
    "votes": 4,
    "posted": "Nov 4, 2016 8:34:43 PM"
  },
  {
    "id": "12875263",
    "timestamp": "Nov 4, 2016 10:15:49 PM",
    "topic": "Is (React) Fiber ready yet?",
    "url": "http://isfiberreadyyet.com/",
    "votes": 3,
    "posted": "Nov 4, 2016 8:28:05 PM"
  },
  {
    "id": "12875238",
    "timestamp": "Nov 5, 2016 5:06:28 AM",
    "topic": "Why Docker and PaaS might not be useful anymore – Serverless Architecture",
    "url": "https://specify.io/concepts/serverless-baas-faas",
    "votes": 5,
    "posted": "Nov 4, 2016 8:25:47 PM"
  },
  {
    "id": "12875211",
    "timestamp": "Nov 4, 2016 8:55:41 PM",
    "topic": "Apple cuts USB-C adapter prices in response to MacBook Pro complaints",
    "url": "http://www.theverge.com/2016/11/4/13524272/apple-cutting-usb-c-adaptor-prices-macbook-pro",
    "votes": 7,
    "posted": "Nov 4, 2016 8:22:54 PM"
  },
  {
    "id": "12875191",
    "timestamp": "Nov 4, 2016 8:55:41 PM",
    "topic": "Introducing Aurelia UX",
    "url": "http://blog.aurelia.io/2016/11/04/introducing-aurelia-ux/",
    "votes": 4,
    "posted": "Nov 4, 2016 8:21:26 PM"
  },
  {
    "id": "12875168",
    "timestamp": "Nov 4, 2016 8:45:40 PM",
    "topic": "Putting Sugary Soda Out of Reach",
    "url": "http://www.nytimes.com/2016/11/08/well/eat/putting-sugary-soda-out-of-reach.html?emc\u003dedit_ca_20161104\u0026nl\u003dcalifornia-today\u0026nlid\u003d4617603\u0026te\u003d1\u0026_r\u003d0",
    "votes": 3,
    "posted": "Nov 4, 2016 8:19:05 PM"
  },
  {
    "id": "12875092",
    "timestamp": "Nov 4, 2016 8:45:40 PM",
    "topic": "Rolling Stone Found Liable in Defamation Trial Over ‘Rape on Campus’ Article",
    "url": "http://www.wsj.com/articles/rolling-stone-found-liable-in-defamation-trial-over-rape-on-campus-article-1478284464",
    "votes": 6,
    "posted": "Nov 4, 2016 8:11:54 PM"
  },
  {
    "id": "12874979",
    "timestamp": "Nov 4, 2016 9:35:46 PM",
    "topic": "Elon Musk: Robots will take your jobs, government will have to pay your wage",
    "url": "http://www.cnbc.com/2016/11/04/elon-musk-robots-will-take-your-jobs-government-will-have-to-pay-your-wage.html",
    "votes": 5,
    "posted": "Nov 4, 2016 7:57:00 PM"
  },
  {
    "id": "12874835",
    "timestamp": "Nov 4, 2016 8:25:38 PM",
    "topic": "How “Black Mirror” Gets Its Barely Sci-Fi Tech Just Right",
    "url": "https://magenta.as/how-black-mirror-gets-its-barely-sci-fi-tech-just-right-4809e500085e#.3mxzdk2x8",
    "votes": 8,
    "posted": "Nov 4, 2016 7:37:59 PM"
  },
  {
    "id": "12874808",
    "timestamp": "Nov 4, 2016 8:15:37 PM",
    "topic": "Programming is boring",
    "url": "http://dividebyze.ro/2016/11/04/programming-is-boring.html",
    "votes": 8,
    "posted": "Nov 4, 2016 7:34:04 PM"
  },
  {
    "id": "12874798",
    "timestamp": "Nov 4, 2016 7:45:34 PM",
    "topic": "DeepMind and Blizzard to Open Up StarCraft II to AI",
    "url": "https://deepmind.com/blog/deepmind-and-blizzard-release-starcraft-ii-ai-research-environment/",
    "votes": 9,
    "posted": "Nov 4, 2016 7:32:53 PM"
  },
  {
    "id": "12874770",
    "timestamp": "Nov 6, 2016 5:19:15 AM",
    "topic": "Show HN: Offensive Computer Security (Open Course, Video Lectures)",
    "url": "https://www.cs.fsu.edu/~redwood/OffensiveComputerSecurity/lectures.html",
    "votes": 7,
    "posted": "Nov 4, 2016 7:29:09 PM"
  },
  {
    "id": "12874756",
    "timestamp": "Nov 4, 2016 8:25:38 PM",
    "topic": "Harvard Cancels Men’s Soccer Season After Finding Sexually Explicit \u0027Reports\u0027",
    "url": "https://www.thecrimson.com/article/2016/11/4/soccer-suspended-scouting-report-harvard/",
    "votes": 3,
    "posted": "Nov 4, 2016 7:26:32 PM"
  },
  {
    "id": "12874743",
    "timestamp": "Nov 4, 2016 8:05:36 PM",
    "topic": "No Laptop, No Phone, No Desk: UBS Reinvents the Work Space",
    "url": "http://www.nytimes.com/2016/11/04/business/dealbook/ubs-bank-virtual-desktops-london.html",
    "votes": 3,
    "posted": "Nov 4, 2016 7:25:16 PM"
  },
  {
    "id": "12874740",
    "timestamp": "Nov 4, 2016 9:45:47 PM",
    "topic": "Show HN: Best of Themes – The simplest way to browse thousands of website themes",
    "url": "https://www.bestofthemes.com",
    "votes": 4,
    "posted": "Nov 4, 2016 7:25:04 PM"
  },
  {
    "id": "12874731",
    "timestamp": "Nov 4, 2016 8:45:40 PM",
    "topic": "New sandbox features in systemd",
    "url": "https://endocode.com/blog/2016/11/04/new-sandbox-features-in-systemd/",
    "votes": 3,
    "posted": "Nov 4, 2016 7:23:40 PM"
  },
  {
    "id": "12874587",
    "timestamp": "Nov 4, 2016 7:15:32 PM",
    "topic": "How junk science put a woman behind bars for 25 years",
    "url": "https://theintercept.com/2016/11/04/25-years-after-junk-science-conviction-texas-finally-admits-sonia-cacys-innocence/",
    "votes": 3,
    "posted": "Nov 4, 2016 7:06:16 PM"
  },
  {
    "id": "12874580",
    "timestamp": "Nov 4, 2016 7:15:31 PM",
    "topic": "Seneca Systems (S16) hiring smart, resourceful full-stack engineers",
    "url": "http://seneca.systems/careers/product/full-stack-engineer",
    "votes": 1,
    "posted": "Nov 4, 2016 7:05:46 PM"
  },
  {
    "id": "12874521",
    "timestamp": "Nov 4, 2016 7:25:33 PM",
    "topic": "Jury finds Rolling Stone responsible for defaming UVA dean with rape story",
    "url": "https://www.washingtonpost.com/local/education/jury-finds-reporter-rolling-stone-responsible-for-defaming-u-va-dean-with-gang-rape-story/2016/11/04/aaf407fa-a1e8-11e6-a44d-cc2898cfab06_story.html",
    "votes": 7,
    "posted": "Nov 4, 2016 6:58:57 PM"
  },
  {
    "id": "12874403",
    "timestamp": "Nov 4, 2016 7:05:30 PM",
    "topic": "Turkey blocks social media again to stall protests – here’s how to access them",
    "url": "https://techcrunch.com/2016/11/04/turkey-blocks-social-media-again-to-stall-protests-heres-how-to-access-them/",
    "votes": 5,
    "posted": "Nov 4, 2016 6:43:42 PM"
  },
  {
    "id": "12874280",
    "timestamp": "Nov 4, 2016 6:35:27 PM",
    "topic": "Dalai Lama: Behind Our Anxiety, the Fear of Being Unneeded",
    "url": "http://www.nytimes.com/2016/11/04/opinion/dalai-lama-behind-our-anxiety-the-fear-of-being-unneeded.html",
    "votes": 5,
    "posted": "Nov 4, 2016 6:25:29 PM"
  },
  {
    "id": "12874158",
    "timestamp": "Nov 4, 2016 6:35:27 PM",
    "topic": "Voting Paradoxes [video]",
    "url": "https://www.exploratorium.edu/blogs/tangents/voting-paradoxes",
    "votes": 4,
    "posted": "Nov 4, 2016 6:11:56 PM"
  },
  {
    "id": "12874064",
    "timestamp": "Nov 4, 2016 6:05:24 PM",
    "topic": "Serverless Map/Reduce",
    "url": "http://tothestars.io/blog/2016/11/2/serverless-mapreduce",
    "votes": 3,
    "posted": "Nov 4, 2016 6:01:20 PM"
  },
  {
    "id": "12874034",
    "timestamp": "Nov 4, 2016 7:45:34 PM",
    "topic": "Introducing Google Home",
    "url": "https://madeby.google.com/home/",
    "votes": 6,
    "posted": "Nov 4, 2016 5:57:37 PM"
  },
  {
    "id": "12874001",
    "timestamp": "Nov 4, 2016 6:15:25 PM",
    "topic": "The Batman job offer",
    "url": "https://raed.it/blog/batman-aint-got-shit-on-me/",
    "votes": 4,
    "posted": "Nov 4, 2016 5:53:33 PM"
  },
  {
    "id": "12873879",
    "timestamp": "Nov 4, 2016 5:45:22 PM",
    "topic": "The secret world of microwave networks",
    "url": "http://arstechnica.com/information-technology/2016/11/private-microwave-networks-financial-hft/",
    "votes": 3,
    "posted": "Nov 4, 2016 5:40:32 PM"
  },
  {
    "id": "12873679",
    "timestamp": "Nov 4, 2016 5:35:21 PM",
    "topic": "LLVM moves to GitHub",
    "url": "https://twitter.com/chandlerc1024/status/794318137445359616?ref_src\u003dtwsrc%5Etfw",
    "votes": 4,
    "posted": "Nov 4, 2016 5:15:41 PM"
  },
  {
    "id": "12873443",
    "timestamp": "Nov 4, 2016 5:25:20 PM",
    "topic": "ArangoDB 3.1 – A Solid Ground to Scale Part II",
    "url": "https://www.arangodb.com/2016/11/arangodb-3-1-solid-ground-scale-part-ii/",
    "votes": 26,
    "posted": "Nov 4, 2016 4:43:05 PM"
  },
  {
    "id": "12873337",
    "timestamp": "Nov 5, 2016 12:16:03 AM",
    "topic": "Sprint now supports RCS with default Messenger app",
    "url": "https://blog.google/products/android/partnering-global-carriers-upgrade-sms/",
    "votes": 3,
    "posted": "Nov 4, 2016 4:29:41 PM"
  },
  {
    "id": "12873214",
    "timestamp": "Nov 4, 2016 4:55:17 PM",
    "topic": "Code.Gov – Share and reuse open source code from the Federal Government",
    "url": "https://code.gov",
    "votes": 4,
    "posted": "Nov 4, 2016 4:17:24 PM"
  },
  {
    "id": "12873187",
    "timestamp": "Nov 4, 2016 5:05:18 PM",
    "topic": "Samsung just recalled 3M washing machines because they might explode",
    "url": "http://www.businessinsider.com/r-samsung-to-recall-28-mln-washing-machines-in-the-united-states-2016-11",
    "votes": 3,
    "posted": "Nov 4, 2016 4:13:34 PM"
  },
  {
    "id": "12873156",
    "timestamp": "Nov 4, 2016 5:15:19 PM",
    "topic": "The Mega Rich Have Found an Unlikely New Refuge – New Zealand",
    "url": "https://www.bloomberg.com/news/articles/2016-11-02/the-rich-have-found-a-place-to-escape-the-horrors-of-the-world",
    "votes": 12,
    "posted": "Nov 4, 2016 4:09:33 PM"
  },
  {
    "id": "12873089",
    "timestamp": "Nov 4, 2016 4:15:14 PM",
    "topic": "Hyper Is Docker Done the Right Way",
    "url": "http://thenewstack.io/hyper-docker-done-right-way/",
    "votes": 4,
    "posted": "Nov 4, 2016 4:00:13 PM"
  },
  {
    "id": "12872970",
    "timestamp": "Nov 4, 2016 3:55:12 PM",
    "topic": "@supports will change your life",
    "url": "http://www.lottejackson.com/learning/supports-will-change-your-life",
    "votes": 3,
    "posted": "Nov 4, 2016 3:49:02 PM"
  },
  {
    "id": "12872961",
    "timestamp": "Nov 4, 2016 3:55:12 PM",
    "topic": "Israel’s Zirra Raises $1.6M to ‘Analyze’ Other Startups",
    "url": "http://jewishbusinessnews.com/2016/11/01/israels-zirra-raises-1-6-million-to-analyze-other-startups/",
    "votes": 3,
    "posted": "Nov 4, 2016 3:47:36 PM"
  },
  {
    "id": "12872912",
    "timestamp": "Nov 4, 2016 5:55:23 PM",
    "topic": "Microsoft was working on its own MacBook Touch Bar – The Verge",
    "url": "http://www.theverge.com/2016/11/4/13518278/microsoft-adaptive-keyboard-concept-macbook-pro-touch-bar",
    "votes": 3,
    "posted": "Nov 4, 2016 3:42:19 PM"
  },
  {
    "id": "12872868",
    "timestamp": "Nov 4, 2016 3:45:11 PM",
    "topic": "Dyson has launched a free engineering uni in Britain where you get paid to study",
    "url": "http://www.thememo.com/2016/11/04/forget-fees-dyson-opens-britains-first-degree-where-students-get-paid/",
    "votes": 4,
    "posted": "Nov 4, 2016 3:38:18 PM"
  },
  {
    "id": "12872826",
    "timestamp": "Nov 4, 2016 11:05:55 PM",
    "topic": "Why UK Brexit Talk Baffles Germany",
    "url": "http://www.bbc.com/news/uk-politics-37799805",
    "votes": 3,
    "posted": "Nov 4, 2016 3:33:21 PM"
  },
  {
    "id": "12872780",
    "timestamp": "Nov 4, 2016 3:35:10 PM",
    "topic": "Le Tote (YC S13) Is Hiring Full Stack Engineers Disrupt Fashion with Us",
    "url": "http://grnh.se/5ybu4t1",
    "votes": 1,
    "posted": "Nov 4, 2016 3:28:45 PM"
  },
  {
    "id": "12872752",
    "timestamp": "Nov 4, 2016 3:45:11 PM",
    "topic": "Samsung acquires Joyent",
    "url": "https://www.joyent.com/blog/samsung-acquires-joyent",
    "votes": 4,
    "posted": "Nov 4, 2016 3:24:16 PM"
  },
  {
    "id": "12872729",
    "timestamp": "Nov 4, 2016 3:35:09 PM",
    "topic": "Steve Ballmer Says Smartphones Broke His Relationship with Bill Gates",
    "url": "https://www.bloomberg.com/news/articles/2016-11-04/steve-ballmer-says-smartphones-broke-his-relationship-with-bill-gates",
    "votes": 12,
    "posted": "Nov 4, 2016 3:21:32 PM"
  },
  {
    "id": "12872715",
    "timestamp": "Nov 4, 2016 3:45:11 PM",
    "topic": "Trump Rolling to Learn about APIs",
    "url": "https://medium.com/api-corner/trump-rolling-to-make-apis-great-again-a80678766564#.hkt4y9atu",
    "votes": 3,
    "posted": "Nov 4, 2016 3:19:22 PM"
  },
  {
    "id": "12872705",
    "timestamp": "Nov 4, 2016 3:35:09 PM",
    "topic": "Data and Machine Learning to Get Out the Vote",
    "url": "http://www.civicinnovation.com/",
    "votes": 14,
    "posted": "Nov 4, 2016 3:17:35 PM"
  },
  {
    "id": "12872664",
    "timestamp": "Nov 4, 2016 3:45:11 PM",
    "topic": "Stop Measuring Everything",
    "url": "https://savagethoughts.com/stop-measuring-everything-8adb1118e0e5#.j0b6kqsfq",
    "votes": 4,
    "posted": "Nov 4, 2016 3:11:45 PM"
  },
  {
    "id": "12872632",
    "timestamp": "Nov 4, 2016 3:25:09 PM",
    "topic": "Fatal Tesla crash and battery pack issues for First Responders [video]",
    "url": "https://www.youtube.com/watch?v\u003dUrT5MA_iTXs",
    "votes": 7,
    "posted": "Nov 4, 2016 3:07:19 PM"
  },
  {
    "id": "12872595",
    "timestamp": "Nov 4, 2016 7:45:34 PM",
    "topic": "Sparsity",
    "url": "http://kevinlawler.com/sparse",
    "votes": 5,
    "posted": "Nov 4, 2016 3:01:20 PM"
  },
  {
    "id": "12872577",
    "timestamp": "Nov 4, 2016 3:35:10 PM",
    "topic": "Show HN: What happens if you disappear",
    "url": "https://cronu.com",
    "votes": 5,
    "posted": "Nov 4, 2016 2:57:53 PM"
  },
  {
    "id": "12872505",
    "timestamp": "Nov 4, 2016 3:15:08 PM",
    "topic": "The Competitive Landscape for Machine Intelligence",
    "url": "https://hbr.org/2016/11/the-competitive-landscape-for-machine-intelligence",
    "votes": 4,
    "posted": "Nov 4, 2016 2:50:51 PM"
  },
  {
    "id": "12872467",
    "timestamp": "Nov 4, 2016 3:15:08 PM",
    "topic": "India’s Telescope Detects Crack in the Earth’s Magnetic Shield",
    "url": "http://www.natureworldnews.com/articles/31155/20161104/india-telescope-detects-crack-earth-magnetic-shield.htm",
    "votes": 4,
    "posted": "Nov 4, 2016 2:46:17 PM"
  },
  {
    "id": "12872311",
    "timestamp": "Nov 4, 2016 9:15:44 PM",
    "topic": "Ask HN: Meditaion Resources",
    "votes": 4,
    "posted": "Nov 4, 2016 2:23:42 PM"
  },
  {
    "id": "12872304",
    "timestamp": "Nov 4, 2016 2:45:05 PM",
    "topic": "Docker in Production: An History of Failure",
    "url": "https://thehftguy.wordpress.com/2016/11/01/docker-in-production-an-history-of-failure/",
    "votes": 5,
    "posted": "Nov 4, 2016 2:23:07 PM"
  },
  {
    "id": "12872170",
    "timestamp": "Nov 5, 2016 3:57:19 PM",
    "topic": "Show HN: Formpost.co – Send forms from your static site",
    "url": "https://formpost.co/",
    "votes": 14,
    "posted": "Nov 4, 2016 1:57:17 PM"
  },
  {
    "id": "12872074",
    "timestamp": "Nov 4, 2016 7:05:31 PM",
    "topic": "Apple Takes 104% of All Smartphone Profits Following Galaxy Note 7 Recall",
    "url": "http://www.macrumors.com/2016/11/04/apple-smartphone-profit-q3-samsung-recall/",
    "votes": 3,
    "posted": "Nov 4, 2016 1:42:05 PM"
  },
  {
    "id": "12871969",
    "timestamp": "Nov 4, 2016 1:24:59 PM",
    "topic": "The NYT Released an Oregon Trail Style Game about Voter Suppression",
    "url": "http://www.nytimes.com/interactive/2016/11/01/opinion/voting-suppression-videogame.html?ref\u003dopinion",
    "votes": 4,
    "posted": "Nov 4, 2016 1:17:15 PM"
  },
  {
    "id": "12871966",
    "timestamp": "Nov 4, 2016 4:35:16 PM",
    "topic": "Getting Started with Webpack 2",
    "url": "https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.fjs4xiv4v",
    "votes": 6,
    "posted": "Nov 4, 2016 1:16:40 PM"
  },
  {
    "id": "12871934",
    "timestamp": "Nov 4, 2016 1:45:01 PM",
    "topic": "Introduction to Cryptography – Christof Paar",
    "url": "https://www.youtube.com/channel/UC1usFRN4LCMcfIV7UjHNuQg/videos",
    "votes": 4,
    "posted": "Nov 4, 2016 1:09:24 PM"
  },
  {
    "id": "12871893",
    "timestamp": "Nov 4, 2016 1:24:59 PM",
    "topic": "Ghost soldiers: the Russians secretly dying for the Kremlin in Syria",
    "url": "http://www.reuters.com/article/us-mideast-crisis-syria-russia-insight-idUSKBN12Y0M6",
    "votes": 3,
    "posted": "Nov 4, 2016 1:01:39 PM"
  },
  {
    "id": "12871809",
    "timestamp": "Nov 4, 2016 1:04:58 PM",
    "topic": "Here’s to more HTTPS on the web",
    "url": "https://developers.googleblog.com/2016/11/heres-to-more-https-on-the-web.html",
    "votes": 3,
    "posted": "Nov 4, 2016 12:43:23 PM"
  },
  {
    "id": "12871794",
    "timestamp": "Nov 4, 2016 1:24:59 PM",
    "topic": "ZeroMQ 4.2.0",
    "url": "https://github.com/zeromq/libzmq/releases/tag/v4.2.0",
    "votes": 7,
    "posted": "Nov 4, 2016 12:41:22 PM"
  },
  {
    "id": "12871783",
    "timestamp": "Nov 4, 2016 7:45:34 PM",
    "topic": "Ask HN: I know a few high-level languages. Is it still worth learning C++?",
    "votes": 4,
    "posted": "Nov 4, 2016 12:38:59 PM"
  },
  {
    "id": "12871752",
    "timestamp": "Nov 4, 2016 3:55:12 PM",
    "topic": "Quantum Honeybees (1997)",
    "url": "http://discovermagazine.com/1997/nov/quantumhoneybees1263",
    "votes": 3,
    "posted": "Nov 4, 2016 12:32:18 PM"
  },
  {
    "id": "12871615",
    "timestamp": "Nov 4, 2016 12:24:55 PM",
    "topic": "MongoHQ/Compose: Sandbox Retirement",
    "url": "http://us5.campaign-archive2.com/?u\u003dd30ac55f6b407ddc73ee53a5d\u0026id\u003da0d924b617\u0026e\u003dc1b837957f",
    "votes": 3,
    "posted": "Nov 4, 2016 11:54:16 AM"
  },
  {
    "id": "12871403",
    "timestamp": "Nov 4, 2016 12:14:54 PM",
    "topic": "H.264 is Magic: A technical walkthrough of how video compression works",
    "url": "https://sidbala.com/h-264-is-magic/",
    "votes": 7,
    "posted": "Nov 4, 2016 11:00:57 AM"
  },
  {
    "id": "12871348",
    "timestamp": "Nov 4, 2016 4:05:13 PM",
    "topic": "Microsoft lost 300M browser users in 2016, tracking site shows",
    "url": "http://www.businessinsider.com/300-million-users-ditched-microsoft-browsers-2016-11?utm_source\u003dfeedburner\u0026utm_medium\u003dreferral",
    "votes": 4,
    "posted": "Nov 4, 2016 10:49:51 AM"
  },
  {
    "id": "12871242",
    "timestamp": "Nov 4, 2016 10:24:44 AM",
    "topic": "Flexport is hiring a VP of Marketing to start our marketing team",
    "url": "https://flexport.com/careers",
    "votes": 1,
    "posted": "Nov 4, 2016 10:19:24 AM"
  },
  {
    "id": "12871234",
    "timestamp": "Nov 4, 2016 10:54:48 AM",
    "topic": "6.851: Advanced Data Structures",
    "url": "http://courses.csail.mit.edu/6.851/",
    "votes": 4,
    "posted": "Nov 4, 2016 10:17:23 AM"
  },
  {
    "id": "12871157",
    "timestamp": "Nov 4, 2016 10:24:45 AM",
    "topic": "Switching from MacOS: Developer Environment",
    "url": "http://blog.elementary.io/post/152671475281/switching-from-macos-developer-environment",
    "votes": 5,
    "posted": "Nov 4, 2016 9:52:19 AM"
  },
  {
    "id": "12871156",
    "timestamp": "Nov 4, 2016 12:44:56 PM",
    "topic": "Fast Fibonacci Algorithms",
    "url": "https://www.nayuki.io/page/fast-fibonacci-algorithms",
    "votes": 5,
    "posted": "Nov 4, 2016 9:52:08 AM"
  },
  {
    "id": "12871082",
    "timestamp": "Nov 4, 2016 10:34:46 AM",
    "topic": "Microsoft Doubles Down on Ethereum with New Blockchain Product",
    "url": "http://www.coindesk.com/microsoft-launching-new-ethereum-blockchain-product/",
    "votes": 3,
    "posted": "Nov 4, 2016 9:24:43 AM"
  },
  {
    "id": "12870997",
    "timestamp": "Nov 4, 2016 12:44:56 PM",
    "topic": "New MacBook Pro not compatible with all Thunderbolt 3 devices",
    "url": "http://www.macrumors.com/2016/11/03/new-macbook-pros-thunderbolt-3-compatibility/",
    "votes": 4,
    "posted": "Nov 4, 2016 9:01:47 AM"
  },
  {
    "id": "12870953",
    "timestamp": "Nov 4, 2016 9:34:40 AM",
    "topic": "Mozilla stops distribution of WOT addon",
    "votes": 4,
    "posted": "Nov 4, 2016 8:46:33 AM"
  },
  {
    "id": "12870908",
    "timestamp": "Nov 4, 2016 10:44:47 AM",
    "topic": "Ask HN: Lessons you wish you knew when you were Junior developer?",
    "votes": 8,
    "posted": "Nov 4, 2016 8:31:37 AM"
  },
  {
    "id": "12870899",
    "timestamp": "Nov 4, 2016 9:54:42 AM",
    "topic": "The Power of Ten – Rules for Writing Safety Critical Code",
    "url": "http://spinroot.com/p10/",
    "votes": 4,
    "posted": "Nov 4, 2016 8:29:03 AM"
  },
  {
    "id": "12870811",
    "timestamp": "Nov 4, 2016 10:24:45 AM",
    "topic": "How to block the ultrasonic signals you didn’t know were tracking you",
    "url": "http://arstechnica.com/security/2016/11/how-to-block-the-ultrasonic-signals-you-didnt-know-were-tracking-you/",
    "votes": 3,
    "posted": "Nov 4, 2016 7:56:08 AM"
  },
  {
    "id": "12870790",
    "timestamp": "Nov 4, 2016 6:25:26 PM",
    "topic": "Ask HN: What important truth do very few (informed) people agree with you on?",
    "votes": 8,
    "posted": "Nov 4, 2016 7:46:09 AM"
  },
  {
    "id": "12870756",
    "timestamp": "Nov 4, 2016 7:54:32 AM",
    "topic": "What pro computing could be",
    "url": "https://al3x.net/2016/10/31/pro-computing.html",
    "votes": 4,
    "posted": "Nov 4, 2016 7:33:41 AM"
  },
  {
    "id": "12870753",
    "timestamp": "Nov 4, 2016 10:24:45 AM",
    "topic": "Lynis – Security Auditing Tool for Linux, MacOS, and Unix-Based Systems",
    "url": "https://github.com/CISOfy/lynis",
    "votes": 5,
    "posted": "Nov 4, 2016 7:32:52 AM"
  },
  {
    "id": "12870712",
    "timestamp": "Nov 4, 2016 7:44:31 AM",
    "topic": "Smoking \u0027causes hundreds of DNA changes",
    "url": "http://www.bbc.com/news/health-37849000",
    "votes": 6,
    "posted": "Nov 4, 2016 7:18:56 AM"
  },
  {
    "id": "12870701",
    "timestamp": "Nov 4, 2016 7:44:31 AM",
    "topic": "Inside the Classroom Where San Quentin Inmates Learn to Code",
    "url": "https://www.wired.com/2016/11/san-quentin-inmates-learn-to-code/",
    "votes": 3,
    "posted": "Nov 4, 2016 7:15:30 AM"
  },
  {
    "id": "12870699",
    "timestamp": "Nov 4, 2016 9:34:40 AM",
    "topic": "Somleng – An Open Source Twilio Clone",
    "url": "https://medium.com/@dwilkie_34546/somleng-an-open-source-twilio-clone-a297062b340d#.w95usvrqb",
    "votes": 3,
    "posted": "Nov 4, 2016 7:14:33 AM"
  },
  {
    "id": "12870684",
    "timestamp": "Nov 4, 2016 8:54:37 AM",
    "topic": "What happens when you run a rkt container?",
    "url": "http://jvns.ca/blog/2016/11/03/what-happens-when-you-run-a-rkt-container/",
    "votes": 3,
    "posted": "Nov 4, 2016 7:10:04 AM"
  },
  {
    "id": "12870644",
    "timestamp": "Nov 4, 2016 7:44:31 AM",
    "topic": "Make Your Own Miniature Linux Laptop for Less Than $100",
    "url": "http://lifehacker.com/make-your-own-miniature-linux-laptop-for-less-than-100-1788535462",
    "votes": 4,
    "posted": "Nov 4, 2016 6:54:49 AM"
  },
  {
    "id": "12870643",
    "timestamp": "Nov 4, 2016 10:24:45 AM",
    "topic": "Tesla batteries violently explode in fatal crash",
    "url": "http://jalopnik.com/tesla-model-s-batteries-violently-explode-in-fatal-cras-1788561054",
    "votes": 5,
    "posted": "Nov 4, 2016 6:54:42 AM"
  },
  {
    "id": "12870628",
    "timestamp": "Nov 4, 2016 6:54:27 AM",
    "topic": "Smarking (YC W15) Is Hiring Sr. Software Engineers and Many More in SF",
    "url": "http://www.smarking.org/",
    "votes": 1,
    "posted": "Nov 4, 2016 6:47:01 AM"
  },
  {
    "id": "12870575",
    "timestamp": "Nov 4, 2016 7:34:30 AM",
    "topic": "Show HN: JinjaSQL",
    "url": "https://github.com/hashedin/jinjasql",
    "votes": 4,
    "posted": "Nov 4, 2016 6:26:13 AM"
  },
  {
    "id": "12870410",
    "timestamp": "Nov 4, 2016 10:14:44 AM",
    "topic": "Move over Raspberry Pi, here is a $4, coin-sized, open-source Linux computer",
    "url": "http://www.zdnet.com/article/move-over-raspberry-pi-here-is-a-4-coin-sized-open-source-linux-computer/",
    "votes": 7,
    "posted": "Nov 4, 2016 5:34:37 AM"
  },
  {
    "id": "12870387",
    "timestamp": "Nov 4, 2016 7:04:28 AM",
    "topic": "The Median Level of Founder Ownership at Exit",
    "url": "http://blossomstreetventures.com/blog_details.php?bcat_id\u003d106",
    "votes": 4,
    "posted": "Nov 4, 2016 5:28:40 AM"
  },
  {
    "id": "12870380",
    "timestamp": "Nov 4, 2016 5:54:22 AM",
    "topic": "Error handling that every programmer should know",
    "url": "https://www.joyent.com/node-js/production/design/errors",
    "votes": 3,
    "posted": "Nov 4, 2016 5:27:18 AM"
  },
  {
    "id": "12870359",
    "timestamp": "Nov 4, 2016 6:45:29 PM",
    "topic": "How Sociopathic Capitalism Came to Rule the World",
    "url": "http://www.theatlantic.com/business/archive/2016/11/sociopathic-capitalism/506240/?single_page\u003dtrue",
    "votes": 3,
    "posted": "Nov 4, 2016 5:20:23 AM"
  },
  {
    "id": "12870287",
    "timestamp": "Nov 4, 2016 6:04:23 AM",
    "topic": "The secret world of microwave networks",
    "url": "http://arstechnica.com/information-technology/2016/11/private-microwave-networks-financial-hft/",
    "votes": 3,
    "posted": "Nov 4, 2016 5:03:09 AM"
  },
  {
    "id": "12870264",
    "timestamp": "Nov 4, 2016 7:34:30 AM",
    "topic": "Snapnator: Your MacBook Snap feature is back",
    "url": "https://www.kickstarter.com/projects/436147229/snapnator-your-macbook-snap-feature-is-back",
    "votes": 4,
    "posted": "Nov 4, 2016 4:58:29 AM"
  },
  {
    "id": "12870249",
    "timestamp": "Nov 4, 2016 5:34:20 AM",
    "topic": "Why Fitbit Inc. Just Lost a Third of Its Value",
    "url": "http://www.fool.com/investing/2016/11/03/why-fitbit-inc-just-lost-a-third-of-its-value.aspx",
    "votes": 4,
    "posted": "Nov 4, 2016 4:54:28 AM"
  },
  {
    "id": "12870221",
    "timestamp": "Nov 4, 2016 10:34:46 AM",
    "topic": "Huawei taking on Apple and Samsung with new phone",
    "url": "http://www.theverge.com/2016/11/3/13477424/huawei-mate-9-unveiled-specs-pictures",
    "votes": 3,
    "posted": "Nov 4, 2016 4:48:51 AM"
  },
  {
    "id": "12870218",
    "timestamp": "Nov 4, 2016 5:04:18 AM",
    "topic": "​Ubuntu Core 16: Linux for a Secure Internet of Things",
    "url": "http://www.zdnet.com/article/ubuntu-core-16-linux-for-a-secure-internet-of-things/",
    "votes": 3,
    "posted": "Nov 4, 2016 4:47:41 AM"
  },
  {
    "id": "12870152",
    "timestamp": "Nov 4, 2016 6:14:23 AM",
    "topic": "US Broken Arrow Possibly Found in Canada (2016)",
    "url": "http://vancouversun.com/news/local-news/canadian-army-interested-in-old-nuke-that-may-have-been-found-off-haida-gwaii",
    "votes": 3,
    "posted": "Nov 4, 2016 4:32:02 AM"
  },
  {
    "id": "12870150",
    "timestamp": "Nov 4, 2016 5:14:18 AM",
    "topic": "Tech workers at UCSF face layoff, training their low paid replacements",
    "url": "http://www.mercurynews.com/2016/11/03/after-pink-slips-ucsf-tech-workers-train-their-foreign-replacements/",
    "votes": 4,
    "posted": "Nov 4, 2016 4:31:01 AM"
  },
  {
    "id": "12870123",
    "timestamp": "Nov 4, 2016 4:44:16 AM",
    "topic": "This Election Has Disgraced the Entire Profession of Journalism",
    "url": "http://observer.com/2016/11/this-election-has-disgraced-the-entire-profession-of-journalism/#.WBpXGM-S-do.facebook",
    "votes": 3,
    "posted": "Nov 4, 2016 4:25:54 AM"
  },
  {
    "id": "12870118",
    "timestamp": "Nov 4, 2016 10:34:46 AM",
    "topic": "Hatchit: An open source game engine",
    "url": "https://opensource.com/life/16/10/hatchit",
    "votes": 3,
    "posted": "Nov 4, 2016 4:25:16 AM"
  },
  {
    "id": "12870081",
    "timestamp": "Nov 4, 2016 7:14:28 AM",
    "topic": "Before Capitalism, Medieval Peasants Got More Vacation Time Than You",
    "url": "http://evonomics.com/capitalism-medieval-peasants-got-vacation-time-heres/",
    "votes": 4,
    "posted": "Nov 4, 2016 4:14:28 AM"
  },
  {
    "id": "12870031",
    "timestamp": "Nov 4, 2016 4:34:15 AM",
    "topic": "Show HN: Keygen – a dead-simple product licensing API built for developers",
    "url": "https://keygen.sh/",
    "votes": 4,
    "posted": "Nov 4, 2016 3:57:12 AM"
  },
  {
    "id": "12870014",
    "timestamp": "Nov 4, 2016 9:24:39 AM",
    "topic": "Why I became a software engineer",
    "url": "https://dev.to/edemkumodzi/why-i-became-a-software-engineer",
    "votes": 3,
    "posted": "Nov 4, 2016 3:53:05 AM"
  },
  {
    "id": "12870001",
    "timestamp": "Nov 5, 2016 3:27:15 PM",
    "topic": "Request for product: Ask me ~100 questions, and then tell me how to vote",
    "votes": 5,
    "posted": "Nov 4, 2016 3:50:20 AM"
  },
  {
    "id": "12869940",
    "timestamp": "Nov 4, 2016 3:44:11 AM",
    "topic": "After 20 Years, NASA Finally Finished Building the James Webb Space Telescope",
    "url": "http://www.popsci.com/james-webb-space-telescope-is-now-ready-for-final-tests-before-launch",
    "votes": 3,
    "posted": "Nov 4, 2016 3:32:31 AM"
  },
  {
    "id": "12869934",
    "timestamp": "Nov 4, 2016 3:44:11 AM",
    "topic": "DOJ Sues DirecTV, Calling It a \u0027Ringleader\u0027 of Collusion Over Sports Programming",
    "url": "https://www.techdirt.com/articles/20161103/06460835951/doj-sues-directv-calling-it-ringleader-collusion-over-regional-sports-programming.shtml",
    "votes": 3,
    "posted": "Nov 4, 2016 3:31:26 AM"
  },
  {
    "id": "12869870",
    "timestamp": "Nov 4, 2016 3:24:09 AM",
    "topic": "Impraise (YC S14) Hiring a Ruby Developer in Beautiful Amsterdam",
    "url": "http://jobs.impraise.com/o/ruby-developer",
    "votes": 1,
    "posted": "Nov 4, 2016 3:19:12 AM"
  },
  {
    "id": "12869807",
    "timestamp": "Nov 5, 2016 4:26:23 AM",
    "topic": "Ask HN: How Do You Share HN?",
    "votes": 4,
    "posted": "Nov 4, 2016 3:01:27 AM"
  },
  {
    "id": "12869616",
    "timestamp": "Nov 4, 2016 7:14:29 AM",
    "topic": "How Airbnb has contributed to Vancouver\u0027s rental shortage",
    "url": "http://www.straight.com/news/821031/masters-thesis-details-how-airbnb-has-become-problem-housing-supply-and-affordability",
    "votes": 3,
    "posted": "Nov 4, 2016 2:11:30 AM"
  },
  {
    "id": "12869601",
    "timestamp": "Nov 4, 2016 2:24:05 AM",
    "topic": "The Peoples Code – Code.gov Launches",
    "url": "https://code.gov/#/",
    "votes": 14,
    "posted": "Nov 4, 2016 2:08:24 AM"
  },
  {
    "id": "12869522",
    "timestamp": "Nov 4, 2016 3:44:11 AM",
    "topic": "How to be an artist – Howard Hodgkin",
    "url": "http://iainmait.land/posts/howard-hodgkin-how-to-be-an-artist",
    "votes": 4,
    "posted": "Nov 4, 2016 1:50:45 AM"
  },
  {
    "id": "12869443",
    "timestamp": "Nov 4, 2016 3:24:09 AM",
    "topic": "Regular meditation more beneficial than vacation",
    "url": "http://www.health.harvard.edu/blog/relaxation-benefits-meditation-stronger-relaxation-benefits-taking-vacation-2016102710532",
    "votes": 3,
    "posted": "Nov 4, 2016 1:35:59 AM"
  },
  {
    "id": "12869412",
    "timestamp": "Nov 4, 2016 1:44:02 AM",
    "topic": "Male Birth Control Study Killed After Men Complain About Side Effects",
    "url": "http://www.npr.org/sections/health-shots/2016/11/03/500549503/male-birth-control-study-killed-after-men-complain-about-side-effects",
    "votes": 6,
    "posted": "Nov 4, 2016 1:29:02 AM"
  },
  {
    "id": "12869389",
    "timestamp": "Nov 4, 2016 1:45:01 PM",
    "topic": "The audacious plan to bring back supersonic flight",
    "url": "http://www.vox.com/energy-and-environment/2016/11/2/13409324/supersonic-flight-concorde",
    "votes": 4,
    "posted": "Nov 4, 2016 1:21:33 AM"
  },
  {
    "id": "12869371",
    "timestamp": "Nov 4, 2016 2:04:03 AM",
    "topic": "A simple Metropolis-Hastings MCMC in R",
    "url": "https://theoreticalecology.wordpress.com/2010/09/17/metropolis-hastings-mcmc-in-r/",
    "votes": 3,
    "posted": "Nov 4, 2016 1:18:16 AM"
  },
  {
    "id": "12869209",
    "timestamp": "Nov 4, 2016 1:44:02 AM",
    "topic": "\u0027The FBI is Trumpland\u0027: anti-Clinton atmosphere spurred leaks, sources say",
    "url": "https://www.theguardian.com/us-news/2016/nov/03/fbi-leaks-hillary-clinton-james-comey-donald-trump",
    "votes": 3,
    "posted": "Nov 4, 2016 12:51:12 AM"
  },
  {
    "id": "12869142",
    "timestamp": "Nov 4, 2016 1:13:59 AM",
    "topic": "Social media shutdown in Turkey",
    "url": "https://turkeyblocks.org/2016/11/04/social-media-shutdown-turkey/",
    "votes": 4,
    "posted": "Nov 4, 2016 12:42:36 AM"
  },
  {
    "id": "12869127",
    "timestamp": "Nov 4, 2016 12:43:56 AM",
    "topic": "Replace macOS with KDE on a rock-solid base",
    "url": "https://neon.kde.org",
    "votes": 3,
    "posted": "Nov 4, 2016 12:40:04 AM"
  },
  {
    "id": "12869093",
    "timestamp": "Nov 4, 2016 12:53:57 AM",
    "topic": "Go to All the Meetups, they said…",
    "url": "https://medium.com/code-like-a-girl/go-to-all-the-meetups-they-said-f4c52d41dc30#.6nr1x3wue",
    "votes": 3,
    "posted": "Nov 4, 2016 12:34:24 AM"
  },
  {
    "id": "12869082",
    "timestamp": "Nov 4, 2016 5:44:21 AM",
    "topic": "Go Package Management Survey Results",
    "url": "https://engineeredweb.com/blog/2016/go-pkg-mgmt-survey-results/",
    "votes": 3,
    "posted": "Nov 4, 2016 12:33:31 AM"
  },
  {
    "id": "12868946",
    "timestamp": "Nov 4, 2016 12:33:55 AM",
    "topic": "From stackoverflow import quick_sort",
    "url": "https://github.com/drathier/stack-overflow-import",
    "votes": 11,
    "posted": "Nov 4, 2016 12:13:38 AM"
  },
  {
    "id": "12868920",
    "timestamp": "Nov 4, 2016 12:23:54 AM",
    "topic": "3D Acceleration on PocketC.H.I.P. Alpha",
    "url": "https://bbs.nextthing.co/t/c-h-i-p-pocketc-h-i-p-in-stock-for-the-holidays-3d-acceleration-alpha/11108/1",
    "votes": 5,
    "posted": "Nov 4, 2016 12:09:49 AM"
  },
  {
    "id": "12868857",
    "timestamp": "Nov 4, 2016 12:33:55 AM",
    "topic": "John McAfee: The FBI Is Either Incompetent or Corrupt, Here\u0027s the Truth.",
    "url": "https://medium.com/@robloggia/john-mcafee-the-fbi-is-either-incompetent-or-corrupt-in-dealing-with-hillarys-emails-76cbd00fd676#.55ktm1pb1",
    "votes": 5,
    "posted": "Nov 4, 2016 12:01:55 AM"
  },
  {
    "id": "12868851",
    "timestamp": "Nov 4, 2016 12:13:53 AM",
    "topic": "Zapier is hiring a platform and partnerships engineer – remote welcome",
    "url": "https://zapier.com/jobs/partnership-platform-engineer-fall-2016/",
    "votes": 1,
    "posted": "Nov 4, 2016 12:00:40 AM"
  },
  {
    "id": "12868849",
    "timestamp": "Nov 4, 2016 12:23:54 AM",
    "topic": "Ask HN: Will you really move away from Apple hardware?",
    "votes": 4,
    "posted": "Nov 4, 2016 12:00:28 AM"
  },
  {
    "id": "12868778",
    "timestamp": "Nov 4, 2016 6:14:23 AM",
    "topic": "Is the Australian government agile and innovative? Not to those in startups",
    "url": "http://www.smh.com.au/national/public-service/agile-and-innovativemen-not-in-the-real-world-20161026-gsas78.html",
    "votes": 3,
    "posted": "Nov 3, 2016 11:49:11 PM"
  },
  {
    "id": "12868741",
    "timestamp": "Nov 4, 2016 12:13:53 AM",
    "topic": "Variational Inference for Machine Learning [pdf]",
    "url": "http://shakirm.com/papers/VITutorial.pdf",
    "votes": 4,
    "posted": "Nov 3, 2016 11:44:27 PM"
  },
  {
    "id": "12868641",
    "timestamp": "Nov 4, 2016 12:13:53 AM",
    "topic": "Software Sales for Hackers",
    "url": "http://tapes.scalevp.com/software-sales-for-hackers/",
    "votes": 3,
    "posted": "Nov 3, 2016 11:32:29 PM"
  },
  {
    "id": "12868619",
    "timestamp": "Nov 4, 2016 12:13:53 AM",
    "topic": "ECommerce Platform Market Share",
    "url": "https://www.engadget.com/2016/11/03/ecommerce-platform-market-share-looking-at-the-companies-that-d/",
    "votes": 6,
    "posted": "Nov 3, 2016 11:30:10 PM"
  },
  {
    "id": "12868607",
    "timestamp": "Nov 4, 2016 12:13:53 AM",
    "topic": "Ask HN: What does a C++ fullstack mean to you?",
    "votes": 6,
    "posted": "Nov 3, 2016 11:29:01 PM"
  },
  {
    "id": "12868594",
    "timestamp": "Nov 3, 2016 11:33:49 PM",
    "topic": "The etcd Operator: cluster configuration and management on Kubernetes",
    "url": "https://coreos.com/blog/introducing-the-etcd-operator.html",
    "votes": 3,
    "posted": "Nov 3, 2016 11:27:49 PM"
  },
  {
    "id": "12868550",
    "timestamp": "Nov 4, 2016 12:43:56 AM",
    "topic": "Adventures in Aurelia: Creating a Custom PDF Viewer",
    "url": "https://www.sitepoint.com/aurelia-custom-pdf-viewer-component/",
    "votes": 3,
    "posted": "Nov 3, 2016 11:22:27 PM"
  },
  {
    "id": "12868527",
    "timestamp": "Nov 3, 2016 11:33:49 PM",
    "topic": "ASML Buys Stake in Carl Zeiss Unit for $1.1B",
    "url": "https://www.bloomberg.com/news/articles/2016-11-03/asml-buys-stake-in-carl-zeiss-unit-for-1-1-billion-in-euv-step",
    "votes": 3,
    "posted": "Nov 3, 2016 11:18:34 PM"
  },
  {
    "id": "12868518",
    "timestamp": "Nov 7, 2016 1:01:07 AM",
    "topic": "Neural-enhance – Super Resolution for images using deep learning",
    "url": "https://github.com/alexjc/neural-enhance/blob/master/README.rst",
    "votes": 3,
    "posted": "Nov 3, 2016 11:16:55 PM"
  },
  {
    "id": "12868508",
    "timestamp": "Nov 4, 2016 2:05:03 PM",
    "topic": "Ask HN: How do I learn php or Web development?",
    "votes": 8,
    "posted": "Nov 3, 2016 11:15:22 PM"
  },
  {
    "id": "12868494",
    "timestamp": "Nov 3, 2016 11:23:48 PM",
    "topic": "Why Are People Racist?",
    "url": "https://billmei.net/blog/why-are-people-racist",
    "votes": 6,
    "posted": "Nov 3, 2016 11:13:10 PM"
  },
  {
    "id": "12868439",
    "timestamp": "Nov 3, 2016 11:43:51 PM",
    "topic": "Fin: A Vibrator for Fingers",
    "url": "https://www.kickstarter.com/projects/dameproducts/fin-a-vibrator-for-fingers",
    "votes": 4,
    "posted": "Nov 3, 2016 11:06:41 PM"
  },
  {
    "id": "12868304",
    "timestamp": "Nov 3, 2016 11:43:50 PM",
    "topic": "Opus Audio Codec 1.2-alpha is out",
    "url": "https://www.opus-codec.org/release/dev/2016/11/03/libopus-1_2_alpha.html",
    "votes": 4,
    "posted": "Nov 3, 2016 10:47:35 PM"
  },
  {
    "id": "12868303",
    "timestamp": "Nov 4, 2016 12:33:55 AM",
    "topic": "What happened when I challenged the PC campus culture at NYU",
    "url": "https://www.washingtonpost.com/posteverything/wp/2016/11/03/campus-pc-culture-is-so-rampant-that-nyu-is-paying-to-silence-me/",
    "votes": 21,
    "posted": "Nov 3, 2016 10:47:33 PM"
  },
  {
    "id": "12868287",
    "timestamp": "Nov 3, 2016 11:43:50 PM",
    "topic": "Modern Linux service isolation",
    "url": "https://defenceforstartups.com/posts/modern-linux-service-isolation.html",
    "votes": 7,
    "posted": "Nov 3, 2016 10:46:03 PM"
  },
  {
    "id": "12868106",
    "timestamp": "Nov 3, 2016 11:03:46 PM",
    "topic": "Brexit needs to be approved by Parliament",
    "url": "http://www.bbc.com/news/uk-politics-37857785",
    "votes": 5,
    "posted": "Nov 3, 2016 10:24:51 PM"
  },
  {
    "id": "12868033",
    "timestamp": "Nov 3, 2016 10:43:44 PM",
    "topic": "Our Civic Duty as Techies",
    "url": "https://medium.com/@USCTO/our-civic-duty-as-techies-fd2008df76e4#.f0ee1jqjf",
    "votes": 5,
    "posted": "Nov 3, 2016 10:17:02 PM"
  },
  {
    "id": "12867991",
    "timestamp": "Nov 4, 2016 4:25:15 PM",
    "topic": "Steven Pinker on Language, Reason, and the Future of Violence",
    "url": "https://medium.com/conversations-with-tyler/steven-pinker-language-instinct-evolutionary-psychology-darwin-chomsky-linguistics-b792d7cd2a05#.pr8d00o74",
    "votes": 3,
    "posted": "Nov 3, 2016 10:11:31 PM"
  },
  {
    "id": "12867843",
    "timestamp": "Nov 3, 2016 10:23:42 PM",
    "topic": "How Airbnb Makes It Hard to Sue for Discrimination",
    "url": "http://www.newyorker.com/business/currency/how-airbnb-makes-it-hard-to-sue-for-discrimination",
    "votes": 6,
    "posted": "Nov 3, 2016 9:53:21 PM"
  },
  {
    "id": "12867795",
    "timestamp": "Nov 3, 2016 10:03:40 PM",
    "topic": "GoPro trading halted as company misses revenue expectations by 23%",
    "url": "https://techcrunch.com/2016/11/03/gopro-trading-halted-as-company-misses-revenue-expectations-by-23/",
    "votes": 12,
    "posted": "Nov 3, 2016 9:47:14 PM"
  },
  {
    "id": "12867634",
    "timestamp": "Nov 3, 2016 9:43:38 PM",
    "topic": "Yet another JVM language? Whiley takes a fresh approach",
    "url": "http://www.javaworld.com/article/3137548/scripting-jvm-languages/yet-another-jvm-language-whiley-takes-a-fresh-approach.html",
    "votes": 3,
    "posted": "Nov 3, 2016 9:27:51 PM"
  },
  {
    "id": "12867586",
    "timestamp": "Nov 4, 2016 6:05:25 PM",
    "topic": "Want to Know What Virtual Reality Might Become? Look to the Past",
    "url": "http://www.nytimes.com/2016/11/06/magazine/want-to-know-what-virtual-reality-might-become-look-to-the-past.html",
    "votes": 5,
    "posted": "Nov 3, 2016 9:21:20 PM"
  },
  {
    "id": "12867500",
    "timestamp": "Nov 3, 2016 11:03:46 PM",
    "topic": "Mirai botnet almost gets Liberia offline",
    "url": "http://www.zdnet.com/article/mirai-botnet-attack-briefly-knocked-an-entire-country-offline/",
    "votes": 3,
    "posted": "Nov 3, 2016 9:10:41 PM"
  },
  {
    "id": "12867417",
    "timestamp": "Nov 3, 2016 11:43:50 PM",
    "topic": "Silicon Beach: Los Angeles booms as startup hub",
    "url": "http://www.economist.com/news/business/21709564-cheaper-location-tech-companies-takes-los-angeles-booms-startup-hub",
    "votes": 5,
    "posted": "Nov 3, 2016 9:00:24 PM"
  },
  {
    "id": "12867380",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "Udacity the new ITT Tech?",
    "url": "https://tech.masters3d.com/udacity-the-new-itt-tech-ce26018c3f2",
    "votes": 4,
    "posted": "Nov 3, 2016 8:55:27 PM"
  },
  {
    "id": "12867356",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "Why Are US Presidential Elections So Close?",
    "url": "http://nautil.us/issue/42/fakes/why-are-us-presidential-elections-so-close",
    "votes": 4,
    "posted": "Nov 3, 2016 8:53:10 PM"
  },
  {
    "id": "12867325",
    "timestamp": "Nov 4, 2016 3:14:08 AM",
    "topic": "Inside Magic Leap, the Secretive $4.5B Startup Changing Computing Forever",
    "url": "http://www.forbes.com/sites/davidewalt/2016/11/02/inside-magic-leap-the-secretive-4-5-billion-startup-changing-computing-forever/#235ad204e83f",
    "votes": 4,
    "posted": "Nov 3, 2016 8:48:57 PM"
  },
  {
    "id": "12867306",
    "timestamp": "Nov 5, 2016 1:36:09 AM",
    "topic": "The curious case  of the disappearing Polish S (2015)",
    "url": "https://medium.engineering/the-curious-case-of-disappearing-polish-s-fa398313d4df",
    "votes": 3,
    "posted": "Nov 3, 2016 8:46:31 PM"
  },
  {
    "id": "12867300",
    "timestamp": "Nov 4, 2016 5:44:21 AM",
    "topic": "Ask HN: How to structure sales compensation package at b2b startup?",
    "votes": 3,
    "posted": "Nov 3, 2016 8:45:44 PM"
  },
  {
    "id": "12867288",
    "timestamp": "Nov 4, 2016 3:24:10 AM",
    "topic": "How to block the ultrasonic signals you didn’t know were tracking you",
    "url": "http://arstechnica.com/security/2016/11/how-to-block-the-ultrasonic-signals-you-didnt-know-were-tracking-you/",
    "votes": 5,
    "posted": "Nov 3, 2016 8:44:28 PM"
  },
  {
    "id": "12867273",
    "timestamp": "Nov 4, 2016 3:14:08 AM",
    "topic": "Our units of measurement are finally about to get an upgrade",
    "url": "http://www.sciencealert.com/our-units-of-measurement-are-finally-getting-an-upgrade",
    "votes": 3,
    "posted": "Nov 3, 2016 8:41:44 PM"
  },
  {
    "id": "12867243",
    "timestamp": "Nov 5, 2016 11:28:45 PM",
    "topic": "Mars Opportunity Rover: Driving the Jet Propulsion Lab\u0027s Mars Rover. Again",
    "url": "http://www.caranddriver.com/reviews/we-drive-the-mars-opportunity-rover-review",
    "votes": 3,
    "posted": "Nov 3, 2016 8:39:10 PM"
  },
  {
    "id": "12867221",
    "timestamp": "Nov 3, 2016 8:53:31 PM",
    "topic": "A Conductor of Evolution’s Subtle Symphony",
    "url": "https://www.quantamagazine.org/20161103-richard-lenski-interview-evolution/",
    "votes": 3,
    "posted": "Nov 3, 2016 8:36:24 PM"
  },
  {
    "id": "12867199",
    "timestamp": "Nov 3, 2016 8:33:29 PM",
    "topic": "Tesorio (YC S15) Is Hiring Senior Back End and Full Stack Engineers",
    "url": "https://www.tesorio.com/careers/",
    "votes": 1,
    "posted": "Nov 3, 2016 8:32:55 PM"
  },
  {
    "id": "12867123",
    "timestamp": "Nov 3, 2016 8:43:30 PM",
    "topic": "Annotating Michael Nielsen\u0027s Book on Deep Learning: Chapter 1",
    "url": "http://fermatslibrary.com/s/using-neural-nets-to-recognize-handwritten-digits",
    "votes": 8,
    "posted": "Nov 3, 2016 8:24:23 PM"
  },
  {
    "id": "12867109",
    "timestamp": "Nov 3, 2016 9:43:38 PM",
    "topic": "Instacart CEO: Some Workers Must Earn Less for the Company to Grow",
    "url": "https://www.buzzfeed.com/carolineodonovan/instacart-ceo-some-workers-must-earn-less-for-the-company-to",
    "votes": 4,
    "posted": "Nov 3, 2016 8:22:34 PM"
  },
  {
    "id": "12866974",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "List of silicon valley startups that are about to grow fast",
    "url": "http://www.yodas.com/hyper",
    "votes": 7,
    "posted": "Nov 3, 2016 8:07:24 PM"
  },
  {
    "id": "12866943",
    "timestamp": "Nov 3, 2016 8:23:28 PM",
    "topic": "Show HN: Sodaphonic – record and edit audio in the browser",
    "url": "https://sodaphonic.com",
    "votes": 4,
    "posted": "Nov 3, 2016 8:04:14 PM"
  },
  {
    "id": "12866784",
    "timestamp": "Nov 3, 2016 7:53:25 PM",
    "topic": "Apple Kills the Best MacBook Pro in the World",
    "url": "http://www.forbes.com/sites/ewanspence/2016/10/27/apple-kills-best-macbook-pro/#58f2206b39bf",
    "votes": 3,
    "posted": "Nov 3, 2016 7:48:43 PM"
  },
  {
    "id": "12866747",
    "timestamp": "Nov 3, 2016 8:03:26 PM",
    "topic": "Apollo Client 0.5",
    "url": "https://dev-blog.apollodata.com/apollo-client-0-5-f1eb3f122ace",
    "votes": 4,
    "posted": "Nov 3, 2016 7:44:22 PM"
  },
  {
    "id": "12866723",
    "timestamp": "Nov 3, 2016 8:43:31 PM",
    "topic": "Edward Snowden\u0027s Lecture at McGill University – Nov 2nd, 2016 – Start ±1:16:20",
    "url": "https://www.youtube.com/watch?v\u003d4x8ZI0IaInE",
    "votes": 5,
    "posted": "Nov 3, 2016 7:41:53 PM"
  },
  {
    "id": "12866695",
    "timestamp": "Nov 3, 2016 8:33:29 PM",
    "topic": "Ask HN: What is a “boring” web stack?",
    "votes": 7,
    "posted": "Nov 3, 2016 7:38:58 PM"
  },
  {
    "id": "12866629",
    "timestamp": "Nov 3, 2016 8:23:28 PM",
    "topic": "New Macbook Pro can\u0027t walk and chew gum at same time (watch wifi and USB \u003d fail)",
    "url": "https://www.youtube.com/watch?v\u003dNYVjIjBMx6o",
    "votes": 4,
    "posted": "Nov 3, 2016 7:33:31 PM"
  },
  {
    "id": "12866553",
    "timestamp": "Nov 3, 2016 8:43:30 PM",
    "topic": "Curiosity Mars Rover Checks Odd-Looking Iron Meteorite",
    "url": "http://www.jpl.nasa.gov/news/news.php?feature\u003d6667",
    "votes": 4,
    "posted": "Nov 3, 2016 7:25:17 PM"
  },
  {
    "id": "12866538",
    "timestamp": "Nov 3, 2016 8:33:29 PM",
    "topic": "Show HN: Quick JavaScript Tetris – Based on Yesterday\u0027s Show HN",
    "url": "https://github.com/sacert/Quick-Tetris",
    "votes": 3,
    "posted": "Nov 3, 2016 7:23:53 PM"
  },
  {
    "id": "12866532",
    "timestamp": "Nov 4, 2016 12:23:54 AM",
    "topic": "Show HN: Building a Deep Learning Powered GIF Search Engine",
    "url": "https://medium.com/@zan2434/building-a-deep-learning-powered-gif-search-engine-a3eb309d7525#.q6sm3hobp",
    "votes": 11,
    "posted": "Nov 3, 2016 7:22:58 PM"
  },
  {
    "id": "12866393",
    "timestamp": "Nov 4, 2016 5:25:20 PM",
    "topic": "Natural Selection: How a New Age Hustler Sold the Sound of the World",
    "url": "http://pitchfork.com/features/cover-story/9971-natural-selection-how-a-new-age-hustler-sold-the-sound-of-the-world/",
    "votes": 3,
    "posted": "Nov 3, 2016 7:06:57 PM"
  },
  {
    "id": "12866328",
    "timestamp": "Nov 3, 2016 8:33:29 PM",
    "topic": "46% of 2015 Tech IPOs Are Underwater, 62% Under Their First Day Closes",
    "url": "https://mattermark.com/46-2015-tech-ipos-underwater-62-first-day-closes/",
    "votes": 4,
    "posted": "Nov 3, 2016 7:00:04 PM"
  },
  {
    "id": "12866160",
    "timestamp": "Nov 5, 2016 4:26:23 AM",
    "topic": "Ask HN: How do I turn a major SV job offer to an offer elsewhere?",
    "votes": 7,
    "posted": "Nov 3, 2016 6:42:03 PM"
  },
  {
    "id": "12866156",
    "timestamp": "Nov 3, 2016 7:33:22 PM",
    "topic": "Introducing Unified Update Platform (UUP)",
    "url": "https://blogs.windows.com/windowsexperience/2016/11/03/introducing-unified-update-platform-uup/",
    "votes": 4,
    "posted": "Nov 3, 2016 6:41:45 PM"
  },
  {
    "id": "12866033",
    "timestamp": "Nov 3, 2016 9:13:34 PM",
    "topic": "Introducing Operators: Putting Operational Knowledge into Software on Kubernetes",
    "url": "https://coreos.com/blog/introducing-operators.html",
    "votes": 5,
    "posted": "Nov 3, 2016 6:29:37 PM"
  },
  {
    "id": "12866023",
    "timestamp": "Nov 4, 2016 10:45:52 PM",
    "topic": "Google Home Review: Google\u0027s Take on Amazon\u0027s Echo",
    "url": "http://arstechnica.com/gadgets/2016/11/google-home-review-a-step-forward-for-hotwords-a-step-backward-in-capability/",
    "votes": 4,
    "posted": "Nov 3, 2016 6:28:33 PM"
  },
  {
    "id": "12865998",
    "timestamp": "Nov 3, 2016 7:13:21 PM",
    "topic": "Web fonts, boy, I don\u0027t know",
    "url": "http://meowni.ca/posts/web-fonts/",
    "votes": 3,
    "posted": "Nov 3, 2016 6:25:32 PM"
  },
  {
    "id": "12865971",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "New Research Points the Finger at Employers for the Widespread Talent Shortage",
    "url": "https://www.fastcompany.com/3065019/new-research-points-the-finger-at-employers-for-the-widespread-talent-shortage",
    "votes": 4,
    "posted": "Nov 3, 2016 6:23:07 PM"
  },
  {
    "id": "12865922",
    "timestamp": "Nov 3, 2016 6:53:19 PM",
    "topic": "The Food Delivery Death Star",
    "url": "https://medium.com/@review/the-food-delivery-death-star-85f9a121313",
    "votes": 9,
    "posted": "Nov 3, 2016 6:18:50 PM"
  },
  {
    "id": "12865834",
    "timestamp": "Nov 3, 2016 6:13:13 PM",
    "topic": "Visual Studio Code October 2016 1.7.1",
    "url": "http://code.visualstudio.com/updates/v1_7#_171-recovery-build",
    "votes": 5,
    "posted": "Nov 3, 2016 6:09:18 PM"
  },
  {
    "id": "12865809",
    "timestamp": "Nov 3, 2016 9:23:36 PM",
    "topic": "Putin Grants Russian Citizenship to Steven Seagal",
    "url": "http://www.foxnews.com/entertainment/2016/11/03/putin-grants-russian-citizenship-to-steven-seagal.html",
    "votes": 3,
    "posted": "Nov 3, 2016 6:06:24 PM"
  },
  {
    "id": "12865798",
    "timestamp": "Nov 4, 2016 1:24:00 AM",
    "topic": "Ask HN: Why do institutions choose buggy enterprise cms over open source ones",
    "votes": 5,
    "posted": "Nov 3, 2016 6:05:07 PM"
  }
];