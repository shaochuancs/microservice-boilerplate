package com.shaochuancs.servicespringboot.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "authcode")
public class AuthCode {

    @Id
    public String id;

    public String code;

    public AuthCode(){}

    public AuthCode(String code){
        this.code = code;
    }
}
