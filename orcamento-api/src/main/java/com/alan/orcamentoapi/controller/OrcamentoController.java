package com.alan.orcamentoapi.controller;

import com.alan.orcamentoapi.entity.Orcamento;
import com.alan.orcamentoapi.request.OrcamentoPostRequest;
import com.alan.orcamentoapi.services.OrcamentoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/orcamento")
public class OrcamentoController {

    @Autowired
    private OrcamentoServices orcamentoServices;

    @GetMapping
    public ResponseEntity<List<Orcamento>> listQuoatation () {
        return ResponseEntity.ok(orcamentoServices.listAll());
    }

    @PostMapping
    public ResponseEntity<Orcamento> addQuoatation (@RequestBody OrcamentoPostRequest postRequest) {
        orcamentoServices.addQuoatation(postRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
