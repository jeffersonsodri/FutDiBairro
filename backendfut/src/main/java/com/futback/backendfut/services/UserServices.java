package com.futback.backendfut.services;

import java.util.List;

import com.futback.backendfut.models.User;
import com.futback.backendfut.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
    

    @Autowired
    private UserRepository repo;


    public List<User> findAll(){
        return repo.findAll();
    }

}
