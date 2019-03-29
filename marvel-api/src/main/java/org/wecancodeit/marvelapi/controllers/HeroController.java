package org.wecancodeit.marvelapi.controllers;


import java.util.Collection;

import javax.annotation.Resource;
import javax.swing.text.html.HTML.Tag;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;





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

	@PostMapping("/add")
	public Collection<Team>addHero(@RequestBody String body) throws JSONException {
	JSONObject newHero = new JSONObject(body);
	String heroName = newHero.getString("heroName");
	String heroImage = newHero.getString("heroImage");
	int heroRating = Integer.parseInt(newHero.getString("heroRating"));
	Team team = teamRepo.findByTeamName(newHero.getString("team"));
	Tag tag = tagRepo.findByTagName(newHero.getString("heroTag"));
	heroRepo.save(new Hero (heroName, heroImage, heroRating, team, tag));
		return (Collection<Team>)teamRepo.findAll();
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
}
