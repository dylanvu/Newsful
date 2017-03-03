'use strict';

exports.seed = function(knex) {
  return knex('bookmarks').del()
    .then(() => {
      return knex('bookmarks').insert([
        {
          id: 1,
          user_id: 1,
          author: "Ross Miller",
          description: "Now I can take Zelda with me wherever I go — not some limited version, mind you, but the full console Zelda experience.",
          publishedAt: '2017-03-01T14:00:06Z',
          sourceCategory: "technology",
          sourceName: "The Verge",
          sourceUrl: "http://www.theverge.com",
          title: "Nintendo Switch review: the best portable console",
          url: "http://www.theverge.com/2017/3/1/14772530/nintendo-switch-review-zelda-breath-of-the-wild",
          urlToImage: "https://cdn0.vox-cdn.com/thumbor/NHrNJ1LjZ8i2FY-KFNI2pCJs-yQ=/0x106:2040x1254/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/53475969/jbareham_1492_170228_0024.0.0.jpg"
        }, {
          id: 2,
          user_id: 1,
          author: "David Roberts",
          description: "Frames are a lot harder to change than people seem to think.",
          publishedAt: "2016-03-15T13:40:02Z",
          sourceCategory: "technology",
          sourceName: "The Verge",
          sourceUrl: "http://www.theverge.com",
          title: "Is it worth trying to \"reframe\" climate change? Probably not.",
          url: "http://www.vox.com/2016/3/15/11232024/reframe-climate-change",
          urlToImage: "https://cdn0.vox-cdn.com/thumbor/K1MpUS3PsHt6SFQkbZctBjM-HFw=/0x55:1000x611/1080x600/cdn0.vox-cdn.com/uploads/chorus_image/image/49082721/climate-frame.0.jpg"
        },
        {
          id: 3,
          user_id: 2,
          author: "David Roberts",
          description: "Frames are a lot harder to change than people seem to think.",
          publishedAt: "2016-03-15T13:40:02Z",
          sourceCategory: "technology",
          sourceName: "The Verge",
          sourceUrl: "http://www.theverge.com",
          title: "Is it worth trying to \"reframe\" climate change? Probably not.",
          url: "http://www.vox.com/2016/3/15/11232024/reframe-climate-change",
          urlToImage: "https://cdn0.vox-cdn.com/thumbor/K1MpUS3PsHt6SFQkbZctBjM-HFw=/0x55:1000x611/1080x600/cdn0.vox-cdn.com/uploads/chorus_image/image/49082721/climate-frame.0.jpg"
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('bookmarks_id_seq', (SELECT MAX(id) FROM bookmarks));"
      );
    });
};
