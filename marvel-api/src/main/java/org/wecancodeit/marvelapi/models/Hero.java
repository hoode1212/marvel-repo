package org.wecancodeit.marvelapi.models;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Hero {

	@Id
	@GeneratedValue
	private Long heroId;
	private String heroName;
	@Lob
	private String heroImage;
	private int heroRating;
	@ManyToOne
	@JsonIgnore
	private Team team;
	@OneToMany(mappedBy = "hero")
	private Collection<Power> powers;
	
	public Hero() {
	}

	public Hero(String heroName, String heroImage, int heroRating, Team team) {
		this.heroName = heroName;
		this.heroImage = heroImage;
		this.heroRating = heroRating;
		this.team = team;
		this.powers = new ArrayList<Power>();
	}

	public Team getTeam() {
		return team;
	}

	public Collection<Power> getPowers() {
		return powers;
	}

	public Long getHeroId() {
		return heroId;
	}

	public String getHeroName() {
		return heroName;
	}

	public String getHeroImage() {
		return heroImage;
	}

	public int getHeroRating() {
		return heroRating;
	}

	@Override
	public String toString() {
		return "Hero [heroName=" + heroName + ", heroImage=" + heroImage + ", heroRating=" + heroRating
				+ ", team=" + team + "]";
	}

}
