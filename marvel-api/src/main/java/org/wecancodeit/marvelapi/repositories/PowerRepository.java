package org.wecancodeit.marvelapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.marvelapi.models.Power;

@Repository
public interface PowerRepository extends CrudRepository<Power, Long>{

	Power findByPowerName(String string);

}
