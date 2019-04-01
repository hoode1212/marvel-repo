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
import org.wecancodeit.marvelapi.models.Power;
import org.wecancodeit.marvelapi.models.Team;
import org.wecancodeit.marvelapi.repositories.HeroRepository;
import org.wecancodeit.marvelapi.repositories.PowerRepository;
import org.wecancodeit.marvelapi.repositories.TeamRepository;


@CrossOrigin
@RestController
@RequestMapping("/powers")
public class PowerController {

	@Resource
	PowerRepository powerRepo;
	@Resource
	HeroRepository heroRepo;
	@Resource
	TeamRepository teamRepo;

	@GetMapping("")
	public Collection<Power> getPowers() {
		return (Collection<Power>) powerRepo.findAll();

	}
	
	@GetMapping("/{id}")
	public Power viewSinglePower(@PathVariable Long id) {
		return powerRepo.findById(id).get();
	}

	@PostMapping("/add/{id}")
	public Hero addPower(@PathVariable Long id, @RequestBody String body) throws JSONException{

		JSONObject newPower = new JSONObject(body);
		String powerName = newPower.getString("powerName");
		String description = newPower.getString("description");
		int powerRating = Integer.parseInt(newPower.getString("powerRating"));
		Hero heroToAdd = heroRepo.findById(id).get();
	    powerRepo.save(new Power(powerName, description, powerRating, heroToAdd));
	    heroToAdd = heroRepo.findById(id).get();
	    return heroToAdd;
	}

	
	
//	
//	@PostMapping("/comments/add")
//	public Collection<Team> addPowerComment(@RequestBody String body) throws JSONException {
//		JSONObject newPowerComment = new JSONObject(body);
//		String powerCommentBody = newPowerComment.getString("powerCommentBody");
//		Power power = powerRepo.findByPowerName(newPowerComment.getString("powerCommentPower"));
//		commentRepo.save(new PowerComment(powerCommentBody, power));
//		return (Collection<Team>) teamRepo.findAll();
//	}

}