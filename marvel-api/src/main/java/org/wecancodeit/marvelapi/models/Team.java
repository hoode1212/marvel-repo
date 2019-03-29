package org.wecancodeit.marvelapi.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;


@Entity
public class Team {
	
	@Id
	@GeneratedValue
	private Long teamId;
	private String teamName;
	@Lob
	private String teamImage;
	private int teamRating;
	@OneToMany(mappedBy="team")
	private Collection <Hero> heroes;
	
	public Team() {}
	
	
	public Team(String teamName, String teamImage, int teamRating) {
		this.teamName = teamName;
		this.teamImage = teamImage;
		this.teamRating = teamRating;
		this.heroes = new ArrayList<Hero>();
	}
	

	public Long getTeamId() {
		return teamId;
	}


	public String getTeamName() {
		return teamName;
	}


	public String getTeamImage() {
		return teamImage;
	}


	public int getTeamRating() {
		return teamRating;
	}


	public Collection<Hero> getHeroes() {
		return heroes;
	}

	@Override
	public String toString() {
		return "Team [teamId=" + teamId + ", teamName=" + teamName + ", teamImage=" + teamImage + ", teamRating="
				+ teamRating + "]";
	}



	

}