const sampleListings = [
    {
        title:"Cozy Beachfront Cottage",
        description:"Escape to this charming beachfront cottage for a relaxing gateway.",
        image:{
            filename : "listingimage",
            url:"https://th.bing.com/th/id/OIP.lHaQxUleBXVg4oUlfT7rLQHaEK?w=2048&h=1152&rs=1&pid=ImgDetMain",
        },      
        price: 1500,
        location:"Malibu",
        country:'united States',
    },
        {
            title: "Luxury Mountain Chalet",
            description: "Experience breathtaking views in this high-end mountain chalet.",
            image: {
                filename:"listingimage",
                url: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
            },
            price: 2000,
            location: "Aspen",
            country: "United States"
        },
        {
            title: "Serene Lake House",
            description: "A peaceful retreat on the edge of a tranquil lake.",
            image:{
                filename:"listingimage",
                url: "https://www.tripsavvy.com/thmb/zWzokIWHiceKXqqNHSP0MaaUP9E=/3992x2242/filters:no_upscale():max_bytes(150000):strip_icc()/Hi_FCI_86779578_castaway-island-fiji-exterior-property17-8436d1420af6421fade7782aac0faec6.jpeg",  
            },
            price: 1300,
            location: "Lake Tahoe",
            country: "United States"
        },
        {
            title: "Modern City Loft",
            description: "Stay in a sleek and stylish loft in the heart of downtown.",
            image:{
                filename:"listingimage",
                url: "https://th.bing.com/th/id/OIP.GuDYFAgOZlJUT0WURl7Q0gHaFj?rs=1&pid=ImgDetMain",
            },
            price: 1800,
            location: "New York City",
            country: "United States"
        },
        {
            title: "Rustic Cabin in the Woods",
            description: "Disconnect from the world in this cozy and secluded cabin.",
            image:{
                filename:"listingimage",
                url: "https://cdn.lifestyleasia.com/wp-content/uploads/2019/01/06220603/Laucala_peninsula_villa_aerial7.jpg",
            },
            price: 1100,
            location: "Smoky Mountains",
            country: "United States"
        },
        {
            title: "Secluded Desert Villa",
            description: "Unwind in this luxurious villa surrounded by breathtaking desert landscapes.",
            image:{
                filename:"listingimage",
                url: "https://cdn.tripways.com/2021/04/08034031/aqua-night-1030x579-1-2048x1151.jpg",
            },
            price: 2200,
            location: "Sedona",
            country: "United States"
        },
        {
            title: "Tropical Island Bungalow",
            description: "A charming beachfront bungalow on a private island.",
            image:{
                filename:"listingimage",
                url: "https://media.cntraveller.in/wp-content/uploads/2017/03/lead1-1366x768.jpg",
            },
            price: 2500,
            location: "Maui",
            country: "United States"
        },
        {
            title: "Historic Stone Cottage",
            description: "Step back in time with this beautifully restored stone cottage.",
            image:{
                filename:"listingimage",
                url: "https://amazingworld.travel/wp-content/uploads/2022/11/Veligandu-Island-4-scaled.jpg",
            },
            price: 1600,
            location: "Charleston",
            country: "United States"
        },
        {
            title: "Bohemian Beach Hut",
            description: "Relax in this colorful and artsy beachside retreat.",
            image:{
                filename:"listingimage",
                url: "https://media.architecturaldigest.com/photos/56d8c47665e378730c185a11/master/pass/overwater-bungalows-03.jpg",
            },
            price: 1400,
            location: "Santa Monica",
            country: "United States"
        },
        {
            title: "Ski-In Ski-Out Lodge",
            description: "Hit the slopes directly from your cozy ski lodge.",
            image:{
                filename:"listingimage",
                url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/maldives/meeru-island-resort-maldives-birdseye.jpg",
            },
            price: 2700,
            location: "Park City",
            country: "United States"
        },
        {
            title: "Penthouse with Skyline Views",
            description: "Enjoy breathtaking city views from this luxurious penthouse.",
            image:{
                filename:"listingimage",
                url: "https://th.bing.com/th/id/OIP.FtsRZ4yTiJLVF-Pz7quR9QAAAA?rs=1&pid=ImgDetMain",
            },
            price: 3000,
            location: "Chicago",
            country: "United States"
        },
        {
            title: "Cozy Countryside Farmhouse",
            description: "A charming farmhouse surrounded by rolling green hills.",
            image:{
                filename:"listingimage",
                url: "https://pix10.agoda.net/hotelImages/49058/-1/464a47ead512372db61032db14b38e11.jpg",
            },
            price: 1200,
            location: "Vermont",
            country: "United States"
        },
        {
            title: "Sunny Mediterranean Villa",
            description: "Escape to a stunning villa with ocean views and lush gardens.",
            image:{
                filename:"listingimage",
                url: "https://www.gorgoniaviaggi.com/wp-content/uploads/2021/08/Villa-Nautica-Lifestyle-Main-Pool-Aerial-Large.jpg",
            },
            price: 2900,
            location: "San Diego",
            country: "United States"
        },
        {
            title: "Minimalist Designer Home",
            description: "A sleek and modern designer home with luxury touches.",
            image:{
                filename:"listingimage",
                url: "https://images.trvl-media.com/hotels/2000000/1100000/1099300/1099259/92d9457a_z.jpg",
            },
            price: 2600,
            location: "Los Angeles",
            country: "United States"
        },
        {
            title: "Classic Victorian Home",
            description: "A beautifully preserved Victorian home with antique charm.",
            image:{
                filename:"listingimage",
                url: "https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/naladhu-private-island-maldives/the-resort/desktop-banner/naladhu_private_island_beach_and_lagoon_header_1920x1080.jpg",
            },
            price: 1700,
            location: "San Francisco",
            country: "United States"
        },
        {
            title: "Seaside Cliff Retreat",
            description: "A private retreat perched on a scenic seaside cliff.",
            image:{
                filename:"listingimage",
                url: "https://c4.wallpaperflare.com/wallpaper/814/350/568/spa-beach-hotel-infinity-pool-wallpaper-preview.jpg",  
            },
            price: 3100,
            location: "Big Sur",
            country: "United States"
        }        
];

module.exports ={data:sampleListings};