package org.wecancodeit.marvelapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.marvelapi.models.Hero;

@Repository
public interface HeroRepository extends CrudRepository<Hero, Long>{
	
	Hero findByHeroName(String heroName);

	

}
