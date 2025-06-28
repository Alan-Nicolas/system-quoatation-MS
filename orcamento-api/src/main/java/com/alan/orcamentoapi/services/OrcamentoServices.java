package com.alan.orcamentoapi.services;

import com.alan.orcamentoapi.entity.Orcamento;
import com.alan.orcamentoapi.repository.OrcamentoRepository;
import com.alan.orcamentoapi.request.OrcamentoPostRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrcamentoServices {
    private final OrcamentoRepository repository;

    public List<Orcamento> listAll () {
        return repository.findAll();
    }

    public Orcamento addQuoatation (OrcamentoPostRequest postRequest){
        return repository.save(Orcamento.builder()
                        .nameClient(postRequest.nameClient())
                        .cpfClient(postRequest.cpfClient())
                        .typeService(postRequest.typeService())
                        .valueService(postRequest.valueService())
                        .description(postRequest.description())
                        .build());
    }
}
