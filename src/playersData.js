import lebron_Img from "./assets/lebron-james.jpg"
import stephen_Img from "./assets/Stephen_Curry.jpg"
import kevin_Img from "./assets/Kevin_Durant.jpg"
import kawhi_Img from "./assets/kawhi_leonard.jpg"

const playersData = [
    {
        name: "LeBron James",
        image: lebron_Img,
        position: "Forward",
        stats: {
            pointsPerGame: 25.4,
            assistsPerGame: 7.1,
            reboundsPerGame: 10.5
        }
    },
    {
        name: "Stephen Curry",
        image: stephen_Img,
        position: "Guard",
        stats: {
            pointsPerGame: 27.3,
            assistsPerGame: 5.4,
            reboundsPerGame: 4.5
        }
    },
    {
        name: "Kevin Durant",
        image: kevin_Img,
        position: "Forward",
        stats: {
            pointsPerGame: 29.7,
            assistsPerGame: 6.2,
            reboundsPerGame: 7.4,
        }
    },
    {
        name: "Kawhi Leonard",
        image: kawhi_Img,
        position: "Forward",
        stats: {
          pointsPerGame: 24.8,
          assistsPerGame: 5.2,
          reboundsPerGame: 6.5,
        },
      }
]

export default playersData;