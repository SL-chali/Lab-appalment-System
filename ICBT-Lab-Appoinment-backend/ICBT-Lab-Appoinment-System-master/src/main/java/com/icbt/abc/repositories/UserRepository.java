package com.icbt.abc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.icbt.abc.entities.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByEmail(String email);
}
