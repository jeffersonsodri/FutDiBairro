package com.futback.backendfut.config;

import java.util.Arrays;

import com.futback.backendfut.models.User;
import com.futback.backendfut.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        userRepository.deleteAll();

        User maria = new User(null, "Maria Brown", "apelido", "maria@gmail.com");
        User alex = new User(null, "Alex Green", "apelido", "alex@gmail.com");
        User bob = new User(null, "Bob Grey", "apelido", "bob@gmail.com");

        userRepository.saveAll(Arrays.asList(maria, alex, bob));

    }

}
