package com.futback.backendfut.services;

import java.util.List;
import java.util.Optional;

import com.futback.backendfut.models.User;
import com.futback.backendfut.repository.UserRepository;
import com.futback.backendfut.services.exception.ObjectNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
    

    @Autowired
    private UserRepository repo;


    public List<User> findAll(){
        return repo.findAll();
    }

    public User findById(String id) {
        Optional<User> obj = repo.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }

}
