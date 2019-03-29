package org.wecancodeit.marvelapi.controllers;


import java.util.Collection;
import java.util.Optional;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/teams")
public class TeamController {

	// Resources
	@Resource
	TeamRepository teamRepo;
	@Resource
	TagRepository tagRepo;
	@Resource
	CommentRepository commentRepo;

	@GetMapping("")
	public Collection<Team> getTeams() {
		return (Collection<Team>) teamRepo.findAll();

	}

	@PostMapping("/add")
	public Collection<Team> addTeam(@RequestBody String body) throws JSONException {
		JSONObject newTeam = new JSONObject(body);
		String teamName = newTeam.getString("teamName");
		String teamImage = newTeam.getString("teamImage");
		int teamRating = Integer.parseInt(newTeam.getString("teamRating"));
		Tag tag = tagRepo.findByTagName(newTeam.getString("teamTag"));
		teamRepo.save(new Team(teamName, teamImage, teamRating, tag));
		return (Collection<Team>) teamRepo.findAll();
	}
	
	@PostMapping("/comments/add")
	public Collection<Team> addTeamComment(@RequestBody String body) throws JSONException {
		JSONObject newTeamComment = new JSONObject(body);
		String teamCommentBody = newTeamComment.getString("teamCommentBody");
		//Team team = teamRepo.findByTeamName(newTeamComment.getString("teamCommentTeam"));
		Team team = teamRepo.findById(Long.parseLong(newTeamComment.getString("teamCommentTeam"))).get();
		commentRepo.save(new TeamComment(teamCommentBody, team));
		return (Collection<Team>) teamRepo.findAll();
	}
}
