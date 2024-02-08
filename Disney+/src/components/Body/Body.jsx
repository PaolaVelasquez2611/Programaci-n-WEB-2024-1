import React from 'react'
import { Banner } from './Banner/Banner'
import { Movies } from './Movies/moviegroup'
import { Studios } from './Studios/studios'





export function Body() {

    const movies = [
        {
            id: crypto.randomUUID(),
            url: "https://cdn.milenio.com/uploads/media/2021/04/27/percy-jackson-interpretado-logan-lerman.png"

        },
        {
            id: crypto.randomUUID(),
            url: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/06/The-Little-Mermaid.jpeg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://wallpapercave.com/wp/wp12278885.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://hoodzpahdesign.com/wp-content/uploads/2021/03/Luca-Movie-Title-Treatment-Unchosen-Concepts-by-Hoodzpah-for-Disney-Pixar-01-1.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://gargoyle.uni.illinois.edu/wp-content/uploads/2016/12/moana-900x405.jpeg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://lcmbearfacts.com/wp-content/uploads/2019/12/0-900x506.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://pbs.twimg.com/media/EG2CvSUUcAAsqpP.jpg:large",

        },
        {
            id: crypto.randomUUID(),
            url: "https://i.insider.com/5342c716eab8eabc3b6d57c4?width=1000&format=jpeg&auto=webp",

        },
        {
            id: crypto.randomUUID(),
            url: "https://static1.squarespace.com/static/6074cb7375d88d420848825c/6074d2586fb0f64b8e67121d/62290b7590b6af03e381736a/1647036883085/Turning+Red+Pixar+Movie+Poster+Horizontal.jpeg?format=1500w",

        },
        {
            id: crypto.randomUUID(),
            url: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2022-09/Lightyear_movie.jpg?itok=tJiIf7Of",

        }


    ]

    const movies2 = [
        {
            id: crypto.randomUUID(),
            url: "https://pic.clubic.com/v1/images/2100987/raw?fit=max&width=1200&hash=acec607663157f6946ba36f9aeb60868c1f86609"

        },
        {
            id: crypto.randomUUID(),
            url: "https://bloximages.newyork1.vip.townnews.com/yesweekly.com/content/tncms/assets/v3/editorial/5/80/58055154-3c3f-11ee-9ebf-473e62af8132/64dcda5089762.preview.jpg?crop=720%2C378%2C0%2C13&resize=720%2C378&order=crop%2Cresize",

        },
        {
            id: crypto.randomUUID(),
            url: "https://i.ebayimg.com/images/g/0hcAAOSwL1xkSECV/s-l1600.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://things-out.com/wp-content/uploads/2023/10/scale.jpeg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://img.englishcinemakyiv.com/WhIfYw3j_x7-c3QXQjrKqMwHcNhnkfwzOjqwYycyzEw/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy9jNjk0ZmQ3ZC1mNjhkLTQxMTctOTNkMy0xZjc0MjQ0YTFiM2EuanBn.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://i.redd.it/pinocchio-2022-poster-background-v0-tua572mvunm91.jpg?width=1920&format=pjpg&auto=webp&s=b77238e37d95d582604d4d69fa50d92848a5dcb6",

        },
        {
            id: crypto.randomUUID(),
            url: "https://i.redd.it/uq7ap0i4vh241.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://i.ebayimg.com/images/g/qx8AAOSwywRaJei6/s-l1600.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://i0.wp.com/songedunenuitdete.com/wp-content/uploads/2018/03/Titanic-mythic-kiss.jpg?fit=1920%2C1080&ssl=1",

        },
        {
            id: crypto.randomUUID(),
            url: "https://s2.dmcdn.net/v/P5eHF1S2sOONoP59X/x1080",

        }


    ]

    const movies3 = [
        {
            id: crypto.randomUUID(),
            url: "https://i.pinimg.com/736x/b9/d9/4c/b9d94c796dbacb48968646a516344858.jpg"

        },
        {
            id: crypto.randomUUID(),
            url: "https://images2.alphacoders.com/112/1122028.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://www.carlosgarita.com/images/2020/10/31/sould_1920x1080_a1bce094.webp",

        },
        {
            id: crypto.randomUUID(),
            url: "https://d23.com/app/uploads/2023/01/00_hsm-quiz_1180w-600h.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://c4.wallpaperflare.com/wallpaper/834/1000/33/gravity-falls-wallpaper-preview.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://c4.wallpaperflare.com/wallpaper/775/486/326/pirates-of-the-caribbean-pirates-of-the-caribbean-on-stranger-tides-jack-sparrow-johnny-depp-wallpaper-preview.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://pbs.twimg.com/media/FQ4unsxXMAEDzEW.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://crypticrock.com/wp-content/uploads/2013/07/Monsters-University-banner_edited-4.jpg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://www.wdwinfo.com/wp-content/uploads/2023/08/Ahsoka-Header.jpeg",

        },
        {
            id: crypto.randomUUID(),
            url: "https://i.redd.it/hatls74p1bi41.jpg",

        }


    ]



    return (
        <main id="main">
            <Banner></Banner>
            <Studios></Studios>
            <Movies title="Action and Adventure"
                movies={movies}

            >

            </Movies>

            <Movies title="New to Disney+ "
                movies={movies2}

            ></Movies>

            <Movies title="Recommended for you"
                movies={movies3}

            > </Movies>
        </main>
    )
}