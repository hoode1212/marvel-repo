import api from './utils/api/api-action'





main()


function main(){
    api.getRequest('/http://localhost:8080/teams', teams => {
        getAppContext().innerHTML = Teams (teams);
    })
}