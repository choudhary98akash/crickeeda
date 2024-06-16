import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchListService {

  constructor() { }

  list(): any{
    //api call to fetch the list of all the current live mathces
    const listData =[
      {
        matchName: "India vs England",
        matchId: "009",
        matchType: "Test",
        place: "M. A. Chidambaram Stadium",
        country: "India",
        team1: {
            id: "team017",
            name: "India",
            photo: "../../assets/images/india.png",
            totalScore: 320,
            wicketsFallen: 7,
            oversPlayed: 90,
        },
        team2: {
            id: "team003",
            name: "England",
            photo: "../../assets/images/england.png",
            totalScore: 280,
            wicketsFallen: 4,
            oversPlayed: 88,
        }
    },
    {
        matchName: "Australia vs South Africa",
        matchId: "010",
        matchType: "One Day",
        place: "Melbourne Cricket Ground",
        country: "Australia",
        team1: {
            id: "team013",
            name: "Australia",
            photo: "../../assets/images/australia.png",
            totalScore: 290,
            wicketsFallen: 5,
            oversPlayed: 50,
        },
        team2: {
            id: "team004",
            name: "South Africa",
            photo: "../../assets/images/south-africa.png",
            totalScore: 280,
            wicketsFallen: 6,
            oversPlayed: 49,
        }
    },
    {
        matchName: "Bangladesh vs Sri Lanka",
        matchId: "011",
        matchType: "T20",
        place: "Sher-e-Bangla National Cricket Stadium",
        country: "Bangladesh",
        team1: {
            id: "team009",
            name: "Bangladesh",
            photo: "../../assets/images/bangladesh.png",
            totalScore: 160,
            wicketsFallen: 3,
            oversPlayed: 20,
        },
        team2: {
            id: "team008",
            name: "Sri Lanka",
            photo: "../../assets/images/sri-lanka.png",
            totalScore: 170,
            wicketsFallen: 2,
            oversPlayed: 19,
        }
    },
    {
        matchName: "New Zealand vs Pakistan",
        matchId: "012",
        matchType: "Test",
        place: "Basin Reserve",
        country: "New Zealand",
        team1: {
            id: "team006",
            name: "New Zealand",
            photo: "../../assets/images/norway.png",
            totalScore: 320,
            wicketsFallen: 8,
            oversPlayed: 100,
        },
        team2: {
            id: "team016",
            name: "Pakistan",
            photo: "../../assets/images/pakistan.png",
            totalScore: 280,
            wicketsFallen: 5,
            oversPlayed: 98,
        }
    },
    {
        matchName: "England vs Australia",
        matchId: "013",
        matchType: "One Day",
        place: "Old Trafford Cricket Ground",
        country: "England",
        team1: {
            id: "team003",
            name: "England",
            photo: "../../assets/images/england.png",
            totalScore: 300,
            wicketsFallen: 5,
            oversPlayed: 50,
        },
        team2: {
            id: "team013",
            name: "Australia",
            photo: "../../assets/images/australia.png",
            totalScore: 280,
            wicketsFallen: 6,
            oversPlayed: 49,
        }
    },
    {
        matchName: "South Africa vs India",
        matchId: "014",
        matchType: "T20",
        place: "SuperSport Park",
        country: "South Africa",
        team1: {
            id: "team004",
            name: "South Africa",
            photo: "../../assets/images/south-africa.png",
            totalScore: 180,
            wicketsFallen: 2,
            oversPlayed: 20,
        },
        team2: {
            id: "team017",
            name: "India",
            photo: "../../assets/images/india.png",
            totalScore: 170,
            wicketsFallen: 3,
            oversPlayed: 19,
        }
    },
    {
        matchName: "Sri Lanka vs Bangladesh",
        matchId: "015",
        matchType: "Test",
        place: "Galle International Stadium",
        country: "Sri Lanka",
        team1: {
            id: "team008",
            name: "Sri Lanka",
            photo: "../../assets/images/sri-lanka.png",
            totalScore: 320,
            wicketsFallen: 7,
            oversPlayed: 90,
        },
        team2: {
            id: "team009",
            name: "Bangladesh",
            photo: "../../assets/images/bangladesh.png",
            totalScore: 280,
            wicketsFallen: 5,
            oversPlayed: 88,
        }
    },
    {
        matchName: "Pakistan vs Afghanistan",
        matchId: "016",
        matchType: "One Day",
        place: "Gaddafi Stadium",
        country: "Pakistan",
        team1: {
            id: "team016",
            name: "Pakistan",
            photo: "../../assets/images/pakistan.png",
            totalScore: 290,
            wicketsFallen: 6,
            oversPlayed: 50,
        },
        team2: {
            id: "team011",
            name: "Afghanistan",
            photo: "../../assets/images/bangladesh.png",
            totalScore: 280,
            wicketsFallen: 5,
            oversPlayed: 49,
        }
    },
    {
        matchName: "Zimbabwe vs West Indies",
        matchId: "017",
        matchType: "T20",
        place: "Harare Sports Club",
        country: "Zimbabwe",
        team1: {
            id: "team010",
            name: "Zimbabwe",
            photo: "../../assets/images/south-africa.png",
            totalScore: 190,
            wicketsFallen: 2,
            oversPlayed: 20,
        },
        team2: {
            id: "team007",
            name: "West Indies",
            photo: "../../assets/images/turkey.png",
            totalScore: 180,
            wicketsFallen: 1,
            oversPlayed: 19,
        }
    },
    {
        matchName: "Ireland vs New Zealand",
        matchId: "018",
        matchType: "Test",
        place: "Malahide Cricket Club Ground",
        country: "Ireland",
        team1: {
            id: "team012",
            name: "Ireland",
            photo: "../../assets/images/papua-new-guinea.png",
            totalScore: 280,
            wicketsFallen: 5,
            oversPlayed: 90,
        },
        team2: {
            id: "team006",
            name: "New Zealand",
            photo: "../../assets/images/norway.png",
            totalScore: 320,
            wicketsFallen: 7,
      oversPlayed: 88,
    }
    },
    {
    matchName: "Afghanistan vs Bangladesh",
    matchId: "019",
    matchType: "One Day",
    place: "Rajiv Gandhi International Cricket Stadium",
    country: "Afghanistan",
    team1: {
        id: "team011",
        name: "Afghanistan",
        photo: "../../assets/images/australia.png",
        totalScore: 290,
        wicketsFallen: 6,
        oversPlayed: 50,
    },
    team2: {
        id: "team009",
        name: "Bangladesh",
        photo: "../../assets/images/bangladesh.png",
        totalScore: 280,
        wicketsFallen: 5,
        oversPlayed: 49,
    }
    }
    ];

    return listData;
  }
}
