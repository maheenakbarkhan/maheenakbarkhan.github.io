var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiaW52aXNpYmxlaW5zdGl0dXRlIiwiYSI6ImNrejJ6cnF5ZDAxdWIyd216cWJramZsN24ifQ.BLLN-abgTUSzlsSZixlTWA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Example Story',
    subtitle: 'I am making an example of a story to test this',
    byline: 'By Maheen Khan',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'invisible-institute-id',
            alignment: 'left',
            hidden: false,
            title: 'Invisible Institute',
            image: '',
            description: 'The Invisible Institute Office',
            location: {
                center: [-87.59059, 41.78385],
                zoom: 17.40,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'home-nyc',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'My parent\'s home in NYC',
            location: {
                center: [-73.95449, 40.82166],
                zoom: 17.4,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
