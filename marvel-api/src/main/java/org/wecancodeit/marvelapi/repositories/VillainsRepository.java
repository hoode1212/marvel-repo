package org.wecancodeit.marvelapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.marvelapi.models.Villains;

public class VillainsRepository {
	@Repository
	public interface HeroRepository extends CrudRepository<Villains, Long>{
		
		Villains findByVillainName(String villainsName);

		

	}

}
