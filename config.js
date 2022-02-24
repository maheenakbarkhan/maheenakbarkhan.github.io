var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiaW52aXNpYmxlaW5zdGl0dXRlIiwiYSI6ImNrejJ6cnF5ZDAxdWIyd216cWJramZsN24ifQ.BLLN-abgTUSzlsSZixlTWA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Chicago to Guantánamo, Connections in an Ecosystem of Violence',
    subtitle: '',
    byline: 'StoryMap by Maira Khwaja, Marie Mendoza, and Maheen Khan',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'vietnam',
            alignment: 'left',
            hidden: false,
            title: 'Vietnam (1955 - 1975)',
            image: '',
            description: 'Jon Burge and a generation of police officers enlist in the US Military for the Vietnam War. ' + 
            'In 1968, Jon Burge volunteered for duty in the Vietnam War, where he provided security for convoys and basecamps ' + 
            'as a military police officer, and served a tour as a provost marshal investigator. Vietnam was his second service ' + 
            '(he had previously worked as military police in South Korea) and he was assigned to the Ninth Military ' +
            'Police Company of the Ninth Infantry division.', 
            location: {
                center: [108.44423, 13.31565],
                zoom: 6.17,
                pitch: 0,
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
            id: 'chicago',
            alignment: 'right',
            hidden: false,
            title: 'Chicago, 1970',
            image: '',
            description: 'In 1970, Burge joined the Chicago Police Department (CPD), where he rose in power ' + 
            'to become Commander of Area 2. At least seventeen of his associates were also veterans of the U.S. ' +
            'military, most from the Vietnam War.',
            location: {
                center: [-87.62836, 41.87435],
                zoom: 10.83,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'area2-1982',
            alignment: 'left',
            hidden: false,
            title: 'Area 2 Police Station, 1982',
            image: '',
            description: 'Andrew and Jackie Wilson, two of the earliest known survivors of torture at the ' + 
            'hands of Chicago Police officer Jon Burge, shared a similar fate as the Rabbanis. They were arrested ' +
            'in 1982 on a tip, coerced through torturing a suspect, that the Wilsons killed Chicago Police ' +
            'Officers Fahey and O’Brien. They were tortured into confession; both brothers were connected to a ' +
            'hand-cranked generator and given electric shocks. Their legal fights lasted decades: Andrew Wilson ' +
            'ultimately died in prison in 2007. Jackie Wilson was released in 2018 and granted a certificate of ' +
            'innocence in December 2020',
            location: {
                center: [-87.60398, 41.72948],
                zoom: 17.4,
                pitch: 54,
                bearing: 1.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'area2-1983',
            alignment: 'right',
            hidden: false,
            title: 'Area 2 Police Station, 1983',
            image: '',
            description: 'Darrell Cannon, tortured in 1983 and incarcerated for 24 years, testified that ' +
            'the officers played a terrifying game of Russian Roulette on him, where they would seemingly ' +
            'load a shotgun and stick it in his mouth, forcing him to pull the trigger. The officers then pulled ' +
            'down his pants and repeatedly shocked him in the genitals with a cattle prod. “For me this was ' +
            'the most sadistic act ever performed,” he told journalist Amanda Rivkin in 2016. “The feeling of ' +
            'it is something that is indescribable. I still live with it today.” Sgt. John Byrne and Detectives ' +
            'Peter Dignan, who worked closely with Burge and were both Marine Corps veterans, participated in ' +
            'torturing and coercing his murder confession. Cannon was exonerated in 2004 and freed in 2007. His case ' +
            'became a touchpoint for other Burge-related cases. Today, he organizes fellow survivors in the ' +
            'reparations and torture justice movement.',
            location: {
                center: [-87.60413, 41.69223],
                zoom: 17.4,
                pitch: 54,
                bearing: 1.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'area3',
            alignment: 'left',
            hidden: false,
            title: 'Area 3 Police Station',
            image: '',
            description: 'Over the next two decades, Burge and his affiliates tortured more than 125 ' +
            'Black people. Aided and abetted by prosecutors, city officials, and the Chicago Police ' +
            'Department, these officers routinely framed innocent Black men for crimes they didn’t commit. ' +
            'Often, these crimes were high profile, with an expectation and demand on police to catch the person responsible. ',
            location: {
                center: [-87.60413, 41.69223],
                zoom: 17.4,
                pitch: 60,
                bearing: 42.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'area3-1988-1991',
            alignment: 'right',
            hidden: false,
            title: 'Area 3 Police Station (1988 - 1991)',
            image: '',
            description: 'Burge moved to Area 3 in 1988. One of Burge’s contemporaries, Richard Zuley, ' +
            'also joined the Chicago Police in 1970. Zuley,  who is most infamous for his direct link ' +
            'to torture at Guantanamo, took a leave of absence from CPD from 1982-1987 to work in counterterrorism ' +
            'for the U.S. Navy. It’s unclear what his counterterrorism work included, where he was ' +
            'deployed, or how it may have influenced his behavior in Chicago.',
            location: {
                center: [-87.69508, 41.82261],
                zoom: 17.4,
                pitch: 54,
                bearing: 1.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'area3-1992',
            alignment: 'left',
            hidden: false,
            title: 'Area 3 Police Station (1992 - )',
            image: '',
            description: 'When he returned to Chicago, both Burge and Zuley briefly overlapped on the ' +
            'North Side: Burge in Unit 630, Area 3 (within what is now called Detective Area North), and ' +
            'Zuley in Unit 606, Central Investigations.  Burge was fired in 1993, after the Chicago ' +
            'Police Board found that he had abused Andrew Wilson. Although it is not in official records that ' +
            'they ever worked together, Zuley and Burge shared mutual colleagues. Zuley was seen as an ' +
            'expert in his 25-year career as a detective, investigating high profile crimes like the murder ' +
            'of 7-year old Dantrell Davis. Over that same career, he tortured at least five people in ' +
            'Chicago. At Area 3, he tortured Lee Harris in 1989, who was once Zuley’s close informant, and Benita ' +
            'Johnson in 1995, whom he handcuffed to a wall for over 24 hours and threatened her family.',
            location: {
                center: [-87.74632, 41.92242],
                zoom: 18,
                pitch: 54,
                bearing: 1.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'gulf-war-1990',
            alignment: 'right',
            hidden: false,
            title: 'Gulf War (1990 - 1991)',
            image: '',
            description: 'Like Zuley, younger officers named in torture cases have drifted in and ' +
            'out of security work—like Kenneth Boudreau, who is named in Burge-affiliated and Zuley-affiliated ' +
            'cases—training and consulting in private military-esque firms in their retirement. These officers ' +
            'have not admitted culpability, decades later. Boudreau, for example, is named in at least 46 ' +
            'torture claims, thirteen of them alongside now-deceased Michael Kill (between the two of them, ' +
            '72 people have accused them of using torture; 20 of whom have been exonerated). Boudreau took a ' +
            'leave from the CPD, to serve in the Gulf War from September 1990-July 1991. He worked as a Protective ' +
            'Service Officer and Aide to Camp for the Commanding General of Engineer Forces.',
            location: {
                center: [47.72742, 29.91365],
                zoom: 5.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};
