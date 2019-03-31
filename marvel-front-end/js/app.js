import api from './utils/api/api-action'
import events from './utils/events/event-action'
import Teams from './components/Teams'
import Header from './components/Header'

viewAllTeams()
Header()

function viewAllTeams() {
  api.getRequest('http://localhost:8080/teams', teams => {
    getAppContext().innerHTML = Teams(teams);
  }) 
}

function getAppContext() {
  return document.querySelector("#app")
}


