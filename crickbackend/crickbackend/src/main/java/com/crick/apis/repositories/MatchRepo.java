package com.crick.apis.repositories;

import com.crick.apis.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepo extends JpaRepository<com.crick.apis.entities.Match,Integer> {

    Optional<Match> findByTeamHeading(String teamHeading);

}
