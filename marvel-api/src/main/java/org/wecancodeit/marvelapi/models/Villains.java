package org.wecancodeit.marvelapi.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;



	
	@Entity
	public class Villains {

		@Id
		@GeneratedValue
		private Long villainsId;
		private String villainsName;
		@Lob
		private String villainsImage;
		private int villainsRating;
		@ManyToOne
		@JsonIgnore
		private Team team;
		@OneToMany(mappedBy = "villains")
		private Collection<Power> powers;
		
		public Villains() {}

		public Villains(String villainsName, String villainsImage, int villainsRating, Team team) {
			this.villainsName = villainsName;
			this.villainsImage = villainsImage;
			this.villainsRating = villainsRating;
			this.team = team;
			this.powers = new ArrayList<Power>();
		}

		public Team getTeam() {
			return team;
		}

		public Collection<Power> getPowers() {
			return powers;
		}

		public Long getVillainsId() {
			return villainsId;
		}

		public String getVillainsName() {
			return villainsName;
		}

		public String getVillainsImage() {
			return villainsImage;
		}

		public int getVillainsRating() {
			return villainsRating;
		}

//		@Override
//		public String toString() {
//			return "Hero [heroName=" + heroName + ", heroImage=" + heroImage + ", heroRating=" + heroRating
//					+ ", team=" + team + "]";
//		}

	}


