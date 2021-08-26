package com.futback.backendfut.dto;

import java.io.Serializable;

import com.futback.backendfut.models.User;

public class UserDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String id;
    private String name;
    private String apelido;
    private String email;

    public UserDTO() {
    }

    public UserDTO(User obj) {
        obj.setId(id);
        obj.setName(name);
        obj.setApelido(apelido);
        obj.setEmail(email);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
