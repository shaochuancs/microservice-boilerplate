package com.shaochuancs.servicespringboot.db;

import com.shaochuancs.servicespringboot.model.AuthCode;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthCodeRepository extends MongoRepository<AuthCode, String> {
    public void deleteAuthCodeByCode();
}
