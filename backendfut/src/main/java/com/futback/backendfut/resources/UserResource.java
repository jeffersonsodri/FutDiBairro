package com.futback.backendfut.resources;

import java.util.List;

import com.futback.backendfut.models.User;
import com.futback.backendfut.services.UserServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/users")
public class UserResource {
    
    @Autowired
    private UserServices service;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<User>> findAll(){
        List<User> lista = service.findAll();
        return ResponseEntity.ok().body(lista);
    }


    // @PostMapping(value="path")
    // public User postMethodName(@RequestBody User entity) {
        
    //     return entity;
    // }
    
}
