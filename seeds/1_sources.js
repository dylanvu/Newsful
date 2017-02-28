'use strict';

exports.seed = function(knex) {
  return knex('sources').del().then(function() {
    return knex('sources').insert([
      {
        query: "abc-news-au",
        name: "ABC News (AU)",
        description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        url: "http://www.abc.net.au/news",
        category: "general",
        language: "en",
        country: "au",
        img_small: "http://i.newsapi.org/abc-news-au-s.png",
        img_medium: "http://i.newsapi.org/abc-news-au-m.png",
        img_large: "http://i.newsapi.org/abc-news-au-l.png",
        sortBysAvailable: "top"
      }, {
        query: "ars-technica",
        name: "Ars Technica",
        description: "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
        url: "http://arstechnica.com",
        category: "technology",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/ars-technica-s.png",
        img_medium: "http://i.newsapi.org/ars-technica-m.png",
        img_large: "http://i.newsapi.org/ars-technica-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "associated-press",
        name: "Associated Press",
        description: "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
        url: "http://bigstory.ap.org",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/associated-press-s.png",
        img_medium: "http://i.newsapi.org/associated-press-m.png",
        img_large: "http://i.newsapi.org/associated-press-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "bbc-news",
        name: "BBC News",
        description: "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
        url: "http://www.bbc.co.uk/news",
        category: "general",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/bbc-news-s.png",
        img_medium: "http://i.newsapi.org/bbc-news-m.png",
        img_large: "http://i.newsapi.org/bbc-news-l.png",
        sortBysAvailable: "top"
      }, {
        query: "bbc-sport",
        name: "BBC Sport",
        description: "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
        url: "http://www.bbc.co.uk/sport",
        category: "sport",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/bbc-sport-s.png",
        img_medium: "http://i.newsapi.org/bbc-sport-m.png",
        img_large: "http://i.newsapi.org/bbc-sport-l.png",
        sortBysAvailable: "top"
      }, {
        query: "bloomberg",
        name: "Bloomberg",
        description: "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
        url: "http://www.bloomberg.com",
        category: "business",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/bloomberg-s.png",
        img_medium: "http://i.newsapi.org/bloomberg-m.png",
        img_large: "http://i.newsapi.org/bloomberg-l.png",
        sortBysAvailable: "top"
      }, {
        query: "business-insider",
        name: "Business Insider",
        description: "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
        url: "http://www.businessinsider.com",
        category: "business",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/business-insider-s.png",
        img_medium: "http://i.newsapi.org/business-insider-m.png",
        img_large: "http://i.newsapi.org/business-insider-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "business-insider-uk",
        name: "Business Insider (UK)",
        description: "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
        url: "http://uk.businessinsider.com",
        category: "business",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/business-insider-uk-s.png",
        img_medium: "http://i.newsapi.org/business-insider-uk-m.png",
        img_large: "http://i.newsapi.org/business-insider-uk-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "buzzfeed",
        name: "Buzzfeed",
        description: "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
        url: "https://www.buzzfeed.com",
        category: "entertainment",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/buzzfeed-s.png",
        img_medium: "http://i.newsapi.org/buzzfeed-m.png",
        img_large: "http://i.newsapi.org/buzzfeed-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "cnbc",
        name: "CNBC",
        description: "Get latest business news on stock markets, financial & earnings on CNBC. View world markets streaming charts & video; check stock tickers and quotes.",
        url: "http://www.cnbc.com",
        category: "business",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/cnbc-s.png",
        img_medium: "http://i.newsapi.org/cnbc-m.png",
        img_large: "http://i.newsapi.org/cnbc-l.png",
        sortBysAvailable: "top"
      }, {
        query: "cnn",
        name: "CNN",
        description: "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
        url: "http://us.cnn.com",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/cnn-s.png",
        img_medium: "http://i.newsapi.org/cnn-m.png",
        img_large: "http://i.newsapi.org/cnn-l.png",
        sortBysAvailable: "top"
      }, {
        query: "daily-mail",
        name: "Daily Mail",
        description: "All the latest news, sport, showbiz, science and health stories from around the world from the Daily Mail and Mail on Sunday newspapers.",
        url: "http://www.dailymail.co.uk/home/index.html",
        category: "entertainment",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/daily-mail-s.png",
        img_medium: "http://i.newsapi.org/daily-mail-m.png",
        img_large: "http://i.newsapi.org/daily-mail-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "engadget",
        name: "Engadget",
        description: "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
        url: "https://www.engadget.com",
        category: "technology",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/engadget-s.png",
        img_medium: "http://i.newsapi.org/engadget-m.png",
        img_large: "http://i.newsapi.org/engadget-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "entertainment-weekly",
        name: "Entertainment Weekly",
        description: "Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
        url: "http://www.ew.com",
        category: "entertainment",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/entertainment-weekly-s.png",
        img_medium: "http://i.newsapi.org/entertainment-weekly-m.png",
        img_large: "http://i.newsapi.org/entertainment-weekly-l.png",
        sortBysAvailable: "top"
      }, {
        query: "espn",
        name: "ESPN",
        description: "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
        url: "http://espn.go.com",
        category: "sport",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/espn-s.png",
        img_medium: "http://i.newsapi.org/espn-m.png",
        img_large: "http://i.newsapi.org/espn-l.png",
        sortBysAvailable: "top"
      }, {
        query: "espn-cric-info",
        name: "ESPN Cric Info",
        description: "ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.",
        url: "http://www.espncricinfo.com/",
        category: "sport",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/espn-cric-info-s.png",
        img_medium: "http://i.newsapi.org/espn-cric-info-m.png",
        img_large: "http://i.newsapi.org/espn-cric-info-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "financial-times",
        name: "Financial Times",
        description: "The latest UK and international business, finance, economic and political news, comment and analysis from the Financial Times on FT.com.",
        url: "http://www.ft.com/home/uk",
        category: "business",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/financial-times-s.png",
        img_medium: "http://i.newsapi.org/financial-times-m.png",
        img_large: "http://i.newsapi.org/financial-times-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "football-italia",
        name: "Football Italia",
        description: "Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.",
        url: "http://www.football-italia.net",
        category: "sport",
        language: "en",
        country: "it",
        img_small: "http://i.newsapi.org/football-italia-s.png",
        img_medium: "http://i.newsapi.org/football-italia-m.png",
        img_large: "http://i.newsapi.org/football-italia-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "fortune",
        name: "Fortune",
        description: "Fortune 500 Daily and Breaking Business News",
        url: "http://fortune.com",
        category: "business",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/fortune-s.png",
        img_medium: "http://i.newsapi.org/fortune-m.png",
        img_large: "http://i.newsapi.org/fortune-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "four-four-two",
        name: "FourFourTwo",
        description: "The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.",
        url: "http://www.fourfourtwo.com/news",
        category: "sport",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/four-four-two-s.png",
        img_medium: "http://i.newsapi.org/four-four-two-m.png",
        img_large: "http://i.newsapi.org/four-four-two-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "fox-sports",
        name: "Fox Sports",
        description: "Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.",
        url: "http://www.foxsports.com",
        category: "sport",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/fox-sports-s.png",
        img_medium: "http://i.newsapi.org/fox-sports-m.png",
        img_large: "http://i.newsapi.org/fox-sports-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "google-news",
        name: "Google News",
        description: "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
        url: "https://news.google.co.uk",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/google-news-s.png",
        img_medium: "http://i.newsapi.org/google-news-m.png",
        img_large: "http://i.newsapi.org/google-news-l.png",
        sortBysAvailable: "top"
      }, {
        query: "hacker-news",
        name: "Hacker News",
        description: "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
        url: "https://news.ycombinator.com",
        category: "technology",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/hacker-news-s.png",
        img_medium: "http://i.newsapi.org/hacker-news-m.png",
        img_large: "http://i.newsapi.org/hacker-news-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "ign",
        name: "IGN",
        description: "IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
        url: "http://www.ign.com",
        category: "gaming",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/ign-s.png",
        img_medium: "http://i.newsapi.org/ign-m.png",
        img_large: "http://i.newsapi.org/ign-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "independent",
        name: "Independent",
        description: "National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.",
        url: "http://www.independent.co.uk",
        category: "general",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/independent-s.png",
        img_medium: "http://i.newsapi.org/independent-m.png",
        img_large: "http://i.newsapi.org/independent-l.png",
        sortBysAvailable: "top"
      }, {
        query: "mashable",
        name: "Mashable",
        description: "Mashable is a global, multi-platform media and entertainment company.",
        url: "http://mashable.com",
        category: "entertainment",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/mashable-s.png",
        img_medium: "http://i.newsapi.org/mashable-m.png",
        img_large: "http://i.newsapi.org/mashable-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "metro",
        name: "Metro",
        description: "News, Sport, Showbiz, Celebrities from Metro - a free British newspaper.",
        url: "http://metro.co.uk",
        category: "general",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/metro-s.png",
        img_medium: "http://i.newsapi.org/metro-m.png",
        img_large: "http://i.newsapi.org/metro-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "mirror",
        name: "Mirror",
        description: "All the latest news, sport and celebrity gossip at Mirror.co.uk. Get all the big headlines, pictures, analysis, opinion and video on the stories that matter to you.",
        url: "http://www.mirror.co.uk/",
        category: "general",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/mirror-s.png",
        img_medium: "http://i.newsapi.org/mirror-m.png",
        img_large: "http://i.newsapi.org/mirror-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "mtv-news",
        name: "MTV News",
        description: "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
        url: "http://www.mtv.com/news",
        category: "music",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/mtv-news-s.png",
        img_medium: "http://i.newsapi.org/mtv-news-m.png",
        img_large: "http://i.newsapi.org/mtv-news-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "mtv-news-uk",
        name: "MTV News (UK)",
        description: "All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.",
        url: "http://www.mtv.co.uk/news",
        category: "music",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/mtv-news-uk-s.png",
        img_medium: "http://i.newsapi.org/mtv-news-uk-m.png",
        img_large: "http://i.newsapi.org/mtv-news-uk-l.png",
        sortBysAvailable: "top"
      }, {
        query: "national-geographic",
        name: "National Geographic",
        description: "Reporting our world daily: original nature and science news from National Geographic.",
        url: "http://news.nationalgeographic.com",
        category: "science-and-nature",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/national-geographic-s.png",
        img_medium: "http://i.newsapi.org/national-geographic-m.png",
        img_large: "http://i.newsapi.org/national-geographic-l.png",
        sortBysAvailable: "top"
      }, {
        query: "new-scientist",
        name: "New Scientist",
        description: "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
        url: "https://www.newscientist.com/section/news",
        category: "science-and-nature",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/new-scientist-s.png",
        img_medium: "http://i.newsapi.org/new-scientist-m.png",
        img_large: "http://i.newsapi.org/new-scientist-l.png",
        sortBysAvailable: "top"
      }, {
        query: "newsweek",
        name: "Newsweek",
        description: "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
        url: "http://www.newsweek.com",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/newsweek-s.png",
        img_medium: "http://i.newsapi.org/newsweek-m.png",
        img_large: "http://i.newsapi.org/newsweek-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "new-york-magazine",
        name: "New York Magazine",
        description: "NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.",
        url: "http://nymag.com",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/new-york-magazine-s.png",
        img_medium: "http://i.newsapi.org/new-york-magazine-m.png",
        img_large: "http://i.newsapi.org/new-york-magazine-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "nfl-news",
        name: "NFL News",
        description: "The official source for NFL news, schedules, stats, scores and more.",
        url: "http://www.nfl.com/news",
        category: "sport",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/nfl-news-s.png",
        img_medium: "http://i.newsapi.org/nfl-news-m.png",
        img_large: "http://i.newsapi.org/nfl-news-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "polygon",
        name: "Polygon",
        description: "Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
        url: "http://www.polygon.com",
        category: "gaming",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/polygon-s.png",
        img_medium: "http://i.newsapi.org/polygon-m.png",
        img_large: "http://i.newsapi.org/polygon-l.png",
        sortBysAvailable: "top"
      }, {
        query: "recode",
        name: "Recode",
        description: "Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.",
        url: "http://www.recode.net",
        category: "technology",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/recode-s.png",
        img_medium: "http://i.newsapi.org/recode-m.png",
        img_large: "http://i.newsapi.org/recode-l.png",
        sortBysAvailable: "top"
      }, {
        query: "reddit-r-all",
        name: "Reddit /r/all",
        description: "Reddit is an entertainment, social news networking service, and news website. Reddit's registered community members can submit content, such as text posts or direct links.",
        url: "https://www.reddit.com/r/all",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/reddit-r-all-s.png",
        img_medium: "http://i.newsapi.org/reddit-r-all-m.png",
        img_large: "http://i.newsapi.org/reddit-r-all-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "reuters",
        name: "Reuters",
        description: "Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.",
        url: "http://www.reuters.com",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/reuters-s.png",
        img_medium: "http://i.newsapi.org/reuters-m.png",
        img_large: "http://i.newsapi.org/reuters-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "sky-news",
        name: "Sky News",
        description: "Sky news delivers breaking news, headlines and top stories from business, politics, entertainment and more in the UK and worldwide.",
        url: "http://news.sky.com",
        category: "general",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/sky-news-s.png",
        img_medium: "http://i.newsapi.org/sky-news-m.png",
        img_large: "http://i.newsapi.org/sky-news-l.png",
        sortBysAvailable: "top"
      }, {
        query: "sky-sports-news",
        name: "Sky Sports News",
        description: "Watch the best live coverage of your favourite sports: Football, Golf, Rugby, Cricket, Tennis, F1, Boxing, plus the latest sports news, transfers and scores.",
        url: "http://www.skysports.com",
        category: "sport",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/sky-sports-news-s.png",
        img_medium: "http://i.newsapi.org/sky-sports-news-m.png",
        img_large: "http://i.newsapi.org/sky-sports-news-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "talksport",
        name: "TalkSport",
        description: "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
        url: "http://talksport.com",
        category: "sport",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/talksport-s.png",
        img_medium: "http://i.newsapi.org/talksport-m.png",
        img_large: "http://i.newsapi.org/talksport-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "techcrunch",
        name: "TechCrunch",
        description: "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
        url: "https://techcrunch.com",
        category: "technology",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/techcrunch-s.png",
        img_medium: "http://i.newsapi.org/techcrunch-m.png",
        img_large: "http://i.newsapi.org/techcrunch-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "techradar",
        name: "TechRadar",
        description: "The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.",
        url: "http://www.techradar.com",
        category: "technology",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/techradar-s.png",
        img_medium: "http://i.newsapi.org/techradar-m.png",
        img_large: "http://i.newsapi.org/techradar-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-economist",
        name: "The Economist",
        description: "The Economist offers authoritative insight and opinion on international news, politics, business, finance, science, technology and the connections between them.",
        url: "http://www.economist.com",
        category: "business",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/the-economist-s.png",
        img_medium: "http://i.newsapi.org/the-economist-m.png",
        img_large: "http://i.newsapi.org/the-economist-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-guardian-au",
        name: "The Guardian (AU)",
        description: "Latest news, sport, comment, analysis and reviews from Guardian Australia",
        url: "https://www.theguardian.com/au",
        category: "general",
        language: "en",
        country: "au",
        img_small: "http://i.newsapi.org/the-guardian-au-s.png",
        img_medium: "http://i.newsapi.org/the-guardian-au-m.png",
        img_large: "http://i.newsapi.org/the-guardian-au-l.png",
        sortBysAvailable: "top"
      }, {
        query: "the-guardian-uk",
        name: "The Guardian (UK)",
        description: "Latest news, sport, business, comment, analysis and reviews from the Guardian, the world's leading liberal voice.",
        url: "https://www.theguardian.com/uk",
        category: "general",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/the-guardian-uk-s.png",
        img_medium: "http://i.newsapi.org/the-guardian-uk-m.png",
        img_large: "http://i.newsapi.org/the-guardian-uk-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-hindu",
        name: "The Hindu",
        description: "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
        url: "http://www.thehindu.com",
        category: "general",
        language: "en",
        country: "in",
        img_small: "http://i.newsapi.org/the-hindu-s.png",
        img_medium: "http://i.newsapi.org/the-hindu-m.png",
        img_large: "http://i.newsapi.org/the-hindu-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-huffington-post",
        name: "The Huffington Post",
        description: "The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.",
        url: "http://www.huffingtonpost.com",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/the-huffington-post-s.png",
        img_medium: "http://i.newsapi.org/the-huffington-post-m.png",
        img_large: "http://i.newsapi.org/the-huffington-post-l.png",
        sortBysAvailable: "top"
      }, {
        query: "the-lad-bible",
        name: "The Lad Bible",
        description: "The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!",
        url: "http://www.theladbible.com",
        category: "entertainment",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/the-lad-bible-s.png",
        img_medium: "http://i.newsapi.org/the-lad-bible-m.png",
        img_large: "http://i.newsapi.org/the-lad-bible-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-new-york-times",
        name: "The New York Times",
        description: "The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.",
        url: "http://www.nytimes.com",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/the-new-york-times-s.png",
        img_medium: "http://i.newsapi.org/the-new-york-times-m.png",
        img_large: "http://i.newsapi.org/the-new-york-times-l.png",
        sortBysAvailable: "top"
      }, {
        query: "the-next-web",
        name: "The Next Web",
        description: "The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.",
        url: "http://thenextweb.com",
        category: "technology",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/the-next-web-s.png",
        img_medium: "http://i.newsapi.org/the-next-web-m.png",
        img_large: "http://i.newsapi.org/the-next-web-l.png",
        sortBysAvailable: "latest"
      }, {
        query: "the-sport-bible",
        name: "The Sport Bible",
        description: "TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!",
        url: "http://www.thesportbible.com",
        category: "sport",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/the-sport-bible-s.png",
        img_medium: "http://i.newsapi.org/the-sport-bible-m.png",
        img_large: "http://i.newsapi.org/the-sport-bible-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-telegraph",
        name: "The Telegraph",
        description: "Latest news, business, sport, comment, lifestyle and culture from the Daily Telegraph and Sunday Telegraph newspapers and video from Telegraph TV.",
        url: "http://www.telegraph.co.uk",
        category: "general",
        language: "en",
        country: "gb",
        img_small: "http://i.newsapi.org/the-telegraph-s.png",
        img_medium: "http://i.newsapi.org/the-telegraph-m.png",
        img_large: "http://i.newsapi.org/the-telegraph-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-times-of-india",
        name: "The Times of India",
        description: "Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.",
        url: "http://timesofindia.indiatimes.com",
        category: "general",
        language: "en",
        country: "in",
        img_small: "http://i.newsapi.org/the-times-of-india-s.png",
        img_medium: "http://i.newsapi.org/the-times-of-india-m.png",
        img_large: "http://i.newsapi.org/the-times-of-india-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-verge",
        name: "The Verge",
        description: "The Verge covers the intersection of technology, science, art, and culture.",
        url: "http://www.theverge.com",
        category: "technology",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/the-verge-s.png",
        img_medium: "http://i.newsapi.org/the-verge-m.png",
        img_large: "http://i.newsapi.org/the-verge-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "the-wall-street-journal",
        name: "The Wall Street Journal",
        description: "WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.",
        url: "http://www.wsj.com",
        category: "business",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/the-wall-street-journal-s.png",
        img_medium: "http://i.newsapi.org/the-wall-street-journal-m.png",
        img_large: "http://i.newsapi.org/the-wall-street-journal-l.png",
        sortBysAvailable: "top"
      }, {
        query: "the-washington-post",
        name: "The Washington Post",
        description: "Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.",
        url: "https://www.washingtonpost.com",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/the-washington-post-s.png",
        img_medium: "http://i.newsapi.org/the-washington-post-m.png",
        img_large: "http://i.newsapi.org/the-washington-post-l.png",
        sortBysAvailable: "top"
      }, {
        query: "time",
        name: "Time",
        description: "Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.",
        url: "http://time.com",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/time-s.png",
        img_medium: "http://i.newsapi.org/time-m.png",
        img_large: "http://i.newsapi.org/time-l.png",
        sortBysAvailable: "top, latest"
      }, {
        query: "usa-today",
        name: "USA Today",
        description: "Get the latest national, international, and political news at USATODAY.com.",
        url: "http://www.usatoday.com/news",
        category: "general",
        language: "en",
        country: "us",
        img_small: "http://i.newsapi.org/usa-today-s.png",
        img_medium: "http://i.newsapi.org/usa-today-m.png",
        img_large: "http://i.newsapi.org/usa-today-l.png",
        sortBysAvailable: "top, latest"
      }
    ]);
  });
};
