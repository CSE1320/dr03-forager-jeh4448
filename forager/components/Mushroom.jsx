
'use client'
import deathCap from "../public/Death_Cap.png"
import destroyingAngel from "../public/Destroying_Angel.png"
import falseDeathCap from "../public/False_Death_Cap.png"
import paddyStraw from "../public/Paddy_Straw.png"
//import puffball from "../public/Puffballl.png"



const createMushroomCard = (
    image,
    scientific_name,
    name,
    features,
    characteristics,
    description,
    region
) => ({
    image: image,
    name: name,
    scientific_name: scientific_name,
    features: {
        is_toxic: features.is_toxic,
        is_favorite: features.is_favorite
    },
    characteristics: {
        diameter: characteristics.diameter,
        gill_color: characteristics.gill_color,
        cap_shape: characteristics.cap_shape,
        cap_color: characteristics.cap_color,
        cap_texture: characteristics.cap_texture,
        gills_type: characteristics.gills_type,
        gills_color: characteristics.gills_color,
        stem_shape: characteristics.stem_shape,
        stem_color: characteristics.stem_color,
        stem_ring: characteristics.stem_ring,
        habitat: characteristics.habitat
    },
    description: description,
    region: region
});

// Example usage:
// const mushroomCard = createMushroomCard(
//     'image_url.jpg',
//     'Amanita muscaria',
//     'Amanita muscaria',
//     { is_toxic: true, is_favorite: false },
//     {
//         diameter: 10.5,
//         gill_color: 'white',
//         cap_shape: 'convex',
//         cap_color: 'red',
//         cap_texture: 'smooth',
//         gills_type: 'free',
//         gills_color: 'white',
//         stem_shape: 'cylindrical',
//         stem_color: 'white',
//         stem_ring: 'absent',
//         habitat: 'forest'
//     },
//     'A colorful mushroom known for its psychoactive properties.',
//     'Northern Hemisphere'
// );

// console.log(mushroomCard);

//not xml, only json, move data to a separate data file
const mushroomCards = [
    createMushroomCard(
        deathCap,
        'Amanita phalloides',
        'Death Cap',
        { is_toxic: true, is_favorite: false },
        {
            diameter: 10.0,
            gill_color: 'white',
            cap_shape: 'convex',
            cap_color: 'greenish',
            cap_texture: 'smooth',
            gills_type: 'free',
            gills_color: 'white',
            stem_shape: 'cylindrical',
            stem_color: 'white',
            stem_ring: 'absent',
            habitat: 'woodlands'
        },
        'One of the most toxic mushrooms, responsible for many fatal poisonings.',
        'Europe, North America'
    ),
    createMushroomCard(
        destroyingAngel,
        'Amanita bisporigera',
        'Destroying Angel',
        { is_toxic: true, is_favorite: false },
        {
            diameter: 8.0,
            gill_color: 'white',
            cap_shape: 'bell-shaped',
            cap_color: 'white',
            cap_texture: 'smooth',
            gills_type: 'free',
            gills_color: 'white',
            stem_shape: 'cylindrical',
            stem_color: 'white',
            stem_ring: 'present',
            habitat: 'woodlands'
        },
        'A highly toxic mushroom that resembles edible species.',
        'North America'
    ),
    createMushroomCard(
        falseDeathCap,
        'Amanita citrina',
        'False Death Cap',
        { is_toxic: true, is_favorite: false },
        {
            diameter: 5.0,
            gill_color: 'white',
            cap_shape: 'convex',
            cap_color: 'yellowish',
            cap_texture: 'smooth',
            gills_type: 'free',
            gills_color: 'white',
            stem_shape: 'cylindrical',
            stem_color: 'white',
            stem_ring: 'present',
            habitat: 'woodlands'
        },
        'A toxic mushroom that can be mistaken for edible varieties.',
        'Europe, North America'
    ),
    createMushroomCard(
        paddyStraw,
        'Volvariella volvacea',
        'Paddy Straw',
        { is_toxic: false, is_favorite: true },
        {
            diameter: 5.0,
            gill_color: 'pink',
            cap_shape: 'convex',
            cap_color: 'tan',
            cap_texture: 'smooth',
            gills_type: 'free',
            gills_color: 'pink',
            stem_shape: 'cylindrical',
            stem_color: 'white',
            stem_ring: 'absent',
            habitat: 'rice fields'
        },
        'A popular edible mushroom cultivated in rice paddies.',
        'Asia'
    ),
    // createMushroomCard(
    //     puffball,
    //     'Lycoperdon perlatum',
    //     'Puffball',
    //     { is_toxic: false, is_favorite: true },
    //     {
    //         diameter: 8.0,
    //         gill_color: 'n/a',
    //         cap_shape: 'round',
    //         cap_color: 'white',
    //         cap_texture: 'smooth',
    //         gills_type: 'n/a',
    //         gills_color: 'n/a',
    //         stem_shape: 'none',
    //         stem_color: 'n/a',
    //         stem_ring: 'absent',
    //         habitat: 'grasslands'
    //     },
    //     'An edible mushroom known for its round shape and spore release.',
    //     'North America'
    // )
];

export {mushroomCards}