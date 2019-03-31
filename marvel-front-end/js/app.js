import api from './utils/api/api-action'
import events from './utils/events/event-action'
import Teams from './components/Teams'
import Header from './components/Header'



main()

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




// All Nav functions will live here
function navTeams() {
	const teamButton = document.querySelector('.nav__teams');
	events.on(teamButton, 'click', ()=> {
		api.getRequest('/teams', teams => { 
			getAppContext().innerHTML = Teams(teams)
		})
	})
}

function navHeroes() {
	const heroButton = document.querySelector('.nav__heroes');
	events.on(heroButton, 'click', ()=> {
		api.getRequest('/heroes', heroes => {
			getAppContext().innerHTML = Heroes(heroes)
		})
	})
}

function navPowers() {
	const powerButton = document.querySelector('.nav__powers');
	events.on(powerButton, 'click', ()=> {
		api.getRequest('/powers', powers => {
			getAppContext().innerHTML = Powers(powers)
		})
	})
}




//All Team functions will live here
function addTeams() {
	events.on(getAppContext(), 'click', ()=> {
		if(event.target.classList.contains('add__team__button')) {
			const teamName = document.querySelector('.add__teamName').value
			const image = document.querySelector('.add__image').value
			api.postRequest('/teams/add', {
				teamName : teamName,
				image : image
			}, (teams) => getAppContext().innerHTML = Teams(teams))
		}
	})
}

function viewSingleTeam() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('team__teamName')) {
			api.getRequest(`http://localhost:8080/teams ${event.target.teamId}`, team => {
				getAppContext().innerHTML = Team(team)
			})
		}
	})
}
//All Hero functions will live here

function addHeroToTeam(){
	events.on(getAppContext(), 'click', () =>{
		if(event.target.classList.contains('add__hero__button')){
			const heroTitle = document.querySelector('.add__heroName').value
			const image = document.querySelector('.add__heroImage').value
			api.postRequest(`/heroes/add/${event.target.teamId}`, {
				heroName : heroName,
				heroImage : heroImage,	
			}, (team) => getAppContext().innerHTML = Team(team) )
		}
	})
}

function viewSingleHero(){
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('hero__heroName')){
			api.getRequest(`http://localhost:8080/teams ${event.target.heroId}`, hero => {
        getAppContext().innerHTML = Hero(hero)
			})
		}
	})
}

// All song functions will live here

function addPowerToHero(){
	events.on(getAppContext(), 'click', () =>{
		if(event.target.classList.contains('add__power__button')){
			const songTitle = document.querySelector('.add__powerName').value
			const description = document.querySelector('.add__description').value
			const link = document.querySelector('.add__link').value
			api.postRequest(`/powers/add/${event.target.powerId}`, {
				songTitle : songTitle,
				duration : duration,
				link : link
			}, (album) => getAppContext().innerHTML = Album(album))
		}
	})
}

function viewSingleSong() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('power__powerName')) {
			api.getRequest(`http://localhost:8080/teams${event.target.id}`, power => {
				getAppContext().innerHTML = Power(power)
			})
		}
	})
}

function getAppContext() {
	return document.querySelector('#app')
}









