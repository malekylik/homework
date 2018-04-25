/* eslint-disable */

import { expect } from 'chai';
import contentReducer from './contentReducer';
import appendContent from '../actions/content';


const fetchedImages = [
    {
        "type": "gif",
        "id": "3oz8xDp5mAEOAZXEPe",
        "slug": "loop-design-3oz8xDp5mAEOAZXEPe",
        "url": "https://giphy.com/gifs/loop-design-3oz8xDp5mAEOAZXEPe",
        "bitly_gif_url": "https://gph.is/2gnLCDn",
        "bitly_url": "https://gph.is/2gnLCDn",
        "embed_url": "https://giphy.com/embed/3oz8xDp5mAEOAZXEPe",
        "username": "SamuelC",
        "source": "",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2016-11-17 23:14:12",
        "trending_datetime": "2018-04-25 14:00:04",
        "user": {
          "avatar_url": "https://media4.giphy.com/avatars/SamuelC/zv0LWLF0eBOL.jpg",
          "banner_url": "",
          "profile_url": "https://giphy.com/SamuelC/",
          "username": "SamuelC",
          "display_name": "SamuelC",
          "guid": "c2FtdWVsY2FycmlsbG9nb256YWxlei40QGdtYWlsLmNvbQ",
          "attribution_display_name": "SamuelC",
          "name": "SamuelC",
          "description": "Love music.\r\nI also like 3D, Video/Cinematic work, Motion graphics and amaranth, but mostly music. ",
          "facebook_url": "https://www.facebook.com/samuelmusicdesign/",
          "twitter_url": null,
          "instagram_url": null,
          "tumblr_url": null,
          "suppress_chrome": false,
          "website_url": "https://www.behance.net/SamuelCarrillo",
          "website_display_url": "www.behance.net"
        },
        "images": {
          "fixed_height_still": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200_s.gif",
            "width": "200",
            "height": "200",
            "size": "17139"
          },
          "original_still": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy_s.gif",
            "width": "480",
            "height": "480",
            "size": "94461"
          },
          "fixed_width": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200w.gif",
            "width": "200",
            "height": "200",
            "size": "814673",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200w.mp4",
            "mp4_size": "86773",
            "webp": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200w.webp",
            "webp_size": "296342"
          },
          "fixed_height_small_still": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/100_s.gif",
            "width": "100",
            "height": "100",
            "size": "5097"
          },
          "fixed_height_downsampled": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200_d.gif",
            "width": "200",
            "height": "200",
            "size": "59452",
            "webp": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200_d.webp",
            "webp_size": "27604"
          },
          "preview": {
            "width": "152",
            "height": "152",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy-preview.mp4",
            "mp4_size": "42265"
          },
          "fixed_height_small": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/100.gif",
            "width": "100",
            "height": "100",
            "size": "242131",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/100.mp4",
            "mp4_size": "18426",
            "webp": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/100.webp",
            "webp_size": "85694"
          },
          "downsized_still": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy-tumblr_s.gif",
            "width": "250",
            "height": "249",
            "size": "25932"
          },
          "downsized": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy-tumblr.gif",
            "width": "250",
            "height": "249",
            "size": "1229407"
          },
          "downsized_large": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.gif",
            "width": "480",
            "height": "480",
            "size": "4499702"
          },
          "fixed_width_small_still": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/100w_s.gif",
            "width": "100",
            "height": "100",
            "size": "5097"
          },
          "preview_webp": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy-preview.webp",
            "width": "200",
            "height": "200",
            "size": "49970"
          },
          "fixed_width_still": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200w_s.gif",
            "width": "200",
            "height": "200",
            "size": "17139"
          },
          "fixed_width_small": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/100w.gif",
            "width": "100",
            "height": "100",
            "size": "242131",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/100w.mp4",
            "mp4_size": "18426",
            "webp": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/100w.webp",
            "webp_size": "85694"
          },
          "downsized_small": {
            "width": "274",
            "height": "274",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy-downsized-small.mp4",
            "mp4_size": "186465"
          },
          "fixed_width_downsampled": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200w_d.gif",
            "width": "200",
            "height": "200",
            "size": "59452",
            "webp": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200w_d.webp",
            "webp_size": "27604"
          },
          "downsized_medium": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.gif",
            "width": "480",
            "height": "480",
            "size": "4499702"
          },
          "original": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.gif",
            "width": "480",
            "height": "480",
            "size": "4499702",
            "frames": "56",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.mp4",
            "mp4_size": "580755",
            "webp": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.webp",
            "webp_size": "1599576",
            "hash": "752aa39f6eed92e550a799cd1f644a1e"
          },
          "fixed_height": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200.gif",
            "width": "200",
            "height": "200",
            "size": "814673",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200.mp4",
            "mp4_size": "86773",
            "webp": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200.webp",
            "webp_size": "296342"
          },
          "hd": {
            "width": "800",
            "height": "800",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy-hd.mp4",
            "mp4_size": "1638779"
          },
          "looping": {
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy-loop.mp4",
            "mp4_size": "5448255"
          },
          "original_mp4": {
            "width": "480",
            "height": "480",
            "mp4": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.mp4",
            "mp4_size": "580755"
          },
          "preview_gif": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy-preview.gif",
            "width": "153",
            "height": "153",
            "size": "49389"
          },
          "480w_still": {
            "url": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/480w_s.jpg",
            "width": "480",
            "height": "480"
          }
        },
        "title": "awesome rainbow GIF by SamuelC"
      },
      {
        "type": "gif",
        "id": "l2JhCFLbbL0yYk9z2",
        "slug": "fun-weird-alien-l2JhCFLbbL0yYk9z2",
        "url": "https://giphy.com/gifs/fun-weird-alien-l2JhCFLbbL0yYk9z2",
        "bitly_gif_url": "https://gph.is/2fjgoHo",
        "bitly_url": "https://gph.is/2fjgoHo",
        "embed_url": "https://giphy.com/embed/l2JhCFLbbL0yYk9z2",
        "username": "SamuelC",
        "source": "",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2016-11-21 22:51:58",
        "trending_datetime": "2018-04-25 13:45:01",
        "user": {
          "avatar_url": "https://media4.giphy.com/avatars/SamuelC/zv0LWLF0eBOL.jpg",
          "banner_url": "",
          "profile_url": "https://giphy.com/SamuelC/",
          "username": "SamuelC",
          "display_name": "SamuelC",
          "guid": "c2FtdWVsY2FycmlsbG9nb256YWxlei40QGdtYWlsLmNvbQ",
          "attribution_display_name": "SamuelC",
          "name": "SamuelC",
          "description": "Love music.\r\nI also like 3D, Video/Cinematic work, Motion graphics and amaranth, but mostly music. ",
          "facebook_url": "https://www.facebook.com/samuelmusicdesign/",
          "twitter_url": null,
          "instagram_url": null,
          "tumblr_url": null,
          "suppress_chrome": false,
          "website_url": "https://www.behance.net/SamuelCarrillo",
          "website_display_url": "www.behance.net"
        },
        "images": {
          "fixed_height_still": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200_s.gif",
            "width": "200",
            "height": "200",
            "size": "1076"
          },
          "original_still": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy_s.gif",
            "width": "480",
            "height": "480",
            "size": "2848"
          },
          "fixed_width": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200w.gif",
            "width": "200",
            "height": "200",
            "size": "2626417",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200w.mp4",
            "mp4_size": "178373",
            "webp": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200w.webp",
            "webp_size": "871658"
          },
          "fixed_height_small_still": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/100_s.gif",
            "width": "100",
            "height": "100",
            "size": "715"
          },
          "fixed_height_downsampled": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200_d.gif",
            "width": "200",
            "height": "200",
            "size": "85926",
            "webp": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200_d.webp",
            "webp_size": "31814"
          },
          "preview": {
            "width": "244",
            "height": "244",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-preview.mp4",
            "mp4_size": "34266"
          },
          "fixed_height_small": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/100.gif",
            "width": "100",
            "height": "100",
            "size": "822113",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/100.mp4",
            "mp4_size": "43180",
            "webp": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/100.webp",
            "webp_size": "265564"
          },
          "downsized_still": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-downsized_s.gif",
            "width": "250",
            "height": "249",
            "size": "1349"
          },
          "downsized": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-downsized.gif",
            "width": "250",
            "height": "249",
            "size": "1317419"
          },
          "downsized_large": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-downsized-large.gif",
            "width": "480",
            "height": "480",
            "size": "6388964"
          },
          "fixed_width_small_still": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/100w_s.gif",
            "width": "100",
            "height": "100",
            "size": "715"
          },
          "preview_webp": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-preview.webp",
            "width": "392",
            "height": "392",
            "size": "49856"
          },
          "fixed_width_still": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200w_s.gif",
            "width": "200",
            "height": "200",
            "size": "1076"
          },
          "fixed_width_small": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/100w.gif",
            "width": "100",
            "height": "100",
            "size": "822113",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/100w.mp4",
            "mp4_size": "43180",
            "webp": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/100w.webp",
            "webp_size": "265564"
          },
          "downsized_small": {
            "width": "150",
            "height": "150",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-downsized-small.mp4",
            "mp4_size": "199952"
          },
          "fixed_width_downsampled": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200w_d.gif",
            "width": "200",
            "height": "200",
            "size": "85926",
            "webp": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200w_d.webp",
            "webp_size": "31814"
          },
          "downsized_medium": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-downsized-medium.gif",
            "width": "384",
            "height": "384",
            "size": "4120787"
          },
          "original": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy.gif",
            "width": "480",
            "height": "480",
            "size": "13799340",
            "frames": "177",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy.mp4",
            "mp4_size": "892430",
            "webp": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy.webp",
            "webp_size": "4004474",
            "hash": "ea0acb39568a5a99cb2d810c0d9145d0"
          },
          "fixed_height": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200.gif",
            "width": "200",
            "height": "200",
            "size": "2626417",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200.mp4",
            "mp4_size": "178373",
            "webp": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200.webp",
            "webp_size": "871658"
          },
          "hd": {
            "width": "800",
            "height": "800",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-hd.mp4",
            "mp4_size": "2570303"
          },
          "looping": {
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-loop.mp4",
            "mp4_size": "2525042"
          },
          "original_mp4": {
            "width": "480",
            "height": "480",
            "mp4": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy.mp4",
            "mp4_size": "892430"
          },
          "preview_gif": {
            "url": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy-preview.gif",
            "width": "193",
            "height": "193",
            "size": "48989"
          },
          "480w_still": {
            "url": "https://media3.giphy.com/media/l2JhCFLbbL0yYk9z2/480w_s.jpg",
            "width": "480",
            "height": "480"
          }
        },
        "title": "fun snake GIF by SamuelC"
      },
      {
        "type": "gif",
        "id": "3oriNQ7dC4dc7k0CiI",
        "slug": "fun-weird-alien-3oriNQ7dC4dc7k0CiI",
        "url": "https://giphy.com/gifs/fun-weird-alien-3oriNQ7dC4dc7k0CiI",
        "bitly_gif_url": "https://gph.is/2f0oB8k",
        "bitly_url": "https://gph.is/2f0oB8k",
        "embed_url": "https://giphy.com/embed/3oriNQ7dC4dc7k0CiI",
        "username": "SamuelC",
        "source": "",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2016-11-21 23:08:57",
        "trending_datetime": "2018-04-25 13:30:01",
        "user": {
          "avatar_url": "https://media4.giphy.com/avatars/SamuelC/zv0LWLF0eBOL.jpg",
          "banner_url": "",
          "profile_url": "https://giphy.com/SamuelC/",
          "username": "SamuelC",
          "display_name": "SamuelC",
          "guid": "c2FtdWVsY2FycmlsbG9nb256YWxlei40QGdtYWlsLmNvbQ",
          "attribution_display_name": "SamuelC",
          "name": "SamuelC",
          "description": "Love music.\r\nI also like 3D, Video/Cinematic work, Motion graphics and amaranth, but mostly music. ",
          "facebook_url": "https://www.facebook.com/samuelmusicdesign/",
          "twitter_url": null,
          "instagram_url": null,
          "tumblr_url": null,
          "suppress_chrome": false,
          "website_url": "https://www.behance.net/SamuelCarrillo",
          "website_display_url": "www.behance.net"
        },
        "images": {
          "fixed_height_still": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200_s.gif",
            "width": "200",
            "height": "200",
            "size": "4804"
          },
          "original_still": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy_s.gif",
            "width": "480",
            "height": "480",
            "size": "23237"
          },
          "fixed_width": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200w.gif",
            "width": "200",
            "height": "200",
            "size": "659291",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200w.mp4",
            "mp4_size": "53744",
            "webp": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200w.webp",
            "webp_size": "219420"
          },
          "fixed_height_small_still": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/100_s.gif",
            "width": "100",
            "height": "100",
            "size": "2021"
          },
          "fixed_height_downsampled": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200_d.gif",
            "width": "200",
            "height": "200",
            "size": "42878",
            "webp": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200_d.webp",
            "webp_size": "14230"
          },
          "preview": {
            "width": "292",
            "height": "292",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy-preview.mp4",
            "mp4_size": "26915"
          },
          "fixed_height_small": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/100.gif",
            "width": "100",
            "height": "100",
            "size": "236446",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/100.mp4",
            "mp4_size": "15188",
            "webp": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/100.webp",
            "webp_size": "72034"
          },
          "downsized_still": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy-downsized_s.gif",
            "width": "480",
            "height": "480",
            "size": "22442"
          },
          "downsized": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy-downsized.gif",
            "width": "480",
            "height": "480",
            "size": "1591069"
          },
          "downsized_large": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy.gif",
            "width": "480",
            "height": "480",
            "size": "3105331"
          },
          "fixed_width_small_still": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/100w_s.gif",
            "width": "100",
            "height": "100",
            "size": "2021"
          },
          "preview_webp": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy-preview.webp",
            "width": "271",
            "height": "271",
            "size": "49768"
          },
          "fixed_width_still": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200w_s.gif",
            "width": "200",
            "height": "200",
            "size": "4804"
          },
          "fixed_width_small": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/100w.gif",
            "width": "100",
            "height": "100",
            "size": "236446",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/100w.mp4",
            "mp4_size": "15188",
            "webp": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/100w.webp",
            "webp_size": "72034"
          },
          "downsized_small": {
            "width": "420",
            "height": "420",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy-downsized-small.mp4",
            "mp4_size": "184135"
          },
          "fixed_width_downsampled": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200w_d.gif",
            "width": "200",
            "height": "200",
            "size": "42878",
            "webp": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200w_d.webp",
            "webp_size": "14230"
          },
          "downsized_medium": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy.gif",
            "width": "480",
            "height": "480",
            "size": "3105331"
          },
          "original": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy.gif",
            "width": "480",
            "height": "480",
            "size": "3105331",
            "frames": "91",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy.mp4",
            "mp4_size": "263554",
            "webp": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy.webp",
            "webp_size": "982104",
            "hash": "fcbef1a44b5aae9b593b4005f43c2d17"
          },
          "fixed_height": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200.gif",
            "width": "200",
            "height": "200",
            "size": "659291",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200.mp4",
            "mp4_size": "53744",
            "webp": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/200.webp",
            "webp_size": "219420"
          },
          "hd": {
            "width": "800",
            "height": "800",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy-hd.mp4",
            "mp4_size": "579420"
          },
          "looping": {
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy-loop.mp4",
            "mp4_size": "1432035"
          },
          "original_mp4": {
            "width": "480",
            "height": "480",
            "mp4": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy.mp4",
            "mp4_size": "263554"
          },
          "preview_gif": {
            "url": "https://media1.giphy.com/media/3oriNQ7dC4dc7k0CiI/giphy-preview.gif",
            "width": "169",
            "height": "169",
            "size": "49728"
          },
          "480w_still": {
            "url": "https://media0.giphy.com/media/3oriNQ7dC4dc7k0CiI/480w_s.jpg",
            "width": "480",
            "height": "480"
          }
        },
        "title": "fun snake GIF by SamuelC"
      },
];

const calculatedImages = [
    {
        "id": "26hiu1Oj15ePpkJnG",
        "alt": "awesome fun GIF by SamuelC",
        "miniature": {
          "src": "https://media1.giphy.com/media/26hiu1Oj15ePpkJnG/200_s.gif",
          "size": {
            "width": 200,
            "height": 200
          }
        },
        "original": {
          "src": "https://media1.giphy.com/media/26hiu1Oj15ePpkJnG/giphy.gif",
          "size": {
            "width": 480,
            "height": 480
          }
        },
        "style": {
          "width": 254,
          "height": 253,
          "marginTop": 0,
          "marginRight": 5
        }
      },
      {
        "id": "3oz8xDp5mAEOAZXEPe",
        "alt": "awesome rainbow GIF by SamuelC",
        "miniature": {
          "src": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/200_s.gif",
          "size": {
            "width": 200,
            "height": 200
          }
        },
        "original": {
          "src": "https://media0.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.gif",
          "size": {
            "width": 480,
            "height": 480
          }
        },
        "style": {
          "width": 254,
          "height": 253,
          "marginTop": 0,
          "marginRight": 5
        }
      },
      {
        "id": "l2JhCFLbbL0yYk9z2",
        "alt": "fun snake GIF by SamuelC",
        "miniature": {
          "src": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/200_s.gif",
          "size": {
            "width": 200,
            "height": 200
          }
        },
        "original": {
          "src": "https://media0.giphy.com/media/l2JhCFLbbL0yYk9z2/giphy.gif",
          "size": {
            "width": 480,
            "height": 480
          }
        },
        "style": {
          "width": 254,
          "height": 253,
          "marginTop": 0,
          "marginRight": 5
        }
      },
];

describe('Reducer::Content',function() {
    it('returns notShowed (empty array), images (empty array) if state is undefined', function() {
        // setup
        const state = undefined;
        const expectedNewState = {
            notShowed: [],
            images: [],
        };

        // execute
        const newState = contentReducer(state, { type: 'unknown' });

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    // it('on APPEND_CONTENT returns new state with added messages', () => {
    //     // setup
    //     const state =
    //         {
    //             items: [{ name: '1message' }, { name: '2message' }, { name: '3message' }],
    //             next: null,
    //             loading: false,
    //             count: 0,
    //         };
    //     const newMessage = { name: '4message' };
    //     const action = ActionType.addMessage(newMessage);
    //     const expectedNewState =
    //          {
    //              items: [{ name: '1message' }, { name: '2message' }, { name: '3message' }, { name: '4message' }],
    //              next: null,
    //              loading: false,
    //              count: 0,
    //          };
    //     // execute

    //     const newState = messages(state, action);

    //     // verify
    //     expect(newState).to.deep.equal(expectedNewState);
    // });
});
