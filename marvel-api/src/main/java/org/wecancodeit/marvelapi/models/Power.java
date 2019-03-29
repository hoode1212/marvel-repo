package org.wecancodeit.marvelapi.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Power {

	@Id
	@GeneratedValue
	private Long powerId;
	private String powerName;
	private String description;
	private int powerRating;
	@ManyToOne
	@JsonIgnore
	private Hero hero;


	public Power() {
	}

	public Power(String powerName, String description, int powerRating, Hero hero) {
		this.powerName = powerName;
		this.description = description;
		this.powerRating = powerRating;
		this.hero = hero;
	}

	public Long getPowerId() {
		return powerId;
	}

	public String getPowerName() {
		return powerName;
	}

	public String getDescription() {
		return description;
	}

	public int getPowerRating() {
		return powerRating;
	}
	
	public Hero getHero() {
		return hero;
	}


	@Override
	public String toString() {
		return "Power [powerName=" + powerName + ", description=" + description + ", powerRating=" + powerRating + ", hero="
				+ hero + "]";
	}
}
