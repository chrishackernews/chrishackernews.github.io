var newsArray = [
  {
    "id": "12893123",
    "timestamp": "Nov 7, 2016 7:12:40 PM",
    "topic": "Butterfly Effects: Good Ballot Design Is Critical for Democracy",
    "url": "http://99percentinvisible.org/episode/butterfly-effects/",
    "votes": 3,
    "posted": "Nov 7, 2016 6:51:08 PM"
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
    "id": "12892975",
    "timestamp": "Nov 7, 2016 7:02:39 PM",
    "topic": "You Don’t Need a Master Plan You Just Need to Start",
    "url": "http://bryce.vc/post/152734313405/you-dont-need-a-master-plan-you-just-need-to",
    "votes": 3,
    "posted": "Nov 7, 2016 6:38:08 PM"
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
  },
  {
    "id": "12865705",
    "timestamp": "Nov 4, 2016 4:55:17 PM",
    "topic": "How to get the wine you really want",
    "url": "http://www.economist.com/news/science-and-technology/21709491-how-get-wine-you-really-want-war-terroir",
    "votes": 3,
    "posted": "Nov 3, 2016 5:56:07 PM"
  },
  {
    "id": "12865698",
    "timestamp": "Nov 3, 2016 6:03:12 PM",
    "topic": "Tech firms shell out to hire and hoard talent",
    "url": "http://www.economist.com/news/business/21709574-tech-firms-battle-hire-and-hoard-talented-employees-huge-pay-packages-silicon-valley?cid1\u003dcust/ednew/n/bl/n/2016113n/owned/n/n/nwl/n/n/NA/8027532/n",
    "votes": 3,
    "posted": "Nov 3, 2016 5:55:14 PM"
  },
  {
    "id": "12865675",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "The Biggest Supermoon in Nearly 70 Years",
    "url": "http://sciencebulletin.org/archives/7310.html",
    "votes": 4,
    "posted": "Nov 3, 2016 5:53:12 PM"
  },
  {
    "id": "12865628",
    "timestamp": "Nov 3, 2016 9:03:32 PM",
    "topic": "Tech firms shell out to hire and hoard talent",
    "url": "http://www.economist.com/news/business/21709574-tech-firms-battle-hire-and-hoard-talented-employees-huge-pay-packages-silicon-valley",
    "votes": 4,
    "posted": "Nov 3, 2016 5:48:10 PM"
  },
  {
    "id": "12865627",
    "timestamp": "Nov 3, 2016 9:53:39 PM",
    "topic": "Adobe Sensei – Unified artificial intelligence and machine learning",
    "url": "http://www.adobe.com/sensei.html",
    "votes": 5,
    "posted": "Nov 3, 2016 5:48:00 PM"
  },
  {
    "id": "12865321",
    "timestamp": "Nov 3, 2016 7:03:20 PM",
    "topic": "The YC Effect: Charting How YC Makes Your Company Better",
    "url": "http://themacro.com/articles/2016/11/the-yc-effect/",
    "votes": 4,
    "posted": "Nov 3, 2016 5:19:39 PM"
  },
  {
    "id": "12865169",
    "timestamp": "Nov 3, 2016 5:53:11 PM",
    "topic": "Ubuntu Core 16 delivers foundation for secure IoT",
    "url": "https://insights.ubuntu.com/2016/11/03/ubuntu-core-16-delivers-foundation-for-secure-iot/",
    "votes": 3,
    "posted": "Nov 3, 2016 5:06:20 PM"
  },
  {
    "id": "12865166",
    "timestamp": "Nov 3, 2016 5:53:11 PM",
    "topic": "Mars: Inside the High-Risk, High-Stakes Race to the Red Planet",
    "url": "http://www.nationalgeographic.com/magazine/2016/11/spacex-elon-musk-exploring-mars-planets-space-science/",
    "votes": 3,
    "posted": "Nov 3, 2016 5:06:01 PM"
  },
  {
    "id": "12865133",
    "timestamp": "Nov 3, 2016 5:23:09 PM",
    "topic": "MacBook Pro 2016 first look: One week later",
    "url": "http://www.imore.com/macbook-pro",
    "votes": 3,
    "posted": "Nov 3, 2016 5:02:31 PM"
  },
  {
    "id": "12864862",
    "timestamp": "Nov 3, 2016 7:13:21 PM",
    "topic": "Show HN: HTMLComponent – Component-Based UIs Using Only ES6 and Custom Elements",
    "url": "https://github.com/felipeccastro/html-component/",
    "votes": 6,
    "posted": "Nov 3, 2016 4:38:29 PM"
  },
  {
    "id": "12864806",
    "timestamp": "Nov 3, 2016 4:53:06 PM",
    "topic": "Why Slack may live to regret its smarmy letter to Microsoft",
    "url": "http://www.theverge.com/2016/11/3/13504932/slack-microsoft-teams-letter-wtf",
    "votes": 8,
    "posted": "Nov 3, 2016 4:32:37 PM"
  },
  {
    "id": "12864753",
    "timestamp": "Nov 3, 2016 4:33:04 PM",
    "topic": "Fullstack Academy (YC S12) is hiring developers who love teaching",
    "url": "https://fullstackacademy.workable.com/jobs/186349",
    "votes": 1,
    "posted": "Nov 3, 2016 4:28:11 PM"
  },
  {
    "id": "12864727",
    "timestamp": "Nov 3, 2016 4:43:05 PM",
    "topic": "The Steve Jobs email that outlined Apple’s strategy a year before his death",
    "url": "http://qz.com/196005/the-steve-jobs-email-that-outlined-apples-strategy-a-year-before-his-death/",
    "votes": 5,
    "posted": "Nov 3, 2016 4:25:41 PM"
  },
  {
    "id": "12864704",
    "timestamp": "Nov 3, 2016 4:43:05 PM",
    "topic": "FLV Player in JavaScript",
    "url": "https://github.com/Bilibili/flv.js",
    "votes": 3,
    "posted": "Nov 3, 2016 4:23:02 PM"
  },
  {
    "id": "12864673",
    "timestamp": "Nov 3, 2016 5:33:10 PM",
    "topic": "Wherefore art thou Macintosh?",
    "url": "http://www.asymco.com/2016/11/02/wherefore-art-thou-macintosh/",
    "votes": 4,
    "posted": "Nov 3, 2016 4:19:11 PM"
  },
  {
    "id": "12864592",
    "timestamp": "Nov 4, 2016 6:35:27 PM",
    "topic": "Ask HN: Have You Ever Hired Developers to Work on Your Personal Projects?",
    "votes": 6,
    "posted": "Nov 3, 2016 4:11:43 PM"
  },
  {
    "id": "12864475",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "Mega Commuters in the U.S [pdf]",
    "url": "https://www.census.gov/hhes/commuting/files/2012/Paper-Poster_Megacommuting%20in%20the%20US.pdf",
    "votes": 7,
    "posted": "Nov 3, 2016 3:59:29 PM"
  },
  {
    "id": "12864429",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "MicroG Project: A re-implementation of Google\u0027s Android apps and libraries",
    "url": "https://microg.org/?\u003d",
    "votes": 3,
    "posted": "Nov 3, 2016 3:55:01 PM"
  },
  {
    "id": "12864389",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "Securing PostgreSQL [pdf]",
    "url": "http://thebuild.com/presentations/pgconfeu-2016-securing-postgresql.pdf",
    "votes": 5,
    "posted": "Nov 3, 2016 3:50:46 PM"
  },
  {
    "id": "12864303",
    "timestamp": "Nov 4, 2016 6:24:24 AM",
    "topic": "Fourier Transform as Feature Extraction for Malware Classification [pdf]",
    "url": "http://worldcomp-proceedings.com/proc/p2014/SAM9743.pdf",
    "votes": 4,
    "posted": "Nov 3, 2016 3:42:28 PM"
  },
  {
    "id": "12864151",
    "timestamp": "Nov 3, 2016 3:32:59 PM",
    "topic": "Silicon Valley’s “megacommute” even worse than L.A",
    "url": "http://www.mercurynews.com/2016/11/02/job-boom-intensifies-traffic-and-housing-woes/",
    "votes": 5,
    "posted": "Nov 3, 2016 3:25:39 PM"
  },
  {
    "id": "12864032",
    "timestamp": "Nov 3, 2016 5:13:08 PM",
    "topic": "The Power of Ten – Rules for Writing Safety Critical Code",
    "url": "http://spinroot.com/p10/",
    "votes": 3,
    "posted": "Nov 3, 2016 3:10:16 PM"
  },
  {
    "id": "12863898",
    "timestamp": "Nov 3, 2016 3:53:00 PM",
    "topic": "The Coming War in the Middle East",
    "url": "http://www.hoover.org/research/coming-war-middle-east",
    "votes": 12,
    "posted": "Nov 3, 2016 2:50:03 PM"
  },
  {
    "id": "12863820",
    "timestamp": "Nov 3, 2016 7:53:25 PM",
    "topic": "Show HN: Browse dead and dying startups",
    "url": "http://deathwatch.io/",
    "votes": 6,
    "posted": "Nov 3, 2016 2:40:02 PM"
  },
  {
    "id": "12863779",
    "timestamp": "Nov 3, 2016 6:23:15 PM",
    "topic": "A.I. accurately predicted the full baseball post-season back in July",
    "url": "http://www.marketwired.com/press-release/ai-makes-yet-another-remarkable-prediction-2172570.htm",
    "votes": 9,
    "posted": "Nov 3, 2016 2:35:11 PM"
  },
  {
    "id": "12863699",
    "timestamp": "Nov 3, 2016 2:52:55 PM",
    "topic": "BearSSL",
    "url": "https://bearssl.org/",
    "votes": 10,
    "posted": "Nov 3, 2016 2:23:29 PM"
  },
  {
    "id": "12863565",
    "timestamp": "Nov 3, 2016 7:33:22 PM",
    "topic": "Browsers, not apps, are the future of mobile",
    "url": "https://blog.intercom.com/browsers-not-apps-are-the-future-of-mobile/",
    "votes": 5,
    "posted": "Nov 3, 2016 2:01:41 PM"
  },
  {
    "id": "12863455",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "Why hardware development is hard, part 1: Verilog is weird",
    "url": "https://danluu.com/why-hardware-development-is-hard/",
    "votes": 5,
    "posted": "Nov 3, 2016 1:37:10 PM"
  },
  {
    "id": "12863079",
    "timestamp": "Nov 3, 2016 1:02:47 PM",
    "topic": "Experimental Edge-Side Mustache Processing in Varnish (Edgestash)",
    "url": "https://info.varnish-software.com/blog/edgestash",
    "votes": 3,
    "posted": "Nov 3, 2016 12:35:18 PM"
  },
  {
    "id": "12862910",
    "timestamp": "Nov 3, 2016 1:22:48 PM",
    "topic": "Scala 2.12.0 is now available",
    "url": "http://www.scala-lang.org/news/2.12.0",
    "votes": 18,
    "posted": "Nov 3, 2016 12:06:47 PM"
  },
  {
    "id": "12862894",
    "timestamp": "Nov 3, 2016 12:12:43 PM",
    "topic": "Mentat (YC S16) is hiring a software engineer",
    "url": "https://angel.co/mentatapp/jobs/172775-software-engineer",
    "votes": 1,
    "posted": "Nov 3, 2016 12:05:02 PM"
  },
  {
    "id": "12862789",
    "timestamp": "Nov 3, 2016 12:32:44 PM",
    "topic": "The secret world of microwave networks",
    "url": "http://arstechnica.co.uk/information-technology/2016/11/private-microwave-networks-financial-hft/",
    "votes": 4,
    "posted": "Nov 3, 2016 11:41:47 AM"
  },
  {
    "id": "12862741",
    "timestamp": "Nov 3, 2016 11:52:41 AM",
    "topic": "Safer to Puff, E-Cigarettes Can’t Shake Their Reputation as a Menace",
    "url": "http://www.nytimes.com/2016/11/02/health/e-cigarette-vape-njoy-bankruptcy.html",
    "votes": 3,
    "posted": "Nov 3, 2016 11:27:17 AM"
  },
  {
    "id": "12862736",
    "timestamp": "Nov 3, 2016 11:52:41 AM",
    "topic": "British Government loses Article 50 court fight",
    "url": "http://www.bbc.co.uk/news/uk-politics-37857785",
    "votes": 25,
    "posted": "Nov 3, 2016 11:26:08 AM"
  },
  {
    "id": "12862721",
    "timestamp": "Nov 3, 2016 5:53:11 PM",
    "topic": "Korg Monologue – Monophonic Analogue Synthesizer",
    "url": "http://www.korg.com/us/products/synthesizers/monologue/",
    "votes": 4,
    "posted": "Nov 3, 2016 11:23:17 AM"
  },
  {
    "id": "12862608",
    "timestamp": "Nov 3, 2016 11:02:37 AM",
    "topic": "Org mode 9.0 released",
    "url": "http://orgmode.org/Changes.html",
    "votes": 4,
    "posted": "Nov 3, 2016 10:46:50 AM"
  },
  {
    "id": "12862541",
    "timestamp": "Nov 3, 2016 2:52:55 PM",
    "topic": "Fasttext and Torch: A fasttext implementation based on Torch",
    "url": "https://github.com/kemaswill/fasttext_torch",
    "votes": 6,
    "posted": "Nov 3, 2016 10:29:30 AM"
  },
  {
    "id": "12862488",
    "timestamp": "Nov 3, 2016 10:22:34 AM",
    "topic": "Mozilla Persona will shut down later this month",
    "url": "https://wiki.mozilla.org/Identity/Persona_Shutdown_Guidelines_for_Reliers",
    "votes": 3,
    "posted": "Nov 3, 2016 10:12:12 AM"
  },
  {
    "id": "12862355",
    "timestamp": "Nov 3, 2016 10:02:32 AM",
    "topic": "Mozilla, WebKit, Chrome removing a feature to protect consumers privacy",
    "url": "http://www.bleepingcomputer.com/news/software/battery-status-api-being-removed-from-firefox-due-to-privacy-concerns/",
    "votes": 3,
    "posted": "Nov 3, 2016 9:29:26 AM"
  },
  {
    "id": "12862323",
    "timestamp": "Nov 3, 2016 12:22:44 PM",
    "topic": "The 2016 MacBook Pro reviewed: An expensive MacBook Air on the inside",
    "url": "http://arstechnica.co.uk/apple/2016/11/macbook-pro-2016-no-touch-bar-review/",
    "votes": 4,
    "posted": "Nov 3, 2016 9:18:09 AM"
  },
  {
    "id": "12862308",
    "timestamp": "Nov 3, 2016 2:02:52 PM",
    "topic": "Making high-performance batteries from junkyard scraps",
    "url": "https://news.vanderbilt.edu/2016/11/02/making-high-performance-batteries-from-junkyard-scraps/",
    "votes": 3,
    "posted": "Nov 3, 2016 9:13:33 AM"
  },
  {
    "id": "12862268",
    "timestamp": "Nov 3, 2016 9:32:29 AM",
    "topic": "Aleppo siege: UN envoy Mistura \u0027appalled\u0027 by rebel attacks",
    "url": "http://www.bbc.com/news/world-middle-east-37816938",
    "votes": 4,
    "posted": "Nov 3, 2016 9:00:52 AM"
  },
  {
    "id": "12862195",
    "timestamp": "Nov 3, 2016 9:02:26 AM",
    "topic": "Show HN: Portainer – A lightweight management UI for Docker",
    "url": "http://portainer.io",
    "votes": 5,
    "posted": "Nov 3, 2016 8:36:17 AM"
  },
  {
    "id": "12862164",
    "timestamp": "Nov 3, 2016 9:42:30 AM",
    "topic": "How Steve Jobs Became a Billionaire",
    "url": "http://fortune.com/steve-jobs-pixar-apple-lawrence-levy/",
    "votes": 7,
    "posted": "Nov 3, 2016 8:28:02 AM"
  },
  {
    "id": "12862144",
    "timestamp": "Nov 3, 2016 9:02:27 AM",
    "topic": "A Bayesian election forecast",
    "url": "http://www.slate.com/features/pkremp_forecast/report.html",
    "votes": 4,
    "posted": "Nov 3, 2016 8:19:07 AM"
  },
  {
    "id": "12862139",
    "timestamp": "Nov 3, 2016 9:02:26 AM",
    "topic": "Migrating Pinterest profiles to React",
    "url": "https://engineering.pinterest.com/blog/migrating-pinterest-profiles-react",
    "votes": 5,
    "posted": "Nov 3, 2016 8:17:48 AM"
  },
  {
    "id": "12862130",
    "timestamp": "Nov 3, 2016 8:32:24 AM",
    "topic": "For the Cost of an iPhone, You Can Now Buy a Wind Turbine That Can Power a House",
    "url": "http://theusualroutine.com/2016/11/01/cost-iphone-can-now-buy-wind-turbine-can-power-entire-house-lifetime/",
    "votes": 4,
    "posted": "Nov 3, 2016 8:15:10 AM"
  },
  {
    "id": "12862061",
    "timestamp": "Nov 3, 2016 12:12:43 PM",
    "topic": "Razer Blade Stealth review",
    "url": "http://www.notebookcheck.net/Razer-Blade-Stealth-i7-7500U-Notebook-Review.182060.0.html",
    "votes": 3,
    "posted": "Nov 3, 2016 7:54:55 AM"
  },
  {
    "id": "12861920",
    "timestamp": "Nov 3, 2016 7:12:17 AM",
    "topic": "Streak (YC S11) Hiring a Customer Solutions Engineer",
    "votes": 1,
    "posted": "Nov 3, 2016 7:09:33 AM"
  },
  {
    "id": "12861855",
    "timestamp": "Nov 3, 2016 7:42:20 AM",
    "topic": "New Alzheimer’s Drug Clears Milestone in Human Clinical Trial",
    "url": "https://www.scientificamerican.com/article/new-alzheimer-s-drug-clears-milestone-in-human-clinical-trial1/",
    "votes": 4,
    "posted": "Nov 3, 2016 6:45:07 AM"
  },
  {
    "id": "12861823",
    "timestamp": "Nov 3, 2016 7:22:18 AM",
    "topic": "Curse broken Cubs win World Series with epic Game 7",
    "url": "http://www.msn.com/en-us/sports/mlb/curse-broken-cubs-win-world-series-with-epic-game-7/ar-AAjOjB4?OCID\u003dansmsnnews11",
    "votes": 8,
    "posted": "Nov 3, 2016 6:33:52 AM"
  },
  {
    "id": "12861815",
    "timestamp": "Nov 3, 2016 7:22:18 AM",
    "topic": "Too Many Startups Like Playing Startup",
    "url": "https://www.groovehq.com/blog/startups-playing-startup?utm_campaign\u003dMattermark+Daily\u0026utm_source\u003dhs_email\u0026utm_medium\u003demail\u0026utm_content\u003d36789099\u0026_hsenc\u003dp2ANqtz-9NgMcFUfuqycnQ_uT255UK9gZGEuMIpquw8R4WevPm5IgL0w9k8eSWlTm7ujNJ47OT0tbPhm0HNABuTZi9gk2c5NcXOA\u0026_hsmi\u003d36789099",
    "votes": 11,
    "posted": "Nov 3, 2016 6:30:33 AM"
  },
  {
    "id": "12861699",
    "timestamp": "Nov 3, 2016 10:42:36 AM",
    "topic": "Ask HN: What would you do on your sabbatical?",
    "votes": 5,
    "posted": "Nov 3, 2016 5:56:13 AM"
  },
  {
    "id": "12861635",
    "timestamp": "Nov 3, 2016 6:32:14 AM",
    "topic": "JavaScript and the Web Platform with Brendan Eich",
    "url": "https://javascriptair.com/episodes/2016-11-02/",
    "votes": 3,
    "posted": "Nov 3, 2016 5:39:53 AM"
  },
  {
    "id": "12861512",
    "timestamp": "Nov 3, 2016 7:12:17 AM",
    "topic": "How Bayesian Inference Works",
    "url": "http://www.datasciencecentral.com/profiles/blogs/how-bayesian-inference-works",
    "votes": 5,
    "posted": "Nov 3, 2016 5:06:21 AM"
  },
  {
    "id": "12861492",
    "timestamp": "Nov 3, 2016 5:32:09 AM",
    "topic": "How Uber Manages a Million Writes per Second",
    "url": "http://highscalability.com/blog/2016/9/28/how-uber-manages-a-million-writes-per-second-using-mesos-and.html",
    "votes": 3,
    "posted": "Nov 3, 2016 4:59:49 AM"
  },
  {
    "id": "12861472",
    "timestamp": "Nov 3, 2016 5:12:06 AM",
    "topic": "18F, the Government in-house tech startup, losing money",
    "url": "https://www.washingtonpost.com/news/powerpost/wp/2016/11/02/why-a-federal-high-tech-start-up-is-a-money-loser",
    "votes": 3,
    "posted": "Nov 3, 2016 4:52:49 AM"
  },
  {
    "id": "12861410",
    "timestamp": "Nov 3, 2016 9:02:27 AM",
    "topic": "The audacious plan to bring back supersonic flight",
    "url": "http://www.vox.com/energy-and-environment/2016/11/2/13409324/supersonic-flight-concorde",
    "votes": 3,
    "posted": "Nov 3, 2016 4:34:07 AM"
  },
  {
    "id": "12861318",
    "timestamp": "Nov 3, 2016 4:22:01 AM",
    "topic": "WOT Firefox Addon selling user data",
    "url": "http://www.ndr.de/nachrichten/netzwelt/Nackt-im-Netz-Millionen-Nutzer-ausgespaeht,nacktimnetz100.html",
    "votes": 9,
    "posted": "Nov 3, 2016 4:02:56 AM"
  },
  {
    "id": "12861305",
    "timestamp": "Nov 3, 2016 5:42:10 AM",
    "topic": "Writing more legible SQL",
    "url": "http://www.craigkerstiens.com/2016/01/08/writing-better-sql/",
    "votes": 8,
    "posted": "Nov 3, 2016 4:00:30 AM"
  },
  {
    "id": "12861119",
    "timestamp": "Nov 3, 2016 4:52:04 AM",
    "topic": "In the future, we will all be rental serfs",
    "url": "http://ftalphaville.ft.com/2016/11/02/2178646/in-the-future-we-will-all-be-rental-serfs/",
    "votes": 3,
    "posted": "Nov 3, 2016 3:19:51 AM"
  },
  {
    "id": "12861113",
    "timestamp": "Nov 3, 2016 3:21:56 AM",
    "topic": "iCracked (YC W12) Is Hiring Lead Engineers and Product Managers",
    "url": "https://www.icracked.com/careers",
    "votes": 1,
    "posted": "Nov 3, 2016 3:18:42 AM"
  },
  {
    "id": "12861100",
    "timestamp": "Nov 3, 2016 3:31:57 AM",
    "topic": "Pew Research: Donald Trump voters are more tolerant than Hillary Clinton voters",
    "url": "http://www.pewresearch.org/fact-tank/2016/11/01/its-harder-for-clinton-supporters-to-respect-trump-backers-than-vice-versa/",
    "votes": 5,
    "posted": "Nov 3, 2016 3:16:16 AM"
  },
  {
    "id": "12861097",
    "timestamp": "Nov 3, 2016 4:12:00 AM",
    "topic": "How the politics of debt explains everything",
    "url": "http://theweek.com/articles/657252/how-politics-debt-explains-everything",
    "votes": 4,
    "posted": "Nov 3, 2016 3:16:01 AM"
  },
  {
    "id": "12861053",
    "timestamp": "Nov 3, 2016 6:52:15 AM",
    "topic": "Why are some of the ugliest sites on the Web also the most popular?",
    "url": "http://thenextweb.com/dd/2016/02/17/why-are-some-of-the-ugliest-sites-on-the-web-also-the-most-popular/",
    "votes": 8,
    "posted": "Nov 3, 2016 3:09:27 AM"
  },
  {
    "id": "12860994",
    "timestamp": "Nov 3, 2016 4:32:02 AM",
    "topic": "I’m a Venture Backed Startup Founder and I Just Had a Baby",
    "url": "https://medium.com/@adi.zelnik.nouriel/im-a-venture-backed-startup-founder-and-i-just-had-a-baby-omg-25efb90af7bd#.semniirz8",
    "votes": 4,
    "posted": "Nov 3, 2016 2:54:25 AM"
  },
  {
    "id": "12860970",
    "timestamp": "Nov 3, 2016 4:12:00 AM",
    "topic": "Notes on my full-time testing of 7 Dropbox alternatives (2015)",
    "url": "https://vxlabs.com/2015/03/29/notes-testing-7-dropbox-alternatives/",
    "votes": 4,
    "posted": "Nov 3, 2016 2:47:03 AM"
  },
  {
    "id": "12860865",
    "timestamp": "Nov 3, 2016 3:01:55 AM",
    "topic": "Dear Microsoft [from Slack]",
    "url": "https://slackhq.com/dear-microsoft-8d20965d2849",
    "votes": 4,
    "posted": "Nov 3, 2016 2:20:37 AM"
  },
  {
    "id": "12860860",
    "timestamp": "Nov 3, 2016 3:31:57 AM",
    "topic": "Oldest known evidence of Aboriginal settlement in Australia found (49,000 years)",
    "url": "http://www.abc.net.au/news/2016-11-03/rock-shelter-shows-early-aboriginal-settlement-in-arid-australia/7983864",
    "votes": 3,
    "posted": "Nov 3, 2016 2:19:21 AM"
  },
  {
    "id": "12860834",
    "timestamp": "Nov 3, 2016 2:02:52 PM",
    "topic": "Why America Needs India\u0027s Rockets",
    "url": "https://www.bloomberg.com/view/articles/2016-11-01/why-america-needs-india-s-rockets",
    "votes": 5,
    "posted": "Nov 3, 2016 2:13:45 AM"
  },
  {
    "id": "12860806",
    "timestamp": "Nov 3, 2016 2:41:53 AM",
    "topic": "Visual Studio Code breaks npmjs.org, forced to rollback",
    "url": "https://code.visualstudio.com/updates#_17-rollback",
    "votes": 6,
    "posted": "Nov 3, 2016 2:07:03 AM"
  },
  {
    "id": "12860799",
    "timestamp": "Nov 3, 2016 4:12:00 AM",
    "topic": "Noam Chomsky and the Bicycle Theory",
    "url": "http://www.nytimes.com/2016/11/06/education/edlife/on-being-noam-chomsky.html",
    "votes": 5,
    "posted": "Nov 3, 2016 2:04:47 AM"
  },
  {
    "id": "12860790",
    "timestamp": "Nov 3, 2016 2:02:52 PM",
    "topic": "The Meaning of the Bones: Does Shakespeare really have “universal appeal”?",
    "url": "http://www.theparisreview.org/blog/2016/11/02/the-meaning-of-the-bones/",
    "votes": 4,
    "posted": "Nov 3, 2016 2:02:58 AM"
  },
  {
    "id": "12860788",
    "timestamp": "Nov 3, 2016 1:42:50 PM",
    "topic": "Supercomputer comes up with a profile of dark matter",
    "url": "http://phys.org/news/2016-11-supercomputer-profile-dark-standard-extension.html",
    "votes": 4,
    "posted": "Nov 3, 2016 2:01:59 AM"
  },
  {
    "id": "12860729",
    "timestamp": "Nov 3, 2016 3:01:55 AM",
    "topic": "Copyright Office Sets Trap for Unwary Website Owners",
    "url": "https://www.eff.org/deeplinks/2016/11/copyright-office-sets-trap-unwary-website-owners",
    "votes": 4,
    "posted": "Nov 3, 2016 1:50:27 AM"
  },
  {
    "id": "12860727",
    "timestamp": "Nov 3, 2016 2:21:51 AM",
    "topic": "The disturbing Facebook scandal we\u0027re all ignoring",
    "url": "http://www.businessinsider.com/facebook-scandal-we-ignore-2016-11",
    "votes": 3,
    "posted": "Nov 3, 2016 1:50:26 AM"
  },
  {
    "id": "12860655",
    "timestamp": "Nov 3, 2016 1:52:51 PM",
    "topic": "He Loved Opium, Murder and Wordsworth",
    "url": "http://www.nytimes.com/2016/10/30/books/review/he-loved-opium-murder-and-wordsworth.html?_r\u003d0",
    "votes": 7,
    "posted": "Nov 3, 2016 1:33:53 AM"
  },
  {
    "id": "12860602",
    "timestamp": "Nov 3, 2016 2:01:49 AM",
    "topic": "Show HN: SkateJS – a cross framework web components based library",
    "url": "https://github.com/skatejs/skatejs",
    "votes": 4,
    "posted": "Nov 3, 2016 1:23:27 AM"
  },
  {
    "id": "12860504",
    "timestamp": "Nov 5, 2016 10:58:42 PM",
    "topic": "Deep in New Zealand",
    "url": "http://www.nybooks.com/daily/2016/10/27/deep-in-new-zealand-going-bush/",
    "votes": 3,
    "posted": "Nov 3, 2016 1:02:28 AM"
  },
  {
    "id": "12860427",
    "timestamp": "Nov 3, 2016 4:12:00 AM",
    "topic": "Car insurance rates to be determined by Facebook posts",
    "url": "https://thestack.com/world/2016/11/02/admiral-facebook-car-insurance/",
    "votes": 3,
    "posted": "Nov 3, 2016 12:48:55 AM"
  },
  {
    "id": "12860413",
    "timestamp": "Nov 3, 2016 6:22:13 AM",
    "topic": "Getting what you paid for? Benchmark your VPS in 5 mins",
    "url": "https://haydenjames.io/web-host-doesnt-want-read-benchmark-vps/",
    "votes": 6,
    "posted": "Nov 3, 2016 12:45:49 AM"
  },
  {
    "id": "12860368",
    "timestamp": "Nov 3, 2016 2:41:53 AM",
    "topic": "Germany unveils zero-emissions train that only emits steam",
    "url": "http://www.independent.co.uk/news/world/europe/germany-unveils-zero-emissions-train-only-emits-steam-lower-saxony-hydrogen-powered-a7391581.html",
    "votes": 3,
    "posted": "Nov 3, 2016 12:35:10 AM"
  },
  {
    "id": "12860281",
    "timestamp": "Nov 3, 2016 1:21:46 AM",
    "topic": "When You Need Blockchain vs. Database",
    "url": "https://pbs.twimg.com/media/Cn2zMbTWYAAQA6i.png",
    "votes": 4,
    "posted": "Nov 3, 2016 12:18:32 AM"
  },
  {
    "id": "12860201",
    "timestamp": "Nov 3, 2016 1:31:47 AM",
    "topic": "Fitbit crashes 30% after missing on sales",
    "url": "http://uk.businessinsider.com/fitbit-shares-fall-after-q3-earnings-2016-11",
    "votes": 4,
    "posted": "Nov 3, 2016 12:04:46 AM"
  },
  {
    "id": "12860160",
    "timestamp": "Nov 3, 2016 12:21:41 AM",
    "topic": "Phil Schiller Inital Response to MBP Criticism",
    "url": "http://www.independent.co.uk/life-style/gadgets-and-tech/features/apple-macbook-pro-new-philip-schiller-interview-phil-iphone-ios-criticism-a7393156.html",
    "votes": 3,
    "posted": "Nov 2, 2016 11:58:54 PM"
  },
  {
    "id": "12860083",
    "timestamp": "Nov 2, 2016 11:51:38 PM",
    "topic": "AptDeco Is Hiring Full Stack Engineers and General Manager in NYC and DC",
    "url": "http://www.aptdeco.com/jobs",
    "votes": 1,
    "posted": "Nov 2, 2016 11:46:19 PM"
  },
  {
    "id": "12859989",
    "timestamp": "Nov 3, 2016 12:51:44 AM",
    "topic": "How This Poster in a Women\u0027s Restroom at a Bar Cleverly Combats Sexual Assault",
    "url": "http://www.adweek.com/adfreak/how-poster-womens-restroom-bar-cleverly-combats-sexual-assault-174370",
    "votes": 3,
    "posted": "Nov 2, 2016 11:31:01 PM"
  },
  {
    "id": "12859896",
    "timestamp": "Nov 3, 2016 1:31:47 AM",
    "topic": "How YC-Backed Vote.org Could Change Our Flawed Election System",
    "url": "https://backchannel.com/the-simple-secret-weapon-that-could-change-elections-9e51f95038df#.uyl8q5weq",
    "votes": 6,
    "posted": "Nov 2, 2016 11:14:46 PM"
  },
  {
    "id": "12859867",
    "timestamp": "Nov 3, 2016 12:01:39 AM",
    "topic": "Ask HN: How does unlimited vacation policy work in your company?",
    "votes": 3,
    "posted": "Nov 2, 2016 11:09:39 PM"
  },
  {
    "id": "12859806",
    "timestamp": "Nov 3, 2016 4:32:02 AM",
    "topic": "India’s digital payments industry will grow to $500.0B by 2020 [pdf]",
    "url": "http://image-src.bcg.com/BCG_COM/BCG-Google%20Digital%20Payments%202020-July%202016_tcm21-39245.pdf",
    "votes": 5,
    "posted": "Nov 2, 2016 11:03:52 PM"
  },
  {
    "id": "12859726",
    "timestamp": "Nov 3, 2016 2:21:51 AM",
    "topic": "Piper Disney Pixar 1080p [video]",
    "url": "https://vimeo.com/189901272",
    "votes": 4,
    "posted": "Nov 2, 2016 10:56:13 PM"
  },
  {
    "id": "12859436",
    "timestamp": "Nov 2, 2016 11:51:38 PM",
    "topic": "Nest\u0027s economics don\u0027t work. Why IoT devices should be sold as services",
    "url": "https://medium.com/@dconrad/why-iot-devices-should-be-sold-as-services-f73951871006",
    "votes": 3,
    "posted": "Nov 2, 2016 10:25:07 PM"
  },
  {
    "id": "12859351",
    "timestamp": "Nov 2, 2016 10:51:32 PM",
    "topic": "Things I Wish I\u0027d Known At 20",
    "url": "http://www.teejayvanslyke.com/2016/11/02/what-i-wish-id-known-at-20/",
    "votes": 5,
    "posted": "Nov 2, 2016 10:14:59 PM"
  },
  {
    "id": "12859347",
    "timestamp": "Nov 2, 2016 10:31:29 PM",
    "topic": "Visual Studio Code October Update – 1.7",
    "url": "https://code.visualstudio.com/updates/v1_7",
    "votes": 20,
    "posted": "Nov 2, 2016 10:14:46 PM"
  },
  {
    "id": "12859152",
    "timestamp": "Nov 2, 2016 10:31:29 PM",
    "topic": "The new Uber App",
    "url": "https://www.youtube.com/watch?v\u003dI1DdoN6NLDg",
    "votes": 4,
    "posted": "Nov 2, 2016 9:51:07 PM"
  },
  {
    "id": "12859042",
    "timestamp": "Nov 2, 2016 11:31:36 PM",
    "topic": "Ask HN: Any devs who want to partner up with a designer to spice up Linux Apps?",
    "votes": 4,
    "posted": "Nov 2, 2016 9:41:03 PM"
  },
  {
    "id": "12858993",
    "timestamp": "Nov 2, 2016 10:01:25 PM",
    "topic": "Facebook Q3 2016 Results",
    "url": "https://investor.fb.com/investor-news/press-release-details/2016/Facebook-Reports-Third-Quarter-2016-Results/default.aspx",
    "votes": 6,
    "posted": "Nov 2, 2016 9:36:46 PM"
  },
  {
    "id": "12858957",
    "timestamp": "Nov 2, 2016 10:11:27 PM",
    "topic": "Wait until insurers can see the contents of your fridge",
    "url": "https://www.theguardian.com/technology/2016/nov/02/admiral-facebook-data-insurers-internet-of-things",
    "votes": 3,
    "posted": "Nov 2, 2016 9:31:42 PM"
  },
  {
    "id": "12858913",
    "timestamp": "Nov 3, 2016 12:31:42 AM",
    "topic": "JAVA IS SUPERIOR TO REACT NATIVE IN PRACTICALLY EVERY WAY",
    "url": "http://www.codenameone.com/blog/java-is-superior-to-react-native-in-practically-every-way.html",
    "votes": 3,
    "posted": "Nov 2, 2016 9:26:43 PM"
  },
  {
    "id": "12858897",
    "timestamp": "Nov 3, 2016 2:31:52 AM",
    "topic": "Adobe’s Project Felix Uses AI to Help You Craft Hyper-Realistic 3-D Renderings",
    "url": "https://www.wired.com/2016/11/adobe-project-felix/",
    "votes": 4,
    "posted": "Nov 2, 2016 9:25:12 PM"
  },
  {
    "id": "12858890",
    "timestamp": "Nov 2, 2016 9:51:24 PM",
    "topic": "Steam bans misleading “bullshots” from its product pages",
    "url": "http://arstechnica.com/gaming/2016/11/steam-bans-misleading-bullshots-from-its-product-pages/",
    "votes": 4,
    "posted": "Nov 2, 2016 9:23:37 PM"
  },
  {
    "id": "12858826",
    "timestamp": "Nov 3, 2016 1:41:48 AM",
    "topic": "Hillary Clinton recognized as contributor to the open source project BleachBit",
    "url": "http://www.bleachbit.org/contributors",
    "votes": 7,
    "posted": "Nov 2, 2016 9:16:35 PM"
  },
  {
    "id": "12858716",
    "timestamp": "Nov 2, 2016 9:21:20 PM",
    "topic": "World\u0027s Largest Space Telescope Is Complete, Expected to Launch in 2018",
    "url": "http://www.space.com/34593-james-webb-space-telescope-complete-2018-launch.html?utm_source\u003dnotification",
    "votes": 3,
    "posted": "Nov 2, 2016 9:02:27 PM"
  },
  {
    "id": "12858689",
    "timestamp": "Nov 2, 2016 11:51:38 PM",
    "topic": "How to buy a $35,000 brand-new electric car for under $14,000",
    "url": "http://www.marketwatch.com/story/how-to-buy-a-35000-brand-new-electric-car-for-under-14000-2016-11-02",
    "votes": 4,
    "posted": "Nov 2, 2016 8:59:00 PM"
  },
  {
    "id": "12858637",
    "timestamp": "Nov 2, 2016 9:31:21 PM",
    "topic": "Tesla battery data shows path to over 500,000 miles on a single pack",
    "url": "https://electrek.co/2016/11/01/tesla-battery-degradation/",
    "votes": 4,
    "posted": "Nov 2, 2016 8:51:21 PM"
  },
  {
    "id": "12858627",
    "timestamp": "Nov 2, 2016 9:31:21 PM",
    "topic": "You can’t fix diversity in tech without fixing the technical interview",
    "url": "http://blog.interviewing.io/you-cant-fix-diversity-in-tech-without-fixing-the-technical-interview/",
    "votes": 13,
    "posted": "Nov 2, 2016 8:50:18 PM"
  },
  {
    "id": "12858480",
    "timestamp": "Nov 2, 2016 8:51:16 PM",
    "topic": "Ten Ways Your Data Project Is Going to Fail",
    "url": "http://www.martingoodson.com/ten-ways-your-data-project-is-going-to-fail/",
    "votes": 6,
    "posted": "Nov 2, 2016 8:33:27 PM"
  },
  {
    "id": "12858432",
    "timestamp": "Nov 3, 2016 3:22:58 PM",
    "topic": "Show HN: Unito – A sync engine for GitHub/JIRA/Wrike/Asana/+",
    "url": "https://unito.io/home",
    "votes": 9,
    "posted": "Nov 2, 2016 8:28:04 PM"
  },
  {
    "id": "12858382",
    "timestamp": "Nov 2, 2016 8:31:13 PM",
    "topic": "Review: The $1,499 2016 MacBook Pro is an expensive MacBook Air on the inside",
    "url": "http://m.arstechnica.com/apple/2016/11/review-cheapest-2016-macbook-pro-is-good-but-its-missing-all-the-cool-stuff/",
    "votes": 4,
    "posted": "Nov 2, 2016 8:23:36 PM"
  },
  {
    "id": "12858347",
    "timestamp": "Nov 2, 2016 8:51:16 PM",
    "topic": "Vim, 25 years since initial release",
    "url": "https://en.wikipedia.org/wiki/Vim_(text_editor)",
    "votes": 4,
    "posted": "Nov 2, 2016 8:20:07 PM"
  },
  {
    "id": "12858326",
    "timestamp": "Nov 2, 2016 9:01:18 PM",
    "topic": "Plasma Mobile: A Fully Open Phone OS from the KDE Project",
    "url": "https://plasma-mobile.org/",
    "votes": 9,
    "posted": "Nov 2, 2016 8:18:00 PM"
  },
  {
    "id": "12858137",
    "timestamp": "Nov 2, 2016 8:01:11 PM",
    "topic": "SimplyInsured (YC W13) Is Hiring Software Engineers",
    "url": "https://www.simplyinsured.com/jobs",
    "votes": 1,
    "posted": "Nov 2, 2016 8:00:06 PM"
  },
  {
    "id": "12858130",
    "timestamp": "Nov 2, 2016 11:41:37 PM",
    "topic": "How Sociopathic Capitalism Came to Rule the World",
    "url": "http://www.theatlantic.com/business/archive/2016/11/sociopathic-capitalism/506240/?single_page\u003dtrue",
    "votes": 4,
    "posted": "Nov 2, 2016 7:59:37 PM"
  },
  {
    "id": "12858127",
    "timestamp": "Nov 3, 2016 5:42:10 AM",
    "topic": "MH370 out of control and spiraling fast before crash, report says",
    "url": "http://edition.cnn.com/2016/11/02/asia/mh370-crash-landing-report/index.html",
    "votes": 6,
    "posted": "Nov 2, 2016 7:59:23 PM"
  },
  {
    "id": "12858120",
    "timestamp": "Nov 3, 2016 2:11:50 AM",
    "topic": "BART janitor grossed $270K in pay and benefits last year",
    "url": "http://www.eastbaytimes.com/2016/11/01/bart-janitor-grossed-270k-in-pay-and-benefits-last-year/",
    "votes": 6,
    "posted": "Nov 2, 2016 7:59:07 PM"
  },
  {
    "id": "12857988",
    "timestamp": "Nov 3, 2016 6:53:19 PM",
    "topic": "An Artist Is Building a Parthenon of Banned Books",
    "url": "http://www.smithsonianmag.com/smart-news/artist-building-parthenon-banned-books-180960923/?no-ist",
    "votes": 3,
    "posted": "Nov 2, 2016 7:47:27 PM"
  },
  {
    "id": "12857883",
    "timestamp": "Nov 2, 2016 10:01:25 PM",
    "topic": "The New Uber Rider App",
    "url": "http://www.theverge.com/2016/11/2/13490142/uber-app-redesign-streamline-shortcut-snapchat-filter",
    "votes": 5,
    "posted": "Nov 2, 2016 7:36:47 PM"
  },
  {
    "id": "12857869",
    "timestamp": "Nov 2, 2016 7:41:09 PM",
    "topic": "Real and Stealthy Attacks on State-Of-the-Art Face Recognition [pdf]",
    "url": "https://www.cs.cmu.edu/~sbhagava/papers/face-rec-ccs16.pdf",
    "votes": 3,
    "posted": "Nov 2, 2016 7:34:51 PM"
  },
  {
    "id": "12857792",
    "timestamp": "Nov 2, 2016 7:51:10 PM",
    "topic": "Our hiring process at Argo",
    "url": "https://dev.to/argo/our-hiring-process",
    "votes": 5,
    "posted": "Nov 2, 2016 7:27:00 PM"
  },
  {
    "id": "12857751",
    "timestamp": "Nov 2, 2016 7:41:08 PM",
    "topic": "Surface Book – It’s Easy to Switch from Mac to Surface",
    "url": "https://www.microsoft.com/en-us/surface/devices/surface-book/compare-to-mac",
    "votes": 5,
    "posted": "Nov 2, 2016 7:22:38 PM"
  },
  {
    "id": "12857738",
    "timestamp": "Nov 2, 2016 8:51:16 PM",
    "topic": "The new IFTTT is here",
    "url": "https://ifttt.com/blog/2016/11/the-new-ifttt-is-here",
    "votes": 5,
    "posted": "Nov 2, 2016 7:20:59 PM"
  },
  {
    "id": "12857736",
    "timestamp": "Nov 2, 2016 8:31:14 PM",
    "topic": "Robot consumes organic matter for power",
    "url": "http://www.dailymail.co.uk/sciencetech/article-3894132/amp/Scavenger-robot-EATS-organic-matter-Soft-bodied-foraging-droid-used-clean-contaminated-water.html",
    "votes": 3,
    "posted": "Nov 2, 2016 7:20:40 PM"
  },
  {
    "id": "12857607",
    "timestamp": "Nov 2, 2016 8:11:12 PM",
    "topic": "The Culture of Childhood: We’ve Almost Destroyed It",
    "url": "https://www.psychologytoday.com/blog/freedom-learn/201610/the-culture-childhood-we-ve-almost-destroyed-it",
    "votes": 5,
    "posted": "Nov 2, 2016 7:05:53 PM"
  },
  {
    "id": "12857592",
    "timestamp": "Nov 2, 2016 11:31:36 PM",
    "topic": "Alzheimer\u0027s treatment within reach after successful drug trial",
    "url": "https://www.theguardian.com/society/2016/nov/02/alzheimers-treatment-within-reach-after-successful-drug-trial-amyloid-plaques-bace1",
    "votes": 8,
    "posted": "Nov 2, 2016 7:04:06 PM"
  },
  {
    "id": "12857585",
    "timestamp": "Nov 3, 2016 3:22:58 PM",
    "topic": "Tangled Up in Spacetime",
    "url": "https://www.scientificamerican.com/article/tangled-up-in-spacetime/",
    "votes": 4,
    "posted": "Nov 2, 2016 7:03:41 PM"
  },
  {
    "id": "12857549",
    "timestamp": "Nov 3, 2016 12:51:44 AM",
    "topic": "Shepherding Random Numbers",
    "url": "http://inconvergent.net/shepherding-random-numbers/",
    "votes": 3,
    "posted": "Nov 2, 2016 7:00:14 PM"
  },
  {
    "id": "12857460",
    "timestamp": "Nov 2, 2016 7:11:05 PM",
    "topic": "Mobile is now the dominant source of worldwide internet usage",
    "url": "http://gs.statcounter.com/press/mobile-and-tablet-internet-usage-exceeds-desktop-for-first-time-worldwide",
    "votes": 3,
    "posted": "Nov 2, 2016 6:51:58 PM"
  },
  {
    "id": "12857404",
    "timestamp": "Nov 2, 2016 8:41:15 PM",
    "topic": "How the Internet Is Loosening Our Grip on the Truth",
    "url": "http://www.nytimes.com/2016/11/03/technology/how-the-internet-is-loosening-our-grip-on-the-truth.html",
    "votes": 3,
    "posted": "Nov 2, 2016 6:45:44 PM"
  },
  {
    "id": "12857393",
    "timestamp": "Nov 2, 2016 7:01:04 PM",
    "topic": "I tried to buy a satellite and all I got was this lousy $67,000",
    "url": "http://www.theregister.co.uk/2013/01/02/buythissatellite_project_what_happened_next/",
    "votes": 3,
    "posted": "Nov 2, 2016 6:44:04 PM"
  },
  {
    "id": "12857278",
    "timestamp": "Nov 2, 2016 10:41:30 PM",
    "topic": "A Hard Peace",
    "url": "https://nickdenton.org/a-hard-peace-e161e19bfaf",
    "votes": 3,
    "posted": "Nov 2, 2016 6:32:48 PM"
  },
  {
    "id": "12857258",
    "timestamp": "Nov 2, 2016 7:11:05 PM",
    "topic": "The NSA Chief Has a Phone for Top-Secret Messaging.  How It Works",
    "url": "http://www.defenseone.com/technology/2016/11/nsa-chief-has-phone-top-secret-messaging-heres-how-it-works/132845/",
    "votes": 5,
    "posted": "Nov 2, 2016 6:31:16 PM"
  },
  {
    "id": "12857195",
    "timestamp": "Nov 2, 2016 7:11:05 PM",
    "topic": "“Dear Microsoft” – Your Friends at Slack",
    "url": "https://slackhq.com/dear-microsoft-8d20965d2849#.abb8mff6k",
    "votes": 6,
    "posted": "Nov 2, 2016 6:25:21 PM"
  },
  {
    "id": "12857140",
    "timestamp": "Nov 2, 2016 8:41:15 PM",
    "topic": "A New Spin on the Quantum Brain",
    "url": "https://www.quantamagazine.org/20161102-quantum-neuroscience/",
    "votes": 5,
    "posted": "Nov 2, 2016 6:21:14 PM"
  },
  {
    "id": "12857107",
    "timestamp": "Nov 2, 2016 7:11:06 PM",
    "topic": "Why do millennials hate groceries?",
    "url": "http://www.theatlantic.com/business/archive/2016/11/millennials-groceries/506180/?single_page\u003dtrue",
    "votes": 4,
    "posted": "Nov 2, 2016 6:18:39 PM"
  },
  {
    "id": "12856968",
    "timestamp": "Nov 2, 2016 7:31:08 PM",
    "topic": "Introducing TJSON, a stricter, typed form of JSON",
    "url": "https://tonyarcieri.com/introducing-tjson-a-stricter-typed-form-of-json",
    "votes": 4,
    "posted": "Nov 2, 2016 6:06:42 PM"
  },
  {
    "id": "12856925",
    "timestamp": "Nov 2, 2016 6:31:00 PM",
    "topic": "Physicist honored for finding new symmetry in space and time",
    "url": "http://phys.org/news/2016-11-physicist-honored-symmetry-space.html",
    "votes": 4,
    "posted": "Nov 2, 2016 6:03:06 PM"
  },
  {
    "id": "12856806",
    "timestamp": "Nov 2, 2016 6:51:03 PM",
    "topic": "A Study Plan to Cure JavaScript Fatigue",
    "url": "https://medium.com/@sachagreif/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.vdxbscqxk",
    "votes": 4,
    "posted": "Nov 2, 2016 5:53:23 PM"
  },
  {
    "id": "12856740",
    "timestamp": "Nov 2, 2016 7:11:05 PM",
    "topic": "Show HN: Simple JavaScript Tetris",
    "url": "https://github.com/jstimpfle/tetris-on-a-plane/blob/master/tetris.js",
    "votes": 7,
    "posted": "Nov 2, 2016 5:46:55 PM"
  },
  {
    "id": "12856730",
    "timestamp": "Nov 2, 2016 6:00:57 PM",
    "topic": "Why Do Millennials Hate Groceries?",
    "url": "http://www.theatlantic.com/business/archive/2016/11/millennials-groceries/506180/?utm_source\u003dquartzfb\u0026amp;single_page\u003dtrue",
    "votes": 5,
    "posted": "Nov 2, 2016 5:45:57 PM"
  },
  {
    "id": "12856549",
    "timestamp": "Nov 2, 2016 11:21:35 PM",
    "topic": "Show HN: LoWe – Extending the functionality of Ubuntu running on Windows 10",
    "url": "https://github.com/kpocza/LoWe",
    "votes": 6,
    "posted": "Nov 2, 2016 5:29:36 PM"
  },
  {
    "id": "12856545",
    "timestamp": "Nov 2, 2016 6:00:58 PM",
    "topic": "On Wall Street, a high-ranking few still avoid email",
    "url": "http://www.reuters.com/article/us-wall-street-email-idUSKBN12W4F7",
    "votes": 3,
    "posted": "Nov 2, 2016 5:29:03 PM"
  },
  {
    "id": "12856533",
    "timestamp": "Nov 2, 2016 6:31:00 PM",
    "topic": "If Satan was a web developer",
    "url": "http://imgur.com/gallery/qA4Bu?utm_content\u003dbuffer56d42\u0026utm_medium\u003dsocial\u0026utm_source\u003dfacebook.com\u0026utm_campaign\u003dbuffer",
    "votes": 3,
    "posted": "Nov 2, 2016 5:28:13 PM"
  },
  {
    "id": "12856519",
    "timestamp": "Nov 2, 2016 7:21:07 PM",
    "topic": "New Uber App",
    "url": "https://newsroom.uber.com/newriderapp/",
    "votes": 7,
    "posted": "Nov 2, 2016 5:27:25 PM"
  },
  {
    "id": "12856488",
    "timestamp": "Nov 3, 2016 5:23:09 PM",
    "topic": "China: The Virtues of the Awful Convulsion",
    "url": "http://www.nybooks.com/articles/2016/10/27/china-the-virtues-of-the-awful-convulsion/",
    "votes": 3,
    "posted": "Nov 2, 2016 5:24:48 PM"
  },
  {
    "id": "12856287",
    "timestamp": "Nov 3, 2016 11:43:50 PM",
    "topic": "The Story of How McDonald’s First Got Its Start",
    "url": "http://www.smithsonianmag.com/history/story-how-mcdonalds-first-got-its-start-180960931/?no-ist",
    "votes": 4,
    "posted": "Nov 2, 2016 5:08:24 PM"
  },
  {
    "id": "12856224",
    "timestamp": "Nov 3, 2016 4:53:06 PM",
    "topic": "The Kingdom of the Dead: For post-Soviet people, Crimea was a gigantic madeleine",
    "url": "https://nplusonemag.com/online-only/online-only/the-kingdom-of-the-dead/",
    "votes": 3,
    "posted": "Nov 2, 2016 5:03:21 PM"
  },
  {
    "id": "12856003",
    "timestamp": "Nov 2, 2016 5:00:52 PM",
    "topic": "Microsoft Introduces Slack Competitor, Microsoft Teams",
    "url": "https://blogs.office.com/2016/11/02/introducing-microsoft-teams-the-chat-based-workspace-in-office-365/",
    "votes": 3,
    "posted": "Nov 2, 2016 4:46:34 PM"
  },
  {
    "id": "12855834",
    "timestamp": "Nov 2, 2016 5:30:55 PM",
    "topic": "MoMA makes most exhibition catalogs since 1929 available on the internet",
    "url": "https://www.moma.org/calendar/exhibitions/history",
    "votes": 4,
    "posted": "Nov 2, 2016 4:35:14 PM"
  },
  {
    "id": "12855741",
    "timestamp": "Nov 2, 2016 4:30:49 PM",
    "topic": "Captain401 (YC S15) is hiring full stack and UI engineers to reinvent the 401(k)",
    "url": "https://captain401.com/careers",
    "votes": 1,
    "posted": "Nov 2, 2016 4:27:44 PM"
  },
  {
    "id": "12855722",
    "timestamp": "Nov 2, 2016 4:40:50 PM",
    "topic": "Containerising Legacy Applications – The Clean and the Dirty Approach",
    "url": "http://blog.contino.io/blog/containerising-legacy-applications-the-clean-the-dirty-approach",
    "votes": 4,
    "posted": "Nov 2, 2016 4:26:13 PM"
  },
  {
    "id": "12855684",
    "timestamp": "Nov 2, 2016 4:40:51 PM",
    "topic": "Microsoft Teams (Slack Competitor)",
    "url": "https://products.office.com/en-US/microsoft-teams/",
    "votes": 6,
    "posted": "Nov 2, 2016 4:23:08 PM"
  },
  {
    "id": "12855636",
    "timestamp": "Nov 2, 2016 4:30:49 PM",
    "topic": "Ask HN: Experience vs. Education?",
    "votes": 5,
    "posted": "Nov 2, 2016 4:18:10 PM"
  },
  {
    "id": "12855535",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "How pure is the beer in Germany?",
    "url": "http://www.bbc.com/travel/story/20161027-how-pure-is-the-beer-in-germany",
    "votes": 4,
    "posted": "Nov 2, 2016 4:09:56 PM"
  },
  {
    "id": "12855409",
    "timestamp": "Nov 2, 2016 9:11:19 PM",
    "topic": "New MacBook Pro Received Most Online Orders",
    "url": "http://www.macrumors.com/2016/11/02/phil-schiller-new-macbook-pro-interview/",
    "votes": 4,
    "posted": "Nov 2, 2016 3:58:22 PM"
  },
  {
    "id": "12855319",
    "timestamp": "Nov 2, 2016 4:30:49 PM",
    "topic": "[Linode] Network Update: Multihomed, Increased Transit, Peering",
    "url": "https://blog.linode.com/2016/11/02/network-update-multihomed-increased-transit-peering/",
    "votes": 6,
    "posted": "Nov 2, 2016 3:51:18 PM"
  },
  {
    "id": "12855291",
    "timestamp": "Nov 2, 2016 4:20:48 PM",
    "topic": "Dear Microsoft",
    "url": "https://slackhq.com/dear-microsoft-8d20965d2849#.3wj6j4611",
    "votes": 16,
    "posted": "Nov 2, 2016 3:49:07 PM"
  },
  {
    "id": "12855252",
    "timestamp": "Nov 2, 2016 7:51:10 PM",
    "topic": "Phil Schiller Discusses the new MacBook Pro",
    "url": "http://www.independent.co.uk/life-style/gadgets-and-tech/features/apple-macbook-pro-new-philip-schiller-interview-phil-iphone-ios-criticism-a7393156.html",
    "votes": 5,
    "posted": "Nov 2, 2016 3:46:04 PM"
  },
  {
    "id": "12855073",
    "timestamp": "Nov 2, 2016 4:10:47 PM",
    "topic": "The iMac and the Floppy Drive: A Conspiracy Theory (1998)",
    "url": "http://www.osnews.com/story/18/The_iMac_and_the_Floppy_Drive_A_Conspiracy_Theory",
    "votes": 3,
    "posted": "Nov 2, 2016 3:30:22 PM"
  },
  {
    "id": "12854895",
    "timestamp": "Nov 2, 2016 4:00:46 PM",
    "topic": "Darling – MacOS translation layer for Linux",
    "url": "https://www.darlinghq.org/",
    "votes": 13,
    "posted": "Nov 2, 2016 3:12:54 PM"
  },
  {
    "id": "12854877",
    "timestamp": "Nov 2, 2016 3:40:45 PM",
    "topic": "Pornhub Bypasses Ad Blockers with WebSockets",
    "url": "http://blog.bugreplay.com/post/152579164219/pornhubdodgesadblockersusingwebsockets?utm_source\u003dreddit-programming\u0026utm_medium\u003dpost",
    "votes": 6,
    "posted": "Nov 2, 2016 3:11:25 PM"
  },
  {
    "id": "12854785",
    "timestamp": "Nov 2, 2016 3:30:44 PM",
    "topic": "How Lyft screwed me out of a $350 referral bonus",
    "url": "http://imgur.com/gallery/QZbvw",
    "votes": 4,
    "posted": "Nov 2, 2016 3:03:09 PM"
  },
  {
    "id": "12854619",
    "timestamp": "Nov 2, 2016 3:00:41 PM",
    "topic": "Maybe Peter Thiel Is Just a Crank",
    "url": "http://nymag.com/selectall/2016/10/maybe-peter-thiel-is-just-a-crank.html",
    "votes": 10,
    "posted": "Nov 2, 2016 2:48:32 PM"
  },
  {
    "id": "12854483",
    "timestamp": "Nov 2, 2016 4:30:49 PM",
    "topic": "LastPass Multi-Device Access Is Now Free",
    "url": "https://blog.lastpass.com/2016/11/get-lastpass-everywhere-multi-device-access-is-now-free.html/",
    "votes": 9,
    "posted": "Nov 2, 2016 2:35:06 PM"
  },
  {
    "id": "12854463",
    "timestamp": "Nov 2, 2016 3:20:43 PM",
    "topic": "Ask HN: Ever been hired through a “who\u0027s hiring” post?",
    "votes": 6,
    "posted": "Nov 2, 2016 2:33:17 PM"
  },
  {
    "id": "12854453",
    "timestamp": "Nov 3, 2016 8:02:22 AM",
    "topic": "Coroutines in C",
    "url": "http://www.chiark.greenend.org.uk/~sgtatham/coroutines.html",
    "votes": 3,
    "posted": "Nov 2, 2016 2:32:00 PM"
  },
  {
    "id": "12854428",
    "timestamp": "Nov 2, 2016 3:10:42 PM",
    "topic": "LinkedIn launches Salary to chart what we earn",
    "url": "https://techcrunch.com/2016/11/02/linkedin-plots-a-place-on-the-economic-graph-launches-salary-to-chart-what-we-earn/",
    "votes": 4,
    "posted": "Nov 2, 2016 2:29:06 PM"
  },
  {
    "id": "12854336",
    "timestamp": "Nov 2, 2016 3:10:42 PM",
    "topic": "Emacs standing alone on a Linux Kernel",
    "url": "http://www.informatimago.com/linux/emacs-on-user-mode-linux.html",
    "votes": 7,
    "posted": "Nov 2, 2016 2:17:42 PM"
  },
  {
    "id": "12854331",
    "timestamp": "Nov 2, 2016 2:50:40 PM",
    "topic": "Free Shipping is a lie",
    "url": "https://www.fastcompany.com/3061686/free-shipping-is-a-lie",
    "votes": 4,
    "posted": "Nov 2, 2016 2:16:55 PM"
  },
  {
    "id": "12854320",
    "timestamp": "Nov 2, 2016 4:00:46 PM",
    "topic": "The Oblivion of Adam: What if you could remember every poem in the next life?",
    "url": "http://www.theparisreview.org/blog/2016/11/01/the-oblivion-of-adam/",
    "votes": 3,
    "posted": "Nov 2, 2016 2:15:08 PM"
  },
  {
    "id": "12854290",
    "timestamp": "Nov 3, 2016 1:51:49 AM",
    "topic": "Your HTTPS/TLS/SSL/SSH certificate tells where its key comes from",
    "url": "https://dan.enigmabridge.com/your-https-certificate-shows-where-its-key-comes-from/",
    "votes": 3,
    "posted": "Nov 2, 2016 2:10:40 PM"
  },
  {
    "id": "12854273",
    "timestamp": "Nov 2, 2016 2:30:38 PM",
    "topic": "Why Are Apple and Microsoft Using Such Old Processors in Their New Computers?",
    "url": "http://gizmodo.com/why-are-apple-and-microsoft-using-such-old-processors-i-1788302547",
    "votes": 13,
    "posted": "Nov 2, 2016 2:09:16 PM"
  },
  {
    "id": "12854209",
    "timestamp": "Nov 2, 2016 3:40:45 PM",
    "topic": "Neural Symbolic Machines: Learning Semantic Parsers with Weak Supervision",
    "url": "https://arxiv.org/abs/1611.00020",
    "votes": 3,
    "posted": "Nov 2, 2016 2:02:25 PM"
  },
  {
    "id": "12854128",
    "timestamp": "Nov 2, 2016 2:40:39 PM",
    "topic": "Microsoft Says Russian Hackers Exploited Flaw in Windows",
    "url": "http://www.wsj.com/articles/microsoft-says-russian-hackers-exploited-flaw-in-windows-1478039377",
    "votes": 3,
    "posted": "Nov 2, 2016 1:50:58 PM"
  },
  {
    "id": "12853990",
    "timestamp": "Nov 3, 2016 2:21:51 AM",
    "topic": "Using Haskell to Find Unused Spring MVC Code",
    "url": "https://tech.small-improvements.com/2016/11/01/using-haskell-to-find-unused-spring-mvc-code/",
    "votes": 8,
    "posted": "Nov 2, 2016 1:31:12 PM"
  },
  {
    "id": "12853939",
    "timestamp": "Nov 2, 2016 3:20:43 PM",
    "topic": "Still Don\u0027t Get #Blockchain?  an Explanation for Five-Year- Old",
    "url": "http://blockgeeks.com/guides/what-is-blockchain-technology-a-step-by-step-guide-than-anyone-can-understand/",
    "votes": 6,
    "posted": "Nov 2, 2016 1:22:02 PM"
  },
  {
    "id": "12853921",
    "timestamp": "Nov 2, 2016 8:41:15 PM",
    "topic": "CloudFlare issues wildcard SSL certs for domains without owners consent",
    "url": "https://groups.google.com/forum/m/#!topic/certificate-transparency/1tAcVS17wMM",
    "votes": 4,
    "posted": "Nov 2, 2016 1:19:53 PM"
  },
  {
    "id": "12853909",
    "timestamp": "Nov 2, 2016 1:40:33 PM",
    "topic": "In Greece, Property Is Debt",
    "url": "http://mobile.nytimes.com/2016/11/02/opinion/in-greece-property-is-debt.html?em_pos\u003dsmall\u0026emc\u003dedit_dk_20161102\u0026nl\u003ddealbook\u0026nl_art\u003d17\u0026nlid\u003d65508833\u0026ref\u003dheadline\u0026te\u003d1\u0026referer\u003d",
    "votes": 3,
    "posted": "Nov 2, 2016 1:17:22 PM"
  },
  {
    "id": "12853846",
    "timestamp": "Nov 5, 2016 12:46:05 AM",
    "topic": "Show HN: A better way to organize rails apps so that not everything is silo\u0027d",
    "url": "https://github.com/NullVoxPopuli/rails_module_unification",
    "votes": 5,
    "posted": "Nov 2, 2016 1:06:23 PM"
  },
  {
    "id": "12853706",
    "timestamp": "Nov 2, 2016 3:00:41 PM",
    "topic": "Ways to Cultivate Gratitude at Work",
    "url": "http://greatergood.berkeley.edu/article/item/five_ways_to_cultivate_gratitude_at_work",
    "votes": 4,
    "posted": "Nov 2, 2016 12:33:30 PM"
  },
  {
    "id": "12853645",
    "timestamp": "Nov 2, 2016 1:20:31 PM",
    "topic": "Hey Bloomberg, Which Millennial Hurt You?",
    "url": "http://gizmodo.com/hey-bloomberg-which-millennial-hurt-you-1788469056",
    "votes": 5,
    "posted": "Nov 2, 2016 12:22:03 PM"
  },
  {
    "id": "12853639",
    "timestamp": "Nov 2, 2016 12:50:29 PM",
    "topic": "Tesla Model 3 will feature new type of glass developed in-house",
    "url": "https://electrek.co/2016/11/01/tesla-model-3-new-glass-in-house-elon-musk-tesla-glass-tech-group/",
    "votes": 3,
    "posted": "Nov 2, 2016 12:21:07 PM"
  },
  {
    "id": "12853611",
    "timestamp": "Nov 2, 2016 1:00:30 PM",
    "topic": "Cloth or Something",
    "url": "https://www.bleachbit.org/cloth-or-something",
    "votes": 6,
    "posted": "Nov 2, 2016 12:15:23 PM"
  },
  {
    "id": "12853531",
    "timestamp": "Nov 2, 2016 12:50:29 PM",
    "topic": "Switching from macOS: The Basics",
    "url": "http://blog.elementary.io/post/152626170946/switching-from-macos-the-basics",
    "votes": 6,
    "posted": "Nov 2, 2016 11:56:33 AM"
  },
  {
    "id": "12853451",
    "timestamp": "Nov 2, 2016 11:40:24 AM",
    "topic": "LeadGenius Hiring a Data Engineer",
    "url": "https://jobs.lever.co/leadgenius/4a084cbb-230d-4e25-a62f-5f75e81352eb",
    "votes": 1,
    "posted": "Nov 2, 2016 11:32:14 AM"
  },
  {
    "id": "12853383",
    "timestamp": "Nov 2, 2016 12:10:26 PM",
    "topic": "South African Reserve Bank Circulates Smart Contract Using Ethereum Blockchain",
    "url": "http://www.iafrikan.com/2016/11/02/south-african-reserve-bank-circulates-first-ever-smart-contract-using-private-ethereum-blockchain/",
    "votes": 4,
    "posted": "Nov 2, 2016 11:14:16 AM"
  },
  {
    "id": "12853319",
    "timestamp": "Nov 2, 2016 11:30:23 AM",
    "topic": "Why C.E.O.s are getting fired more",
    "url": "http://www.newyorker.com/magazine/2016/11/07/why-c-e-o-s-are-getting-fired-more",
    "votes": 5,
    "posted": "Nov 2, 2016 10:58:14 AM"
  },
  {
    "id": "12853281",
    "timestamp": "Nov 2, 2016 2:30:38 PM",
    "topic": "The Polls of the Future Are Reproducible and Open Source",
    "url": "http://www.slate.com/articles/technology/future_tense/2016/11/the_polls_of_the_future_will_be_reproducible_and_open_source.html",
    "votes": 4,
    "posted": "Nov 2, 2016 10:49:51 AM"
  },
  {
    "id": "12853248",
    "timestamp": "Nov 2, 2016 11:20:22 AM",
    "topic": "Signal and GIPHY",
    "url": "https://whispersystems.org/blog/giphy-experiment/",
    "votes": 6,
    "posted": "Nov 2, 2016 10:39:58 AM"
  },
  {
    "id": "12853222",
    "timestamp": "Nov 2, 2016 11:40:24 AM",
    "topic": "Why terrorism doesn\u0027t work. [2002, pdf]",
    "url": "http://www.agner.org/cultsel/terror.pdf",
    "votes": 7,
    "posted": "Nov 2, 2016 10:29:02 AM"
  },
  {
    "id": "12853219",
    "timestamp": "Nov 2, 2016 11:20:22 AM",
    "topic": "Why it’s healthy that Microsoft and Google are eating Apple’s lunch",
    "url": "https://cpbotha.net/2016/11/02/why-its-healthy-that-microsoft-and-google-are-eating-apples-lunch/",
    "votes": 6,
    "posted": "Nov 2, 2016 10:28:34 AM"
  },
  {
    "id": "12853211",
    "timestamp": "Nov 2, 2016 11:10:21 AM",
    "topic": "We continue checking Microsoft open source projects: analysis of PowerShell",
    "url": "http://www.viva64.com/en/b/0447/",
    "votes": 4,
    "posted": "Nov 2, 2016 10:25:51 AM"
  },
  {
    "id": "12853137",
    "timestamp": "Nov 2, 2016 10:20:17 AM",
    "topic": "Curl 7.51.0 released, fixing 11 vulnerabilities",
    "url": "https://curl.haxx.se/changes.html#7_51_0",
    "votes": 13,
    "posted": "Nov 2, 2016 10:01:10 AM"
  },
  {
    "id": "12853096",
    "timestamp": "Nov 2, 2016 10:40:18 AM",
    "topic": "Admiral to price car insurance based on Facebook posts",
    "url": "https://www.theguardian.com/technology/2016/nov/02/admiral-to-price-car-insurance-based-on-facebook-posts",
    "votes": 5,
    "posted": "Nov 2, 2016 9:50:32 AM"
  },
  {
    "id": "12852995",
    "timestamp": "Nov 2, 2016 4:30:50 PM",
    "topic": "Corrode project for porting C to Rust gains Mozilla\u0027s backing",
    "url": "http://www.infoworld.com/article/3136934/open-source-tools/project-for-porting-c-to-rust-gains-mozillas-backing.html",
    "votes": 3,
    "posted": "Nov 2, 2016 9:14:24 AM"
  },
  {
    "id": "12852912",
    "timestamp": "Nov 2, 2016 9:30:13 AM",
    "topic": "Announcing the Tor Browser User Manual",
    "url": "https://blog.torproject.org/blog/announcing-tor-browser-user-manual",
    "votes": 6,
    "posted": "Nov 2, 2016 8:43:04 AM"
  },
  {
    "id": "12852910",
    "timestamp": "Nov 2, 2016 3:00:41 PM",
    "topic": "How Ancient Humans Reached Remote South Pacific Islands",
    "url": "http://www.nytimes.com/2016/11/02/science/south-pacific-islands-migration.html",
    "votes": 5,
    "posted": "Nov 2, 2016 8:42:11 AM"
  },
  {
    "id": "12852687",
    "timestamp": "Nov 2, 2016 11:00:20 AM",
    "topic": "Ask HN: How to become a vegan?",
    "votes": 5,
    "posted": "Nov 2, 2016 7:21:03 AM"
  },
  {
    "id": "12852620",
    "timestamp": "Nov 2, 2016 7:10:02 AM",
    "topic": "WePay is hiring software engineers and SREs",
    "url": "https://go.wepay.com/careers",
    "votes": 1,
    "posted": "Nov 2, 2016 6:59:50 AM"
  },
  {
    "id": "12852453",
    "timestamp": "Nov 2, 2016 10:10:16 AM",
    "topic": "Using Microservices to Encode and Publish Videos at The New York Times",
    "url": "http://open.blogs.nytimes.com/2016/11/01/using-microservices-to-encode-and-publish-videos-at-the-new-york-times/?_r\u003d0\u0026pagewanted\u003dall",
    "votes": 4,
    "posted": "Nov 2, 2016 6:22:15 AM"
  },
  {
    "id": "12852435",
    "timestamp": "Nov 4, 2016 5:25:20 PM",
    "topic": "Pratt Parsing and Precedence Climbing Are the Same Algorithm",
    "url": "http://www.oilshell.org/blog/2016/11/01.html",
    "votes": 3,
    "posted": "Nov 2, 2016 6:17:51 AM"
  },
  {
    "id": "12852379",
    "timestamp": "Nov 2, 2016 6:19:57 AM",
    "topic": "Pokemon Go Gets a Huge Revenue Boost",
    "url": "http://www.geek.com/games/pokemon-go-gets-a-huge-revenue-boost-thanks-to-halloween-event-1677654/",
    "votes": 3,
    "posted": "Nov 2, 2016 6:03:31 AM"
  },
  {
    "id": "12852372",
    "timestamp": "Nov 2, 2016 6:50:00 AM",
    "topic": "Build a Phased-Array Radar in Your Garage That Sees Through Walls",
    "url": "http://hackaday.com/2015/04/07/build-a-phased-array-radar-in-your-garage-that-sees-through-walls/",
    "votes": 4,
    "posted": "Nov 2, 2016 6:00:36 AM"
  },
  {
    "id": "12852316",
    "timestamp": "Nov 2, 2016 10:20:17 AM",
    "topic": "Reboot – conference for failed startup founders",
    "url": "http://www.rebootconf.com",
    "votes": 5,
    "posted": "Nov 2, 2016 5:46:16 AM"
  },
  {
    "id": "12852293",
    "timestamp": "Nov 2, 2016 5:59:55 AM",
    "topic": "Ask HN: Best linux laptop for developers",
    "votes": 5,
    "posted": "Nov 2, 2016 5:41:43 AM"
  },
  {
    "id": "12852282",
    "timestamp": "Nov 2, 2016 7:40:04 AM",
    "topic": "Dirty COW – (CVE-2016-5195) – Docker Container Escape",
    "url": "https://blog.paranoidsoftware.com/dirty-cow-cve-2016-5195-docker-container-escape/",
    "votes": 13,
    "posted": "Nov 2, 2016 5:38:08 AM"
  },
  {
    "id": "12852250",
    "timestamp": "Nov 2, 2016 6:41:01 PM",
    "topic": "The Right Way to Grant Equity to Your Employees",
    "url": "http://firstround.com/review/The-Right-Way-to-Grant-Equity-to-Your-Employees/",
    "votes": 4,
    "posted": "Nov 2, 2016 5:27:08 AM"
  },
  {
    "id": "12852235",
    "timestamp": "Nov 2, 2016 7:40:04 AM",
    "topic": "Abandoned in space in 1967, a US satellite has started transmitting again",
    "url": "http://www.thevintagenews.com/2016/10/31/abandoned-in-space-in-1967-a-us-satellite-has-started-transmitting-again/",
    "votes": 6,
    "posted": "Nov 2, 2016 5:22:12 AM"
  },
  {
    "id": "12852172",
    "timestamp": "Nov 2, 2016 1:10:31 PM",
    "topic": "Stuck between a rock and a hard placem: An explanation of Apple’s new MBP",
    "url": "http://macdaddy.io/apples-new-macbook-pros/",
    "votes": 5,
    "posted": "Nov 2, 2016 5:10:06 AM"
  },
  {
    "id": "12852104",
    "timestamp": "Nov 2, 2016 5:59:55 AM",
    "topic": "BART janitor grossed $270K in pay and benefits last year",
    "url": "http://www.mercurynews.com/2016/11/01/bart-janitor-grossed-270k-in-pay-and-benefits-last-year/?utm_campaign\u003dEchobox\u0026utm_medium\u003dSocial\u0026utm_source\u003dFacebook#link_time\u003d1478025682",
    "votes": 15,
    "posted": "Nov 2, 2016 4:46:28 AM"
  },
  {
    "id": "12852085",
    "timestamp": "Nov 2, 2016 4:49:50 AM",
    "topic": "Microsoft Concept Graph",
    "url": "https://concept.research.microsoft.com/Home/Introduction",
    "votes": 4,
    "posted": "Nov 2, 2016 4:38:41 AM"
  },
  {
    "id": "12852083",
    "timestamp": "Nov 2, 2016 8:30:08 AM",
    "topic": "Ask HN: How can rational thinking increase in individuals and societies?",
    "votes": 5,
    "posted": "Nov 2, 2016 4:38:05 AM"
  },
  {
    "id": "12852047",
    "timestamp": "Nov 2, 2016 4:49:50 AM",
    "topic": "Shopping coming to Instagram",
    "url": "http://blog.business.instagram.com/post/152598788716/shopping-coming-to-instagram",
    "votes": 4,
    "posted": "Nov 2, 2016 4:27:29 AM"
  },
  {
    "id": "12852042",
    "timestamp": "Nov 2, 2016 5:19:52 AM",
    "topic": "Cybersecurity firm fails to find links between Donald Trump and Russian bank",
    "url": "https://www.theguardian.com/us-news/2016/nov/01/cybersecurity-firm-fails-to-find-alleged-links-between-trump-and-russian-bank",
    "votes": 4,
    "posted": "Nov 2, 2016 4:26:35 AM"
  },
  {
    "id": "12851987",
    "timestamp": "Nov 2, 2016 4:59:51 AM",
    "topic": "Ask HN: Who is firing?",
    "votes": 20,
    "posted": "Nov 2, 2016 4:10:07 AM"
  },
  {
    "id": "12851918",
    "timestamp": "Nov 2, 2016 5:00:52 PM",
    "topic": "Sing to Me: Karaoke is self-compromise as spectacle",
    "url": "http://reallifemag.com/sing-to-me/",
    "votes": 3,
    "posted": "Nov 2, 2016 3:50:25 AM"
  },
  {
    "id": "12851864",
    "timestamp": "Nov 2, 2016 6:29:58 AM",
    "topic": "Getting Started with Webpack 2",
    "url": "https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.diw20huhm",
    "votes": 5,
    "posted": "Nov 2, 2016 3:33:22 AM"
  },
  {
    "id": "12851841",
    "timestamp": "Nov 2, 2016 6:29:58 AM",
    "topic": "What WikiLeaks just revealed about Google explains EVERYTHING",
    "url": "http://www.allenbwest.com/michaelcantrell/wikileaks-just-revealed-google-explains-everything",
    "votes": 7,
    "posted": "Nov 2, 2016 3:27:03 AM"
  },
  {
    "id": "12851821",
    "timestamp": "Nov 2, 2016 3:29:43 AM",
    "topic": "Taplytics is hiring",
    "url": "https://taplytics.com/jobs",
    "votes": 1,
    "posted": "Nov 2, 2016 3:22:50 AM"
  },
  {
    "id": "12851810",
    "timestamp": "Nov 2, 2016 6:29:58 AM",
    "topic": "New York Doesn\u0027t Need San Francisco\u0027s Google Bus Problem",
    "url": "http://www.villagevoice.com/news/new-york-doesnt-need-san-franciscos-google-bus-problem-9292209",
    "votes": 5,
    "posted": "Nov 2, 2016 3:20:45 AM"
  },
  {
    "id": "12851618",
    "timestamp": "Nov 2, 2016 6:09:56 AM",
    "topic": "Ask HN: What Is the Current State of the GNUstep Project?",
    "votes": 3,
    "posted": "Nov 2, 2016 2:29:14 AM"
  },
  {
    "id": "12851596",
    "timestamp": "Nov 2, 2016 3:39:44 AM",
    "topic": "The Costs of Running a Support Team in the Bay Area",
    "url": "http://www.peopledelight.com/costs-customer-support-bay-area/",
    "votes": 3,
    "posted": "Nov 2, 2016 2:22:10 AM"
  },
  {
    "id": "12851585",
    "timestamp": "Nov 2, 2016 2:59:41 AM",
    "topic": "The New MacBook Pros Mark the End of Upgradeable Apple Computers",
    "url": "http://motherboard.vice.com/read/new-macbook-pros-mark-the-end-of-upgradeable-apple-computers",
    "votes": 4,
    "posted": "Nov 2, 2016 2:20:39 AM"
  },
  {
    "id": "12851497",
    "timestamp": "Nov 2, 2016 7:10:02 AM",
    "topic": "Cloudflare gets wildcard certs for a domain using their DNS-only service",
    "url": "https://groups.google.com/forum/#!topic/certificate-transparency/1tAcVS17wMM",
    "votes": 6,
    "posted": "Nov 2, 2016 1:58:08 AM"
  },
  {
    "id": "12851491",
    "timestamp": "Nov 2, 2016 2:59:41 AM",
    "topic": "Facebook officially announces Gameroom, its PC Steam competitor",
    "url": "https://techcrunch.com/2016/11/01/facebook-gameroom/",
    "votes": 4,
    "posted": "Nov 2, 2016 1:57:16 AM"
  },
  {
    "id": "12851386",
    "timestamp": "Nov 2, 2016 6:29:58 AM",
    "topic": "Ask HN: Anyone doing Small scale manufacturing",
    "votes": 4,
    "posted": "Nov 2, 2016 1:34:12 AM"
  },
  {
    "id": "12851387",
    "timestamp": "Nov 2, 2016 6:50:00 AM",
    "topic": "Admiral to price car insurance based on Facebook posts",
    "url": "https://www.theguardian.com/technology/2016/nov/02/admiral-to-price-car-insurance-based-on-facebook-posts",
    "votes": 4,
    "posted": "Nov 2, 2016 1:34:12 AM"
  },
  {
    "id": "12851338",
    "timestamp": "Nov 2, 2016 6:10:59 PM",
    "topic": "\u0027How Much Suffering Can You Take?\u0027",
    "url": "http://www.nytimes.com/2016/11/06/sports/virginia-quintuple-anvil-triathlon.html",
    "votes": 6,
    "posted": "Nov 2, 2016 1:21:56 AM"
  },
  {
    "id": "12851307",
    "timestamp": "Nov 2, 2016 2:49:40 AM",
    "topic": "Putin wants to push Microsoft out of Russia",
    "url": "http://www.nbcnews.com/news/us-news/putin-wants-push-microsoft-out-russia-battle-us-n674781",
    "votes": 5,
    "posted": "Nov 2, 2016 1:15:46 AM"
  },
  {
    "id": "12851232",
    "timestamp": "Nov 2, 2016 3:50:46 PM",
    "topic": "Ask HN: Where can I find a simple (open source) Rogue-like to modify?",
    "votes": 8,
    "posted": "Nov 2, 2016 12:58:51 AM"
  },
  {
    "id": "12851177",
    "timestamp": "Nov 2, 2016 5:59:55 AM",
    "topic": "The Real Amount of Energy Used to Power the Internet",
    "url": "http://www.electronicsilentspring.com/real-amount-energy-power-internet/",
    "votes": 3,
    "posted": "Nov 2, 2016 12:47:37 AM"
  },
  {
    "id": "12851127",
    "timestamp": "Nov 2, 2016 1:09:33 AM",
    "topic": "Google Is Not What It Seems",
    "url": "https://wikileaks.org/google-is-not-what-it-seems/?utm\u003demail",
    "votes": 4,
    "posted": "Nov 2, 2016 12:38:54 AM"
  },
  {
    "id": "12851080",
    "timestamp": "Nov 2, 2016 1:09:33 AM",
    "topic": "System76 brings Ubuntu to $699 laptop with Kaby Lake chips",
    "url": "http://www.cio.com/article/3136394/laptop-computers/system76-brings-ubuntu-to-699-laptop-with-kaby-lake-chips.html",
    "votes": 5,
    "posted": "Nov 2, 2016 12:31:37 AM"
  },
  {
    "id": "12851070",
    "timestamp": "Nov 2, 2016 1:09:33 AM",
    "topic": "Does your mind jump around, stay on task or get stuck?",
    "url": "http://news.berkeley.edu/2016/10/31/wanderingmind/",
    "votes": 4,
    "posted": "Nov 2, 2016 12:28:48 AM"
  },
  {
    "id": "12851018",
    "timestamp": "Nov 2, 2016 4:09:46 AM",
    "topic": "The downside of believing in Apple",
    "url": "https://www.baldurbjarnason.com/notes/the-less-pro-apple/",
    "votes": 5,
    "posted": "Nov 2, 2016 12:20:04 AM"
  },
  {
    "id": "12850959",
    "timestamp": "Nov 2, 2016 12:39:30 AM",
    "topic": "Political Showdown: Peter Thiel vs. Google’s Eric Schmidt",
    "url": "https://medium.com/@trentlapinski/political-showdown-peter-thiel-vs-googles-eric-schmidt-1d1484636aa4#",
    "votes": 3,
    "posted": "Nov 2, 2016 12:08:14 AM"
  },
  {
    "id": "12850928",
    "timestamp": "Nov 2, 2016 12:39:30 AM",
    "topic": "Webcam spying without turning on the LED",
    "url": "https://www.grahamcluley.com/webcam-spying-without-turning-led-researchers-prove-possible/",
    "votes": 3,
    "posted": "Nov 2, 2016 12:03:37 AM"
  },
  {
    "id": "12850919",
    "timestamp": "Nov 2, 2016 12:09:27 AM",
    "topic": "A Random Walk Through Ada",
    "url": "http://cowlark.com/2014-04-27-ada/index.html",
    "votes": 3,
    "posted": "Nov 2, 2016 12:02:07 AM"
  },
  {
    "id": "12850918",
    "timestamp": "Nov 2, 2016 12:29:29 AM",
    "topic": "Async/await support landed in Firefox Nightly",
    "url": "https://blog.nightly.mozilla.org/2016/11/01/async-await-support-in-firefox/",
    "votes": 4,
    "posted": "Nov 2, 2016 12:01:51 AM"
  },
  {
    "id": "12850878",
    "timestamp": "Nov 2, 2016 12:59:32 AM",
    "topic": "Ribbonfarm Longform Blogging Course",
    "url": "http://www.ribbonfarm.com/2016/11/01/ribbonfarm-longform-blogging-course-nov-10-22/",
    "votes": 3,
    "posted": "Nov 1, 2016 11:56:12 PM"
  },
  {
    "id": "12850861",
    "timestamp": "Nov 2, 2016 6:29:59 AM",
    "topic": "Ask HN: Best website to get a custom logo?",
    "votes": 6,
    "posted": "Nov 1, 2016 11:54:40 PM"
  },
  {
    "id": "12850836",
    "timestamp": "Nov 1, 2016 11:59:26 PM",
    "topic": "BackerKit (YC W13) Is Hiring a Growth Intern",
    "url": "https://angel.co/backerkit/jobs/142199-growth-internship",
    "votes": 1,
    "posted": "Nov 1, 2016 11:50:27 PM"
  },
  {
    "id": "12850817",
    "timestamp": "Nov 2, 2016 12:39:30 AM",
    "topic": "Why People Love Going to Fancy Gyms",
    "url": "http://qz.com/816740/boutique-gyms-like-crossfit-and-pure-barre-are-raking-in-billions-by-making-fancy-fitness-a-status-symbol/",
    "votes": 3,
    "posted": "Nov 1, 2016 11:47:37 PM"
  },
  {
    "id": "12850708",
    "timestamp": "Nov 2, 2016 4:49:50 AM",
    "topic": "Our commitment to our customer’s security",
    "url": "https://blogs.technet.microsoft.com/mmpc/2016/11/01/our-commitment-to-our-customers-security/",
    "votes": 5,
    "posted": "Nov 1, 2016 11:32:35 PM"
  },
  {
    "id": "12850646",
    "timestamp": "Nov 1, 2016 11:59:26 PM",
    "topic": "The Story of XMLHTTP (2008)",
    "url": "http://www.alexhopmann.com/story-of-xmlhttp/",
    "votes": 3,
    "posted": "Nov 1, 2016 11:25:18 PM"
  },
  {
    "id": "12850641",
    "timestamp": "Nov 1, 2016 11:59:26 PM",
    "topic": "VERGE 3.0",
    "url": "http://www.theverge.com/2016/11/1/13484656/verge-5th-anniversary-relaunch-2016",
    "votes": 5,
    "posted": "Nov 1, 2016 11:24:02 PM"
  },
  {
    "id": "12850572",
    "timestamp": "Nov 2, 2016 12:09:27 AM",
    "topic": "Lenovo Phab 2 Pro – The World\u0027s First Tango-Enabled Smartphone",
    "url": "http://shop.lenovo.com/us/en/tango/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:13:59 PM"
  },
  {
    "id": "12850544",
    "timestamp": "Nov 2, 2016 12:19:28 AM",
    "topic": "How Apple could have avoided much of the controversy",
    "url": "https://chuqui.com/2016/10/how-apple-could-have-avoided-much-of-the-controversy/",
    "votes": 5,
    "posted": "Nov 1, 2016 11:10:24 PM"
  },
  {
    "id": "12850537",
    "timestamp": "Nov 1, 2016 11:29:23 PM",
    "topic": "Chinese Yuan Becomes Official Currency in Zimbabwe",
    "url": "http://howafrica.com/breaking-the-chinese-yuan-becomes-official-currency-in-zimbabwe/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:09:50 PM"
  },
  {
    "id": "12850502",
    "timestamp": "Nov 1, 2016 11:59:26 PM",
    "topic": "The Late 2016 entry-level 13″ MacBook Pro has a ridiculously fast SSD",
    "url": "https://9to5mac.com/2016/11/01/the-late-2016-entry-level-13-macbook-pro-has-a-ridiculously-fast-ssd/",
    "votes": 3,
    "posted": "Nov 1, 2016 11:06:23 PM"
  },
  {
    "id": "12850497",
    "timestamp": "Nov 1, 2016 11:19:22 PM",
    "topic": "This Year We Can End the Death Penalty in California",
    "url": "http://www.paulgraham.com/prop62.html",
    "votes": 15,
    "posted": "Nov 1, 2016 11:06:01 PM"
  },
  {
    "id": "12850453",
    "timestamp": "Nov 2, 2016 3:49:45 AM",
    "topic": "Young scientists ditch postdocs for biotech startups",
    "url": "http://www.nature.com/news/young-scientists-ditch-postdocs-for-biotech-start-ups-1.20912",
    "votes": 4,
    "posted": "Nov 1, 2016 11:00:58 PM"
  },
  {
    "id": "12850446",
    "timestamp": "Nov 1, 2016 11:39:24 PM",
    "topic": "50 Things I Pretend to Know Now That I Am Nearing 50",
    "url": "http://www.jamesaltucher.com/2016/07/50-things-pretend-know-now-nearing-50/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:00:26 PM"
  },
  {
    "id": "12850379",
    "timestamp": "Nov 1, 2016 11:29:23 PM",
    "topic": "What Happens to the Markets If Donald Trump Wins?",
    "url": "http://www.nytimes.com/2016/11/01/business/dealbook/what-happens-to-the-markets-if-donald-trump-wins.html",
    "votes": 4,
    "posted": "Nov 1, 2016 10:54:10 PM"
  },
  {
    "id": "12850247",
    "timestamp": "Nov 1, 2016 10:49:19 PM",
    "topic": "Return of the Mac",
    "url": "http://www.paulgraham.com/mac.html",
    "votes": 20,
    "posted": "Nov 1, 2016 10:36:53 PM"
  },
  {
    "id": "12850227",
    "timestamp": "Nov 1, 2016 11:19:22 PM",
    "topic": "Extreme imaging using cell phones: SeeInTheDark [pdf]",
    "url": "http://graphics.stanford.edu/talks/seeinthedark-public-15sep16.key.pdf",
    "votes": 4,
    "posted": "Nov 1, 2016 10:32:39 PM"
  },
  {
    "id": "12850185",
    "timestamp": "Nov 1, 2016 11:19:22 PM",
    "topic": "The Problem with the Story Connecting Russia to Donald Trump’s Email Server",
    "url": "https://theintercept.com/2016/11/01/heres-the-problem-with-the-story-connecting-russia-to-donald-trumps-email-server/",
    "votes": 4,
    "posted": "Nov 1, 2016 10:27:48 PM"
  },
  {
    "id": "12850101",
    "timestamp": "Nov 1, 2016 10:29:16 PM",
    "topic": "Google Brain\u0027s Magenta: Multi-Style Image Transfer with Code",
    "url": "https://magenta.tensorflow.org/2016/11/01/multistyle-pastiche-generator/",
    "votes": 4,
    "posted": "Nov 1, 2016 10:17:46 PM"
  },
  {
    "id": "12850035",
    "timestamp": "Nov 1, 2016 11:19:22 PM",
    "topic": "A Visual Guide to State in React",
    "url": "https://daveceddia.com/visual-guide-to-state-in-react/",
    "votes": 3,
    "posted": "Nov 1, 2016 10:10:51 PM"
  },
  {
    "id": "12849828",
    "timestamp": "Nov 1, 2016 9:59:13 PM",
    "topic": "Gameroom",
    "url": "https://www.facebook.com/gameroom/",
    "votes": 5,
    "posted": "Nov 1, 2016 9:40:07 PM"
  },
  {
    "id": "12849798",
    "timestamp": "Nov 2, 2016 3:30:44 PM",
    "topic": "Randomness Requirements for Security (2005)",
    "url": "http://tools.ietf.org/html/rfc4086",
    "votes": 5,
    "posted": "Nov 1, 2016 9:35:08 PM"
  },
  {
    "id": "12849757",
    "timestamp": "Nov 1, 2016 9:49:11 PM",
    "topic": "“Design Patterns” Aren\u0027t",
    "url": "http://perl.plover.com/yak/design/",
    "votes": 9,
    "posted": "Nov 1, 2016 9:28:59 PM"
  },
  {
    "id": "12849721",
    "timestamp": "Nov 1, 2016 10:09:14 PM",
    "topic": "Mass Surveillance at Public Gatherings Is Why We Need Oversight Policies",
    "url": "https://www.eff.org/deeplinks/2016/10/mass-surveillance-public-gatherings-why-we-need-oversight-policies",
    "votes": 7,
    "posted": "Nov 1, 2016 9:23:56 PM"
  },
  {
    "id": "12849689",
    "timestamp": "Nov 1, 2016 9:29:09 PM",
    "topic": "Foursquare’s CEO says Yelp is shaking down local businesses",
    "url": "http://www.recode.net/2016/10/31/13479782/foursquare-jeff-glueck-yelp-local-businesses-robin-hood-recode-podcast",
    "votes": 9,
    "posted": "Nov 1, 2016 9:18:17 PM"
  },
  {
    "id": "12849688",
    "timestamp": "Nov 1, 2016 11:09:21 PM",
    "topic": "Microsoft’s IFTTT-like Flow is now out of beta",
    "url": "http://arstechnica.com/information-technology/2016/11/microsofts-ifttt-like-flow-is-now-out-of-beta/",
    "votes": 4,
    "posted": "Nov 1, 2016 9:17:29 PM"
  },
  {
    "id": "12849679",
    "timestamp": "Nov 1, 2016 9:39:10 PM",
    "topic": "Tesla and SolarCity",
    "url": "https://www.tesla.com/blog/tesla-and-solarcity",
    "votes": 3,
    "posted": "Nov 1, 2016 9:16:21 PM"
  },
  {
    "id": "12849656",
    "timestamp": "Nov 2, 2016 3:29:43 AM",
    "topic": "The Surprisingly Simple Advice You Will Never Follow: How to Predict the Future",
    "url": "https://medium.com/@irinatsumarava/the-surprisingly-simple-advice-you-will-never-follow-or-how-to-predict-the-future-58f8b25f1c6c#.logmgnmat",
    "votes": 3,
    "posted": "Nov 1, 2016 9:12:33 PM"
  },
  {
    "id": "12849622",
    "timestamp": "Nov 2, 2016 12:29:29 AM",
    "topic": "Too Smug to Jail",
    "url": "http://www.rollingstone.com/politics/features/too-smug-to-jail-w447825",
    "votes": 5,
    "posted": "Nov 1, 2016 9:06:22 PM"
  },
  {
    "id": "12849617",
    "timestamp": "Nov 2, 2016 4:29:48 AM",
    "topic": "An open approach for routing, switching, and transport",
    "url": "https://code.facebook.com/posts/1977308282496021/an-open-approach-for-switching-routing-and-transport/",
    "votes": 5,
    "posted": "Nov 1, 2016 9:06:05 PM"
  },
  {
    "id": "12849447",
    "timestamp": "Nov 1, 2016 9:29:09 PM",
    "topic": "Telescoping Linear Actuator [video]",
    "url": "https://www.youtube.com/watch?v\u003dxT3xcY1s1kQ\u0026t\u003d8s",
    "votes": 3,
    "posted": "Nov 1, 2016 8:48:01 PM"
  },
  {
    "id": "12849419",
    "timestamp": "Nov 1, 2016 9:39:10 PM",
    "topic": "After Apple\u0027s Disappointing MacBook Pro Refresh, What\u0027s an Engineer to Do?",
    "url": "https://www.linkedin.com/pulse/after-apples-disappointing-macbook-pro-refresh-whats-engineer-greg?trk\u003dhn",
    "votes": 6,
    "posted": "Nov 1, 2016 8:45:07 PM"
  },
  {
    "id": "12849294",
    "timestamp": "Nov 1, 2016 9:09:07 PM",
    "topic": "New MacBook Pros are unsurprisingly difficult to repair and upgrade",
    "url": "http://arstechnica.com/apple/2016/11/ifixit-new-macbook-pros-are-unsurprisingly-difficult-to-repair-and-upgrade/",
    "votes": 4,
    "posted": "Nov 1, 2016 8:29:15 PM"
  },
  {
    "id": "12849237",
    "timestamp": "Nov 1, 2016 8:29:02 PM",
    "topic": "Build the infrastructure to feed 10B middle class people (TerrAvion W14)",
    "url": "http://www.terravion.com/careers.html",
    "votes": 1,
    "posted": "Nov 1, 2016 8:22:42 PM"
  },
  {
    "id": "12849096",
    "timestamp": "Nov 1, 2016 8:29:02 PM",
    "topic": "YouTube\u0027s seven-year stand-off ends",
    "url": "http://www.bbc.com/news/technology-37839038",
    "votes": 3,
    "posted": "Nov 1, 2016 8:03:47 PM"
  },
  {
    "id": "12849079",
    "timestamp": "Nov 1, 2016 8:19:01 PM",
    "topic": "Keep Ruby Weird Again [video]",
    "url": "http://blog.testdouble.com/posts/2016-10-31-keep-ruby-weird-again.html",
    "votes": 3,
    "posted": "Nov 1, 2016 8:01:25 PM"
  },
  {
    "id": "12849072",
    "timestamp": "Nov 2, 2016 12:59:32 AM",
    "topic": "Firefox removes part of functionality due to privacy risks",
    "url": "https://www.theguardian.com/technology/2016/nov/01/firefox-disable-battery-status-api-tracking",
    "votes": 3,
    "posted": "Nov 1, 2016 8:00:33 PM"
  },
  {
    "id": "12848943",
    "timestamp": "Nov 1, 2016 11:29:23 PM",
    "topic": "Flow: Not All It\u0027s Cracked Up to Be",
    "url": "https://medium.com/myplanet-musings/flow-not-all-its-cracked-up-to-be-459207631ed9#.ivgkjd5tc",
    "votes": 4,
    "posted": "Nov 1, 2016 7:43:51 PM"
  },
  {
    "id": "12848917",
    "timestamp": "Nov 1, 2016 10:39:17 PM",
    "topic": "Show HN: vpnns – Per-app VPN using Linux namespaces",
    "url": "https://github.com/cernekee/ocproxy#vpnns-experimental",
    "votes": 3,
    "posted": "Nov 1, 2016 7:40:46 PM"
  },
  {
    "id": "12848698",
    "timestamp": "Nov 1, 2016 8:59:06 PM",
    "topic": "Signal and GIPHY",
    "url": "https://whispersystems.org/blog/giphy-experiment/",
    "votes": 4,
    "posted": "Nov 1, 2016 7:18:34 PM"
  },
  {
    "id": "12848656",
    "timestamp": "Nov 1, 2016 7:48:59 PM",
    "topic": "Show HN: academic.bio, a simple static site generator for academic webpages",
    "url": "http://my.academic.bio",
    "votes": 4,
    "posted": "Nov 1, 2016 7:14:02 PM"
  },
  {
    "id": "12848648",
    "timestamp": "Nov 1, 2016 7:38:58 PM",
    "topic": "Bones Found 76 Years Ago Could Actually Be Amelia Earhart’s",
    "url": "http://www.huffingtonpost.com/entry/amelia-earhart-skeleton_us_581883dde4b064e1b4b49b74",
    "votes": 4,
    "posted": "Nov 1, 2016 7:13:38 PM"
  },
  {
    "id": "12848444",
    "timestamp": "Nov 2, 2016 12:09:27 AM",
    "topic": "Show HN: A Curated List of Rabbit Holes on the Internet",
    "url": "https://github.com/torchhound/warren",
    "votes": 7,
    "posted": "Nov 1, 2016 6:55:43 PM"
  },
  {
    "id": "12848419",
    "timestamp": "Nov 1, 2016 7:08:54 PM",
    "topic": "HTML 5.1 is a W3C Recommendation",
    "url": "https://www.w3.org/blog/news/archives/5932",
    "votes": 6,
    "posted": "Nov 1, 2016 6:53:25 PM"
  },
  {
    "id": "12848400",
    "timestamp": "Nov 1, 2016 7:08:54 PM",
    "topic": "Last minute tips for YC Interviewees",
    "url": "http://initialized.com/last-minute-tips-for-yc-interviewees",
    "votes": 3,
    "posted": "Nov 1, 2016 6:52:31 PM"
  },
  {
    "id": "12848362",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "X86 Register Encoding",
    "url": "https://eklitzke.org/x86-register-encoding",
    "votes": 3,
    "posted": "Nov 1, 2016 6:49:35 PM"
  },
  {
    "id": "12848353",
    "timestamp": "Nov 1, 2016 7:28:57 PM",
    "topic": "The Ontology2 Edition of DBpedia 2016-04",
    "url": "http://ontology2.com/the-book/dbpedia-2016-04.html",
    "votes": 3,
    "posted": "Nov 1, 2016 6:48:26 PM"
  },
  {
    "id": "12848253",
    "timestamp": "Nov 1, 2016 7:48:59 PM",
    "topic": "Sense’s gorgeous new sleep tracker has voice control for the perfect alarm clock",
    "url": "http://thenextweb.com/insider/2016/11/01/senses-gorgeous-new-sleep-tracker-adds-voice-control-get-way/",
    "votes": 3,
    "posted": "Nov 1, 2016 6:40:57 PM"
  },
  {
    "id": "12848153",
    "timestamp": "Nov 1, 2016 7:28:57 PM",
    "topic": "Show HN: Dockopotamus, a naive honeypot that uses docker",
    "url": "https://github.com/esell/dockopotamus",
    "votes": 3,
    "posted": "Nov 1, 2016 6:32:30 PM"
  },
  {
    "id": "12848053",
    "timestamp": "Nov 1, 2016 8:19:01 PM",
    "topic": "Google\u0027s Schmidt drew up draft plan for Clinton in 2014",
    "url": "http://www.itwire.com/government-tech-policy/75531-google-s-schmidt-drew-up-draft-plan-for-clinton-in-2014.html",
    "votes": 4,
    "posted": "Nov 1, 2016 6:25:23 PM"
  },
  {
    "id": "12847916",
    "timestamp": "Nov 1, 2016 10:19:15 PM",
    "topic": "Show HN: Bamboo – The freelance marketplace that wants you to stop using it",
    "url": "https://www.workwithbamboo.com/",
    "votes": 8,
    "posted": "Nov 1, 2016 6:13:39 PM"
  },
  {
    "id": "12847866",
    "timestamp": "Nov 1, 2016 6:28:50 PM",
    "topic": "Initial patches to add an MC layer for RISC-V",
    "url": "http://llvm.org/viewvc/llvm-project?view\u003drevision\u0026revision\u003d285707",
    "votes": 5,
    "posted": "Nov 1, 2016 6:09:05 PM"
  },
  {
    "id": "12847787",
    "timestamp": "Nov 1, 2016 6:08:48 PM",
    "topic": "Stealth Cell Tower Disguised as Printer",
    "url": "https://julianoliver.com/output/stealth-cell-tower",
    "votes": 3,
    "posted": "Nov 1, 2016 6:01:48 PM"
  },
  {
    "id": "12847611",
    "timestamp": "Nov 1, 2016 5:58:47 PM",
    "topic": "This year we can end the death penalty in California",
    "url": "http://paulgraham.com/prop62.html",
    "votes": 14,
    "posted": "Nov 1, 2016 5:48:01 PM"
  },
  {
    "id": "12847576",
    "timestamp": "Nov 1, 2016 6:28:50 PM",
    "topic": "WebAssembly Stack Machine",
    "url": "https://docs.google.com/document/d/1CieRxPy3Fp62LQdtWfhymikb_veZI7S9MnuCZw7biII/edit",
    "votes": 8,
    "posted": "Nov 1, 2016 5:45:15 PM"
  },
  {
    "id": "12847537",
    "timestamp": "Nov 1, 2016 6:08:48 PM",
    "topic": "U.S. Supreme Court Wants Government\u0027s Take on Case Over Prince and \u0027Dancing Baby\u0027",
    "url": "http://www.billboard.com/biz/articles/news/legal-and-management/7557867/us-supreme-court-wants-governments-take-on-case-over",
    "votes": 3,
    "posted": "Nov 1, 2016 5:42:40 PM"
  },
  {
    "id": "12847287",
    "timestamp": "Nov 1, 2016 5:48:44 PM",
    "topic": "Instapaper Premium is now free for everyone",
    "url": "http://blog.instapaper.com/post/152600596211",
    "votes": 17,
    "posted": "Nov 1, 2016 5:23:08 PM"
  },
  {
    "id": "12847172",
    "timestamp": "Nov 1, 2016 5:38:43 PM",
    "topic": "RStudio releases v1.0",
    "url": "https://blog.rstudio.org/2016/11/01/announcing-rstudio-v1-0/",
    "votes": 6,
    "posted": "Nov 1, 2016 5:13:02 PM"
  },
  {
    "id": "12847045",
    "timestamp": "Nov 1, 2016 5:48:44 PM",
    "topic": "Ask HN: Who needs contributors? (November 2016)",
    "votes": 12,
    "posted": "Nov 1, 2016 5:03:39 PM"
  },
  {
    "id": "12846994",
    "timestamp": "Nov 1, 2016 8:29:03 PM",
    "topic": "Browser extension creators selling users\u0027 browsing history [German source]",
    "votes": 6,
    "posted": "Nov 1, 2016 5:00:00 PM"
  },
  {
    "id": "12846785",
    "timestamp": "Nov 1, 2016 4:58:40 PM",
    "topic": "Let\u0027s Encrypt Crowdfunding Campaign",
    "url": "https://letsencrypt.org/2016/11/01/launching-our-crowdfunding-campaign.html",
    "votes": 2,
    "posted": "Nov 1, 2016 4:45:05 PM"
  },
  {
    "id": "12846742",
    "timestamp": "Nov 1, 2016 4:48:39 PM",
    "topic": "OneSignal is hiring full stack, mobile, and back end developers in Mountain View",
    "url": "http://jobs.onesignal.com/",
    "votes": 1,
    "posted": "Nov 1, 2016 4:41:05 PM"
  },
  {
    "id": "12846723",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "A Provably Secure Proof-Of-Stake Blockchain Protocol [pdf]",
    "url": "http://eprint.iacr.org/2016/889.pdf",
    "votes": 3,
    "posted": "Nov 1, 2016 4:39:04 PM"
  },
  {
    "id": "12846722",
    "timestamp": "Nov 1, 2016 6:58:53 PM",
    "topic": "Django security releases issued: 1.10.3, 1.9.11 and 1.8.16",
    "url": "https://www.djangoproject.com/weblog/2016/nov/01/security-releases/",
    "votes": 4,
    "posted": "Nov 1, 2016 4:38:57 PM"
  },
  {
    "id": "12846716",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "Pinterest Adds Three New Types of Promoted Pins",
    "url": "http://www.adweek.com/socialtimes/one-tap-pins-video-pins-app-pins/646764",
    "votes": 3,
    "posted": "Nov 1, 2016 4:38:30 PM"
  },
  {
    "id": "12846516",
    "timestamp": "Nov 1, 2016 4:38:38 PM",
    "topic": "Realistic alternatives to Apple computers",
    "url": "http://www.onebigfluke.com/2016/10/alternatives-to-apple-computers.html",
    "votes": 8,
    "posted": "Nov 1, 2016 4:24:01 PM"
  },
  {
    "id": "12846432",
    "timestamp": "Nov 2, 2016 1:20:32 PM",
    "topic": "Antirez/Bigdis (2010)",
    "url": "https://github.com/antirez/Bigdis",
    "votes": 4,
    "posted": "Nov 1, 2016 4:19:05 PM"
  },
  {
    "id": "12846216",
    "timestamp": "Nov 1, 2016 4:08:33 PM",
    "topic": "Ask HN: Who is hiring? (November 2016)",
    "votes": 3,
    "posted": "Nov 1, 2016 4:04:46 PM"
  },
  {
    "id": "12846146",
    "timestamp": "Nov 1, 2016 4:28:37 PM",
    "topic": "Ask HN: Who wants to be hired? (November 2016)",
    "votes": 9,
    "posted": "Nov 1, 2016 4:00:19 PM"
  },
  {
    "id": "12846145",
    "timestamp": "Nov 1, 2016 4:28:37 PM",
    "topic": "Ask HN: Freelancer? Seeking freelancer? (November 2016)",
    "votes": 11,
    "posted": "Nov 1, 2016 4:00:19 PM"
  },
  {
    "id": "12846104",
    "timestamp": "Nov 1, 2016 4:08:33 PM",
    "topic": "Windows file system compression had to be dumbed down",
    "url": "https://blogs.msdn.microsoft.com/oldnewthing/20161101-00/?p\u003d94615",
    "votes": 5,
    "posted": "Nov 1, 2016 3:54:39 PM"
  },
  {
    "id": "12846092",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "AWS has 45% share of public cloud infrastructure market",
    "url": "http://www.geekwire.com/2016/study-aws-45-share-public-cloud-infrastructure-market-microsoft-google-ibm-combined/",
    "votes": 4,
    "posted": "Nov 1, 2016 3:51:55 PM"
  },
  {
    "id": "12846089",
    "timestamp": "Nov 1, 2016 4:08:34 PM",
    "topic": "Let\u0027s Automate Let\u0027s Encrypt",
    "url": "https://www.linuxjournal.com/content/lets-automate-lets-encrypt",
    "votes": 4,
    "posted": "Nov 1, 2016 3:51:46 PM"
  },
  {
    "id": "12846048",
    "timestamp": "Nov 1, 2016 4:08:34 PM",
    "topic": "It’s Finally Legal to Hack Your Own Devices (Even Your Car)",
    "url": "https://www.wired.com/2016/10/hacking-car-pacemaker-toaster-just-became-legal",
    "votes": 8,
    "posted": "Nov 1, 2016 3:47:15 PM"
  },
  {
    "id": "12845995",
    "timestamp": "Nov 1, 2016 3:58:32 PM",
    "topic": "Argonne researchers posit way to locally circumvent Second Law of Thermodynamics",
    "url": "https://www.anl.gov/articles/argonne-researchers-posit-way-locally-circumvent-second-law-thermodynamics",
    "votes": 3,
    "posted": "Nov 1, 2016 3:37:56 PM"
  },
  {
    "id": "12845954",
    "timestamp": "Nov 1, 2016 6:58:53 PM",
    "topic": "A new portion of bugs in LLVM",
    "url": "http://www.viva64.com/en/b/0446/",
    "votes": 17,
    "posted": "Nov 1, 2016 3:31:28 PM"
  },
  {
    "id": "12845945",
    "timestamp": "Nov 1, 2016 3:48:31 PM",
    "topic": "Life is Short",
    "url": "http://www.paulgraham.com/vb.html",
    "votes": 13,
    "posted": "Nov 1, 2016 3:29:28 PM"
  },
  {
    "id": "12845915",
    "timestamp": "Nov 1, 2016 3:38:30 PM",
    "topic": "Social Log-In Implementations – Security Risks and How to Do It Right",
    "url": "https://cloudrail.com/social-login-setups-good-bad-ugly/",
    "votes": 7,
    "posted": "Nov 1, 2016 3:24:25 PM"
  },
  {
    "id": "12845914",
    "timestamp": "Nov 2, 2016 5:20:54 PM",
    "topic": "Wikileaks: Google\u0027s “Strategic Plan”: Help Democrats Win Election, Track Voters",
    "url": "http://www.zerohedge.com/news/2016-11-01/wikileaks-reveals-googles-strategic-plan-help-democrats-win-election",
    "votes": 4,
    "posted": "Nov 1, 2016 3:24:23 PM"
  },
  {
    "id": "12845855",
    "timestamp": "Nov 1, 2016 3:48:31 PM",
    "topic": "The Mirai Botnet Is Proof the Security Industry Is Broken",
    "url": "https://blog.appcanary.com/2016/mirai-botnet-security-broken.html",
    "votes": 12,
    "posted": "Nov 1, 2016 3:13:57 PM"
  },
  {
    "id": "12845823",
    "timestamp": "Nov 1, 2016 4:18:35 PM",
    "topic": "Google’s Tango Team Has ‘Solved’ Inside-Out Positional Tracking for Wireless VR",
    "url": "http://uploadvr.com/inside-out-google-solve-tracking/",
    "votes": 4,
    "posted": "Nov 1, 2016 3:08:48 PM"
  },
  {
    "id": "12845714",
    "timestamp": "Nov 1, 2016 3:58:32 PM",
    "topic": "Debunking Trump\u0027s “secret server”",
    "url": "http://blog.erratasec.com/2016/11/debunking-trumps-secret-server.html#.WBie7-ErLyJ",
    "votes": 4,
    "posted": "Nov 1, 2016 2:56:10 PM"
  },
  {
    "id": "12845681",
    "timestamp": "Nov 2, 2016 4:49:50 AM",
    "topic": "Any Developer, Any App, Any Platform (Visual Studio and .NET)",
    "url": "https://msdn.microsoft.com/magazine/mt788617",
    "votes": 6,
    "posted": "Nov 1, 2016 2:51:21 PM"
  },
  {
    "id": "12845642",
    "timestamp": "Nov 1, 2016 6:28:50 PM",
    "topic": "Ask HN: Remote US employees \u003d tax nightmare?",
    "votes": 5,
    "posted": "Nov 1, 2016 2:47:08 PM"
  },
  {
    "id": "12845572",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "R 3.3.2 is released",
    "url": "https://www.r-statistics.com/2016/11/r-3-3-2-is-released/",
    "votes": 4,
    "posted": "Nov 1, 2016 2:37:43 PM"
  },
  {
    "id": "12845533",
    "timestamp": "Nov 1, 2016 5:38:43 PM",
    "topic": "Apple tried and failed to reestablish trust in the Mac",
    "url": "https://medium.com/@NoisyNarrowBandDevice/apple-tried-and-failed-to-reestablish-trust-in-the-mac-5af3e363f8f4#.q0v331qfx",
    "votes": 4,
    "posted": "Nov 1, 2016 2:32:06 PM"
  },
  {
    "id": "12845475",
    "timestamp": "Nov 1, 2016 5:28:42 PM",
    "topic": "Libraries.io Joins Brave New Software",
    "url": "https://medium.com/@teabass/libraries-io-joins-brave-new-software-c8cb7bba93bf",
    "votes": 3,
    "posted": "Nov 1, 2016 2:26:19 PM"
  },
  {
    "id": "12845457",
    "timestamp": "Nov 1, 2016 2:38:26 PM",
    "topic": "Apple’s new MacBook Pro may be the world’s fastest stock laptop",
    "url": "http://www.computerworld.com/article/3136714/data-storage/apples-new-macbook-pro-may-be-the-worlds-fastest-stock-laptop.html",
    "votes": 7,
    "posted": "Nov 1, 2016 2:23:57 PM"
  },
  {
    "id": "12845400",
    "timestamp": "Nov 1, 2016 6:48:52 PM",
    "topic": "Show HN: App for receiving notifications from the command line",
    "url": "https://simplepush.io/",
    "votes": 4,
    "posted": "Nov 1, 2016 2:16:43 PM"
  },
  {
    "id": "12845321",
    "timestamp": "Nov 1, 2016 4:08:34 PM",
    "topic": "Eric Schmidt\u0027s 2014 plan for Hillary\u0027s campaign via Wikileaks",
    "url": "https://wikileaks.org/podesta-emails/emailid/37262",
    "votes": 7,
    "posted": "Nov 1, 2016 2:05:20 PM"
  },
  {
    "id": "12845174",
    "timestamp": "Nov 1, 2016 2:08:23 PM",
    "topic": "Dijkstra? Which flight from A to B requires the most hops, worldwide?",
    "url": "http://travel.stackexchange.com/questions/81783/what-commercial-flight-route-has-the-biggest-number-of-minimum-possible-stops",
    "votes": 3,
    "posted": "Nov 1, 2016 1:44:52 PM"
  },
  {
    "id": "12845035",
    "timestamp": "Nov 1, 2016 6:38:51 PM",
    "topic": "Stuck between a rock and a hard place",
    "url": "http://macdaddy.io/apples-new-macbook-pros/",
    "votes": 5,
    "posted": "Nov 1, 2016 1:23:21 PM"
  },
  {
    "id": "12844976",
    "timestamp": "Nov 1, 2016 1:38:20 PM",
    "topic": "Remote-First vs. Remote-Friendly",
    "url": "https://zachholman.com/posts/remote-first/",
    "votes": 3,
    "posted": "Nov 1, 2016 1:09:25 PM"
  },
  {
    "id": "12844973",
    "timestamp": "Nov 1, 2016 1:38:20 PM",
    "topic": "The Ultimate Guide to Remote Work – Zapier",
    "url": "https://zapier.com/learn/the-ultimate-guide-to-remote-working/",
    "votes": 4,
    "posted": "Nov 1, 2016 1:09:09 PM"
  },
  {
    "id": "12844964",
    "timestamp": "Nov 1, 2016 3:18:29 PM",
    "topic": "I Have a Unicode Email Address",
    "url": "https://medium.com/@zackbloom/i-have-a-unicode-email-address-fbecd630ec12#.bbdifln65",
    "votes": 5,
    "posted": "Nov 1, 2016 1:06:55 PM"
  },
  {
    "id": "12844683",
    "timestamp": "Nov 1, 2016 2:08:23 PM",
    "topic": "Nanobionic spinach plants can detect explosives",
    "url": "http://phys.org/news/2016-10-nanobionic-spinach-explosives.html",
    "votes": 8,
    "posted": "Nov 1, 2016 12:13:48 PM"
  },
  {
    "id": "12844629",
    "timestamp": "Nov 1, 2016 1:28:19 PM",
    "topic": "Physicists induce superconductivity in non-superconducting materials",
    "url": "http://phys.org/news/2016-10-physicists-superconductivity-non-superconducting-materials.html",
    "votes": 3,
    "posted": "Nov 1, 2016 11:56:44 AM"
  },
  {
    "id": "12844600",
    "timestamp": "Nov 1, 2016 12:38:16 PM",
    "topic": "How Apple could have avoided much of the controversy",
    "url": "https://chuqui.com/2016/10/how-apple-could-have-avoided-much-of-the-controversy/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:49:54 AM"
  },
  {
    "id": "12844560",
    "timestamp": "Nov 1, 2016 11:38:11 AM",
    "topic": "Sift Science (YC S11) is hiring a Software Eng who has built scalable data infra",
    "url": "https://boards.greenhouse.io/siftscience/jobs/43188#.WBd60JMrIUE",
    "votes": 1,
    "posted": "Nov 1, 2016 11:36:22 AM"
  },
  {
    "id": "12844543",
    "timestamp": "Nov 1, 2016 12:08:13 PM",
    "topic": "MacOS Sierra Server",
    "url": "http://www.apple.com/macos/server/",
    "votes": 13,
    "posted": "Nov 1, 2016 11:29:45 AM"
  },
  {
    "id": "12844539",
    "timestamp": "Nov 1, 2016 12:08:14 PM",
    "topic": "This Summer in Redox: A Complete Rewrite of the Kernel",
    "url": "https://www.redox-os.org/news/this-summer-in-redox-15/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:29:05 AM"
  },
  {
    "id": "12844526",
    "timestamp": "Nov 1, 2016 11:28:10 AM",
    "topic": "Goodbye selling ads, welcome branded content",
    "url": "https://www.techinasia.com/talk/goodbye-selling-ads-branded-content",
    "votes": 3,
    "posted": "Nov 1, 2016 11:23:35 AM"
  },
  {
    "id": "12844477",
    "timestamp": "Nov 1, 2016 11:48:12 AM",
    "topic": "Forget the FBI cache; the Podesta emails show how America is run",
    "url": "https://www.theguardian.com/commentisfree/2016/oct/31/the-podesta-emails-show-who-runs-america-and-how-they-do-it",
    "votes": 5,
    "posted": "Nov 1, 2016 11:06:33 AM"
  },
  {
    "id": "12844461",
    "timestamp": "Nov 1, 2016 11:28:10 AM",
    "topic": "UK government to spend extra £1.9bn fighting cyber-attacks",
    "url": "https://www.theguardian.com/technology/2016/nov/01/philp-hammond-to-spend-extra-19bn-fighting-cyber-attacks",
    "votes": 3,
    "posted": "Nov 1, 2016 11:02:54 AM"
  },
  {
    "id": "12844434",
    "timestamp": "Nov 1, 2016 11:38:11 AM",
    "topic": "musicForProgramming();",
    "url": "http://musicforprogramming.net/",
    "votes": 5,
    "posted": "Nov 1, 2016 10:53:51 AM"
  },
  {
    "id": "12844349",
    "timestamp": "Nov 1, 2016 10:58:07 AM",
    "topic": "The YANG 1.1 Data Modeling Language",
    "url": "http://www.rfc-editor.org/rfc/rfc7950.txt",
    "votes": 3,
    "posted": "Nov 1, 2016 10:31:25 AM"
  },
  {
    "id": "12844342",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: Algolia for Shopify – instant search for 300K+ store owners",
    "url": "https://community.algolia.com/shopify/",
    "votes": 3,
    "posted": "Nov 1, 2016 10:30:08 AM"
  },
  {
    "id": "12844317",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: Extract HTTP info from integration tests to create Swagger docs",
    "votes": 3,
    "posted": "Nov 1, 2016 10:23:19 AM"
  },
  {
    "id": "12844267",
    "timestamp": "Nov 1, 2016 11:38:11 AM",
    "topic": "Show HN: IMAP based message broker client written in Go",
    "url": "https://github.com/mikaa123/imapmq",
    "votes": 3,
    "posted": "Nov 1, 2016 10:06:14 AM"
  },
  {
    "id": "12844240",
    "timestamp": "Nov 1, 2016 11:08:08 AM",
    "topic": "Bottled Water: Real-Time Integration of PostgreSQL and Kafka",
    "url": "http://www.confluent.io/blog/bottled-water-real-time-integration-of-postgresql-and-kafka/",
    "votes": 4,
    "posted": "Nov 1, 2016 9:56:59 AM"
  },
  {
    "id": "12844227",
    "timestamp": "Nov 1, 2016 10:18:03 AM",
    "topic": "MacBook Pro (2016) disappointment pushes some Apple loyalists to Ubuntu Linux",
    "url": "http://betanews.com/2016/10/30/macbook-pro-2016-disappointment-pushes-some-apple-loyalists-to-ubuntu-linux/",
    "votes": 23,
    "posted": "Nov 1, 2016 9:52:42 AM"
  },
  {
    "id": "12844222",
    "timestamp": "Nov 1, 2016 11:38:11 AM",
    "topic": "Show HN: Corrode – A batteries-included js-library for reading binary data",
    "url": "https://github.com/screeny05/corrode",
    "votes": 4,
    "posted": "Nov 1, 2016 9:51:39 AM"
  },
  {
    "id": "12844186",
    "timestamp": "Nov 1, 2016 10:18:03 AM",
    "topic": "Why we send our friends investor updates",
    "url": "https://blog.yalabot.com/why-we-send-our-friends-investor-updates-about-our-startup-a96fd012f453#.idcbma52t",
    "votes": 4,
    "posted": "Nov 1, 2016 9:39:58 AM"
  },
  {
    "id": "12844173",
    "timestamp": "Nov 1, 2016 11:48:12 AM",
    "topic": "Wordpress on AWS: smooth and pain free",
    "url": "https://cloudonaut.io/wordpress-on-aws-smooth-and-pain-free/",
    "votes": 6,
    "posted": "Nov 1, 2016 9:35:18 AM"
  },
  {
    "id": "12844061",
    "timestamp": "Nov 1, 2016 4:48:39 PM",
    "topic": "A Study Plan to Cure JavaScript Fatigue",
    "url": "https://medium.com/@sachagreif/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.jp3y84emz",
    "votes": 4,
    "posted": "Nov 1, 2016 8:54:23 AM"
  },
  {
    "id": "12844057",
    "timestamp": "Nov 1, 2016 9:38:00 AM",
    "topic": "GNU Terry Pratchett",
    "url": "http://www.gnuterrypratchett.com/",
    "votes": 3,
    "posted": "Nov 1, 2016 8:53:10 AM"
  },
  {
    "id": "12843980",
    "timestamp": "Nov 1, 2016 4:58:40 PM",
    "topic": "SSH, the Secure Shell: The Definitive Guide(2001)",
    "url": "http://docstore.mik.ua/orelly/networking_2ndEd/ssh/index.htm",
    "votes": 4,
    "posted": "Nov 1, 2016 8:24:39 AM"
  },
  {
    "id": "12843897",
    "timestamp": "Nov 1, 2016 6:18:49 PM",
    "topic": "The Historical Significance of Fortune-Telling",
    "url": "http://daily.jstor.org/surprising-historical-significance-fortune-telling",
    "votes": 3,
    "posted": "Nov 1, 2016 7:53:14 AM"
  },
  {
    "id": "12843880",
    "timestamp": "Nov 1, 2016 7:47:50 AM",
    "topic": "You’re engiNEARer to your dream job. Join the team at BloomThat (YC S13)",
    "url": "https://jobs.lever.co/bloomthat",
    "votes": 1,
    "posted": "Nov 1, 2016 7:45:31 AM"
  },
  {
    "id": "12843790",
    "timestamp": "Nov 1, 2016 2:38:26 PM",
    "topic": "Transcontinental anaesthesia: a pilot study (2013)",
    "url": "http://bja.oxfordjournals.org/content/110/5/758.full",
    "votes": 4,
    "posted": "Nov 1, 2016 7:16:24 AM"
  },
  {
    "id": "12843782",
    "timestamp": "Nov 1, 2016 12:48:17 PM",
    "topic": "Show HN: My first Rails app",
    "url": "https://www.westoq.com/",
    "votes": 5,
    "posted": "Nov 1, 2016 7:14:44 AM"
  },
  {
    "id": "12843775",
    "timestamp": "Nov 1, 2016 10:38:04 AM",
    "topic": "Asus to surpass Apple in notebook sales: TrendForce",
    "url": "http://www.taipeitimes.com/News/biz/archives/2016/10/31/2003658243",
    "votes": 4,
    "posted": "Nov 1, 2016 7:13:02 AM"
  },
  {
    "id": "12843742",
    "timestamp": "Nov 1, 2016 7:57:51 AM",
    "topic": "How this pioneer built a SaaS hub in Chennai from scratch without VC money",
    "url": "https://www.techinasia.com/pioneer-who-built-saas-hub-from-scratch",
    "votes": 4,
    "posted": "Nov 1, 2016 7:02:31 AM"
  },
  {
    "id": "12843725",
    "timestamp": "Nov 1, 2016 7:37:49 AM",
    "topic": "Debunking a presidential candidate\u0027s “secret server”",
    "url": "http://blog.erratasec.com/2016/11/debunking-trumps-secret-server.html",
    "votes": 3,
    "posted": "Nov 1, 2016 6:57:02 AM"
  },
  {
    "id": "12843667",
    "timestamp": "Nov 1, 2016 11:28:10 AM",
    "topic": "Aboriginal Australians might carry DNA of unknown human species",
    "url": "http://www.abc.net.au/news/2016-10-26/dna-of-extinct-human-species-pacific-islanders-analysis-suggests/7968950",
    "votes": 3,
    "posted": "Nov 1, 2016 6:43:32 AM"
  },
  {
    "id": "12843597",
    "timestamp": "Nov 1, 2016 6:37:44 AM",
    "topic": "Math and Physics Taught by Robin Williams and Steve Martin",
    "url": "https://www.youtube.com/watch?v\u003dFHW45zw23gU",
    "votes": 3,
    "posted": "Nov 1, 2016 6:18:10 AM"
  },
  {
    "id": "12843590",
    "timestamp": "Nov 1, 2016 6:57:46 AM",
    "topic": "Ask HN: How to make a career working remotely?",
    "votes": 4,
    "posted": "Nov 1, 2016 6:15:48 AM"
  },
  {
    "id": "12843517",
    "timestamp": "Nov 1, 2016 4:38:38 PM",
    "topic": "Stark, Spare, Beautiful Midcentury British Safety Posters",
    "url": "http://www.slate.com/blogs/the_vault/2016/09/16/modernist_british_safety_posters_from_the_middle_of_the_twentieth_century.html",
    "votes": 3,
    "posted": "Nov 1, 2016 5:54:48 AM"
  },
  {
    "id": "12843466",
    "timestamp": "Nov 1, 2016 6:07:42 AM",
    "topic": "Show HN: My first web app",
    "url": "http://www.createamemo.com",
    "votes": 7,
    "posted": "Nov 1, 2016 5:39:48 AM"
  },
  {
    "id": "12843442",
    "timestamp": "Nov 1, 2016 2:18:24 PM",
    "topic": "Meet the Man Bringing Chinese Science Fiction to the West",
    "url": "http://www.newsweek.com/man-bringing-chinese-science-fiction-west-514893",
    "votes": 3,
    "posted": "Nov 1, 2016 5:33:23 AM"
  },
  {
    "id": "12843440",
    "timestamp": "Nov 1, 2016 8:17:52 AM",
    "topic": "Ask HN: What tools do you use to prototype web UI?",
    "votes": 6,
    "posted": "Nov 1, 2016 5:32:26 AM"
  },
  {
    "id": "12843397",
    "timestamp": "Nov 1, 2016 10:29:16 PM",
    "topic": "Ask HN: What\u0027s the best way to learn frontend development nowadays?",
    "votes": 6,
    "posted": "Nov 1, 2016 5:17:53 AM"
  },
  {
    "id": "12843369",
    "timestamp": "Nov 1, 2016 8:17:52 AM",
    "topic": "FreeDOS 1.2 RC1",
    "url": "http://opensource-usability.blogspot.com/2016/10/freedos-12-rc1.html",
    "votes": 4,
    "posted": "Nov 1, 2016 5:11:06 AM"
  },
  {
    "id": "12843344",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: Coffee Break, Mini Games on FB Messenger",
    "url": "https://coffeebreak.games",
    "votes": 5,
    "posted": "Nov 1, 2016 5:07:14 AM"
  },
  {
    "id": "12843253",
    "timestamp": "Nov 1, 2016 6:27:43 AM",
    "topic": "Is Dark Silicon Useful? (2012) [pdf]",
    "url": "http://cseweb.ucsd.edu/~mbtaylor/papers/taylor_dark_silicon_horsemen_dac_2012.pdf",
    "votes": 4,
    "posted": "Nov 1, 2016 4:51:02 AM"
  },
  {
    "id": "12843244",
    "timestamp": "Nov 1, 2016 5:57:41 AM",
    "topic": "Postmates Secures $141M in a ‘Super, Super Difficult’ Fundraising Effort",
    "url": "https://www.bloomberg.com/news/articles/2016-10-31/postmates-secures-141-million-in-a-super-super-difficult-fundraising-effort",
    "votes": 6,
    "posted": "Nov 1, 2016 4:48:57 AM"
  },
  {
    "id": "12843221",
    "timestamp": "Nov 1, 2016 5:47:40 AM",
    "topic": "Show HN: Physics-based CAD",
    "url": "http://www.prandtl.design/",
    "votes": 6,
    "posted": "Nov 1, 2016 4:45:50 AM"
  },
  {
    "id": "12843145",
    "timestamp": "Nov 1, 2016 4:57:36 AM",
    "topic": "Freelance Isn\u0027t Free Act Passes in NYC",
    "url": "https://blog.freelancersunion.org/2016/10/27/freelanceisntfreepassed/",
    "votes": 3,
    "posted": "Nov 1, 2016 4:31:55 AM"
  },
  {
    "id": "12843118",
    "timestamp": "Nov 1, 2016 5:17:37 AM",
    "topic": "Ask HN: what tool do you use to manage your todo list?",
    "votes": 4,
    "posted": "Nov 1, 2016 4:26:18 AM"
  },
  {
    "id": "12843094",
    "timestamp": "Nov 1, 2016 4:27:33 AM",
    "topic": "Checkr (YC S14) is hiring back end engineers to build the future of online trust",
    "url": "http://grnh.se/1nm6k8",
    "votes": 1,
    "posted": "Nov 1, 2016 4:17:46 AM"
  },
  {
    "id": "12843082",
    "timestamp": "Nov 1, 2016 10:38:04 AM",
    "topic": "JTAGing Mobile Phones",
    "url": "https://sysforensics.org/2016/08/jtaging-mobile-phones/",
    "votes": 3,
    "posted": "Nov 1, 2016 4:13:46 AM"
  },
  {
    "id": "12843009",
    "timestamp": "Nov 1, 2016 4:17:32 AM",
    "topic": "Microsoft Flow",
    "url": "https://flow.microsoft.com",
    "votes": 4,
    "posted": "Nov 1, 2016 3:55:34 AM"
  },
  {
    "id": "12842915",
    "timestamp": "Nov 1, 2016 3:47:30 AM",
    "topic": "Who\u0027s to Blame for the 16 GB RAM Limit on the New MacBook Pros: Apple or Intel?",
    "url": "http://daringfireball.net/linked/2016/10/31/intel-mbp-ram",
    "votes": 5,
    "posted": "Nov 1, 2016 3:29:18 AM"
  },
  {
    "id": "12842908",
    "timestamp": "Nov 1, 2016 3:57:31 AM",
    "topic": "IntelliJ IDEA 2016.3 EAP Is Open",
    "url": "https://blog.jetbrains.com/idea/2016/08/intellij-idea-2016-3-eap-is-open/",
    "votes": 3,
    "posted": "Nov 1, 2016 3:27:31 AM"
  },
  {
    "id": "12842875",
    "timestamp": "Nov 1, 2016 3:27:28 AM",
    "topic": "Trump shown to have used legally dubious tax evasion schemes",
    "url": "http://www.nytimes.com/2016/11/01/us/politics/donald-trump-tax.html?_r\u003d1\u0026register\u003dgoogle",
    "votes": 3,
    "posted": "Nov 1, 2016 3:19:11 AM"
  },
  {
    "id": "12842854",
    "timestamp": "Nov 1, 2016 5:27:38 AM",
    "topic": "JavaScript: A Horror Story",
    "url": "https://eev.ee/blog/2016/10/31/javascript-a-horror-story/",
    "votes": 3,
    "posted": "Nov 1, 2016 3:14:11 AM"
  },
  {
    "id": "12842802",
    "timestamp": "Nov 1, 2016 3:07:26 AM",
    "topic": "A Spy Has Given the FBI Information Alleging Russians Cultivate Donald Trump",
    "url": "http://www.motherjones.com/politics/2016/10/veteran-spy-gave-fbi-info-alleging-russian-operation-cultivate-donald-trump",
    "votes": 4,
    "posted": "Nov 1, 2016 3:00:05 AM"
  },
  {
    "id": "12842797",
    "timestamp": "Nov 1, 2016 3:17:27 AM",
    "topic": "KQ: Simple Job Queue for Python Using Kafka",
    "url": "https://github.com/joowani/kq",
    "votes": 7,
    "posted": "Nov 1, 2016 2:58:47 AM"
  },
  {
    "id": "12842684",
    "timestamp": "Nov 1, 2016 5:18:41 PM",
    "topic": "Firms envision ways for New York to absorb 9M residents",
    "url": "http://www.crainsnewyork.com/article/20161030/REAL_ESTATE/161029841/12-firms-envision-ways-for-new-york-to-absorb-9-million-residents",
    "votes": 5,
    "posted": "Nov 1, 2016 2:35:17 AM"
  },
  {
    "id": "12842616",
    "timestamp": "Nov 1, 2016 3:27:28 AM",
    "topic": "Breaking the Multicore Bottleneck",
    "url": "http://spectrum.ieee.org/semiconductors/processors/breaking-the-multicore-bottleneck",
    "votes": 4,
    "posted": "Nov 1, 2016 2:22:54 AM"
  },
  {
    "id": "12842406",
    "timestamp": "Nov 1, 2016 4:07:32 AM",
    "topic": "Show HN: Django-traffic, a Middleware for traffic visualizations in Kibana",
    "url": "https://koslib.com/2016/10/29/django-traffic-a-middleware-for-traffic-visualizations-in-kibana/",
    "votes": 3,
    "posted": "Nov 1, 2016 1:40:25 AM"
  },
  {
    "id": "12842270",
    "timestamp": "Nov 1, 2016 2:27:23 AM",
    "topic": "How Apple could have avoided much of the controversy",
    "url": "https://chuqui.com/2016/10/how-apple-could-have-avoided-much-of-the-controversy/",
    "votes": 7,
    "posted": "Nov 1, 2016 1:20:06 AM"
  },
  {
    "id": "12842249",
    "timestamp": "Nov 1, 2016 7:37:49 AM",
    "topic": "New leak may show if you were hacked by the NSA",
    "url": "http://arstechnica.com/security/2016/10/new-leak-may-show-if-you-were-hacked-by-the-nsa/",
    "votes": 3,
    "posted": "Nov 1, 2016 1:18:24 AM"
  },
  {
    "id": "12842204",
    "timestamp": "Nov 1, 2016 1:27:18 AM",
    "topic": "Walmart Will Manage Distribution Centers with OneOps, Jenkins, and Kubernetes",
    "url": "http://www.techbetter.com/walmart-will-manage-200-distribution-centers-oneops-jenkins-nexus-kubernetes/",
    "votes": 3,
    "posted": "Nov 1, 2016 1:12:57 AM"
  },
  {
    "id": "12842189",
    "timestamp": "Nov 1, 2016 5:37:39 AM",
    "topic": "Japan\u0027s purple machine [pdf]",
    "url": "http://ovid.cs.depaul.edu/Classes/CS233-W04/Papers/PurpleMagic.pdf",
    "votes": 3,
    "posted": "Nov 1, 2016 1:11:18 AM"
  },
  {
    "id": "12842090",
    "timestamp": "Nov 1, 2016 2:17:22 AM",
    "topic": "Eric Schmidt on how to identify, meet and update profiles on voter (real id.)",
    "url": "https://wikileaks.org/podesta-emails/emailid/37262",
    "votes": 8,
    "posted": "Nov 1, 2016 12:58:08 AM"
  },
  {
    "id": "12842080",
    "timestamp": "Nov 1, 2016 1:27:18 AM",
    "topic": "It\u0027s Harder to Get an Uber or Lyft If You\u0027re Black, Study Says",
    "url": "http://time.com/4551521/uber-lyft-black-discrimination/",
    "votes": 5,
    "posted": "Nov 1, 2016 12:57:03 AM"
  },
  {
    "id": "12842050",
    "timestamp": "Nov 1, 2016 12:57:14 AM",
    "topic": "Canopy Labs (YC S12) Is Hiring a SysOps Engineer",
    "votes": 1,
    "posted": "Nov 1, 2016 12:51:59 AM"
  },
  {
    "id": "12842018",
    "timestamp": "Nov 1, 2016 1:17:16 AM",
    "topic": "Peter Thiel Backing Trump Suggests Silicon Valley Is Out of Touch",
    "url": "http://www.nytimes.com/2016/11/01/technology/peter-thiel-on-donald-trump-media-silicon-valley.html",
    "votes": 5,
    "posted": "Nov 1, 2016 12:47:30 AM"
  },
  {
    "id": "12842015",
    "timestamp": "Nov 1, 2016 1:07:15 AM",
    "topic": "How a Fake British Accent Took Old Hollywood by Storm",
    "url": "http://www.atlasobscura.com/articles/how-a-fake-british-accent-took-old-hollywood-by-storm",
    "votes": 3,
    "posted": "Nov 1, 2016 12:46:33 AM"
  },
  {
    "id": "12842006",
    "timestamp": "Nov 1, 2016 12:57:14 AM",
    "topic": "Barack Obama: Now Is the Greatest Time to Be Alive",
    "url": "https://www.wired.com/2016/10/president-obama-guest-edits-wired-essay?mbid\u003dsocial_twitter",
    "votes": 12,
    "posted": "Nov 1, 2016 12:44:00 AM"
  },
  {
    "id": "12841993",
    "timestamp": "Nov 1, 2016 12:57:14 AM",
    "topic": "Google Is Not What It Seems",
    "url": "https://wikileaks.org/google-is-not-what-it-seems/",
    "votes": 4,
    "posted": "Nov 1, 2016 12:42:29 AM"
  },
  {
    "id": "12841981",
    "timestamp": "Nov 1, 2016 10:49:19 PM",
    "topic": "‘Post-Fire London was a magnificent, beautiful compromise’",
    "url": "http://www.apollo-magazine.com/post-fire-london-magnificent-beautiful-compromise/",
    "votes": 5,
    "posted": "Nov 1, 2016 12:40:45 AM"
  },
  {
    "id": "12841884",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: DotConfigs- Framework to auto-configure and sync between linux machines",
    "url": "https://github.com/BrandonBielicki/dotconfigs",
    "votes": 3,
    "posted": "Nov 1, 2016 12:23:54 AM"
  },
  {
    "id": "12841875",
    "timestamp": "Nov 3, 2016 11:13:47 PM",
    "topic": "Purses and foldouts – unexpected challenges of digitisation",
    "url": "http://blog.wellcomelibrary.org/2016/10/purses-and-foldouts-unexpected-challenges-of-digitisation/",
    "votes": 4,
    "posted": "Nov 1, 2016 12:22:25 AM"
  },
  {
    "id": "12841860",
    "timestamp": "Nov 1, 2016 12:47:13 AM",
    "topic": "Distrusting WoSign and StartCom Certificates",
    "url": "https://security.googleblog.com/2016/10/distrusting-wosign-and-startcom.html",
    "votes": 7,
    "posted": "Nov 1, 2016 12:20:57 AM"
  },
  {
    "id": "12841803",
    "timestamp": "Nov 1, 2016 7:17:47 AM",
    "topic": "Microsoft reimagines open source cloud hardware",
    "url": "https://azure.microsoft.com/en-us/blog/microsoft-reimagines-open-source-cloud-hardware/",
    "votes": 4,
    "posted": "Nov 1, 2016 12:11:01 AM"
  },
  {
    "id": "12841766",
    "timestamp": "Nov 1, 2016 2:57:25 AM",
    "topic": "Study says women better coders than men – but only if they hide their gender [pdf]",
    "url": "https://peerj.com/preprints/1733v1.pdf",
    "votes": 3,
    "posted": "Nov 1, 2016 12:05:13 AM"
  },
  {
    "id": "12841718",
    "timestamp": "Nov 1, 2016 12:17:09 AM",
    "topic": "Edge web platform status",
    "url": "https://developer.microsoft.com/en-us/microsoft-edge/platform/status/",
    "votes": 5,
    "posted": "Oct 31, 2016 11:58:21 PM"
  },
  {
    "id": "12841672",
    "timestamp": "Nov 1, 2016 12:07:08 AM",
    "topic": "Disclosing vulnerabilities before a patch is available to protect users",
    "url": "https://security.googleblog.com/2016/10/disclosing-vulnerabilities-to-protect.html?m\u003d1",
    "votes": 5,
    "posted": "Oct 31, 2016 11:50:34 PM"
  },
  {
    "id": "12841641",
    "timestamp": "Nov 1, 2016 12:17:09 AM",
    "topic": "This CNET page weighs 131 MB",
    "url": "https://twitter.com/addyosmani/status/793197147713773568",
    "votes": 5,
    "posted": "Oct 31, 2016 11:45:33 PM"
  },
  {
    "id": "12841628",
    "timestamp": "Oct 31, 2016 11:57:07 PM",
    "topic": "FBI\u0027s Comey opposed naming Russians, citing election timing",
    "url": "http://www.cnbc.com/2016/10/31/fbis-comey-opposed-naming-russians-citing-election-timing-source.html",
    "votes": 4,
    "posted": "Oct 31, 2016 11:43:12 PM"
  },
  {
    "id": "12841611",
    "timestamp": "Nov 1, 2016 12:17:10 AM",
    "topic": "CQRS increases consistency",
    "url": "https://jazzy.id.au/2016/10/08/cqrs-increases-consistency.html",
    "votes": 3,
    "posted": "Oct 31, 2016 11:40:38 PM"
  },
  {
    "id": "12841599",
    "timestamp": "Oct 31, 2016 11:57:07 PM",
    "topic": "VIM – Avoid the escape key",
    "url": "http://vim.wikia.com/wiki/Avoid_the_escape_key",
    "votes": 3,
    "posted": "Oct 31, 2016 11:38:16 PM"
  },
  {
    "id": "12841581",
    "timestamp": "Nov 1, 2016 12:27:11 AM",
    "topic": "The future of video… 5 steps between now and the VR/AR world",
    "url": "https://medium.com/@Nicquinn/the-future-of-video-5-steps-between-now-and-the-vr-ar-world-4f7b9a38a4bb#.crpk7l8gf",
    "votes": 3,
    "posted": "Oct 31, 2016 11:35:13 PM"
  },
  {
    "id": "12841552",
    "timestamp": "Oct 31, 2016 11:47:06 PM",
    "topic": "Google issues warning of critical Windows vulnerability in wild",
    "url": "http://arstechnica.com/security/2016/10/trick-or-treat-google-issues-warning-of-critical-windows-vulnerability/",
    "votes": 4,
    "posted": "Oct 31, 2016 11:30:51 PM"
  },
  {
    "id": "12841531",
    "timestamp": "Oct 31, 2016 11:37:04 PM",
    "topic": "Help Your Users Vote",
    "url": "https://medium.com/voteplz/help-your-users-vote-6ee61dcf224d#.l9us594st",
    "votes": 12,
    "posted": "Oct 31, 2016 11:26:30 PM"
  },
  {
    "id": "12841489",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Nitrous Service Shutdown – November 14th",
    "url": "https://community.nitrous.io/posts/nitrous-service-shutdown-november-14th",
    "votes": 7,
    "posted": "Oct 31, 2016 11:20:35 PM"
  },
  {
    "id": "12841444",
    "timestamp": "Oct 31, 2016 11:37:04 PM",
    "topic": "Notes on the upcoming release of Scala 2.12 (Java 8)",
    "url": "http://get-scala.org/2.12",
    "votes": 6,
    "posted": "Oct 31, 2016 11:14:56 PM"
  },
  {
    "id": "12841407",
    "timestamp": "Nov 1, 2016 12:57:14 AM",
    "topic": "Ask HN: Can the location of a company help avoid patent disputes?",
    "votes": 3,
    "posted": "Oct 31, 2016 11:10:06 PM"
  },
  {
    "id": "12841389",
    "timestamp": "Oct 31, 2016 11:47:06 PM",
    "topic": "I Put Ads in My App – This Is What Losing Looks Like",
    "url": "https://medium.com/@sisedi/i-put-ads-in-my-app-this-is-what-losing-looks-like-3249d34364f8",
    "votes": 3,
    "posted": "Oct 31, 2016 11:07:27 PM"
  },
  {
    "id": "12841323",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Nitrous.io is shutting down",
    "url": "http://us4.campaign-archive1.com/?u\u003d40aef44b6df80a146dc4163c7\u0026id\u003d99995282f8\u0026e\u003d952a866202",
    "votes": 13,
    "posted": "Oct 31, 2016 10:59:02 PM"
  },
  {
    "id": "12841299",
    "timestamp": "Nov 1, 2016 5:48:44 PM",
    "topic": "Simple Lane Detection – My Road to Self Drive Cars",
    "url": "http://sdc.autojazari.com/lane-detection/",
    "votes": 3,
    "posted": "Oct 31, 2016 10:54:55 PM"
  },
  {
    "id": "12841288",
    "timestamp": "Oct 31, 2016 11:17:02 PM",
    "topic": "A Trump Server May Have Been Communicating with a Russian Bank",
    "url": "http://www.slate.com/articles/news_and_politics/cover_story/2016/10/was_a_server_registered_to_the_trump_organization_communicating_with_russia.html",
    "votes": 11,
    "posted": "Oct 31, 2016 10:53:29 PM"
  },
  {
    "id": "12841278",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Intel, TSMC and other chipmakers weigh extreme ultraviolet lithography",
    "url": "http://spectrum.ieee.org/semiconductors/devices/leading-chipmakers-eye-euv-lithography-to-save-moores-law",
    "votes": 3,
    "posted": "Oct 31, 2016 10:51:53 PM"
  },
  {
    "id": "12841261",
    "timestamp": "Nov 1, 2016 3:07:26 AM",
    "topic": "Want more startups? Build a better safety net",
    "url": "https://www.bloomberg.com/view/articles/2016-10-28/want-more-startups-build-a-better-safety-net",
    "votes": 3,
    "posted": "Oct 31, 2016 10:50:15 PM"
  },
  {
    "id": "12841252",
    "timestamp": "Nov 1, 2016 1:17:17 AM",
    "topic": "Machines That Learn to Code and Take Your Job",
    "url": "https://dev.to/ben/machines-that-learn-to-code-and-take-your-job",
    "votes": 5,
    "posted": "Oct 31, 2016 10:48:30 PM"
  },
  {
    "id": "12841178",
    "timestamp": "Oct 31, 2016 11:57:07 PM",
    "topic": "Votes are being counted as fractions instead of as whole numbers",
    "url": "http://blackboxvoting.org/fraction-magic-1/",
    "votes": 4,
    "posted": "Oct 31, 2016 10:40:33 PM"
  },
  {
    "id": "12841149",
    "timestamp": "Oct 31, 2016 10:56:59 PM",
    "topic": "Why Mac apps never get “closed”",
    "url": "http://unix.stackexchange.com/a/5160/111087",
    "votes": 3,
    "posted": "Oct 31, 2016 10:37:00 PM"
  },
  {
    "id": "12841082",
    "timestamp": "Oct 31, 2016 10:46:57 PM",
    "topic": "Academics Write Papers Arguing Over How Many People Read (And Cite) Their Papers",
    "url": "http://www.smithsonianmag.com/smart-news/half-academic-studies-are-never-read-more-three-people-180950222/?no-ist",
    "votes": 7,
    "posted": "Oct 31, 2016 10:30:11 PM"
  },
  {
    "id": "12840940",
    "timestamp": "Nov 1, 2016 12:07:08 AM",
    "topic": "Touch Bar Everywhere",
    "url": "http://bitsplitting.org/2016/10/31/touch-bar-everywhere/",
    "votes": 3,
    "posted": "Oct 31, 2016 10:08:48 PM"
  },
  {
    "id": "12840938",
    "timestamp": "Oct 31, 2016 10:26:53 PM",
    "topic": "Google discloses Windows vulnerability just 10 days after reporting it to MSFT",
    "url": "http://venturebeat.com/2016/10/31/google-discloses-actively-exploited-windows-vulnerability-just-10-days-after-reporting-it-to-microsoft/",
    "votes": 4,
    "posted": "Oct 31, 2016 10:08:31 PM"
  },
  {
    "id": "12840903",
    "timestamp": "Oct 31, 2016 10:36:55 PM",
    "topic": "The death of transit? – APNIC Blog",
    "url": "https://blog.apnic.net/2016/10/28/the-death-of-transit/",
    "votes": 3,
    "posted": "Oct 31, 2016 10:03:05 PM"
  },
  {
    "id": "12840882",
    "timestamp": "Oct 31, 2016 11:17:01 PM",
    "topic": "Disappointment with 2016 Macbook Pro pushes Apple loyalists to alternatives",
    "url": "http://betanews.com/2016/10/30/macbook-pro-2016-disappointment-pushes-some-apple-loyalists-to-ubuntu-linux/",
    "votes": 5,
    "posted": "Oct 31, 2016 10:00:35 PM"
  },
  {
    "id": "12840803",
    "timestamp": "Oct 31, 2016 11:57:07 PM",
    "topic": "Service discovery at Stripe",
    "url": "https://stri.pe/blog/service-discovery-at-stripe",
    "votes": 10,
    "posted": "Oct 31, 2016 9:50:06 PM"
  },
  {
    "id": "12840787",
    "timestamp": "Oct 31, 2016 9:56:49 PM",
    "topic": "MacBook Pro: Take on some of the criticisms being levelled at the new models",
    "url": "https://9to5mac.com/2016/10/31/macbook-pro-diary-opinion-criticisms/",
    "votes": 3,
    "posted": "Oct 31, 2016 9:48:11 PM"
  },
  {
    "id": "12840778",
    "timestamp": "Oct 31, 2016 10:36:54 PM",
    "topic": "Keith Ohlfs, NeXTSTEP Designer, has passed away",
    "url": "https://techcrunch.com/2016/10/31/keith-ohlfs/",
    "votes": 7,
    "posted": "Oct 31, 2016 9:46:01 PM"
  },
  {
    "id": "12840766",
    "timestamp": "Nov 1, 2016 3:07:26 AM",
    "topic": "Recording Police Is Protected by the First Amendment, EFF Tells Court",
    "url": "https://www.eff.org/press/releases/recording-police-protected-first-amendment-eff-tells-court",
    "votes": 5,
    "posted": "Oct 31, 2016 9:44:16 PM"
  },
  {
    "id": "12840754",
    "timestamp": "Oct 31, 2016 10:36:55 PM",
    "topic": "How ReadMe Went from SaaS to On-Premises in Less Than One Week",
    "url": "http://stackshare.io/readme-io/how-readme-went-from-saas-to-on-premises-in-less-than-one-week",
    "votes": 19,
    "posted": "Oct 31, 2016 9:42:43 PM"
  },
  {
    "id": "12840690",
    "timestamp": "Oct 31, 2016 9:36:39 PM",
    "topic": "ReadMe (YC W15) is looking for a remote part-time developer blogger",
    "url": "http://readme.io/careers/#job-developer-blogger",
    "votes": 1,
    "posted": "Oct 31, 2016 9:33:26 PM"
  },
  {
    "id": "12840685",
    "timestamp": "Oct 31, 2016 9:46:41 PM",
    "topic": "How the Presidential Transition Works in the Social Media Age",
    "url": "https://www.whitehouse.gov/blog/2016/10/31/digital-transition-how-presidential-transition-works-social-media-age",
    "votes": 3,
    "posted": "Oct 31, 2016 9:33:01 PM"
  },
  {
    "id": "12840677",
    "timestamp": "Oct 31, 2016 9:56:49 PM",
    "topic": "New leak may show if you were hacked by the NSA",
    "url": "http://arstechnica.co.uk/security/2016/10/new-leak-may-show-if-you-were-hacked-by-the-nsa/",
    "votes": 4,
    "posted": "Oct 31, 2016 9:31:55 PM"
  },
  {
    "id": "12840645",
    "timestamp": "Nov 1, 2016 5:17:37 AM",
    "topic": "Gnome and Rust",
    "url": "https://siliconislandblog.wordpress.com/2016/10/31/thoughts-on-dx-gnome-and-rust/",
    "votes": 5,
    "posted": "Oct 31, 2016 9:27:57 PM"
  },
  {
    "id": "12840644",
    "timestamp": "Oct 31, 2016 9:46:42 PM",
    "topic": "Redux is Overhyped",
    "url": "https://medium.com/@shakiba/redux-is-overhyped-3ad6e42b7730#.qjcq7xtc5",
    "votes": 4,
    "posted": "Oct 31, 2016 9:27:54 PM"
  },
  {
    "id": "12840567",
    "timestamp": "Oct 31, 2016 10:36:56 PM",
    "topic": "Solving the Linux kernel code reviewer shortage",
    "url": "https://opensource.com/business/16/10/linux-kernel-review",
    "votes": 3,
    "posted": "Oct 31, 2016 9:19:20 PM"
  },
  {
    "id": "12840560",
    "timestamp": "Nov 1, 2016 1:07:16 AM",
    "topic": "Eight Atom Editor Packages for Easier Web Development",
    "url": "https://spin.atomicobject.com/2016/10/27/129088/",
    "votes": 4,
    "posted": "Oct 31, 2016 9:18:38 PM"
  },
  {
    "id": "12840555",
    "timestamp": "Oct 31, 2016 9:46:41 PM",
    "topic": "No One Saw Tesla’s Solar Roof Coming",
    "url": "https://www.bloomberg.com/news/articles/2016-10-31/no-one-saw-tesla-s-solar-roof-coming",
    "votes": 12,
    "posted": "Oct 31, 2016 9:18:08 PM"
  },
  {
    "id": "12840499",
    "timestamp": "Oct 31, 2016 9:36:39 PM",
    "topic": "Peter Thiel defends $1.25M donation to pro-Trump campaign",
    "url": "http://www.theverge.com/2016/10/31/13476734/investor-peter-thiel-donald-trump-donation-defense-speech",
    "votes": 6,
    "posted": "Oct 31, 2016 9:13:37 PM"
  },
  {
    "id": "12840492",
    "timestamp": "Nov 1, 2016 1:07:15 AM",
    "topic": "Sanos Operating System for Win32, Server Appliances",
    "url": "http://www.jbox.dk/sanos/",
    "votes": 4,
    "posted": "Oct 31, 2016 9:13:15 PM"
  },
  {
    "id": "12840476",
    "timestamp": "Nov 1, 2016 1:07:15 AM",
    "topic": "New documentation for spaCy NLP 1.0",
    "url": "https://spacy.io/docs",
    "votes": 4,
    "posted": "Oct 31, 2016 9:11:49 PM"
  },
  {
    "id": "12840473",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Maybe Peter Thiel Is Just a Crank",
    "url": "http://nymag.com/selectall/2016/10/maybe-peter-thiel-is-just-a-crank.html",
    "votes": 3,
    "posted": "Oct 31, 2016 9:11:29 PM"
  },
  {
    "id": "12840414",
    "timestamp": "Oct 31, 2016 9:46:42 PM",
    "topic": "Year 2038 problem",
    "url": "https://en.wikipedia.org/wiki/Year_2038_problem",
    "votes": 5,
    "posted": "Oct 31, 2016 9:05:10 PM"
  },
  {
    "id": "12840411",
    "timestamp": "Nov 3, 2016 12:31:42 AM",
    "topic": "Bringing the Drugstore Home: An Interview with Deanna Day",
    "url": "http://www.cabinetmagazine.org/issues/60/kastner_day.php",
    "votes": 3,
    "posted": "Oct 31, 2016 9:04:53 PM"
  },
  {
    "id": "12840397",
    "timestamp": "Oct 31, 2016 9:36:39 PM",
    "topic": "Is Finishing Side Projects Hard for You Too",
    "url": "https://medium.com/@jtwebman/is-finishing-side-projects-hard-5c3f03e131d8",
    "votes": 4,
    "posted": "Oct 31, 2016 9:03:27 PM"
  },
  {
    "id": "12840368",
    "timestamp": "Oct 31, 2016 10:06:50 PM",
    "topic": "The Cancelled Comma One Would Have Embarrassed the Car Industry",
    "url": "http://www.thedrive.com/tech/5772/the-cancelled-comma-one-would-have-embarrassed-the-car-industry",
    "votes": 4,
    "posted": "Oct 31, 2016 9:01:13 PM"
  },
  {
    "id": "12840335",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: How to train your brain with the Peg System",
    "url": "https://dacobots.com/#The_Peg_System",
    "votes": 3,
    "posted": "Oct 31, 2016 8:58:27 PM"
  },
  {
    "id": "12840329",
    "timestamp": "Oct 31, 2016 9:16:25 PM",
    "topic": "Making Chrome on Windows Faster with PGO",
    "url": "https://blog.chromium.org/2016/10/making-chrome-on-windows-faster-with-pgo.html",
    "votes": 7,
    "posted": "Oct 31, 2016 8:57:13 PM"
  },
  {
    "id": "12840326",
    "timestamp": "Oct 31, 2016 9:16:26 PM",
    "topic": "In the UK, You Will Go to Jail Not Just for Encryption, but for Noise, Too",
    "url": "http://falkvinge.net/2012/07/12/in-the-uk-you-will-go-to-jail-not-just-for-encryption-but-for-astronomical-noise-too/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:57:04 PM"
  },
  {
    "id": "12840286",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: A simple front-end to Jekyll to create and publish academic websites",
    "url": "http://my.academic.bio",
    "votes": 4,
    "posted": "Oct 31, 2016 8:52:33 PM"
  },
  {
    "id": "12840284",
    "timestamp": "Oct 31, 2016 9:26:38 PM",
    "topic": "Ask HN: Is discussion of wikileaks not allowed?",
    "votes": 15,
    "posted": "Oct 31, 2016 8:52:02 PM"
  },
  {
    "id": "12840267",
    "timestamp": "Oct 31, 2016 10:36:56 PM",
    "topic": "Show HN: Load-Balanced LED Cluster Demo with Raspberry Pis",
    "url": "https://www.youtube.com/watch?v\u003dIaKRqBRq6CE",
    "votes": 4,
    "posted": "Oct 31, 2016 8:49:38 PM"
  },
  {
    "id": "12840262",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "Apple says no fun allowed on the Touch Bar",
    "url": "https://techcrunch.com/2016/10/27/apple-says-no-fun-allowed-on-the-touch-bar/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:48:40 PM"
  },
  {
    "id": "12840254",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "How Florida\u0027s electricity utilities are manipulating voters to oppose solar",
    "url": "https://electrek.co/2016/10/30/how-the-electricity-utilities-use-a-little-bit-of-political-jiu-jitsu-to-steal-the-sun/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:48:01 PM"
  },
  {
    "id": "12840251",
    "timestamp": "Oct 31, 2016 8:56:22 PM",
    "topic": "Clinton got previews of some debate questions",
    "url": "https://www.washingtonpost.com/news/the-fix/wp/2016/10/31/hacked-emails-suggest-trump-was-right-after-all-clinton-got-previews-of-some-debate-questions/?tid\u003dsm_tw",
    "votes": 7,
    "posted": "Oct 31, 2016 8:47:40 PM"
  },
  {
    "id": "12840118",
    "timestamp": "Oct 31, 2016 8:46:21 PM",
    "topic": "Peter Thiel Speaks at the National Press Club",
    "url": "https://www.youtube.com/watch?v\u003dob-LJqPQEJ4\u0026utm\u003demail",
    "votes": 5,
    "posted": "Oct 31, 2016 8:32:14 PM"
  },
  {
    "id": "12840116",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "Warren wing wants Clinton to crack down on Apple, Google and Amazon",
    "url": "http://www.politico.com/story/2016/10/warren-clinton-google-apple-amazon-230274",
    "votes": 6,
    "posted": "Oct 31, 2016 8:32:05 PM"
  },
  {
    "id": "12840105",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "We\u0027re bad at tracking deadly storms, but NY has a new way to see them coming",
    "url": "http://www.theverge.com/2016/10/31/13440952/extreme-weather-forecasting-new-york-mesonet-warning-system",
    "votes": 3,
    "posted": "Oct 31, 2016 8:30:39 PM"
  },
  {
    "id": "12840057",
    "timestamp": "Oct 31, 2016 8:46:21 PM",
    "topic": "Apple\u0027s October TV Surprise",
    "url": "http://joe-steel.com/2016-10-28-Apples-October-TV-Surprise.html",
    "votes": 10,
    "posted": "Oct 31, 2016 8:23:54 PM"
  },
  {
    "id": "12840012",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "This Machine Was Built to Give You Nightmares",
    "url": "http://fivethirtyeight.com/features/this-machine-was-built-to-give-you-nightmares/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:18:48 PM"
  },
  {
    "id": "12840009",
    "timestamp": "Oct 31, 2016 10:26:53 PM",
    "topic": "Disclosing vulnerabilities to protect users",
    "url": "https://security.googleblog.com/2016/10/disclosing-vulnerabilities-to-protect.html",
    "votes": 4,
    "posted": "Oct 31, 2016 8:18:40 PM"
  },
  {
    "id": "12840008",
    "timestamp": "Oct 31, 2016 8:46:21 PM",
    "topic": "Racial and Gender Discrimination in Transportation Network Companies",
    "url": "http://www.nber.org/papers/w22776",
    "votes": 4,
    "posted": "Oct 31, 2016 8:18:33 PM"
  },
  {
    "id": "12839971",
    "timestamp": "Nov 1, 2016 1:07:15 AM",
    "topic": "Show HN: Node-Lepton – Node.js Library for Dropbox Lepton",
    "url": "https://github.com/whitef0x0/node-lepton",
    "votes": 3,
    "posted": "Oct 31, 2016 8:13:49 PM"
  },
  {
    "id": "12839952",
    "timestamp": "Nov 1, 2016 2:18:24 PM",
    "topic": "The Lost Virtue of Cursive",
    "url": "http://www.newyorker.com/books/page-turner/the-lost-virtue-of-cursive",
    "votes": 3,
    "posted": "Oct 31, 2016 8:11:58 PM"
  },
  {
    "id": "12839901",
    "timestamp": "Oct 31, 2016 9:36:39 PM",
    "topic": "6 Foolproof Ways to Deal with Trolls on Medium",
    "url": "https://medium.com/@avalot/6-foolproof-ways-to-deal-with-trolls-on-medium-546865fdaed9#.f9is8nbuz",
    "votes": 4,
    "posted": "Oct 31, 2016 8:06:37 PM"
  },
  {
    "id": "12839861",
    "timestamp": "Oct 31, 2016 9:36:40 PM",
    "topic": "The Why: A Better Git Commit Message",
    "url": "https://8thlight.com/blog/dariusz-pasciak/2016/10/31/the-why-a-better-git-commit-message.html",
    "votes": 3,
    "posted": "Oct 31, 2016 8:01:46 PM"
  },
  {
    "id": "12839858",
    "timestamp": "Nov 1, 2016 2:18:24 PM",
    "topic": "C code for breaking the enigma cipher",
    "url": "http://practicalcryptography.com/cryptanalysis/breaking-machine-ciphers/cryptanalysis-enigma/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:01:40 PM"
  },
  {
    "id": "12839838",
    "timestamp": "Nov 1, 2016 1:07:16 AM",
    "topic": "PPP found that 19% of 985 surveyed believe Hillary to be an “actual demon” [pdf]",
    "url": "http://www.publicpolicypolling.com/pdf/2015/PPP_Release_FL_104161.pdf",
    "votes": 5,
    "posted": "Oct 31, 2016 7:59:07 PM"
  },
  {
    "id": "12839827",
    "timestamp": "Oct 31, 2016 11:37:05 PM",
    "topic": "Avoiding being bitten by Python: Common Python pitfalls",
    "url": "https://medium.com/rmotr-com/avoiding-being-bitten-by-python-161b063e7da2#.cw10qn76i",
    "votes": 4,
    "posted": "Oct 31, 2016 7:57:30 PM"
  }
];