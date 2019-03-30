package org.wecancodeit.marvelapi;

<<<<<<< HEAD



=======
>>>>>>> beadb7a35d987b2b65faf64568b345f04c6ef3e5
import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.marvelapi.models.Hero;
import org.wecancodeit.marvelapi.models.Power;
import org.wecancodeit.marvelapi.models.Team;
import org.wecancodeit.marvelapi.repositories.HeroRepository;
import org.wecancodeit.marvelapi.repositories.PowerRepository;
import org.wecancodeit.marvelapi.repositories.TeamRepository;


@Service
public class Initializer implements CommandLineRunner {
	@Resource
	HeroRepository heroRepo;
	@Resource
	TeamRepository teamRepo;
	@Resource
	PowerRepository powerRepo;

	@Override
	public void run(String... args) throws Exception {
	
			
		Team hero= teamRepo.save(new Team("Avengers", null, 0));
		Team villian= teamRepo.save(new Team("Black Order", null, 0));
		
		Hero hero1 = heroRepo.save(new Hero("Iron Man", null, 0,));
		Hero hero2 = heroRepo.save(new Hero("Ant Man", null, 0,));
		Hero hero3 = heroRepo.save(new Hero("Hulk", null, 0,));
		Hero hero4 = heroRepo.save(new Hero("Captain Marvel", null, 0,));
		Hero hero5 = heroRepo.save(new Hero("Captian America", null, 0,));
		Hero hero6 = heroRepo.save(new Hero("Black Widow", null, 0,));
		Hero hero7 = heroRepo.save(new Hero("Nebula", null, 0,));
		Hero hero8 = heroRepo.save(new Hero("Rocket", null, 0,));
		Hero hero9 = heroRepo.save(new Hero("Thor", null, 0,));
		Hero hero10 = heroRepo.save(new Hero("Hawkeye", null, 0,));
		Hero hero11 = heroRepo.save(new Hero("Okoye", null, 0,));
		Hero hero12 = heroRepo.save(new Hero("Rhodey", null, 0,));
		Hero hero13 = heroRepo.save(new Hero("Black Widow", null, 0,));
		Hero hero14 = heroRepo.save(new Hero("Black Widow", null, 0,));
		Hero hero15 = heroRepo.save(new Hero("Black Widow", null, 0,));
		Hero hero16 = heroRepo.save(new Hero("Black Widow", null, 0,));
		
		
		Power powerZero = powerRepo.save(new Power);
		
		
		powerRepo.save(new Power );
		
		powerRepo.save(new Power);
		
		powerRepo.save(new Power);
		
		powerRepo.save(new Power);
		
		heroRepo.save(new Hero);
		
		heroRepo.save(new Hero);
		
		heroRepo.save(new Hero);
		
		heroRepo.save(new Hero);
		
	    Team teamOne = teamRepo.save);
		
		Hero heroOne= heroRepo.save);
		
		Power powerOne= powerRepo.save(
				new Power);
	
		
		Team = teamRepo.save(
				new Team);
		
		Hero = heroRepo.save(
				new Hero);
		
		powerRepo.save(
				new Power);
		
		teamRepo.save(new Team(strong));
		teamRepo.save(new Team(strong));
		teamRepo.save(new Team(awesome));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(strong));
		teamRepo.save(new Team( awesome));
		teamRepo.save(new Team(smart));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
		teamRepo.save(new Team(cool));
	}

}
