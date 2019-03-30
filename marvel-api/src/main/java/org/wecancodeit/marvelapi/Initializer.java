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

		Team teamZero= teamRepo.save(
				new Team(
						"Avengers", 
						"../images/initializer/Elton John-11.jpg", 
						5
						));
		Hero heroZero= heroRepo.save(
				new Hero(
						"Goodbye Yellow Brick Road", 
						"https://images-na.ssl-images-amazon.com/images/I/61h9curIxYL._SY400_.jpg", 
						10,
						teamZero
						));
		Power powerZero = powerRepo.save(
				new Power(
						"Goodbye Yellow Brick Road", 
						"3:13", 
						10, 
						heroZero
						));
		powerRepo.save(new Power(
						"Funeral for a Friend", 
						"11:09", 
						10, 
						heroZero
						));
		powerRepo.save(new Power(
						"Candle in the Wind", 
						"3:50", 
						10, 
						heroZero
						));
		powerRepo.save(new Power(
						"Bennie and the Jets", 
						"5:23", 
						10, 
						heroZero
						));
		powerRepo.save(new Power(
						"Saturday Night's Alright for Fighting", 
						"4:57", 
						10, 
						heroZero
						));
		heroRepo.save(new Hero(
						"Don't Shoot Me I'm Only The Piano Player",
						"https://d3c0x8onoccsn3.cloudfront.net/400/400/1505502930discog_dontshootme.jpg",
						8,
						teamZero
						));
		heroRepo.save(new Hero(
						"Elton John's Greatest Hits Volume II", 
						"https://d3c0x8onoccsn3.cloudfront.net/400/400/1505502024discog_ghvolume2.jpg",
						5,
						teamZero
						));
		heroRepo.save(new Hero(
						"Blue Moves", 
						"https://d3c0x8onoccsn3.cloudfront.net/400/800/DB1505502117discog_bluemoves.jpg",
						7,
						teamZero
						));
		heroRepo.save(new Hero(
						"Greatest Hits 19702002", 
						"https://i.ebayimg.com/images/g/jaIAAOSwgrZcJoqb/s-l400.jpg",
						2,
						teamZero
						));
		
		Team teamOne = teamRepo.save(
				new Team(
						"John Cena", 
						"../images/initializer/cena.jpg", 
						5
						));
		Hero heroOne= heroRepo.save(
				new Hero(
						"Can't See Me", 
						"https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Cant_See_Me.jpg/220px-Cant_See_Me.jpg", 
						10,
						teamOne
						));
		Power powerOne= powerRepo.save(
				new Power(
						"Basic Thuganomics", 
						"4:01", 
						10, 
						heroOne
						));
		
		
		
		Team mgmt = teamRepo.save(
				new Team("MGMT",
						"../images/initializer/mgmt.jpg",
						7
						));
		Hero oa = heroRepo.save(
				new Hero(
						"Oracular Spectacular",
						"../images/initializer/oa.jpg",
						8,
						mgmt));
		powerRepo.save(
				new Power(
						"Time to Pretend",
						"4:21",
						8,
						oa));
		
		teamRepo.save(new Team("The Beatles", "../images/initializer/beatles.jpg", 5));
		teamRepo.save(new Team("George Michael", "../images/initializer/georgemichael.jpg", 5));
		teamRepo.save(new Team("George Michael", "../images/initializer/michael_cera.jpg", 5));
		teamRepo.save(new Team("Bob Ross", "../images/initializer/bobross.jpg", 5));
		teamRepo.save(new Team("Van Gogh", "https://www.thoughtco.com/thmb/P9Mhc4RYHi8dgK5sqDTCW5HhpK0=/400x400/filters:no_upscale():max_bytes(150000):strip_icc()/SueBond-13VanGoghSelfP-Stra-56a6e35b5f9b58b7d0e54bca.jpg", 1));
		teamRepo.save(new Team("GWAR", "https://pbs.twimg.com/profile_images/636793344513974272/FspNM2JA_400x400.jpg", 666));
		teamRepo.save(new Team("Jonas Brothers", "https://pbs.twimg.com/profile_images/1105726641895100416/ZIa6THm7_400x400.png", 3));
		teamRepo.save(new Team("BTS", "https://pbs.twimg.com/profile_images/1012002776954621955/7tnbbhbH_400x400.jpg", 10));
		teamRepo.save(new Team("LMFAO","https://www.hotnewhiphop.com/image/500x500/cover/1342213215_2d367a6dde08e07b7350ef4af2016661.jpg/8a9ca32b863478032c0decb6a76c2dca/1342213215_lmfao.jpg", 8));
		teamRepo.save(new Team("Prison Mike", "../images/initializer/prisonmike.jpg", 6));
		teamRepo.save(new Team("Nas", "../images/initializer/nas.jpg", 10));
		teamRepo.save(new Team("DJ Tanner", "../images/initializer/djt.jpg", 6));
		teamRepo.save(new Team("Led Zeppelin", "../images/initializer/led.jpg", 10));
		teamRepo.save(new Team("Pink Floyd", "../images/initializer/pf.jpg", 10));
		teamRepo.save(new Team("Queen", "../images/initializer/queen.jpg", 10));
		teamRepo.save(new Team("Fleetwood Mac", "../images/initializer/fleet.jpg", 10));
		teamRepo.save(new Team("Cream", "../images/initializer/cream.jpg", 10));
		teamRepo.save(new Team("Velvet Underground", "../images/initializer/velvet.jpg", 10));
		teamRepo.save(new Team("Rush", "../images/initializer/rush.jpg", 10));
		teamRepo.save(new Team("Wu-Tang Clan", "../images/initializer/wu.png", 10));
		teamRepo.save(new Team("Jon Lajoie", "../images/initializer/jon.jpg", 10));
		teamRepo.save(new Team("Flight of the Conchords", "../images/initializer/flight.jpg", 10));
		teamRepo.save(new Team("Prestige Worldwide", "../images/initializer/pw.jpg", 10));
		teamRepo.save(new Team("Faith + 1", "../images/initializer/f1.jpg", 10));
		teamRepo.save(new Team("2gether", "../images/initializer/2gether.jpg", 10));
	}

}