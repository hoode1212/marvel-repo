import api from './utils/api/api-action'
import events from './utils/events/event-action'
import Teams from './components/Teams'
import Header from './components/Header'
import Powers from './components/Powers'
import Power from './components/Power'
import Heroes from './components/Heroes'
import Hero from './components/Hero'
import Team from './components/Team'

main()
Header()

function main() {
	api.getRequest('http://localhost:8080/teams', teams => {
		getAppContext().innerHTML = Teams(teams);
  })

	navPowers()
	navHeroes()
	navTeams() 
	addTeams()
	viewSingleTeam()
	addHeroToTeam()
	viewSingleHero()
	addPowerToHero()
	viewSinglePower()

}




// START NAV FUNCTIONS AT THE HEADER
function navTeams() {
	const teamButton = document.querySelector('.nav__teams');
	events.on(teamButton, 'click', ()=> {
		api.getRequest('http://localhost:8080/teams', teams => { 
			getAppContext().innerHTML = Teams(teams)
		})
	})
}

function navHeroes() {
	const heroButton = document.querySelector('.nav__heroes');
	events.on(heroButton, 'click', ()=> {
		api.getRequest('http://localhost:8080/heroes', heroes => {
			getAppContext().innerHTML = Heroes(heroes)
		})
	})
}

function navPowers() {
	const powerButton = document.querySelector('.nav__powers');
	events.on(powerButton, 'click', ()=> {
		api.getRequest('http://localhost:8080/powers', powers => {
			getAppContext().innerHTML = Powers(powers)
		})
	})
}

// END NAV FUNCTIONS AT HEADER



// START TEAM FUNCTIONS
function addTeams() {
	events.on(getAppContext(), 'click', ()=> {
		if(event.target.classList.contains('add__team__button')) {
			const teamName = document.querySelector('.add__teamName').value
			const teamImage = document.querySelector('.add__teamImage').value
			const teamRating = document.querySelector('.add__teamRating').value
			api.postRequest('http://localhost:8080/teams/add', {
				teamName : teamName,
				teamImage : teamImage,
				teamRating : teamRating
			}, (teams) => getAppContext().innerHTML = Teams(teams))
		}
	})
}

function viewSingleTeam() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('team__teamName')) {
			api.getRequest(`http://localhost:8080/teams/${event.target.id}`, team => {
				getAppContext().innerHTML = Team(team)
			})
		}
	})
}
// END TEAM FUNCTIONS


// START HERO FUNCTIONS

function addHeroToTeam(){
	events.on(getAppContext(), 'click', () =>{
		if(event.target.classList.contains('add__hero__button')){
			const heroName = document.querySelector('.add__heroName').value
			const heroImage = document.querySelector('.add__heroImage').value
			const heroRating = document.querySelector('.add__heroRating').value
			api.postRequest(`http://localhost:8080/heroes/add/${event.target.id}`, {
				heroName : heroName,
				heroImage : heroImage,
				heroRating : heroRating	
			}, (team) => getAppContext().innerHTML = Team(team) )
		}
	})
}

function viewSingleHero(){
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('hero__heroName')){
			api.getRequest(`http://localhost:8080/heroes/${event.target.id}`, hero => {
        getAppContext().innerHTML = Hero(hero)
			})
		}
	})
}

// END HERO FUNCTIONS

// START POWER FUNCTIONS

function addPowerToHero(){
	events.on(getAppContext(), 'click', () =>{
		if(event.target.classList.contains('add__power__button')){
			const powerName = document.querySelector('.add__powerName').value
			const description = document.querySelector('.add__description').value
			const powerRating = document.querySelector('.add__powerRating').value
        api.postRequest(`http://localhost:8080/powers/add/${event.target.id}`, {
				powerName : powerName,
				description : description,
				powerRating : powerRating
			}, (hero) => getAppContext().innerHTML = Hero(hero))
		}
	})
}

function viewSinglePower() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('power__powerName')) {
			api.getRequest(`http://localhost:8080/powers/${event.target.id}`, power => {
				getAppContext().innerHTML = Power(power)
			})
		}
	})
}

// END HERO FUNCTIONS

function getAppContext() {
	return document.querySelector('#app')
}
