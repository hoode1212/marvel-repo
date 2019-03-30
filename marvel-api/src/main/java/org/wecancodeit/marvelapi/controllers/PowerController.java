package org.wecancodeit.marvelapi.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

	@PostMapping("/add")
	public Collection<Team> addPower(@RequestBody String body) throws JSONException {

		JSONObject newPower = new JSONObject(body);
		String powerTitle = newPower.getString("powerTitle");
		String duration = newPower.getString("duration");
		int powerRating = Integer.parseInt(newPower.getString("powerRating"));
		Hero hero = heroRepo.findByHeroName(newPower.getString("hero"));
		powerRepo.save(new Power(powerTitle, duration, powerRating, hero));
		return (Collection<Team>) teamRepo.findAll();
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