package com.demo.jwt;

import java.security.Key;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	@Value("${jwt.secretKey}")
  private String jwtSecret;
	
  @Value("${jwt.expiration-ms}")
  private Long jwtexpirationMs;

  public String getUsernameFromJwt;
  
   private Key getSigninKey() {
	   return Keys.hmacShaKeyFor(jwtSecret.getBytes());

}
  public String generateToken(String username) {
	  Date dt = new Date();
	 Date expiry = new Date(dt.getTime()+jwtexpirationMs);
	  
	  return  Jwts.builder()
			  .setSubject(username)
			  .setExpiration(expiry)
			  .setIssuedAt(dt)
			  .signWith(getSigninKey(), SignatureAlgorithm.HS256)
			  .compact();

  }
  
  public String getUsernameFromJwt(String Token) {
	  return Jwts.parserBuilder()
			  .setSigningKey(getSigninKey())
			  .build()
			  .parseClaimsJws(Token)
			  .getBody()
			  .getSubject();
  }
    public boolean validateJwt(String Token) {
    	try {
    		Jwts.parserBuilder().setSigningKey(getSigninKey()).build().parseClaimsJwt(Token);
    		return true;
    	}
    	catch(JwtException | IllegalArgumentException e) {
    		
    	 return false;
    }
    }
}
