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
import org.wecancodeit.marvelapi.models.Team;
import org.wecancodeit.marvelapi.repositories.TeamRepository;
	
@CrossOrigin
@RestController
@RequestMapping("/teams")
public class TeamController {
	
	
	@Resource
	TeamRepository teamRepo;
	
	@GetMapping("")
	public Collection<Team> getTeams() {
		return (Collection<Team>) teamRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Team viewSingleTeam(@PathVariable Long id) {
		return teamRepo.findById(id).get();
	}
	
	@PostMapping("/add")
	public Collection<Team> addTeam(@RequestBody String body) throws JSONException {
		JSONObject newTeam = new JSONObject(body);
		String teamName = newTeam.getString("teamName");
		String teamImage = newTeam.getString("teamImage");
		int teamRating = Integer.parseInt(newTeam.getString("teamRating"));
		teamRepo.save(new Team(teamName, teamImage, teamRating));
		return (Collection<Team>) teamRepo.findAll();
	}
	

//	@PostMapping("/comments/add")
//	public Collection<Team> addTeamComment(@RequestBody String body) throws JSONException {
//		JSONObject newTeamComment = new JSONObject(body);
//		String teamCommentBody = newTeamComment.getString("teamCommentBody");
//		//Team team = teamRepo.findByTeamName(newTeamComment.getString("teamCommentTeam"));
//		Team team = teamRepo.findById(Long.parseLong(newTeamComment.getString("teamCommentTeam"))).get();
//		commentRepo.save(new TeamComment(teamCommentBody, team));
//		return (Collection<Team>) teamRepo.findAll();
//	}
}