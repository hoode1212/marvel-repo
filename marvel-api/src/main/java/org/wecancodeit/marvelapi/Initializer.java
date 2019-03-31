package org.wecancodeit.marvelapi;

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
	
			
		Team hero = teamRepo.save(new Team("Avengers","https://i3.cpcache.com/product/1288169103/avengers_assemble_wall_art.jpg?height=400&width=400&qv=90&AttributeValue=Poster&Size=16x16", 0));
		Team blackOrder = teamRepo.save(new Team("Black Order","https://cdnb.artstation.com/p/assets/images/images/011/162/079/20180604190150/smaller_square/everton-d-sousa-the-black-order-4.jpg?1528156911", 0));
		
		Hero hero1 = heroRepo.save(new Hero("Iron Man", "https://pbs.twimg.com/profile_images/990945984682381312/b_mxZW2H_400x400.jpg", 0, hero));
		Hero hero2 = heroRepo.save(new Hero("Ant Man","https://yt3.ggpht.com/a-/AN66SAyzOISTN03zxy1Rjrj8J2a1JOKXZhfzUU15Dg=s900-mo-c-c0xffffffff-rj-k-no" , 0, hero));
		Hero hero3 = heroRepo.save(new Hero("Hulk","https://i.dlpng.com/static/png/321009_thumb.png", 0, hero));
		Hero hero4 = heroRepo.save(new Hero("Captain Marvel","https://i.pinimg.com/736x/56/1f/fa/561ffaa91f620c85870bcbcf4fbc3ded.jpg", 0, hero));
		Hero hero5 = heroRepo.save(new Hero("Captian America","http://images6.fanpop.com/image/photos/33500000/Captain-America-iceprincess7492-33552029-400-400.jpg" , 0, hero));
		Hero hero6 = heroRepo.save(new Hero("Black Widow","https://assets.change.org/photos/6/hh/yu/txhHYUBtQvAHInL-400x400-noPad.jpg?1528429710", 0, hero));
		Hero hero7 = heroRepo.save(new Hero("Nebula","https://d2juyu303oh9b6.cloudfront.net/image/b1d570c732f45b53965da513bd16f227.jpg?&cx=147&cy=0&cw=400&ch=400&icq=80&sig=4d8aeb18643ee355a6484a5d616a63f2", 0, hero));
		Hero hero8 = heroRepo.save(new Hero("Rocket","https://pbs.twimg.com/profile_images/3489633985/8e390b7195bcd53237160df870dbf7fb_400x400.jpeg", 0, hero));
		Hero hero9 = heroRepo.save(new Hero("Thor","https://imgc.allpostersimages.com/img/print/u-g-Q1BXG860.jpg?w=400&h=400", 0, hero));
		Hero hero10 = heroRepo.save(new Hero("Hawkeye","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3V7da32s15xm5S_n5A_HfbEzfouOFrcFJo2EM-zyBsD0Lf0wIA", 0, hero));
		Hero hero11 = heroRepo.save(new Hero("Okoye","https://www.picclickimg.com/d/l400/pict/132652846327_/Avengers-Infinity-War-Okoye-Movie-Poster-Fridge-Magnet.jpg", 0, hero));
		Hero hero12 = heroRepo.save(new Hero("War Machine","https://i.pinimg.com/originals/3e/5e/54/3e5e54f4bba68792e1ba31b7140e26ab.jpg", 0, hero));
		Hero hero13 = heroRepo.save(new Hero("Thanos", "https://pbs.twimg.com/profile_images/992168535039381504/rlneO9iC_400x400.jpg", 10, blackOrder));
		Hero hero14 = heroRepo.save(new Hero("Ebony Maw", "https://vignette.wikia.nocookie.net/marveldatabase/images/9/97/Infinity_Vol_1_6_Generals_Variant_Textless.jpg/revision/latest?cb=20131025202634", 7, blackOrder));
		Hero hero15 = heroRepo.save(new Hero("Supergiant", "https://vignette.wikia.nocookie.net/marveldatabase/images/0/03/Infinity_Vol_1_1_Generals_Variant_Textless.jpg/revision/latest?cb=20130516195933", 8, blackOrder));
		Hero hero16 = heroRepo.save(new Hero("Proxima Midnight", "https://upload.wikimedia.org/wikipedia/en/b/bd/Infinity_part_5_of_6_1-5_Proxima_Midnight.jpg", 7, blackOrder));
		Hero hero17 = heroRepo.save(new Hero("Black Dwarf", "https://upload.wikimedia.org/wikipedia/en/b/b5/Black_Dwarf.jpg", 6, blackOrder));
		Hero hero18 = heroRepo.save(new Hero("Corvus Glaive", "https://upload.wikimedia.org/wikipedia/en/2/2b/Corvus_Glaive.jpg", 6, blackOrder));

		powerRepo.save(new Power("flying", "pretty self descriptive", 5, hero1));
		powerRepo.save(new Power("genius", "is really smart", 5, hero1));
		powerRepo.save(new Power("I am Groot", "I am Groot", 5, hero6));
		powerRepo.save(new Power("life", "perfectly balanced", 5, hero13));
		powerRepo.save(new Power("precision", "never misses target", 5, hero10));
		powerRepo.save(new Power("strongest there is", "infinite strength", 5, hero3));
		
		
	}
}
