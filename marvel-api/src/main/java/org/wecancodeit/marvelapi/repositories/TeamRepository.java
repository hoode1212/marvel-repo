package org.wecancodeit.marvelapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.marvelapi.models.Team;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long>{

	Team findByTeamName(String teamName);


}
