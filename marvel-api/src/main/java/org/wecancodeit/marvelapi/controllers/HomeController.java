package org.wecancodeit.marvelapi.controllers;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class HomeController {
	
	//@GetMapping("/")
	public String home() {
		return "index";
	}

}
