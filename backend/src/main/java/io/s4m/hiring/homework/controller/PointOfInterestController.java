package io.s4m.hiring.homework.controller;

import io.s4m.hiring.homework.adapter.model.PointOfInterestModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;
import java.util.concurrent.CompletableFuture;

@RestController
public class PointOfInterestController {

    @GetMapping("/points-of-interest")
    public CompletableFuture<Set<PointOfInterestModel>> listPointsOfInterest() {
        return null;
    }

    @PostMapping("/points-of-interest")
    public CompletableFuture<Void> savePointsOfInterest(@RequestParam("file") MultipartFile file) {
        return null;
    }
}