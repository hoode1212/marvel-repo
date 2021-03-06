package org.wecancodeit.marvelapi.controllers;


import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.marvelapi.models.Hero;
import org.wecancodeit.marvelapi.models.Team;
import org.wecancodeit.marvelapi.repositories.HeroRepository;
import org.wecancodeit.marvelapi.repositories.TeamRepository;

@CrossOrigin
@RestController
@RequestMapping("/heroes")
public class HeroController {
	
	@Resource
	HeroRepository heroRepo;
	
	@Resource 
	TeamRepository teamRepo;
	
	
	@GetMapping("")
	public Collection<Hero> getHeroes() {
		return (Collection<Hero>)heroRepo.findAll();	
	}
	
	@GetMapping("/{id}")
	public Hero viewSingleHero(@PathVariable Long id) {
		return heroRepo.findById(id).get();
	}

	@PostMapping("/add")
	public Collection<Team>addHero(@RequestBody String body) throws JSONException {
	JSONObject newHero = new JSONObject(body);
	String heroName = newHero.getString("heroName");
	String heroImage = newHero.getString("heroImage");
	int heroRating = Integer.parseInt(newHero.getString("heroRating"));
	Team team = teamRepo.findByTeamName(newHero.getString("team"));
	heroRepo.save(new Hero (heroName, heroImage, heroRating, team));
		return (Collection<Team>)teamRepo.findAll();
	}
	

	@PostMapping("/add/{id}")
	public Team addHeroToTeam(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject newHero = new JSONObject(body);
		String heroName = newHero.getString("heroName");
		String heroImage = newHero.getString("heroImage");
		int heroRating = Integer.parseInt(newHero.getString("heroRating"));
		Team teamToAdd = teamRepo.findById(id).get();
		heroRepo.save(new Hero(heroName, heroImage, heroRating, teamToAdd));
		teamToAdd = teamRepo.findById(id).get();
		return teamToAdd;
		
	}


}
	
	
//	
//	@PostMapping("/comments/add")
//	public Collection<Team> addTeamComment(@RequestBody String body) throws JSONException {
//		JSONObject newHeroComment = new JSONObject(body);
//		String heroCommentBody = newHeroComment.getString("heroCommentBody");
//		Hero hero = heroRepo.findByHeroName(newHeroComment.getString("heroCommentHero"));
//		commentRepo.save(new HeroComment(heroCommentBody, hero));
//		return (Collection<Team>) teamRepo.findAll();
//	}

